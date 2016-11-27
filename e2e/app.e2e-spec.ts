import { SvcbaPage } from './app.po';

describe('svcba App', function() {
  let page: SvcbaPage;

  beforeEach(() => {
    page = new SvcbaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
