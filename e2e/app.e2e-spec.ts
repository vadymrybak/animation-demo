import { AnimationDemoPage } from './app.po';

describe('animation-demo App', function() {
  let page: AnimationDemoPage;

  beforeEach(() => {
    page = new AnimationDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
