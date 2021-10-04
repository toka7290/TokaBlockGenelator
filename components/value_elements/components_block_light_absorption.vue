<template>
  <div
    class="value-element components_block_light_absorption"
    title="このブロックが吸収する光の量を設定します。"
  >
    <div class="value-label">
      <p>光の吸収</p>
    </div>
    <label class="value-input">
      <input
        type="number"
        min="0"
        max="16"
        name="components-block-light-absorption"
        class="components-block-light-absorption"
        value="0"
        v-on:change="onChangedValue"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ["uuid"],
  created() {
    this.$store.commit("setComponentData", [this.uuid, 0]);
  },
  methods: {
    onChangedValue(event) {
      this.$store.commit("setComponentData", [this.uuid, event.target.value]);
    },
  },
};
</script>