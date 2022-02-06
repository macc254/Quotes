import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
public addvote(quote1:any){
  quote1.upvote++;
}

public reducevote(quote1:any){
  quote1.downvote++;
}
  constructor() { }

  ngOnInit(): void {
  }
  quotes: Quote[] = [
    new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall. ','Nelson Mandela','Mercy Bore',new Date(2020,3,13)),
    new Quote('The way to get started is to quit talking and begin doing.','Walt Disney','Mercy Bore',new Date(2020,3,13)),
    new Quote('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt','Mercy Bore',new Date(2020,3,13)),
    new Quote('Life is what happens when you are busy making other plans.','John Lennon','Mercy Bore',new Date(2020,3,13))
   ];
  //  addNewQuote(quote: Quote){
  //   let quoteLength = this.quotes.length;
  //   quote.id = quoteLength+1;
  //   quote.quoteDate = new Date(quote.quoteDate)
  //   this.quotes.push(quote)
  // }
 

}
