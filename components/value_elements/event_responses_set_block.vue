<template>
  <div
    class="value-element event_responses_set_block"
    title="ブロックを設置します。"
  >
    <div class="value-label">
      <p>ブロック設置</p>
    </div>
    <label class="value-input">
      <input
        type="text"
        name="event-responses-set-block"
        class="event-responses-set-block"
        v-on:change="setId"
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
    setId(event) {
      this.data = event.target.value;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>