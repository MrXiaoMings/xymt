import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import login from '../components/common/login.vue'
import userManagement from '../components/userManagement/userPage.vue'
import userView from '../components/userManagement/userView.vue'
import userMange from '../components/userManagement/userManage.vue'
import baseInfo from '../components/common/baseInfo.vue'
import releaseManagement from '../components/releaseManagement/releasePage.vue'
import releaseList from '../components/releaseManagement/releaseList.vue'
import Course from '../components/releaseManagement/course.vue'
import Share from '../components/releaseManagement/share.vue'
import PartTime from '../components/releaseManagement/partTimeJob.vue'
import RunningMan from '../components/releaseManagement/runningMan.vue'
import Nearby from '../components/releaseManagement/nearby.vue'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  base: '/adminDist',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/baseInfo',
      name: 'baseInfo',
      component: baseInfo
    },
    {
      path: '/userManagement/:moduleIndex/:childIndex',
      name: 'userManage',
      component: userManagement,
      redirect:'/userView/2/1',
      children: [
        {
          path: '/userView/:moduleIndex/:childIndex',
          name: 'userView',
          component: userView
        },
        {
          path: '/userManage/:moduleIndex/:childIndex',
          name: 'userInfo',
          component: userMange
        }
      ]
    },
    {
      path: '/releaseManagement/:moduleIndex',
      name: 'releaseManage',
      component: releaseManagement,
      redirect: '/releaseList/4',
      children: [
        {
          path: '/releaseList/:moduleIndex',
          name: 'releaseList',
          component: releaseList
        },
        {
          path: 'course/:id',
          name: 'course',
          component: Course
        },
        {
          path: 'share/:id',
          name: 'share',
          component: Share
        },
        {
          path: 'partTime/:id',
          name: 'partTime',
          component: PartTime
        },
        {
          path: 'runningMan/:id',
          name: 'runningMan',
          component: RunningMan
        },
        {
          path: 'nearby/:id',
          name: 'nearby',
          component: Nearby
        }
      ]
    }
  ]
})
