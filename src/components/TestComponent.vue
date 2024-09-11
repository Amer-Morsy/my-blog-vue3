<template>
  <h2>Test Component massage : {{ msg }}</h2>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
