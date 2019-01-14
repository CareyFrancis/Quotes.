import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes= [
    new Quote(1,'Carey Francis', 'Learning Advanced Mathematics is easy,said no one ever!'),
    new Quote(2,'Kendrick Lamar','If God got us ,then we are going to be alright!'),
    new Quote(3,'Robert Oppenheimer','Now I am become death, the destroyer of wolrds.'),
    new Quote(4,'Albert Einstein','Imagination is more important than knowledge.'),
    new Quote(5,'Donald Trump','I would give myself an A+'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
