<template>
  <div
    class="value-element components_breakonpush"
    title="ブロックをピストンで押すと破壊されるようにします。"
  >
    <label class="value-checkbox">
      <input
        type="checkbox"
        name="components-breakonpush"
        class="components-breakonpush invisible-Control"
      />
      <div for="components-breakonpush" class="checkbox-body">
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
            v-on:change="onChangedValue"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <p class="checkbox-body-text">ピストンで破壊</p>
      </div>
    </label>
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
        event.target.checked,
      ]);
    },
  },
};
</script>