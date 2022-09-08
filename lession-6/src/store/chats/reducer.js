import { ADD_CHAT, DELETE_CHAT } from './actions'

const initialState = [{
    id: "chat1",
    name: "Chat 1",
}, {
    id: "chat2",
    name: "Chat 2",
}, {
    id: "chat3",
    name: "Chat 3",
}];

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return [...state, payload]
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload)
        }
        default:
            return state;
    };
}