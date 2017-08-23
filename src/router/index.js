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
      ],
    }
  ]
})
