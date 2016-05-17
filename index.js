var http=require('http');
var io=require('socket.io');
var koa=require('koa');
var app=koa();

var path=require('path');
var serve=require('koa-static');
var mount=require('koa-mount');
var render=require('koa-ejs');
var bodyParser=require('koa-bodyparser');
var router=require('koa-router');
var indexRouter=new router();

app.use(function*(next){
  console.log(this.request.host+this.request.url);
  yield next;
});


app.use(serve(path.join(__dirname, 'static')));
app.use(bodyParser());
render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'ejs',
  layout: '',
  cache: false,
  debug: true
});

indexRouter.get('/china', function*(){
  yield this.render('china');
});
indexRouter.get('/world-3d', function*(){
  yield this.render('world-3d');
});

app.use(mount('/', indexRouter.routes()));

var server=http.Server(app.callback());
var ws=io(server);

var myUtil={
  createUdpOrTcp: function(){
    if(Math.random()>0.5){
      return 'UDP';
    }else{
      return 'TCP';
    }
  },
  createLng: function(){
    return Math.random()*360-180;
  },
  createLat: function(){
    return Math.random()*180-90;
  },
  create255: function(){
    return parseInt(Math.random()*255);
  },
  createIp: function(){
    return this.create255()+'.'+this.create255()+'.'+this.create255()+'.'+this.create255(); 
  },
  createPort: function(){
    return parseInt(Math.random()*65536);
  },
  createSensor: function(){
    return 'sensor'+parseInt(Math.random()*10+1);
  },
  createAtkId: function(){
    var tmp=Math.random();
    var ret=0;
    if(tmp<0.3){
      ret=0; 
    }else if(tmp<0.4){
      ret=1;
    }else if(tmp<0.5){
      ret=2;
    }else if(tmp<0.6){
      ret=3;
    }else if(tmp<0.7){
      ret=4;
    }else if(tmp<0.8){
      ret=5;
    }else if(tmp<0.9){
      ret=6;
    }else{
      ret=0;
    }

    return ret;
  }

};

ws.on('connection', function(socket){
  //console.log(socket);
  setInterval(function(){
    var sendData=[];
    var tmpData={};
    tmpData.attackId=myUtil.createAtkId();
    var nowDate=new Date();
    tmpData.time=nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate()+' '+nowDate.getHours()+':'+nowDate.getMinutes()+':'+nowDate.getSeconds();
    tmpData.sensorId=myUtil.createSensor();
    tmpData.src={};
    tmpData.src.ip=myUtil.createIp();
    tmpData.src.port=myUtil.createPort();
    tmpData.src.lng=myUtil.createLng();
    tmpData.src.lat=myUtil.createLat();
    tmpData.src.name='src.name';
    tmpData.dst={};
    tmpData.dst.ip=myUtil.createIp();
    tmpData.dst.port=myUtil.createPort();
    tmpData.dst.lng=myUtil.createLng();
    tmpData.dst.lat=myUtil.createLat();
    tmpData.dst.name='dst.name';
    tmpData.protocalA=myUtil.createUdpOrTcp();
    tmpData.trails='trails';
    tmpData.references='references';
    tmpData.infos='infos'; 
    sendData.push(tmpData);
    socket.emit('attack array', sendData);
  }, 400);
});

server.listen(3000);
