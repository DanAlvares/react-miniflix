// Handles uploading of videos by registered users

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component {

  uploadWidget = () => {
    window.cloudinary.setCloudName('ninjadan');
    window.cloudinary.openUploadWidget({
      upload_preset: 'ogbtvv47',
      tags: ['miniflix'],
      sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
    }, function(err, result){
      console.log('last upload result', result);
    });
  }

  render() {
      return (
        <div>
          <Nav />

          <div className="container">
            <h3 className="text-center">Upload Your 20-second Video</h3>
            <hr/>
            <div className="col-sm-12">
              <div className="jumbotron text-center">
                <button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Upload;
