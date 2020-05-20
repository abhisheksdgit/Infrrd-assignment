import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-rides',
  templateUrl: './filter-rides.component.html',
  styleUrls: ['./filter-rides.component.css'],
})
export class FilterRidesComponent implements OnInit {
  @Output()
  filterValEvent: EventEmitter<string> = new EventEmitter();
  filterVal: string = '';

  constructor() {}

  ngOnInit(): void {}

  filterValue() {
    this.filterValEvent.emit(this.filterVal);
  }
}
