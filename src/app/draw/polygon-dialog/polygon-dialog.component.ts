import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Label} from '../../shared/models/models';

@Component({
  selector: 'app-polygon-dialog',
  templateUrl: 'polygon-dialog.component.html',
})
export class PolygonDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PolygonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Label) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
