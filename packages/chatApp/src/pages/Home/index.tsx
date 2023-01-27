import { Button, Card, Result } from 'antd';

import React from 'react';
import store from '@/store';


import { Chat } from 'chatSdk/components/Chat';
import { Bubble } from 'chatSdk/components/Bubble';
import { MessageProps } from 'chatSdk/components/Message';
import useMessages from 'chatSdk/hooks/useMessages';

type MessageWithoutId = Omit<MessageProps, '_id'>;

const defaultQuickReplies = [
  {
    icon: 'message',
    name: '转人工服务',
    isNew: true,
    isHighlight: true,
  },
  {
    icon: 'shopping-bag',
    name: '咨询订单问题（高亮）',
    code: 'orderSelector',
    isHighlight: true,
  },
  {
    icon: 'message',
    name: '联系人工服务（高亮+新）',
    code: 'q1',
    isNew: true,
    isHighlight: true,
  },
  {
    name: ' 热门短语1',
    isNew: true,
  },
  {
    name: '短语2',
    isHighlight: true,
  },
  {
    name: '短语3',
  },
];

const toolbar = [
  {
    type: 'smile',
    icon: 'smile',
    title: '表情',
  },
  {
    type: 'orderSelector',
    icon: 'shopping-bag',
    title: '宝贝',
  },
  {
    type: 'image',
    icon: 'image',
    title: '图片',
  },
  {
    type: 'camera',
    icon: 'camera',
    title: '拍照',
  },
  {
    type: 'photo',
    title: 'Photo',
    img: 'https://gw.alicdn.com/tfs/TB1eDjNj.T1gK0jSZFrXXcNCXXa-80-80.png',
  },
];

const initialMessages: MessageWithoutId[] = [
  {
    type: 'text',
    content: { text: 'hello this is the test' },
    user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0phtaGaO9_-Qqx7TNCpWN9NoHLG9X5T58Q&usqp=CAU', name: 'robot' },
    createdAt: Date.now(),
    hasTime: true,
  },
  {
    type: 'guess-you',
    user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0phtaGaO9_-Qqx7TNCpWN9NoHLG9X5T58Q&usqp=CAU', name: 'robot' },
  },
  {
    type: 'system',
    content: { text: '智能机器人接入' },
  },
  {
    type: 'image',
    content: {
      picUrl: '//luban.zcycdn.com/file/jpg/56f1c41d-175e-4d1b-89ea-638b6396ff4a.jpg?x-oss-process=image/resize,l_600/quality,Q_80',
    },
    user: { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0phtaGaO9_-Qqx7TNCpWN9NoHLG9X5T58Q&usqp=CAU', name: 'robot' },
  },
  {
    type: 'text',
    content: { text: 'long long ago' },
    position: 'right',
    user: { avatar: '//sitecdn.zcycdn.com/f2e-assets/f2621c89-8e31-4f23-b3a1-9cc5e90b97ab.png' },
  },
  {
    type: 'system',
    content: {
      text: 'no talking  已自动结束本次服务',
    },
  },
];

// function renderMessageContent(msg) {
//   const { type, content } = msg;

//   // 根据消息类型来渲染
//   switch (type) {
//     case 'text':
//       return <Bubble content={content.text} />;
//     case 'image':
//       return (
//         <Bubble type="image">
//           <img src={content.picUrl} alt="" />
//         </Bubble>
//       );
//     default:
//       return null;
//   }
// }

function renderMessageContent(msg: MessageProps) {
  const { type, content } = msg;

  // 根据消息类型来渲染
  switch (type) {
    case 'text':
      return <Bubble content={content.text} />;
    case 'guess-you':
      return (
        <Card >

          <div className="guess-you-aside">
            <h1>猜你想问</h1>
          </div>

        </Card>
      );
    // case 'skill-cards':
    //   return (
    //     <ScrollView
    //       className="skill-cards"
    //       data={skillList}
    //       fullWidth
    //       renderItem={(item) => (
    //         <Card>
    //           <CardTitle>{item.title}</CardTitle>
    //           <CardText>{item.desc}</CardText>
    //         </Card>
    //       )}
    //     />
    //   );
    // case 'order-selector':
    //   return <OrderSelector />;
    case 'image':
      return (
        <Bubble type="image">
          <img src={content.picUrl} alt="" />
        </Bubble>
      );
    default:
      return null;
  }
}

export default function chat_box() {
  const [chatState, chatDispatchers] = store.useModel('chat_model');
  const { messages, appendMsg, setTyping, prependMsgs } = useMessages(initialMessages);

  // 发送回调
  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        user: { avatar: '//sitecdn.zcycdn.com/f2e-assets/f2621c89-8e31-4f23-b3a1-9cc5e90b97ab.png', name: 'hello' },
        position: 'right',
      });

      setTyping(true);

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: '亲，hello test' },
          user: { avatar: '//sitecdn.zcycdn.com/f2e-assets/f2621c89-8e31-4f23-b3a1-9cc5e90b97ab.png', name: 'robot' },
        });
      }, 1000);
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item) {
    handleSend('text', item.name);
  }

  return (
    <Card bordered={false}>

      <div onClick={() => {
        chatDispatchers.connet_chat();
      }}
      >ss
      </div>

      <Chat
        navbar={{ title: 'im 客满' }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    </Card>
  );
}
