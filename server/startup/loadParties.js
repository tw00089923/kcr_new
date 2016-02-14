Meteor.startup(function () {




 
  if (Parties.find().count() === 0) {
    var parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Fast just got faster with Nexus S.'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'
      }
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }
  }

  if (Calendar.find().count()  === 0){

    var events = [
        {
            title  : 'event1',
            start  : '2016-01-01'
        },
        {
            title  : 'event2',
            start  : '2016-01-05',
            end    : '2016-01-07'
        },
        {
            title  : 'event3',
            start  : '2016-01-09T12:30:00',
            allDay : false // will make the time show
        }
    ];

    for (var i = 0; i < events.length;i++){

        Calendar.insert(events[i]);

    }



  }


});
