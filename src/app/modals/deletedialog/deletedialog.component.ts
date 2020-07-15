import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VasarlasService } from 'src/app/service/vasarlas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private id: number,  private vasarlasService: VasarlasService,
             private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteVasarlas(choice: string) {
    if(choice === 'true') {
      this.vasarlasService.deleteVasarlas(this.id).subscribe(
        ()=> {
          this.openSnackBar('Tétel sikeresen törölve', '')
        }, ()=> {
          this.openErrorSnackBar('Tétel törlése sikertelen', '')
        }
      )
    } 
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {duration: 2500});
  }

  openErrorSnackBar(message, action) {
    this.snackBar.open(message, action, {duration: 2500});
  }

}
