<script>
    import Hero from "../../components/Hero/Hero.svelte";
    import ToolGrid from "../../components/ToolGrid/ToolGrid.svelte";
    import { tools } from "../../model/ToolDefinition";
</script>

<main class="flex-1">
    <div
        class="container mx-auto max-w-7xl animate-in fade-in-0 duration-500 px-4 sm:px-6 lg:px-8"
    >
        <Hero />
        <ToolGrid {tools} />
    </div>
</main>
