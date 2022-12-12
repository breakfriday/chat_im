import { Button, Card, Result } from 'antd';
import Chat, { Bubble, useMessages } from '@chatui/core';
import React from 'react';

const defaultQuickReplies = [
  {
    icon: 'message',
    name: '转人工服务',
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

const initialMessages = [
  {
    type: 'text',
    content: { text: 'hello this is the test' },
    user: { avatar: '//sitecdn.zcycdn.com/f2e-assets/f2621c89-8e31-4f23-b3a1-9cc5e90b97ab.png' },
  },
  {
    type: 'image',
    content: {
      picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
    },
  },
];

function renderMessageContent(msg) {
  const { type, content } = msg;

  // 根据消息类型来渲染
  switch (type) {
    case 'text':
      return <Bubble content={content.text} />;
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

  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

   // 发送回调
   function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
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
  
      <Chat
        navbar={{ title: 'im 助理' }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    </Card>
  );
}
