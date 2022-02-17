<!--
 * @fileName: 
 * @Date: 2022-01-21 17:02:28
 * @Author: manyao.zhu
-->
<template>
  <div class="m_control_layout">
    <draggable
      v-model="formCotrol"
      :group="controlName"
      :move="controlMove"
      :style="{ 'min-height': '20px' }"
      animation="300"
    >
      <div
        v-for="(item, idx) in formCotrol"
        class="m_control_item"
        :class="idx === 0 ? 'm_control_item_title' : ''"
        :key="item.prop"
      >
        <span>{{ item.label }}</span>
        <span class="m_control_edit">
          <el-tooltip
            class="item"
            effect="dark"
            content="编辑"
            placement="left-start"
          >
            <i
              class="fa fa-pencil-square-o"
              @click="editControl(item, idx)"
            ></i>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="删除"
            placement="left-start"
          >
            <i class="fa fa-trash" @click="deleteControl(item, idx)"></i>
          </el-tooltip>
        </span>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: '',
  components: {
    draggable,
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    controlName: {
      type: String,
      default: 'form',
    },
  },
  watch: {
    items: {
      handler: function(val) {
        this.formCotrol = JSON.parse(JSON.stringify(val))
      },
      deep: true,
      immediate: true,
    },
    formCotrol: {
      handler: function(val) {
        console.log(val)
      },
      deep: true,
    },
  },
  data() {
    return {
      formCotrol: [
        {
          label: '输入框',
          type: 'input',
          prop: 'seee',
        },
      ],
    }
  },
  methods: {
    // 控件的移动
    controlMove(evt) {
      const item = evt.relatedContext.element
      if (!item.prop || item.prop === 'pageControlTitle') return false
      return true
    },

    // 编辑事件
    editControl(item, idx) {
      this.$emit('controlEdit', { data: item, idx })
    },

    // 删除事件
    deleteControl(item, idx) {
      this.$emit('controlDelete', { data: item, idx })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_control_layout {
  width: 100%;
  border: 1px #ccc solid;
  padding: 3px;
  .m_control_layout_title {
    width: 100%;
    text-align: left;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .m_control_item {
    width: 100%;
    height: 25px;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.1);
    line-height: 25px;
    cursor: move;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .m_control_edit {
      display: inline-flex;
      align-items: center;
      line-height: 25px;
      & > i {
        margin-left: 10px;
      }
    }
  }

  .m_control_item_title {
    background: $themeColor;
    cursor: default;
  }
}
</style>
