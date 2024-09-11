const state = {
  userLogined: false,
};

const getters = {
  userLogined: (state) => state.userLogined,
};

const mutations = {
  UPDATE_USER_LOGINED: (state, status) => {
    state.loginStatus = status;
  },
};

const actions = {
  updateUserLogined({ commit }, status) {
    commit("UPDATE_USER_LOGINED", status);
  },
};

export default {
  namespaced: true, // Optional for organizing state
  state,
  getters,
  mutations,
  actions,
};
