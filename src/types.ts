import { VuetifyOptions } from 'vuetify'

export interface I18nString {
  key: string
  options?: any
  scope?: 'local' | 'parent' | 'global'
}

export type BetterString = string | I18nString

export interface BasicLink {
  url: string
  icon?: string
  title?: BetterString
}

export interface LinkGroup {
  title?: BetterString
  icon?: string
  children: LinkCollection
}

export type Link = BasicLink | LinkGroup
export type LinkCollection = Record<string, Link> | Link[]
export type BrandKind = 'company' | 'product' | 'personal'

export interface ModuleOptions {
  i18n?: {
    localeDir?: string
  }
  branding?: {
    kind: BrandKind
    license?: string | null
  }
  vuetify?: VuetifyOptions
  layouts?: Record<
    string,
    {
      links?: LinkCollection
    }
  >
}
