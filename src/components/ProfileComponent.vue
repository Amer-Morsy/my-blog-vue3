<template>
  <h2 class="card-title m-3">Profile Component</h2>
  <div class="card mb-3">
    <img
      src="@/assets/img/me.png"
      style="width: 5rem; height: 5rem"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Amer Morsy</h5>
      <p class="card-text">web developer.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID : 1</li>
      <li class="list-group-item">Role: admin</li>
    </ul>
    <div class="card-body">
      <button type="button" class="card-link btn btn-info">
        <span>Edit Profile</span>
      </button>
      <button type="button" class="card-link btn btn-danger">
        <span>Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
};
</script>
