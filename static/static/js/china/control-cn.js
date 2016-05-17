function info_color(){
    var arpAtk=$("#arp-atk");

}

var AtkCtn={
    createNew:function(inArg){
        var ret={};
        ret.ctnJs=$(inArg['ctn']);
        //ret.addLine = function (inData) {
        //    var ctn = ret.ctnJs;
        //    var child_num = ctn.children().length;
        //    if (child_num > 13) {
        //        ctn.children().get(0).remove();
        //    }
        //    var line = $("<div></div>");
        //    line.attr("class", "atk-line ctn-text");
        //
        //    var timeJs = $("<div></div>");
        //    timeJs.attr("class", "time cell");
        //    timeJs.text(inData['time']);
        //
        //    var sensorJs=$("<div></div>");
        //    sensorJs.attr("class", "cell sensor");
        //    if(inData['sensorId'].length>80)
        //    {
        //        sensorJs.text(inData['sensorId'].substr(0, 70)+'...');
        //    }
        //    else{
        //        sensorJs.text(inData['sensorId']);
        //    }
        //    sensorJs.attr('title', inData['sensorId']);
        //
        //    var protocalAJs=$("<div></div>");
        //    protocalAJs.attr("class", "cell protocal-a");
        //    protocalAJs.text(inData['protocalA']);
        //
        //    var protocalBJs=$("<div></div>");
        //    protocalBJs.attr("class", "cell protocal-b");
        //    protocalBJs.text(inData['protocalB']);
        //
        //    var infosJs = $("<div></div>");
        //    infosJs.attr("class", "infos cell");
        //    infosJs.css("background", attackInfoA[inData.atkId].color);
        //    infosJs.css({
        //        "background": attackInfoA[inData.atkId].color,
        //        "font-weight": "bold"
        //    });
        //    //typeJs.attr("class", "type ");
        //
        //    infosJs.text(inData.infos);
        //
        //    var srcJs = $("<div></div>");
        //    srcJs.attr("class", "src cell");
        //    srcJs.text(inData['src']);
        //
        //    var dstJs = $("<div></div>");
        //    dstJs.attr("class", "dst cell");
        //    dstJs.text(inData['dst']);
        //
        //    var trailsJs = $("<div></div>");
        //    trailsJs.attr("class", "trails cell");
        //    if(inData['trails'].length>80)
        //    {
        //        trailsJs.text(inData['trails'].substr(0, 70)+'...');
        //    }
        //    else{
        //        trailsJs.text(inData['trails']);
        //    }
        //    trailsJs.attr('title', inData['trails']);
        //
        //    var refsJs = $("<div></div>");
        //    refsJs.attr("class", "references cell");
        //    if(inData['references'].length>80)
        //    {
        //        refsJs.text(inData['references'].substr(0, 70)+'...');
        //    }
        //    else{
        //        refsJs.text(inData['references']);
        //
        //    }
        //    refsJs.attr('title', inData['references']);
        //
        //
        //    line.append(timeJs);
        //    line.append(sensorJs);
        //    line.append(infosJs);
        //    line.append(srcJs);
        //    line.append(dstJs);
        //    line.append(protocalAJs);
        //    line.append(protocalBJs);
        //
        //    line.append(trailsJs);
        //    line.append(refsJs);
        //
        //
        //    ctn.append(line);
        //};
        ret.addLine = function (inData) {
            var ctn = ret.ctnJs;
            var child_num = ctn.children().length;
            if (child_num > 13) {
                ctn.children().get(0).remove();
            }
            var line = $("<div></div>");
            line.attr("class", "atk-line ctn-text");

            var timeJs = $("<div></div>");
            timeJs.attr("class", "time cell");
            //27
            //if(inData['time'].length>22){
            //    timeJs.text(inData['time'].substr(0, 19)+'...');
            //}else{
            //    timeJs.text(inData['time']);
            //}
            timeJs.text(inData['time'].substr(0, 19));

            timeJs.attr('title', inData['time']);

            var sensorJs=$("<div></div>");
            sensorJs.attr("class", "cell sensor");
            //20
            if(inData['sensorId'].length>18)
            {
                sensorJs.text(inData['sensorId'].substr(0, 15)+'...');
            }else{
                sensorJs.text(inData['sensorId']);
            }
            sensorJs.attr('title', inData['sensorId']);

            var protocalAJs=$("<div></div>");
            protocalAJs.attr("class", "cell protocal-a");
            //10
            if(inData['protocalA'].length>9){
                protocalAJs.text(inData['protocalA'].substr(0, 6)+'...');
            }
            else{
                protocalAJs.text(inData['protocalA']);
            }
            protocalAJs.attr('title', inData['protocalA']);


            //var protocalBJs=$("<div></div>");
            //protocalBJs.attr("class", "cell protocal-b");
            //if(inData['protocalB'].length>9){
            //    protocalBJs.text(inData['protocalB'].substr(0, 6)+'...');
            //}
            //else{
            //    protocalBJs.text(inData['protocalB']);
            //}
            //protocalBJs.attr('title', inData['protocalB']);

            var infosJs = $("<div></div>");
            infosJs.attr("class", "infos cell");
            infosJs.css("background", attackInfoA[inData.atkId].color);
            infosJs.css({
                "background": attackInfoA[inData.atkId].color,
                "font-weight": "bold"
            });
            //typeJs.attr("class", "type ");
            //if(inData['infos'].length>10){
            //    infosJs.text(inData['infos'].substr(0, 7)+'...');
            //}else{
            //    infosJs.text(inData['infos']);
            //}
            //infosJs.attr('title', inData.infos);
            infosJs.text(attackInfoA[inData.atkId].name);
            var srcJs = $("<div></div>");
            srcJs.attr("class", "src cell");
            if(inData['src'].length>40){
                srcJs.text(inData['src'].substr(0, 37)+'...');
            }else{
                srcJs.text(inData['src']);
            }
            srcJs.attr('title', inData['src']);

            var dstJs = $("<div></div>");
            dstJs.attr("class", "dst cell");
            if(inData['dst'].length>40){
                dstJs.text(inData['dst'].substr(0, 37)+'...');
            }else{
                dstJs.text(inData['dst']);
            }
            dstJs.attr('title', inData['dst']);

            var trailsJs = $("<div></div>");
            trailsJs.attr("class", "trails cell");
            if(inData['trails'].length>20)
            {
                trailsJs.text(inData['trails'].substr(0, 17)+'...');
            }
            else{
                trailsJs.text(inData['trails']);
            }
            trailsJs.attr('title', inData['trails']);

            var refsJs = $("<div></div>");
            refsJs.attr("class", "references cell");
            if(inData['references'].length>20)
            {
                refsJs.text(inData['references'].substr(0, 17)+'...');
            }
            else{
                refsJs.text(inData['references']);

            }
            refsJs.attr('title', inData['references']);


            line.append(timeJs);
            line.append(sensorJs);
            line.append(infosJs);
            line.append(srcJs);
            line.append(dstJs);
            line.append(protocalAJs);
            //line.append(protocalBJs);

            line.append(trailsJs);
            line.append(refsJs);


            ctn.append(line);
        };
        return ret;
    }
}


