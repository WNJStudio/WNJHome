<script>
    /** @type {{className:string,children:import('svelte').Snippet}} */
    const { className, children, ...rest } = $props();
</script>

<div class={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...rest}>
    {@render children?.()}
</div>
