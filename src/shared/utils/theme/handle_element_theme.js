/*
 * @fileName: 处理element-ui 的主题自定义
 * @Date: 2021-04-29 10:44:53
 * @Author: manyao.zhu
 */

import store from '~/pages/index/store'
const version = require('element-ui/package.json').version
const ORIGINAL_THEME = '#409EFF' // default color
const theme = {
  chalk: store.state.themeConfig.elementStyle || null
}

export const themeChange = (newColor, oldColor, defaultColor) => {
  return new Promise((resolve) => {
    if (typeof newColor !== 'string')  {
      newColor = defaultColor
    }
    const themeCluster = getThemeCluster(newColor.replace('#', ''))
    const originalCluster = oldColor ? getThemeCluster(oldColor.replace('#', '')) : getThemeCluster(newColor.replace('#', ''))

    const getHandler = (variable, id) => {
      return () => {
        const originalCluster = getThemeCluster(ORIGINAL_THEME.replace('#', ''))
        const newStyle = updateStyle(theme[variable], originalCluster, themeCluster)
        let styleTag = document.getElementById(id)
        if (!styleTag) {
          styleTag = document.createElement('style')
          styleTag.setAttribute('id', id)
          document.head.appendChild(styleTag)
        }
        styleTag.innerText = newStyle
      }
    }

    const chalkHandler = getHandler('chalk', 'chalk-style')
    if (!theme.chalk) {
      const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
      getCSSString(url, chalkHandler, 'chalk')
    } else {
      chalkHandler()
    }
    
    const styles = [].slice.call(document.querySelectorAll('style'))
      .filter(style => {
        const text = style.innerText
        return new RegExp(oldColor, 'i').test(text) && !/Chalk Variables/.test(text)
      })
  
    styles.forEach(style => {
      const { innerText } = style
      if (typeof innerText !== 'string') return
      style.innerText = updateStyle(innerText, originalCluster, themeCluster)
    })

    resolve(newColor)
  })
}

// 更新颜色
const updateStyle = (style, oldCluster, newCluster) => {
  let newStyle = style
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
  })
  return newStyle
}

// 请求对应
const getCSSString = (url, callback, variable) => {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      theme[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
      callback()
    }
    
  }
  xhr.open('GET', url)
  xhr.send()
}

// 主题色的提取
const getThemeCluster = (theme) => {
  const tintColor = (color, tint) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    if (tint === 0) { // when primary color is in its rgb space
      return [red, green, blue].join(',')
    } else {
      red += Math.round(tint * (255 - red))
      green += Math.round(tint * (255 - green))
      blue += Math.round(tint * (255 - blue))

      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)

      return `#${red}${green}${blue}`
    }
  }

  const shadeColor = (color, shade) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    red = Math.round((1 - shade) * red)
    green = Math.round((1 - shade) * green)
    blue = Math.round((1 - shade) * blue)

    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)

    return `#${red}${green}${blue}`
  }

  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
  }
  clusters.push(shadeColor(theme, 0.1))
  return clusters
}
