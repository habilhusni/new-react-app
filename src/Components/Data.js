import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  card: {
    display: 'inline',
    width: '50%',
  },
  cardcontent: {
    textAlign: 'center',
  },
};

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          results: data.results,
        });
      })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

        {
          this.state.results.map(result => (
            <div key={result.episode_id} className="card" style={styles.card}>
              <div className="card-content" style={styles.cardcontent}>
                <p className="title">{result.title}</p>
                <p className="director">Director: {result.director}</p>
                <p className="episode">Episode: {result.episode_id}</p>
              </div>
              <footer className="card-footer" style={styles.footer}>
                <p className="card-footer-item"><a className="button is-primary">Edit</a></p>
                <p className="card-footer-item"><a className="button is-primary">Delete</a></p>
              </footer>
              <br />
              <br />
              <br />
            </div>
            ),
          )
        }

      </div>
    );
  }

}

export default Data;
