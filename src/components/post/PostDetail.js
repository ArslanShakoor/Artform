import React, { Component } from 'react';
import update from 'react-addons-update';
import _ from 'lodash';
import field from '../utils/form/field';
import renderForm from '../utils/form/renderForm';
import formatDate from '../utils/calender/formatDate';
import formatTime from '../utils/calender/formatTime';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import validate from './postValidate';

import postReplyFields from './postReplyFields';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.location.state.item
    };
  }

  postDetail = list => {
    console.log(list);
    return _.map(list, post => {
      return (
        <div className="detail-page-post" key={Math.random()}>
          <div className="row">
            <div className="col-md-9">
              <div className="title">Post Title: {post.title}</div>
              <div className="user">
                {' '}
                By:{post.user ? post.user : 'Anonymous'}
              </div>
              <div className="date">
                On: {formatDate(post.time)} {formatTime(post.time)}
              </div>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                onClick={this.onCancel}
                className="btn btn-lg btn-primary btn-back-primary"
              >
                Back to Post
              </button>
            </div>
          </div>
          <div className="message">message:{post.message}</div>
        </div>
      );
    });
  };
  postReplies = list => {
    return _.map(list, reply => {
      return (
        <div className="post-replies" key={Math.random()}>
          <div className="reply-user">{reply.user}</div>
          <div className="post-message">{reply.message}</div>
          <hr className="hr-dotted" />
        </div>
      );
    });
  };
  findIndex = () => {
    const index = this.state.item
      ? this.state.item.length - 1
      : this.props.location.state.item;

    return index;
  };
  onSubmitReply = async values => {
    this.props.reset();
    const index = this.findIndex();

    const allItems = this.state.item[index].replies.concat([values]);
    let newTodo = update(this.state.item, {
      [index]: {
        $set: {
          ...this.state.item[index],
          replies: allItems
        }
      }
    });

    await this.setState({
      item: newTodo
    });
    this.child.reset();
  };

  onCancel = () => {
    this.props.history.push({
      pathname: '/',
      state: { item: this.state.item }
    });
  };
  render() {
    const { handleSubmit } = this.props;
    const index = this.findIndex();

    return (
      <div>
        <h1>Post Details</h1>

        {this.postDetail([this.state.item[index]])}
        <hr className="hr-dotted" />
        <div className="post-response">
          <span className="post-response-label">Post response</span>
          {this.postReplies(this.state.item[index].replies)}
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(this.onSubmitReply.bind(this))}>
            <div className="row">
              <div className="col-md-8 col-xs-12">
                {renderForm(postReplyFields)}
              </div>
              <div className="col-md-4 col-xs-12 vcenter">
                <button
                  type="submit"
                  className="btn btn-lg btn-success btn-reply"
                >
                  Reply
                </button>
                <hr className="reply-back-hr" />
                <button
                  type="button"
                  onClick={this.onCancel}
                  className="btn btn-lg btn-primary btn-back"
                >
                  Back to Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'replyfield'
})(connect(null, null)(PostDetail));
