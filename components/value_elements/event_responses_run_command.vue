<template>
  <div
    class="value-element event_responses_run_command"
    title="コマンドを実行します。"
  >
    <div class="value-label">
      <p>コマンド実行</p>
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
              <div class="modal-title">コマンド実行</div>
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
              <div class="value-element" title="実行するコマンド">
                <div class="value-label">
                  <p>コマンド</p>
                </div>
                <div class="value-input type-array-string">
                  <div class="array-list">
                    <label
                      class="array-data"
                      v-for="(elem, i) in data.command"
                      :key="i"
                    >
                      <div class="array-num">{{ i }}</div>
                      <input
                        type="text"
                        name="event-responses-run-command"
                        class="event-responses-run-command type-array-string"
                        v-on:change="setCommand($event, i)"
                      />
                    </label>
                  </div>
                  <div class="array-list-control">
                    <label class="add-array" title="コマンド欄を追加します。">
                      <input
                        type="button"
                        class="add-array-element invisible-Control"
                        v-on:click="addArrayList"
                      />
                      <div class="add-array-label">
                        <div class="add-array-element-text">+ 追加</div>
                      </div>
                    </label>
                    <label class="remove-array" title="コマンド欄を消します。">
                      <input
                        type="button"
                        class="remove-array-element invisible-Control"
                        v-on:click="removeArrayList"
                      />
                      <div class="remove-array-label">
                        <div class="remove-array-element-text">- 削除</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="value-element" title="実効するターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-run-command-target"
                    class="event-responses-run-command-target"
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
        command: [""],
        target: "default",
      },
    };
  },
  props: ["group", "uuid"],
  methods: {
    addArrayList() {
      this.data = {
        ...this.data,
        command: [...this.data.command, ""],
      };
    },
    removeArrayList() {
      let len = this.data.command.length;
      if (len > 1) {
        this.data = {
          ...this.data,
          command: this.data.command.map((val) => val).splice(len - 1, 1),
        };
      }
    },
    setCommand(event, index) {
      this.data = {
        ...this.data,
        command: this.data.command.map((val, i) =>
          i == index ? event.target?.value : val
        ),
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
      this.$store.commit("setEventData", [this.uuid, this.group, this.data]);
    },
  },
};
</script>