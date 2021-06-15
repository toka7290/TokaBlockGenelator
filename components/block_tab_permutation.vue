<template id="permutation-block-tab">
  <div class="permutations block-tab-container selected">
    <div class="editor-element">
      <div class="editor-element-legend">
        <p>Condition</p>
      </div>
      <div
        class="value-element"
        title="パーミュテーションが適応される条件を設定します。"
      >
        <div class="value-label">
          <label for="permutations_condition">状況</label>
        </div>
        <div class="value-input">
          <input type="text" name="uuid" class="permutations_condition" />
        </div>
      </div>
    </div>
    <div
      class="editor-element"
      title="パーミュテーションで適応されるコンポーネントを設定します。"
    >
      <div class="editor-element-legend">
        <p>Components</p>
      </div>
      <div class="editor-element-body">
        <components
          v-for="(component, key, i) in $store.state.permutations[id]
            .components"
          :key="i"
          :is="`${component.name}`"
          :group="component.group"
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
                    class="value-element components_loot"
                    title="このブロックが破壊された時に落とすアイテムが記述されたルートテーブルを指定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_loot"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">ルートテーブル</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_display_name"
                    title="ブロックの画面に表示される名前を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_display_name"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">表示名</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_tag"
                    title="ブロックにタグを設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_tag"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">タグ</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_placement_filter"
                    title="ブロックが設置できる面とブロックを設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_placement_filter"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">配置フィルター</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_preventsjumping"
                    title="MOBがブロックを飛び越えることを禁止します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_preventsjumping"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">飛び越え禁止</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_unwalkable"
                    title="MOBがブロックを通り抜けるのを禁止します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_unwalkable"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">通り抜け禁止</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_map_color"
                    title="地図に表示されるブロックの色を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_map_color"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">地図の色</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_crafting_table"
                    title="ブロックに作業台の機能を付けます。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_crafting_table"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">作業台</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_geometry"
                    title="ブロックのジオメトリを設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_geometry"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">ジオメトリ</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_material_instances"
                    title="ブロックのマテリアルインスタンスを設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_material_instances"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">マテリアルインスタンス</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_entity_collision"
                    title="ブロックの物理的な衝突判定を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_entity_collision"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">衝突判定</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_pick_collision"
                    title="ブロックの選択時の判定を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_pick_collision"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">選択判定</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_rotation"
                    title="ブロックを回転させます。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_rotation"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">回転</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_breathability"
                    title="ブロックの通気性を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_breathability"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">通気性</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_block_light_absorption"
                    title="このブロックが吸収する光の量を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_block_light_absorption"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">光の吸収</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_block_light_emission"
                    title="このブロックが発する光の量を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_block_light_emission"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">発光量</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_destroy_time"
                    title="このブロックの破壊にかかる時間を設定します[秒]"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_destroy_time"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">破壊にかかる時間</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_explosion_resistance"
                    title="このブロックの爆発耐性を設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_explosion_resistance"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">爆発耐性</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_breakonpush"
                    title="ブロックをピストンで押すと破壊されるようにします。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_breakonpush"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">ピストンで破壊</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_immovable"
                    title="ブロックをピストンで押し引きできないようにします。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_immovable"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">ピストン押引不可</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_friction"
                    title="このブロックの上をエンティティが移動するときの止まりにくさを設定します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_friction"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">摩擦</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_flammable"
                    title="ブロックの燃焼に関する設定をします。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_flammable"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">燃焼</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_fall_on"
                    title="ブロックにエンティティが落ちてきた時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_fall_on"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(落ちてきた時)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_interact"
                    title="ブロックにインタラクトした時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_interact"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(インタラクト)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_placed"
                    title="ブロックが設置された時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_placed"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(置かれた時)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_player_placing"
                    title="ブロックがプレイヤーによって置かれた時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_player_placing"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">
                          トリガ(プレイヤーが置いた時)
                        </p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_step_on"
                    title="エンティティがブロックを歩き始めた時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_step_on"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(踏んだ時)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_step_off"
                    title="エンティティがブロックを離れた時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_step_off"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(離れた時)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_on_player_destroyed"
                    title="プレイヤーによってブロックが破壊された時のイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_on_player_destroyed"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(破壊された時)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_ticking"
                    title="ティック毎に発生するイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_ticking"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">トリガ(ティック毎)</p>
                      </div>
                    </label>
                  </div>
                  <div
                    class="value-element components_event_random_ticking"
                    title="ランダムテックごとに発生するイベントを定義します。"
                  >
                    <label class="value-checkbox">
                      <input
                        type="checkbox"
                        name="components_event_random_ticking"
                        class="element-control-switch invisible-Control"
                        v-on:click="toggleValueElement"
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
                        <p class="checkbox-body-text">
                          トリガ(ランダムティック)
                        </p>
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
import components_loot from "@/components/value_elements/components_loot.vue";
import components_display_name from "@/components/value_elements/components_display_name.vue";
import components_tag from "@/components/value_elements/components_tag.vue";
import components_placement_filter from "@/components/value_elements/components_placement_filter.vue";
import components_preventsjumping from "@/components/value_elements/components_preventsjumping.vue";
import components_unwalkable from "@/components/value_elements/components_unwalkable.vue";
import components_map_color from "@/components/value_elements/components_map_color.vue";
import components_crafting_table from "@/components/value_elements/components_crafting_table.vue";
import components_geometry from "@/components/value_elements/components_geometry.vue";
import components_material_instances from "@/components/value_elements/components_material_instances.vue";
import components_entity_collision from "@/components/value_elements/components_entity_collision.vue";
import components_pick_collision from "@/components/value_elements/components_pick_collision.vue";
import components_rotation from "@/components/value_elements/components_rotation.vue";
import components_breathability from "@/components/value_elements/components_breathability.vue";
import components_block_light_absorption from "@/components/value_elements/components_block_light_absorption.vue";
import components_block_light_emission from "@/components/value_elements/components_block_light_emission.vue";
import components_destroy_time from "@/components/value_elements/components_destroy_time.vue";
import components_explosion_resistance from "@/components/value_elements/components_explosion_resistance.vue";
import components_breakonpush from "@/components/value_elements/components_breakonpush.vue";
import components_immovable from "@/components/value_elements/components_immovable.vue";
import components_onlypistonpush from "@/components/value_elements/components_onlypistonpush.vue";
import components_friction from "@/components/value_elements/components_friction.vue";
import components_flammable from "@/components/value_elements/components_flammable.vue";
import components_event_on_fall_on from "@/components/value_elements/components_event_on_fall_on.vue";
import components_event_on_interact from "@/components/value_elements/components_event_on_interact.vue";
import components_event_on_placed from "@/components/value_elements/components_event_on_placed.vue";
import components_event_on_player_placing from "@/components/value_elements/components_event_on_player_placing.vue";
import components_event_on_step_on from "@/components/value_elements/components_event_on_step_on.vue";
import components_event_on_step_off from "@/components/value_elements/components_event_on_step_off.vue";
import components_event_on_player_destroyed from "@/components/value_elements/components_event_on_player_destroyed.vue";
import components_event_ticking from "@/components/value_elements/components_event_ticking.vue";
import components_event_random_ticking from "@/components/value_elements/components_event_random_ticking.vue";

