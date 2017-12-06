const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'client/build')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY;

app.post('/contact', function (req, res) {
  const body = req.body;
  const mandrill = require('mandrill-api/mandrill');
  const mandrill_client = new mandrill.Mandrill(MANDRILL_API_KEY);
  var message = {
    "text": body.body,
    "subject": "Wise Marketing Contact Form",
    "from_email": "noreply@wiseapp.com",
    "from_name": body.name,
    "to": [{
            "email": "hello@wiseapp.com",
            "name": "Wise",
            "type": "to"
        }],
    "headers": {
        "Reply-To": body.email
    }
  };
  mandrill_client.messages.send({"message": message, "async": false, "ip_pool": "Main Pool"}, function(result) {
      res.json({ "ok": true });
  }, function(e) {
      res.json({ "ok": false, "error": e.name + ' - ' + e.message });
  });
});

module.exports = app;
