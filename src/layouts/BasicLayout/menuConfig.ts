const headerMenuConfig = [];

const asideMenuConfig = [


  {
    name: '消息',
    path: '/',
    icon: 'chart-bar',
    children: [

      {
        name: '客满消息页',
        path: '/chat_page',
      },
      {
        name: '商家消息页',
        path: '/success_page',
      },
      {
        name: '其他',
        path: '/',
        children: [
          {
            name: '404',
            path: '/list/table/filter',
          },
        ],
      },
    ],
  },


  {
    name: '登录&注册',
    path: '/',
    icon: 'account',
    children: [
      {
        name: '登录',
        path: '/user/login',
      },
      {
        name: '注册',
        path: '/user/register',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
