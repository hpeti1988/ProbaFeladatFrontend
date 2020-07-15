import { Component, OnInit, Inject } from '@angular/core';
import { VasarlasTetel } from 'src/app/models/vasarlasTetel';
import { VasarlastetelService } from 'src/app/service/vasarlastetel.service';
import { CikkekService } from 'src/app/service/cikkek.service';
import { Cikkek } from 'src/app/models/cikkek';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vasarlas-tetel-dialog',
  templateUrl: './vasarlas-tetel-dialog.component.html',
  styleUrls: ['./vasarlas-tetel-dialog.component.css']
})
export class VasarlasTetelDialogComponent implements OnInit {

  vasarlasTetel: VasarlasTetel = new VasarlasTetel();
  cikkek: Cikkek[];
  cikkId: number = 0;


  constructor(
            @Inject(MAT_DIALOG_DATA) public data:number, 
            private vasarlasTetelService: VasarlastetelService,
            private cikkekService: CikkekService,
            private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cikkekService.getAllCikk().subscribe(
      (res)=>{
        this.cikkek = res
        console.log(res);
      }
    )
    console.log(this.data)
  }

  onSubmit() {
    this.postVasarlasTetel()
  }

  postVasarlasTetel(){
    this.vasarlasTetelService.createVasarlasTetel
    (this.data,this.vasarlasTetel,this.cikkId)
    .subscribe(
      ()=> {
        this.openSnackBar('Tétel hozzáadva', '')
      }, ()=>{
        this.openErrorSnackBar('Tételhozzáadás sikertelen', '')
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
