<template id="event-status-block">
  <div class="event status-block-content">
    <div class="editor-element">
      <div class="editor-element-legend changeable">
        <label
          ><input
            type="text"
            name="event-name"
            class="event-name"
            placeholder="イベント名"
            v-on:change="onChangedEventName"
        /></label>
        <div class="event remove-status-block" title="イベントを削除します。">
          <label class="invisible-Control">
            <input
              type="button"
              class="event-delete event"
              v-on:click="deleteEvent"
            />
            <div class="remove-button-text">- 削除</div>
          </label>
        </div>
      </div>
      <div class="editor-element-body">
        <components
          v-for="key in $store.state.events[index].components"
          :key="key"
          :is="$store.state.components[key].type"
          :uuid="key"
        ></components>
      </div>
      <div class="editor-element-footer element-control">
        <div class="type-modal">
          <label class="invisible-Control">
            <input
              type="button"
              class="modal-open"
              v-on:click="this.$showModal"
            />
            <div class="element-control-text">要素の追加・削除</div>
          </label>
          <div class="modal hide" v-on:click="this.$closeModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title">要素の追加・削除</div>
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
                    class="value-element event_responses_set_block_property"
                    title="ブロックプロパティの値を変更します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_set_block_property"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">ブロックプロパティ</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_set_block"
                    title="ブロックを設置します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_set_block"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">ブロック設置</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_set_block_at_pos"
                    title="指定した座標にブロックを設置します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_set_block_at_pos"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">ブロック設置(座標指定)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_spawn_loot"
                    title="指定したルートテーブルのアイテムをスポーンさせます。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_spawn_loot"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">ルートをスポーン</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_add_mob_effect"
                    title="エンティティにエフェクトを付与します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_add_mob_effect"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">エフェクト付与</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_remove_mob_effect"
                    title="エンティティのエフェクトを削除します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_remove_mob_effect"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">エフェクト削除</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_damage"
                    title="ダメージを与えます。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_damage"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">ダメージ</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_decrement_stack"
                    title="手持ちのアイテムを1つ減らします。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_decrement_stack"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">アイテムデクリメント</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_die"
                    title="キルします。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_die"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">キルする</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_play_effect"
                    title="パーティクルを再生します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_play_effect"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">パーティクルを再生</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_play_sound"
                    title="サウンドを再生します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_play_sound"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">サウンドを再生</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_teleport"
                    title="ランダムにテレポートさせます。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_teleport"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">テレポート</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_transform_item"
                    title="アイテムを変換します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_transform_item"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">アイテム変換</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_trigger"
                    title="イベントをトリガーします。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_trigger"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">イベントトリガー</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_run_command"
                    title="コマンドを実行します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_run_command"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">コマンド実行</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_swing"
                    title="腕を振るアニメーションをします"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_swing"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">スウィング</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_sequence"
                    title="シーケンスを設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_sequence"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">シーケンスを設定</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element event_responses_randomize"
                    title="ランダムに実行します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="event_responses_randomize"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueEventElement"
                      />
                      <div class="checkbox-body">
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
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p class="checkbox-body-text">ランダムに選択</p>
                      </div>
                    </label>
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
      </div>
    </div>
  </div>
</template>

<script>
import event_responses_set_block_property from "@/components/value_elements/event_responses_set_block_property.vue";
import event_responses_set_block from "@/components/value_elements/event_responses_set_block.vue";
import event_responses_set_block_at_pos from "@/components/value_elements/event_responses_set_block_at_pos.vue";
import event_responses_spawn_loot from "@/components/value_elements/event_responses_spawn_loot.vue";
import event_responses_add_mob_effect from "@/components/value_elements/event_responses_add_mob_effect.vue";
import event_responses_remove_mob_effect from "@/components/value_elements/event_responses_remove_mob_effect.vue";
import event_responses_damage from "@/components/value_elements/event_responses_damage.vue";
import event_responses_decrement_stack from "@/components/value_elements/event_responses_decrement_stack.vue";
import event_responses_die from "@/components/value_elements/event_responses_die.vue";
import event_responses_play_effect from "@/components/value_elements/event_responses_play_effect.vue";
import event_responses_play_sound from "@/components/value_elements/event_responses_play_sound.vue";
import event_responses_teleport from "@/components/value_elements/event_responses_teleport.vue";
import event_responses_transform_item from "@/components/value_elements/event_responses_transform_item.vue";
import event_responses_trigger from "@/components/value_elements/event_responses_trigger.vue";
import event_responses_run_command from "@/components/value_elements/event_responses_run_command.vue";
import event_responses_swing from "@/components/value_elements/event_responses_swing.vue";
import event_responses_sequence from "@/components/value_elements/event_responses_sequence.vue";
import event_responses_randomize from "@/components/value_elements/event_responses_randomize.vue";
import svgClose from "~/assets/img/close.svg?raw";
export default {
  components: {
    event_responses_set_block_property,
    event_responses_set_block,
    event_responses_set_block_at_pos,
    event_responses_spawn_loot,
    event_responses_add_mob_effect,
    event_responses_remove_mob_effect,
    event_responses_damage,
    event_responses_decrement_stack,
    event_responses_die,
    event_responses_play_effect,
    event_responses_play_sound,
    event_responses_teleport,
    event_responses_transform_item,
    event_responses_trigger,
    event_responses_run_command,
    event_responses_swing,
    event_responses_sequence,
    event_responses_randomize,
  },
  data() {
    return {
      svgClose,
    };
  },
  props: ["index"],
  methods: {
    onChangedEventName(event) {
      this.$store.commit("setEventName", [this.index, event.target.value]);
    },
    toggleValueEventElement(event) {
      /** @type {Element} */
      const target = event.target;
      this.$store.commit("toggleEventComponent", [
        `${target.name}`,
        this.index,
        target.checked,
      ]);
    },
    deleteEvent() {
      this.$store.commit("deleteStatusBlock", ["events", this.index]);
    },
  },
};
</script>