import {NgModule} from '@angular/core'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports:[MatMenuModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatTableModule],
    exports:[MatMenuModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatTableModule]
})

export class MaterialModule{}