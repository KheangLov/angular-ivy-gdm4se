import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.html',
  styleUrls: ['snack-bar.css'],
})
export class SnackBar {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
