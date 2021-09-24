<template>
  <div
    class="value-element event_responses_play_effect"
    title="パーティクルを再生します。"
  >
    <div class="value-label">
      <p>パーティクルを再生</p>
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
              <div class="modal-title">パーティクルを再生</div>
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
              <div class="value-element" title="再生するパーティクルID">
                <div class="value-label">
                  <p>パーティクルID</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-play-effect-id"
                    class="event-responses-play-effect-id"
                    v-on:change="setId"
                  />
                </label>
              </div>
              <div class="value-element" title="再生するパーティクルのデータ値">
                <div class="value-label">
                  <p>データ値</p>
                </div>
                <label class="value-input">
                  <input
                    type="number"
                    min="0"
                    name="event-responses-play-effect-data"
                    class="event-responses-play-effect-data"
                    value="0"
                    step="1"
                    v-on:change="setData"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="パーティクルを再生するターゲット"
              >
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-play-effect-target"
                    class="event-responses-play-effect-target"
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
        id: "",
        data: 0,
        target: "default",
      },
    };
  },
  props: ["uuid"],
  created() {
    this.onChangedValue();
  },
  methods: {
    setId(event) {
      this.data = {
        ...this.data,
        id: event.target.value,
      };
      this.onChangedValue();
    },
    setData(event) {
      this.data = {
        ...this.data,
        data: Number(event.target.value),
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