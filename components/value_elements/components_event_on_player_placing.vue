<template>
  <div
    class="value-element components_event_on_player_placing"
    title="ブロックがプレイヤーによって置かれた時のイベントを定義します。"
  >
    <div class="value-label">
      <p>トリガ(プレイヤーが置いた時)</p>
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
              <div class="modal-title">トリガ(プレイヤーが置いた時)</div>
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
              <div
                class="value-element"
                title="トリガ―するイベント名を設定します。"
              >
                <div class="value-label">
                  <p>イベント</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="components-event-on-player-placing-event"
                    class="components-event-on-player-placing-event"
                    list="event-name-list"
                    v-on:change="setEvent"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="イベントをトリガする条件を設定します。"
              >
                <div class="value-label">
                  <p>条件</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="components-event-on-player-placing-condition"
                    class="components-event-on-player-placing-condition"
                    v-on:change="setCondition"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="イベントをトリガするターゲットを指定します。"
              >
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="components-event-on-player-placing-target"
                    class="components-event-on-player-placing-target"
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