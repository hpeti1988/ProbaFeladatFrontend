import { Component, OnInit, Inject, ViewChild  } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VasarlastetelService } from 'src/app/service/vasarlastetel.service';
import { VasarlasTetel } from 'src/app/models/vasarlasTetel';
import { MatDialog } from '@angular/material/dialog';
import { VasarlasTetelDialogComponent } from '../vasarlas-tetel-dialog/vasarlas-tetel-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TeteldeletedialogComponent } from '../teteldeletedialog/teteldeletedialog.component';


@Component({
  selector: 'app-vasarlasdialog',
  templateUrl: './vasarlasdialog.component.html',
  styleUrls: ['./vasarlasdialog.component.css']
})
export class VasarlasdialogComponent implements OnInit {

  dataSource: MatTableDataSource<any>
  displayedColumns: string[] = ['nev', 'mennyiseg','mennyisegEgyseg',
                              'brutto', 'nettoEgysegar', 'vonalKod','cikkSzam','partnerId','action']
  @ViewChild(MatSort) sort:MatSort

  vasarlasTetelList: VasarlasTetel[];

  constructor(@Inject(MAT_DIALOG_DATA) public vasarlasId:number,
   private vasarlasTetelService: VasarlastetelService,
   private dialog: MatDialog,
   private snackBar: MatSnackBar) {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.getVasarlasTetelList()

  }

  getVasarlasTetelList() {
    this.vasarlasTetelService.getVasarlasTetelByVasarlasId(this.vasarlasId).subscribe(
      (data)=> {
        this.dataSource= new MatTableDataSource(data)
        console.log(data)
        this.dataSource.sort= this.sort
      }
    )
  }

  openDialog() {
    let dialogRef = this.dialog.open(VasarlasTetelDialogComponent,{data: this.vasarlasId});
    dialogRef.afterClosed().subscribe(
      (res)=> {
        console.log(res);
        this.getVasarlasTetelList();
      }
    ) 
  }

  deleteVasarlasTetel(id: number) {
    let dialogRef = this.dialog.open(TeteldeletedialogComponent, {data: id});
    dialogRef.afterClosed().subscribe(
      ()=> {
        this.getVasarlasTetelList();
      }
    )  
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {duration: 2500});
  }

  openErrorSnackBar(message, action) {
    this.snackBar.open(message, action, {duration: 2500});
  }
}
