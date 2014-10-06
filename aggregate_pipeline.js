// Grouping with a sum and a match.
// Finding all Items with a subtotal above 1000
db.sales.aggregate(
  { $group :
    { _id : "$item",
      sumSubtotal : { $sum : "$subtotal" }
    }
  },
  { $match : { sumSubtotal : { $gte : 1000 } }
});