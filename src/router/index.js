import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Reg from '@/components/public/reg'
import AG from '@/components/public/ag'
import UserIndex from '@/components/user/userIndex'
import Reservation from '@/components/user/reservation'
import ASK from '@/components/user/ask'
import DocInfo from '@/components/doc/docInfo'
import Question from '@/components/question/question'
import UserQuestionList from '@/components/question/userQuestionList'
import UserInfo from '@/components/user/userInfo'
import ReservationStatus from '@/components/user/reservationStatus'
import Contact from '@/components/user/contact'
import NewContact from '@/components/user/newContact'
import Physiological from '@/components/user/physiological'
import Pneumonia from '@/components/user/pneumonia'
import PneumoniaStatus from '@/components/user/pneumoniaStatus'

import AdminIndex from '@/components/admin/adminIndex'
import AdminLogin from '@/components/admin/adminLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/public/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/public/ag',
      name: 'ag',
      component: AG,
    },
    {
      path: '/login',
      name: 'adminLogin',
      component: AdminLogin,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminIndex,
      children: [
        {
          path: 'allData',
          name: 'allData',
          component: AdminLogin,
        },
      ],
    },
    {
      path: '/user',
      name: 'userIndex',
      component: UserIndex,
      children: [
        {
          path: 'reservation',
          name: 'reservation',
          component: Reservation,
        },
        {
          path: 'ask',
          name: 'ask',
          component: ASK,
        },
        {
          path: 'question',
          name: 'question',
          component: Question,
        },
        {
          path: 'docInfo',
          name: 'docInfo',
          component: DocInfo,
        },
        {
          path: 'userQuestionList',
          name: 'userQuestionList',
          component: UserQuestionList,
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo,
        },
        {
          path: 'reservationStatus',
          name: 'reservationStatus',
          component: ReservationStatus,
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact,
        },
        {
          path: 'newContact',
          name: 'newContact',
          component: NewContact,
        },
        {
          path: 'physiological',
          name: 'physiological',
          component: Physiological,
        },
        {
          path: 'pneumonia',
          name: 'pneumonia',
          component: Pneumonia,
        },
        {
          path: 'pneumoniaStatus',
          name: 'pneumoniaStatus',
          component: PneumoniaStatus,
        },
      ],
    }
  ]
})
