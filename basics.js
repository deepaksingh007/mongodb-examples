// show databases
show dbs;

// choose a db
use test;

// show collections (tables)
show collections;

// SELECT * FROM table
db.sales.find();
var sale = db.sales.find()[0];

// DELETE FROM table
db.sales.remove();

// INSERT into table
db.sales.insert({
  item: "Book",
  quantity: 2,
  subtotal: 20,
  total: Math.round(2 * 10 * 1.15)
});