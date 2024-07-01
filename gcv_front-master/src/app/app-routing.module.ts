import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path        : 'principal',
    loadChildren: () => import(`./UI/main/main.module`)               .then( m => m.MainModule )
  },
  { 
    path        : 'padres',
    loadChildren: () => import(`./UI/parents/parents.module`)         .then( m => m.ParentsModule )
  },
  { 
    path        : 'estudiantes',
    loadChildren: () => import(`./UI/students/students.module`)       .then( m => m.StudentsModule )
  },
  { 
    path        : 'trabajadores',
    loadChildren: () => import(`./UI/workers/workers.module`)         .then( m => m.WorkersModule )
  },
  { 
    path        : 'informacion',
    loadChildren: () => import(`./UI/information/information.module`) .then( m => m.InformationModule )
  },
  { 
    path        : 'comunidad',
    loadChildren: () => import(`./UI/community/community.module`)     .then( m => m.ComunityModule )
  },
  { path      : '**',
    redirectTo: 'principal'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
