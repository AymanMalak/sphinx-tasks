
$(document).ready(function(){
  
    $(window).on('load',function () {
       var loaders =  document.querySelector('.loader');
       loaders.className += ' hidden';
    });
    var arr2=['eraser','ruler','pencil','book','pen'];
    localStorage.setItem("arr2",arr2);
    var arr =[];
    var eeeinnertext,eeetarget ,vv,boot;
    // handle sound correct
    var sounds = new Audio("mysound.mp3");
    var sound2 = new Audio("wrongsound.mp3");


// ---------------------------------------------------------
// ---------------------------------------------------------
    localStorage.removeItem("x");

    $('#sec span').on('click',function(e){
        $(this).addClass('active').siblings().removeClass('active') 
        boot = $(this);
        eeetarget = e.target;
        eeeinnertext = e.target.innerText;
        localStorage.setItem("x",eeeinnertext);
    });

// ---------------------------------------------------------

    $('.content .divs .option').on('click',function(){
        if( $(this).text() == "" ){
            arr2.forEach(el =>{
                if(localStorage.getItem("x")){

                    if( el ==  eeeinnertext ){
                        $(this).html( localStorage.getItem("x") + "<img  class='ml-auto pt-2 pr-3' height='30px' width='30px' style='zindex:555;cursor:default' src='images/tikMark-small.png'>" );
                        localStorage.removeItem("x");
                        // hide the element from header and put it in content body
                        boot.css('visibility','hidden');
                        // play sound
                        sounds.play();
                    }

                    if( (eeeinnertext ==   "scissors") || (eeeinnertext ==  "pencil case") || (eeeinnertext ==  "bag" ) ){
                        var xx=  localStorage.getItem("x") ;
                        $(this).html( xx + "<img  class='ml-auto pt-2 pr-3' height='40px' width='40px' style='zindex:555;cursor:default' src='images/close_icon.png'>" );
                        boot.css({'visibility':'hidden'});
                        sound2.play();
                        
                        $(this).delay(1000).queue(function() {
                            localStorage.removeItem("x");
                            $(this).html("") ;
                            boot.css({'visibility':'visible'});
                        });
                    }

                }
            });
        }
        var m= arrs.push(boot);
        localStorage.setItem("k",m);
    });
    
    if( $('.content .divs .option').text() != "" ){
        $('#showAns_icon').css('display','none');
    }
// ---------------------------------------------------------

    function reset() {
        $('.content .divs .option').text("") ;
        $('#choices .choise').css({
            'visibility':'visible',
            'border':'2px solid #0fa0c5',
            'color':'#000',
            'cursor':'pointer',
        });
        $('#showAns_icon').css({
            'cursor':'pointer',
            'opacity':'1'
        });
        $('#choices .choise').removeClass('active') ;
        localStorage.removeItem("x");
    }

    $('#reply_icon').on('click', function(){
        reset();
        $('#sec span').css({
            'border':'2px solid #0fa0c5',
        });
        $('.content .divs .option').css({
            'cursor':'pointer',
        });
        $('#sec span').on('click',function(e){
            $(this).addClass('active').siblings().removeClass('active') 
        });
    } );
// ---------------------------------------------------------

    $('#showAns_icon').on('click',function(e){
        reset();
        localStorage.removeItem("x");
        document.querySelectorAll('.content .divs .option').forEach(el =>{
            for (let i = 0; i < arr2.length; i++) {
                    document.querySelectorAll('.content .divs .option')[i].innerHTML=arr2[i]+"<img  class='ml-auto pt-2 pr-3' height='30px' width='30px' style='zindex:555;cursor:default' src='images/tikMark-small.png'>";
                    $('#sec span[data-answer="correct"]').css('visibility','hidden'); 
                }
            $(el).css('cursor','default');
        });

        $(this).css({
            'cursor':'default',
            'opacity':'0.6'
        });

        $('#sec span').css({
            'border':'2px solid #aaa',
            'color':'#aaa',
            'cursor':'default',
        });

        $('#sec span').on('click',function(e){
            $(this).removeClass('active') 
        });

    });

// ---------------------------------------------------------
    $('.help_icon').on('click',function () {
        $('#help').css('display','block');
        $('#header').css('opacity','0.5');
        $('#footer').css('opacity','0.2');
        $('img').css('cursor','default');
        // if($('.resource_icon')){
        //     $('.resource_icon').on('click',function () {
        //         $('#dumy').css('display','none');
        //     });
        //     alert("asdasd");
        // }
    });
    $('#helpclose').on('click',function () {
        $('#help').css('display','none');
        $('#header').css('opacity','1');
        $('#footer').css('opacity','1');
    });
    $('.resource_icon').on('click',function () {
        $('#dumy').css('display','block');
        // $('#help').css('display','none');
        $('#header').css('opacity','0.5');
        $('#footer').css('opacity','0.3');
        $('img').css('cursor','default');

        // $('.help_icon').on('click',function () {
        //     $('#help').css('display','none');
        // });
    });
    $('#dumyclose').on('click',function () {
        $('#dumy').css('display','none');
        $('#header').css('opacity','1');
        $('#footer').css('opacity','1');
    });
// ---------------------------------------------------------



});
