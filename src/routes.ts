import { IRouterConfig, lazy } from 'ice';
import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import success_page from '@/pages/success';

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
        path: '/',
        redirect: '/success_page',
      },
    ],
  },
];
export default routerConfig;
