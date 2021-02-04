import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})
export class AlertComponent {

    constructor(private translate: TranslateService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AlertComponent>) {
        if (this.data.mode === null) {
            this.data.mode = '';
        }
        if (this.data.msg === null) {
            this.data.msg = '';
        }
    }
}
