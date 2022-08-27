import { Injectable } from "@angular/core";
import { BehaviorSubject, fromEvent } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResizeWindowService {
    constructor() {}

    public resizeObservable$ = fromEvent(window, 'resize').subscribe(sizepx => {
        if(window.innerWidth <= 1350) {
            this.screenType$.next('small')
        } else {
            this.screenType$.next('large')
        }
    });

    public screenType$ = new BehaviorSubject<'small' | 'large'>(window.innerWidth <= 1350 ? "large" : "small");
}