import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    textAlign: "center"
  },
  buttonChoice: {
    display: "inline",
    position: "relative",
    left: "41%"
  },
  button: {
    marginLeft: "30px",
    marginTop: "30px"
  },
  button2: {
    marginTop: "30px"
  }
};

const Home = props => (
  <section className="hero is-medium is-primary is-bold">
    <div className="hero-body">
      <div className="container" style={styles.container}>
        <span className="icon">
          <i className="fa fa-home" />
        </span>
        <h1 className="title">SWAPI</h1>
        <h2 className="subtitle">The Star Wars API haha</h2>
      </div>
      <div className="buttonChoice" style={styles.buttonChoice}>
        <a className="button is-info" style={styles.button2}>
          <Link to="/data">Show Films</Link>
        </a>
        <a className="button is-warning" style={styles.button}>
          <Link to="/add">Add Film</Link>
        </a>
      </div>
    </div>
  </section>
);

export default Home;
