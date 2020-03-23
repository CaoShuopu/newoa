const utils = {}

// 标准时间转年月日时分秒
utils.formatTime = function (time) {
  if (!time) {
    return time
  }
  let date = new Date(time)
  let Year = date.getFullYear()
  let Month = fillZero(date.getMonth() + 1)
  let Day = fillZero(date.getDate())
  let Hours = fillZero(date.getHours())
  let Minutes = fillZero(date.getMinutes())
  let Seconds = fillZero(date.getSeconds())
  let FormatTime = `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`
  return FormatTime
}

// [{value: '', label: ''}],根据value 返回label得知
utils.getLabel = function (dataList, itemValue) {
  if (!Array.isArray(dataList)) {
    return itemValue
  }
  let label = itemValue
  dataList.forEach(item => {
    if (item.value === itemValue) {
      label = item.label
    }
  })
  return label
}
// 去字符串前后空格
utils.trim = function (str) {
  if (typeof str === 'string') {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  } else {
    return str
  }
}

// 身份证隐私保护
utils.toIdcard = function (str) {
  if (str) {
    return str.substr(0, 7) + '********' + str.substr(15, 18)
  }
}

// 表格设置显示省略号的项，划过显示全部信息
utils.formatTableColumns = function (columns) {
  return columns.map(item => {
    if (item.ellipsis && item.render === undefined) {
      item.render = function (h, { row }) {
        return h('span', {
          attrs: {
            title: row[item.key]
          }
        }, row[item.key])
      }
    }
    return item
  })
}

/**
 * 数组按指定字段排序
 */
utils.bubbleSort = function (arr) {
  let i = arr.length
  let j
  let tempExchangVal
  while (i > 0) {
    for (j = 0; j < i - 1; j++) {
      if ((new Date(arr[j].resultTime.replace(new RegExp('-', 'gm'), '/'))).getTime() > (new Date(arr[j + 1].resultTime.replace(new RegExp('-', 'gm'), '/'))).getTime()) {
        tempExchangVal = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tempExchangVal
      }
    }
    i--
  }
  return arr
}

export default utils
