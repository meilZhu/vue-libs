/*
 * @fileName: 国际化处理的脚本
 * @Date: 2021-02-23 15:53:04
 * @Author: manyao.zhu
 */

import Vue from "vue";
import VueI18n from "vue-i18n";
import store from '~/pages/index/store'
Vue.use(VueI18n);

/**
 * 这里是自动添加语言并热加载
 */
function loadMessages() {
  const context = require.context(
    "~/assets/lang/",
    true,
    /[a-z0-9-_]+\.json$/i
  );

  const messages = context
    .keys()
    .map((key) => ({ key, locale: key.match(/[a-z0-9-_]+/i)[0] }))
    .reduce(
      (messages, { key, locale }) => ({
        ...messages,
        [locale]: context(key),
      }),
      {}
    );

  return { context, messages };
}

const { context, messages } = loadMessages();

const i18n = new VueI18n({
  locale: store.state.themeConfig.language,
  messages,
});

// 热替换
if (module.hot) {
  module.hot.accept(context.id, () => {
    const { messages: newMessages } = loadMessages();

    Object.keys(newMessages)
      .filter((locale) => messages[locale] !== newMessages[locale])
      .forEach((locale) => {
        messages[locale] = newMessages[locale];
        i18n.setLocaleMessage(locale, messages[locale]);
      });
  });
}

export default i18n;
