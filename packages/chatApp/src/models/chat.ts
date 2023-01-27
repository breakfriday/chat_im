import chat_service from '@/services/Chat/index';

export default {
  state: {
    session_id: '',
    accid: '',
    target_accid: '',
    message: '',
  },
  reducers: {
    update(prevState, payload) {
      return { ...prevState, ...payload };
    },

  },
  effects: (dispatch) => ({
    async connet_chat() {
      const chat = new chat_service();
    },

  }),
};
