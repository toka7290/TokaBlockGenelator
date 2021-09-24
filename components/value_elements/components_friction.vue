<template>
  <div
    class="value-element components_friction"
    title="このブロックの上をエンティティが移動するときの止まりにくさを設定します。"
  >
    <div class="value-label">
      <p>摩擦</p>
    </div>
    <label class="value-input">
      <input
        type="number"
        min="0.1"
        name="components-friction"
        class="components-friction"
        value="0.1"
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
      val: 0.1,
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