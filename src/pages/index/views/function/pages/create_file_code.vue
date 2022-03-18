<!--
 * @fileName: 
 * @Date: 2022-01-20 18:06:29
 * @Author: manyao.zhu
-->
<template>
  <section class="m_file_code">
    <my-drag :minWidth="200">
      <template v-slot:side>
        <div class="m_file_side">
          <control-type @dragEnd="dragEnd" @dragMove="dragMove"></control-type>
        </div>
      </template>

      <template v-slot:layout>
        <div class="m_add_function">
          <el-button type="primary" @click="addPageFunction"
            >添加功能块</el-button
          >
        </div>
        <draggable v-model="pageControls" animation="300">
          <div
            v-for="(item, idx) in pageControls"
            class="m_control_item"
            :key="idx"
          >
            <!-- 控件内容 -->
            <control-layout
              :items="item.itemList"
              :controlName="item.control"
              @controlEdit="controlEdit"
              @controlDelete="controlDelete"
            ></control-layout>
          </div>
        </draggable>
      </template>
    </my-drag>
    <!-- 控件配置项的编辑与新增 -->
    <control-dialogs
      v-model="controlDialog"
      @controlCancel="controlCancel"
    ></control-dialogs>
    <!-- 添加页面的新的功能分区以及编辑 -->
    <control-page-function
      v-model="showPageFunction"
      :type="showPageFunctionType"
      :item="pageFunctionItem"
      @functionPartition="functionPartition"
    ></control-page-function>
  </section>
</template>

<script>
import draggable from 'vuedraggable'
import ControlType from '../components/file-code/control-type.vue'
import ControlLayout from '../components//file-code/control-layout.vue'
import ControlDialogs from '../components/file-code/control-dialog.vue'
import ControlPageFunction from '../components/file-code/control_page_function'

import CODE_DONFIG from '../config/create-file-code'
export default {
  name: '',
  data() {
    return {
      dragMoveItem: null, // 控件弹框需要编辑的属性
      dragTargetItem: null, // 拖拽位置的目标元素
      controlDialog: false, // 控件编辑的弹窗控制属性
      operationType: null, // 控件编辑弹窗操作的类型
      controlTypes: CODE_DONFIG.controlType,
      pageControls: [], // 所有控件的盒子
      showPageFunction: false, // 控制页面添加新功能分区弹窗的属性
      showPageFunctionType: 'add', // 展示功能分区弹窗的类型
      pageFunctionItem: {},
    }
  },
  components: {
    draggable,
    ControlType,
    ControlLayout,
    ControlDialogs,
    ControlPageFunction,
  },
  methods: {
    // 添加功能模块事件
    addPageFunction() {
      this.showPageFunctionType = 'add'
      this.showPageFunction = true
    },
    // 左侧菜单的移动事件
    dragMove(evt) {
      const item = evt.relatedContext.element
      const dragItem = evt.draggedContext.element
      console.log(item, dragItem)
      if (!item.prop || item.controlType !== dragItem.controlType) {
        this.dragMoveItem = null
        return false
      }

      this.dragMoveItem = dragItem
      this.dragTargetItem = item
      return true
    },

    // 左侧菜单的拖拽结束事件
    dragEnd() {
      if (!this.dragMoveItem) {
        this.resetControl()
      } else {
        this.controlDialog = true
        this.operationType = 'add'
      }
    },

    // 控件编辑的取消事件
    controlCancel() {
      this.resetControl()
    },

    // 功能分区新增和编辑的确定事件
    functionPartition(item) {
      if (this.showPageFunctionType === 'add') {
        if (
          this.pageControls.some((it) => it.controlCode === item.controlCode)
        ) {
          return this.$message.warning('该功能已包含，请重新定义功能CODE！')
        }
        this.showPageFunction = false
        this.pageControls.push({
          itemList: [
            {
              label: `${item.controlDesc} 控件类型： ${item.control}`,
              prop: 'pageControlTitle',
              controlType: item.control,
              controlCode: item.controlCode,
              ...item,
            },
          ],
          ...item,
        })
      }

      if (this.showPageFunctionType === 'edit') {
        console.log(2122)
      }
    },

    // 内容的编辑事件
    controlEdit(item) {
      if (item.idx === 0) {
        this.pageFunctionItem = item.data
        this.showPageFunction = true
        this.showPageFunctionType = 'edit'
      }
    },

    // 内容的删除事件
    controlDelete(item) {
      console.log(item)
    },

    // 当新增或编辑取消时， 数据不变
    resetControl() {
      this.pageControls.forEach((item) => {
        if (
          this.dragTargetItem ||
          (this.dragTargetItem &&
            item.controlCode === this.dragTargetItem.controlCode)
        ) {
          item.itemList = [...item.itemList]
        }
      })
      this.dragMoveItem = null
      this.dragTargetItem = null
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_file_code {
  width: 100%;
  height: 100%;
  display: flex;
  .m_file_side {
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: auto;
  }

  .m_add_function {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
