import {browser} from 'protractor';
// local import of the exported SampleApplicationPage class
import {SampleApplicationPage} from './sampleApplication.po';

describe('Sample Application homepage', () => {
    let page: SampleApplicationPage;

    let imageSrc: string = "people.png";
    let title: string = "CA Continuous Delivery Director";
    let message: string = "You deployed the sample application. Next thing to do is run some tests. Follow the 'Getting Started' to see how.";

    beforeAll(() => {
        browser.ignoreSynchronization = true;
        page = new SampleApplicationPage();
        return page.get();
    });

    it('test top image validness', () => {
        expect(page.getImageSrc()).toContain(imageSrc);
    });

    it('test title validness', () => {
        expect(page.getTitle()).toMatch(title);
    });

    it('test message validness', () => {
        expect(page.getMessage()).toMatch(message);
    });

    afterAll(() => {
        browser.ignoreSynchronization = false;
    });
});
