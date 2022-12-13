
import NIMSDK from 'nim-web-sdk-ng/dist/NIM_BROWSER_SDK';
import { im_config } from '@/config/test_im_config';

const { appkey, account, token } = im_config;

class chat_srvice {
  constructor() {
    debugger;
    return this.login_chat();
  }

  login_chat() {
    this.chat = new NIMSDK({
      appkey: 'eba72c1eb597474226e0b49c8b23073c',
      account: 'test3',
      token: '631eaa4af8bb8118917573984d8f9dd9',
      debugLevel: 'debug',
    });
    this.chat.connect();
    return this.chat;
    // this.chat.connect();
  }

  // {"code":200,"info":{"name":"","accid":"test3","token":"c11ab2f47a2a0bb04848c66c780e88e4"}}

  addevent() {
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
      this.chat.on(key, (res) => {
        console.log(`Receive ${key} event：`, res ? JSON.parse(JSON.stringify(res)) : res);
      });
    });
  }
}


export default chat_srvice;
