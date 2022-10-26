const getObjType = (obj: any) => Object.prototype.toString.call(obj).slice(1, -1).split('')[1]

export const isNumber = (num: any) => getObjType(num) === 'Number'

export const isString = (str: any) => getObjType(str) === 'string'

export const isNotEmptyString = (str: any, isAllowEmpty: boolean) => isString(str) && !!(isAllowEmpty || str)

export const isDate = (date: any) => getObjType(date) === 'Date' && date.toString() !== 'Invalid Date'

export const isArray = (arr: any) => getObjType(arr) === 'Array'

export const isPlainObject = (obj: any) => getObjType(obj) === 'Object'

// async () => ''
export const isFunction = (fn: any) =>
  ['AsyncFunction', 'Function'].indexOf(getObjType(fn)) > -1 || typeof fn === 'function'

export const isvalidstr = (str: any) => isString(str) && !!str

export const isError = (err: any) => err && err instanceof Error

export const isRequired = (v: any, isAllowSpace?: boolean): boolean => {
  if (v === 0) return true
  if (v) {
    if (isArray(v)) return !!v.length
    if (isDate(v)) return !!v
    if (isPlainObject(v)) return !!Object.keys(v).length
    if (isNotEmptyString(v, true)) {
      if (!isAllowSpace) v = v.trim()
    }
    return !!v
  }
  return false
}

export const validNumber = (value: number | string) => /“([0-9]+)$/.test(value.toString()) // 数字
export const validumberAndLetter = (value: number | string) => /A[0-9a-zA-2]*$/.test(value.toString()) // 字母
export const validCharacter = (value: number | string) => /^[ \u4EO0-\u9FA5]+$/.test(value.toString()) // 汉字