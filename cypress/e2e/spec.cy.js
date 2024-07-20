import login from "../../e2e/pages/login.po"



import dashboard from "../../e2e/pages/dashboard.po"
import logindata from "../../fixtures/Addcreds.json"
// import loginpage from "../../e2e/pages/login.po"
// const login=new loginpage()

describe('Verify buzz functionality', () => {
    it("Verify What's on your mind", () => {
      cy. visit('/web/index.php/auth/login')

      // cy.get(login.usernameInput()).type(Cypress.env("username"))
      // cy.get(login.passwordInput()).type(Cypress.env("password"))
      // cy.get(login.loginbutton()).click()
      login.loginwithcreds(logindata.username,logindata.password)

      cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      //or

      cy.url().should("include", "/web/index.php/dashboard/index")
      cy.contains(dashboard.buzzMenu()).click()
      cy.url().should("include","/web/index.php/buzz/viewBuzz")
      cy.get(`textarea[placeholder="What's on your mind?"]`).type("shobha")
      cy.get('button[type="submit"]').click()
      cy.contains("shobha").should("be.visible")


      
    })
  })