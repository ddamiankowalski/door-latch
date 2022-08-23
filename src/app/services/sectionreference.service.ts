import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SectionReference {
    public elementArray: Array<HTMLElement> = [];

    public pushElement(el: HTMLElement) {
        this.elementArray.push(el);
    }
}