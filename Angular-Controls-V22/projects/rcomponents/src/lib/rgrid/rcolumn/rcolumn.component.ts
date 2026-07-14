import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { EditViewTemplateDirective } from '../edit-template.directive';
import { HeaderTemplateDirective, ReadViewTemplateDirective } from '../view-template.directive';
import { NgTemplateOutlet } from '@angular/common';
import { CssUnit, RCssUnitsService } from '../../rcss-units.service';
import { RGridHeaderTemplateContext, RGridTemplateContext } from '../rgridtemplatecontext';

@Component({
    selector: 'rcolumn',
    imports: [ReadViewTemplateDirective, EditViewTemplateDirective, HeaderTemplateDirective, NgTemplateOutlet],
    templateUrl: './rcolumn.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './rcolumn.component.css'
})
export class RColumnComponent implements AfterContentInit {  

  @Input()
  Name: string = "";

  @Input()
  PropToBindToCellInfo: string = "";

  @Input()
  IsDummyPropToBind: boolean = false;

  @Input()
  DisableGrouping: boolean = false;
  
  @Input()
  IsComputationalColumn: boolean = false;

  @Input()
  HeaderText: string = "";

  @Input()
  Height: string ="auto";

  @Input()
  Width: string ="auto";

  @Input()
  DisableSort: boolean = false;

  @Input()
  DisableFilter: boolean = false;

  @ContentChild(ReadViewTemplateDirective, { read: TemplateRef<RGridTemplateContext> }) ReadView!: TemplateRef<RGridTemplateContext>;

  @ContentChild(EditViewTemplateDirective, { read: TemplateRef<RGridTemplateContext> }) EditView!: TemplateRef<RGridTemplateContext>;

  @ContentChild(HeaderTemplateDirective, { read: TemplateRef<RGridHeaderTemplateContext> }) HeaderTemplate!: TemplateRef<RGridHeaderTemplateContext>;

  constructor(private cssUnit: RCssUnitsService){

  }

  ngAfterContentInit(): void {
    
  }

  GetRelativeWidth(totalWidthInPx: string): string {
    let value = this.cssUnit.ToPxValue(totalWidthInPx, null, null);
    let result = this.Width.match(/(-?[\d.]+)([a-z%]*)/);
    if(result) {
      let num = parseFloat(result[1].toString());
      let unit = result[2];

      if(unit.toLowerCase()=='%'){
        return parseFloat((value * num/ 100).toString()) +CssUnit.Px.toString();
      } else if(unit.toLowerCase()=='px'){
        return num+CssUnit.Px.toString();
      }

    }

    return this.Width;    
  }    

}
