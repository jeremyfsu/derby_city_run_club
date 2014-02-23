var SignIn = {
  query_string: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

  init: function() {
    var result_div = document.getElementById("result");
    var telephone = this.query_string('telephone');
    runner = Runners.get(telephone);
    if (runner != null) {
      Runners.sign_in(runner);
      result_div.innerHTML = 'Welcome ' + runner.first_name + '!<br>This is run # ' + runner.run_count + ' for you!';
    }
    else {
     result_div.innerHTML = 'Telephone ' + telephone + ' not found!'; 
    }
  }

};
SignIn.init();
