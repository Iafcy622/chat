<script>
    import Chat from "$lib/Chat.svelte";
    import Nav from "$lib/Nav.svelte";

    export let data;
</script>

<main class="h-screen overflow-hidden flex flex-col lg:grid lg:grid-cols-6">
    <Nav />
    <Chat messages={data.messages} />
</main>