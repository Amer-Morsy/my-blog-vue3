const state = {
  posts: [], // Array to hold posts
};

const getters = {
  getPosts(state) {
    return state.posts;
  },
  // ... add more getters if needed
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  addPost(state, post) {
    state.posts.push(post);
  },
  updatePost(state, updatedPost) {
    const index = state.posts.findIndex((p) => p.id === updatedPost.id);
    if (index !== -1) {
      state.posts[index] = updatedPost;
    }
  },
  deletePost(state, postId) {
    state.posts = state.posts.filter((p) => p.id !== postId);
  },
};

const actions = {
  async fetchPosts({ commit }) {
    // let posts = [];
    try {
      // Fetch posts from your API (example)
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      console.log(data.posts);
      commit("setPosts", data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      commit("setPosts", []);
    }
  },
  // ... add more actions (create, update, delete)
};

export default {
  namespaced: false, // Optional for organizing state
  state,
  getters,
  mutations,
  actions,
};
