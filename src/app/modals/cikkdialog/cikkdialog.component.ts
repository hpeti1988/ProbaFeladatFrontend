import { Component, OnInit } from '@angular/core';
import { CikkekService } from 'src/app/service/cikkek.service';
import { Cikkek } from 'src/app/models/cikkek';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cikkdialog',
  templateUrl: './cikkdialog.component.html',
  styleUrls: ['./cikkdialog.component.css']
})
export class CikkdialogComponent implements OnInit {

  cikk: Cikkek = new Cikkek();

  constructor(private cikkService: CikkekService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    this.postCikk()
  }

  postCikk() {
    this.cikkService.createCikk(this.cikk).subscribe(
      ()=>{
      this.openSnackBar('Cikk létrehozva', '')
      }, ()=> {
        this.openErrorSnackBar('Cikk létrehozása sikertelen', '')
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
