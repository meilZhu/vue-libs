<!--
 * @fileName: 基础表格组件
 * @Date: 2021-02-25 11:22:26
 * @Author: manyao.zhu
-->
<template>
  <div class="m_table_content">
    <el-table
      class="m_table"
      :data="table"
      :row-key="rowKey"
      style="width: 100%"
      :height="height"
      :max-height="maxHeight"
      :stripe="stripe"
      :border="border"
      :showHeader="showHeader"
      :rowStyle="rowStyle"
      :cellStyle="cellStyle"
      :headerRowStyle="headerRowStyle"
      :headerCellStyle="headerCellStyle"
      :emptyText="emptyText"
      @sort-change="sortChange"
      @select="selectChange"
      @select-all="selectAllChange"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      @cell-click="cellClick"
      @row-click="rowClick"
      @row-contextmenu="rowContextMenu"
      @header-click="headerClick"
      @header-contextmenu="headerContextMenu"
      @header-dragend="headerDragend"
    >
      <!-- 复选框 -->
      <el-table-column
        v-if="showCheckbox"
        type="selection"
        :fixed="true"
        :selectable="checkboxSelectable"
        :reserve-selection="reserveSelection"
        align="center"
        width="55"
      >
      </el-table-column>

      <!-- 索引 -->
      <el-table-column
        v-if="showIndex"
        type="index"
        align="center"
        width="55"
        :index="indexMethod"
      >
      </el-table-column>

      <!-- 单选 -->
      <el-table-column v-if="showRadio" align="center" :fixed="true" width="55">
        <template slot-scope="scope">
          <el-radio
            class="m_table_radio"
            v-model="radio"
            :key="scope.$index"
            :label="scope.row['radioIndex']"
            @change="radioChange(scope.row)"
            >{{ '' }}</el-radio
          >
        </template>
      </el-table-column>
      <!-- 遍历开始 -->
      <template v-for="(item, index) in colData">
        <!-- 操作列 -->
        <el-table-column
          v-if="item.type === 'opr'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :label="item.label"
          :class-name="item.class"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            <slot name="opr" :row="scope.row" :rowIndex="scope.$index"></slot>
          </template>
        </el-table-column>

        <!-- 用户自定义 -->
        <el-table-column
          v-else-if="item.type === 'userDefine'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            <slot name="userDefine" :row="scope.row" :keys="item.prop"></slot>
          </template>
        </el-table-column>

        <!-- 金额 -->
        <el-table-column
          v-else-if="item.type === 'money'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            <span v-if="item.division"
              >{{ item.moneyType ? item.moneyType + ' ' : ''
              }}{{ scope.row[item.prop] | money | division }}
            </span>
            <span v-else
              >{{ item.moneyType ? item.moneyType + ' ' : ''
              }}{{ scope.row[item.prop] | money }}</span
            >
          </template>
        </el-table-column>

        <!-- 数字 -->
        <el-table-column
          v-else-if="item.type === 'number'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            <span v-if="item.division"
              >{{ scope.row[item.prop] | decimal(item.decimal) | division }}
            </span>
            <span v-else>{{
              scope.row[item.prop] | decimal(item.decimal)
            }}</span>
          </template>
        </el-table-column>

        <!-- 大写 -->
        <el-table-column
          v-else-if="item.type === 'upper'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            {{ scope.row[item.prop] | upper }}
          </template>
        </el-table-column>

        <!-- 小写 -->
        <el-table-column
          v-else-if="item.type === 'lower'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            {{ scope.row[item.prop] | lower }}
          </template>
        </el-table-column>

        <!-- 日期 -->
        <el-table-column
          v-else-if="item.type === 'date'"
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
          <template slot-scope="scope">
            {{ scope.row[item.prop] | date(item.dateFormat) }}
          </template>
        </el-table-column>

        <!-- 其他默认 -->
        <el-table-column
          v-else
          :key="index"
          :header-align="item.headerAlign ? item.headerAlign : item.align"
          :align="item.align"
          :prop="item.prop"
          :label="item.label"
          :sortable="item.sort"
          :class-name="item.class"
          :resizable="item.resizable || resizable"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :min-width="item.width"
        >
        </el-table-column>
      </template>
    </el-table>

    <el-pagination
      class="m_pagination"
      v-if="showPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="pageOptions"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data() {
    return {
      radio: null,
    }
  },
  computed: {
    table() {
      let arr = []
      if (this.showRadio) {
        this.tableData.forEach((item, index) => {
          item.radioIndex = index
          arr.push(item)
        })
      } else {
        arr = this.tableData
      }
      return arr
    },
  },
  props: {
    // 列表配置
    colData: {
      type: Array,
      default() {
        return []
      },
    },
    // 表格数据
    tableData: {
      type: Array,
      default() {
        return []
      },
    },
    // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
    reserveSelection: {
      type: Boolean,
      default: false,
    },
    // 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问
    rowKey: {
      type: Function, // 案例 getRowKey (row) {return row.id},
    },
    // 是否展示单选
    showRadio: {
      type: Boolean,
      default: false,
    },
    // 是否展示复选
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    // 是否展示索引
    showIndex: {
      type: Boolean,
      default: false,
    },
    // 是否全局控制拖拽改变列宽
    resizable: {
      type: Boolean,
      default: true,
    },
    // 对某行进行勾选禁用 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选  {row, index}
    checkboxSelectable: {
      type: Function,
    },
    // 表格高度
    height: {
      type: Number,
    },
    //表格的最大高度
    maxHeight: {
      type: Number,
    },
    // 是否开启斑马线列表
    stripe: {
      type: Boolean,
      default: false,
    },
    // 是否展示纵向边框
    border: {
      type: Boolean,
      default: true,
    },
    // 是否展示表头
    showHeader: {
      type: Boolean,
      default: true,
    },
    // 行样式
    rowStyle: {
      type: Function, //  参数 {row， rowIndex}
    },
    // 单元格样式
    cellStyle: {
      type: Function, // {row, column, rowIndex, columnIndex}
    },
    // 表头行的样式
    headerRowStyle: {
      type: Function, // {row, rowIndex}
    },
    // 表头的单元格样式
    headerCellStyle: {
      type: Function, // {row, column, rowIndex, columnIndex}
    },
    //  空数据时显示的文本内容，也可以通过 slot="empty" 设置
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    // 是否展示分页器
    showPagination: {
      type: Boolean,
      default: true,
    },
    // 当前页码
    pageNum: {
      type: Number,
      default: 1,
    },
    // 每页数量
    pageSize: {
      type: Number,
      default: 5,
    },
    // 每页数量的配置项
    pageOptions: {
      type: Array,
      default() {
        return [5, 10, 20, 50, 100]
      },
    },
    // 总数
    total: {
      type: Number,
      default: 0,
    },
  },
  watch: {},
  methods: {
    // 自定义索引
    indexMethod(index) {
      return index + 1
    },

    // 单选事件
    radioChange(item) {
      this.$emit('radioChange', item)
    },

    // 复选的单个勾选
    selectChange(select) {
      this.$emit('checkedChange', select)
    },

    // 复选框的全选功能
    selectAllChange(select) {
      this.$emit('checkedChange', select)
    },

    // 后端排序问题
    sortChange({ column, prop, order }) {
      this.$emit('sort', { column, prop, order })
    },

    // 单元格移入事件
    cellMouseEnter({ row, column, cell, event }) {
      this.$emit('cellMouseEnter', { row, column, cell, event })
    },

    // 单元格的移出事件
    cellMouseLeave({ row, column, cell, event }) {
      this.$emit('cellMouseLeave', { row, column, cell, event })
    },

    // 单元格的点击事件
    cellClick({ row, column, cell, event }) {
      this.$emit('cellClick', { row, column, cell, event })
    },

    // 行的点击事件
    rowClick({ row, column, event }) {
      this.$emit('rowClick', { row, column, event })
    },

    // 某一行的右击事件
    rowContextMenu({ row, column, event }) {
      this.$emit('rowContextMenu', { row, column, event })
    },

    // 某一列标头的点击事件
    headerClick({ column, event }) {
      this.$emit('headerClick', { column, event })
    },

    // 某一列表头的右击事件
    headerContextMenu({ column, event }) {
      this.$emit('headerContextMenu', { column, event })
    },

    // 表头的拖拽事件
    headerDragend({ newWidth, oldWidth, column, event }) {
      this.$emit('headerDragend', { newWidth, oldWidth, column, event })
    },

    // 页数的切换
    handleSizeChange(size) {
      this.$emit('paginationSizeChange', size)
    },

    // 页码的切换
    handleCurrentChange(num) {
      this.$emit('paginationNumChange', num)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.m_table {
  width: 100%;
  .m_table_radio {
    text-align: center;
    /deep/ .el-radio__label {
      padding: 0;
    }
  }
}
.m_pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
