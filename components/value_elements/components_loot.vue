<template>
  <div
    class="value-element components_loot"
    title="このブロックが破壊された時に落とすアイテムが記述されたルートテーブルを指定します。"
  >
    <div class="value-label">
      <p>ルートテーブル</p>
    </div>
    <label class="value-input">
      <input
        type="text"
        name="components-loot"
        class="components-loot"
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