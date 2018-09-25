import React, { Component } from "react";
import axios from "axios";
import "../Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: 0,
      Category: "",
      Title: "",
      Date: "",
      URLPhoto: "",
      Description: "",
      resId: 0,
      resCategory: "",
      resTitle: "",
      resDate: "",
      resURLPhoto: "",
      resDescription: ""
    };
  }

  handleGetNews = () =>
    axios
      .get("https://idx-api.herokuapp.com/news")
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

  handlePostNews = () => {
    const { Id, Category, Title, Date, URLPhoto, Description } = this.state;
    const that = this;

    return axios
      .post("https://idx-api.herokuapp.com/news", {
        Id: Id,
        Category: Category,
        Title: Title,
        Date: Date,
        URLPhoto: URLPhoto,
        Description: Description
      })
      .then(function(response) {
        console.log(response);
        that.setState({
          resId: response.data.Id,
          resCategory: response.data.Category,
          resTitle: response.data.Title,
          resDate: response.data.Date,
          resURLPhoto: response.data.URLPhoto,
          resDescription: response.data.Description
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleDeleteNews = () =>
    axios
      .delete("https://idx-api.herokuapp.com/news/2")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

  handleInputId = e => {
    this.setState({
      Id: e.target.value
    });
  };

  handleInCategory = e => {
    this.setState({
      Category: e.target.value
    });
  };

  handleInTitle = e => {
    this.setState({
      Title: e.target.value
    });
  };

  handleInDate = e => {
    this.setState({
      Date: e.target.value
    });
  };

  handleInURLPhoto = e => {
    this.setState({
      URLPhoto: e.target.value
    });
  };

  handleInDescription = e => {
    this.setState({
      Description: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>News List</h2>
        <table>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Title</th>
            <th>Date</th>
            <th>URLPhoto</th>
            <th>Description</th>
          </tr>
          <tr>
            <td> {this.state.resId} </td>
            <td> {this.state.resCategory} </td>
            <td> {this.state.resTitle} </td>
            <td> {this.state.resDate} </td>
            <td> {this.state.resURLPhoto} </td>
            <td> {this.state.resDescription} </td>
          </tr>
        </table>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: 200,
            marginTop: 50,
            marginLeft: 50,
            height: 300
          }}
        >
          <input
            placeholder="Id"
            value={this.state.Id}
            onChange={this.handleInputId}
          />
          <input
            placeholder="Category"
            value={this.state.Category}
            onChange={this.handleInCategory}
          />
          <input
            placeholder="Title"
            value={this.state.Title}
            onChange={this.handleInTitle}
          />
          <input
            placeholder="Date"
            value={this.state.Date}
            onChange={this.handleInDate}
          />
          <input
            placeholder="URLPhoto"
            value={this.state.URLPhoto}
            onChange={this.handleInURLPhoto}
          />
          <input
            placeholder="Description"
            value={this.state.Description}
            onChange={this.handleInDescription}
          />
          <button onClick={this.handlePostNews}>Add News!</button>
        </div>
      </div>
    );
  }
}

export default Home;
