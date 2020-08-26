import {
  Component,
  OnInit
} from '@angular/core';
import {
  Quote
} from '../../models/quote';

@Component({
  selector: 'app-quotly',
  templateUrl: './quotly.component.html',
  styleUrls: ['./quotly.component.css']
})
export class QuotlyComponent implements OnInit {

  quotes: Quote[] = [ /* quote array */
    new Quote('Life is short make every hair flip count.', 'Girly M', 'Amber Rose Rose', new Date(2020, 4, 5), 5, 0),
    new Quote('Just when the caterpillar thought her life was over, she began to fly.', 'Bill Cosby', 'Alfred Warui', new Date(2020, 4, 8), 2, 1),
    new Quote('Its the way her soul dances when he smiles at her .', 'Beth Michele', 'Bliss', new Date(2020, 3, 30), 1, 5),
    new Quote('I have found a natural drug for all of my panic,anxiety, and anger.It is his voice.It is him.', 'J.R.Rogue', 'The Love Bits', new Date(2019, 9, 11), 1, 1),
    new Quote('When it comes to social media,there are just times I turn off the world, you know. The times you have to give yourself space to be quite, which means you have got to set those phones down.', 'Austin Oyugi', 'A.W.K', new Date(2019, 8, 15), 3, 2),
    new Quote('Raising kids is a walk in the park ....', 'Jurassic park', 'Myself', new Date(2020, 8, 30), 6, 5 ),
  ];

  toggleDetails(index) {
    /* function for toggling quote details */
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  toggleText(index) {
    /* function for toggling quote small text */
    this.quotes[index].showMore = !this.quotes[index].showMore;
    if (this.quotes[index].showMore)
      this.quotes[index].smallText = 'see less';
    else
      this.quotes[index].smallText = 'see more';
  }
  quoteDeleted(deleteQuote, index) {
    /* function for deleting quote */
    if (deleteQuote) {
      let deleteQuote = confirm(`Are you sure you want to delete this quote?`)
      if (deleteQuote) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highlightHighest() {
    /* function for getting quote with highest vote*/
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quotes.length; j++) {
      quotesUpvote.push(this.quotes[j].upVote)
    }

    quotesUpvote.sort(function (a, b) {
      return b - a
    })
    highestUpVote = quotesUpvote[0]
    return highestUpVote;
  }

  get sortQuotes() {
    /*  sorts quotes according to submission date */
    return this.quotes.sort((a, b) => {
      return <any > new Date(b.submissionDate) - < any > new Date(a.submissionDate);
    });
  }

  addNewQuote(quote) {
    /* function for adding a new quote */
    this.quotes.unshift(quote)
  }
  constructor() {}

  ngOnInit(): void {}

}