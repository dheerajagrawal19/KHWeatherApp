import { Component, Input } from '@angular/core';
import { Month } from './month';


@Component({
    selector: 'month-picker',

    template: `
    {{value}}
    <select required>
    <option  *ngFor="let p of months"  [selected]="value === p.val ">{{p.name}}</option>    
    </select>
    `
})

export class MonthPicker {
    private mm: string;
    @Input() value: String;

    months: Month[] = [
        { val: '01', name: 'Jan' },
        { val: '02', name: 'Feb' },
        { val: '03', name: 'Mar' },
        { val: '04', name: 'Apr' },
        { val: '05', name: 'May' },
        { val: '06', name: 'Jun' },
        { val: '07', name: 'Jul' },
        { val: '08', name: 'Aug' },
        { val: '09', name: 'Sep' },
        { val: '10', name: 'Oct' },
        { val: '11', name: 'Nov' },
        { val: '12', name: 'Dec' }
    ];

    ngOnInit() {
        this.getMonth();

    }

    getMonth() {
        var today = new Date();
        var _month = today.getMonth() + 1;
        if (_month < 10) {
            this.mm = '' + _month
        }
    }
}