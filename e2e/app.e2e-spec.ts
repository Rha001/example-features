import { SassProjectPage } from './app.po';

describe('sass-project App', () => {
  let page: SassProjectPage;

  beforeEach(() => {
    page = new SassProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
