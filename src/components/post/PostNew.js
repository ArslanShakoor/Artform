import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from './postValidate';
import _ from 'lodash';
import postFields from './postFields';
import field from '../../utils/field';
import { connect } from 'react-redux';

class PostNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.location.state.item
    };
  }
  getFormatDate = (val, par) => {
    let cts = val;
    if (cts) {
      return new Date(cts).toLocaleDateString('en-US');
    }
  };

  getFormatTime = date => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  renderFields() {
    return _.map(postFields, ({ name, label, type, req, design, rows }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          design={design}
          rows={rows}
          req={req}
          component={field}
        />
      );
    });
  }

  onCancel = () => {
    this.props.history.push({
      pathname: '/',
      state: { item: this.state.item }
    });
  };

  // invoked the actions on pressing the search button and inovke the call back function
  async onCreatePost(values) {
    values.time = new Date();
    values.replies = [];
    await this.setState({
      item: [...this.state.item, values]
    });

    this.props.history.push({
      pathname: '/postdetail',
      state: { item: this.state.item }
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Create New Post</h1>
        <div className="form">
          <form onSubmit={handleSubmit(this.onCreatePost.bind(this))}>
            <div>{this.renderFields()}</div>
            <div className="btn-new-div">
              <button
                onClick={this.onCancel}
                type="button"
                className="btn btn-lg btn-danger btn-pad"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-lg btn-success pull-right btn-pad"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default reduxForm({
  validate,
  form: 'inquiryForm'
})(connect(null, null)(PostNew));
