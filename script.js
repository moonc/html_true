var x=100;
var MR=0;
var keyArray=[];
//var MU=0;
var upkeynum=0;
function moveCharacter(){
    document.onkeydown=function(event){
      switch (event.keyCode) {
        case 37:
        //alert('left');
        keyArray.push("left");


        break;
        case 38:
        //  alert('up');
        keyArray.push("up");
        upkeynum++;
        break;
        case 39:
        keyArray.push("right");
        break;




    }}
    document.onkeyup=function(event){
      var leftPos=keyArray.indexOf('left');
      var rightPos=keyArray.indexOf('right');
      var upPos=keyArray.indexOf('up');
      switch(event.keyCode){
        case 37:
        while(keyArray.indexOf('left') >= 0){
          keyArray.splice(leftPos, 1);}
          break;
          case 38:
          while(keyArray.indexOf('up') >= 0){
            keyArray.splice(upPos, 1);}
            break;
            case 39:
            while(keyArray.indexOf('right') >= 0){
              keyArray.splice(keyArray.indexOf('right'), 1);}
              break;
            }

          }

        }
        function leftDown(){
          var element = document.getElementById("char");
          var xL=parseInt(element.style.left);
          var yU=parseInt(element.style.bottom);
          if (xL>=0) {
            element.style.left = parseInt(element.style.left) - 5 + 'px'
            element.setAttribute("src","charL.jpg");
            console.log(element.getAttribute("src"));
          }


        }
        function rightDown(){
          var element = document.getElementById("char");
          var xR=parseInt(element.style.left);
          var yD=parseInt(element.style.bottom);
          if(xR<1201){
            if(yD!=181&&yD!=505){

              //console.log("xR: "+xR);
              element.style.left = parseInt(element.style.left) + 5 + 'px';
              element.setAttribute("src","char.jpg");
              console.log(element.getAttribute("src"));}

            }
            ///console.log("yD: "+yD);
            if(yD==505&&xR<1848){
              element.style.left = parseInt(element.style.left) + 5 + 'px';
              element.setAttribute("src","char.jpg");
              console.log(element.getAttribute("src"));
              if(xR>1800){
                alert("you win");
              }
            }

          }
          function upDown(){
            var x=0;
            var y=0;
            var element = document.getElementById("char");
            var yD=parseInt(element.style.bottom);
            var xR=parseInt(element.style.left);
            var SECOND_JUMP_COMPLETE = false;
            if(yD<200){
              if((xR<640||xR>1200)&&xR>240){
                element.style.bottom = parseInt(element.style.bottom) +  215 + 'px';
                if((xR<640||xR>1200)){
                  setTimeout(callDrop,1);
                }
              }
              else if(yD!=288){
                element.style.bottom = parseInt(element.style.bottom) +  5 + 'px';
                setTimeout(firstblockHIT,50);
              }

            }

            if((yD==295)&&(xR>740&xR<824)&&upkeynum==1){
              element.style.bottom = parseInt(element.style.bottom) +  210 + 'px';
              console.log("keynum is: "+upkeynum);
              var SECOND_JUMP_COMPLETE=true;
            }
            else if(xR>824){
              element.style.bottom = parseInt(element.style.bottom) +  5 + 'px';
              setTimeout(firstblockHIT,50); //edit this later to accunt forf height difference int he two different layers

            }
            console.log("AFTER SECOND JUMP keynum is: "+upkeynum);
            console.log("THE SECOND JUMP IS COMPLETE:"+SECOND_JUMP_COMPLETE);
            if((yD==505)&&(SECOND_JUMP_COMPLETE==true)){
              element.style.bottom = parseInt(element.style.bottom) +  210 + 'px';
            }
          /*  if((yD==505)){
              element.style.bottom = parseInt(element.style.bottom) +  210 + 'px';
              console.log("THIRD JUMP keynum is: "+upkeynum);
            }*/




            /*else{
              if((xR>700||xR<1200)){SecondLevelJump();}
            }*/

          console.log(yD);
          }
          function callDrop(){
            var element = document.getElementById("char");
            var xR=parseInt(element.style.left);
            //if((xR<640||xR>1200)){downDown();}
            downDown();
          }
          function downDown(){
            var element = document.getElementById("char");
            var yD=parseInt(element.style.bottom);
            //alert(yD);
            /* if(yD>84){
            element.style.bottom = parseInt(element.style.bottom) - 215 + 'px';
          }*/

        }
        function bottomHit(){
          var element = document.getElementById("char");
          var yD=parseInt(element.style.bottom);
          if(yD>79){
            element.style.bottom = parseInt(element.style.bottom) - 15 + 'px';
          }
        }
      /*  function SecondLevelJump(){
          var element = document.getElementById("char");
          var xR=parseInt(element.style.left);
          var yD=parseInt(element.style.bottom);
          if((xR>640||xR<1200)){

            if(yD==295){
              Lvl2J();
            }
          }
        }
        function Lvl2J(){
          var element = document.getElementById("char");
          element.style.bottom = parseInt(element.style.bottom) +  215 + 'px';
        }*/
        /*function Gravity(){
        var element = document.getElementById("char");
        var yU=parseInt(element.style.bottom);
        var xR=parseInt(element.style.left);
        if((xR<640||xR>1200)){
        if((yU==396)){
        element.style.bottom = parseInt(element.style.bottom) - 215 + 'px';}
      }
    }*/
    function gameLoop()
    {
      var element = document.getElementById("char");
      var xL=parseInt(element.style.left);
      var yU=parseInt(element.style.bottom);
      if(keyArray.indexOf('left')>=0){
        leftDown();


        if(yU==295){if(xL<640||(xL>500&&xL<600)){element.style.bottom = parseInt(element.style.bottom) - 215 + 'px';}}
        if(yU==505){if(xL<740||(xL>500&&xL<600)){element.style.bottom = parseInt(element.style.bottom) - 210 + 'px';}}
        upkeynum=upkeynum-upkeynum;

      }
      if(keyArray.indexOf('right')>=0){

        rightDown();

        if(yU==295){if(xL>1200||(xL>500&&xL<600)){element.style.bottom = parseInt(element.style.bottom) - 215 + 'px';}}
        if(yU==505){if((xL>500&&xL<600)){element.style.bottom = parseInt(element.style.bottom) - 210 + 'px';}}
        upkeynum=upkeynum-upkeynum;

      }
      if(keyArray.indexOf('up')==0){

        if(yU<300){
          if(xL>=340&&xL<=500){
            element.style.bottom = parseInt(element.style.bottom) +  5 + 'px';
            setTimeout(firstblockHIT,50);
            //alert("hitting first block");
          }
          else{
            upDown();

          }
        }
      }


      // change position based on speed
      moveCharacter();
      setTimeout("gameLoop()",10);
    }

    function firstblockHIT(){
      var element = document.getElementById("char");
      var yD=parseInt(element.style.bottom);

      if(yD>79){
        element.style.bottom = parseInt(element.style.bottom) - 5 + 'px';
      }

    }

    var sideswitch= false;
  function EnemyLoop(){
    var test=0;
    console.log("ENEMYLOOP");
    var element = document.getElementById("em");
    var xL=parseInt(element.style.left);
    var yU=parseInt(element.style.bottom);
    if(xL<=1200 && sideswitch==false){
      element.style.left = parseInt(element.style.left) + 10 + 'px';
    }
    if(xL>=1200){

      sideswitch=true;
      console.log("side switched"+sideswitch);
    }
    if (sideswitch==true) {
      if(xL>=0){element.style.left = (parseInt(element.style.left) - 10) + 'px';}
      console.log("THIRD");
    }


    setTimeout("EnemyLoop()",15);
    setTimeout("CheckIFHIT()",1)

  }
  function CheckIFHIT(){
    var enemy = document.getElementById("em");
    var character = document.getElementById("char");

    var CharPOS_X=parseInt(character.style.left);
    var CharPOS_Y=parseInt(character.style.bottom);
    var CharSUM=CharPOS_X+CharPOS_Y;

    var EnemyPOS_X=parseInt(enemy.style.left);
    var EnemyPOS_Y=parseInt(enemy.style.bottom);
    var EnemySUM=EnemyPOS_X+EnemyPOS_Y;
    if(EnemySUM==CharSUM){
      location.reload();
    }
  }
