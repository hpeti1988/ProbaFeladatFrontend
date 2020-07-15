import { Component, OnInit, ViewChild } from '@angular/core';
import { VasarlasService } from '../service/vasarlas.service';
import { Vasarlas } from '../models/vasarlas';
import { MatDialog } from '@angular/material/dialog';
import { VasarlasdialogComponent } from '../modals/vasarlasdialog/vasarlasdialog.component';
import { CikkdialogComponent } from '../modals/cikkdialog/cikkdialog.component';
import { BoltdialogComponent } from '../modals/boltdialog/boltdialog.component';
import { VasarlascreateComponent } from '../modals/vasarlascreate/vasarlascreate.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DeletedialogComponent } from '../modals/deletedialog/deletedialog.component';
import { BoltService } from '../service/bolt.service';
import { CikkekService } from '../service/cikkek.service';
import { VasarlastetelService } from '../service/vasarlastetel.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vasarlas',
  templateUrl: './vasarlas.component.html',
  styleUrls: ['./vasarlas.component.css']
})
export class VasarlasComponent implements OnInit {

  dataSource: MatTableDataSource<any>
  displayedColumns: string[] = ['bolt_nev', 'id','penztargepAzonosito',
                              'partnerId', 'vasarlasOsszeg', 'esemenyDatumIdo','actions']
 @ViewChild(MatSort) sort:MatSort

  data: Array<any>
  vasarlasList: Vasarlas[];
  vasarlasok: Vasarlas[];
  pages:Array<number>;
  pageSizeSelection: number[] = [15,25,50,100]
  size: number = 15;
  page: number = 0
  pageSize: number;
  searchKey: string;
  constructor(private vasarlasService: VasarlasService, private boltService: BoltService, private cikkService:CikkekService,
              private vasarlasTetelService: VasarlastetelService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.page)
  }

  ngAfterViewInit() {
    this.getVasarlas()
  }

  getVasarlas() {
    this.vasarlasService.findAllVasarlas(this.page, this.size).subscribe(
      (data)=>{
        this.pageSize = data.totalPages
        this.dataSource = new MatTableDataSource(data['content']);
        this.pages = new Array(data['totalPages']);
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        console.log(error.error.message);
      }
    );
  }

  prevPage() {
    this.page--;
    if(this.page === -1) {
      this.page = 0;
    }
    this.getVasarlas()
  }

  nextPage() {
    this.page++;
    if(this.page >= this.pages.length) {
      this.page = this.pages.length - 1
    }
    this.getVasarlas()
  }

  openDialog(id:number) {
    let dialogRef = this.dialog.open(VasarlasdialogComponent,
      {
        data: id,
        width: '100%'
      });
      dialogRef.afterClosed().subscribe(
        ()=> {
          this.getVasarlas()
        }
      )
  }

  deleteVasarlas(id: number) {
    let dialogRef = this.dialog.open(DeletedialogComponent, 
    {
      data: id
    });
    dialogRef.afterClosed().subscribe(
      ()=> {
        this.getVasarlas()
      }
    )
  }

  openCikkDialog() {
    let dialogRef = this.dialog.open(CikkdialogComponent);
      dialogRef.afterClosed().subscribe(
        ()=> {
          this.getVasarlas()
        }
      )
  }

  openBoltDialog() {
    let dialogRef = this.dialog.open(BoltdialogComponent);
      dialogRef.afterClosed().subscribe(
        ()=> {
          this.getVasarlas()
        }
      )
  }

  openVasarlasDialog() {
    let dialogRef = this.dialog.open(VasarlascreateComponent);
      dialogRef.afterClosed().subscribe(
        ()=> {
          this.getVasarlas()
        }
      )
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter()
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  exportBolt() {
    this.boltService.exportBolt().subscribe()
  }

  exportCikk() {
    this.cikkService.exportCikk().subscribe()
  }

  exportVasarlas() {
    this.vasarlasService.exportVasarlas().subscribe()
  }
  exportVasarlasTetel() {
    this.vasarlasTetelService.exportVasarlasTetel().subscribe()
  }
}

