import { ImageSliderPage } from './app.po';

describe('image-slider App', function() {
  let page: ImageSliderPage;

  beforeEach(() => {
    page = new ImageSliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
