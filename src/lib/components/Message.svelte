<script>
    export let message;
    export let role;
</script>

<section class="p-4 items-center justify-start flex
    {role == 'AI' ? 'dark:bg-stone-800' : 'dark:bg-stone-900'}"
>
    <div class="flex items-center justify-center rounded-full mr-6 w-9 h-9 self-start
        {role == 'AI' ? 'bg-green-700' : 'bg-blue-600'}"
    >
        {role == "AI" ? "A" : "U"}
    </div>
    <div class="message flex-1">
        <p>{message}</p>
    </div>
</section>