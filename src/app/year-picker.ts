import { Component } from '@angular/core';

@Component({
    selector: 'year-picker',

    template: `
    <select  required>
            <option  *ngFor="let y of years"  [selected]="yy === y ">{{y}}</option>    
    </select>`
})

export class YearPicker {


    years: number[] = [];
    yy: number;

    ngOnInit() {
        this.getYear();

    }

    getYear() {
        var today = new Date();
        this.yy = today.getFullYear();
        for (var i = (this.yy - 100); i <= this.yy; i++) {
            this.years.push(i);
        }
    }


}