<template>
  <!-- Page header with logo and tagline-->
  <header class="py-3 bg-light border-bottom mb-4 page-header">
    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bolder">{{ title }}</h1>
        <p class="lead mb-0">
          {{ description }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://random.imagecdn.app/500/150") no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;

  h1,
  p {
    color: white;
  }
}
</style>
