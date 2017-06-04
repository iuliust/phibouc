import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const quotes = gql`
  query {
    quotes {
      id
      text
      author {
        firstName
        lastName
      }
    }
  }
`;

interface QuotesResponse {
  quotes: {
    id: string;
    text: string;
    author: {
      firstName: string;
      lastName: string;
    }
  }[];
}

@Component({
  selector: 'jlm-candidat-presentation',
  templateUrl: './candidat-presentation.component.html',
  styleUrls: ['./candidat-presentation.component.scss']
})
export class CandidatPresentationComponent implements OnInit {
  quotesList: any[];
  loading: boolean;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: quotes
    })
    .subscribe(({data}) => {
      const test = data as QuotesResponse;
      this.quotesList = test.quotes;
    });
  }

}
