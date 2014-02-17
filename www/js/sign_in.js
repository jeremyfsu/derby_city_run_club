var SignIn = {
  $result: document.getElementById("result"),

  query_string: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

  init: function() {
    runner = Runners.get(query_string('telephone'));
    if (runner != null) {
      Runners.sign_in(runner);
      /* Display message "you've run x times!" */
    }
    else {
     $result.innerHTML = 'Telephone number not found!'; 
    }
  }

};
SignIn.init();
