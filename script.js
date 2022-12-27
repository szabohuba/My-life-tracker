//script for sending contact form content



function sendMail(){
    var params={
        name_id : document.getElementById("name_id").value,
        mail_id : document.getElementById("mail_id").value,
        phone_id : document.getElementById("phone_id").value,
        subject_id : document.getElementById("subject_id").value,
        message_id : document.getElementById("message_id").value
    }

    emailjs.send("service_y9r1zlx","template_ih8zbxf",params).then(function(res){alert("Success! " + res.status);
   })

}



