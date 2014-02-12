var Runners = {
  $form: document.getElementById("runners-form"),

  init: function() {
    Runners.$form.reset();
    Runners.$form.addEventListener("submit", function(event) {
      var entry = {
        run_count: parseInt(this.run_count.value),
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        telephone: this.telephone_number.value
      };

      Runners.add(entry);
    }, true);
  },

  add: function(runner) {
    window.localStorage.setItem("Runners:" + runner.telephone, JSON.stringify(runner));
  },

  get: function(telephone) {
    return window.localStorage.getItem("Runners:" + telephone);
  },
};
Runners.init();

