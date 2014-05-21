var Runners = {

  init: function() {
    var settings = JSON.parse(window.localStorage.getItem("settings"));
    AWS.config.update({accessKeyId: settings.key, secretAccessKey: settings.secret});
  },

  save: function(runner, callback) {
//    window.localStorage.setItem("Runners:" + runner.telephone, JSON.stringify(runner));
    var s3 = new AWS.S3({params: {Bucket: 'derby_city_runners_data'}});
    var params = {Key: runner.telephone, Body: JSON.stringify(runner)};
    s3.putObject(params, function (err, data){callback();});
  },

  get: function(telephone, callback) {
//    return JSON.parse(window.localStorage.getItem("Runners:" + telephone));
    var s3 = new AWS.S3({params: {Bucket: 'derby_city_runners_data'}});
    s3.getObject({Key: telephone}, function (err, data) {
      if(err == null) 
        callback(JSON.parse(data.Body));
      else
        callback(null);
    });
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


