import React from 'react';

class AddFilm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <div className="field">
          <label className="label">Title</label>
          <p className="control">
            <input className="input" type="text" placeholder="Text input" />
          </p>
        </div>

        <div className="field">
          <label className="label">Creator</label>
          <p className="control">
            <input className="input" type="text" placeholder="Text input" />
          </p>
        </div>

        <div className="field">
          <label className="label">Episode</label>
          <p className="control">
            <input className="input" type="text" placeholder="Text input" />
          </p>
        </div>

        <div className="field is-grouped">
          <p className="control">
            <button className="button is-primary">Submit</button>
          </p>
          <p className="control">
            <button className="button">Cancel</button>
          </p>
        </div>

      </div>
    );
  }
}

export default AddFilm;
