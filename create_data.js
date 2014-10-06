var items = ["Book", "Computer", "Food"];
var costs = [10, 50, 5];

for(var i = 0; i < 100; i++) {
  var item = Math.floor(Math.random()*items.length);
  var quantity = Math.floor(Math.random()*9) + 1;

  db.sales.insert({
    item: items[item],
    quantity: quantity,
    subtotal: quantity * costs[item],
    total: Math.round(quantity * costs[item] * 1.15)
  });
}