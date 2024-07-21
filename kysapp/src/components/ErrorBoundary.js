// components/ErrorBoundary.js
import React, { Component } from 'react';
import { ReuseDiv, ReuseText } from './Login/styledComponents';
import LoadingPage from './LoadingPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ReuseDiv bg="#382933" display="flex" fD="column" jC="center" aI="center">
          <ReuseText as="h1" color="#fff">Please Refresh the Page</ReuseText>
          <LoadingPage/>
        </ReuseDiv>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
