import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
   new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall. ','Nelson Mandela','Mercy Bore',new Date(2020,3,13)),
   new Quote('The way to get started is to quit talking and begin doing.','Walt Disney','Mercy Bore',new Date(2020,3,13)),
   new Quote('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt','Mercy Bore',new Date(2020,3,13)),
   new Quote('Life is what happens when you are busy making other plans.','John Lennon','Mercy Bore',new Date(2020,3,13))
  ];

  toggleAuthor(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
