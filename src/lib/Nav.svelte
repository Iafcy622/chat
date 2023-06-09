<script>
    import Modal from "$lib/components/Modal.svelte";
    import Settings from "$lib/Settings.svelte";

    let navOpened = false;
    let darkMode = true;
    let modals = {
        settings: false,
        account: false
    }

    let chats = [
        { name: "Chat 1", id: 1, active: true },
        { name: "Chat 2", id: 2, active: false },
    ];
</script>

<!-- Header + Hamburgar for mobile -->
<header
    class="dark:bg-[#282b30] bg-[#adb5bd]
        flex px-5 py-3 items-center drop-shadow-xl lg:hidden
    "
>
    <button
        class="mr-6 dark:hover:bg-[#36393e] hover:bg-[#CED4DA] p-1 rounded-lg"
        on:click={() => (navOpened = !navOpened)}
    >
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    </button>
    <h1>{chats.filter((chat) => chat.active)[0].name}</h1>
</header>

<!-- bg blur -->
<button
    class="absolute lg:hidden
        {navOpened
        ? 'block w-screen h-screen bg-stone-900 opacity-30 z-10 blur-md'
        : 'hidden'}
    "
    on:click={() => (navOpened = false)}
/>

<nav
    class="dark:bg-[#1e2124] bg-[#ADB5BD] col-span-1 flex-col h-full flex
        absolute -translate-x-full z-10
        {navOpened
        ? 'translate-x-0 opacity-100'
        : '-translate-x-full opacity-0'}
        lg:flex lg:translate-x-0 lg:relative lg:transition-none lg:opacity-100
    "
>
    <h1 class="py-3 px-4 text-xl flex items-center justify-between lg:block">
        Chat
        <button
            class="lg:hidden p-1 dark:bg-[#424549] rounded-md"
            on:click={() => (navOpened = false)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
            </svg>
        </button>
    </h1>

    <!-- Chat list -->
    <ul class="grow">
        {#each chats as chat (chat.id)}
            <li>
                <a
                    href="/"
                    class="grid gap-4 grid-cols-6 items-center w-full py-2 px-4 
                        dark:hover:bg-[#282b30] hover:bg-[#CED4DA]
                        {chat.active
                        ? 'dark:bg-[#282b30] bg-[#6C757D] dark:hover:bg-[#36393e] hover:bg-[#6C757D] text-[#CED4DA] hover:text-[#212529] dark:hover:text-[#CED4DA]'
                        : ''}"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 col-span-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                    </svg>
                    <p class="truncate col-span-5">{chat.name}</p>
                </a>
            </li>
        {/each}
    </ul>

    <!-- Nav -->
    <ul class="mb-3">
        <li
            class="grid grid-cols-6 items-center w-full py-2 px-4
                dark:hover:bg-[#282b30] hover:bg-[#CED4DA]
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 col-span-1"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>

            <p class="truncate col-span-5">Account</p>
        </li>
        <li>
            <button
                class="grid grid-cols-6 items-center w-full py-2 px-4 
                    dark:hover:bg-[#282b30] hover:bg-[#CED4DA]
                "
                on:click={() => modals.settings = true}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 col-span-1"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <p class="truncate col-span-5 text-left">Settings</p>
            </button>
        </li>
    </ul>
</nav>


<Modal
    title={"Settings"}
    isOpened={modals.settings} 
    on:closePopup={() => modals.settings = false}
>
    <Settings />
</Modal>