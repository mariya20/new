const utils = require("../app/bookshop_utils");

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 25 when passed 50", () => {
    expect(utils.makeHalfPrice(50)).toBe(25);
  });
});

describe("utils.countBooks", () => {
  test("returns 2 when passed ['first',  'second']", () => {
    expect(utils.countBooks(["first", "second"])).toBe(2);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    expect(utils.isInStock("The Stone Diaries")).toBe(true);
  });
  test("returns true if the title is in stock", () => {
    expect(utils.isInStock("Something else")).toBe(false);
  });
});

describe("utils.getTotalOrderPrice", () => {
  test("returns 96 when passed 8, 10", () => {
    expect(utils.getTotalOrderPrice(8, 10)).toBe(96);
  });
  test("returns 43.2 when passed 18, 2", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
  });
});
