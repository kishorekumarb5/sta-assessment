describe('Add Product to Cart Test', () => {
  beforeEach(() => {
    // Visit the product page
    cy.visit('https://www.harveynorman.com.au/google-nest-cam-outdoor-indoor-battery-1-pack.html');
    cy.pause()
    });
  it('should add the product to the cart and validate it', () => {
   
    cy.wait(2000); 

    // Check if the "Add to Cart" button is present
    cy.get('[data-testid= "add-to-cart"]', { timeout: 10000 }).should('be.visible').click(); 

    // Wait for the cart to update
    cy.wait(2000); 

    // Click the cart icon to open the cart
    cy.get('a[href="PageHeaderCart_sf-page-header-cart-button_____ER"]', { timeout: 10000 }).click();

    // Validate that the product is in the cart
    cy.get('ProductCardName_sf-product-card__name__K5LXc', { timeout: 10000 }) 
      .should('contain.text', 'Google Nest Cam Outdoor/Indoor Battery - 1 Pack');

    // Optionally, validate the quantity
    cy.get('MiniCartItemProductCard_price-qty__2B8rZ', { timeout: 10000 })
      .should('contain.text', '1');
  });
});