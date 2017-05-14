import { ThongthuishopAngular2Page } from './app.po';

describe('thongthuishop-angular2 App', () => {
  let page: ThongthuishopAngular2Page;

  beforeEach(() => {
    page = new ThongthuishopAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
