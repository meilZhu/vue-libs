<!--
 * @fileName: 控件类型组件
 * @Date: 2022-01-21 17:02:00
 * @Author: manyao.zhu
-->

<template>
  <section class="m_control_type">
    <ul class="m_type_content">
      <li class="m_type_item">
        <span class="m_type_label">架构类型：</span>
        <el-select class="m_type_value" v-model="framework">
          <el-option
            v-for="item in allFramework"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </li>
      <li class="m_type_item">
        <span class="m_type_label">控件类型</span>
        <el-select
          class="m_type_value"
          v-model="control"
          @change="controlChange"
        >
          <el-option
            v-for="item in allControl"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </li>
    </ul>

    <!-- 空间部分 -->
    <div>
      <draggable
        v-model="controls"
        @end="dragTypeEnd"
        :options="{ group: { name: control, pull: 'clone' }, sort: true }"
        animation="300"
        :sort="false"
        :move="dragTypeMove"
      >
        <transition-group>
          <div class="m_drag_item" v-for="item in controls" :key="item.type">
            {{ item.label }}
          </div>
        </transition-group>
      </draggable>
    </div>
  </section>
</template>

<script>
import draggable from 'vuedraggable'

import CODE_CONFIG from '../../config/create-file-code'
export default {
  name: '',
  data() {
    return {
      framework: 'vue',
      control: 'form',
      allFramework: CODE_CONFIG.allFramework,
      allControl: CODE_CONFIG.allControl,
      controls: CODE_CONFIG.formControl,
      controlTypes: CODE_CONFIG.controlType,
    }
  },
  components: {
    draggable,
  },
  methods: {
    controlChange(value) {
      switch (value) {
        case this.controlTypes.form:
          this.controls = [...CODE_CONFIG.formControl]
          console.log('form', this.controls)
          break
        case this.controlTypes.formSearch:
          this.controls = [...CODE_CONFIG.formSearchControl]
          console.log('formSearch', this.controls)
          break
        case this.controlTypes.table:
          this.controls = [...CODE_CONFIG.tableControl]
          console.log('table', this.controls)
          break
        default:
      }
      console.log(this.controls)
      this.$forceUpdate()
    },
    // 拖拽类型的结束事件
    dragTypeEnd(evt) {
      this.$emit('dragEnd', evt)
    },

    // 拖拽类型的移动事件
    dragTypeMove(evt) {
      this.$emit('dragMove', evt)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_control_type {
  width: 100%;
  /* 头部的样式 */
  .m_type_content {
    width: 100%;
    margin-bottom: 10px;
    .m_type_item {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      .m_type_label {
        width: 80px;
        flex-shrink: 0;
        margin-right: 5px;
      }
      .m_type_value {
        width: 100%;
      }
    }
  }
  /* 托拽部分的样式 */
  .m_drag_item {
    width: 100%;
    height: 25px;
    text-align: center;
    line-height: 25px;
    margin-bottom: 3px;
    background: rgba(0, 0, 0, 0.05);
    cursor: move;
  }
}
</style>
