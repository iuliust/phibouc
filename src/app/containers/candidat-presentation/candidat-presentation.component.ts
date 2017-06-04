import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const quotes = gql`
  query {
    authors {
      id
      firstName
      lastName
    }
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

const createQuote = gql`
  mutation createQuote($input: QuoteInput!) {
    createQuote(
      input: $input
    ) {
      id
      text
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

interface QuotesResponse {
  authors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
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
  authorsList: any[];
  newQuote = {
    text: '',
    author: null,
  };

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: quotes
    })
    .subscribe(({data}) => {
      const cast = data as QuotesResponse;
      this.quotesList = cast.quotes;
      this.authorsList = cast.authors;
    });
  }

  addQuote(text: string, author: string) {
    this.apollo.mutate({
        mutation: createQuote,
        variables: {
          input: {
            text,
            author,
          },
        },
      })
      .subscribe(({data}) => {
        const cast = data as any;
        this.quotesList = this.quotesList.concat([cast.createQuote]);
        this.newQuote = {
          text: '',
          author: null,
        };
      }, (err) => {
        console.error(err);
      });
  }

  deleteQuote(id: string) {
    this.apollo.mutate({
      mutation: gql`
        mutation deleteQuote($id: ID!) {
          deleteQuote(
            id: $id
          ) {
            ok
          }
        }
      `,
      variables: {id}
    })
    .subscribe(({data}) => {
      const cast = data as any;
      if (cast.deleteQuote.ok) {
        this.quotesList = this.quotesList.filter(el => el.id !== id);
      }
    });
  }

}
