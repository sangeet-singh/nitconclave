$(document).ready(function(){
	$("a.popup-window-rahul").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
         		'margin-top':-popMargTop,
         		'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button").click(function(){

		    $("#mask").hide();
		    $(".popupInfo").hide();
	});
      $("a.popup-window-nizam").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
            'margin-top':-popMargTop,
            'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button-nizam").click(function(){

        $("#mask").hide();
        $(".popupInfo").hide();
  });
      $("a.popup-window-nitin").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
            'margin-top':-popMargTop,
            'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button-nitin").click(function(){

        $("#mask").hide();
        $(".popupInfo").hide();
  });
      $("a.popup-window-naveen").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
            'margin-top':-popMargTop,
            'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button-naveen").click(function(){

        $("#mask").hide();
        $(".popupInfo").hide();
  });
  	
  	$("a.popup-window-tanmay").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
         		'margin-top':-popMargTop,
         		'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button-tanmay").click(function(){

		    $("#mask").hide();
		    $(".popupInfo").hide();
	});

  	$("a.popup-window-paritosh").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
            'margin-top':-popMargTop,
            'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button-paritosh").click(function(){

        $("#mask").hide();
        $(".popupInfo").hide();
  });
  	
      $("a.popup-window-arpit").click(function(){
        var popupBox = $(this).attr('href');
      $(popupBox).fadeIn(400);

        var popMargTop = ($(popupBox).height()+24)/2;
         var popMargLeft = ($(popupBox).width() + 24)/2;

        $(popupBox).css({
            'margin-top':-popMargTop,
            'margin-left':-popMargLeft
        });
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(400);
         return false;
      });
      $("#close-button-arpit").click(function(){

        $("#mask").hide();
        $(".popupInfo").hide();
  });
      $(function() {

    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });
});
});