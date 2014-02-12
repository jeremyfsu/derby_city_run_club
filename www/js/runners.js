var Runners = {

  init: function() {
  },

  save: function(runner) {
    window.localStorage.setItem("Runners:" + runner.telephone, JSON.stringify(runner));
  },

  get: function(telephone) {
    return JSON.parse(window.localStorage.getItem("Runners:" + telephone));
  },

  sign_in: function(telephone) {
    runner = this.get(telephone);
    runner.run_count = runner.run_count + 1;
    this.save(runner);
    return runner;
  },

  query_string: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

};
Runners.init();

