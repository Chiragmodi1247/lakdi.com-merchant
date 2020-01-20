<template>
  <div>
      <navbar />
      <router-view />
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',

  components: {
    navbar
},

  data: () => ({
    //
  }),
};
</script>
