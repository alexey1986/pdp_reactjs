import React, { Component } from 'react';
import NewsAPI from 'newsapi';
import { DebounceInput } from 'react-debounce-input';
import ArticlesList from './articles-list';
import SelectedArticle from './selected-article';
import Categories from './categories';
import '../assets/styles/components/articles.css';

const API_KEY = new NewsAPI('204141cf2b5443618d7531afb82b6bac');

class Articles extends Component {
  state = {
    articles: [],
    category: '',
    isLoading: true
  }
  
  handleChangeCategory = e => {
    const category = e.target.innerText.toLowerCase();
    this.getNews(category)
      .then(() => {
        this.selectFirstArticle();
        this.setState({ category: category});
      })
      .catch((this.errorHandler));
  }

  handleSearchByKeyWord = e => {
    this.getNews(this.state.category, e.target.value)
      .then(() => this.selectFirstArticle())
      .catch((this.errorHandler));
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
    })
    .then(response => {
        this.setState({
          articles: response.articles
        });
      }
    )
    .catch((this.errorHandler));
  }

  errorHandler(error) {
    console.error(error);
  }

  componentDidMount() {
    this.getNews()
      .then(() => {
        // hide loader
        this.setState({isLoading: false});
        // show first article as default
        this.selectFirstArticle();
      })
      .catch((this.errorHandler));
  }
  
  render() {
    const { articles, article, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border mt-4" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-4">
            {/* Categories */}
            <Categories handleClick={this.handleChangeCategory} />
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
            <ArticlesList articles={articles} handleClick={this.selectArticle} />
          </aside>
          <div className="col-8">
            <SelectedArticle article={article} />
          </div>
        </div>
      </div>  
    )
  }
}

export default Articles;
