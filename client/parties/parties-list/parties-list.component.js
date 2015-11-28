angular.module('socially').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newParty = {};
      this.perPage = 3;

      this.helpers({
        parties: () => {
          return Parties.find({}, { sort : this.sort });
        },
        partiesCount: () => {
          return Counts.get('numberOfParties');
        },
        page: 1,
        sort: {
          name: 1
        }
      });

      this.subscribe('parties', () => {
        return [
          {
            limit: parseInt(this.perPage),
            skip: parseInt((this.page - 1) * this.perPage),
            sort: this.sort
          }
        ]
      });

      this.addParty = () => {
        this.newParty.owner = Meteor.user()._id;
        Parties.insert(this.newParty);
        this.newParty = {};
      };

      this.removeParty = (party) => {
        Parties.remove({_id: party._id});
      };

      this.pageChanged = (newPage) => {
        this.page = newPage;
      };
    }
  }
});