import { PowerdmsPage } from './app.po';

describe('powerdms App', function() {
  let page: PowerdmsPage;

  beforeEach(() => {
    page = new PowerdmsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('powerdms works!');
  });
});
