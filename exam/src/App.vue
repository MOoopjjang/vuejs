<template>
  <!-- <v-app>
    <v-main>
      <user-registration></user-registration>
    </v-main>
  </v-app> -->
  <div id="app">
    <travl-list2></travl-list2>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import UserRegistration from './components/UserRegistration.vue'
// import TravlLis from './components/TravlLis.vue';
import TravlList2 from './components/TravlList2.vue'

export default {
  name: 'App',

  components: {
    // 'user-registration':UserRegistration
    'travl-list2':TravlList2
  },

  data: () => ({
    //
  }),
};
</script>
