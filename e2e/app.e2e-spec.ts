import { Bootstrap4IntroPage } from './app.po';

describe('bootstrap4-intro App', () => {
  let page: Bootstrap4IntroPage;

  beforeEach(() => {
    page = new Bootstrap4IntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
