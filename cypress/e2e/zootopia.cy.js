// describe('registration', () => {
//   it('passes', () => {
//   cy.registration()
//   })
// })

// describe('login', () => {
//   it('login invalid user name valid password', () => {
//     cy.fixture("example.json").then((userData) => {
//       cy.login(userData.invalidEmail, userData.password)
//       //verify error message
//       cy.get('.input-div.alert > .alert > img').should("be.visible")
//     })
//   })
//   it('login valid user invalid password', () => {
//     cy.fixture("example.json").then((userData) => {
//       cy.login(userData.email, userData.invalidPassword)
//       //verify error message
//       cy.get('.input-div.alert > .alert > img').should("be.visible")
//     })
//   })
//   it('login valid', () => {
//     cy.fixture("example.json").then((userData) => {
//       cy.login(userData.email, userData.password)
//       //verify loged
//       cy.get('.menu-pop > .iprof > p').should("have.text", "პროფილი")
//     })
//   })
// })


describe('add to cart', () => {
  it('add product', () => {
    cy.fixture("example.json").then((userData) => {
      cy.login(userData.email, userData.password)
      cy.addCart()
    })
  })
})