<template>
  <div
    class="value-element event_responses_swing"
    title="腕を振るアニメーションをします"
  >
    <div class="value-label">
      <p>スウィング</p>
    </div>
    <div class="value-input"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onChangedValue(event) {
      /** @type {Element} */
      const target = event.target;
      const uuid = this.$getClassUUID(
        target.closest(".value-element.components_loot").classList
      );
      if (uuid == undefined) return;
      const index = this.$store.state.main_components.findIndex(
        (val) => val.id == uuid
      );
      this.$store.commit("setComponentData", [index, target.value]);
    },
  },
};
</script>