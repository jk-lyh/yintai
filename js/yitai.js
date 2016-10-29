$(function(){
    //头部选项卡
    function touxxk(obj1,obj2){
        obj1.onmouseover=function(){
            obj2.style.display="block";
        }
        obj1.onmouseout=function(){
            obj2.style.display="none";
        }
    }

    var wx=$("#wx");
    var wxs=$("#wxs");
    touxxk(wx,wxs);

    var shouji=$("#shouji");
    var shoujis=$("#shoujis");
    touxxk(shouji,shoujis);

    var wdyt=$("#wdyt");
    var wdyt2=$(".wdyt2")[0];
    touxxk(wdyt,wdyt2)

    //banner轮播
        var bj=$("#bj");
        var bjs=$("a",$("#bjs"));
        var lunbo=$("a",$("#lunbo"));
        var left=$("#jtleft");
        var right=$("#jtright");
        var lis=$("li",$("#lunbob"));
        var now=0;
        var next=0;
        //初始化
        lis[0].className="hot";
        lunbo[0].style.zIndex=3;
        bjs[0].style.zIndex=3;
        var t=setInterval(move,4000);
        function move(){
            next++;
            if(next==lunbo.length){
                next=0;
            }
            for(var i=0;i<lunbo.length;i++){
                if(i==now){continue;}
                lunbo[i].style.zIndex=0;
                lunbo[i].style.opacity=1;
                bjs[i].style.zIndex=0;
                bjs[i].style.opacity=1;
            }
            lunbo[now].style.zIndex=3;
            lunbo[next].style.zIndex=1;
            bjs[now].style.zIndex=3;
            bjs[next].style.zIndex=1;
            animate(lunbo[now],{opacity:0},200);
            animate(bjs[now],{opacity:0},200);
            lis[next].className="hot";
            lis[now].className="";
            now=next;
        }
        function moveL(){
            next--;
            if(next<0){
                next=lunbo.length-1;
            }
            for(var i=0;i<lunbo.length;i++){
                if(i==now){continue;}
                lunbo[i].style.zIndex=0;
                lunbo[i].style.opacity=1;
                bjs[i].style.zIndex=0;
                bjs[i].style.opacity=1;
            }
            lunbo[now].style.zIndex=3;
            lunbo[next].style.zIndex=1;
            bjs[now].style.zIndex=3;
            bjs[next].style.zIndex=1;
            animate(lunbo[now],{opacity:0},200);
            animate(bjs[now],{opacity:0},200);
            lis[next].className="hot";
            lis[now].className="";
            now=next;
        }
        //开始和停止
        bj.onmouseover=function(){
            clearInterval(t);
            left.style.display="block"
            right.style.display="block"
        }
        bj.onmouseout=function(){
            t=setInterval(move,4000);
            left.style.display="none"
            right.style.display="none"
        }
        //左右选项卡
        left.onclick=function(){
            moveL();
        }
        right.onclick=function(){
            move();
        }
        //底部选项卡
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onmouseover=function(){
                if(this.index==now){
                    return;
                }
                next=this.index;
                for(var i=0;i<lunbo.length;i++){
                    if(i==now){continue;}
                    lunbo[i].style.zIndex=0;
                    lunbo[i].style.opacity=1;
                    bjs[i].style.zIndex=0;
                    bjs[i].style.opacity=1;
                }
                lunbo[now].style.zIndex=3;
                lunbo[next].style.zIndex=1;
                bjs[now].style.zIndex=3;
                bjs[next].style.zIndex=1;
                animate(lunbo[now],{opacity:0},200);
                animate(bjs[now],{opacity:0},200);
                lis[next].className="hot";
                lis[now].className="";
                now=next;
            }
        }


    //banner选项卡
    var bjLs=$(".bjLs");
    var xiangxi=$(".xiangxi");
    for(var i=0;i<bjLs.length;i++){
        bjLs[i].index=i;
       bjLs[i].onmouseover=function(){
            xiangxi[this.index].style.display="block";
        }
        bjLs[i].onmouseout=function(){
            xiangxi[this.index].style.display="none";
        }
    }

    //bjR
    var bjR=$("#bjR");
    hover(bjR,function(){
        animate(this,{right:89});
    },function(){
        animate(this,{right:79})
    })
    //特卖
    var tmz=$(".tmz");
    var tmzs=$(".tmzs");
    tmzs[0].style.display="block";
    tmz[0].style.backgroundImage="url(./img/tmbj2.png)";
    for(var i=0;i<tmz.length;i++){
        tmz[i].index=i;
        tmz[i].onmouseover=function(){
            for(var j=0;j<tmz.length;j++){
                tmzs[j].style.display="none";
                tmz[j].style.backgroundImage="url(./img/tmbj1.png)";
            }
            tmzs[this.index].style.display="block";
            tmz[this.index].style.backgroundImage="url(./img/tmbj2.png)";
        }
    }

//特卖边框


    var tmzsa=$(".tmzsa");
    var tmR=$(".tmR");
    var tmL=$(".tmL");
    var tmT=$(".tmT");
    var tmB=$(".tmB");
    var tmw=parseInt(getStyle(tmzsa[0],"width"));
    var tmh=parseInt(getStyle(tmzsa[0],"height"));
    for(var i=0;i<tmzsa.length;i++){
        tmzsa[i].index=i;
        tmzsa[i].onmouseover=function(){
            animate(tmL[this.index],{height:tmh+2});
            animate(tmR[this.index],{height:tmh+2});
            animate(tmT[this.index],{width:tmw+2});
            animate(tmB[this.index],{width:tmw+2});
        }
        tmzsa[i].onmouseout=function(){
            animate(tmL[this.index],{height:0});
            animate(tmR[this.index],{height:0});
            animate(tmT[this.index],{width:0});
            animate(tmB[this.index],{width:0});
        }
    }



    var rmpp=$(".rmpp");
    var rmpps=$(".rmpps");
    rmpps[0].style.display="block";
    rmpp[0].style.backgroundImage="url(./img/tmbj2.png)";
    for(var i=0;i<rmpp.length;i++){
        rmpp[i].index=i;
        rmpp[i].onmouseover=function(){
            for(var j=0;j<rmpp.length;j++){
                rmpps[j].style.display="none";
                rmpp[j].style.backgroundImage="url(./img/tmbj1.png)";
            }
            rmpps[this.index].style.display="block";
            rmpp[this.index].style.backgroundImage="url(./img/tmbj2.png)";
        }
    }



    function lunbob(obj1,obj2,left,right,middle){
        // 页面状态初始化
        // obj1[0].style.zIndex=10;
        for( var i=0;i<obj1.length;i++){
            if(i==0){
                continue;
            }
            obj1[i].style.opacity=0;
        }
        obj2[0].style.background="red";


        var now=0;
        var t=setInterval(move,2000);
        // 鼠标移入不动
        middle.onmouseover=function(){
            clearInterval(t);
        }
        middle.onmouseout=function(){
            t=setInterval(move,2000);
        }
        // 小圆点
        for(var i=0;i<obj2.length;i++){
            obj2[i].lunbo=i;
            obj2[i].onclick=function(){
                for(var i=0;i<obj1.length;i++){
                    // obj1[i].style.zIndex=5;
                    obj1[i].style.opacity=0;
                    // animate(obj1[i],{opacity:0})
                    obj2[i].style.background="#666";
                }
                obj2[this.lunbo].style.background="red";
                // obj1[this.lunbo].style.zIndex=10;
                obj1[this.lunbo].style.opacity=1;
                // animate(obj1[this.lunbo],{opacity:1})
                now=this.lunbo;
            }
        }
        // 左右箭头
        left.onclick=function(){
            movel()
        }
        right.onclick=function(){
            move()
        }

        function move(){
            now++;
            if(now==obj1.length){
                now=0;}
            for (var i=0; i<obj1.length; i++) {
                // obj1[i].style.zIndex=5;
                obj1[i].style.opacity=0;
                // animate(obj1[i],{opacity:0})
                obj2[i].style.background="#666";
            }
            obj2[now].style.background="red";
            // obj1[now].style.zIndex=10;
            obj1[now].style.opacity=1;
            // animate(obj1[now],{opacity:1})

        }
        function movel(){
            now--;
            if(now<0){
                now=obj1.length-1;}
            for (var i=0; i<obj1.length; i++) {
                // obj1[i].style.zIndex=5;
                obj1[i].style.opacity=0;
                // animate(obj1[i],{opacity:0})
                obj2[i].style.background="#666";
            }
            // obj2[now].style.background="red";
            // obj1[now].style.zIndex=10;
            obj1[now].style.opacity=1;
            // animate(obj1[now],{opacity:1})

        }
    }

    var dcrightl=$(".dcrightl")
    for(var i=0;i<dcrightl.length;i++){
        var dcrightk=$(".dcrightl")[i];
        var dcrights=$("a",$(".dcrights")[i]);
        var dcs=$("li",$(".dcs")[i]);
        var dcsleft=$(".dcsleft")[i];
        var dcsright=$(".dcsright")[i];
        lunbob(dcrights,dcs,dcsleft,dcsright,dcrightk)
    }

    //本周特卖边框
    var bztj=$(".bztj");
    var bztjR=$(".bztjR");
    var bztjL=$(".bztjL");
    var bztjT=$(".bztjT");
    var bztjB=$(".bztjB");
    var bztjw=parseInt(getStyle(bztj[0],"width"));
    var bztjh=parseInt(getStyle(bztj[0],"height"));
    for(var i=0;i<bztj.length;i++){
        bztj[i].index=i;
        bztj[i].onmouseover=function(){
            animate(bztjL[this.index],{height:bztjh+2});
            animate(bztjR[this.index],{height:bztjh+2});
            animate(bztjT[this.index],{width:bztjw+2});
            animate(bztjB[this.index],{width:bztjw+2});
        }
        bztj[i].onmouseout=function(){
            animate(bztjL[this.index],{height:0});
            animate(bztjR[this.index],{height:0});
            animate(bztjT[this.index],{width:0});
            animate(bztjB[this.index],{width:0});
        }
    }


    //每一楼边框
    var dcright2=$(".dcright2");
    var dcrightR=$(".dcrightR");
    var dcrightL=$(".dcrightL");
    var dcrightT=$(".dcrightT");
    var dcrightB=$(".dcrightB");
    var dcrightw=parseInt(getStyle(dcright2[0],"width"));
    var dcrighth=parseInt(getStyle(dcright2[0],"height"));
    for(var i=0;i<dcright2.length;i++){
        dcright2[i].index=i;
        dcright2[i].onmouseover=function(){
            animate(dcrightL[this.index],{height:dcrighth+2});
            animate(dcrightR[this.index],{height:dcrighth+2});
            animate(dcrightT[this.index],{width:dcrightw+2});
            animate(dcrightB[this.index],{width:dcrightw+2});
        }
        dcright2[i].onmouseout=function(){
            animate(dcrightL[this.index],{height:0});
            animate(dcrightR[this.index],{height:0});
            animate(dcrightT[this.index],{width:0});
            animate(dcrightB[this.index],{width:0});
        }
    }


    //楼层选项卡
    function louxxk(obj){
        var imgs=$(".dcbottom1",obj);
        var left=$(".dcbottomleft",obj)[0];
        var right=$(".dcbottomright",obj)[0];
        var now=0;
        var next=0;
        var flag=true;
        //初始化
        var dcbottomwm=parseInt(getStyle(imgs[0],"width"));
        for(var i=0;i<imgs.length;i++){
            if(i==0){
                continue;
            }
            imgs[i].style.left=dcbottomwm+"px";
        }
        left.onclick=function(){
            if(flag){
                next=now-1;
                flag=false;
                if(next<0){
                    next=imgs.length-1;
                }
                for(var i=0;i<imgs.length;i++){
                    if(i==now){
                        continue;
                    }
                    imgs[i].style.left=-dcbottomwm+"px";
                }
                animate(imgs[next],{left:17});
                animate(imgs[now],{left:dcbottomwm},function(){
                    flag=true;
                });
                now=next;
            }
        }
        right.onclick=function(){
            if(flag){
                next=now+1;
                flag=false;
                if(next==imgs.length){
                    next=0;
                }
                for(var i=0;i<imgs.length;i++){
                    if(i==now){
                        continue;
                    }
                    imgs[i].style.left=dcbottomwm+"px";
                }
                animate(imgs[next],{left:17});
                animate(imgs[now],{left:-dcbottomwm},function(){
                    flag=true;
                });
                now=next;
            }
        }
    }

    var dcbottom=$(".dcbottom");
    for(var j=0;j<dcbottom.length;j++){
        louxxk(dcbottom[j])
    }



    var dc=$(".dc");
    var floor_nav=$("#floor_nav");
    var nne;
    var nHeight=floor_nav.offsetHeight;
    var floor_lis=$(".floor_lis");
    var cHeight=document.documentElement.clientHeight;
    var h=dc[0].offsetTop;
    console.log(h)
    var floor_z=$(".floor_z");
    var floor_t=$(".floor_t");
    var flag=true;
    var flag2=true;
    floor_nav.style.display="none"
    window.onscroll=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;

        if(obj.scrollTop>h-300){
            floor_nav.style.display="block";
            floor_nav.style.top=(cHeight-nHeight)/2+"px"
        }
        else{
            floor_nav.style.display="none";
        }

        for(i=0;i<dc.length;i++){
            if(obj.scrollTop>dc[i].offsetTop-300){
                for(j=0;j<dc.length;j++){
                    floor_z[j].style.display="none"
                    floor_t[j].style.display="block"
                }
                floor_z[i].style.display="block";
                floor_t[i].style.display="none";
                nne=i;
            }
        }

    }

    for(i=0;i<dc.length;i++){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        floor_lis[i].index=i;
        floor_lis[i].onclick=function(){
            animate(obj,{scrollTop:dc[this.index].offsetTop},400);
        }
        floor_lis[i].onmouseover=function(){
            floor_z[this.index].style.display="block"
            floor_t[this.index].style.display="none"
        }
        floor_lis[i].onmouseout=function(){
            if(this.index==nne){
                return;
            }
            floor_z[this.index].style.display="none"
            floor_t[this.index].style.display="block"
        }
    }


    var fhdb=$("#fhdb");
    var fhdb_z=$("#fhdb_z");
    var fhdb_t=$("#fhdb_t");
    var head=$("#head");
    fhdb.onmousemove=function(){
        fhdb_z.style.display="block"
        fhdb_t.style.display="none"
    }
    fhdb.onmouseout=function(){
        fhdb_z.style.display="none"
        fhdb_t.style.display="block"
    }
    fhdb.onclick=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:head.offsetTop},400)
    }


})