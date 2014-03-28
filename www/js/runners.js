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
  },

  toArray: function() {
    var runners = [];
    for(var i in window.localStorage) {
      if(window.localStorage.key(i).match(/^Runners:/)) {
        runners.push(window.localStorage.getItem(i));
      }  
    }
    return runners;
  },

  toCSV: function() {
    var csv = "";
    for(var r in Runners.toArray()) {
      runner = JSON.parse(Runners.toArray()[r]);
      csv = csv.concat('"' + runner.telephone + '",');
      csv = csv.concat('"' + runner.first_name + '",');
      csv = csv.concat('"' + runner.last_name + '",');
      csv = csv.concat(runner.run_count + '\r\n');
    }
    return csv;
  }
};
Runners.init();


