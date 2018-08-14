export const fetchDataSuccess = results => ({
  type: "FETCH_DATA_SUCCESS",
  payload: results
});

export const fetchData = () => {
  return dispatch => {
    fetch("http://swapi.co/api/films")
      .then(res => res.json())
      .then(data => dispatch(fetchDataSuccess(data.results)));
  };
};

export const addData = newData => ({
  type: "ADD_DATA",
  payload: newData
});

export const delData = dataId => ({
  type: "DELETE_DATA",
  payload: dataId
});

export const editData = data => ({
  type: "EDIT_DATA",
  payload: data
});
