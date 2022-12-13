import NIMSDK from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK';

const nim = new NIMSDK({
  appkey: 'YOUR_APPKEY',
  account: 'YOUR_ACCID',
  token: 'YOUR_TOKEN',
  debugLevel: 'debug',
});

const eventList = [
  'logined',

  'multiPortLogin',

  'kicked',

  'willReconnect',

  'disconnect',

  'msg',

  'syncdone',

  'proxyMsg', 'syncRoamingMsgs', 'syncOfflineMsgs',
  'syncMyNameCard', 'syncdone', 'sessions', 'updateMyNameCard', 'updateBlackList', 'updateMuteList',
  'sysMsg', 'syncSysMsgs', 'syncFriend', 'friends', 'users', 'updateSystemMessages', 'sysMsgUnread', 'pushEvents',
  'teamMsgReceipts', 'updateSession',

  'teams',
  'createTeam',
  'updateTeamMember',
  'updateTeam', 'addTeamMembers', 'updateTeamManagers', 'transferTeam', 'removeTeamMembers', 'dismissTeam', 'updateTeamMembersMute',
];

eventList.forEach((key: any) => {
  nim.on(key, (res) => {
    console.log(`Receive ${key} event：`, res ? JSON.parse(JSON.stringify(res)) : res);
  });
});

// then，receive event 'logined'
await nim.connect();
