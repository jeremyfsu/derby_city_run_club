var Runners = {

  init: function() {
  },

  save: function(runner) {
    window.localStorage.setItem("Runners:" + runner.telephone, JSON.stringify(runner));
  },

  get: function(telephone) {
    return JSON.parse(window.localStorage.getItem("Runners:" + telephone));
  },

  sign_in: function(runner) {
    runner.run_count = runner.run_count + 1;
    this.save(runner);
    return runner;
  }

};
Runners.init();


