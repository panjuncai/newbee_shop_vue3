import type { Component } from "vue"

export interface RouteMeta {
  path: string
  name: string
  component: Component
  meta: {
    index: number
  }
}