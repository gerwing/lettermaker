//Newsletter Routes

module.exports = function(app,nodemailer) {
    app.post('/newsletter', function(req,res) {
        var letter = req.body;

        //Generate HTML
        var html = "";
        //Add Articles
        var articles = letter.articles;
        html += "<h2>Articles</h2><div>";
        for(var i=0;i<articles.length;i++) {
            html += "<h3>"+articles[i].header+"</h3>";
            html += "<p>"+articles[i].text+"</p>";
        }
        html +="</div>";
        html +="<hr>";
        //Add events
        var events = letter.events;
        html += "<h2>Events</h2>";
        for(var i=0;i<events.length;i++) {
            html += "<h3>"+events[i].date + "-" + events[i].header+"</h3>";
            html += "<p>"+events[i].text+"</p>";
        }
        html +="</div>";

        //Send test email
        //SETUP SMTP GMAIL
        var smtp = nodemailer.createTransport("SMTP",{
            service: "Gmail",
            auth: {
                user: letter.fromEmail,
                pass: letter.fromPassword
            }
        });

        //SETUP EMAIL OPTIONS
        var mailOptions = {
            from: letter.fromEmail, // sender address
            to: letter.toEmail, // list of receivers
            subject: "New Newsletter", // Subject line
            text: "Hello world", // plaintext body
            html: html // html body
        }

        //SEND NEWSLETTER
        smtp.sendMail(mailOptions, function(error, response){
            if(error){
                res.send({message:error});
            }else{
                res.send({message:"Message sent: " + response.message},200);
            }
        });
    });
};