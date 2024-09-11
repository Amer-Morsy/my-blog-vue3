const state = {
  isSidebarOpened: true,
};

const getters = {
  isSidebarOpened: (state) => state.isSidebarOpened,
};

const mutations = {
  toggleSidebarStatus(state) {
    state.isSidebarOpened = !state.isSidebarOpened;
  },
};

const actions = {
  toggleSidebarStatus(context) {
    context.commit("toggleSidebarStatus");
  },
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
