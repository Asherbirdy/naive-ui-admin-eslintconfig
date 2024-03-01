import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

// ** Type Imports
import type { RouterState } from '@/types'

export const useRouterStore = defineStore('routerStore', () => {
  // ** State Data
  const state = ref<RouterState>({
    route: null,
    routesList: []
  })

  // ** Actions
  const setRoute = (route: RouteLocationNormalizedLoaded) => {
    state.value.route = route
  }

  // ** Getters
  const route = computed<RouteLocationNormalizedLoaded | null>(() => state.value.route)
  const routesList = computed<RouteLocationNormalizedLoaded[]>(() => state.value.routesList)

  return {
    setRoute,
    route,
    routesList
  }
})
