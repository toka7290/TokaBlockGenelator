<template>
  <div
    class="value-element components_immovable"
    title="ブロックをピストンで押し引きできないようにします。"
  >
    <label class="value-checkbox">
      <input
        type="checkbox"
        name="components-immovable"
        class="components-immovable invisible-Control"
        v-on:change="onChangedValue"
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
        <p class="checkbox-body-text">ピストン押引不可</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["uuid"],
  methods: {
    onChangedValue(event) {
      this.$store.commit("setComponentData", [this.uuid, event.target.checked]);
    },
  },
};
</script>