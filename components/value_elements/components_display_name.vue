<template>
  <div
    class="value-element components_display_name"
    title="ブロックの画面に表示される名前を設定します。"
  >
    <div class="value-label">
      <p>表示名</p>
    </div>
    <label class="value-input">
      <input
        type="text"
        name="components-display-name"
        class="components-display-name"
        v-on:change="onChangedValue"
        v-model="val"
      />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return { val: "" };
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