let messages = [
    {
        id: 1,
        text: "Hi.",
        role: "User",
        timestamp: new Date()
    },
    {
        id: 2,
        text: "Hi!",
        role: "AI",
        timestamp: new Date()
    }
];

export function getMessages() {
    return messages;
}

export function addMessage(msg) {
    messages.push(msg);
    messages.push({
        id: Math.random(),
        text: "(Response)",
        role: "AI",
        timestamp: new Date()
    });
}