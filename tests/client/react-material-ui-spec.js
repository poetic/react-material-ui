describe('material ui loaded', function () {
  it('should have text that reads "Welcome to Meteor!"', function () {
    expect($("body").text()).toContain("Welcome to Meteor!");
  })
});
