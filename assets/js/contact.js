(function(a){jQuery(document).ready(function(b){b(document).on("submit","#contact_form_submit",function(c){c.preventDefault();var g=b("#name").val();var d=b("#email").val();var f=b("#message").val();if(g&&d&&f){b.ajax({type:"POST",url:"contact.php",data:{name:g,email:d,message:f,},success:function(e){b("#contact_form_submit").children(".email-success").remove();b("#contact_form_submit").prepend('<span class="mx-3 w-100 alert alert-success email-success">'+e+"</span>");b("#name").val("");b("#email").val("");b("#message").val("");b(".email-success").fadeOut(3000)},error:function(e){}})}else{b("#contact_form_submit").children(".email-success").remove();b("#contact_form_submit").prepend('<span class="mx-3 w-100 alert alert-danger email-success">All Fields are Required.</span>');b(".email-success").fadeOut(3000)}})})}(jQuery));