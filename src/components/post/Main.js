import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './css/index.css';
import formatDate from '../utils/calander/formatDate';
import formatTime from '../utils/calander/formatTime';
import arrow from '../../images/play-arrow.png';
class Main extends Component {
  constructor(props) {
    super(props);
    let item;
    if (this.props.location.state) {
      item = this.props.location.state.item;
    } else {
      item = [];
    }
    this.state = {
      item: item
    };
  }
  handleClick = () => {
    this.props.history.push({
      pathname: '/newpost',
      state: { item: this.state.item }
    });
  };
  postData = list => {
    return _.map(list, post => {
      return (
        <div className="post-detail " key={list.indexOf(post)}>
          <Link
            to={{
              pathname: '/postdetail',
              state: {
                item: this.state.item,
                index: list.indexOf(post)
              }
            }}
          >
            <div className="row">
              <div className="col-md-11">
                <div className="title">Post Title: {post.title}</div>
                <span className="user">
                  By: {post.user ? post.user : 'Anonymous'}
                </span>
                <span className="comment">
                  {this.comments(post.replies.length)}
                </span>
                <span className="date">
                  Last Updated:
                  {formatDate(post.time)} @ {formatTime(post.time)}
                </span>
              </div>
              <div className="col-md-1 arrow">
                <img src={arrow} className="img-arrow" alt="forward" />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  comments = length => {
    if (length < 1) {
      return null;
    } else if (length === 1) {
      return `${length} comment`;
    } else {
      return `${length} comments`;
    }
  };

  addFirstMessage = () => {
    if (this.props.location.state == null) {
      return (
        <div className="first-message">
          There are current no posts ...add one
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="main">
        <h1>The Fairygodboss Message Board</h1>
        {this.addFirstMessage()}
        <div className="post-">{this.postData(this.state.item)}</div>
        <button
          className="btn btn-primary btn-lg
           btn-new-post"
          onClick={this.handleClick}
          type="button"
        >
          Create New Post
        </button>
      </div>
    );
  }
}

export default Main;
