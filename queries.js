// where
db.sales.find({item: "Book"});

// in
db.sales.find({item: {$in: ["Book", "Computer"]}});

// greater than
db.sales.find({quantity: {$gt: 5}});

// get count
db.sales.count();

// working with an object
var first = db.sales.find()[0];
first.comments = "Angry customer";
db.sales.save(first);

// exists (has column)
db.sales.find({comments: {$exists: 1}});