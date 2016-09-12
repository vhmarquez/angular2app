export class PowerdmsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('powerdms-app h1')).getText();
  }
}
