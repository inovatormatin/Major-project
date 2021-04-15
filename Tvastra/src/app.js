const express = require('express');
const compression = require('compression');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./backend/routes/MainRoutes');
const app = express();

app.use(cors());
app.use(compression());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname+'/client'));
app.use(logger('dev'));
app.set('views',__dirname+"/client/views");
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use('/',routes);
app.set('port',process.env.PORT || 4000);
app.listen(app.get('port'),()=>{
    console.log("App started running at "+app.get('port'));
});


module.exports = app;