import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VasarlasComponent } from './vasarlas/vasarlas.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VasarlasdialogComponent } from './modals/vasarlasdialog/vasarlasdialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VasarlasTetelDialogComponent } from './modals/vasarlas-tetel-dialog/vasarlas-tetel-dialog.component';
import { BoltdialogComponent } from './modals/boltdialog/boltdialog.component';
import { CikkdialogComponent } from './modals/cikkdialog/cikkdialog.component';
import { VasarlascreateComponent } from './modals/vasarlascreate/vasarlascreate.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeletedialogComponent } from './modals/deletedialog/deletedialog.component';
import { TeteldeletedialogComponent } from './modals/teteldeletedialog/teteldeletedialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const appRoutes: Routes = [
  {path: 'main', component: VasarlasComponent},
  {path: '', component: VasarlasComponent, pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    VasarlasComponent,
    VasarlasdialogComponent,
    VasarlasTetelDialogComponent,
    BoltdialogComponent,
    CikkdialogComponent,
    VasarlascreateComponent,
    DeletedialogComponent,
    TeteldeletedialogComponent
  ],
  entryComponents: [VasarlasdialogComponent],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
