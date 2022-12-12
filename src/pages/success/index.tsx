import { Button, Card, Result } from 'antd';
import Chat, { Bubble, useMessages } from '@chatui/core';
import React from 'react';



export default function chat_box() {
  return (
    <Card bordered={false}>
  
      <Chat
        navbar={{ title: 'im 助理' }}
      />
    </Card>
  );
}
