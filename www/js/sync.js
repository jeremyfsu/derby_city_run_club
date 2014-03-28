var Sync = {
  init: function() {
    var blob = new Blob([Runners.toCSV()], {type: "text/csv"});
    /* upload to google docs */
  }
};
