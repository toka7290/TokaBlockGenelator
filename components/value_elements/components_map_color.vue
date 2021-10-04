<template>
  <div
    class="value-element components_map_color"
    title="このブロックの地図での色を設定します。#000000~#ffffffまで設定できます。"
  >
    <div class="value-label">
      <p>地図の色</p>
    </div>
    <div class="value-input type-color">
      <label
        ><input
          type="text"
          name="components-map-color"
          class="components-map-color"
          v-on:change="onChangedValue"
          v-bind:value="val"
      /></label>
      <label
        ><svg aria-label="色選択" class="accessibility-label"></svg
        ><input
          type="color"
          name="components-map-color-pick"
          class="components-map-color-pick"
          v-on:change="onChangedValue"
          v-bind:value="val"
      /></label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "#000000",
    };
  },
  props: ["uuid"],
  created() {
    this.$store.commit("setComponentData", [this.uuid, this.val]);
  },
  methods: {
    onChangedValue(event) {
      this.val = event.target.value;
      this.$store.commit("setComponentData", [this.uuid, event.target.value]);
    },
  },
};
</script>