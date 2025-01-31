/// <reference types="cypress" />

describe('My First Test', () => {
    it.only('clicking "type" shows the right headings', () => {
        // Kunjungi halaman contoh dari Cypress
        cy.visit('https://example.cypress.io')

        // Memberhentikan sementara eksekusi untuk debugging
        cy.pause()

        // Klik elemen yang mengandung teks 'type'
        cy.contains('type').click()

        // Memastikan URL berubah dan mengandung 'commands/actions'
        cy.url().should('include', '/commands/actions')

        // Mengambil input dengan selector '.action-email'
        cy.get('.action-email')
          .clear() // Mengosongkan input terlebih dahulu
          .type('test@example.com') // Mengisi input dengan email
          .should('have.value', 'test@example.com') // Memastikan nilai yang diketik benar
    })
})
