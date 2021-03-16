/*
 * @fileName: 页面需要清除缓存工具
 * @Date: 2021-02-24 15:58:14
 * @Author: manyao.zhu
 */

import store from '../../pages/index/store'

export const removePageCache = (to, from, next, self) => {
  // 对已打开的有缓存页面（且需要清除缓存）进行清除缓存
  self.$nextTick(() => {
    console.log(!store.state.routerConfig.cache && from.meta.keepAlive)
    if (!store.state.routerConfig.cache && from.meta.keepAlive) {
      console.log(self)
      const vnode = self.$vnode
      const parentVnode = vnode && vnode.parent
      if (parentVnode && parentVnode.componentInstance) {
        const key = vnode.key == null ? vnode.componentOptions.Ctor.cid + (vnode.componentOptions.tag ? `::${vnode.componentOptions.tag}` : '') : vnode.key
        const cache = parentVnode.componentInstance.cache
        const keys = parentVnode.componentInstance.keys
        if (cache[key]) {
          self.$destroy()
          if (keys.length) {
            const index = keys.indexOf(key)
            if (index > -1) {
              keys.splice(index, 1)
            }
          }
          delete cache[key]
        }
      }
    }
    next()
  })
  
}
