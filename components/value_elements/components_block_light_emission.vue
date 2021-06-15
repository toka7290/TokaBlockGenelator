<template>
  <div
    class="value-element components_block_light_emission"
    title="このブロックが発する光の量を設定します。"
  >
    <div class="value-label">
      <p>発光量</p>
    </div>
    <div class="value-input type-unit">
      <label>
        <input
          type="number"
          min="0.0"
          max="1.0"
          name="components-block-light-emission"
          class="components-block-light-emission"
          value="0.0"
          step="0.1"
          v-on:change="onChangedValue"
        />
        <span class="components-block-light-emission-eq">=0</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["group", "uuid"],
  methods: {
    onChangedValue(event) {
      this.$store.commit("setComponentData", [
        this.uuid,
        this.group,
        event.target.value,
      ]);
    },
  },
};
</script>