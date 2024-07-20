describe("verify mobile functionality",()=>{
    it("verify the mobiles",()=>{

    
       cy.visit("https://www.flipkart.com/")
    
       cy.get('input[type="text"]').type("mobiles{enter}")

    //    cy.wait(3000);
      //  cy.get('input[class="vn9L2C"]').check({force:true})
       cy. get('img[class="DByuf4"]').each((element)=>{

         


       })

    //    price=16000

    //    if(price>15000)
    //    {
    //     print("mobile names")
    //    }
    //   else
    //   {

    //   }

    })
})