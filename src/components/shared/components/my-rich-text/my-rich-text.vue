<!--
 * @fileName: 
 * @Date: 2022-02-25 10:50:57
 * @Author: manyao.zhu
-->
<template>
  <section class="m_rich_text">
    <textarea :id="tinymceId" class="m_tinymce" v-model="html"></textarea>
  </section>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import Vue from 'vue'
const bus = new Vue()

export default {
  name: 'MyRichText',
  props: {
    plugins: {
      type: [String, Array],
      default: 'link lists image table wordcount',
    },
    // 在toolbar中添加工具栏相应按钮
    toolbar: {
      type: [String, Array, Boolean],
      default:
        'bold italic underline strikethrough | formatselect | fontsizeselect | fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo  | removeformat',
    },
    // 是否编辑
    edit: {
      type: Boolean,
      default: true,
    },
    // 富文本ID
    tinymceId: {
      type: String,
      default: 'mTinymce',
    },
    // 富文本内容
    html: {
      type: String,
      default: '',
    },
  },
  watch: {
    edit(val) {
      this.editorInit.toolbar = val ? this.toolbar : false
      tinymce.editors[this.tinymceId].destroy()
      tinymce.init(this.editorInit)
      tinymce.editors[this.tinymceId].setMode(val ? 'design' : 'readonly')
    },
  },
  data() {
    return {
      editor: null,
      editorInit: {},
    }
  },
  mounted() {
    const _this = this
    this.editorInit = {
      selector: `#${this.tinymceId}`,
      language_url: './tinymce/zh_CN.js',
      language: 'zh_CN',
      inline: false,
      skin_url: './tinymce/skins/ui/oxide',
      content_css: `./tinymce/skins/content/default/content.css`,
      height: 300,
      plugins: '',
      toolbar: this.edit ? this.toolbar : false,
      branding: false,
      menubar: false,
      setup: function(editor) {
        editor.on('keyup', () => {
          _this.$emit('update:html', editor.getContent())
        })
      },
    }
    tinymce.init(this.editorInit)
  },
  methods: {},
  beforeDestroy() {
    tinymce.editors[this.tinymceId].destroy()
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.m_rich_text {
  width: 100%;
  height: 100%;
  .m_tinymce {
    width: 100%;
    height: 100%;
  }
}
</style>
