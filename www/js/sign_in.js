var SignIn = {
  init: function() {
    runner = Runners.get(query_string('telephone');
    if (runner != null) {
      Runners.sign_in(runner);
      /* Display message "you've run x times!" */
    }
    else {
      /* Display error telephone not found, back button to home screen */
    }
  },

  query_string: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

};
SignIn.init();
