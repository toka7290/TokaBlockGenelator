<template>
  <div
    class="value-element event_responses_spawn_loot"
    title="指定したルートテーブルのアイテムをスポーンさせます。"
  >
    <div class="value-label">
      <p>ルートをスポーン</p>
    </div>
    <label class="value-input">
      <input
        type="text"
        name="event-responses-spawn-loot"
        class="event-responses-spawn-loot"
      />
    </label>
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