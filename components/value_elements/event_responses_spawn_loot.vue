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
        v-on:change="onChangedValue"
        v-model="data"
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
  props: ["uuid"],
  created() {
    this.onChangedValue();
  },
  methods: {
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>