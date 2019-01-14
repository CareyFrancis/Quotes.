import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
