export interface PlainObject {
  [key: string | symbol]: any
}

export type ConfigSubItem = [string, any]
export type ConfigItem = [...ConfigSubItem, PlainObject?]
export type ConfigList = Array<ConfigItem>