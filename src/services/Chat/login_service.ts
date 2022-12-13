
import NIMSDK from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK';
import { im_config } from '@/config/test_im_config';

const { appkey, account, token } = im_config;

const nim = new NIMSDK({
  appkey,
  account,
  token,
  debugLevel: 'debug',
});

const eventList = [
  // 登陆完成事件
  'logined',

  // 收到多端登陆通知触发事件
  'multiPortLogin',

  // 被踢
  'kicked',

  // 即将开始重连,
  'willReconnect',

  // 断开连接
  'disconnect',

  // 收到消息
  'msg',

  // 同步完成事件
  'syncdone',

  // 在线时收到了系统通知
  'sysMsg',

  //   'proxyMsg',
  //   'syncRoamingMsgs',
  //   'syncOfflineMsgs',
  //   'syncMyNameCard', 'syncdone', 'sessions', 'updateMyNameCard', 'updateBlackList', 'updateMuteList',
  //   'syncSysMsgs', 'syncFriend', 'friends', 'users', 'updateSystemMessages', 'sysMsgUnread', 'pushEvents',
  //   'teamMsgReceipts', 'updateSession',

//   'teams',
//   'createTeam',
//   'updateTeamMember',
//   'updateTeam', 'addTeamMembers', 'updateTeamManagers', 'transferTeam', 'removeTeamMembers', 'dismissTeam', 'updateTeamMembersMute',
];

eventList.forEach((key: any) => {
  nim.on(key, (res) => {
    console.log(`Receive ${key} event：`, res ? JSON.parse(JSON.stringify(res)) : res);
  });
});

// then，receive event 'logined'
nim.connect();

