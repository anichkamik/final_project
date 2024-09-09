// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('registration', () => {
    let random=Math.round((Math.random()*1000))
    cy.log(random)
    cy.visit('/')
    // registration user
    // Click on 'Signup / Login' button
    cy.get('.menu-pop > .rprof').click()
    // Verify 'New User Signup!' is visible
    cy.get('.input-shablon > p > a').click()
    // Enter information
    cy.get(':nth-child(1) > .ismile').type("ani mikadze")
    cy.get(':nth-child(2) > .imail').type("anamikadze"+random+"@gmail.com")
    cy.get('.ipir').type("1122334455"+random)
    cy.get(':nth-child(4) > .itel').type("5771231"+random)
    cy.get(':nth-child(5) > .ipass').type("12345670911")
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type("12345670911")
    cy.get("label:nth-child(2) > svg:nth-child(1) > g:nth-child(1) > rect:nth-child(1)").click({force: true})
    // Click 'Signup' button
    cy.get('.regsub').click()


 })


 Cypress.Commands.add('login', (email,password) => { 
    cy.visit('/')
    // login user
    // Click on 'Signup / Login' button
    cy.get('.menu-pop > .rprof').click()
    // Verify 'Login to your account' is visible
    cy.get('.avtorization > .input-shablon > h2').should("have.text","ავტორიზაცია")
    // Enter correct email address and password
    cy.get(':nth-child(5) > .imail').type(email)
    cy.get('.ipass').type(password)
    //  Click 'login' button
    cy.get('.avtorization > .input-shablon > .form-button').click()
})

 Cypress.Commands.add('addCart', () => { 
    // Click 'menu button
    cy.get('.popmenu-burger > .burger-span').click()
    // choose first category
    cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click()
    // choose first section
    cy.get('.cat-down.active > .category-holder > :nth-child(1)').click()
    // choose first one in the list
    cy.get('.category-holder > .active > :nth-child(2) > a').click()
    // Hover over product and click 'Add to cart'
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    // Click 'Cart' button
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    // Verify that cart is visible
    cy.get('.bred > :nth-child(2) > a').should("have.text","კალათა")
    // Verify product is added to Cart
    cy.get('.cart-item').should("be.visible")
})

    
    
    
    
    
    
    

})
