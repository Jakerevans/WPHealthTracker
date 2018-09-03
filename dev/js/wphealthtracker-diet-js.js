/**
 * JavaScript Functions - wphealthtracker-diet-js.js
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
    wphealthtracker_jre_diet_selecteduser_diet_enter();

    // For populating the 'View' container with the selected user's saved data and/or the blank form
    wphealthtracker_jre_diet_selecteduser_diet_view();

    // For adding a row of data
    wphealthtracker_jre_diet_add_row_of_data();

    // For cloning a row of data
    wphealthtracker_jre_diet_clone_row_of_data()

    // For deleting a row of data
    wphealthtracker_jre_diet_delete_row_of_data();

    // For expanding the previous days' saved data entries
    wphealthtracker_jre_diet_expand_all_previous_data();

    // For grabbing and outputting data when the 'Filter' button is clicked...
    wphealthtracker_jre_diet_selecteduser_diet_filter_data();

    // For saving the Diet data
    wphealthtracker_jre_diet_save_diet_data();

  /* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


  // Function to simply get a new row of HTML
  function wphealthtracker_jre_diet_get_row_of_data_html(key, loopNum, date, idNum, foodNum, data){

    if(data == null || data == undefined || data.length == 0){
      data = ['','','','','','','','','','','','','','','',''];
    }

    // Build <select> options
    var calOptions = '';
    var proteinOptions = ''; 

    switch(data[14]) {
      case wphealthtrackerPhpVariables.diettrans9:
          calOptions = '<option selected>'+wphealthtrackerPhpVariables.diettrans9+'</option><option>'+wphealthtrackerPhpVariables.diettrans10+'</option><option>'+wphealthtrackerPhpVariables.diettrans11+'</option>';
        break;
      case wphealthtrackerPhpVariables.diettrans10:
          calOptions = '<option>'+wphealthtrackerPhpVariables.diettrans9+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans10+'</option><option>'+wphealthtrackerPhpVariables.diettrans11+'</option>';
        break;
      case wphealthtrackerPhpVariables.diettrans11:
          calOptions = '<option>'+wphealthtrackerPhpVariables.diettrans9+'</option><option>'+wphealthtrackerPhpVariables.diettrans10+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans11+'</option>';
        break;
      default:
        calOptions = '<option>'+wphealthtrackerPhpVariables.diettrans9+'</option><option>'+wphealthtrackerPhpVariables.diettrans10+'</option><option>'+wphealthtrackerPhpVariables.diettrans11+'</option>';
    }



    switch(data[15]) {
      case wphealthtrackerPhpVariables.commontrans37:
          proteinOptions ='<option selected>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
       case wphealthtrackerPhpVariables.diettrans13:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.diettrans14:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans14+'</option><option >'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.diettrans15:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.diettrans16:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.diettrans17:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.diettrans18:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.diettrans19:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option selected>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
        case wphealthtrackerPhpVariables.commontrans38:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
          break;
      default:
          proteinOptions ='<option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.diettrans13+'</option><option>'+wphealthtrackerPhpVariables.diettrans14+'</option><option>'+wphealthtrackerPhpVariables.diettrans15+'</option><option>'+wphealthtrackerPhpVariables.diettrans16+'</option><option>'+wphealthtrackerPhpVariables.diettrans17+'</option><option>'+wphealthtrackerPhpVariables.diettrans18+'</option><option>'+wphealthtrackerPhpVariables.diettrans19+'</option><option>'+wphealthtrackerPhpVariables.commontrans38+'</option>';
    } 


    return '<div class="wphealthtracker-response-form-all-data-row-parent" id="wphealthtracker-response-form-all-data-row-parent-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-food-all-data-row" id="wphealthtracker-response-form-all-data-row-1" data-open="true" style="opacity: 1;"><div class="wphealthtracker-response-form-diet-shaded-container-title"><h3><img class="wphealthtracker-icon-h2-image-diet" data-label="diet-weight" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'groceries.svg"> '+wphealthtrackerPhpVariables.diettrans2+' #<span class="wphealthtracker-food-item-span">'+foodNum+'</span> - '+date+'</h3></div><div class="wphealthtracker-expand-minimize-div-all-data"><p class="wphealthtracker-expand-minimize-p" id="wphealthtracker-expand-minimize-p-enter" style="opacity: 1;">'+wphealthtrackerPhpVariables.commontrans39+'</p><img src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'rotate.svg" class="wphealthtracker-indiv-choice-img-rotate" id="wphealthtracker-indiv-choice-img-rotate-enter" style="transform: rotate(180deg);"></div></div><div class="wphealthtracker-response-form-diet-shaded-container" id="wphealthtracker-response-form-diet-shaded-container-'+key+'-'+loopNum+'" style="height:auto;"><div class="wphealthtracker-response-form-data-row-food-inner-cont"><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans2+'</p><input value="'+data[0]+'"  type="text" class="wphealthtracker-response-form-input-text wphealthtracker-response-form-input-text-food" id="wphealthtracker-response-form-input-text-food-name-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans35+'</p><input value="'+data[1]+'" type="text" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-food-category-'+key+'-'+loopNum+'"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans3+'</p><input value="'+data[2]+'" type="time" class="wphealthtracker-response-form-input-time wphealthtracker-response-form-input-time-food" id="wphealthtracker-response-form-input-time-food-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div></div></div><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans8+'</p><input value="'+data[3]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-energy-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-energy-measurement-'+key+'-'+loopNum+'">'+calOptions+'</select></div></div></div><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans12+'</p><input value="'+data[4]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-protein-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans36+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-protein-measurement-'+key+'-'+loopNum+'">'+proteinOptions+'</select></div></div></div><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans4+'</p><input value="'+data[5]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-fat-total-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans5+'</p><input value="'+data[6]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-fat-sat-'+key+'-'+loopNum+'"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans6+'</p><input value="'+data[7]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-fat-mono-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans7+'</p><input value="'+data[8]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-fat-poly-'+key+'-'+loopNum+'"/></div></div></div><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans20+'</p><input value="'+data[9]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-carbs-total-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans21+'</p><input value="'+data[10]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-carbs-fiber-'+key+'-'+loopNum+'"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.diettrans22+'</p><input value="'+data[11]+'" type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-carbs-sugar-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/></div></div></div><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans28+'</p><input value="'+data[12]+'" type="text" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-image-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" placeholder="'+wphealthtrackerPhpVariables.commontrans28+'"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans29+'</p><button class="wphealthtracker-response-form-input-button wphealthtracker-response-form-input-button-image-upload" id="wphealthtracker-response-form-input-button-image-upload-'+key+'-'+loopNum+'">'+wphealthtrackerPhpVariables.commontrans30+'</button></div></div></div><div class="wphealthtracker-response-form-data-row-food" id="wphealthtracker-response-form-food-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-diet-row-div-cal-pro"><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans32+'</p><input value="'+data[13]+'" type="text" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-file-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" placeholder="'+wphealthtrackerPhpVariables.commontrans32+'"/></div><div class="wphealthtracker-response-form-diet-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="diet-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans33+'</p><button class="wphealthtracker-response-form-input-button wphealthtracker-response-form-input-button-file-upload" id="wphealthtracker-response-form-input-button-file-upload-'+key+'-'+loopNum+'">'+wphealthtrackerPhpVariables.commontrans34+'</button></div></div></div><div class="wphealthtracker-response-form-food-row-duplicate-div" data-date="'+date+'" data-key="'+key+'" data-loopnum="'+loopNum+'" data-idnum="'+loopNum+'" data-id-to-update="'+loopNum+'" data-id-to-add-after="wphealthtracker-response-form-all-data-row-parent-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans40+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'duplicate.svg" /></div><div class="wphealthtracker-response-form-food-row-removal-div" data-id-to-update="'+idNum+'" data-id-to-remove="wphealthtracker-response-form-all-data-row-parent-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div></div>';
  }

  function wphealthtracker_jre_diet_add_row_of_data(){
    $(document).on("click",".wphealthtracker-response-form-food-row-addition-div", function(event){

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until function is complete, to ensure IDs and such don't get mixed up
      $('.wphealthtracker-response-form-food-row-duplicate-div, .wphealthtracker-response-form-food-row-removal-div, .wphealthtracker-response-form-food-row-addition-div').css({'pointer-events':'none'})

      // ID of element to add row of data after
      var idToAddAfter = $(this).attr('data-id-to-add-after');
      var idNum = $(this).attr('data-idnum');
      var loopNum = $(this).attr('data-loopnum');
      var key = $(this).attr('data-key');
      var newRow = '';
      var newIdToAddAfter = '';
      var date = $(this).attr('data-date');
      var foodNum = ($(this).parent().find('.wphealthtracker-response-form-all-data-row-parent').length)+1

      var origKey = key;
      key = parseInt(key)+1;
      newIdToAddAfter = 'wphealthtracker-response-form-addfood-row-div-'+key+'-'+loopNum;

      newRow = wphealthtracker_jre_diet_get_row_of_data_html(key, loopNum, date, idNum, foodNum, null);

      // Update dom values of the Add New Row Image
      $(this).attr('data-key', key);
      $(this).attr('data-foodnum', (foodNum+1));

      // Actually insert new row
      $(newRow).insertBefore($(this))
      var newIdRef = $('#wphealthtracker-response-form-diet-shaded-container-'+key+'-'+loopNum);
      // Get Auto Height
      var autoHeight = newIdRef.css('height', 'auto').height(); 
      // Reset to Default Height
      newIdRef.height(0); 
      // Animate to Auto Height
      newIdRef.stop().animate({
         height: autoHeight+50,
         opacity:1
      }, {
         duration: 1000,
      });

      // Enable the 'Add Food Item', 'Clone', and 'Delete' actions again
      $('.wphealthtracker-response-form-food-row-duplicate-div, .wphealthtracker-response-form-food-row-removal-div, .wphealthtracker-response-form-food-row-addition-div').css({'pointer-events':'all'})

    });
  }

  function wphealthtracker_jre_diet_clone_row_of_data(){
    $(document).on("click",".wphealthtracker-response-form-food-row-duplicate-div", function(event){

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until function is complete, to ensure IDs and such don't get mixed up
      $('.wphealthtracker-response-form-food-row-duplicate-div, .wphealthtracker-response-form-food-row-removal-div, .wphealthtracker-response-form-food-row-addition-div').css({'pointer-events':'none'})

      // ID of element to add row of data after
      var idToAddAfter = $(this).attr('data-id-to-add-after');
      var numToUpdate = $(this).attr('data-id-to-update');
      var idNum = $(this).attr('data-idnum');
      var loopNum = $(this).attr('data-loopnum');
      var key = $(this).attr('data-key');
      var newRow = '';
      var newIdToAddAfter = '';
      var date = $(this).attr('data-date');

      // Update the Row addition div
      var idToUpdate = 'wphealthtracker-response-form-food-row-addition-div-'+numToUpdate;
      var element = $('#'+idToUpdate);
      element.attr('data-key', parseInt(element.attr('data-key'))+1)
      element.attr('data-loopnum', parseInt(element.attr('data-loopnum'))+1)

      var origKey = key;
      key = parseInt(key)+1;
      newIdToAddAfter = 'wphealthtracker-response-form-addfood-row-div-'+key+'-'+loopNum;

      // Now work on getting all values
      var inputValues = [];
      $('#'+idToAddAfter).find('input').each(function(){
        inputValues.push($(this).val());
      })
      var selectValues = [];
      $('#'+idToAddAfter).find('select').each(function(){
        selectValues.push($(this).val());
      })
      inputValues = inputValues.concat(selectValues);
      console.log(inputValues)

      //wphealthtrackerPhpVariables.diettrans20

      newRow = wphealthtracker_jre_diet_get_row_of_data_html(key, loopNum, date, idNum, '', inputValues);

      // Actually insert new row
      $(newRow).insertAfter($('#'+idToAddAfter))

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until animation is complete, to ensure IDs and such don't get mixed up

      // Animate the Food Number out, change it, then animate back in
      $('#'+idToAddAfter).parent().find('.wphealthtracker-food-item-span').each(function(index){
        $(this).animate({
          opacity: 0,
        },{
          duration: 100,
          complete: function() { 
             $(this).text(index+1);
             $(this).animate({'opacity':'1'}, 100)
          }
        })
      })


      var newIdRef = $('#wphealthtracker-response-form-diet-shaded-container-'+key+'-'+loopNum);
      // Get Auto Height
      var autoHeight = newIdRef.css('height', 'auto').height(); 
      // Reset to Default Height
      newIdRef.height(0); 
      // Animate to Auto Height
      newIdRef.stop().animate({
         height: autoHeight+50,
         opacity:1
      }, {
         duration: 1000,
      });

      // Enable the 'Add Food Item', 'Clone', and 'Delete' actions again
      $('.wphealthtracker-response-form-food-row-duplicate-div, .wphealthtracker-response-form-food-row-removal-div, .wphealthtracker-response-form-food-row-addition-div').css({'pointer-events':'all'})

    });
  }

  function wphealthtracker_jre_diet_delete_row_of_data(){

    $(document).on("click",".wphealthtracker-response-form-food-row-removal-div", function(event){

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until function is complete, to ensure IDs and such don't get mixed up
      $('.wphealthtracker-response-form-food-row-duplicate-div, .wphealthtracker-response-form-food-row-removal-div, .wphealthtracker-response-form-food-row-addition-div').css({'pointer-events':'none'})

      // The ID to remove
      var idToRemove = $(this).attr('data-id-to-remove');
      var numToUpdate = $(this).attr('data-id-to-update');


      var idToUpdate = 'wphealthtracker-response-form-food-row-addition-div-'+numToUpdate;
      var element = $('#'+idToUpdate);

      if(parseInt(element.attr('data-key')) > 0){
        element.attr('data-key', parseInt(element.attr('data-key'))-1)
      }

      if(parseInt(element.attr('data-loopnum')) > 0){
        element.attr('data-loopnum', parseInt(element.attr('data-loopnum'))-1)
      }

      // Animating the ID away, then actually removing from DOM
      $('#'+idToRemove).animate({
           opacity: 0,
           height:0
        }, 
        {
          duration: 500,
          complete: function() { 

            // Remove the element from Dom, then re-number the Food Itmes for this day
            var parentElement = $('#'+idToRemove).parent();
            $('#'+idToRemove).remove();

            // Animate the Food Number out, change it, then animate back in
            parentElement.find('.wphealthtracker-food-item-span').each(function(index){
              $(this).animate({
                opacity: 0,
              },{
                duration: 100,
                complete: function() { 
                   $(this).text(index+1);
                   $(this).animate({'opacity':'1'}, 100)
                }
              })
            })

            // Enable the 'Add Food Item', 'Clone', and 'Delete' actions again
            $('.wphealthtracker-response-form-food-row-duplicate-div, .wphealthtracker-response-form-food-row-removal-div, .wphealthtracker-response-form-food-row-addition-div').css({'pointer-events':'all'})

          } 
      });
    });
  }


  // For populating the tab with the selected user's saved data and/or the blank form
  function wphealthtracker_jre_diet_selecteduser_diet_enter(){
    $(document).on("change","#wphealthtracker-user-dropdown-select-diet", function(event){

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
            $('#wphealthtracker-expansion-div-diet-enter').trigger('click')
            
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
        var wpuserid = $('#wphealthtracker-user-dropdown-select-diet').val();

        // Get the minutes offset from UTC, representing the user's time zone
        var offset = new Date().getTimezoneOffset();

        var data = {
          'action': 'wphealthtracker_jre_selecteduser_diet_enter_action',
          'security': wphealthtrackerPhpVariables.dietnonce1,
          'wpuserid':wpuserid,
          'offset':offset
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the "Enter" container on the Diet tab:');
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

            // Split up the response between the returned form html from class-diet-forms-actual.php, the returned saved user's data, and the tab we're on
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
      var value = $('#wphealthtracker-user-dropdown-select-diet').val();
      if(value != 'default' && value != null){
        $('#wphealthtracker-user-dropdown-select-diet').val(value).trigger('change');
      }
    }, 100)
  }


  // For populating the tab with the selected user's saved data and/or the blank form
  function wphealthtracker_jre_diet_selecteduser_diet_view(){
    $(document).on("change","#wphealthtracker-user-dropdown-select-diet", function(event){

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
           height: autoHeight+50
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
            $('#wphealthtracker-expansion-div-diet-enter').trigger('click')
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
        var wpuserid = $('#wphealthtracker-user-dropdown-select-diet').val();

        // Get the minutes offset from UTC, representing the user's time zone
        var offset = new Date().getTimezoneOffset();

        var data = {
          'action': 'wphealthtracker_jre_selecteduser_diet_view_action',
          'security': wphealthtrackerPhpVariables.dietnonce2,
          'wpuserid':wpuserid,
          'offset':offset
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the "View" container on the Diet tab:');
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

            // Split up the response between the returned form html from class-diet-forms-actual.php, the returned saved user's data, and the tab we're on
            response = JSON.parse(response);
            response[1] = JSON.parse(response[1])

            console.log('Here is ALL Previous data for this user we just retrieved from the server. Response[0] is the full HTML for each day, Response[1] is the actual saved data for each day the HTML is populated with, Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is TODAY\'S Date, and Response[5] is the User\'s WP ID.')
            console.log(response)

            // Get response div for the 'View' container and set the html
            responseViewDiv.html(response[0]);

            // Call the function that will take the User's saved data, create an array of Food Items, and use that array to populate the Autocomplete for the Food item and all associated inputs
            wphealthtracker_jre_diet_autocomplete(response[1]);

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


  // Call the function that will take the User's saved data, create an array of Food Items, and use that array to populate the Autocomplete for the Food item and all associated inputs
  function wphealthtracker_jre_diet_autocomplete(data){
    console.log('YOYO')
    console.log(data)

    // Build the food string that contains all food items entered for the last 7 days
    var massiveFoodString = '';
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
          massiveFoodString += data[key].foodstring+',';
        }
    }

    // Now split by each day
    var massiveFoodArray = massiveFoodString.split(',');
    var massiveFoodNameArray = [];
    var massiveFoodDataArray = [];
    for (var i = 0; i < massiveFoodArray.length; i++) {
      var tempArray = massiveFoodArray[i].split(';')

      // If value doesn't already exist and it's not blank, add in array
      if(massiveFoodNameArray.indexOf(tempArray[0]) == -1 && tempArray[0] != ''){
        massiveFoodNameArray.push(tempArray[0]);
        massiveFoodDataArray.push(tempArray[1]+';'+tempArray[2]+';'+tempArray[3]+';'+tempArray[4]+';'+tempArray[5]+';'+tempArray[6]+';'+tempArray[7]+';'+tempArray[8]+';'+tempArray[9]+';'+tempArray[10]+';'+tempArray[11]+';'+tempArray[12]+';'+tempArray[13]+';'+tempArray[14]+';'+tempArray[15])

      }
    };

    // Now seed all the Food Item Inputs with autocomplete data from the past 7 days
    $(document).on("focus",".wphealthtracker-response-form-input-text-food",function(e) {
      // If autocomplete hasn't been added to the input yet (if it's been added dynamically)
      if ( !$(this).data("autocomplete") ) {
        $(this).autocomplete({source:massiveFoodNameArray}, {
          minChars: 1,
          width: 402,
          matchContains: "word",
          autoFill: true,
          select: function (event, ui) {

            // See which key's value in the massiveFoodNameArray matches the choosen Autocomplete value, then use that key to get it's associated data, and fill in the inputs
            for (var i=0; i<massiveFoodNameArray.length; i++){
              if (massiveFoodNameArray[i] == ui.item.label){    

                var splittedData = massiveFoodDataArray[i].split(';')

                // Loop through each input in the individual food item
                $(this).parent().parent().parent().parent().find('input').each(function(index){
                  if(index == 1){
                    $(this).val(splittedData[0])
                  }

                  if(index == 2){
                    $(this).val(splittedData[1])
                  }

                  if(index == 3){
                    $(this).val(splittedData[2])
                  }

                  if(index == 4){
                    $(this).val(splittedData[4])
                  }

                  if(index == 5){
                    $(this).val(splittedData[6])
                  }

                  if(index == 6){
                    $(this).val(splittedData[7])
                  }

                  if(index == 7){
                    $(this).val(splittedData[8])
                  }

                  if(index == 8){
                    $(this).val(splittedData[9])
                  }

                  if(index == 9){
                    $(this).val(splittedData[10])
                  }

                  if(index == 10){
                    $(this).val(splittedData[11])
                  }

                  if(index == 11){
                    $(this).val(splittedData[12])
                  }

                  if(index == 12){
                    $(this).val(splittedData[13])
                  }

                  if(index == 13){
                    $(this).val(splittedData[14])
                  }
                })              
              }
            }
          }
        });
      }
    });
  }

  // For grabbing and outputting data when the 'Filter' button is clicked...
  function wphealthtracker_jre_diet_selecteduser_diet_filter_data(){
    $(document).on("click","#wphealthtracker-view-filter-button-diet-id", function(event){

      // Animate the spinner
      $('#wphealthtracker-spinner-filter-diet').animate({'opacity':'1'})

      // Hide the current entries on the 'View' container
      $('.wphealthtracker-response-form-food-all-data-row, .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'0'})


      // Get drop-down value
      var filterVal = $('#wphealthtracker-view-search-select').val();

      // Get the user
      var wpuserid = $('#wphealthtracker-user-dropdown-select-diet').val();

      var data = {
        'action': 'wphealthtracker_jre_selecteduser_diet_filter_data_action',
        'security': wphealthtrackerPhpVariables.dietnonce4,
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
          $('#wphealthtracker-spinner-filter-diet').animate({'opacity':'0'})

          // Split up the response between the returned form html from class-diet-forms-actual.php, the returned saved user's data, and the tab we're on
          response = JSON.parse(response);
          response[1] = JSON.parse(response[1])

          console.log('Here is ALL Previous data for this user we just retrieved from the server. Response[0] is the full HTML for each day, Response[1] is the actual saved data for each day the HTML is populated with, Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is TODAY\'S Date, and Response[5] is the User\'s WP ID.')
          console.log(response)

          // The div that holds the form for the user to fill out and/or add data to
          var responseViewDiv = $('.wphealthtracker-selected-user-response-view-div');

          // Get response div for the 'View' container and set the html
          responseViewDiv.html(response[0]);

          // Reveal the new entries on the 'View' container
          $('.wphealthtracker-response-form-food-all-data-row, .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'1'}, 1000)

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
  function wphealthtracker_jre_diet_expand_all_previous_data(){
    $(document).on("click",".wphealthtracker-response-form-food-all-data-row", function(event){

      var section = $(this).attr('data-section');

      // Modify the removal image attribute to ensure that when the user deletes a row, the correct one gets deleted.
      var id = $(this).attr('id');
      $('#'+id).next().find('.wphealthtracker-response-form-row-removal-img').each(function(index){
          $(this).attr('data-idtoremove', '#'+id+' #'+$(this).attr('data-idtoremove'))
      })
      
      var indivForm = $(this).next();
      var viewContainer = $('#wphealthtracker-selected-user-response-id-diet-view');
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

          // If we're not expanding one of the inner food items for a previous day, and just expanding the day itself, don't add additional 50px of height
          if(indivForm.attr('class') != 'wphealthtracker-response-form-diet-shaded-container'){
            autoHeight = autoHeight
          } else {
            autoHeight = autoHeight+50
          }

          indivForm.height(curHeight); 
          indivForm.stop().animate({
             height: autoHeight
          }, {
             duration: 1000,
             complete: function() { 

              // Switch the individual day to auto height to accomodate individual Food items being expanded/minimized within that day
              if(indivForm.attr('class') != 'wphealthtracker-response-form-diet-shaded-container'){
                indivForm.css({'height':'auto'})
              }

             } 
          });
          var curContHeight = viewContainer.height();
          viewContainer.stop().animate({
             height: curContHeight+autoHeight+50
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
  function wphealthtracker_jre_diet_incomplete_data(iteratorNum){
    // Resetting any possible alert classes
    $('.wphealthtracker-response-form-input-number, .wphealthtracker-response-form-input-time').each(function(){
      $(this).prev().removeClass('wphealthtracker-missing-data-animation')

      // Remove any previous padding-top inline styling completely
      $(this).prev().attr('style', function(i, style){
          return style && style.replace(/padding-top[^;]+;?/g, '');
      });
    })

    // Resetting that alert class on click
    $(document).on("click",".wphealthtracker-response-form-input-text, .wphealthtracker-response-form-input-number, .wphealthtracker-response-form-input-time", function(event){

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
    var returnFlag = false;

    // Loop through each food row
    $(topParentId+' .wphealthtracker-response-form-diet-shaded-container').each(function(){

      // Checking to make sure we're not trying going to throw errors for a completely blank form that the user has no intention of filling out at all
      var proceed = false;
      $(this).find('input').each(function(){
        if($(this).val() != ''){
          proceed = true;
        }
      });

      // If there is at least some data for this food item, proceed, and make sure all three required fields are filled out
      if(proceed){
        var inputArray = [];
        var idArray = [];
        $(this).find('input').each(function(){
          inputArray.push($(this).val())
          idArray.push($(this).attr('id'))
        });

        // Checking for incomplete Food name/cat/time entries
        if(inputArray[0] == ''){
          alert(wphealthtrackerPhpVariables.commontrans4)

          // Expand if needed
          if($(this).css('height') == '0px'){
            $(this).prev().trigger('click');
          }

          $("html, body").animate({ scrollTop: $('#'+idArray[0]).offset().top-150 }, 1000);
          $('#'+idArray[0]).prev().addClass('wphealthtracker-missing-data-animation')
          returnFlag = true;
          return false;
        }

        if(inputArray[1] == ''){
          alert(wphealthtrackerPhpVariables.commontrans4)

          // Expand if needed
          if($(this).css('height') == '0px'){
            $(this).prev().trigger('click');
          }

          $("html, body").animate({ scrollTop: $('#'+idArray[1]).offset().top-150 }, 1000);
          $('#'+idArray[1]).prev().addClass('wphealthtracker-missing-data-animation')
          returnFlag = true;
          return false;
        }

        if(inputArray[2] == ''){
          alert(wphealthtrackerPhpVariables.commontrans4)

          // Expand if needed
          if($(this).css('height') == '0px'){
            $(this).prev().trigger('click');
          }

          $("html, body").animate({ scrollTop: $('#'+idArray[2]).offset().top-150 }, 1000);
          $('#'+idArray[2]).prev().addClass('wphealthtracker-missing-data-animation')
          returnFlag = true;
          return false;
        }
      }
    });

    if(returnFlag){
      return false;
    } else {
      return true;
    }
  }


  function wphealthtracker_jre_diet_save_diet_data(){
    $(document).on("click",".wphealthtracker-save-stuff-button-diet", function(event){

      var iteratorNum = $(this).attr('data-parent-id-num');

      // Check for incomplete data
      var proceed = wphealthtracker_jre_diet_incomplete_data(iteratorNum);

      // If no errors were encountered in wphealthtracker_jre_diet_incomplete_data(iteratorNum), proceed...
      if(proceed){

        var topParentId = '#wphealthtracker-response-form-data-row-actual-'+iteratorNum;
        var topParentDomElem = $(topParentId);

        // Reset response div css
        var responseDiv = topParentDomElem.find('#wphealthtracker-response-message-diet-div');
        responseDiv.animate({opacity:0, height:0}, 300);

        // Turn on spinner...
        topParentDomElem.find('#wphealthtracker-spinner-save-diet').animate({'opacity':1}, 300); 

        // Loop through each food row
        var foodData = '';
        var inputArray = [];
        var selectArray = [];
        $(topParentId+' .wphealthtracker-response-form-diet-shaded-container').each(function(){

          // Checking to make sure we're not trying to save a completely blank food item, if, for example the user adds a new food item but doesn't fill anything out whatsoever, or if the user is simply trying to modify existing food items on the current day, and doesn not want to use the automatically-provided additional food item form.
          var proceed = false;
          $(this).find('input').each(function(){
            if($(this).val() != ''){
              proceed = true;
            }
          });

          // If there is at least some data for this food item, proceed
          if(proceed){
            var tempInputArray = [];
            var tempSelectArray = [];
            $(this).find('select').each(function(index){
              tempSelectArray.push($(this).val());
            });

            $(this).find('input').each(function(index){

              var value = $(this).val();

              // Make sure we remove and replace any possible commas the user may have entered in the inputs, as these will throw off the displaying of data
              if(value.indexOf(',') != -1){
                value = value.replace(/,/g, ' -');
              }

              if(index == 3){
                tempInputArray.push(value);
                tempInputArray.push(tempSelectArray[0]);
              } else if(index == 4){
                tempInputArray.push(value);
                tempInputArray.push(tempSelectArray[1]);
              } else {
                tempInputArray.push(value);
              }
            });


            tempInputArray.push(',')
            inputArray = inputArray.concat(tempInputArray); 
          }
        });

        inputArray.pop();
        for (var i = 0; i < inputArray.length; i++) {
            foodData = foodData+';'+inputArray[i];
        };
       
        foodData = foodData.replace(/,;/g, ',');

        // Trim off the first ';'
        foodData = foodData.substring(1);

        // Preparing Ajax data to send to server and save
        var wpUserId = $('#wphealthtracker-user-dropdown-select-diet').val();
        var humanDate = $(this).attr('data-human-date');
        var firstName = $(this).attr('data-firstname');
        var lastName = $(this).attr('data-lastname');
        var data = {
            'action': 'wphealthtracker_jre_save_diet_data_action',
            'security': wphealthtrackerPhpVariables.dietnonce3,
            'wpUserId':wpUserId,
            'firstName':firstName,
            'lastName':lastName,
            'humanDate':humanDate,
            'foodData':foodData,
          };

          console.log('This is the data being sent to the server to retreive the user\'s data for the diet tab:');
          console.log(data);

          var request = $.ajax({
            url: ajaxurl,
            type: "POST",
            data:data,
            timeout: 0,
            success: function(response) {

              console.log('This is what we received back from the Server after trying to Insert/Update some daily data. Response[0] is either how many rows were modified, or the DB error message. Response[1] is the type of $wpdb function. Response[2] is Humandate. Response[3] is WP User ID. Response[4] is the $wpdb->prepared Query. Response[5] is the list of Transients that were deleted. Response[6] is the actual array of data we tried to insert/update with.')
              response = JSON.parse(response);
              console.log(response);
              response[6] = JSON.parse(response[6]);

              // Turn off spinner...
              topParentDomElem.find('#wphealthtracker-spinner-save-diet').animate({'opacity':0});

              // We successfully executed our DB query - doesn't mean anything was actually changed though - we could have effected zero rows - still, no errors so we're calling it good.
              var responsetype = false;
              if(response[0] === 1 || response[0] === 0){

                // Flag to determine what height to animate reponse div to
                responsetype = true;

                // Modify the response based on type of query
                var responseHtml = '';
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
              var responseDiv = topParentDomElem.find('#wphealthtracker-response-message-diet-div');
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
      }
    });
  }


});