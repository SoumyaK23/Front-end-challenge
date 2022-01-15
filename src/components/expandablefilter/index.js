/* This file contains the functions required to show checkbox for filtering */

import React, { Component } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  //Change state of component on click
  onClickHandler() {
    this.setState(prevState => ({
      filtersShown: !prevState.filtersShown
    }));
  }

  render() {
    const { filters, title } = this.props;
    const { filtersShown } = this.state;

    if (filtersShown) {
      // filter and show checkbox
      return (
        <ExpandableWrapper>
          <ExpandableHeader onClick={this.onClickHandler}>
            <FaMinus  />
            <ExpandableTitle>{title}</ExpandableTitle>
          </ExpandableHeader>  
          <ExpandableList>
          {filters.map(m => (
            <div key={m.id}>{<Checkbox filter={m} />}</div> 
          ))}
          </ExpandableList>
        </ExpandableWrapper>
      );
    } else {
      // show our title when collapsed
      return (
        <ExpandableWrapper>
          <ExpandableHeader onClick={this.onClickHandler}>
            <FaPlus />
            <ExpandableTitle>{title}</ExpandableTitle>
          </ExpandableHeader>
        </ExpandableWrapper>
      );
    }
  }
}

const ExpandableWrapper = styled.div`
`;

const ExpandableHeader = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

const ExpandableIcon = styled.img`
  display: inline-block;
  width: 1em;
  position: relative;
  margin-bottom: 0.3em;
  vertical-align: middle;
`;

const ExpandableTitle = styled.div`
  display: inline-block;
  font-size: 1em;
  margin-left: 15px;
`;

const ExpandableList = styled.div``;
