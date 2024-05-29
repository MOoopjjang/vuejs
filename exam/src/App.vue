<template>
  <v-app>
    <v-main>
      <user-registration></user-registration>
    </v-main>
    
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import UserRegistration from './components/UserRegistration.vue'

export default {
  name: 'App',

  components: {
    'user-registration':UserRegistration
  },

  data: () => ({
    //
  }),
};
</script>
