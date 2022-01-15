/* This file contains the functions required to show checkbox for filtering */

import React from "react";
import styled from 'styled-components';

export default class CheckBox extends React.Component {
  // Create a custom checkbox component
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleCheckboxChange = event => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };
  
  render() {
    const filter = this.props.filter;
    const checked = this.state.checked;
//display checkbox and name ; not filtering
    return (
      <CheckboxContainer>
        <Checkbox checked={checked}>
          <input type="checkbox" />
        </Checkbox>
        <span>{this.props.filter.name}</span>
      </CheckboxContainer>
    );
  }
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  font-weight: 300;
  user-select: none;
`;

const Checkbox = styled.div`
  display: inline-block;
  transition: all 300ms;
  cursor: pointer;
  padding-right: 5px;
  :hover {
    background: #f5f5f5;
  }
`;
