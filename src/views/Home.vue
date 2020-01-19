<template>
  <div>
    <login />
    <router-view />
  </div>
</template>

<script>
import login from "./login";
export default {
  name: "home",
  components: {
    login
  }
};
</script>
