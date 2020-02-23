router.post('/sendwhatsapptoall', (req, res) => {
    const link= req.body.link;
    const message = req.body.message;
    var arr = req.body.contactnos.split(',');
    console.log(arr);
    arr.forEach((nos)=>{
        client.messages.create({
            to: "whatsapp:"+nos+"",
            from: "whatsapp:"+ useYourWhatsappNoProvidedByTwilio,
            body: message,
            mediaUrl: link
        }).then(message => {
            console.log(message.sid);
        }).catch(err => console.log(err));
    })
    // after message sent render to another page...
    res.render('effect.ejs',{contactnos:arr});
});
