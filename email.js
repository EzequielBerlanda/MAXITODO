let templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_w7gj3pr', 'template_5p18jce', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });