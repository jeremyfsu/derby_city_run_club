var Register = {
  $form: document.getElementById("runners-form"),
  
  init: function() {
    Register.$form.reset();
    Register.$form.addEventListener("submit", function(event) {
      var runner = {
        run_count: parseInt(this.run_count.value),
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        telephone: this.telephone_number.value
      };
      
      spinner.style.visibility="visible";
      Runners.save(runner, function(){
        window.location = 'sign_in.html?telephone='+this.telephone_number.value;
      });
      event.preventDefault();
    }, false);

  },

};
Register.init();
