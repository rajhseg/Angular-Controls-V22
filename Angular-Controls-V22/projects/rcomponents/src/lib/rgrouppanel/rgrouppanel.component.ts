import { NgStyle } from '@angular/common';
import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import { RWindowHelper } from '../rwindowObject';
import { RBaseComponent } from '../rmodels/RBaseComponent';

@Component({
    selector: 'rgroup-panel',
    imports: [NgStyle],
    templateUrl: './rgrouppanel.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './rgrouppanel.component.css'
})
export class RGrouppanelComponent  extends RBaseComponent<any>  {

@Input()
public EnableShadowEffect: boolean = false;

@Input()
groupname: string = "";

@Input()
IsItemsArrangeHorizontal: boolean = false;

@Input()
TitleForeColor: string = "gray";

constructor(private windowHelper: RWindowHelper){
  super(windowHelper);
  this.Id = this.windowHelper.GenerateUniqueId();
  this.HostElementId = this.windowHelper.GenerateUniqueId();
}

}
