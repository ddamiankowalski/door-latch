import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SectionReference {
    public elementArray: Array<any> = [];

    public pushElement(el: HTMLElement, name: string, block: string) {
        const obj = {
            name: name,
            ref: el,
            block: block
        }
        this.elementArray.push(obj);
    }
}