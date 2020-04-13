var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var wkhtmltopdf = require('wkhtmltopdf')
var url = "mongodb://localhost:27017/";
var transporter = nodemailer.createTransport({
  service: '127.0.0.1',
  auth: {
    user: 'eliwang1@juno.com',
    pass: 'e2986503'
  }
});

var mailOptions = {
  from: 'eliwang1@juno.com',
  to: 'eliwang1@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
     });
    // res.end('Hello World!');
    var str = req.url;
    res.end(str.split("?")[1]);
    console.log(str.split("?")[0].split("/")[1]);
    switch (str.split("?")[0].split("/")[1]) {
        case "Print":
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("-deployd");
                var query = { name: str.split("?")[1] };
                dbo.collection("orders").find(query).toArray(function (err, result) {
                    if (err) throw err;
                    // console.log(result[0]);
                    wkhtmltopdf('<html><head></head><body >'+result[0].address +'</body></html>', { output: result[0]._id + '.pdf' });
                    db.close();
                });
            });
            break;
        case "Sendmail":
//            transporter.sendMail(mailOptions, function (error, info) {
            transporter.sendMail(mailOptions);
// {
  //              if (error) {
    //                console.log(error);
      //          } else {
        //            console.log('Email sent: ' + info.response);
//                    console.log('Email sent: ' + info.response);
          //      }
 //           });
            break;
    }
}).listen(3333);
