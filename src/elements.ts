import type { Component, Layout, propertiesObject } from "./types.js";
import { ComponentProperties } from "./component.js";
import { generateId } from "./helpers.js";

/**
 * Represents an HTML widget, inheriting properties from ComponentProperties.
 * Automatically creates an HTML element of the specified tag, assigns it a unique ID,
 * and attaches it to a parent layout if provided.
 */
class HtmlWidget extends ComponentProperties implements Component {
    /**
     * @param {Layout} parent - The parent layout to attach the widget to.
     * @param {string} tag - The HTML tag to create for the widget.
     */
    constructor(parent: Layout, tag: string) {
        super();

        this.element = document.createElement(tag);
        this.element.id = generateId();
        parent?.AddChild(this);
    }

    text(value: string): this {
        this.element.textContent = value;
        return this;
    }
}

class ImageWidget extends ComponentProperties implements Component {
    element: HTMLImageElement;
    constructor(sourceURL: string, properties: propertiesObject) {
        super();

        this.element = document.createElement("img");
        properties.parent.AddChild(this);

        this.element.id = generateId();
        this.element.src = sourceURL;
        this.Styled(properties.style);
    }
}

export class CustomWidget extends ComponentProperties implements Component {
    element: HTMLElement;
    constructor(customTag: string, properties: propertiesObject) {
        super();
        if (!customTag.includes("-")) {
            throw Error(`The provided tag is not a custom element : ${customTag}`);
        }

        this.element = document.createElement(customTag);
        properties.parent.AddChild(this);
        this.element.id = generateId();
    }
}

/**
 * Add a button to your container
 * @param text
 * @param properties
 * @returns
 */
export const Button = function (text: string = "", properties: propertiesObject): Component {
    const parent = properties.parent;
    const style = properties.style;

    return new HtmlWidget(parent, "button").text(text).Styled(style);
};

/**
 * Adds a text widget to the specified layout. Allows specifying the type of text
 * element via the options parameter.
 * @param {string} text - The text content of the text widget.
 * @returns {HtmlWidget} The created text widget widget.
 */
export const Text = function (text: string = "", properties: propertiesObject): Component {
    const options = properties.options;
    const parent = properties.parent;
    const style = properties.style;

    return new HtmlWidget(parent, options?.split(",")[0] || "span").text(text).Styled(style);
};

/**
 * Add an Image Element
 * @param {string} sourceUrl - The url of the image widget.
 * @returns
 */
export const Image = function (sourceUrl: string, properties: propertiesObject): Component {
    return new ImageWidget(sourceUrl, properties);
};
