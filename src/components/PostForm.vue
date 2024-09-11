<template>
  <h2>PostForm Component massage : {{ msg }}</h2>
</template>

<script>
export default {
  name: "PostForm Component",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  color: #f00;
}
</style>
