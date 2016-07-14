$("#social-media").hide();
$("#second-section").hide();
$("#third-section").hide();

$(window).load(function(){
 $("#loading-page").fadeOut();
  $("#social-media").fadeIn(3000);
  
  //alert("Window");
});
var icon_height=(parseInt(($(".icon .fa").css("height").split('px'))[0] )-parseInt(($(".icon span").css("height").split('px'))[0]));
icon_height/=2;
//alert(icon_height);
$(".icon span").css("top", icon_height);
//alert($(".icon span").css("top"));
//store the heights of all the major boxes in the heightarray
/*var heightArray =[];
$(".holder .box").each(function(index){
  heightArray[index] =parseInt(($(this).css("height").split('px'))[0]);
  if(index!==0)
    heightArray[index]+=heightArray[index-1];
});
//alert(heightArray);
$("#nav-bar a").css("height",$("#nav-bar a").css("font-size"));

var nav_font_height=$("#nav-bar a").css("height").split('px');

var height=$('.home').css("height").split('px');
$("#nav-bar").css("height",(0.1*height[0])+'px');

var nav_height=$("#nav-bar").css("height").split('px');

//alert(nav_height[0]);
$("#nav-bar").css("top",(height[0]-nav_height[0])+'px');
$("#nav-bar a").css("top",(nav_height[0]-nav_font_height[0])/2 );
//alert($("#nav-bar").css("top")+" "+height);
//alert(height);
*/
/*$(window).scroll(function(){
  var scrollPosition=$(window).scrollTop();
  //alert(scrollPosition);
  
  if(scrollPosition>=height[0]-nav_height[0])
    {
      $("#nav-bar").css("position","fixed");
      $("#nav-bar").css("top","0");
     // var index=getIndex(scrollPosition);
      var flag=1;
     var indice; 
     $.each(heightArray,function(index,value)
            {
          if(value>scrollPosition+parseInt(nav_height[0]) && flag&&index)
          {indice=index;
           flag=0;
          }
      });
      indice++;
      //alert(indice);
      $("#nav-bar a:nth-child(n)").removeClass("selected");
     $('#nav-bar a:nth-child('+indice+')').addClass("selected");
      
    }
  else
    {
      $("#nav-bar").css("position","absolute");
      $("#nav-bar").css("top",height[0]-nav_height[0]);
      $("#nav-bar a:nth-child(n)").removeClass("selected");
     $("#nav-bar a:nth-child(1)").addClass("selected"); 
    }
  
});


var colorchange=1;
*/
/*For smooth Scroll
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 900);
    }

});*/
/*
For animating the arrow and choosing the subsection
$("#icon-bar .one").click(function(){
  //hide second and third subsections
    $("#second-section").fadeOut();
     $("#third-section").fadeOut();
    //display the first subsection
    $("#first-section").fadeIn();
  $("#triangle").animate({
    left:"20%"
    
  },800);
});
$("#icon-bar .two").click(function(){
  $("#first-section").fadeOut();
     $("#third-section").fadeOut();
    //display the first subsection
    $("#second-section").fadeIn();
  $("#triangle").animate({
    left:"50%"
  },800);
});

$("#icon-bar .three").click(function(){
  $("#second-section").fadeOut();
     $("#first-section").fadeOut();
    //display the first subsection
    $("#third-section").fadeIn();
  $("#triangle").animate({
    left:"85%"
  },800);
});*/
function element(){
            var h = window.innerHeight;
             document.getElementById('box0').style.height = h+"px";
             document.getElementById('box1').style.height = h+"px";
             document.getElementById('box2').style.height = h+"px";
             document.getElementById('speaker4').style.height = h+"px";
             document.getElementById('box4').style.height = h+"px";
             document.getElementById('box5').style.height = h+"px";
             document.getElementById('team7').style.height = h+"px";
            
        }
        
        function slideAnimate() {
            var i = document.getElementById('span');
            var h = window.innerHeight;
            var x = 2*h;
            var y = 3*h;
            var Yoffset  = window.pageYOffset;
           if(Yoffset < h){
               i.style.left = "0px";
               
           }
            else if(Yoffset < (2*h)) {
                i.style.left = "100px";
                
            }
            else if(Yoffset < (3*h)) {
                i.style.left = "200px";
               
            }
            else if (Yoffset === (3*h)){
                i.style.left = "300px";
                
            }
            
                      
            
        }
        window.addEventListener('scroll',slideAnimate);
        window.addEventListener('load', element);
        window.addEventListener('resize', element);

//Functions for google maps:
function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(22.250636, 84.902748),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

//image Slider;
//popups

