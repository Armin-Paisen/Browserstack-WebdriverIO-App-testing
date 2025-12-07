import Page from "./page";

// sub page containing specific selectors and methods for homepage

class HomePage extends Page {
  // define selectors using getter methods

  public get header() {
    return $("");
  }

  public get navForms() {
    return $("~Forms");
  }

}

export default new HomePage();
