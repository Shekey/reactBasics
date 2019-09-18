import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
// eslint-disable-next-line
import css from './scss/_style-all.scss';

//COMPONENTS

import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {
  state = {
    news: JSON,
    filtered: []
  }

  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({ filtered: filtered });
  }

  render(){
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news;
    return (
      <div className='wrapper'>
        <Header keywords={this.getKeyword}/>
        <NewsList news= {newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          <h3 className='news__title-main'>The news are:</h3>
        </NewsList>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
