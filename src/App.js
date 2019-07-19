//App.js
import React, { Component } from "react";

import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";

class App extends Component {
  
  state = {
    date: new Date(),
    photo: ""
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=Tf2aLTCvTbKvWE9WpIhbwK3Zx09ORZ8BBBHhOrpd`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };


  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  formatDate = moment => {
    let year = moment.getFullYear();
    let month = moment.getMonth() + 1;
    let day = moment.getDate();
    return `${year}-${month}-${day}`;
  }

  changeDate = (dateFromInput, { selected }) => {
    this.setState({ date: dateFromInput });
    this.getPhoto(this.formatDate(dateFromInput));
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Tf2aLTCvTbKvWE9WpIhbwK3Zx09ORZ8BBBHhOrpd`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  handleClick = () => {
    let randomDate = this.getRandomDate(new Date(1995, 6, 16), new Date());
    this.setState({ date: randomDate });
    this.getPhoto(this.formatDate(randomDate));
  }

  render() {
    return (
      <div>
        <h2>NASA's Astronomy Picture of the Day</h2>
        <p>Provided by Theo Gosselink</p>
         <DateInput
          changeDate={this.changeDate}
          date={this.state.date}
          handleClick={this.handleClick}
         />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}
export default App;
