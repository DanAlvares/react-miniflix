// Dashboard for viewing all videos

import React, { Component } from 'react';
import Nav from './Nav';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import axios from 'axios';
import { Share } from 'react-twitter-widgets';

class Display extends Component {

  state = { videos: []};
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  getVideos() {
    axios.get('//res.cloudinary.com/unicodeveloper/video/list/miniflix.json')
      .then(res => {
        this.setState({ videos: res.data.resources });
      });
  }

  componentDidMount() {
    this.getVideos();
  }

  formatDate(dateString){
    let date = new Date(dateString),
        day = date.getDay(),
        month = this.months[date.getMonth()],
        year = date.getFullYear(),
        time = date.getHours() + ':' + date.getMinutes();

    return [day, month, year, time].join(' ');
  }

  render(){
    const { videos } = this.state;

    return (
      <div>
        <Nav />

        <div className="container">
          <h3 className="text-center"> Latest Videos on Reactflix </h3>
          <hr/>
          <div className="col-sm-12">
            <CloudinaryContext cloudName="unicodeveloper">
              { videos.map((data, index) => (
                  <div className="col-sm-4" key={index}>
                    <div className="embed-responsive embed-responsive-4by3">
                      <Video publicId={data.public_id} width="300" height="300" controls></Video>
                    </div>
                    <em> Created at { this.formatDate(data.created_at) } </em>
                    <div className="pull-right"><Share url={`//res.cloudinary.com/unicodeveloper/video/upload/${data.public_id}.mp4`} /></div>
                  </div>
                ))
              }
            </CloudinaryContext>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
