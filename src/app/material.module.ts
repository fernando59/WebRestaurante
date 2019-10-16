import {NgModule} from '@angular/core'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
@NgModule({
    imports:[MatMenuModule,MatButtonModule,
        MatToolbarModule,MatSidenavModule,
        MatTableModule,MatIconModule,MatSnackBarModule,MatDialogModule,
        MatFormFieldModule,MatInputModule,MatRadioModule,MatCardModule],



    exports:[MatMenuModule,MatButtonModule,
        MatToolbarModule,MatSidenavModule,
        MatTableModule,MatIconModule,MatSnackBarModule,MatDialogModule,
        MatFormFieldModule,MatInputModule,MatRadioModule,MatCardModule]
})

export class MaterialModule{}