var ShowCmdP={
    createNew:function(inArg){
        var ret={};
        ret.trigJq=$(inArg['trig']);
        ret.ctnJq= $(inArg['ctn']);

        ret.width=parseInt(ret.ctnJq.width());
        ret.height=parseInt(ret.ctnJq.height());
        ret.planet=inArg['planet'];
        ret.graticule=$(inArg['graticule']);
        ret.graticule.click(function () {
            if ($(this).attr("data-trig") == "1") {
                ret.planet.hideGraticule();
                $(this).attr("data-trig", "0");
            }
            else {
                ret.planet.showGraticule();
                $(this).attr("data-trig", "1");
            }
        });

        ret.rotate=$(inArg['rotate']);
        ret.rotate.click(function () {
            if ($(this).attr("data-trig") == "1") {
                ret.planet.stopRotate();
                $(this).attr("data-trig", "0");
            }
            else {
                ret.planet.startRotate();
                $(this).attr("data-trig", "1");
            }
        });

        ret.trig=function(){
            var dataTrig=parseInt(ret.trigJq.attr("data-trig"));
            if(dataTrig==1)
            {
                ret.trigJq.attr("data-trig", 0);
                console.log("hahha");
                ret.ctnJq.animate({"left": (ret.height-ret.width)+"px"},100);
                ret.ctnJq.find("i").attr("class", "icon-double-angle-right");
            }
            else{
                ret.trigJq.attr("data-trig", 1);
                console.log("hahha");
                ret.ctnJq.animate({"left": 0+"px"},100);
                ret.ctnJq.find("i").attr("class", "icon-double-angle-left");

            }

        };

        ret.trigJq.click(function(){
            ret.trig();
        });



    }
};

