import { Component, OnInit } from '@angular/core';
import { Quoute } from '../quote'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  likeCount: number = 0;
  dislikeCount :number = 0;

  like(){
    this.likeCount = this.likeCount +1
  }

  dislike(){
    this.dislikeCount = this.dislikeCount +1
  }

  deleteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
