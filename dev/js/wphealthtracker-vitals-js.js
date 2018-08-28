/**
 * JavaScript Functions - wphealthtracker-vitals-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

jQuery(document).ready(function($) {
  "use strict";

  /* BEGINNING SECTION TO CALL ALL FUNCTIONS IN FILE... */

    // For populating the 'Enter' container with the selected user's saved data and/or the blank form
    wphealthtracker_jre_vitals_selecteduser_vitals_enter($);

    // For populating the 'View' container with the selected user's saved data and/or the blank form
    wphealthtracker_jre_vitals_selecteduser_vitals_view($);

    // For deleting a row of data
    wphealthtracker_jre_vitals_delete_row_of_data($);

    // For adding a row of data
    wphealthtracker_jre_vitals_add_row_of_data($)

    // For expanding the previous days' saved data entries
    wphealthtracker_jre_vitals_expand_all_previous_data($)

    // For saving the Vitals data
    wphealthtracker_jre_vitals_save_vitals_data($);

    // For grabbing and outputting data when the 'Filter' button is clicked...
    wphealthtracker_jre_vitals_selecteduser_vitals_filter_data($);

  /* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


  function wphealthtracker_jre_vitals_delete_row_of_data($){
    $(document).on("click",".wphealthtracker-response-form-row-removal-div", function(event){

      // The ID to remove
      var idToRemove = $(this).attr('data-id-to-remove');

      // Animating the ID away, then actually removing from DOM
      $('#'+idToRemove).animate({
             opacity: 0,
             height:0
          }, 
          {
            duration: 500,
            complete: function() { 
              $('#'+idToRemove).remove();
            } 
      });
    });

  }

  function wphealthtracker_jre_vitals_add_row_of_data($){
    $(document).on("click",".wphealthtracker-response-form-row-addition-div", function(event){

      // ID of element to add row of data after
      var idToAddAfter = $(this).attr('data-id-to-add-after');
      var loopNum = $(this).attr('data-loopnum');
      var key = $(this).attr('data-key');
      var newRow = '';
      var newIdToAddAfter = '';

      // Switch to determine what type of row of data to add
      switch(idToAddAfter) {
          case 'wphealthtracker-response-form-bp-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-bp-row-div-'+key+'-'+loopNum;

              newRow = '<div style="overflow:hidden; height:0px; opacity:0;" class="wphealthtracker-response-form-data-row-bp" id="wphealthtracker-response-form-bp-row-div-'+key+'-'+loopNum+'"><div style="right:3px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.vitalstrans9+'</p><input type="number" class="wphealthtracker-response-form-input-number" id="wphealthtracker-response-form-input-number-bp-sys-'+key+'-'+loopNum+'"></input></div><div class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.vitalstrans10+'</p><input type="number" class="wphealthtracker-response-form-input-number" id="wphealthtracker-response-form-input-number-bp-dis-'+key+'-'+loopNum+'"></input></div><div style="left:4px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans25+'</p><input type="time" class="wphealthtracker-response-form-input-time wphealthtracker-response-form-input-time-bp" id="wphealthtracker-response-form-input-time-bp-'+key+'-'+loopNum+'"></input><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-bp-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
          case 'wphealthtracker-response-form-bs-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-bs-row-div-'+key+'-'+loopNum;

              newRow = '<div class="wphealthtracker-response-form-data-row-bs" id="wphealthtracker-response-form-bs-row-div-'+key+'-'+loopNum+'"><div style="right:3px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.vitalstrans12+'</p><input type="number" step="0.1" class="wphealthtracker-response-form-input-number" id="wphealthtracker-response-form-input-number-bs-'+key+'-'+loopNum+'"></input></div><div class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-select-bs-'+key+'-'+loopNum+'">"><option>'+wphealthtrackerPhpVariables.vitalstrans13+'</option><option>'+wphealthtrackerPhpVariables.vitalstrans14+'</option></select></div><div style="left:4px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans25+'</p><input type="time" class="wphealthtracker-response-form-input-time" id="wphealthtracker-response-form-input-time-bs-'+key+'-'+loopNum+'"></input><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-bs-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
          case 'wphealthtracker-response-form-bo-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-bo-row-div-'+key+'-'+loopNum;

              newRow = '<div class="wphealthtracker-response-form-data-row-bo" id="wphealthtracker-response-form-bo-row-div-'+key+'-'+loopNum+'"><div style="right:3px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.vitalstrans16+'</p><input type="number" class="wphealthtracker-response-form-input-number" id="wphealthtracker-response-form-input-number-bo-'+key+'-'+loopNum+'"></input></div><div class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select wphealthtracker-response-form-select-bo" id="wphealthtracker-response-form-select-bo-'+key+'-'+loopNum+'"><option>'+wphealthtrackerPhpVariables.commontrans26+'</option><option>'+wphealthtrackerPhpVariables.vitalstrans17+'</option></select></div><div style="left:4px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans25+'</p><input type="time" class="wphealthtracker-response-form-input-time" id="wphealthtracker-response-form-input-time-bo-'+key+'-'+loopNum+'"></input><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-bo-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
          case 'wphealthtracker-response-form-bt-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-bt-row-div-'+key+'-'+loopNum;

              newRow = '<div class="wphealthtracker-response-form-data-row-bt" id="wphealthtracker-response-form-bt-row-div-'+key+'-'+loopNum+'"><div style="right:3px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.vitalstrans19+'</p><input type="number" class="wphealthtracker-response-form-input-number" id="wphealthtracker-response-form-input-number-bt-'+key+'-'+loopNum+'"></input></div><div class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select wphealthtracker-response-form-select-bt" id="wphealthtracker-response-form-select-bt-'+key+'-'+loopNum+'"><option>'+wphealthtrackerPhpVariables.vitalstrans20+'</option><option>'+wphealthtrackerPhpVariables.vitalstrans21+'</option></select></div><div style="left:4px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans25+'</p><input type="time" class="wphealthtracker-response-form-input-time" id="wphealthtracker-response-form-input-time-bt-'+key+'-'+loopNum+'"></input><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-bt-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
          case 'wphealthtracker-response-form-hr-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-hr-row-div-'+key+'-'+loopNum;

              newRow = '<div class="wphealthtracker-response-form-data-row-hr" id="wphealthtracker-response-form-hr-row-div-'+key+'-'+loopNum+'"><div style="right:2px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.vitalstrans23+'</p><input type="number" class="wphealthtracker-response-form-input-number" id="wphealthtracker-response-form-input-number-hr-'+key+'-'+loopNum+'"></input></div><div style="left:2px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans25+'</p><input type="time" class="wphealthtracker-response-form-input-time wphealthtracker-response-form-input-time-hr" id="wphealthtracker-response-form-input-time-hr-'+key+'-'+loopNum+'"></input><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-hr-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
          case 'wphealthtracker-response-form-img-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-img-row-div-'+key+'-'+loopNum;

              newRow = '<div class="wphealthtracker-response-form-data-row-img" id="wphealthtracker-response-form-img-row-div-'+key+'-'+loopNum+'"><div style="right:2px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans28+'</p><input type="text" placeholder="'+wphealthtrackerPhpVariables.commontrans28+'" class="wphealthtracker-response-form-input-text wphealthtracker-response-form-input-text-image-upload" id="wphealthtracker-response-form-input-text-image-upload-'+key+'-'+loopNum+'"></input></div><div style="left:2px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans29+'</p><button class="wphealthtracker-response-form-input-button wphealthtracker-response-form-input-button-image-upload" id="wphealthtracker-response-form-input-button-image-upload-'+key+'-'+loopNum+'">'+wphealthtrackerPhpVariables.commontrans30+'</button><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-img-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
          case 'wphealthtracker-response-form-file-row-div-'+key+'-'+loopNum:

              key = parseInt(key)+1;
              newIdToAddAfter = 'wphealthtracker-response-form-file-row-div-'+key+'-'+loopNum;

              newRow = '<div class="wphealthtracker-response-form-data-row-file" id="wphealthtracker-response-form-file-row-div-'+key+'-'+loopNum+'"><div style="right:2px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans31+'</p><input type="text" placeholder="'+wphealthtrackerPhpVariables.commontrans32+'" class="wphealthtracker-response-form-input-text wphealthtracker-response-form-input-text-file-upload" id="wphealthtracker-response-form-input-text-file-upload-'+key+'-'+loopNum+'"></input></div><div style="left:2px;" class="wphealthtracker-response-form-div-row"><p>'+wphealthtrackerPhpVariables.commontrans33+'</p><button class="wphealthtracker-response-form-input-button wphealthtracker-response-form-input-button-file-upload" id="wphealthtracker-response-form-input-button-file-upload-'+key+'-'+loopNum+'">'+wphealthtrackerPhpVariables.commontrans34+'</button><div class="wphealthtracker-response-form-row-removal-div" data-id-to-remove="wphealthtracker-response-form-file-row-div-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div>';
          break;
      }

      // Update dom values of the Add New Row Image
      $(this).attr('data-id-to-add-after', newIdToAddAfter);
      $(this).attr('data-key', key);

      // Actually insert new row
      $(newRow).insertBefore($(this))

      var newIdRef = $('#'+newIdToAddAfter);
      // Get Auto Height
      var autoHeight = newIdRef.css('height', 'auto').height(); 
      // Reset to Default Height
      newIdRef.height(0); 
      // Animate to Auto Height
      newIdRef.stop().animate({
         height: autoHeight,
         opacity:1
      }, {
         duration: 500,
      });
    });
  }


  // For populating the tab with the selected user's saved data and/or the blank form
  function wphealthtracker_jre_vitals_selecteduser_vitals_enter($){
    $(document).on("change","#wphealthtracker-user-dropdown-select-vitals", function(event){

        // The div that holds the form for the user to fill out and/or add data to
        var responseEnterDiv = $('.wphealthtracker-selected-user-response-enter-div');

        // Handle changing the text of the 'Expand/Minimize' section if needed
        var expandMinEnterP = $('#wphealthtracker-expand-minimize-p-enter');
        if(expandMinEnterP.text() == 'Minimize'){
          $('#wphealthtracker-expand-minimize-p-enter').animate({
                 opacity: 0
              }, 
              {
                duration: 500,
                complete: function() { 
                  $(this).text('Expand');
                  $(this).animate({'opacity':'1'});
                } 
          });
        }

        // Reset all 'Enter' and 'View' containers (height and contents)
        $('.wphealthtracker-selected-user-response-enter-div').each(function(){
          if($(this).css('height') != '0px'){

            // This trigger may or may not be needed... expansion/minimizing is a little buggy when switching to a different user while one of the 'Enter' or 'View' containers is open and/or if user clicks too soon/fast...
            $('#wphealthtracker-expansion-div-vitals-enter').trigger('click')
            $(this).animate({
               height: '0px'
            }, {
               duration: 1000,
               complete: function() { 
                responseEnterDiv.html('');
               } 
            });
          } else {
            responseEnterDiv.html('');
          }
        })

        // Animate the spinner
        $('#wphealthtracker-spinner-1').animate({'opacity':'1'})

        // Get the user
        var wpuserid = $('#wphealthtracker-user-dropdown-select-vitals').val();

        // Get the minutes offset from UTC, representing the user's time zone
        var offset = new Date().getTimezoneOffset();

        var data = {
          'action': 'wphealthtracker_jre_selecteduser_vitals_enter_action',
          'security': wphealthtrackerPhpVariables.vitalsnonce1,
          'wpuserid':wpuserid,
          'offset':offset
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the Vitals tab:');
        console.log(data);

        var request = $.ajax({
          url: ajaxurl,
          type: "POST",
          data:data,
          timeout: 0,
          success: function(response) {

            // Hide spinner
            $('#wphealthtracker-spinner-1').animate({'opacity':'0'})

            // Reveal the 'Enter' container
            $('#wphealthtracker-choice-container').animate({'opacity':'1'})
            // Make the 'Enter' container appear clickable
            $('#wphealthtracker-choice-container').css({'pointer-events':'all'})
            // Reveal the text instructing the user what to do next
            $('#wphealthtracker-choose-title').animate({'opacity':'1'})

            // Split up the response between the returned form html from class-vitals-forms-actual.php, the returned saved user's data, and the tab we're on
            response = JSON.parse(response);
            response[1] = JSON.parse(response[1])

            console.log('Here is Today\'s data for this user we just retrieved from the server. Response[0] is the HTML, Response[1] is the actual saved data the HTML is populated with (if any), Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is the Date and Response[5] is the User\'s WP ID.')
            console.log(response)

            // Get response div for the 'Enter' container and set the html
            responseEnterDiv.html(response[0]);

          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);
          }
        });
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });

    // This bit of code will automatically trigger the change event we just registered above if there is a default user set in the general_settings table
    setTimeout(function(){
      var value = $('#wphealthtracker-user-dropdown-select-vitals').val();
      if(value != 'default' && value != null){
        $('#wphealthtracker-user-dropdown-select-vitals').val(value).trigger('change');
      }
    }, 100)
  }


  // For populating the tab with the selected user's saved data and/or the blank form
  function wphealthtracker_jre_vitals_selecteduser_vitals_view($){
    $(document).on("change","#wphealthtracker-user-dropdown-select-vitals", function(event){

        // The div that holds the form for the user to fill out and/or add data to
        var responseViewDiv = $('.wphealthtracker-selected-user-response-view-div');

        // Handle changing the text of the 'Expand/Minimize' section if needed
        var expandMinViewP = $('#wphealthtracker-expand-minimize-p-view');
        if(expandMinViewP.text() == 'Minimize'){
          $('#wphealthtracker-expand-minimize-p-enter').animate({
                 opacity: 0
              }, 
              {
                duration: 500,
                complete: function() { 
                  $(this).text('Expand');
                  $(this).animate({'opacity':'1'});
                } 
          });
        }

        // For animating the container's height, from 0 to auto
        var viewCont = $('#wphealthtracker-choice-container')
        var curHeight = viewCont.height();
        var autoHeight = viewCont.css('height', 'auto').height(); 
        viewCont.height(curHeight); 
        viewCont.stop().animate({
           height: autoHeight
        }, {
           duration: 1000,
           complete: function() { 
            viewCont.css({'height':'auto'})
           } 
        });

        // Reset all 'Enter' and 'View' containers (height and contents)
        $('.wphealthtracker-selected-user-response-view-div').each(function(){
          if($(this).css('height') != '0px'){

            // This trigger may or may not be needed... expansion/minimizing is a little buggy when switching to a different user while one of the 'Enter' or 'View' containers is open and/or if user clicks too soon/fast...
            $('#wphealthtracker-expansion-div-vitals-enter').trigger('click')
            $(this).animate({
               height: '0px'
            }, {
               duration: 1000,
               complete: function() { 
                responseViewDiv.html('');
               } 
            });
          } else {
            responseViewDiv.html('');
          }
        })

        // Animate the spinner
        $('#wphealthtracker-spinner-1').animate({'opacity':'1'})

        // Get the user
        var wpuserid = $('#wphealthtracker-user-dropdown-select-vitals').val();

        // Get the minutes offset from UTC, representing the user's time zone
        var offset = new Date().getTimezoneOffset();

        var data = {
          'action': 'wphealthtracker_jre_selecteduser_vitals_view_action',
          'security': wphealthtrackerPhpVariables.vitalsnonce2,
          'wpuserid':wpuserid,
          'offset':offset
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the Vitals tab:');
        console.log(data);

        var request = $.ajax({
          url: ajaxurl,
          type: "POST",
          data:data,
          timeout: 0,
          success: function(response) {

            // Hide spinner
            $('#wphealthtracker-spinner-1').animate({'opacity':'0'})

            // Reveal the top container
            $('#wphealthtracker-choice-container').animate({'opacity':'1'})
            // Make the top container appear clickable
            $('#wphealthtracker-choice-container').css({'pointer-events':'all'})
            // Reveal the text instructing the user what to do next
            $('#wphealthtracker-choose-title').animate({'opacity':'1'})

            // Split up the response between the returned form html from class-vitals-forms-actual.php, the returned saved user's data, and the tab we're on
            response = JSON.parse(response);
            response[1] = JSON.parse(response[1])

            console.log('Here is ALL Previous data for this user we just retrieved from the server. Response[0] is the full HTML for each day, Response[1] is the actual saved data for each day the HTML is populated with, Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is TODAY\'S Date, and Response[5] is the User\'s WP ID.')
            console.log(response)

            // Get response div for the 'View' container and set the html
            responseViewDiv.html(response[0]);

          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);
          }
        });
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
  }
});

  // For grabbing and outputting data when the 'Filter' button is clicked...
  function wphealthtracker_jre_vitals_selecteduser_vitals_filter_data($){
    $(document).on("click","#wphealthtracker-view-filter-button-vitals-id", function(event){

      // Animate the spinner
      $('#wphealthtracker-spinner-filter-vitals').animate({'opacity':'1'})

      // Hide the current entries on the 'View' container
      $('.wphealthtracker-response-form-all-data-row, .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'0'})


      // Get drop-down value
      filterVal = $('#wphealthtracker-view-search-select').val();

      // Get the user
      var wpuserid = $('#wphealthtracker-user-dropdown-select-vitals').val();

      var data = {
        'action': 'wphealthtracker_jre_selecteduser_vitals_filter_data_action',
        'security': wphealthtrackerPhpVariables.vitalsnonce4,
        'wpuserid':wpuserid,
        'filterval':filterVal
      };

      console.log('This is the data being sent to the server to retreive the user\'s data based on the "Filter Data" Drop-down box the user just changed:');
      console.log(data);

      var request = $.ajax({
        url: ajaxurl,
        type: "POST",
        data:data,
        timeout: 0,
        success: function(response) {

          // Hide the spinner
          $('#wphealthtracker-spinner-filter-vitals').animate({'opacity':'0'})

          // Split up the response between the returned form html from class-vitals-forms-actual.php, the returned saved user's data, and the tab we're on
          response = JSON.parse(response);
          response[1] = JSON.parse(response[1])

          console.log('Here is ALL Previous data for this user we just retrieved from the server. Response[0] is the full HTML for each day, Response[1] is the actual saved data for each day the HTML is populated with, Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is TODAY\'S Date, and Response[5] is the User\'s WP ID.')
          console.log(response)

          // The div that holds the form for the user to fill out and/or add data to
          var responseViewDiv = $('.wphealthtracker-selected-user-response-view-div');

          // Get response div for the 'View' container and set the html
          responseViewDiv.html(response[0]);

          // Reveal the new entries on the 'View' container
          $('.wphealthtracker-response-form-all-data-row, .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'1'}, 1000)

        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
          console.log(textStatus);
          console.log(jqXHR);
        }
      });
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
  }

// For expanding the previous days' saved data entries
function wphealthtracker_jre_vitals_expand_all_previous_data($){
  $(document).on("click",".wphealthtracker-response-form-all-data-row", function(event){

    // Modify the removal image attribute to ensure that when the user deletes a row, the correct one gets deleted.
    var id = $(this).attr('id');
    $('#'+id).next().find('.wphealthtracker-response-form-row-removal-img').each(function(index){
        $(this).attr('data-idtoremove', '#'+id+' #'+$(this).attr('data-idtoremove'))
    })
    
    var indivForm = $(this).next();
    var viewContainer = $('#wphealthtracker-selected-user-response-id-vitals-view');
    var arrowRotate = $(this).find('.wphealthtracker-indiv-choice-img-rotate');

    // Append the original height to the dom so we can return it to it's initial size.
    if($(this).attr('data-open') != 'true'){
      $(this).attr('data-origheight', viewContainer.height())
      $(this).attr('data-open', 'true')
    }
    
    // If it's not expanded
    if(indivForm.height() == 0){

        // Handle the changing from 'Expand' to 'Minimize'
        $(this).find('#wphealthtracker-expand-minimize-p-enter').animate({
           opacity: 0
        }, {
           duration: 500,
           complete: function() { 
            $(this).text('Minimize');
            $(this).animate({'opacity':'1'});
           } 
        });

        // Animate the reveal of the container and it's top container, and then change them both to 'Auto' to allow for the addition of more rows of data, if the user wants to add more.
        var curHeight = indivForm.height();
        var autoHeight = indivForm.css('height', 'auto').height(); 
        indivForm.height(curHeight); 
        indivForm.stop().animate({
           height: autoHeight
        }, {
           duration: 1000,
           complete: function() { 
            indivForm.css({'height':'auto'})
           } 
        });
        var curContHeight = viewContainer.height();
        viewContainer.stop().animate({
           height: curContHeight+autoHeight
        }, {
           duration: 1000,
           complete: function() { 
            viewContainer.css({'height':'auto'})
           } 
        });

        // Rotate the expand/minimize arrows
        arrowRotate.wphealthtracker_jre_animate_rotate_open_nonajax(180, {
          duration: 1000,
          easing: 'linear',
          complete: function () {},
          step: function () {}
        });


    } else {
      // Return the height to their original values
      indivForm.animate({ height: '0px' }, 1000);
      $(this).find('#wphealthtracker-expand-minimize-p-enter').animate({
         opacity: 0
      }, {
         duration: 500,
         complete: function() { 
          $(this).text('Expand');
          $(this).animate({'opacity':'1'});
         } 
      });

      arrowRotate.wphealthtracker_jre_animate_rotate_open_nonajax(360, {
        duration: 1000,
        easing: 'linear',
        complete: function () {},
        step: function () {}
      });

    }

    event.preventDefault ? event.preventDefault() : event.returnValue = false;
  });
}

// Function to check for, and alert user to, incomplete data when trying to save/update
function wphealthtracker_jre_vitals_incomplete_data(iteratorNum, $){
  // Resetting any possible alert classes
  $('.wphealthtracker-response-form-input-number, .wphealthtracker-response-form-input-time').each(function(){
    $(this).prev().removeClass('wphealthtracker-missing-data-animation')

    // Remove any previous padding-top inline styling completely
    $(this).prev().attr('style', function(i, style){
        return style && style.replace(/padding-top[^;]+;?/g, '');
    });
  })

  // Resetting that alert class on click
  $(document).on("click",".wphealthtracker-response-form-input-number, .wphealthtracker-response-form-input-time", function(event){

    if($(this).prev().hasClass('wphealthtracker-missing-data-animation')){

      var thisId = $(this).attr('id');

      $(this).prev().animate({
             opacity: 0,
          }, 
          {
            duration: 300,
            complete: function() { 
              $('#'+thisId).prev().animate({
                     height: '20px',
                     paddingTop:'0px'
                  }, 
                  {
                    duration: 300,
                    complete: function() { 
                      $('#'+thisId).prev().removeClass('wphealthtracker-missing-data-animation')
                      $('#'+thisId).prev().animate({'opacity':'1'});
                    } 
              });
            } 
      });
    }
  });

  var topParentId = '#wphealthtracker-response-form-data-row-actual-'+iteratorNum;
  returnFlag = false;

  // Loop through each Cholesterol row
  $(topParentId+' .wphealthtracker-response-form-data-row-cholesterol').each(function(){

    // Remove any previous height inline styling completely
    $(this).attr('style', function(i, style){
        return style && style.replace(/height[^;]+;?/g, '');
    });

    var rowId = $(this).attr('id');
    // Loop through each Label/Input div contained within this particular Cholesterol row to check for incomplete entries
    var incompleteCheck = 0;
    var idString = '';
    $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
      var val = $(this).val();
      if(val === '' || val === null || val === undefined){
        incompleteCheck++
        idString = idString+'/'+'#'+$(this).attr('id');
      }
    });
    // Looks like we're missing one of the values to create a full set of data - alert user, highlight and scroll and stop executing
    if(incompleteCheck > 0 && incompleteCheck != 4){
      var explodedIds = idString.split('/'); 
      scrollToId = explodedIds[0];
      for (var i = explodedIds.length - 1; i >= 0; i--) {
        $(explodedIds[i]).prev().addClass('wphealthtracker-missing-data-animation')
      };
      alert(wphealthtrackerPhpVariables.commontrans4)
      $("html, body").animate({ scrollTop: $(explodedIds[1]).offset().top-150 }, 1000);
      returnFlag = true;
      return false;
    }
  });


  // Loop through each blood pressure row
  if(returnFlag){
    return false;
  }
  $(topParentId+' .wphealthtracker-response-form-data-row-bp').each(function(){

    // Remove any previous height inline styling completely
    $(this).attr('style', function(i, style){
        return style && style.replace(/height[^;]+;?/g, '');
    });

    var rowId = $(this).attr('id');
    // Loop through each Label/Input div contained within this particular Blood Pressure row to check for incomplete entries
    var incompleteCheck = 0;
    var idString = '';
    $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
      var val = $(this).val();
      if(val === '' || val === null || val === undefined){
        incompleteCheck++
        idString = idString+'/'+'#'+$(this).attr('id');
      }
    });
    // Looks like we're missing one of the values to create a full set of data - alert user, highlight and scroll and stop executing
    if(incompleteCheck > 0 && incompleteCheck != 3){
      var explodedIds = idString.split('/'); 
      scrollToId = explodedIds[0];
      for (var i = explodedIds.length - 1; i >= 0; i--) {
        $(explodedIds[i]).prev().addClass('wphealthtracker-missing-data-animation')
      };
      alert(wphealthtrackerPhpVariables.commontrans4)
      $("html, body").animate({ scrollTop: $(explodedIds[1]).offset().top-150 }, 1000);
      returnFlag = true;
      return false;
    }
  });


  // Loop through each blood sugar row
  if(returnFlag){
    return false;
  }
  $(topParentId+' .wphealthtracker-response-form-data-row-bs').each(function(){

    // Remove any previous height inline styling completely
    $(this).attr('style', function(i, style){
        return style && style.replace(/height[^;]+;?/g, '');
    });

    var rowId = $(this).attr('id');
    // Loop through each Label/Input div contained within this particular Blood Sugar row to check for incomplete entries.
    var incompleteCheck = 0;
    var idString = '';
    $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
      var val = $(this).val();
      if(val === '' || val === null || val === undefined){
        incompleteCheck++
        idString = idString+'/'+'#'+$(this).attr('id');
      }
    });
    // Looks like we're missing one of the values to create a full set of data - alert user, highlight and scroll and stop executing
    if(incompleteCheck == 1){
      var explodedIds = idString.split('/'); 
      scrollToId = explodedIds[0];
      for (var i = explodedIds.length - 1; i >= 0; i--) {
        $(explodedIds[i]).prev().addClass('wphealthtracker-missing-data-animation')
      };
      alert(wphealthtrackerPhpVariables.commontrans4)
      $("html, body").animate({ scrollTop: $(explodedIds[1]).offset().top-150 }, 1000);
      returnFlag = true;
      return false;
    }
  });

  // Loop through each blood oxygen row
  if(returnFlag){
    return false;
  }
  $(topParentId+' .wphealthtracker-response-form-data-row-bo').each(function(){

    // Remove any previous height inline styling completely
    $(this).attr('style', function(i, style){
        return style && style.replace(/height[^;]+;?/g, '');
    });

    var rowId = $(this).attr('id');
    // Loop through each Label/Input div contained within this particular Blood Oxygen row to check for incomplete entries.
    var incompleteCheck = 0;
    var idString = '';
    $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
      var val = $(this).val();
      if(val === '' || val === null || val === undefined){
        incompleteCheck++
        idString = idString+'/'+'#'+$(this).attr('id');
      }
    });
    // Looks like we're missing one of the values to create a full set of data - alert user, highlight and scroll and stop executing
    if(incompleteCheck == 1){
      var explodedIds = idString.split('/'); 
      scrollToId = explodedIds[0];
      for (var i = explodedIds.length - 1; i >= 0; i--) {
        $(explodedIds[i]).prev().addClass('wphealthtracker-missing-data-animation')
      };
      alert(wphealthtrackerPhpVariables.commontrans4)
      $("html, body").animate({ scrollTop: $(explodedIds[1]).offset().top-150 }, 1000);
      returnFlag = true;
      return false;
    }
  });


  // Loop through each Body Temperature row
  if(returnFlag){
    return false;
  }
  $(topParentId+' .wphealthtracker-response-form-data-row-bt').each(function(){

    // Remove any previous height inline styling completely
    $(this).attr('style', function(i, style){
        return style && style.replace(/height[^;]+;?/g, '');
    });

    var rowId = $(this).attr('id');
    // Loop through each Label/Input div contained within this particular Blood Oxygen row to check for incomplete entries.
    var incompleteCheck = 0;
    var idString = '';
    $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
      var val = $(this).val();
      if(val === '' || val === null || val === undefined){
        incompleteCheck++
        idString = idString+'/'+'#'+$(this).attr('id');
      }
    });
    // Looks like we're missing one of the values to create a full set of data - alert user, highlight and scroll and stop executing
    if(incompleteCheck == 1){
      var explodedIds = idString.split('/'); 
      scrollToId = explodedIds[0];
      for (var i = explodedIds.length - 1; i >= 0; i--) {
        $(explodedIds[i]).prev().addClass('wphealthtracker-missing-data-animation')
      };
      alert(wphealthtrackerPhpVariables.commontrans4)
      $("html, body").animate({ scrollTop: $(explodedIds[1]).offset().top-150 }, 1000);
      returnFlag = true;
      return false;
    }
  });

  // Loop through each Heart Rate row
  if(returnFlag){
    return false;
  }
  $(topParentId+' .wphealthtracker-response-form-data-row-hr').each(function(){

    // Remove any previous height inline styling completely
    $(this).attr('style', function(i, style){
        return style && style.replace(/height[^;]+;?/g, '');
    });

    var rowId = $(this).attr('id');
    // Loop through each Label/Input div contained within this particular Blood Oxygen row to check for incomplete entries.
    var incompleteCheck = 0;
    var idString = '';
    $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
      var val = $(this).val();
      if(val === '' || val === null || val === undefined){
        incompleteCheck++
        idString = idString+'/'+'#'+$(this).attr('id');
      }
    });
    // Looks like we're missing one of the values to create a full set of data - alert user, highlight and scroll and stop executing
    if(incompleteCheck == 1){
      var explodedIds = idString.split('/'); 
      scrollToId = explodedIds[0];
      for (var i = explodedIds.length - 1; i >= 0; i--) {
        $(explodedIds[i]).prev().addClass('wphealthtracker-missing-data-animation')
      };
      alert(wphealthtrackerPhpVariables.commontrans4)
      $("html, body").animate({ scrollTop: $(explodedIds[1]).offset().top-150 }, 1000);
      returnFlag = true;
      return false;
    }
  });


  if(returnFlag){
    return false;
  } else {
    return true;
  }

}


function wphealthtracker_jre_vitals_save_vitals_data($){
  $(document).on("click",".wphealthtracker-save-stuff-button", function(event){

    var iteratorNum = $(this).attr('data-parent-id-num');

    // Check for incomplete data
    var proceed = wphealthtracker_jre_vitals_incomplete_data(iteratorNum, $);

    // If no errors were encountered in wphealthtracker_jre_vitals_incomplete_data(iteratorNum), proceed...
    if(proceed){

      var topParentId = '#wphealthtracker-response-form-data-row-actual-'+iteratorNum;
      var topParentDomElem = $(topParentId);

      // Reset response div css
      responseDiv = topParentDomElem.find('#wphealthtracker-response-message-vitals-div');
      responseDiv.animate({opacity:0, height:0}, 300);

      // Turn on spinner...
      topParentDomElem.find('#wphealthtracker-spinner-save-vitals').animate({'opacity':1}, 300); 


      // Grab weight data
      var weight = $(topParentId+' #wphealthtracker-response-form-input-number-weight').val();
      var weightMeasurement = $(topParentId+' #wphealthtracker-response-form-select-weight').val();
      var finalWeight = weight+';'+weightMeasurement;

      // Building Cholesterol data
      var cholLdl = $(topParentId+' #wphealthtracker-response-form-input-number-ldl-'+iteratorNum).val();
      var cholHdl = $(topParentId+' #wphealthtracker-response-form-input-number-hdl-'+iteratorNum).val();
      var cholTrig = $(topParentId+' #wphealthtracker-response-form-input-number-tri-'+iteratorNum).val();
      var cholTotal = $(topParentId+' #wphealthtracker-response-form-input-number-tot-'+iteratorNum).val();
      var finalCholesterol = cholLdl+','+cholHdl+','+cholTrig+','+cholTotal;

      // Building Blood Pressure data
      var finalBp = '';
      // Loop through each blood pressure row
      $(topParentId+' .wphealthtracker-response-form-data-row-bp').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular Blood Pressure row
        $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
          finalBp = finalBp+$(this).val()+'/';
        });
        // Trim off the last '/'
        finalBp = finalBp.slice(0, -1);
        finalBp = finalBp+',';
      });
      // Trim off the last ','
      finalBp = finalBp.slice(0, -1);


      // Building Blood Sugar data
      var finalBs = '';
      // Loop through each blood sugar row
      $(topParentId+' .wphealthtracker-response-form-data-row-bs').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular Blood Pressure row
        var inputsValue = '';
        $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
          inputsValue = $(this).val()+'-'+inputsValue;
        });

        // Split by the - to insert the Select value
        var tempSplit = inputsValue.split('-');
        var selectValue = $('#'+rowId+' .wphealthtracker-response-form-div-row select').val()
        finalBs = finalBs+tempSplit[1]+'-'+selectValue+'-'+tempSplit[0]+',';
      });
      // Trim off the last ','
      finalBs = finalBs.slice(0, -1);


      // Building Blood Oxygen data
      var finalBo = '';
      // Loop through each blood oxygen row
      $(topParentId+' .wphealthtracker-response-form-data-row-bo').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular Blood Oxygen row
        var inputsValue = '';
        $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
          inputsValue = $(this).val()+'/'+inputsValue;
        });

        // Split by the / to insert the Select value
        var tempSplit = inputsValue.split('/');
        var selectValue = $('#'+rowId+' .wphealthtracker-response-form-div-row select').val()
        finalBo = finalBo+tempSplit[1]+'/'+selectValue+'/'+tempSplit[0]+',';
      });
      // Trim off the last ','
      finalBo = finalBo.slice(0, -1);


      // Building Body Temperature data
      var finalBt = '';
      // Loop through each Body temp row
      $(topParentId+' .wphealthtracker-response-form-data-row-bt').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular Blood Oxygen row
        var inputsValue = '';
        $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
          inputsValue = $(this).val()+'/'+inputsValue;
        });

        // Split by the / to insert the Select value
        var tempSplit = inputsValue.split('/');
        var selectValue = $('#'+rowId+' .wphealthtracker-response-form-div-row select').val()
        finalBt = finalBt+tempSplit[1]+'/'+selectValue+'/'+tempSplit[0]+',';
      });
      // Trim off the last ','
      finalBt = finalBt.slice(0, -1);


      // Building Heart Rate data
      var finalHr = '';
      // Loop through each Heart Rate row
      $(topParentId+' .wphealthtracker-response-form-data-row-hr').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular Heart Rate row
        var inputsValue = '';
        $('#'+rowId+' .wphealthtracker-response-form-div-row input').each(function(index){
          finalHr = finalHr+$(this).val()+'/';
        });
        // Trim off the last '/'
        finalHr = finalHr.slice(0, -1);
        finalHr = finalHr+',';
      });
      // Trim off the last ','
      finalHr = finalHr.slice(0, -1);


      // Building Image data
      var finalImg = '';
      // Loop through each Image row
      $(topParentId+' .wphealthtracker-response-form-data-row-img').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular Image row
        var inputsValue = '';
        finalImg = finalImg+$('#'+rowId+' .wphealthtracker-response-form-div-row input').val()+','
      });
      // Trim off the last ','
      finalImg = finalImg.slice(0, -1);


       // Building File data
      var finalFiles = '';
      // Loop through each Image row
      $(topParentId+' .wphealthtracker-response-form-data-row-file').each(function(){
        var rowId = $(this).attr('id');
        // Loop through each Label/Input div contained within this particular File row
        var inputsValue = '';
        finalFiles = finalFiles+$('#'+rowId+' .wphealthtracker-response-form-div-row input').val()+','
      });
      // Trim off the last ','
      finalFiles = finalFiles.slice(0, -1);


      // Preparing Ajax data to send to server and save
      var wpUserId = $('#wphealthtracker-user-dropdown-select-vitals').val();
      var humanDate = $(this).attr('data-human-date');
      var firstName = $(this).attr('data-firstname');
      var lastName = $(this).attr('data-lastname');
      var data = {
          'action': 'wphealthtracker_jre_save_vitals_data_action',
          'security': wphealthtrackerPhpVariables.vitalsnonce3,
          'wpUserId':wpUserId,
          'firstName':firstName,
          'lastName':lastName,
          'humanDate':humanDate,
          'finalWeight':finalWeight,
          'finalCholesterol':finalCholesterol,
          'finalBp':finalBp,
          'finalBs':finalBs,
          'finalBo':finalBo,
          'finalBt':finalBt,
          'finalHr':finalHr,
          'finalImg':finalImg,
          'finalFiles':finalFiles,
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the vitals tab:');
        console.log(data);

        var request = $.ajax({
          url: ajaxurl,
          type: "POST",
          data:data,
          timeout: 0,
          success: function(response) {

            console.log('This is what we received back from the Server after trying to Insert/Update some daily data. Response[0] is either how many rows were modified, or the DB error message. Response[1] is the type of $wpdb function. Response[2] is Humandate. Response[3] is WP User ID. Response[4] is the $wpdb->prepared Query. Response[5] is the list of Transients that were deleted. Response[6] is the actual array of data we tried to insert/update with.')
            response = JSON.parse(response);
            response[6] = JSON.parse(response[6]);
            console.log(response);

            // Turn off spinner...
            topParentDomElem.find('#wphealthtracker-spinner-save-vitals').animate({'opacity':0});

            // We successfully executed our DB query - doesn't mean anything was actually changed though - we could have effected zero rows - still, no errors so we're calling it good.
            var responsetype = false;
            var responseHtml = '';
            if(response[0] === 1 || response[0] === 0){

              // Flag to determine what height to animate reponse div to
              responsetype = true;

              // Modify the response based on type of query
              if(response[1] == 'insert'){
                responseHtml = '<img class="wphealthtracker-ajax-return-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'happy.svg" /><p class="wphealthtracker-success-title">'+wphealthtrackerPhpVariables.ajaxreturn1+'</p><p class="wphealthtracker-success-description">'+wphealthtrackerPhpVariables.ajaxreturn3+' <span class="wphealthtracker-success-humandate">'+humanDate+'</span>.</p><p class="wphealthtracker-success-advert">'+wphealthtrackerPhpVariables.ajaxreturn4+' <a href="">'+wphealthtrackerPhpVariables.ajaxreturn5+'</a> '+wphealthtrackerPhpVariables.ajaxreturn6+'</p><p class="wphealthtracker-success-reviews">'+wphealthtrackerPhpVariables.ajaxreturn7+' <a href="">'+wphealthtrackerPhpVariables.ajaxreturn8+'</a> '+wphealthtrackerPhpVariables.ajaxreturn9+' <a href="">'+wphealthtrackerPhpVariables.ajaxreturn10+'</a>!</p>';
              }

              if(response[1] == 'update'){
                responseHtml = '<img class="wphealthtracker-ajax-return-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'happy.svg" /><p class="wphealthtracker-success-title">'+wphealthtrackerPhpVariables.ajaxreturn1+'</p><p class="wphealthtracker-success-description">'+wphealthtrackerPhpVariables.ajaxreturn2+' <span class="wphealthtracker-success-humandate">'+humanDate+'</span>.</p><p class="wphealthtracker-success-advert">'+wphealthtrackerPhpVariables.ajaxreturn4+' <a href="">'+wphealthtrackerPhpVariables.ajaxreturn5+'</a> '+wphealthtrackerPhpVariables.ajaxreturn6+'</p><p class="wphealthtracker-success-reviews">'+wphealthtrackerPhpVariables.ajaxreturn7+' <a href="">'+wphealthtrackerPhpVariables.ajaxreturn8+'</a> '+wphealthtrackerPhpVariables.ajaxreturn9+' <a href="">'+wphealthtrackerPhpVariables.ajaxreturn10+'</a>!</p>';
              }
            } else {
              // Create the Error messaging here - print out the mysql error for user to report back with
              responseHtml = '<img class="wphealthtracker-ajax-return-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'shocked.svg" /><p class="wphealthtracker-success-title">'+wphealthtrackerPhpVariables.ajaxreturn11+'</p><p class="wphealthtracker-success-description">'+wphealthtrackerPhpVariables.ajaxreturn12+'...</p><p class="wphealthtracker-success-advert">'+wphealthtrackerPhpVariables.ajaxreturn13+' <a href="mailto:techsupport@wphealthtracker.com">TechSupport@WPHealthTracker.com</a>:  <textarea class="wphealthtracker-ajax-error-textarea">'+response[0]+'</textarea></p><p class="wphealthtracker-success-reviews">'+wphealthtrackerPhpVariables.ajaxreturn14+'!</p>';
            }

            // Add the response HTML and animate the height...
            responseDiv = topParentDomElem.find('#wphealthtracker-response-message-vitals-div');
            responseDiv.html(responseHtml);

            // Animate to one height if db entry was successful, otherwise animate to different height.
            if(responsetype){
              responseDiv.animate({'height':'175px','opacity':'1'}, 500)
            } else {
              responseDiv.animate({'height':'290px','opacity':'1'}, 500)
            }



          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);
          }
        });

      console.log(finalWeight)
      console.log(finalCholesterol)
      console.log(finalBp)
      console.log(finalBs)
      console.log(finalBo)
      console.log(finalBt)
      console.log(finalHr)
      console.log(finalImg)
      console.log(finalFiles)

    }
  });

}