import { useRef, useOptimistic, useState } from 'react';
import { sendMessage } from '../utils/sendMessage';
import { createMessage } from '../utils/createMessage';
import { MessageInterface } from '../types/Message.interface';
import styles from './OptimisticMessages.module.css';


const OptimisticMessages = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [messages, setMessages] = useState<MessageInterface[]>([]);

    const [optimisticMessages, setOptimisticMessages] = useOptimistic<
        MessageInterface[],
        string
    >(messages,
        (prevMessages, newMessage) => {
        return [...prevMessages, createMessage(newMessage, true)];
    });

    const handleSubmit = async (formData: FormData) => {
        const text = formData.get('message') as string; // ⬅️ Це було відсутнє

        setOptimisticMessages(text);

        if (!text.trim()) return;
        formRef.current?.reset();

        const message = await sendMessage(text);

        setMessages((prev) => [...prev, createMessage(message)]);
    };

    return (
        <div className={styles.container}>
            <form ref={formRef} action={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        name="message"
                        placeholder="Type your message..."
                        className={styles.input}
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>
                    Send
                </button>

                <ul className={styles.list}>
                    {optimisticMessages.map((msg) => (
                        <li key={msg.id} className={styles.item}>
                            {msg.text}
                            {msg.pending && <small className={styles.pending}>Adding...</small>}
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
};

export default OptimisticMessages;