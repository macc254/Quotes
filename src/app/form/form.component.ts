import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote = new Quote("","","",new Date(),0,0,false);
@Output() addQuote = new EventEmitter<Quote>();
  quoteForm: any;

submitQuote(){
  this.addQuote.emit(this.newQuote);
  this.quoteForm.reset();
}

  constructor() { }

  ngOnInit(): void {
  }

 

}