import svgClose from "~/assets/img/close.svg?raw";

export default {
  components: {
    components_loot,
    components_display_name,
    components_tag,
    components_placement_filter,
    components_preventsjumping,
    components_unwalkable,
    components_map_color,
    components_crafting_table,
    components_geometry,
    components_material_instances,
    components_entity_collision,
    components_pick_collision,
    components_rotation,
    components_breathability,
    components_block_light_absorption,
    components_block_light_emission,
    components_destroy_time,
    components_explosion_resistance,
    components_breakonpush,
    components_immovable,
    components_onlypistonpush,
    components_friction,
    components_flammable,
    components_event_on_fall_on,
    components_event_on_interact,
    components_event_on_placed,
    components_event_on_player_placing,
    components_event_on_step_on,
    components_event_on_step_off,
    components_event_on_player_destroyed,
    components_event_ticking,
    components_event_random_ticking,
  },
  data() {
    return {
      svgClose,
      id: "",
    };
  },
  created() {
    this.id = Object.keys(this.$vnode.data.class)[0];
  },
  methods: {
    toggleValueElement(event) {
      /** @type {Element} */
      const target = event.target;
      this.$store.commit("togglePermutationComponent", [
        `${target.name}`,
        this.id,
        target.checked,
      ]);
    },
  },
};
</script>