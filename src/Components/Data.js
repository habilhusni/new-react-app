import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { editData, delData } from "../Actions";
import Background from "../img/attack-of-the-clans.jpg";
import video from "../Videos/count.mp4";

const styles = {
  footer: {
    backgroundColor: "#F5F5F5",
    width: "100%"
  },
  card: {
    display: "inline",
    width: "50%"
  },
  cardcontent: {
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  }
};

class Data extends React.Component {
  // componentDidMount() {
  //   this.props.fetchData();
  // }

  render() {
    return (
      <div>
        <video
          style={{
            display: "block",
            position: "fixed",
            zIndex: 2,
            left: 600
          }}
          width="320"
          height="240"
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
        {this.props.data.map(result => (
          <div key={result.episode_id} className="card" style={styles.card}>
            <div className="card-content" style={styles.cardcontent}>
              <p className="title">{result.title}</p>
              <p className="director">Director: {result.director}</p>
              <p className="episode">Episode: {result.episode_id}</p>
            </div>
            <footer className="card-footer" style={styles.footer}>
              <p className="card-footer-item">
                <a className="button is-warning">
                  <Link to="/edit">Edit</Link>
                </a>
              </p>
              <p className="card-footer-item">
                <button
                  className="button is-primary"
                  onClick={() => this.props.delData(result.episode_id)}
                >
                  Delete
                </button>
              </p>
            </footer>
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchData: () => dispatch(fetchData()),
    delData: dataId => dispatch(delData(dataId)),
    editData: data => dispatch(editData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
