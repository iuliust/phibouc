import { CandidatPage } from './app.po';

describe('candidat App', () => {
  let page: CandidatPage;

  beforeEach(() => {
    page = new CandidatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jlm works!');
  });
});
