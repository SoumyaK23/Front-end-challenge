/* This file contains functions that preload the page with movies list and genres.
When searched by name and year, results should be displayed */ 

import React from "react";
import styled from 'styled-components';

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

import Bars from "../../images/bars.png";
import Times from "../../images/times.png";

export default class Discover extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      menuOpen: false,
      keyword: '',
      year: 0,
      results: [],
      totalCount: 0,
      genres: [ /* get some genres as example */
        {id: 28, name: 'Action'},
        {id: 12, name: 'Adventure'},
        {id: 16, name: 'Animation'},
        {id: 35, name: 'Comedy'},
        {id: 80, name: 'Crime Film'},
        {id: 99, name: 'Documentary'},
        {id: 10, name: 'Drama'},
        {id: 14, name: 'Family'},
        {id: 36, name: 'History'},
        {id: 15, name: 'TV Movie'},
      ],
      ratings: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languages: [
        { id: 'EN', name: 'English' },
        { id: 'he-IN', name: 'Hindi' },
        { id: 'zh-CN', name: 'Chinese' },
        { id: 'FR', name: 'French' },
        { id: 'ES', name: 'Spanish' }
      ]
    };
    this.openMenu = this.openMenu.bind(this)
  }

  // function to preload genre list and trending movies when page loads
  async componentDidMount() {
    // preload genre list
    const genresList = await fetcher.getGenresList();
    this.setState({ genreOptions: genresList });

    // prelaod trending movies
    const data = await fetcher.getTrendingMovies();
    this.setState({ results: data.results, totalCount: data.total_results }); 
  }

  // function to trigger the API request and load the search results based on the name and year given as parameters
  async searchMovies(keyword, year) {
    const data = await fetcher.getMovies(keyword, year);
    if (data != undefined) {
      this.setState({
        results: data.results,
        totalCount: data.total_results
      });
    } else {
      this.setState({
        results: [],
        totalCount: 0
      });
    }
  }

  openMenu() {
    const links = document.querySelector('#navbar')
    const menuOpen = this.state
    console.log(menuOpen);

    if (!menuOpen.menuOpen) {
      links.style.display = 'block'
      this.setState({ menuOpen: true })
    } else {
      links.style.display = 'none'
      this.setState({ menuOpen: false })
    }

  }

  render () {
    const { genres, languages, ratings, totalCount, results, menuOpen } = this.state;

    return (
      <>
      <a onClick={()=>this.openMenu()} ><Navbars src={menuOpen? Bars : Times} id="bars" /> </a>
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on small screens & mobile devices*/}
        <MovieFilters>
          <SearchFilters 
            genres={genres} 
            ratings={ratings}  
            languages={languages}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults>
          { totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
          <MovieList 
            movies={results || []}
          />
        </MovieResults>
      </DiscoverWrapper>
      </>
    )
  }
}

const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 40px;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    padding: 20px 5px 5px 5px;
  }
`;

const TotalCounter = styled.div`
  font-weight: 900;
  height: 30px;
  margin-bottom: 20px;
`;

const MovieResults = styled.div`
  order: 1;
  flex-basis: 60%;
  @media (min-width: 769px) {
    margin-right: 15px;
  }
`;

const MovieFilters = styled.div`
  order: 2;
  flex-basis: 40%;
  margin: 40px 0px 20px;
`;

const MobilePageTitle = styled.header`
  order: 3;
  font-size: 1.6em;
  font-weight: bold;
  margin: 0px 10px 0px 10px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbars = styled.img`
float: right;
padding: 30px 30px 0px 30px;
height: 30px;
weight:30px;
`;

