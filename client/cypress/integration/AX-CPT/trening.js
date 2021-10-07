import "cypress-localstorage-commands";

describe("Tutorial component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/tutorial");
    cy.setLocalStorage("nickname", "test");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });
  it("Render the tutorial page with correct data", () => {
    cy.contains("Witam");
    cy.wait(2000);
    cy.contains("Naciśnij Spację aby kontyunować");
  });
  it("Go to the next data", () => {
    cy.contains("Witam");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", { parseSpecialCharSequences: false });
  });
  it("Correctly display all data", () => {
    cy.contains("Witam");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Podczas każdej próby");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Celem zadania jest wykrycie pary liter A-X");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Kolejna litera - X");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("+++ - wskazówka");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Inne litery");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Cyfry");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Czas odpowiedzi");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Możliwości");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Zdjęcia");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Dźwięk błędu");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Dźwięk reakcji na cyfrę");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Koniec teorii, czas na trening");
  });
  it("Correctly display instruction and pass the test", () => {
    cy.contains("Witam");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Podczas każdej próby");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Celem zadania jest wykrycie pary liter A-X");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Kolejna litera - X");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("+++ - wskazówka");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });

    cy.contains("Inne litery");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Cyfry");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Czas odpowiedzi");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Możliwości");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Zdjęcia");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Dźwięk błędu");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Dźwięk reakcji na cyfrę");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("Koniec teorii, czas na trening");
    cy.wait(2000);
    cy.get("body").type("{ spacebar }", {
      parseSpecialCharSequences: false,
    });
    cy.contains("A");
    cy.wait(1000);
    cy.contains("+ + +");
    cy.wait(4000);
    cy.contains("X");
    cy.wait(1000);
    cy.contains('"  +\n+  +"');
    cy.wait(4000);
  });
});
