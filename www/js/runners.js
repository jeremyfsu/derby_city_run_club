var Runners = {
  $form: document.getElementById("runners-form"),

  init: function() {
    Runners.$form.addEventListener("submit", function(event) {
      var entry = {
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        telephone: this.telephone.value
      };

      Runners.add(entry);
    },

  add: function(runner) {
    window.localStorage.setItem("Runners:" + runner.telephone, JSON.stringify(runner));
  },

  get: function(telephone) {
    window.localStoragegetItem("Runners:" + telephone);
  },
};
Runners.init();

