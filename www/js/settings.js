var Settings = {
  $form: document.getElementById("settings-form"),
  
  init: function() {
    var settings = JSON.parse(window.localStorage.getItem("settings"));
    
    Settings.$form.reset();
    Settings.$form.key.value = settings.key;
    Settings.$form.secret.value = settings.secret;
    Settings.$form.addEventListener("submit", function(event) {
      var settings = {
        key: this.key.value,
        secret: this.secret.value,
      };
      
     window.localStorage.setItem("settings", JSON.stringify(settings)); 
     window.location = 'index.html';
      event.preventDefault();
    }, false);

  },
  
  get: function() {
    var settings = JSON.parse(window.localStorage.getItem("settings"));
    return settings;
  }
};
Settings.init();

