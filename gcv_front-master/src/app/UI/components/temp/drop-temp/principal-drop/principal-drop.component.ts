import { Component, Input } from '@angular/core';
import { Principal1DropComponent } from '../principal1-drop/principal1-drop.component';
import { Principal2DropComponent } from '../principal2-drop/principal2-drop.component';
import { DropTemplate } from 'src/app/domain/models/Drop-template/DropTemplate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal-drop',
  templateUrl: './principal-drop.component.html',
  styleUrls: ['./principal-drop.component.css'],
  standalone: true,
  imports: [  Principal1DropComponent,
              Principal2DropComponent,
              CommonModule]
})
export class PrincipalDropComponent {

  @Input() data !: DropTemplate;

}
