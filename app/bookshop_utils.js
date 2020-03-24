function addVAT(price) {
  return price + 0.2 * price;
}
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
function makeHalfPrice(price) {
  return price * 0.5;
}
function countBooks(array) {
  return array.length;
}
function isInStock(book) {
  const bookShelf = [
    {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    },
    {
      title: "The Stone ",
      author: "Carol S",
      yearOfPublication: 1983,
      quantity: 6
    }
  ];
  let index = bookShelf.findIndex(i => i.title === book);
  return (
    bookShelf.some(tit => tit.title === book) && bookShelf[index].quantity > 0
  );
}
function getTotalOrderPrice(price, quantity) {
  let total = price * quantity * 1.2;
  if (total === Math.floor(total)) {
    return total;
  } else {
    return Number(total.toFixed(1));
  }
}

module.exports = {
  addVAT,
  getFullName,
  makeHalfPrice,
  countBooks,
  isInStock,
  getTotalOrderPrice
};
