$(document).ready(function(){



    function manageAttackTypeShow(){
        var atkTypeCtn=$("#attack-type-ctn");
        var i=0;
        for(i=0; i<attackInfoA.length; ++i){
            var tmpData=attackInfoA[i];
            var tmpStr='' +
                '<div class="box" data-id="'+i+'">' +
                    '<img src="'+tmpData.png+'" class="color">' +
                    '<div class="clr-show" style="background:'+tmpData.color+';"></div>'+
                    '<div class="text">' +
                        tmpData.name +
                    '</div>' +
                '</div>';

            var tmpBox=$(tmpStr);
            atkTypeCtn.append(tmpBox);

        }
    }
    manageAttackTypeShow();


    function getCurStrTime() {
        var now = new Date();

        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日

        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();            //秒

        var clock = year + "-";

        if (month < 10) clock += "0";
        clock += month + "-";

        if (day < 10) clock += "0";
        clock += day + " ";

        if (hh < 10) clock += "0";
        clock += hh + ":";

        if (mm < 10) clock += '0';
        clock += mm + ":";

        if (ss < 10) clock += '0';
        clock += ss;

        return (clock);
    }







    var showInfo=ShowInfo.createNew({
        'type': 'country',
        'ctn': '#top-info-ctn',
        'trig': '#top-info-min',
        'change': '#top-info-change',
        'title': "#top-info-title",

    });


    var myPlanet=initPlanet({
        'showInfo': showInfo
    });


    d3.select("#stopRotate").on("click", function(){
        myPlanet.stopRotate();
    });
    d3.select("#startRotate").on("click", function(){
        myPlanet.startRotate();
    });


    d3.select("#submitInfo").on("click", function(){
        var srcLat=parseInt($("#srcLat").val());
        var srcLng=parseInt($("#srcLng").val());
        var dstLat=parseInt($("#dstLat").val());
        var dstLng=parseInt($("#dstLng").val());
        var durTime=1900;
        /*
         * inObj{
         *   srcP: {lat, lng},
         *   dstP; {lat, lng},
         *   color,
         *   ttl: {circle, line}
         *   type,
         *   angle,
         * }
         * */
        myPlanet.attack({
            src:{
                lat: srcLat,
                lng: srcLng
            },
            dst:{
                lat: dstLat,
                lng: dstLng
            },
            color: "#ff1133",
            circle:{
                ttl: 800,
                lineWidth: 2
            },
            line:{
                ttl: 1600,
                lineWidth: 2
            }

        });
    });
    d3.select("#fixLine").on("click", function(){
        var srcLat=parseInt($("#srcLat").val());
        var srcLng=parseInt($("#srcLng").val());
        var dstLat=parseInt($("#dstLat").val());
        var dstLng=parseInt($("#dstLng").val());

        myPlanet.fixLine({
            // Here we use the `angles` and `colors` scales we built earlier
            // to convert magnitudes to appropriate angles and colors.
            color: "red",
            ttl:  10000,
            lat0: srcLat,
            lng0: srcLng,
            lat1: dstLat,
            lng1: dstLng
        });


    });
    d3.select("#graticuleTrigger").on("click", function(){
        if(d3.select(this).attr("data-need")=="1") {
            myPlanet.hideGraticule();
            d3.select(this).attr("data-need", "0");
        }
        else{
            myPlanet.showGraticule();
            d3.select(this).attr("data-need", "1");
        }
    });


    d3.select("#addDot").on("click", function(){

        myPlanet.addDot({
            // Here we use the `angles` and `colors` scales we built earlier
            // to convert magnitudes to appropriate angles and colors.
            color: "red",
            alpha: 1,
            angle: 1.4,
            ttl:   myPlanet.ttls(100),
            lat: 40,
            lng: 116,
        });
    });

    controlsFunc();



    for( var key in stationInfo){
        myPlanet.addDot(stationInfo[key]);
    }




    //simulationAttack(myPlanet);


//----------------------------------------------


    var atkCtn = AtkCtn.createNew({
        ctn: "#atk-ctn"
    });

    var deal_ws=DealWS.createNew({
        planet: myPlanet,
        host: wsCfg.host,
        port: wsCfg.port,
        'atkCtn': atkCtn
    });

    $("#addDot").click(function(){
        console.log("add dot");
        atkCtn.addLine({
            time: "2011-2-21 asdfasfasfasfasdfasdfasfdasfsadfs10:10:10",
            type: "ARP attack" + num,
            src: "222.222.222.222:65536 shijiazhuang",
            dst: "222.222.222.222:65536 shijiazhuang",
            atkId: num
        });
        num += 1;
    });

    var showCmdP=ShowCmdP.createNew({
        'ctn': '#left-cmd-panel',
        'trig': '#left-cmd-trig',
        'graticule': '#trig-graticule',
        'rotate': '#trig-rotate',
        'planet': myPlanet,
    });

    $('#trig-graticule').trigger('click');


    var atkType=AtkType.createNew({
        'ctn': '#attack-type-ctn',
        'showInfo': showInfo
    });

//======================================tmp=====================================
    function attackFunc(data) {
        //var data = [
        //    {
        //        "time": "2016-03-01 12:11:30",
        //        "src": {"lat": 40, "lng": 116, "name": "Beijing", "ip": "192.168.1.1", "port": "123"},
        //        "dst": {"lat": 38, "lng": -77, "name": "Wangshinton", "ip": "192.162.231.1", "port": "234"},
        //        "color": "red",
        //        "attackId": 1
        //    },
        //    {
        //        "time": "2016-03-01 12:11:30",
        //        "src": {"lat": 40, "lng": 116, "name": "Beijing", "ip": "192.168.1.1", "port": "13"},
        //        "dst": {"lat": 30, "lng": 40, "name": "London", "ip": "192.168.1.1", "port": "3"},
        //        "color": "blue",
        //        "attackId": 2
        //    },
        //    {
        //        "time": "2016-03-01 12:11:30",
        //        "dst": {"lat": 32, "lng": 106, "name": "Paris", "ip": "192.168.1.1", "port": "12322"},
        //        "src": {"lat": 33, "lng": -102, "name": "Shanghai", "ip": "192.168.1.1", "port": "12003"},
        //        "color": "yellow",
        //        "attackId": 3
        //    },
        //    {
        //        "time": "2016-03-01 12:11:30",
        //        "dst": {"lat": 43, "lng": 112, "name": "Hongkong", "ip": "192.168.1.1", "port": "1222"},
        //        "src": {"lat": 32, "lng": 38, "name": "Mossic", "ip": "192.168.1.1", "port": "13234"},
        //        "color": "white",
        //        "attackId": 2
        //    },
        //    {
        //        "time": "2016-03-01 12:11:30",
        //        "dst": {"lat": 42, "lng": 2, "name": "Guangzhou", "ip": "192.168.1.1", "port": "1234344"},
        //        "src": {"lat": 32, "lng": 38, "name": "Dris", "ip": "192.168.1.1", "port": "133"},
        //        "color": "white",
        //        "attackId": 0
        //    }
        //];

        for (var i = 0; i < data.length; ++i) {
            var tmpData=data[i];

            //console.log("num:" + num);


            setTimeout(function () {

                atkCtn.addLine({
                    time: tmpData.time,
                    infos: tmpData.infos,
                    //src: tmpData.src.name + "(" + tmpData.src.lng + "," + tmpData.src.lat + ") " + tmpData.src.ip + ":" + tmpData.src.port + " ",
                    src: tmpData.src.ip + ":" + tmpData.src.port + " ",
                    //dst: tmpData.dst.name + "(" + tmpData.dst.lng + "," + tmpData.dst.lat + ") " + tmpData.dst.ip + ":" + tmpData.dst.port + " ",
                    dst: tmpData.dst.ip + ":" + tmpData.dst.port + " ",
                    atkId: tmpData.attackId,
                    sensorId: tmpData.sensorId,
                    protocalA: tmpData.protocalA,
                    protocalB: tmpData.protocalB,
                    trails: tmpData.trails,
                    references: tmpData.references

                });

                myPlanet.attack({
                    dotLine: 1,
                    src: {
                        lat: parseFloat(tmpData.src.lat),
                        lng: parseFloat(tmpData.src.lng)
                    },
                    dst: {
                        lat: parseFloat(tmpData.dst.lat),
                        lng: parseFloat(tmpData.dst.lng)
                    },
                    color: attackInfoA[tmpData.attackId].color,
                    circle: {
                        ttl: 800,
                        lineWidth: 3
                    },
                    line: {
                        ttl: 1600,
                        lineWidth: 2
                    }

                });
            }, parseInt(Math.random()*2000));


            //
            //if (1== 1) {
            //    myPlanet.fixLine({
            //        // Here we use the `angles` and `colors` scales we built earlier
            //        // to convert magnitudes to appropriate angles and colors.
            //        color: "red",
            //        ttl: 1000,
            //        lat0: parseFloat(tmpData.src.lat),
            //        lng0: parseFloat(tmpData.src.lng),
            //        lat1: parseFloat(tmpData.dst.lat),
            //        lng1: parseFloat(tmpData.dst.lng)
            //    });
            //}

            //sleep(100);
        }

    };

    deal_ws.localws.add({
        'evt': 'attack array',
        'hdler': function(data){
            attackFunc(data);
        }
    });

    //
    //atkCtn.addLine({
    //    time:  '123456789a123456789a123456789a123456789a',
    //    infos: '123456789a123456789a123456789a123456789a',
    //    src: '123456789a123456789a123456789a123456789a123456789a123456789a',
    //    dst: '123456789a123456789a123456789a123456789a123456789a123456789a',
    //    atkId: 1,
    //    sensorId: '123456789a123456789a123456789a123456789a',
    //    protocalA: '123456789a123456789a123456789a123456789a',
    //    protocalB: '123456789a123456789a123456789a123456789a',
    //    trails: '123456789a123456789a123456789a123456789a',
    //    references: '123456789a123456789a123456789a123456789a'
    //
    //});



});
