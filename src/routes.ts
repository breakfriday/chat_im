import { IRouterConfig, lazy } from 'ice';
import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import success_page from '@/pages/success';

import chat_page from '@/pages/chat_page';

const routerConfig: IRouterConfig[] = [

  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/success_page',
        component: success_page,
      },
      {
        path: '/chat_page ',
        component: chat_page,
      },

      {
        path: '/',
        redirect: '/chat_page ',
      },

    ],
  },
];
export default routerConfig;
