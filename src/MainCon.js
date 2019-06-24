import React from "react";
import Axios from "axios";
import './MainCon.css';
export default class MainCon extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      index: 0
    };
    this.pathMap = {
      总览: "MainCon",
      IT: "IT",
      数码: "Digital",
      软件: "Software",
      游戏: "Game",
      iOS: "iOS",
      安卓: "Android",
      系统: "System",
      智能: "Intelligence",
      科学: "Science"
    };
    this.loadNewsList();
  }
  loadNewsList() {
    let { items, index } = this.state;
    Axios.get("/api/getNewsList", {
      params: {
        startIndex: index
      }
    }).then(res => {
      let addNews = [];
      for (let i = 0; i < res.data.length; i++) {
        let newTime = new Date(res.data[i].newsTime);
        res.data[i].time = ` ${newTime.getFullYear()}-${newTime.getMonth() +
          1}-${newTime.getDate()} 
                ${newTime.getHours()}:${newTime.getMinutes()}:${newTime.getSeconds()}`;
        res.data[i].firstTag = this.pathMap[res.data[i].firstTag];
        addNews.push(res.data[i]);
      }
      this.setState({
        index: index + 10,
        items: items.concat(addNews)
      });
    });
  }
  render() {
    return (
      <div className="news-list">
        {this.state.items.map(item => {
          return (
            <div className="news-item">
              <img className="news-img" src={`/newsSrc/${item.newsId}-0.jpg`} alt=""/>
              <div className="news-title">
                <p>{item.title}</p>
                <span className="news-time">{item.time}</span>
                <span className="news-comment">{item.commentNum}评论</span>
              </div>
            </div>
          )
        })}
        <div className="more" onClick={()=>{this.loadNewsList()}}>加载更多</div>
      </div>
    )
  }
}