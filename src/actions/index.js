import api from "../apis/api";

export const showCreateModal = bool => dispatch => {
  dispatch({ type: "SHOW_CREATE_MODAL", payload: bool });
};

export const showViewModal = (user, bool) => dispatch => {
  dispatch({ type: "SHOW_VIEW_MODAL", payload: { bool, user } });
};

export const showEditModal = (user, bool) => dispatch => {
  dispatch({ type: "SHOW_EDIT_MODAL", payload: { bool, user } });
};

export const createUser = formValues => async dispatch => {
  const response = await api.post("/users", formValues);
  dispatch({ type: "CREATE_USER", payload: response.data.data.data });
};

export const fetchUsers = () => async dispatch => {
  const response = await api.get("/users"); //res.data.data.users

  dispatch({ type: "FETCH_USERS", payload: response.data.data.users });
};

// export const fetchUser = id => async dispatch => {
//   const response = await api.get(`/users/${id}`);
//   // dispatch({ type: "FETCH_USER", payload: response.data.data });
//   return response.data.data;
// };

export const editUser = (id, formValues) => async dispatch => {
  const response = await api.put(`/users/${id}`, formValues);
  dispatch({ type: "EDIT_USER", payload: response.data.data.data });
};

export const deleteUser = id => async dispatch => {
  await api.delete(`/users/${id}`);

  dispatch({ type: "DELETE_USER", payload: id });
  // fetchUsers();
};
