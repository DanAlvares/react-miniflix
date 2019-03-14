// Stores authentication credentials
// redirects back to the upload route in the app.

import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  componentDidMount() {
      setAccessToken();
      setIdToken();
      window.location.href = '/';
  }

  render() {
    return null;
  }
}

export default Callback
