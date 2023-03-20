<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let isOpened = true;
    export let classes = "";
    export let title = "";

    const close = () => {
        dispatch("closePopup");
    };
</script>

<div
    class="modal absolute w-3/4 h-3/4 mx-auto left-0 right-0 top-0 bottom-0 my-auto z-20 flex flex-col
        drop-shadow-lg dark:bg-[#1e2124] bg-[#ADB5BD]
        {isOpened ? 'block' : 'hidden'} {classes}
    "
>
    <div class="title w-full flex items-center justify-between px-5 py-3 border-b 
            dark:border-b-[#424549] border-b-[#6C757D]
        "
    >
        <h2>{title}</h2>
        <button on:click={close} class="dark:hover:bg-[#282b30] hover:bg-[#CED4DA] p-1 rounded-lg">
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
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
    <div class="grow">
        <slot />
    </div>
</div>

<button
    class="absolute w-screen h-screen bg-stone-900 opacity-30 dark:opacity-50 z-10 blur-xl top-0 left-0
        {isOpened ? 'block' : 'hidden'}
    "
    on:click={close}
/>
