var Sync = {
  init: function() {
    var blob = new Blob([Runners.toCSV()], {type: "text/csv"});
    var client = new XMLHttpRequest();
    var url = "https://www.googleapis.com/upload/drive/v2/files?uploadType=media";

    client.open("PUT", url, false);
    client.setRequestHeader("Content-Type", blob.type);
    client.setRequestHeader("Content-Length", blob.size);
    client.setRequestHeader("Authorization", auth);

    client.send(blob);

  }
};
