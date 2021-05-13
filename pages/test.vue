<template>
  <div id="test">
    <button v-on:click="showAbout">data</button>
    <input type="button" value="test" v-on:click="showAbout" />
    <div v-show="page_about[0]">
      <p>test</p>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
export default {
  data() {
    return {
      page_about: [false, true],
    };
  },
  methods: {
    showAbout() {
      this.page_about = !this.page_about[0];
      console.log(this.page_about);
    },
  },
};
</script>