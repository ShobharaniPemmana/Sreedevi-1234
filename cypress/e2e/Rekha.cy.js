describe('verify the add title', () => {
    it('verify the job title', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('My Actions').should("be.visible")
        cy.contains('Admin').click()
        cy. contains('Job ').click()
        cy.contains('Job Titles').click()
        cy.get('button[type="button"]').click({multiple:true})
        cy.get('input[placeholder="Search"]').type('QA Tester')
        // cy.get('textarea[placeholder="Type description here"]').type('software roles and responsibility')
        // cy.get('textarea[placeholder="Add note"]').type('working shifts are compartable')
        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Saved'). should("be.visible")
    })

})