/* This file contains the functsions required to show checkbox for filtering */

import React from "react";
import styled, { css } from 'styled-components';

import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  render () {
    const { genres, ratings, languages, searchMovies } = this.props;

    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
          <SearchBar searchMovies={searchMovies} />
        </SearchFiltersCont>
        <SearchFiltersCont>
          <CategoryTitle>Movie</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          {/* 3 EF components each of them receiving a different prop */}
          <ExpandableFilter filters={genres} title="Select genre(s)" />
          <ExpandableFilter filters={ratings} title="Select min. vote" />
          <ExpandableFilter filters={languages} title="Select language" />
        </SearchFiltersCont>
      </FiltersWrapper>
    )
  }
}

const FiltersWrapper = styled.div`
  position: relative;
  }
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}

  @media (max-width: 992px) {
    background-color: #f6f7f9;
  }
`

const CategoryTitle = styled.div`
  padding: 10px 0px;
  font-weight: 700;
`