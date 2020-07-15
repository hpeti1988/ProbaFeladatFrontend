import { Component, OnInit } from '@angular/core';
import { Bolt } from 'src/app/models/bolt';
import { BoltService } from 'src/app/service/bolt.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-boltdialog',
  templateUrl: './boltdialog.component.html',
  styleUrls: ['./boltdialog.component.css']
})
export class BoltdialogComponent implements OnInit {

  bolt: Bolt = new Bolt();

  constructor(private boltService: BoltService, private snackBar: MatSnackBar) { }

  ngOnInit() {
 
  }

  onSubmit() {
    this.postBolt()
  }

  postBolt() {
    this.boltService.createBolt(this.bolt).subscribe(
      ()=> {
        this.openSnackBar('Bolt létrehozva', '')
      }, ()=> {
        this.openErrorSnackBar('Bolt létrehozása sikertelen', '')
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
