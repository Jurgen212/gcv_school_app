import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { Principal1TemplateComponent } from '../principal1-template/principal1-template.component';
import { Principal2TemplateComponent } from '../principal2-template/principal2-template.component';
import { Principal3TemplateComponent } from '../principal3-template/principal3-template.component';
import { Principal4TemplateComponent } from '../principal4-template/principal4-template.component';
import { Principal5TemplateComponent } from '../principal5-template/principal5-template.component';
import { Principal6TemplateComponent } from '../principal6-template/principal6-template.component';
import { Principal7TemplateComponent } from '../principal7-template/principal7-template.component';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-principal-template',
  templateUrl: './principal-template.component.html',
  styleUrls: ['./principal-template.component.css'],
  imports: [  Principal1TemplateComponent,
              Principal2TemplateComponent,
              Principal3TemplateComponent,
              Principal4TemplateComponent,
              Principal5TemplateComponent,
              Principal6TemplateComponent,
              Principal7TemplateComponent,
              CommonModule
            ]
})

export class PrincipalTemplateComponent {

  @Input() data !: DataTemplate;

  ngOnInit(): void {
  }

  constructor(){}
}
