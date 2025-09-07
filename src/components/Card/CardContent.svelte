<script>
    /** @type {{className:string, children:import('svelte').Snippet}} */
    const { className, children, ...rest } = $props();
</script>

<div class={`p-6 pt-0 ${className}`} {...rest}>
    {@render children?.()}
</div>
