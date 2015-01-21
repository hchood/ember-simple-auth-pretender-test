import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var application, server;

module('Acceptance: Signing In', {
  setup: function() {
    application = startApp();

    server = new Pretender();

    // this is never called
    server.post('/api/v1/token', function(request) {
      var payload = {
        user_token: 'gvSkMer7hZpw9iZsBZ4r',
        user_id: 3
      };

      return [201, {'Content-Type': 'application/json'}, JSON.stringify(payload)];
    });
  },

  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('user signs in', function() {
  visit('/login');

  fillIn('input[name="email"]', 'helen@example.com');
  fillIn('input[name="password"]', 'secretpassword');

  click('input[type="submit"]');

  andThen(function() {
    expect(1);

    // Pretender never mocks out response, so
    // a user is never authenticated and this never passes
    equal(find('a:contains("Logout")').length, 1);
  });
});
