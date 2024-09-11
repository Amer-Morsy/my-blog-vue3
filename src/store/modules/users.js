const state = {
  userLogined: true,
};

const getters = {
  userLogined: (state) => state.userLogined,
};

const mutations = {
  UPDATE_USER_LOGINED: (state, status) => {
    state.userLogined = status;
  },
};

const actions = {
  updateUserLogined({ commit }, status) {
    commit("UPDATE_USER_LOGINED", status);
  },
};

export default {
  namespaced: false, // Optional for organizing state
  state,
  getters,
  mutations,
  actions,
};
