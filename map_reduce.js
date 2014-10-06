// count
db.sales.mapReduce(
  function() {
    emit(1, 1);
  },
  function(key, values) {
    results = 0;
    values.forEach(function(value) {
      results += value;
    });
    return results;
  },
  {out: { inline: 1}}
);

// total quantity (sum)
db.sales.mapReduce(
  function() {
    emit(1, this.quantity);
  },
  function(key, values) {
    results = 0;
    values.forEach(function(value) {
      results += value;
    });
    return results;
  },
  {out: { inline: 1}}
);

// total per item
db.sales.mapReduce(
  // map
  function() {
    emit(this.item, this.subtotal);
  },
  // reduce
  function(key, values) {
    var results = {subtotal: 0};

    values.forEach(function(value) {
      results.subtotal += value;
    });

    return results;
  },
  {out: { inline: 1 }}
);

// average quantity per sale
db.sales.mapReduce(
  function() {
    var value = {
      count: 1,
      quantity: this.quantity
    }
    emit(this.item, value);
  },
  function(key, values) {
    var results = {count: 0, quantity: 0};

    values.forEach(function(value){
      results.count += value.count;
      results.quantity += value.quantity;
    });

    return results;
  },
  {
    out: { inline: 1},
    query: {
      item: {$in: ["Book", "Computer"]}
    },
    finalize: function(key, reducedValue) {
      reducedValue.avg = (reducedValue.quantity / reducedValue.count);
      return reducedValue;
    }
  }
);