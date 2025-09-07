<script>
    /** @type {{className:string, children:import('svelte').Snippet}} */
    const { className, children, ...rest } = $props();
</script>

<div
    class={`rounded-lg border bg-card text-card-foreground shadow-xs ${className}`}
    {...rest}
>
    {@render children?.()}
</div>
