import { TestTube } from "@lucide/svelte";

export class ToolDefinition {
    /** @type {string} */
    title;
    /** @type {string} */
    description;
    /** @type {string} */
    slug;
    /** @type {import('svelte').Component} */
    Icon;
    /** @type {string} */
    image;

    /**
     * @param {string} title
     * @param {string} description
     * @param {string} slug
     * @param {import('svelte').Component} icon
     * @param {string} image
     */
    constructor(title, description, slug, icon, image) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.Icon = icon;
        this.image = image;
    }
}

export const tools = [
    new ToolDefinition(
        "Demo",
        "This is a demo tool card",
        "demo",
        TestTube,
        "/demo.svg",
    ),
];
