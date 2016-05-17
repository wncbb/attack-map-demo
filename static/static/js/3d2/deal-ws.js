

var DealWS={
    createNew: function(inArg){
        var ret={};
        ret.atkCtn=inArg['atkCtn'];
        function deal_msg(inData){
            var atk_type=inData['type'];
            var atk_infoAry=inData['data'];
            var atk_num=atk_infoAry.length;




            for(var i=0; i<inData['data'].length; ++i) {

                //console.log('srcStr ' + JSON.stringify(inData));


                var srcStr = inData['data'][i]['src'][0] + " " + inData['data'][i]['src'][1];
                var dstStr = inData['data'][i]['dst'][0] + " " + inData['data'][i]['dst'][1];

                ret.atkCtn.addLine({
                    'time': '2015-01-01 21:21:21',
                    'type': 'type1',
                    'atkId':  parseInt(Math.random())*10%3,
                    'src': srcStr,
                    'dst': dstStr
                });
            }


            switch(atk_type)
            {
                case 'type1':
                    console.log("attack info"+JSON.stringify(inData));
                    for(var i=0; i<atk_num; ++i)
                    {
                        var tmp_info=atk_infoAry[i];
                        ret.planet.attack({
                            src:{
                                lat: tmp_info.src[0],
                                lng: tmp_info.src[1]
                            },
                            dst:{
                                lat: tmp_info.dst[0],
                                lng: tmp_info.dst[1]
                            },
                            color: "#ff1133",
                            circle:{
                                ttl: 800,
                                lineWidth: 2
                            },
                            line:{
                                ttl: 1600+i*100,
                                lineWidth: 2
                            }
                        });

                    }

                    break;
                case 'type2':

                    break;
                default:

            }
        };

        ret.planet=inArg.planet;
        ret.localws=AttackWS.createNew({
            //host: '192.168.0.85',
            host: inArg['host'],
            port: inArg['port']
        });


        ret.localws.add({
            evt: 'attack info',
            hdler: function(data){
                //deal_msg(data);
            }
        });


        ret.localws.run();
        return ret;
    }
};











