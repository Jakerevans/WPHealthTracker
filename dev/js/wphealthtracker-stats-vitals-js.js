/**
 * JavaScript Functions - wphealthtracker-stats-vitals-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

jQuery(document).ready(function($) {
  "use strict";

  /* BEGINNING SECTION TO CALL ALL FUNCTIONS IN FILE... */

   wphealthtracker_jre_grab_user_data_for_vitals_dashboard()

   wphealthtracker_jre_grab_user_data_for_vitals_d3()

  /* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


  function wphealthtracker_jre_grab_user_data_for_vitals_dashboard(){
    
    $(document).on("change","#wphealthtracker-user-dropdown-select-vital-stats", function(event){

        // Animate the spinner
        $('#wphealthtracker-spinner-1').animate({'opacity':'1'})

        var wpuserid = $(this).val();

        var data = {
          'action': 'wphealthtracker_jre_grab_user_data_for_vitals_dashboard_action',
          'security': wphealthtrackerPhpVariables.statsvitalsnonce1,
          'wpuserid':wpuserid,
        };

        var request = $.ajax({
          url: ajaxurl,
          type: "POST",
          data:data,
          timeout: 0,
          success: function(response) {

            // Turn off spinner
            $('#wphealthtracker-spinner-1').animate({'opacity':'0'})

            $('#wphealthtracker-stats-actual-inner-div-1').html(response)

            // For animating the container's height, from 0 to auto
            var enterViewCont = $('#wphealthtracker-stats-actual-top-div-1')
            var curHeight = enterViewCont.height();
            var autoHeight = enterViewCont.css('height', 'auto').height(); 
            enterViewCont.height(curHeight); 
            enterViewCont.stop().animate({
               height: autoHeight,
               opacity:1
            }, {
               duration: 1000,
               complete: function() { 
                //enterViewCont.css({'height':'auto'})
               } 
            });

          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);
          }
        });

    });

    // This bit of code will automatically trigger the change event we just registered above if there is a default user set in the general_settings table
    setTimeout(function(){
      var value = $('#wphealthtracker-user-dropdown-select-vital-stats').val();
      if(value != 'default' && value != null){
        $('#wphealthtracker-user-dropdown-select-vital-stats').val(value).trigger('change');
      }
    }, 100)

  }

  function wphealthtracker_jre_grab_user_data_for_vitals_d3(){

    $(document).on("change","#wphealthtracker-user-dropdown-select-vital-stats", function(event){

        // Reset everything that may already be in play
        $('.wphealthtracker-stats-actual-top-div, .wphealthtracker-stats-actual-top-div-d3').animate({
               height: '0px',
               opacity:0
            }, {
               duration: 1000,
               complete: function() { 
              
                  $('.wphealthtracker-d3-chart-title-div').empty()
                  $('.wphealthtracker-stats-actual-top-div-inner-right').empty()
                  $('.wphealthtracker-stats-actual-top-div-inner-left').empty()

                  // Trun the D3 chart spinners back on
                  $('.wphealthtracker-spinner-primary-d3-await').css({'opacity':'1'})

               } 
            });

        // Animate the spinner
        $('#wphealthtracker-spinner-1').animate({'opacity':'1'})

        var wpuserid = $(this).val();

        var data = {
          'action': 'wphealthtracker_jre_grab_user_data_for_vitals_d3_action',
          'security': wphealthtrackerPhpVariables.statsvitalsnonce2,
          'wpuserid':wpuserid,
        };

        console.log("Here's the data we're about to send to wphealthtracker-stats-vitals-ajax.php to then get all the user's data, make a call to the WPHealthTracker_D3_Vitals class in class-d3-vitals.php, and then return one array of all formatted data needed for D3, plus the title html for each chart.")
        console.log(data)

        var request = $.ajax({
          url: ajaxurl,
          type: "POST",
          data:data,
          timeout: 0,
          success: function(response) {

            
            response = JSON.parse(response)
            console.log("Here is the data we received back from wphealthtracker-stats-vitals-ajax.php - Response[0] should be the D3-Formatted data for the Weight Chart, Response[1] should be the D3-Formatted data for the Cholesterol Chart, Response[2] should be the D3-Formatted data for the Blood Pressure Chart, Response[3] should be the Title HTML for each respective chart, Response[3] should be the Title HTML for each respective chart.and Response[4] should be the Stats HTML for each respective chart.");
            console.log(response);

            var d3One = response[0];
            var d3Two = response[1];
            var d3Three = response[2];
            var titleHtmlOne = response[3][0];
            var titleHtmlTwo = response[3][1];
            var titleHtmlThree = response[3][2];
            var statsHtmlOne = response[4][0];
            var statsHtmlTwo = response[4][1];
            var statsHtmlThree = response[4][2];

            $('#wphealthtracker-d3-chart-title-div-1-1').append(titleHtmlOne);
            $('#wphealthtracker-d3-chart-title-div-1-2').append(titleHtmlTwo);
            $('#wphealthtracker-d3-chart-title-div-1-3').append(titleHtmlThree);

            // If no data was found for the creation of the D3 chart, output returned "No Data" HTML, else, display chart
            if(d3One.indexOf('wphealthtracker-no-saved-data-div') > -1){
              // Hide the the spinner
              $('#wphealthtracker-spinner-d3-await-1').animate({'opacity':'0'})
              $("#wphealthtracker-stats-actual-inner-d3-1-1").append(d3One);
            } else {
              // Append any HTML that may be needed for the creation of the charts
              $('#wphealthtracker-stats-actual-inner-d3-1-1').append('<div id="wphealthtracker-d3chart-legendContainer-weight" class="wphealthtracker-d3chart-legendContainer"><svg id="wphealthtracker-d3chart-legend-weight"></svg></div><div class="wphealthtracker-chart-hover-message" id="wphealthtracker-chart-hover-message-weight">'+wphealthtrackerPhpVariables.d3trans48+'</div>');
              wphealthtrackerVitalsD3One(d3One, $);
            }

            // If no data was found for the creation of the D3 chart, output returned "No Data" HTML, else, display chart
            if(d3Two.indexOf('wphealthtracker-no-saved-data-div') > -1){
              // Hide the the spinner
              $('#wphealthtracker-spinner-d3-await-2').animate({'opacity':'0'})
              $("#wphealthtracker-stats-actual-inner-d3-1-2").append(d3Two);
              // Modify the CSS of the right-side container to match the height of the left - a one-off modification specific to this chart
              $('#wphealthtracker-stats-inner-d3-2 #wphealthtracker-stats-actual-inner-d3-2-2').css({'top':'0px'});
            } else {
              // Append any HTML that may be needed for the creation of the charts
              $('#wphealthtracker-stats-actual-inner-d3-1-2').append('<div id="wphealthtracker-bp-chart-select-div"></div><div id="wphealthtracker-d3chart-legendContainer-bp" class="wphealthtracker-d3chart-legendContainer"><svg id="wphealthtracker-d3chart-legend-bp"></svg></div><div class="wphealthtracker-chart-hover-message" id="wphealthtracker-chart-hover-message-bp">'+wphealthtrackerPhpVariables.d3trans48+'</div>');
              wphealthtrackerVitalsD3Two(d3Two, $);
            }

            // If no data was found for the creation of the D3 chart, output returned "No Data" HTML, else, display chart
            if(d3Three.indexOf('wphealthtracker-no-saved-data-div') > -1){
              // Hide the the spinner
              $('#wphealthtracker-spinner-d3-await-3').animate({'opacity':'0'})
              $("#wphealthtracker-stats-actual-inner-d3-1-3").append(d3Three);
            } else {
              // Append any HTML that may be needed for the creation of the charts
              $('#wphealthtracker-stats-actual-inner-d3-1-3').append('<div id="wphealthtracker-d3chart-legendContainer-ch" class="wphealthtracker-d3chart-legendContainer"><svg id="wphealthtracker-d3chart-legend-ch"></svg></div><div class="wphealthtracker-chart-hover-message" id="wphealthtracker-chart-hover-message-ch">'+wphealthtrackerPhpVariables.d3trans48+'</div>');
              wphealthtrackerVitalsD3Three(d3Three, $);
            }

            
            // For animating the container's height, from 0 to auto
            var d3OneContainer = $('#wphealthtracker-stats-inner-d3-1')
            var curHeight = d3OneContainer.height();
            var autoHeight = d3OneContainer.css('height', 'auto').height(); 
            d3OneContainer.height(curHeight); 
            d3OneContainer.stop().animate({
               height: autoHeight,
               opacity:1
            }, {
               duration: 1000,
               complete: function() { 
                $('#wphealthtracker-stats-actual-inner-d3-2-1').append(statsHtmlOne)
                $('#wphealthtracker-d3-chart-title-div-1-1').animate({'opacity':1},2000);
                d3OneContainer.css({'height':'auto'})
               } 
            });

            

            // For animating the container's height, from 0 to auto
            var d3TwoContainer = $('#wphealthtracker-stats-inner-d3-2')
            var curHeight = d3TwoContainer.height();
            var autoHeight = d3TwoContainer.css('height', 'auto').height(); 
            d3TwoContainer.height(curHeight); 
            d3TwoContainer.stop().animate({
               height: autoHeight,
               opacity:1
            }, {
               duration: 1000,
               complete: function() { 
                $('#wphealthtracker-stats-actual-inner-d3-2-2').append(statsHtmlTwo)
                $('#wphealthtracker-d3-chart-title-div-1-2').animate({'opacity':1},2000);
                d3TwoContainer.css({'height':'auto'})
               } 
            });

            // For animating the container's height, from 0 to auto
            var d3ThreeContainer = $('#wphealthtracker-stats-inner-d3-3')
            var curHeight = d3ThreeContainer.height();
            var autoHeight = d3ThreeContainer.css('height', 'auto').height(); 
            d3ThreeContainer.height(curHeight); 
            d3ThreeContainer.stop().animate({
               height: autoHeight,
               opacity:1
            }, {
               duration: 1000,
               complete: function() { 
                $('#wphealthtracker-stats-actual-inner-d3-2-3').append(statsHtmlThree)
                $('#wphealthtracker-d3-chart-title-div-1-3').animate({'opacity':1},2000);
                d3ThreeContainer.css({'height':'auto'})
               } 
            });


          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);
          }
        });

    });
  }

});