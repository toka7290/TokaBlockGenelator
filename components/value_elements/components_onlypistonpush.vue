<template>
  <div
    class="value-element components_onlypistonpush"
    title="ブロックをピストンで押込みしかできないようにします。"
  >
    <label class="value-checkbox">
      <input
        type="checkbox"
        name="components-onlypistonpush"
        class="components-onlypistonpush invisible-Control"
        v-on:change="onChangedValue"
        v-model="val"
      />
      <div class="checkbox-body">
        <div class="checkbox-body-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            class="checkbox-body-checkMark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <p class="checkbox-body-text">ピストン押込みのみ</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: false,
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