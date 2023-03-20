<script>
    export let message;
    export let role;
</script>

<section class="p-4 items-center justify-start flex
    {role == 'AI' ? 'bg-stone-100 dark:bg-[#424549]' : 'bg-neutral-200 dark:bg-[#36393e]'}"
>
    <div class="flex items-center justify-center rounded-full mr-6 w-9 h-9 self-start
        {role == 'AI' ? 'bg-green-700' : 'bg-blue-600'}"
    >
        {role == "AI" ? "A" : "U"}
    </div>
    <div class="message flex-1 text">
        <pre class="whitespace-pre-wrap">{message}</pre>
    </div>
</section>