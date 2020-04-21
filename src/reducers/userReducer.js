import _ from "lodash";

const initialState = {
  data: [],
  form: {},
  createModal: false,
  editModal: false,
  viewModal: false,
  loading: false,
  loadOnce: false
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "FETCH_USERS":
      return { ...state, data: payload };
    // case "FETCH_USER":
    //   return { ...state, data: payload };
    case "CREATE_USER":
      return { ...state, data: [...state.data, payload] };
    case "EDIT_USER":
      return {
        ...state,
        data: state.data.map(d => (d._id === payload._id ? payload : d))
      };
    case "DELETE_USER":
      return _.omit({ ...state }, payload);
    case "SHOW_CREATE_MODAL":
      return { ...state, createModal: payload };
    case "SHOW_EDIT_MODAL":
      return {
        ...state,
        form: { ...payload.user },
        editModal: payload.bool
      };
    case "SHOW_VIEW_MODAL":
      return {
        ...state,
        form: { ...payload.user },
        viewModal: payload.bool
      };
    default:
      return state;
  }
};
