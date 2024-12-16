
class CommonPage {
    visit()
    {
        const baseUrl = Cypress.config('baseUrl'); 
        cy.visit(baseUrl);
    }


    checkSection(section)
    {
        cy.get(section).should('be.visible'); 
        cy.window().then((window) => {
            const scrollPosition = window.scrollY; // Get current scroll position
            const aboutSectionOffset = Cypress.$(section).offset().top; // Get top offset of the section
            const navbarHeight = 72;
            // Assert that the scroll position is close to the top of the section (allowing a small tolerance)
            expect(scrollPosition).to.be.closeTo(aboutSectionOffset - navbarHeight, 5);
    })
    }

}

export default CommonPage;