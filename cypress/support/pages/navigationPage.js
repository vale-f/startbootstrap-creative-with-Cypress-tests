//For using the locator "images"
import CommonLocators from '../locators/commonLocators';

class NavigationPage {

    checkImages(){
        //cy.get(NavigationLocators.imagesSection).should('be.visible');
        cy.get(CommonLocators.images).should('have.length', 6)
        .each(($images, index) => {
            cy.log(`Checking image #${index + 1}`);  // Log index
            cy.wrap($images).should('be.visible');
        });
    }

}

export default NavigationPage;