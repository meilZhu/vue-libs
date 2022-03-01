<!--
 * @fileName: 
 * @Date: 2022-02-25 10:50:57
 * @Author: manyao.zhu
-->
<template>
  <section class="m_rich_text">
    <Editor
      v-if="edit"
      id="tinymce"
      v-model="tinymceHtml"
      :disabled="!edit"
      :init="editorInit"
    ></Editor>
    <!-- <Editor
      v-if="!edit"
      id="tinymce"
      v-model="tinymceHtml"
      :disabled="!edit"
      :init="editorInit"
    ></Editor> -->
  </section>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'

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
    edit: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    edit() {
      tinymce.init({})
    },
  },
  data() {
    return {
      tinymceHtml: '请输入文本',
      editorInit: {
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
      },
    }
  },
  components: {
    Editor,
  },
  mounted() {
    tinymce.init({})
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.m_rich_text {
  width: 100%;
  height: 100%;
}
</style>
