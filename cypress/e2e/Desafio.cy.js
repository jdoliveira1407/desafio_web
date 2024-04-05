//Desafio Web 

describe('', (Desafio) => {
    it('', () => {
        cy.visit("https://the-internet.herokuapp.com/challenging_dom")
        
        cy
            .get('.button')
            .not('.alert,.success')
            .click()

        cy
            .get('.button')
            .filter('.alert')
            .click()

        cy
            .get('.button')
            .filter('.success')
            .click()


        cy
            .get('tbody tr')
            .eq(0)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(0)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(1)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(1)
            .contains('delete')
            .click()   
        
        cy
            .get('tbody tr')
            .eq(2)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(2)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(3)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(3)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(4)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(4)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(5)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(5)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(6)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(6)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(7)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(7)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(8)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(8)
            .contains('delete')
            .click()

        cy
            .get('tbody tr')
            .eq(9)
            .contains('edit')
            .click()

        cy
            .get('tbody tr')
            .eq(9)
            .contains('delete')
            .click()

    })
});