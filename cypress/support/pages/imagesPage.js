import ImagesLocators from '../locators/imagesLocators';

//For using the locator "images"
import CommonLocators from '../locators/commonLocators';

class ImagesPage {
    
    hoverOnImageAndProjectInfo()
    {
        cy.get(ImagesLocators.imagesForHover)
        .each(($imagesForHover) => {
            cy.wrap($imagesForHover).realHover();  // Hover on each image
            cy.get(ImagesLocators.projectCategory).should('have.css', 'opacity', '1');
            cy.get(ImagesLocators.projectName).should('have.css', 'opacity', '1');
          })
    }

    imageModal()
    {
        cy.get(CommonLocators.images)
        .each(($images) => {
            cy.wrap($images).click({force: true})
            cy.get(ImagesLocators.largerImages).should('be.visible');
            cy.clickButton(ImagesLocators.closeImage)
          })
    }

    imageNext()
    {
        cy.get(CommonLocators.images)
        cy.clickButton(ImagesLocators.firstImage, {force: true})
        .each(($images) => {
            cy.get(ImagesLocators.largerImages).should('be.visible');
            cy.clickButton(ImagesLocators.nextImage)
          })
          cy.clickButton(ImagesLocators.closeImage)
    }

    imagePrevious()
    {
        cy.get(CommonLocators.images)
        cy.clickButton(ImagesLocators.firstImage, {force: true})
        .each(($images) => {
            cy.get(ImagesLocators.largerImages).should('be.visible');
            cy.clickButton(ImagesLocators.previousImage)
          })
    }

}

export default ImagesPage;