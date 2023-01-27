import { createStore } from 'ice';
import user from './models/user';
import chat_model from './models/chat';

const store = createStore({ chat_model, user });

export default store;
