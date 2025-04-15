export const sendMessage = (text: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text); // Імітуємо "успішно відправлене повідомлення"
        }, 1000); // 1 секунда затримки
    });
};