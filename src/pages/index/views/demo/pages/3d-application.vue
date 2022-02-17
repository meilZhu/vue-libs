<!--
 * @fileName: 
 * @Date: 2021-03-15 09:13:11
 * @Author: manyao.zhu
-->
<template>
  <section class="application">
    <my-application
      :headerHeight="132"
      :containMenuWidth="routerConfig.menuWidth + 40"
      :modelData="modelData"
      :isLoading="appIsLoading"
      :isCollapsedMenu="true"
      :hasOtherTree="false"
      @fetchJtFile="fetchJtFile"
      @setApploading="setApploading"
      @changeEnginSize="changeEnginSize"
      @changeModelSearch="changeModelSearch"
    >
      <!-- 左侧菜单 -->
      <template v-slot:tree-loading-point>
        <el-tooltip
          class="item"
          effect="light"
          content="加载测点"
          placement="bottom"
        >
          <el-button class="g-mr10" type="text" size="mini">
            <i class="el-ndqs-point"></i>
          </el-button>
        </el-tooltip>
      </template>

      <!-- 检索组件 -->
      <!-- <template v-slot:search>
        <my-model-search
          v-model="showModelSearch"
          :componentList="$NDQSComponentSelector"
          :loading="searchLoading"
          :list="prdModelList"
          :showTab="true"
          @onSearch="onSearch"
          @changeComponentId="changeComponentId"
          @onSubmit="onSubmit"
        ></my-model-search>
      </template> -->

      <!-- 3d的统计图框视图层 (这里面需要在生成pdf时用，和3d视图层在一起) -->
      <!-- <template v-slot:layer>
        <MpAxisLayer v-model="showReport"></MpAxisLayer>
      </template> -->

      <!-- 页面关于3d的操作按钮的插槽 -->
      <!-- <template v-slot:menu-operation>
        <ModelMenu
          :modelData="modelData"
          @onReport="onReport"
          @onShowReportResult="onShowReportResult"
          @createPdf="createPdf"
          @showSatisticLayer="drawer = true"
          @showPdfFile="pdfDrawer = true"
        >
        </ModelMenu>
      </template> -->
      <!-- 页面的其他操作项 <也就是在模型上方展示的> -->
      <!-- <template v-slot:outer-layer>
        <heatmap-legend v-if="isShowHeatMap" :max-value="valueRange[1]" :min-value="valueRange[0]" :steps="colors" />
      </template> -->
    </my-application>
  </section>
</template>

<script>
// import { swanAPI } from '~/shared/client'
// import _ from 'lodash'
import modelData from '../data/jt_model_origin'
import { mapState } from 'vuex'
export default {
  name: 'three-3d',
  data() {
    return {
      modelData: null,
      appIsLoading: false,
    }
  },
  mounted() {
    // this.searchParts()
    this.modelData = modelData
    console.log('modelData', this.modelData)
  },
  computed: {
    ...mapState(['routerConfig']),
  },
  methods: {
    // searchParts(no = '') {
    //   const param = {
    //     part_number: _.trim(no) || '*',
    //     offset: 0,
    //     limit: 200,
    //   }
    //   swanAPI.searchPart(param).then( res => {
    //     console.log(res)
    //   })
    // }
    fetchJtFile(obj) {
      console.log(obj)
    },
    setApploading(bool) {
      console.log(bool)
    },
    changeModelSearch() {},
    changeEnginSize(obj) {
      console.log(obj)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared.scss';
.application {
  width: 100%;
  height: 100%;
  .tree-action {
    display: flex !important;
    padding: 2px 10px;
    height: 46px;
    border-bottom: 1px solid #e2e2e2;
    [class*='el-ndqs-'],
    [class^='el-ndqs-'],
    [class*='el-icon-'],
    [class^='el-icon-'] {
      font-size: 30px;
      color: $fontColor;
      &:hover {
        color: $themeColor;
      }
    }
    .el-ndqs-checkbox {
      color: $fontColor;
      &:hover {
        color: $fontColor;
      }
      &.checked {
        color: $themeColor;
      }
    }
    .g-mr10 {
      margin: 0 10px;
    }
  }
}
</style>
