import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes= [
    new Quote(1,'Carey Francis', 'Learning Advanced Mathematics is easy,said no one ever!','Submitted by Ojall', new Date(2019,1,1)),
    new Quote(2,'Kendrick Lamar','If God got us ,then we are going to be alright!','Submitted by Ojall2',new Date(2019,1,3)),
    new Quote(3,'Robert Oppenheimer','Now I am become death, the destroyer of wolrds.','Submitted by Ojall3',new Date(2018,12,30)),
    new Quote(4,'Albert Einstein','Imagination is more important than knowledge.','Submitted by Ojall4',new Date(2018,9,21)),
    new Quote(5,'Donald Trump','I would give myself an A+','Submitted by Ojall5',new Date(2018,3,4)),
  ];

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`are you sure you want to delete?  ${this.quotes[index].author}`)

      if (toDelete) {
        this.quotes.splice(index, 1)

      }

    }

  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
