<template>
  <div id="test">
    <div class="app-navbar">Navbar</div>
    <div class="app-content">
      <input type="checkbox" id="sidebar-toggle" />
      <div class="sidebar">
        <label for="sidebar-toggle" class="sidebar-toggle-label">T☰</label>
        <ul>
          <li>
            <a href="#"><i class="icon-home"></i> Home</a>
          </li>
          <li>
            <a href="#"><i class="icon-about"></i> About</a>
          </li>
          <li>
            <a href="#"><i class="icon-services"></i> Services</a>
          </li>
          <li>
            <a href="#"><i class="icon-contact"></i> Contact</a>
          </li>
        </ul>
      </div>
      <div class="main-content">Main Content</div>
    </div>
    <div class="app-footer">Footer</div>
  </div>
</template>

<script>
export default {
  name: "TestView",
};
</script>

<style lang="scss"></style>
