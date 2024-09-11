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
    let posts = [
      {
        id: 1,
        title: "I am an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        userId: 91,
        tags: ["french", "fiction", "english"],
        reactions: {
          likes: 859,
          dislikes: 32,
        },
        views: 4884,
      },
      {
        id: 2,
        title: "He was an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        userId: 91,
        tags: ["french", "fiction", "english"],
        reactions: {
          likes: 859,
          dislikes: 32,
        },
        views: 4884,
      },
      {
        id: 3,
        title: "Title an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        userId: 91,
        tags: ["french", "fiction", "english"],
        reactions: {
          likes: 859,
          dislikes: 32,
        },
        views: 4884,
      },
      {
        id: 4,
        title: "Title an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
        userId: 91,
        tags: ["french", "fiction", "english"],
        reactions: {
          likes: 859,
          dislikes: 32,
        },
        views: 4884,
      },
    ];
    commit("setPosts", posts);
    // try {
    //   // Fetch posts from your API (example)
    //   const response = await fetch("https://dummyjson.com/posts");
    //   const data = await response.json();
    //   commit("setPosts", data.posts);
    // } catch (error) {
    //   console.error("Error fetching posts:", error);
    // }
  },
  // ... add more actions (create, update, delete)
};

export default {
  namespaced: true, // Optional for organizing state
  state,
  getters,
  mutations,
  actions,
};
