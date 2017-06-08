const initialState = [
  {
    title: 'A New Hope',
    director: 'George Lucas',
    episode_id: 4,
  },
  {
    title: 'Attack of the Clones',
    director: 'George Lucas',
    episode_id: 2,
  },
  {
    title: 'The Phantom Menace',
    director: 'George Lucas',
    episode_id: 1,
  },
  {
    title: 'Revenge of the Sith',
    director: 'George Lucas',
    episode_id: 3,
  },
  {
    title: 'Return of the Jedi',
    director: 'Richard Manquard',
    episode_id: 6,
  },
  {
    title: 'The Empire Strikes Back',
    director: 'Irvin Kershner',
    episode_id: 5,
  },
  {
    title: 'The Force Awakens',
    director: 'J. J. Abrams',
    episode_id: 7,
  },
];

const addData = (state, newData) => {
  const { title, director } = newData;
  const ids = state.map(data => data.episode_id);
  const newId = Math.max(...ids) + 1;
  const data = {
    title,
    director,
    episode_id: newId,
  };
  const newState = [...state, data];
  return newState;
};

const delData = (state, episodeId) => {
  const newState = state.filter(data => data.episode_id !== episodeId);
  return newState;
};

const editData = (state, updatedData) => {
  const newState = state.map((data) => {
    if (data.episode_id === updatedData.episode_id) {
      return {
        ...data,
        title: updatedData.title,
        director: updatedData.director,
      };
    }
    return data;
  });
  return newState;
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS': {
      const newDatas = action.payload;
      return newDatas;
    }
    case 'ADD_DATA': return addData(state, action.payload);
    case 'DELETE_DATA': return delData(state, action.payload);
    case 'EDIT_DATA' : return editData(state, action.payload);
    default: return state;
  }
};

export default dataReducer;
