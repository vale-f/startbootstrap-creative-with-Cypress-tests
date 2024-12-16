import DownloadButtonLocators from '../locators/downloadbuttonLocators';

class DownloadButtonPage {

    clickDownloadNow() {  
        // Clicking the download button
        cy.get(DownloadButtonLocators.downloadNowbutton).click();
    }
    
    verifyUrlStatus() {
        cy.origin('https://startbootstrap.com/theme/creative', () => {
            cy.url().should('eq', 'https://startbootstrap.com/theme/creative');
          });
    }
}

export default DownloadButtonPage;
