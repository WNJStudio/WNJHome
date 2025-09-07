<script>
    import Card from "../Card/Card.svelte";
    import CardContent from "../Card/CardContent.svelte";
    import CardHeader from "../Card/CardHeader.svelte";
    import CardTitle from "../Card/CardTitle.svelte";

    /**
     * @type {import('../../model/ToolDefinition').ToolDefinition}
     */
    const { description, Icon, image, slug, title } = $props();
</script>

<a
    href={`/tools/${slug}/index.html`}
    class="group block h-full outline-hidden"
    tabindex="0"
    aria-label={title}
>
    <Card
        className="h-full transform-gpu overflow-hidden rounded-xl border bg-card transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/20 group-focus-visible:border-primary group-focus-visible:shadow-2xl group-focus-visible:shadow-primary/20 hover:-translate-y-2"
    >
        <div class="relative h-48 w-full">
            <img
                src={image}
                alt={`${title} screenshot preview`}
                width="600px"
                height="400px"
                class="h-full w-full object-cover blur-xs transition-all duration-300 group-hover:blur-[2px]"
            />
            <div
                class="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent"
            ></div>
        </div>
        <CardHeader className="">
            <div class="flex items-center gap-4">
                <Icon class="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-2xl font-bold">
                    {title}
                </CardTitle>
            </div>
        </CardHeader>
        <CardContent className="">
            <p class="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
</a>
