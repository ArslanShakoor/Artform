import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import './css/index.css';
import * as actions from '../../actions';
import renderForm from '../utils/form/renderForm';
import userBioField from './userBioField';
import validate from './userValidate';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: true,
      title: true
    };
  }

  async componentDidMount() {
    const fetch = await this.props.fetchUser();
    this.handleInitialize();
  }

  handleInitialize() {
    const user = this.props.user[0];

    const initData = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      title: user.title,
      description: user.description
    };

    this.props.initialize(initData);
  }

  stateMethod = state => {
    this.setState({ [state]: false });
  };

  userTitleField = handleSubmit => {
    return (
      <div className="section">
        <form onSubmit={handleSubmit(this.onCreatePost.bind(this))}>
          <div>{renderForm(userBioField.slice(3, 5))}</div>

          <button className="btn btn-success pull-right button-all">
            save
          </button>
        </form>
      </div>
    );
  };

  userBioField = handleSubmit => {
    return (
      <div className="section">
        <form onSubmit={handleSubmit(this.onCreatePost.bind(this))}>
          <div>{renderForm(userBioField.slice(0, 3))}</div>

          <button
            type="submit"
            className="btn btn-success pull-right button-all"
          >
            save
          </button>
        </form>
      </div>
    );
  };

  userBioDetail = users => {
    return _.map(users, user => {
      return (
        <div className="section">
          <div className="value"> First Name: {user.first_name}</div>
          <div className="value"> Last Name: {user.last_name}</div>
          <div className="value"> Email: {user.email}</div>
          <button
            onClick={() => this.stateMethod('bio')}
            className="btn btn-primary pull-right button-all"
          >
            Edit
          </button>
        </div>
      );
    });
  };
  userTitleDetail = users => {
    return _.map(users, user => {
      return (
        <div className="section">
          <div className="value"> title: {user.title}</div>
          <div className="value"> description: {user.description}</div>
          <button
            onClick={() => this.stateMethod('title')}
            className="btn btn-primary pull-right button-all"
          >
            Edit
          </button>
        </div>
      );
    });
  };

  onCreatePost = values => {
    this.props.updateUser(values);
    this.setState({
      bio: true,
      title: true
    });
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.user);
    console.log(this.state.bio);

    return (
      <div class="main">
        <h1>Artform profile</h1>
        {this.state.bio
          ? this.userBioDetail(this.props.user)
          : this.userBioField(handleSubmit)}

        {this.state.title
          ? this.userTitleDetail(this.props.user)
          : this.userTitleField(handleSubmit)}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default reduxForm({
  validate,
  form: 'inquiryForm'
})(connect(mapStateToProps, actions)(Main));
