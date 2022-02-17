/*
 * @fileName: 
 * @Date: 2021-06-18 15:02:10
 * @Author: manyao.zhu
 */

export const searchItems = [
  {
    label: 'Component',
    prop: 'program',
    type: 'input'
  },
  {
    label: 'Offset',
    prop: 'offset',
    type: 'number'
  },
  {
    label: 'Limit',
    prop: 'limit',
    type: 'number'
  }
]

export const colData = [
  {
    label: 'Sample No',
    prop: 'sampleNo',
    width: 160
  },
  {
    label: 'Component',
    prop: 'component',
    width: 140
  },
  {
    label: 'Measure Time',
    prop: 'measureTime',
    width: 145,
    type: 'dateTime'
  },
  {
    label: 'Total Features',
    prop: 'totalFeature',
    width: 135,
    align: 'right'
  },
  {
    label: 'Load Time',
    prop: 'loadTime',
    width: 145,
    type: 'dateTime'
  },
  {
    label: 'Operation',
    type: 'opr',
    width: 120
  }
]

export const tableData = [
  {
    sampleNo: '12345',
    component: 'BIW',
    measureTime: '2021-10-10',
    totalFeature: 30,
    loadTime: '2021-10-10'
  },
  {
    sampleNo: '12',
    component: 'VISION',
    measureTime: '2021-10-10',
    totalFeature: 30,
    loadTime: '2021-10-10'
  },
  {
    sampleNo: '345',
    component: 'Component',
    measureTime: '2021-10-10',
    totalFeature: 30,
    loadTime: '2021-10-10'
  }
]