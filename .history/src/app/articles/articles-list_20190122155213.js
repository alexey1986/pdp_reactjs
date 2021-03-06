import React, { Component } from 'react';
import NewsAPI from 'newsapi';
import { DebounceInput } from 'react-debounce-input';
import Button from './button.js';
import Article from './article.js';
import SelectedArticle from './selected-article.js';
import './style.css';

const API_KEY = new NewsAPI('204141cf2b5443618d7531afb82b6bac');
const CATEGORIES = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

class Articles extends Component {
  state = {
    articles: [],
    article: null,
    category: '',
    isLoading: true
  }
  
  handleChangeCategory = e => {
    const category = e.target.innerText.toLowerCase();
    this.getNews(category)
      .then(() => {
        this.selectFirstArticle();
        this.setState({ category: category});
      });
  }

  handleSearchByKeyWord = e => {
    this.getNews(this.state.category, e.target.value)
      .then(() => this.selectFirstArticle());
  }

  selectArticle = selected => {
    this.setState({
      article: selected
    });
  };

  selectFirstArticle = () => {
    this.selectArticle(this.state.articles[0]);
  }

  getNews(category, q) {
    return API_KEY.v2.topHeadlines({
      country: 'us',
      category: category || '',
      q: q || '' // keywords or a phrase to search for
    }).then(response => {
        this.setState({
          articles: response.articles
        });
      }
    );
  }

  componentDidMount() {
    this.getNews().then(() => {
      // hide loader
      this.state.isLoading = !this.state.isLoading;
      // show first article as default
      this.selectFirstArticle();
    });
  }
  
  render() {
    const { articles, article, isLoading } = this.state;

    if (isLoading) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-4">
            {/* Categories */}
            <h2>Chose category:</h2>
            <div className="btn-group" role="group">
              {CATEGORIES.map((category, i) => <Button key={"cat_" + i} title={category} handleClick={this.handleChangeCategory} />)}
            </div>
            {/* Search field */}
            <div className="form-group">
              <label>Search news by key words:</label>
              <DebounceInput
                className="form-control"
                minLength={2}
                debounceTimeout={300}
                onChange={this.handleSearchByKeyWord} />
            </div>            
            {/* articles list */}
            <ul className="list-unstyled">
              {articles.map((article, index) => (
                <li key={index + "_" + article.source.id}>
                  <Article article={article} handleClick={this.selectArticle} />
                </li>
              ))}
            </ul>
          </aside>
          <div className="col-8">
            {article && (
              <SelectedArticle article={article} />
            )}
          </div>
        </div>
      </div>  
    )
  }
}

export default Articles;
