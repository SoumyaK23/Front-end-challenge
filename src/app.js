import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import SideNavbar from "./components/sidenavbar"

import Discover from "./pages/discover";

import './css/app.css'; 


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Soumya',
      isMobile: true,
    }
    this.windowResize = this.windowResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResize)
  }

  // resize navbar on mobile
  windowResize() {
    const width = document.documentElement.clientWidth
    const links = document.querySelector('#navbar')

    if (width > 640) {
      links.style.display = 'block'
      this.setState({ isMobile: false })
    } else {
      links.style.display = 'none'
      this.setState({ isMobile: true })
    }
  }

  render() {
  const { isMobile } = this.state

  return(
      <Router>
        <PageContainer>
        <SideNavbar isMobile = {isMobile}/>
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props} />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
  );
  }
}

const ContentWrapper = styled.main`
  @media (min-width: 769px) {
    padding-left: 280px;
  }
`;

const PageContainer = styled.main``;
