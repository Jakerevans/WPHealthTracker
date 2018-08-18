/**
 * JavaScript Functions - wphealthtracker-admin-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

console.log('This is the JavaScript Object that holds all PHP Variables for use in JavaScript')
console.log(wphealthtracker_php_variables)


// All functions wrapped in jQuery(document).ready()...
jQuery(document).ready(function($) {
  "use strict";

  /* BEGINNING SECTION TO CALL ALL FUNCTIONS IN FILE... */

    // For expanding/minimizing the 'Enter Data for' container on all tabs.
    wphealthtracker_jre_exp_min_enter();
    // For expanding/minimizing the 'View & Edit Saved Data' container on all tabs.
    wphealthtracker_jre_exp_min_view();
    // Function to display the admin pointer message when entering the Question Mark image with mouse...
    wphealthtracker_jre_admin_pointers_javascript();

  /* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


  // A function that will allow the spinning of the yellow circular 'Expand' image when the container opens
  $.fn.wphealthtracker_jre_animate_rotate_open_nonajax = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function(now) {
        $.style(e, 'transform', 'rotate(' + now + 'deg)');
        if (step) return step.apply(e, arguments);
      };

      $({deg: 0}).animate({deg: angle}, args);
    });
  };

  // A function that will allow the spinning of the yellow circular 'Expand' image when the container closes
  $.fn.wphealthtracker_jre_animate_rotate_close_nonajax = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function(now) {
        $.style(e, 'transform', 'rotate(' + now + 'deg)');
        if (step) return step.apply(e, arguments);
      };

      $({deg: 180}).animate({deg: angle}, args);
    });
  };


  // For expanding/minimizing the 'Enter Data for' container on all tabs.
  function wphealthtracker_jre_exp_min_enter(){
    $(document).on("click","#wphealthtracker-expansion-div-enter", function(event){
        var arrowRotate = $('#wphealthtracker-indiv-choice-enter .wphealthtracker-expand-minimize-div #wphealthtracker-indiv-choice-img-rotate-enter');

        var vitalsForm = $(this).next();

        if(vitalsForm.height() == 0){

          $('#wphealthtracker-expand-minimize-p-enter').animate({
             opacity: 0
          }, {
             duration: 500,
             complete: function() { 
              $(this).text(wphealthtracker_php_variables.adminjstransstring10);
              $(this).animate({'opacity':'1'});
             } 
          });

          // Get Default Height
          var curHeight = vitalsForm.height();
          // Get Auto Height
          var autoHeight = vitalsForm.css('height', 'auto').height(); 
          // Reset to Default Height
          vitalsForm.height(curHeight); 
          // Animate to Auto Height
          vitalsForm.stop().animate({
             height: autoHeight
          }, {
             duration: 1000,
             complete: function() { 
              vitalsForm.css({'height':'auto'})
              vitalsForm.find('#wphealthtracker-save-daily-enter').attr('data-origheight',vitalsForm.css('height'));
             } 
          });
          arrowRotate.wphealthtracker_jre_animate_rotate_open_nonajax(180, {
            duration: 1000,
            easing: 'linear',
            complete: function () {},
            step: function () {}
          });

        } else {

          $('#wphealthtracker-expand-minimize-p-enter').animate({
             opacity: 0
          }, {
             duration: 500,
             complete: function() { 
              $(this).text(wphealthtracker_php_variables.adminjstransstring9);
              $(this).animate({'opacity':'1'});
             } 
          });

          // Animate to Auto Height
          vitalsForm.animate({ height: '0px' }, 1000);
          arrowRotate.wphealthtracker_jre_animate_rotate_close_nonajax(360, {
            duration: 1000,
            easing: 'linear',
            complete: function () {},
            step: function () {}
          });
        }
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
  }

  // For expanding/minimizing the 'View & Edit Saved Data' container on all tabs.
  function wphealthtracker_jre_exp_min_view(){
    $(document).on("click","#wphealthtracker-expansion-div-view", function(event){

        var arrowRotate = $('#wphealthtracker-indiv-choice-view #wphealthtracker-indiv-choice-img-rotate-view');

        var vitalsForm = $('#wphealthtracker-indiv-choice-view #wphealthtracker-selected-user-response-id-view');
        if(vitalsForm.height() == 0){

          $('#wphealthtracker-expand-minimize-p-view').animate({
             opacity: 0
          }, {
             duration: 500,
             complete: function() { 
              $(this).text(wphealthtracker_php_variables.adminjstransstring10);
              $(this).animate({'opacity':'1'});
             } 
          });

          // Get Default Height
          var curHeight = vitalsForm.height();
          // Get Auto Height
          var autoHeight = vitalsForm.css('height', 'auto').height(); 
          // Reset to Default Height
          vitalsForm.height(curHeight); 
          // Animate to Auto Height
          vitalsForm.stop().animate({
             height: autoHeight
          }, {
             duration: 1000,
             complete: function() { 
              vitalsForm.css({'height':'auto'})
              // Show the entries on the 'View' container
              $('#wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row, #wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'1'}, 300)
             } 
          }); 

          arrowRotate.wphealthtracker_jre_animate_rotate_open_nonajax(180, {
            duration: 1000,
            easing: 'linear',
            complete: function () {},
            step: function () {}
          });

        } else {

          $('#wphealthtracker-expand-minimize-p-view').animate({
             opacity: 0
          }, {
             duration: 500,
             complete: function() { 
              $(this).text(wphealthtracker_php_variables.adminjstransstring9);
              $(this).animate({'opacity':'1'});
             } 
          });

          // Animate to Auto Height
          vitalsForm.animate({ height: '0px' }, 1000);
          arrowRotate.wphealthtracker_jre_animate_rotate_close_nonajax(360, {
            duration: 1000,
            easing: 'linear',
            complete: function () {

              // Hide the entries on the 'View' container again 
              $('#wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row, #wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row-actual').css({'opacity':'0'})

            },
            step: function () {}
          });
        }
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
  }

  // Function to display the admin pointer message when entering the Question Mark image with mouse...
  function wphealthtracker_jre_admin_pointers_javascript(){
    $('body').on('mouseenter', ".wphealthtracker-icon-image-question, .wphealthtracker-icon-image-question-enter-view, .wphealthtracker-icon-image-question-dashboard", function () {
      var label = $(this).attr('data-label');
      var pointer;

      // Switch for which admin message to display
      switch(label) {
        case 'selectauser':
            pointer = $(this).pointer({
              content: '<h3>'+wphealthtracker_php_variables.adminjstransstring1+'</h3><p class="wphealthtracker-admin-pointer">'+wphealthtracker_php_variables.adminjstransstring2+'</p>',
              position: {
                  edge: 'right',
                  align: 'right',
              },
              close: function() {
                  //
              }
            })
            break;
        case 'vitals-weight':
            pointer = $(this).pointer({
              content: '<h3>'+wphealthtracker_php_variables.adminjstransstring3+'</h3><p class="wphealthtracker-admin-pointer">'+wphealthtracker_php_variables.adminjstransstring4+'</p>',
              position: {
                  edge: 'right',
                  align: 'right',
              },
              close: function() {
                  //
              }
            })
            break;
        case 'vitals-bp':
            pointer = $(this).pointer({
              content: '<h3>'+wphealthtracker_php_variables.adminjstransstring5+'</h3><p class="wphealthtracker-admin-pointer">'+wphealthtracker_php_variables.adminjstransstring6+'</p>',
              position: {
                  edge: 'right',
                  align: 'right',
              },
              close: function() {
                  //
              }
            })
            break;
        case 'vitals-bo':
            pointer = $(this).pointer({
              content: '<h3>'+wphealthtracker_php_variables.adminjstransstring7+'</h3><p class="wphealthtracker-admin-pointer">'+wphealthtracker_php_variables.adminjstransstring8+'</p>',
              position: {
                  edge: 'right',
                  align: 'right',
              },
              close: function() {
                  //
              }
            })
            break;
        case 'dash-daystracked':
            pointer = $(this).pointer({
              content: '<h3>'+wphealthtracker_php_variables.adminjstransstring7+'</h3><p class="wphealthtracker-admin-pointer">'+wphealthtracker_php_variables.adminjstransstring8+'</p>',
              position: {
                  edge: 'left',
                  align: 'left',
              },
              close: function() {
                  //
              }
            })
            break;
        default:
            //code block
      }
      
      // Open the pointer on mouseenter
      pointer.pointer('open');

      // Close the pointer on mouseleave
      $('body').on('mouseleave', ".wphealthtracker-icon-image-question, .wphealthtracker-icon-image-question-enter-view, .wphealthtracker-icon-image-question-dashboard", function () {
        pointer.pointer('close');
      });
    });
  }
});