export default {
  computed: {
    isSidebarOpened() {
      return this.$store.getters.isSidebarOpened;
    },
  },
};
