import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports:[
        MatTableModule,
        MatIconModule
    ],
    exports: [
        MatTableModule,
        MatIconModule
    ]
})

export class AngularMaterialModule {}