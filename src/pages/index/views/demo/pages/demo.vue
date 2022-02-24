<!--
 * @fileName: 
 * @Date: 2021-01-26 11:11:35
 * @Author: manyao.zhu
-->
<template>
  <section class="demo" id="demo">
    <my-form
      :searchItems="searchItems"
      :formData="formData"
      :isResetSearch="true"
      @search="search"
    >
      <template v-slot:slot>
        <el-input
          class="m_form_item_control"
          style="width: 100%;"
          v-model="formData.slot"
        ></el-input>
      </template>
      <template v-slot:slotTest>
        <el-input
          class="m_form_item_control"
          style="width: 100%;"
          v-model="formData.slotTest"
        ></el-input>
      </template>
    </my-form>

    <my-table :colData="colData" :tableData="tableData">
      <template v-slot:headerUserDefine="scope">
        <span v-if="scope.column.prop === 'birthday'"
          >{{ scope.column.label }}<i class="fa fa-edit"></i
        ></span>
      </template>

      <template v-slot:opr="scope">
        <i
          class="fa m_table_opr fa-pencil-square-o"
          @click="edit(scope.row)"
        ></i>
      </template>

      <template v-slot:userDefine="scope">
        <span
          class="m_status"
          :class="[scope.row['status'] === 0 ? 'm_error' : 'm_warning']"
          v-if="scope.keys === 'statusDesc'"
          >{{ scope.row['statusDesc'] }}</span
        >
      </template>
    </my-table>
    <!-- <el-button type="primary" @click="loadingPdf">加载pdf</el-button> -->
  </section>
</template>

<script>
import { mapActions } from 'vuex'
// import { getImagePdf } from '@styleofpicasso/utils'
// import html2Canvas from 'html2canvas'
// import { removePageCache } from '../../../../shared/utils/page.remvoe-cache'
import { formCon, colData } from '~/components/shared/config/index'
export default {
  name: 'Demo',
  data() {
    return {
      text: null,
      searchItems: formCon,
      formData: {
        text: '',
        number: 7,
        textarea: '1234567',
        date: new Date().getTime(),
        year: null,
        month: null,
        time: null,
        dateTime: null,
        week: null,
        startDate: new Date(),
        endDate: new Date().getTime() + 6 * 24 * 60 * 60 * 1000,
        daterange: null,
        fixedTime: '18:20',
        startDateTime: new Date(),
        endDateTime: new Date().getTime() + 6 * 24 * 60 * 60 * 1000,
        times: null,
        checkgroup: ['a'],
        check: true,
        checkblock: [],
        fileList: [],
      },
      colData,
      tableData: [
        {
          name: '张三',
          age: 18,
          money: 1234567.987,
          num: 123456765.89909,
          sex: '男',
          birthday: new Date(),
          statusDesc: '已婚',
          status: 1,
          firstName: 'sanZHangaaaaaaddddd',
          lastName: 'sanZhang',
        },
        {
          name: '小红',
          age: 19,
          money: 123456,
          num: 123456765,
          sex: '女',
          birthday: new Date().getTime() - 3 * 365 * 24 * 60 * 60 * 1000,
          statusDesc: '未婚',
          status: 0,
          firstName: 'xiaoHong',
          lastName: 'xiaoHong',
        },
        {
          name: '张三',
          age: 18,
          money: 1234567.987,
          num: 123456765.89909,
          sex: '男',
          birthday: new Date(),
          statusDesc: '已婚',
          status: 1,
          firstName: 'sanZHang',
          lastName: 'sanZhang',
        },
        {
          name: '小红',
          age: 19,
          money: 123456,
          num: 123456765,
          sex: '女',
          birthday: new Date().getTime() - 3 * 365 * 24 * 60 * 60 * 1000,
          statusDesc: '未婚',
          status: 0,
          firstName: 'xiaoHong',
          lastName: 'xiaoHong',
        },
        {
          name: '张三',
          age: 18,
          money: 1234567.987,
          num: 123456765.89909,
          sex: '男',
          birthday: new Date(),
          statusDesc: '已婚',
          status: 1,
          firstName: 'sanZHang',
          lastName: 'sanZhang',
        },
        {
          name: '小红',
          age: 19,
          money: 123456,
          num: 123456765,
          sex: '女',
          birthday: new Date().getTime() - 3 * 365 * 24 * 60 * 60 * 1000,
          statusDesc: '未婚',
          status: 0,
          firstName: 'xiaoHong',
          lastName: 'xiaoHong',
        },
        {
          name: '张三',
          age: 18,
          money: 1234567.987,
          num: 123456765.89909,
          sex: '男',
          birthday: new Date(),
          statusDesc: '已婚',
          status: 1,
          firstName: 'sanZHang',
          lastName: 'sanZhang',
        },
        {
          name: '小红',
          age: 19,
          money: 123456,
          num: 123456765,
          sex: '女',
          birthday: new Date().getTime() - 3 * 365 * 24 * 60 * 60 * 1000,
          statusDesc: '未婚',
          status: 0,
          firstName: 'xiaoHong',
          lastName: 'xiaoHong',
        },
      ],
    }
  },

  methods: {
    ...mapActions(['setDemoId']),
    test() {
      this.setDemoId('1234567')
      console.log(this.text)
    },
    jump() {
      this.$router.push({ name: 'home' })
    },
    loadingPdf() {
      // const _self = this
      // getImagePdf('demo', '测试用例')
      // html2Canvas(document.querySelector(`#demo`), {
      //   width: window.screen.availWidth,
      //   height: window.screen.availHeight,
      //   windowWidth: document.body.scrollWidth,
      //   windowHeight: document.body.scrollHeight,
      //   x: 0,
      //   y: window.pageYOffset
      // }).then( res => {
      //   const src = res.toDataURL('image/png')
      //   _self.restoreImg(src, '测试案例')
      // })
      console.log(this.form)
      // getImagePdf('demo', 'Text')
    },
    restoreImg(dataURL, name) {
      let href = dataURL
      let a = document.createElement('a') // 创建a标签
      a.download = name // 设置图片名字
      a.href = href
      a.dispatchEvent(new MouseEvent('click')) //模拟点击进行下载
    },

    search(item) {
      console.log(item)
      this.formData = item
    },

    edit(row) {
      console.log('row', row)
    },

    // 勾选
    selectable(row) {
      console.log(row)
      return row.age === 18
    },

    styleText(scope) {
      console.log(scope)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
@import '~/css/mixin';
.demo {
  width: 100%;
  .m_table_opr {
    color: $themeColor;
  }
  .m_status {
    @include status;
  }
  .m_error {
    background: $errorColor;
  }
  .m_warning {
    background: $successColor;
  }
}
</style>
