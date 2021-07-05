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
        v-on:change="setLoot"
      />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  props: ["group", "uuid"],
  methods: {
    setLoot(event) {
      this.data = event.target.value;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setEventData", [this.uuid, this.group, this.data]);
    },
  },
};
</script>