Meteor.publish("books", function () {
  return Meteor.books.find({});
});