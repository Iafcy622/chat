/** @type {import('./$types').Actions} */
/** @type {import('./$types').PageServerLoad} */

import { getMessages, addMessage } from "$lib/server/db.js";

export const load = async () => {
    const messages = getMessages();
    return { messages };
};

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();

        const newMessage = {
            id: Math.random(),
            text: formData.get("message-input"),
            role: "User",
            timestamp: new Date()
        };

        addMessage(newMessage);
    },
};
