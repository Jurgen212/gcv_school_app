import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DropData } from 'src/app/domain/models/common/common-models';
import { SafePipe } from '../../../../../pipes/safe.pipe';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
  standalone: true,
  imports: [ CommonModule, SafePipe ]
})
export class DropComponent {

  @Input() dropOptions !: DropData[]  
  listShowDrops: boolean[] = []

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.createListShow( this.dropOptions.length )
  }


  createListShow( n: number ){

    for( let i = 0; i < n; i ++ ){
      this.listShowDrops[i] = false
    }
  }
  

  validatePDF( urlImage: string ): boolean{

    const extention = urlImage.substring( urlImage.length - 3 )
    if( extention === "pdf" ) return true
    else return false
  }

  toggle(i: number){
    this.listShowDrops[i] = !this.listShowDrops[i]
    
  }
}
