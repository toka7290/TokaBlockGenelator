<template>
  <div
    class="value-element components_explosion_resistance"
    title="このブロックの爆発耐性を設定します。"
  >
    <div class="value-label">
      <p>爆発耐性</p>
    </div>
    <label class="value-input">
      <input
        type="number"
        min="0"
        name="components-explosion-resistance"
        class="components-explosion-resistance"
        value="1.0"
        step="0.1"
        v-on:change="onChangedValue"
        v-model.number="val"
      />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 0.0,
    };
  },
  props: ["uuid"],
  created() {
    this.onChangedValue();
  },
  methods: {
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.val]);
    },
  },
};
</script>