var ShowInfo={
    createNew: function(inArg){
        var ret={};
        ret.type=$(inArg['type']);
        ret.ctn=$(inArg['ctn']);
        ret.trig=$(inArg['trig']);
        ret.text=$(inArg['text']);
        ret.title=$(inArg['title']);
        ret.change=$(inArg['change']);

        ret.height=parseInt(ret.ctn.height());


        ret.hide=function(){
            var curState=parseInt(ret.ctn.attr("data-trig"));
            if(true) {
                ret.ctn.animate({'top': -1 * ret.height + "px"}, 0, function(){
                    ret.ctn.attr("data-trig", "0");
                    ret.change.children().remove();

                });
                //ret.ctn.animate({'opacity': 0}, 400, function(){
                //    ret.ctn.attr('display', 'none');
                //});

            };
        };

        ret.show = function (inData) {
            var curState=parseInt(ret.ctn.attr("data-trig"));
            var curTop=parseInt(ret.ctn.css('top'));
            console.log('curTop: '+curTop);
            if(curTop>(-1*ret.height))
            {
                ret.hide();
                ret.ctn.attr("data-trig", "0");
            }

            if(inData['type']=='country')
            {
                ret.title.text(inData['data']['name']);
            }
            if(inData['type']=='attackType')
            {
                ret.title.text(attackInfoA[inData.data.atkId].name);
                var tmpText=$("<div></div>");
                tmpText.attr("class", "top-info-text");
                console.log(JSON.stringify(inData));
                tmpText.text(attackInfoA[inData.data.atkId].info);
                ret.change.append(tmpText);
            }



            ret.ctn.animate({'top': 0}, 400, function(){
                ret.ctn.attr("data-trig", "1");

            });
            //ret.ctn.animate({'opacity': 1}, 400, function(){
            //    ret.ctn.attr("display", 'block');
            //});



        };

        ret.trig.click(function(){
            var curState=parseInt(ret.ctn.attr("data-trig"));
            if(1==curState)
            {
                ret.hide();
            }
        });

        return ret;
    }
};

var AtkType={
    createNew: function(inArg){
        var ret={};
        ret.ctn=$(inArg['ctn']);
        ret.showInfo=inArg['showInfo'];
        ret.ctn.find('.box').click(function(){
            var curId=$(this).attr('id');
            var atkId=parseInt($(this).attr('data-id'));
            console.log($(this).attr('class'));
            var data={
                'type': 'attackType',
                'data':{
                    'curId': curId,
                    'text': $(this).find('.text').text(),
                    'atkId': atkId
                }

            };
            ret.showInfo.show(data);
        });

        return ret;
    }
};





var num=0;

$(document).ready(function(){



});
