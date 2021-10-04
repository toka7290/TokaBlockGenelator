<template>
  <div
    class="value-element event_responses_trigger"
    title="イベントをトリガーします。"
  >
    <div class="value-label">
      <p>イベントトリガー</p>
    </div>
    <div class="value-input type-modal">
      <label
        ><input
          type="button"
          value="編集"
          class="modal-open"
          v-on:click="this.$showModal"
      /></label>
      <div class="modal hide" v-on:click="this.$closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">イベントトリガー</div>
              <label class="modal-close-btn">
                <input
                  type="button"
                  value="閉じる"
                  class="modal-close invisible-Control"
                />
                <div class="close-btn-icon" v-html="svgClose"></div>
              </label>
            </div>
            <div class="modal-body">
              <div class="value-element" title="トリガーするイベント">
                <div class="value-label">
                  <p>イベント</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-trigger-event"
                    class="event-responses-trigger-event"
                    list="event-name-list"
                    v-on:change="setEvent"
                  />
                </label>
              </div>
              <div class="value-element" title="トリガーする条件">
                <div class="value-label">
                  <p>条件</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-trigger-condition"
                    class="event-responses-trigger-condition"
                    v-on:change="setCondition"
                  />
                </label>
              </div>
              <div class="value-element" title="トリガーするターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-trigger-target"
                    class="event-responses-trigger-target"
                    v-on:change="setTarget"
                  >
                    <option value="default">default</option>
                    <option value="self">self</option>
                    <option value="holder">holder</option>
                    <option value="baby">baby</option>
                    <option value="other">other</option>
                    <option value="player">player</option>
                    <option value="target">target</option>
                    <option value="parent">parent</option>
                    <option value="block">block</option>
                    <option value="damager">damager</option>
                    <option value="item">item</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <label
              ><input type="button" value="Close" class="modal-close"
            /></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
export default {
  data() {
    return {
      svgClose,
      data: {
        event: "",
        condition: "",
        target: "default",
      },
    };
  },
  props: ["uuid"],
  created() {
    this.onChangedValue();
  },
  methods: {
    setEvent(event) {
      this.data = {
        ...this.data,
        event: event.target.value,
      };
      this.onChangedValue();
    },
    setCondition(event) {
      this.data = {
        ...this.data,
        condition: event.target.value,
      };
      this.onChangedValue();
    },
    setTarget(event) {
      this.data = {
        ...this.data,
        target: event.target.value,
      };
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>