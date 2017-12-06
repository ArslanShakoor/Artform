import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './css/index.css';
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
                  {this.getFormatDate(post.time)} @{' '}
                  {this.getFormatTime(post.time)}
                </span>
              </div>
              <div className="col-md-1 arrow">
                <img src={arrow} className="img-arrow" />
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
