import router from './index'
import store from '@/store';
const toKen = store.getters.toKen
router.beforeEach(function(to, from, next) {
 
  next()
})
export default router
