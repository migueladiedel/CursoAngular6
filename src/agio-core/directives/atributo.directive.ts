import { Directive, Input, Output, HostListener, EventEmitter, HostBinding } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({  selector: '[agioWinConfirm]' })
export class WindowConfirmDirective {
  @Input() winConfirmMessage = '¿Seguro?';
  @Output() winConfirm: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() { this.isPressed = true; }
  @HostListener('mouseup') hasReleased() { this.isPressed = false; }
}
