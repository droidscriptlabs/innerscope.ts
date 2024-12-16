import type { Layout, Component, propertiesObject } from "./types.js";
import { ComponentProperties } from "./component.js";
export declare const optionsApi: (element: HTMLElement, options: string) => void;
/**
 * This class extends ComponentProperties class and returns a Layout view,
 * In which takes in the type and sets correct styling this is also done
 * To the childAlignmentProperties.
 */
declare class Container extends ComponentProperties implements Layout {
    type: string;
    options: string;
    constructor(type: string, childAlignmentProperties: string, properties?: Partial<propertiesObject>);
    /*** Add a child component to this component.*/
    AddChild(child: Component): this;
    /** Clear the layout and remove all children */
    Clear(): this;
    /*** Remove a child component from the layout */
    RemoveChild(child: Component): this;
}
export default Container;
