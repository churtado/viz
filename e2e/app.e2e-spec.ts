import { VizPage } from './app.po';

describe('viz App', () => {
  let page: VizPage;

  beforeEach(() => {
    page = new VizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
