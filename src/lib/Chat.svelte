<script>
    import Message from "$lib/components/Message.svelte";
    import TextForm from "$lib/components/TextForm.svelte";

    export let messages;
</script>

<section class="col-span-5 overflow-hidden relative h-screen">
    <div class="messages overflow-y-scroll h-full pb-[5.5rem]">
        {#each messages as message(message.id) }
            <Message message={message.text} role={message.role} />
        {/each}
    </div>
    <TextForm />
</section>
