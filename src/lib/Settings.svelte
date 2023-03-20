<script>
    let tabs = ["Apperance", "Chat", "Test"];
    let darkMode = true;

    const toggleDarkmode = () => {
        darkMode = !darkMode;

        darkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    };
</script>

<div class="w-full h-full flex">
    <div class="list dark:bg-[#1e2124] border-r dark:border-r-[#424549] border-r-[#6C757D]">
        <ul>
            {#each tabs as tab}
                <li>
                    <button class="px-5 py-3 dark:hover:bg-[#282b30] hover:bg-[#CED4DA] w-full
                    {tab == 'Apperance'
                    ? 'dark:bg-[#282b30] bg-[#6C757D] dark:hover:bg-[#36393e] hover:bg-[#6C757D] text-[#CED4DA] hover:text-[#212529] dark:hover:text-[#CED4DA]'
                    : ''}">{tab}</button>
                </li>
            {/each}
        </ul>
    </div>
    <div class="content grow dark:bg-[#1e2124] px-6 py-4">
        <button on:click={toggleDarkmode}>ToggleDarkMode</button>
    </div>
</div>
