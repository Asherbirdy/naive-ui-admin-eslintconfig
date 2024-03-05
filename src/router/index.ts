import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { useAuthApi } from '@/hooks/apis'
import { removeToken } from '@/utils'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const handlePagePermissions = async () => {
  try {
    await useAuthApi.authPermission()
    return true
  }
  catch (error) {

    removeToken('accessToken')
    return false
  }
}

router.beforeEach(async (to, _, next) => {
  const isAuthenticated = await handlePagePermissions()

  // 到登入頁，但是已經燈登入過，導向主頁
  if (isAuthenticated && to.name === 'Login') {
    return next({ name: 'Index' })
  }

  // 認證失敗，重新回登入頁面
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  next()
})

export default router
