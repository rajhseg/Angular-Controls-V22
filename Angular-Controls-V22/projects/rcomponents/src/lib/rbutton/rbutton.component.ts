import { NgStyle } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { RWindowHelper } from '../rwindowObject';
import { RBaseComponent } from '../rmodels/RBaseComponent';

@Component({
    selector: 'rbutton',
    imports: [NgStyle],
    templateUrl: './rbutton.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './rbutton.component.css'
})
export class RButtonComponent extends RBaseComponent<any> {

  @Output()
  public ButtonClick = new EventEmitter<any>();

  @Input()
  public EnableBackDrop: boolean = false;
  
  @Input()
  public ButtonWidth: string = '100px';

  @Input()
  public ButtonHeight: string = '32px';

  @Input()
  public ButtonType: string = "button";

  @Input()
  ForeColor: string = "whitesmoke";

  @Input()
  BackgroundColor: string = "blue";
  
  onClick($event: any){
    this.ButtonClick.emit($event);
  }

  constructor(winObj: RWindowHelper){
    super(winObj);
    this.Id = this.winObj.GenerateUniqueId();
    this.HostElementId = this.winObj.GenerateUniqueId();
  }

}
