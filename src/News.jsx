// News.js
import NewsUpdate from './NewsUpdate';
import React, { Component } from 'react';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }


  // Fetching news from NewsAPI
  async fetchNews() {
    this.setState({ loading: true });
    const apiKey = '89bfa66a3fed4046b950d4d76fc7da56';
    let url;
    if (this.props.query) {
      url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${apiKey}&page=${this.state.page}&pageSize=12`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=12`;
    }
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  async componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category || prevProps.query !== this.props.query || prevState.page !== this.state.page) {
      this.fetchNews();
    }
  }

  nextClick = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousClick = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    return (
      <div>
        <div className='container my-3'>
          {/* Previous and next button at top */}
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.previousClick}>Previous</button>
            <button type='button' className='btn btn-dark' onClick={this.nextClick}>Next</button>
          </div>
          <h2 className='text-center'>TOP HEADLINES</h2>
          {/* The spinner for loading contents */}
          {this.state.loading && <Spinner />}
          <div className='row'>
            {this.state.articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsUpdate
                    title={element.title}
                    newsUrl={element.url}
                    description={element.description ? element.description.slice(0, 80) : "No description available."}
                    imgUrl={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>
          
           {/* The spinner for loading contents */}

          {this.state.loading && <Spinner />}

          {/* Previous and next button at bottom */}
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.previousClick}>Previous</button>
            <button type='button' className='btn btn-dark' onClick={this.nextClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
