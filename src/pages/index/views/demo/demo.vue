<!--
 * @fileName: 
 * @Date: 2021-01-26 11:11:35
 * @Author: manyao.zhu
-->
<template>
  <section class="demo" id="demo">
    <my-form :searchItems="searchItems" :formData="formData" @search="search"></my-form>
    <my-table></my-table>
    <el-button type="primary" @click="loadingPdf">加载pdf</el-button>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  // import { getImagePdf } from '@styleofpicasso/utils'
  // import html2Canvas from 'html2canvas'
  import { removePageCache } from '../../../../shared/utils/page.remvoe-cache'
  import { formCon } from '../../../../components/shared/config/index'
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
          date: (new Date()).getTime(),
          year: null,
          month: null,
          time: null,
          dateTime: null,
          week: null,
          startDate: new Date(),
          endDate: (new Date()).getTime() + 6 * 24 * 60 * 60 * 1000,
          daterange: null,
          fixedTime: '18:20',
          startDateTime: new Date(),
          endDateTime: (new Date()).getTime() + 6 * 24 * 60 * 60 * 1000,
          times: null
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
        console.log(vm)
      })
    },
    beforeRouteLeave(to, from, next) {
      removePageCache(to, from, next, this)
    },
    methods: {
      ...mapActions(['setDemoId']),
      test() {
        this.setDemoId('1234567')
        console.log(this.text)
      },
      jump() {
        this.$router.push({name: 'home'})
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
      },
       restoreImg(dataURL, name) {
        let href = dataURL
        let a = document.createElement('a') // 创建a标签
        a.download = name // 设置图片名字
        a.href = href
        a.dispatchEvent(new MouseEvent('click'))	//模拟点击进行下载
      },

      search(item) {
        console.log(item)
        this.formData = item
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
