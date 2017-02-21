$(document).ready(function () {
  var requestForm = $("form#requestForm");
  requestForm.submit(function(event){
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "worker_api_key_request";

    requestForm.find("button#submit").text("Sending...");
    emailjs.sendForm(service_id,template_id,"requestForm")
      .then(function(){ 
        alert("Sent!");
         requestForm.find("button#submit").text("Request Key");
      }, function(err) {
         alert("Send request failed!\r\n Response:\n " + JSON.stringify(err));
         requestForm.find("button#submit").text("Request Key");
      });
    return false;
  });
});