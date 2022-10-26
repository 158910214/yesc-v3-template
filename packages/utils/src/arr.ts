import type { ConfigItem, ConfigList } from '@yesc/typings'
import { isFunction, isPlainObject } from './valid'

export const reducify = (arr: any[], fn: Function, initedValue = {}) =>
  arr.reduce((x, y, index) => fn(x, y, index), initedValue)

const DEFAULT_FN = (y: any, _: number) => ({ [y[0]]: y[1] })
export const reducify2Obj = (arr: any[], fn = DEFAULT_FN, initedState = {}) =>
  reducify(
    arr,
    (x: any, y: any, index: number) => ({
      ...x,
      ...fn(y, index)
    }),
    initedState
  )

export const createMeta = (item: ConfigItem, keyList: Array<string> = ['label', 'prop']) => {
  let extraItem = null
  if (item.length > keyList.length) {
    extraItem = item.slice(keyList.length, keyList.length + 1)[0]
  }
  if (!isPlainObject(extraItem)) {
    extraItem = {}
  }
  return {
    ...reducify2Obj(keyList, (key, index) => {
      if (isFunction(key)) {
        return key[item[index]]
      }
      return { [key]: item[index] }
    })
  }
}

export const createMetaList = (arr: ConfigList, keyList: Array<string> = ['label', 'prop']) => arr.map(item => createMeta(item, keyList))