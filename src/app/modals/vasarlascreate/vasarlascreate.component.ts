import { Component, OnInit } from '@angular/core';
import { VasarlasService } from 'src/app/service/vasarlas.service';
import { Bolt } from 'src/app/models/bolt';
import { Cikkek } from 'src/app/models/cikkek';
import { CikkekService } from 'src/app/service/cikkek.service';
import { BoltService } from 'src/app/service/bolt.service';
import {Vasarlas} from "../../models/vasarlas";
import { VasarlasTetel } from 'src/app/models/vasarlasTetel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vasarlascreate',
  templateUrl: './vasarlascreate.component.html',
  styleUrls: ['./vasarlascreate.component.css']
})
export class VasarlascreateComponent implements OnInit {
  bolt: Bolt[];
  boltId: number = 0;
  cikkek: Cikkek[];
  cikkId: number = 0;
  vasarlas: Vasarlas = new Vasarlas();
  vasarlasTetel: VasarlasTetel = new VasarlasTetel

  constructor(private vasarlasService: VasarlasService, private cikkekService: CikkekService, private boltService:BoltService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.findBolt()
    this.findCikk()
  }

  onSubmit() {
    this.vasarlasService.createVasarlas(this.boltId,this.vasarlas).subscribe(
      ()=> {
        this.openSnackBar('Vásárlás létrehozva', '')
      }, ()=> {
        this.openErrorSnackBar('Vásárlás létrehozása sikertelen', '')
      }
    )
  }

  findBolt() {
    this.boltService.getAllBolt().subscribe(
      (data)=> {
        this.bolt = data
        console.log(data)
      }
    )
  }

  findCikk() {
    this.cikkekService.getAllCikk().subscribe(
      (data)=> {
        this.cikkek = data
        console.log(data)
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
