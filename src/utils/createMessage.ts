import { MessageInterface } from '../types/Message.interface';
import { v4 as uuidv4 } from 'uuid'

export const createMessage = (text: string, pending: boolean = false): MessageInterface => {
    return {
        id: uuidv4(),
        text,
        pending,
    };
};