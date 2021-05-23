<template>
  <div id="test">
    <button v-on:click="showAbout">data</button>
    <input type="button" value="test" v-on:click="showAbout" />
    <div v-show="page_about[0]">
      <p>test</p>
    </div>
    <p>{{ $store.state.components }}</p>
    <div
      v-for="(date, i) in test_data"
      :key="i"
      v-bind:is="date.component"
    ></div>
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import blockTabPermutation from "@/components/value_elements/components_loot.vue";
// import Vue from "vue";
export default {
  data() {
    return {
      blockTabPermutation,
      page_about: [false, true],
      test_data: [],
    };
  },
  methods: {
    showAbout() {
      // this.page_about = !this.page_about[0];
      // console.log(this.page_about);
      this.$store.commit("addMainComponent", "blockTabPermutation");
    },
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters["components"],
      (newValue, oldValue) => {
        this.test_data = newValue;
      }
    );
  },
};
</script>