describe("verify the job title functionality",()=>{

    it('verify the functionality',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.contains("Dashboard").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job ").click()
        cy.contains("Job Titles").click()
        cy.contains(" Add ").click()
        cy. get('input[class="oxd-input oxd-input--active"]').last().type("DBS QA TECHNOLOGIES")
        cy.contains(" Save ").click()
        // cy.contains('Successfully Saved').should("be.visible")

        cy.contains('Successfully Saved').should("be.visible")




    })
})