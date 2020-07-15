import { Component, OnInit,Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VasarlastetelService } from 'src/app/service/vasarlastetel.service';

@Component({
  selector: 'app-teteldeletedialog',
  templateUrl: './teteldeletedialog.component.html',
  styleUrls: ['./teteldeletedialog.component.css']
})
export class TeteldeletedialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private  id: number, private snackBar: MatSnackBar,
                                       private vasarlasTetelService: VasarlastetelService) { }

  ngOnInit() {
  }

  deleteVasarlas(choice: string) {
    if(choice === 'true') {
      this.vasarlasTetelService.deleteVasarlasTetelById(this.id).subscribe(
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
