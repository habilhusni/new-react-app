import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { editData } from '../Actions';

const styles = {
  postForm: {
    padding: 20,
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  postInput: {
    width: '100%',
    padding: 20,
    outline: 'none',
  },
  formLabel: {
    margin: 10,
    width: '100%',
  },
  btn: {
    backgroundColor: 'teal',
    color: 'white',
    padding: 20,
    border: 0,
  },
};

class EditFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      director: '',
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
  render() {
    const { title, director, isSubmitted } = this.state;
    return (
      <div>
        { isSubmitted && <Redirect to={{ pathname: '/data' }} /> }
        <h1>Edit Film</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.editData(this.state);
            this.setState({ title: '', director: '', isSubmitted: true });
          }}
          style={styles.postForm}
        >
          <label style={styles.formLabel}>
            Film Title
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              style={styles.postInput}
            />
          </label>
          <label style={styles.formLabel}>
            Director
            <input
              type="text"
              name="director"
              value={director}
              onChange={this.handleChange}
              style={styles.postInput}
            />
          </label>
          <input type="submit" value="Add Film" style={styles.btn} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editData: newData => dispatch(editData(newData)),
});

export default connect(null, mapDispatchToProps)(EditFilm);
