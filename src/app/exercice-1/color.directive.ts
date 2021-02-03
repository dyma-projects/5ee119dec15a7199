import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";


@Directive({
    selector: '[appColor]'
})
export class ColorDirective {
    @HostListener('window:keydown', ['$event']) private changeColor(event: KeyboardEvent){
        //console.log('event : ', event);
        if(event.key==="ArrowDown")
            this.el.nativeElement.style.color = 'blue';
        if(event.key==="ArrowUp")
            this.el.nativeElement.style.color = 'orange';
        if(event.key==="ArrowLeft")
            this.el.nativeElement.style.color = 'yellow';
        if(event.key==="ArrowRight")
            this.el.nativeElement.style.color = 'green';
        
    }
    constructor(private el: ElementRef<any>){
        // console.log(this.el);
    }

    // ngOnInit(): void {
    //     // this.el.nativeElement.style.color = 'red';
    // }
}