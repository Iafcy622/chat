<script>
    let message = "";

    const onInput = (e) => {
        console.log(message);
        e.target.style.height = "24px";
        e.target.style.height = e.target.scrollHeight + "px";

        // Limit max height
    };

    const handleSubmit = (e) => {
        let newMessage = {
            text: message,
            timestamp: new Date(),
            role: "User",
        };
        
        // Reset
        e.target.childNodes[0].style.height = "40px";
        message = "";
    };
</script>

<form
    class="input mx-auto absolute bottom-6 left-0 right-0 w-3/4 flex items-center"
    method="POST"
>
    <textarea
        name="message-input"
        id="message-input"
        bind:value={message}
        on:input={onInput}
        placeholder="Input here"
        class="grow dark:bg-[#282b30] bg-[#adb5bd] placeholder-[#495057] dark:placeholder-[#6C757D]
                resize-none overflow-hidden max-h-full outline-none py-2 px-4 h-10 rounded-lg"
    />
    <button class="w-8 h-8 ml-3 self-end mb-1" type="submit">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
        </svg>
    </button>
</form>
