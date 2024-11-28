import { ComponentProperties } from "./component.js";
// In this file, I am extending the ComponentProperties class
// and then building more classes eqaul to DroidScript Ui
// controls with similar properties and behaviours.
export class Button extends ComponentProperties {
    type;
    constructor(parent, text, width, height, options) {
        super();
        this.element = document.createElement("button");
        this.element.id = crypto.randomUUID();
        this.SetSize(width, height, null);
        this.type = "BUTTON";
        this.element.textContent = text;
        //@ts-ignore
        parent.AddChild(this);
    }
}
export class Text extends ComponentProperties {
    type;
    constructor(parent, text, width, height, options) {
        super();
        options ? (this.element = document.createElement(options.split(",")[0])) : (this.element = document.createElement("span"));
        this.element.id = crypto.randomUUID();
        this.type = "TEXT";
        this.element.textContent = text;
        //@ts-ignore
        parent.AddChild(this);
    }
}
