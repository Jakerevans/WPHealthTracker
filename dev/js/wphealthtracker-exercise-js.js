/**
 * JavaScript Functions - wphealthtracker-exercise-js.js
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
    wphealthtracker_jre_exercise_selecteduser_exercise_enter();

    // For populating the 'View' container with the selected user's saved data and/or the blank form
    wphealthtracker_jre_exercise_selecteduser_exercise_view();

    // For adding a row of data
    wphealthtracker_jre_exercise_add_row_of_data();

    // For cloning a row of data
    wphealthtracker_jre_exercise_clone_row_of_data()

    // For deleting a row of data
    wphealthtracker_jre_exercise_delete_row_of_data();

    // For expanding the previous days' saved data entries
    wphealthtracker_jre_exercise_expand_all_previous_data();

    // For grabbing and outputting data when the 'Filter' button is clicked...
    wphealthtracker_jre_exercise_selecteduser_exercise_filter_data();

    // For saving the Exercise data
    wphealthtracker_jre_exercise_save_exercise_data();

    // Adding in the line to enable the select2.js file
    wphealthtracker_jre_exercise_select2_init();

    // For adding a row of set data
    wphealthtracker_jre_exercise_add_row_of_set_data();

    // For deleting a row of set data
    wphealthtracker_jre_exercise_delete_row_of_set_data();

    // For disabling/enabling the Weight input if Bodyweight checkbox is checked
    wphealthtracker_jre_exercise_disable_set_data_weight();

  /* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */

  function wphealthtracker_jre_exercise_select2_init(){
    // Adding in the line to enable the select2.js file
    $('.select2-input').select2();

    $(document).on("click",".wphealthtracker-response-form-select", function(event){
        $('.select2-input').select2();
    });

  }


  // Function to simply get a new row of HTML
  function wphealthtracker_jre_exercise_get_row_of_data_html(key, loopNum, date, idNum, exerciseNum, data){

    if(data == null || data == undefined || data.length == 0){
      data = ['','','','','','','','','','','','','','','',''];
    }

    console.log('THIS IS THE DATA');
    console.log(data);

    var daytype = '';
    var dataSection = ' data-section="'+daytype+'" ';

    // Build the Exercise Type <select> <options>
    var exerciseType = '';
    switch(data[8]) {
      case wphealthtrackerPhpVariables.exercisetrans9:
          exerciseType = '<option selected>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.commontrans47+'</option>'
        break;
      case wphealthtrackerPhpVariables.exercisetrans10:
          exerciseType = '<option>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option selected>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.commontrans47+'</option>';
        break;
      case wphealthtrackerPhpVariables.exercisetrans11:
          exerciseType = '<option>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option selected>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.commontrans47+'</option>';
        break;
      case wphealthtrackerPhpVariables.exercisetrans12:
          exerciseType = '<option>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option selected>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.commontrans47+'</option>';
        break;
      case wphealthtrackerPhpVariables.commontrans37:
          exerciseType = '<option>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.commontrans47+'</option>';
        break;
      case wphealthtrackerPhpVariables.commontrans47:
          exerciseType = '<option>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans47+'</option>';
        break;
      default:
        exerciseType = '<option>'+wphealthtrackerPhpVariables.exercisetrans9+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans10+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans11+'</option><option>'+wphealthtrackerPhpVariables.exercisetrans12+'</option><option>'+wphealthtrackerPhpVariables.commontrans37+'</option><option>'+wphealthtrackerPhpVariables.commontrans47+'</option>';
    }

    var exerDurMeasure = '';
    switch(data[9]) {
      case wphealthtrackerPhpVariables.commontrans48:
          exerDurMeasure = '<option selected>'+wphealthtrackerPhpVariables.commontrans48+'</option><option>'+wphealthtrackerPhpVariables.commontrans49+'</option><option>'+wphealthtrackerPhpVariables.commontrans50+'</option>';
        break;
      case wphealthtrackerPhpVariables.commontrans49:
          exerDurMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans48+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans49+'</option><option>'+wphealthtrackerPhpVariables.commontrans50+'</option>';
        break;
      case wphealthtrackerPhpVariables.commontrans50:
          exerDurMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans48+'</option><option>'+wphealthtrackerPhpVariables.commontrans49+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans50+'</option>';
        break;
      default:
        exerDurMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans48+'</option><option>'+wphealthtrackerPhpVariables.commontrans49+'</option><option>'+wphealthtrackerPhpVariables.commontrans50+'</option>';
    }

    var distanceMeasure = '';
    switch(data[10]) {
      case wphealthtrackerPhpVariables.commontrans51:
          distanceMeasure = '<option selected>'+wphealthtrackerPhpVariables.commontrans51+'</option><option>'+wphealthtrackerPhpVariables.commontrans52+'</option><option>'+wphealthtrackerPhpVariables.commontrans53+'</option><option>'+wphealthtrackerPhpVariables.commontrans54+'</option><option>'+wphealthtrackerPhpVariables.commontrans55+'</option>';
        break;
      case wphealthtrackerPhpVariables.commontrans52:
           distanceMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans51+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans52+'</option><option>'+wphealthtrackerPhpVariables.commontrans53+'</option><option>'+wphealthtrackerPhpVariables.commontrans54+'</option><option>'+wphealthtrackerPhpVariables.commontrans55+'</option>';
        break;
      case wphealthtrackerPhpVariables.commontrans53:
          distanceMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans51+'</option><option>'+wphealthtrackerPhpVariables.commontrans52+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans53+'</option><option>'+wphealthtrackerPhpVariables.commontrans54+'</option><option>'+wphealthtrackerPhpVariables.commontrans55+'</option>';
        break;
       case wphealthtrackerPhpVariables.commontrans54:
          distanceMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans51+'</option><option>'+wphealthtrackerPhpVariables.commontrans52+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans53+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans54+'</option><option>'+wphealthtrackerPhpVariables.commontrans55+'</option>';
        break;
       case wphealthtrackerPhpVariables.commontrans55:
          distanceMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans51+'</option><option>'+wphealthtrackerPhpVariables.commontrans52+'</option><option>'+wphealthtrackerPhpVariables.commontrans53+'</option><option >'+wphealthtrackerPhpVariables.commontrans54+'</option><option selected>'+wphealthtrackerPhpVariables.commontrans55+'</option>';
        break;
      default:
         distanceMeasure = '<option>'+wphealthtrackerPhpVariables.commontrans51+'</option><option>'+wphealthtrackerPhpVariables.commontrans52+'</option><option>'+wphealthtrackerPhpVariables.commontrans53+'</option><option>'+wphealthtrackerPhpVariables.commontrans54+'</option><option>'+wphealthtrackerPhpVariables.commontrans55+'</option>';
    }

    var muscles = '';

    var muscleTranslationsArray = [
      wphealthtrackerPhpVariables.exercisetrans20,
      wphealthtrackerPhpVariables.exercisetrans21,
      wphealthtrackerPhpVariables.exercisetrans22,
      wphealthtrackerPhpVariables.exercisetrans23,
      wphealthtrackerPhpVariables.exercisetrans24,
      wphealthtrackerPhpVariables.exercisetrans25,
      wphealthtrackerPhpVariables.exercisetrans26,
      wphealthtrackerPhpVariables.exercisetrans27,
      wphealthtrackerPhpVariables.exercisetrans28,
      wphealthtrackerPhpVariables.exercisetrans29,
      wphealthtrackerPhpVariables.exercisetrans30,
      wphealthtrackerPhpVariables.exercisetrans31,
      wphealthtrackerPhpVariables.exercisetrans32,
      wphealthtrackerPhpVariables.exercisetrans33,
      wphealthtrackerPhpVariables.exercisetrans34,
      wphealthtrackerPhpVariables.exercisetrans35,
      wphealthtrackerPhpVariables.exercisetrans36,
      wphealthtrackerPhpVariables.exercisetrans37,
    ];

    // Modify the Select2 array of muscle groups
    var muscleGroupString = '';
    if(data[11] !== null){
      for (var i = data[11].length - 1; i >= 0; i--) {
        muscleGroupString = muscleGroupString+'/'+data[11][i];
      }
    } else {
      muscleGroupString = '';
    }

    muscleGroupString = muscleGroupString.replace('/','');

    // If we have more than one saved Muscle Group data.
    if ( muscleGroupString.indexOf('/') > -1 ) {
      var muscleGroupsArray = muscleGroupString.split('/');
      var foundMatch = false;

      for (var i = muscleTranslationsArray.length - 1; i >= 0; i--) {
      
        for (var j = muscleGroupsArray.length - 1; j >= 0; j--) {
          if(muscleTranslationsArray[i] === muscleGroupsArray[j]){
            muscles = muscles + '<option selected>' + muscleTranslationsArray[i] + '</option>';
            foundMatch = true;
          }
        }

        if ( ! foundMatch ) {
          muscles = muscles + '<option>' + muscleTranslationsArray[i] + '</option>';
        } else {
          foundMatch = false;
        }
      }
    } else if ( '' !== muscleGroupString ) {
      foundMatch = false;
      for (var i = muscleTranslationsArray.length - 1; i >= 0; i--) {

        if ( muscleTranslationsArray[i] === muscleGroupString ) {
          muscles = muscles + '<option selected>' + muscleTranslationsArray[i] + '</option>';
        } else {
          muscles = muscles + '<option>' + muscleTranslationsArray[i] + '</option>';
        }
      }
    // If there are no saved Muscle Groups at all.
    } else {
      for (var i = muscleTranslationsArray.length - 1; i >= 0; i--) {
        muscles = muscles + '<option>' + muscleTranslationsArray[i] + '</option>';
      }
    }

    // Now build the Sets/Reps rows
    var setsHtml = '';
    if(data[6] !== '/-false-'){

      var setsRepsArray = data[6].split('/');
      var indivSelectValues = data[7].split('/');
      var forSetNumberDisplay = 0;
      //"/100-false-4/-false-"
      // /Kilograms/Pounds

      console.log('splitted value!!!')
      console.log(setsRepsArray)
      // Loop through all retreived Sets/Reps rows
      for (var i = 0; i < setsRepsArray.length; i++) {

        if(setsRepsArray[i] !== '' && setsRepsArray[i] !== '-false-'){

          forSetNumberDisplay++;

          var indivValues = setsRepsArray[i].split('-');

          // Determine whether to check the checkbox
          var checked = '';
          if(indivValues[1] === 'true'){
            checked = 'checked="true"';
          }

          // Now make sure we set the MEasurement select correctly
          var setRepsMeasureString = '';
          switch(indivSelectValues[i]) {
            case wphealthtrackerPhpVariables.d3trans19:
                setRepsMeasureString = '<option selected>'+wphealthtrackerPhpVariables.d3trans19+'</option><option>'+wphealthtrackerPhpVariables.d3trans18+'</option>';
              break;
            case wphealthtrackerPhpVariables.d3trans18:
                setRepsMeasureString = '<option>'+wphealthtrackerPhpVariables.d3trans19+'</option><option selected>'+wphealthtrackerPhpVariables.d3trans18+'</option>';
              break;
            default:
              setRepsMeasureString = '<option>'+wphealthtrackerPhpVariables.d3trans19+'</option><option>'+wphealthtrackerPhpVariables.d3trans18+'</option>';
          }

          setsHtml = setsHtml+'<div class="wphealthtracker-response-form-exercise-set-div"><p class="wphealthtracker-response-form-exercise-set-label">'+wphealthtrackerPhpVariables.exercisetrans17+' #'+forSetNumberDisplay+'</p><div class="wphealthtracker-response-form-exercise-innerrow-div wphealthtracker-response-form-exercise-innerrow-div-bodyweight-special"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.d3trans40+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-setrep-weight-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" value="'+indivValues[0]+'"/><div class="wphealthtracker-response-form-input-checkbox-div"><input '+checked+' type="checkbox" class="wphealthtracker-response-form-input-checkbox wphealthtracker-response-form-input-checkbox-exercise-bodyweight" id="wphealthtracker-response-form-input-text-setrep-bodyweight-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/><label style="margin-left:3px;">'+wphealthtrackerPhpVariables.exercisetrans38+'</label></div></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans17+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-setrep-reps-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221); margin-left:5px; margin-right:5px;" value="'+indivValues[2]+'"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-setrep-measurement-'+key+'-'+loopNum+'">'+setRepsMeasureString+'</select></div></div>';
        }
      }
    } else {
      setsHtml = '<div class="wphealthtracker-response-form-exercise-set-div"><p class="wphealthtracker-response-form-exercise-set-label">'+wphealthtrackerPhpVariables.exercisetrans17+' #1</p><div class="wphealthtracker-response-form-exercise-innerrow-div wphealthtracker-response-form-exercise-innerrow-div-bodyweight-special"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.d3trans40+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-setrep-weight-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/><div class="wphealthtracker-response-form-input-checkbox-div"><input type="checkbox" class="wphealthtracker-response-form-input-checkbox wphealthtracker-response-form-input-checkbox-exercise-bodyweight" id="wphealthtracker-response-form-input-text-setrep-bodyweight-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/><label style="margin-left:3px;">'+wphealthtrackerPhpVariables.exercisetrans38+'</label></div></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans17+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-setrep-reps-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221); margin-left:5px; margin-right:5px;"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-setrep-measurement-'+key+'-'+loopNum+'"><option>'+wphealthtrackerPhpVariables.d3trans19+'</option><option>'+wphealthtrackerPhpVariables.d3trans18+'</option></select></div></div>';
    }

    // Now add in the 'Add Set' button/div
    setsHtml = setsHtml+'<div class="wphealthtracker-response-form-exercise-set-addition-div" id="wphealthtracker-response-form-exercise-set-addition-div-'+loopNum+'" data-date="'+date+'" data-key="'+key+'" data-setkey="'+forSetNumberDisplay+'" data-setkey="'+forSetNumberDisplay+'" data-loopnum="'+loopNum+'" data-exercisenum="0" data-idnum="'+loopNum+'" data-id-to-add-after="wphealthtracker-response-form-exercise-shaded-container-'+key+'-'+loopNum+'"><p class="wphealthtracker-response-form-exercise-set-addition-p">'+wphealthtrackerPhpVariables.exercisetrans18+'</p><img class="wphealthtracker-response-form-row-add-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'web-site.svg" /></div>'

    return '<div class="wphealthtracker-response-form-all-data-row-parent" id="wphealthtracker-response-form-all-data-row-parent-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-all-data-row" '+dataSection+' id="wphealthtracker-response-form-all-data-row-1" data-open="true" style="opacity: 1;"><div class="wphealthtracker-response-form-exercise-shaded-container-title"><h3><img class="wphealthtracker-icon-h2-image-exercise" data-label="exercise-weight" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'exercise.svg"> '+wphealthtrackerPhpVariables.tabtitle6+' #<span class="wphealthtracker-exercise-item-span">'+key+'</span> - '+date+'</h3></div><div class="wphealthtracker-expand-minimize-div-all-data"><p class="wphealthtracker-expand-minimize-p" id="wphealthtracker-expand-minimize-p-enter" style="opacity: 1;">'+wphealthtrackerPhpVariables.commontrans1+'</p><img src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'rotate.svg" class="wphealthtracker-indiv-choice-img-rotate" id="wphealthtracker-indiv-choice-img-rotate-enter"></div></div><div class="wphealthtracker-response-form-exercise-shaded-container" id="wphealthtracker-response-form-exercise-shaded-container-'+key+'-'+loopNum+'" style="height: 638px;"><div class="wphealthtracker-response-form-data-row-exercise-inner-cont"><div class="wphealthtracker-response-form-data-row-exercise" id="wphealthtracker-response-form-exercise-item-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-row-div-cal-pro"><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans7+'</p><input type="text" class="wphealthtracker-response-form-input-text wphealthtracker-response-form-input-text-exercise" id="wphealthtracker-response-form-input-text-exercise-name-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" value="'+data[0]+'"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans8+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-exercise-type-'+key+'-'+loopNum+'">'+exerciseType+'</select></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans13+'</p><input type="time" class="wphealthtracker-response-form-input-time wphealthtracker-response-form-input-time-exercise" id="wphealthtracker-response-form-input-time-exercise-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" value="'+data[1]+'" /></div></div></div><div class="wphealthtracker-response-form-data-row-exercise" id="wphealthtracker-response-form-exercise-item-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-row-div-cal-pro"><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans14+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-energy-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" value="'+data[2]+'"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-exercise-type-'+key+'-'+loopNum+'">'+exerDurMeasure+'</select></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans15+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-energy-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" value="'+data[3]+'"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-exercise-type-'+key+'-'+loopNum+'">'+distanceMeasure+'</select></div></div></div><div class="wphealthtracker-response-form-data-row-exercise" id="wphealthtracker-response-form-exercise-protein-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-row-div-cal-pro"><div class="wphealthtracker-response-form-exercise-innerrow-div wphealthtracker-response-form-exercise-innerrow-div-select-2"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans19+'</p><select class="wphealthtracker-response-form-select select2-input" id="select2-upsells" name="musclegroups[]" multiple="multiple">'+muscles+'</select></div></div></div><div class="wphealthtracker-response-form-data-row-exercise" id="wphealthtracker-response-form-exercise-calories-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-row-div-cal-pro">'+setsHtml+'</div></div><div class="wphealthtracker-response-form-data-row-exercise" id="wphealthtracker-response-form-exercise-image-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-row-div-cal-pro"><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans28+'</p><input type="text" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-image-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);" placeholder="'+wphealthtrackerPhpVariables.commontrans28+'" value="'+data[4]+'"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans29+'</p><button class="wphealthtracker-response-form-input-button wphealthtracker-response-form-input-button-image-upload" id="wphealthtracker-response-form-input-button-image-upload-'+key+'-'+loopNum+'">'+wphealthtrackerPhpVariables.commontrans30+'</button></div></div></div><div class="wphealthtracker-response-form-data-row-exercise" id="wphealthtracker-response-form-exercise-file-row-div-'+key+'-'+loopNum+'"><div class="wphealthtracker-response-form-exercise-row-div-cal-pro"><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans32+'</p><input type="text" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-file-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"placeholder="'+wphealthtrackerPhpVariables.commontrans32+'" value="'+data[5]+'"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans33+'</p><button class="wphealthtracker-response-form-input-button wphealthtracker-response-form-input-button-file-upload" id="wphealthtracker-response-form-input-button-file-upload-'+key+'-'+loopNum+'">'+wphealthtrackerPhpVariables.commontrans34+'</button></div></div></div><div class="wphealthtracker-response-form-exercise-row-duplicate-div" data-date="'+date+'" data-key="'+key+'" data-loopnum="'+loopNum+'" data-idnum="'+loopNum+'" data-id-to-update="'+loopNum+'" data-id-to-add-after="wphealthtracker-response-form-all-data-row-parent-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans40+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'duplicate.svg" /></div><div class="wphealthtracker-response-form-exercise-row-removal-div" data-id-to-update="'+loopNum+'" data-id-to-remove="wphealthtracker-response-form-all-data-row-parent-'+key+'-'+loopNum+'"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-row-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div></div></div>';
  }

  function wphealthtracker_jre_exercise_add_row_of_data(){
    $(document).on("click",".wphealthtracker-response-form-exercise-row-addition-div", function(event){

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until function is complete, to ensure IDs and such don't get mixed up
      $('.wphealthtracker-response-form-exercise-row-duplicate-div, .wphealthtracker-response-form-exercise-row-removal-div, .wphealthtracker-response-form-exercise-row-addition-div').css({'pointer-events':'none'})

      // ID of element to add row of data after
      var idToAddAfter = $(this).attr('data-id-to-add-after');
      var idNum = $(this).attr('data-idnum');
      var loopNum = $(this).attr('data-loopnum');
      var key = $(this).attr('data-key');
      var newRow = '';
      var newIdToAddAfter = '';
      var date = $(this).attr('data-date');
      var exerciseNum = ($(this).parent().find('.wphealthtracker-response-form-all-data-row-parent').length)+1

      var origKey = key;
      key = parseInt(key)+1;
      newIdToAddAfter = 'wphealthtracker-response-form-addexercise-row-div-'+key+'-'+loopNum;

      newRow = wphealthtracker_jre_exercise_get_row_of_data_html(key, loopNum, date, idNum, exerciseNum, null);

      // Update dom values of the Add New Row Image
      $(this).attr('data-key', key);
      $(this).attr('data-exercisenum', (exerciseNum+1));

      // Actually insert new row
      $(newRow).insertBefore($(this))

      // Activate the Select2 stuff
      $('.select2-input').select2();

      var newIdRef = $('#wphealthtracker-response-form-exercise-shaded-container-'+key+'-'+loopNum);
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
      $('.wphealthtracker-response-form-exercise-row-duplicate-div, .wphealthtracker-response-form-exercise-row-removal-div, .wphealthtracker-response-form-exercise-row-addition-div').css({'pointer-events':'all'})

    });
  }

  function wphealthtracker_jre_exercise_clone_row_of_data(){
    $(document).on("click",".wphealthtracker-response-form-exercise-row-duplicate-div", function(event){

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until function is complete, to ensure IDs and such don't get mixed up
      $('.wphealthtracker-response-form-exercise-row-duplicate-div, .wphealthtracker-response-form-exercise-row-removal-div, .wphealthtracker-response-form-exercise-row-addition-div').css({'pointer-events':'none'})

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
      var idToUpdate = 'wphealthtracker-response-form-exercise-row-addition-div-'+numToUpdate;
      var element = $('#'+idToUpdate);
      element.attr('data-key', parseInt(element.attr('data-key'))+1)
      element.attr('data-loopnum', parseInt(element.attr('data-loopnum'))+1)

      var origKey = key;
      key = parseInt(key)+1;
      newIdToAddAfter = 'wphealthtracker-response-form-addexercise-row-div-'+key+'-'+loopNum;

      // Now work on getting all values
      var inputValues = [];
      var setRepString = '';
      $('#'+idToAddAfter).find('input').each(function(){

        // Make sure first of all that each input we come across actually has an ID
        if($(this).attr('id') !== undefined){

          // Make considerations for if we're getting data from the Sets/Reps inputs
          if($(this).attr('id').indexOf('wphealthtracker-response-form-input-text-setrep-weight-') > -1){
            setRepString += '/'+$(this).val();
          } else if($(this).attr('id').indexOf('wphealthtracker-response-form-input-text-setrep-bodyweight-') > -1) {
            setRepString += '-'+$(this).prop('checked');
          } else if($(this).attr('id').indexOf('wphealthtracker-response-form-input-text-setrep-reps-') > -1){
            setRepString += '-'+$(this).val();
          } else {
             inputValues.push($(this).val());
          }

        }
      })

      // Now push the completed Set/Reps string
      inputValues.push(setRepString);

      var selectValues = [];
      var setRepMeasurementString = '';
      $('#'+idToAddAfter).find('select').each(function(){

        // Make considerations for if we're getting data from the Sets/Reps selects
        if($(this).attr('id').indexOf('wphealthtracker-response-form-input-select-setrep-measurement-') > -1){
          setRepMeasurementString += '/'+$(this).val();
        } else {
          selectValues.push($(this).val());
        }
      })

      // Now push the completed Set/Reps Measurement string
      inputValues.push(setRepMeasurementString);
      inputValues = inputValues.concat(selectValues);

      //wphealthtrackerPhpVariables.exercisetrans20

      newRow = wphealthtracker_jre_exercise_get_row_of_data_html(key, loopNum, date, idNum, '', inputValues);

      // Actually insert new row
      $(newRow).insertAfter($('#'+idToAddAfter))

      // Activate the Select2 stuff
      $('.select2-input').select2();

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until animation is complete, to ensure IDs and such don't get mixed up

      // Animate the Food Number out, change it, then animate back in
      $('#'+idToAddAfter).parent().find('.wphealthtracker-exercise-item-span').each(function(index){
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


      var newIdRef = $('#wphealthtracker-response-form-exercise-shaded-container-'+key+'-'+loopNum);
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
      $('.wphealthtracker-response-form-exercise-row-duplicate-div, .wphealthtracker-response-form-exercise-row-removal-div, .wphealthtracker-response-form-exercise-row-addition-div').css({'pointer-events':'all'})

    });
  }

  function wphealthtracker_jre_exercise_delete_row_of_data(){

    $(document).on("click",".wphealthtracker-response-form-exercise-row-removal-div", function(event){

      // Disable the 'Add Food Item', 'Clone', and 'Delete' actions until function is complete, to ensure IDs and such don't get mixed up
      $('.wphealthtracker-response-form-exercise-row-duplicate-div, .wphealthtracker-response-form-exercise-row-removal-div, .wphealthtracker-response-form-exercise-row-addition-div').css({'pointer-events':'none'})

      // The ID to remove
      var idToRemove = $(this).attr('data-id-to-remove');
      var numToUpdate = $(this).attr('data-id-to-update');


      var idToUpdate = 'wphealthtracker-response-form-exercise-row-addition-div-'+numToUpdate;
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

            // Now that we've actually removed the entry, work on re-numbering the shaded container Ids and the data-id-to-remove attributes so that when we add a set, it's parent container's height is adjusted, instead of adjusting the height of a differetn container.
            $('.wphealthtracker-response-form-exercise-shaded-container').each(function(index){
              var existingId = $(this).attr('id');
              existingId = existingId.split('-');
              $(this).attr('id', 'wphealthtracker-response-form-exercise-shaded-container-'+index+'-'+existingId[7]);
            })
            $('.wphealthtracker-response-form-exercise-set-addition-div').each(function(index){
              var existingToAddAfterId = $(this).attr('data-id-to-add-after');
              existingToAddAfterId = existingToAddAfterId.split('-');
              $(this).attr('data-id-to-add-after', 'wphealthtracker-response-form-exercise-shaded-container-'+index+'-'+existingToAddAfterId[7]);
            })

            // Animate the Food Number out, change it, then animate back in
            parentElement.find('.wphealthtracker-exercise-item-span').each(function(index){
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
            $('.wphealthtracker-response-form-exercise-row-duplicate-div, .wphealthtracker-response-form-exercise-row-removal-div, .wphealthtracker-response-form-exercise-row-addition-div').css({'pointer-events':'all'})

          } 
      });
    });
  }


  // For populating the tab with the selected user's saved data and/or the blank form
  function wphealthtracker_jre_exercise_selecteduser_exercise_enter(){
    $(document).on("change","#wphealthtracker-user-dropdown-select-exercise", function(event){

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
            $('#wphealthtracker-expansion-div-exercise-enter').trigger('click')
            
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
        var wpuserid = $('#wphealthtracker-user-dropdown-select-exercise').val();

        // Get the minutes offset from UTC, representing the user's time zone
        var offset = new Date().getTimezoneOffset();

        var data = {
          'action': 'wphealthtracker_jre_selecteduser_exercise_enter_action',
          'security': wphealthtrackerPhpVariables.exercisenonce1,
          'wpuserid':wpuserid,
          'offset':offset
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the "Enter" container on the Exercise tab:');
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

            // Split up the response between the returned form html from class-exercise-forms-actual.php, the returned saved user's data, and the tab we're on
            response = JSON.parse(response);
            response[1] = JSON.parse(response[1])

            console.log('Here is Today\'s data for this user we just retrieved from the server. Response[0] is the HTML, Response[1] is the actual saved data the HTML is populated with (if any), Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is the Date and Response[5] is the User\'s WP ID.')
            console.log(response)

            // Get response div for the 'Enter' container and set the html
            responseEnterDiv.html(response[0]);

            // Change styling of 'No Access' Message.
            $( '.wphealthtracker-no-saved-data-stats-div p, .wphealthtracker-no-saved-span-stats-1' ).css({'color':'#fff'});

            // Activate the Select2 stuff
            $('.select2-input').select2();

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
      var value = $('#wphealthtracker-user-dropdown-select-exercise').val();
      if(value != 'default' && value != null){
        $('#wphealthtracker-user-dropdown-select-exercise').val(value).trigger('change');
      }
    }, 100)
  }


  // For populating the tab with the selected user's saved data and/or the blank form
  function wphealthtracker_jre_exercise_selecteduser_exercise_view(){
    $(document).on("change","#wphealthtracker-user-dropdown-select-exercise", function(event){

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
            $('#wphealthtracker-expansion-div-exercise-enter').trigger('click')
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
        var wpuserid = $('#wphealthtracker-user-dropdown-select-exercise').val();

        // Get the minutes offset from UTC, representing the user's time zone
        var offset = new Date().getTimezoneOffset();

        var data = {
          'action': 'wphealthtracker_jre_selecteduser_exercise_view_action',
          'security': wphealthtrackerPhpVariables.exercisenonce2,
          'wpuserid':wpuserid,
          'offset':offset
        };

        console.log('This is the data being sent to the server to retreive the user\'s data for the "View" container on the Exercise tab:');
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

            // Split up the response between the returned form html from class-exercise-forms-actual.php, the returned saved user's data, and the tab we're on
            response = JSON.parse(response);
            response[1] = JSON.parse(response[1])

            console.log('Here is ALL Previous data for this user we just retrieved from the server. Response[0] is the full HTML for each day, Response[1] is the actual saved data for each day the HTML is populated with, Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is TODAY\'S Date, and Response[5] is the User\'s WP ID.')
            console.log(response)

            // Get response div for the 'View' container and set the html
            responseViewDiv.html(response[0]);

            // Activate the Select2 stuff
            $('.select2-input').select2();

            // Call the function that will take the User's saved data, create an array of Food Items, and use that array to populate the Autocomplete for the Food item and all associated inputs
            wphealthtracker_jre_exercise_autocomplete(response[1]);

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
  function wphealthtracker_jre_exercise_autocomplete(data){
    console.log(data)

    // Build the exercise string that contains all exercise items entered for the last 7 days
    var massiveFoodString = '';
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
          massiveFoodString += data[key].exercisestring+',';
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
    $(document).on("focus",".wphealthtracker-response-form-input-text-exercise",function(e) {
      // If autocomplete hasn't been added to the input yet (if it's been added dynamically)
      if ( !$(this).data("autocomplete") ) {
        $(this).autocomplete({source:massiveFoodNameArray}, {
          minChars: 1,
          width: 402,
          matchContains: "word",
          autoFill: true,
          select: function (event, ui) {

            // See which key's value in the massiveFoodNameArray matches the choosen Autocomplete value, then use that key to get it's associated data, and fill in the inputs
            for (var i = 0; i < massiveFoodNameArray.length; i++){
              if (massiveFoodNameArray[i] == ui.item.label){    

                var splittedData = massiveFoodDataArray[i].split(';')

                console.log('Here is the data that will be used to Auto-Complete the Fields with:')
                console.log(splittedData)

                // Build the Select value for Exercise Type
                var exerciseType = '';
                switch(splittedData[0]) {
                  case wphealthtrackerPhpVariables.exercisetrans9:
                      exerciseType = wphealthtrackerPhpVariables.exercisetrans9
                    break;
                  case wphealthtrackerPhpVariables.exercisetrans10:
                      exerciseType = wphealthtrackerPhpVariables.exercisetrans10
                    break;
                  case wphealthtrackerPhpVariables.exercisetrans11:
                      exerciseType = wphealthtrackerPhpVariables.exercisetrans11;
                    break;
                  case wphealthtrackerPhpVariables.exercisetrans12:
                      exerciseType = wphealthtrackerPhpVariables.exercisetrans12;
                    break;
                  case wphealthtrackerPhpVariables.commontrans37:
                      exerciseType = wphealthtrackerPhpVariables.commontrans37;
                    break;
                  case wphealthtrackerPhpVariables.commontrans47:
                      exerciseType = wphealthtrackerPhpVariables.commontrans47;
                    break;
                  default:
                    exerciseType = wphealthtrackerPhpVariables.exercisetrans9;
                }

                // Build the Select value for Exercise Duration Measure
                var exerDurMeasure = '';
                switch(splittedData[3]) {
                  case wphealthtrackerPhpVariables.commontrans48:
                      exerDurMeasure = wphealthtrackerPhpVariables.commontrans48;
                    break;
                  case wphealthtrackerPhpVariables.commontrans49:
                      exerDurMeasure = wphealthtrackerPhpVariables.commontrans49;
                    break;
                  case wphealthtrackerPhpVariables.commontrans50:
                      exerDurMeasure = wphealthtrackerPhpVariables.commontrans50;
                    break;
                  default:
                    exerDurMeasure = wphealthtrackerPhpVariables.commontrans48;
                }

                // Build the Select value for Distance Travelled Measure
                var distanceMeasure = '';
                switch(splittedData[5]) {
                  case wphealthtrackerPhpVariables.commontrans51:
                      distanceMeasure = wphealthtrackerPhpVariables.commontrans51;
                    break;
                  case wphealthtrackerPhpVariables.commontrans52:
                       distanceMeasure = wphealthtrackerPhpVariables.commontrans52;
                    break;
                  case wphealthtrackerPhpVariables.commontrans53:
                      distanceMeasure = wphealthtrackerPhpVariables.commontrans53;
                    break;
                   case wphealthtrackerPhpVariables.commontrans54:
                      distanceMeasure = wphealthtrackerPhpVariables.commontrans54;
                    break;
                   case wphealthtrackerPhpVariables.commontrans55:
                      distanceMeasure = wphealthtrackerPhpVariables.commontrans55;
                    break;
                  default:
                     distanceMeasure = wphealthtrackerPhpVariables.commontrans51;
                }

                // Build value for the Muscle Groups Trained Select
                var muscles = splittedData[6].split('/');

                // Loop through each input in the individual exercise rows - so the first row is the Exercise name/Type/Time, second row is the Duration, Distance travelled...
                $(this).parent().parent().parent().parent().find('.wphealthtracker-response-form-data-row-exercise').each(function(index){


                  // Loop through each input in each individual row, minus the Set/Rep stuff
                  $(this).find('input').each(function(inputIndex){

                    // First row (Exercise Name...)
                    if(index == 0){
                      if(inputIndex == 1){
                        $(this).val(splittedData[1])
                      }
                    }

                    // Second row (Exercise Duration, Distance...)
                    if(index == 1){
                      if(inputIndex == 0){
                        $(this).val(splittedData[2])
                      }

                      if(inputIndex == 1){
                        $(this).val(splittedData[4])
                      }
                    }

                    // Fourth row (Image URL...)
                    if(index == 4){
                      $(this).val(splittedData[8])
                    }

                    // Fifth row (File URL...)
                    if(index == 5){
                      $(this).val(splittedData[9])
                    }
                  })

                  // Loop through each Select in each individual row, minus the Set/Rep stuff
                  $(this).find('select').each(function(selectIndex){

                    // First row (Exercise Name...)
                    if(index == 0){
                        $(this).val(exerciseType)
                    }

                    // Second row (Exercise Duration, Distance...)
                    if(index == 1){

                      if(selectIndex == 0){
                        $(this).val(exerDurMeasure)
                      }

                      if(selectIndex == 1){
                        $(this).val(distanceMeasure)
                      }

                    }

                    // Third row (Muscle Groups...)
                    if(index == 2){
                        $(this).val(muscles)
                        $(this).trigger('change');
                    }
                  })
/*
                  // Now we'll handle the Set/Reps stuff
                  if(index == 3){

                    // First get the inputs
                    $(this).find('input').each(function(setrepInputIndex){

                    });


                  }
*/
                })              
              }
            }
          }
        });
      }
    });
  }

  // For grabbing and outputting data when the 'Filter' button is clicked...
  function wphealthtracker_jre_exercise_selecteduser_exercise_filter_data(){
    $(document).on("click","#wphealthtracker-view-filter-button-exercise-id", function(event){

      // Animate the spinner
      $('#wphealthtracker-spinner-filter-exercise').animate({'opacity':'1'})

      // Hide the current entries on the 'View' container
      $('.wphealthtracker-response-form-exercise-all-data-row, .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'0'})


      // Get drop-down value
      var filterVal = $('#wphealthtracker-view-search-select').val();

      // Get the user
      var wpuserid = $('#wphealthtracker-user-dropdown-select-exercise').val();

      var data = {
        'action': 'wphealthtracker_jre_selecteduser_exercise_filter_data_action',
        'security': wphealthtrackerPhpVariables.exercisenonce4,
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
          $('#wphealthtracker-spinner-filter-exercise').animate({'opacity':'0'})

          // Split up the response between the returned form html from class-exercise-forms-actual.php, the returned saved user's data, and the tab we're on
          response = JSON.parse(response);
          response[1] = JSON.parse(response[1])

          console.log('Here is ALL Previous data for this user we just retrieved from the server. Response[0] is the full HTML for each day, Response[1] is the actual saved data for each day the HTML is populated with, Reponse[2] is the User\'s First Name, Reponse[3] is the User\'s Last Name,  Reponse[4] is TODAY\'S Date, and Response[5] is the User\'s WP ID.')
          console.log(response)

          // The div that holds the form for the user to fill out and/or add data to
          var responseViewDiv = $('.wphealthtracker-selected-user-response-view-div');

          // Get response div for the 'View' container and set the html
          responseViewDiv.html(response[0]);

          // Activate the Select2 stuff
          $('.select2-input').select2();

          // Reveal the new entries on the 'View' container
          $('.wphealthtracker-response-form-exercise-all-data-row, .wphealthtracker-response-form-all-data-row-actual').animate({'opacity':'1'}, 1000)

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
  function wphealthtracker_jre_exercise_expand_all_previous_data(){
    $(document).on("click",".wphealthtracker-response-form-exercise-all-data-row", function(event){

      var section = $(this).attr('data-section');

      // Modify the removal image attribute to ensure that when the user deletes a row, the correct one gets deleted.
      var id = $(this).attr('id');
      $('#'+id).next().find('.wphealthtracker-response-form-row-removal-img').each(function(index){
          $(this).attr('data-idtoremove', '#'+id+' #'+$(this).attr('data-idtoremove'))
      })
      
      var indivForm = $(this).next();
      var viewContainer = $('#wphealthtracker-selected-user-response-id-exercise-view');
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

          // If we're not expanding one of the inner exercise items for a previous day, and just expanding the day itself, don't add additional 50px of height
          if(indivForm.attr('class') != 'wphealthtracker-response-form-exercise-shaded-container'){
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
              if(indivForm.attr('class') != 'wphealthtracker-response-form-exercise-shaded-container'){
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
  function wphealthtracker_jre_exercise_incomplete_data(iteratorNum){
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

    // Loop through each exercise row
    $(topParentId+' .wphealthtracker-response-form-exercise-shaded-container').each(function(){

      // Checking to make sure we're not trying going to throw errors for a completely blank form that the user has no intention of filling out at all
      var proceed = false;
      $(this).find('input').each(function(){
        // Ignore the Bodyweight checkbox
        if( ! $(this).is(':checkbox')){
          if($(this).val() != ''){
            proceed = true;
          }
        }
      });

      // If there is at least some data for this exercise item, proceed, and make sure all three required fields are filled out
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
      }
    });

    if(returnFlag){
      return false;
    } else {
      return true;
    }
  }


  function wphealthtracker_jre_exercise_save_exercise_data(){
    $(document).on("click",".wphealthtracker-save-stuff-button-exercise", function(event){

      var iteratorNum = $(this).attr('data-parent-id-num');

      // Check for incomplete data
      var proceed = wphealthtracker_jre_exercise_incomplete_data(iteratorNum);

      // If no errors were encountered in wphealthtracker_jre_exercise_incomplete_data(iteratorNum), proceed...
      if(proceed){

        var topParentId = '#wphealthtracker-response-form-data-row-actual-'+iteratorNum;
        var topParentDomElem = $(topParentId);

        // Reset response div css
        var responseDiv = topParentDomElem.find('#wphealthtracker-response-message-exercise-div');
        responseDiv.animate({opacity:0, height:0}, 300);

        // Turn on spinner...
        topParentDomElem.find('#wphealthtracker-spinner-save-exercise').animate({'opacity':1}, 300); 

        // Loop through each exercise row
        var exerciseData = '';
        var inputArray = [];
        var selectArray = [];
        var indivExerciseString = '';

        // Now work on getting all values
        $(topParentId+' .wphealthtracker-response-form-exercise-shaded-container').each(function(){

          // Here we'll grab all of the inputs on the particular day and place them in a temporary array, and at the same time we'll also build a string of the Sets/Reps data to later be split and used as an array/ in a for loop.
          var inputString = '';
          var inputValues = [];
          var setRepString = '';
          $(this).find('input').each(function(){
            // Make sure first of all that each input we come across actually has an ID
            if($(this).attr('id') !== undefined){

              // Make considerations for if we're getting data from the Sets/Reps inputs.
              if($(this).attr('id').indexOf('wphealthtracker-response-form-input-text-setrep-weight-') > -1){
                setRepString += '/'+$(this).val();
              } else if($(this).attr('id').indexOf('wphealthtracker-response-form-input-text-setrep-bodyweight-') > -1) {
                // Getting whether or not the Bodyweight checkbox is checked.
                setRepString += '-'+$(this).prop('checked');
              } else if($(this).attr('id').indexOf('wphealthtracker-response-form-input-text-setrep-reps-') > -1){
                setRepString += '-'+$(this).val();
              } else {
                // If the input has nothing to do with the Sets/Reps stuff, then shove into the array for all the other inputs
                inputValues.push($(this).val());
              }
            }
          })

          // Now we'll do the same thing as above , but for selects instead of inputs. We'll be putting selects that are related to the Sets/Reps stuff in their own array instead of a string as above. 
          var selectValues = [];
          var setRepMeasurementString = '';
          $(this).find('select').each(function(){
            // Make considerations for if we're getting data from the Sets/Reps selects
            if($(this).attr('id').indexOf('wphealthtracker-response-form-input-select-setrep-measurement-') > -1){
              setRepMeasurementString += '/'+$(this).val();
            } else {
              selectValues.push($(this).val());
            }
  
          })

          // Building the string of multiple Muscle Group(s) Trained Select
          var musclesString = '';
          if(selectValues[3] != null){
            for (var i = selectValues[3].length - 1; i >= 0; i--) {
              musclesString += selectValues[3][i]+'/';
            }
          }

          // Trim last '/' off muscle string if exists
          if(musclesString != '' && musclesString.slice(-1) == '/' ){
            musclesString = musclesString.substring(0, musclesString.length - 1);
          }

          // Now build Sets/Reps string
          setRepMeasurementString = setRepMeasurementString.substr(1);
          setRepString = setRepString.substr(1);
          var setRepMeasurementArray = setRepMeasurementString.split('/')
          var setRepStringArray = setRepString.split('/')
          var finalRepSetString = '';

          // Looping through the Sets/Reps Inputs array and the Sets/Reps Selects array - should match up one-for-one, as in: setRepStringArray[0] = 100-false-4, and setRepMeasurementArray[0] would be either Pounds or Kilograms.
          for (var i = 0 ; i < setRepStringArray.length; i++) {

            // Let's make sure to not add in a completely blank Sets/Reps row
            if(setRepStringArray[i] != '-false-'){
              setRepStringArray[i] = setRepStringArray[i].replace(/-/g, '/');
              finalRepSetString = finalRepSetString+setRepStringArray[i]+'/'+setRepMeasurementArray[i]+'//';
            }

          }

          // Building the final string for this one particular exercise. The If statement is to make sure we're not adding in a completely blank exercise form
          if(inputValues[0] != '' || inputValues[1] != '' || inputValues[2] != '' || inputValues[3] != '' || inputValues[4] != '' || inputValues[5] != ''){
            indivExerciseString = indivExerciseString+inputValues[0]+';'+selectValues[0]+';'+inputValues[1]+';'+inputValues[2]+';'+selectValues[1]+';'+inputValues[3]+';'+selectValues[2]+';'+musclesString+';'+finalRepSetString+';'+inputValues[4]+';'+inputValues[5]+',';
          }
        })

        // Trimming last comma. The one single string for every exercise performed on this particular day is complete and ready to be saved.
        indivExerciseString = indivExerciseString.substring(0, indivExerciseString.length - 1);

        // Preparing Ajax data to send to server and save
        var wpUserId = $('#wphealthtracker-user-dropdown-select-exercise').val();
        var humanDate = $(this).attr('data-human-date');
        var firstName = $(this).attr('data-firstname');
        var lastName = $(this).attr('data-lastname');
        var data = {
            'action': 'wphealthtracker_jre_save_exercise_data_action',
            'security': wphealthtrackerPhpVariables.exercisenonce3,
            'wpUserId':wpUserId,
            'firstName':firstName,
            'lastName':lastName,
            'humanDate':humanDate,
            'exerciseData':indivExerciseString,
          };

          console.log('This is the data being sent to the server to retreive the user\'s data for the exercise tab:');
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
              topParentDomElem.find('#wphealthtracker-spinner-save-exercise').animate({'opacity':0});

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
              var responseDiv = topParentDomElem.find('#wphealthtracker-response-message-exercise-div');
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

  function wphealthtracker_jre_exercise_add_row_of_set_data(){
    $(document).on("click",".wphealthtracker-response-form-exercise-set-addition-div", function(event){


      // ID of element to add row of data after
      var idToAddAfter = $(this).attr('data-id-to-add-after');
      var idNum = $(this).attr('data-idnum');
      var loopNum = $(this).attr('data-loopnum');
      var key = $(this).attr('data-key');
      var setKey = $(this).attr('data-setkey');
      var newRow = '';
      var newIdToAddAfter = '';
      var date = $(this).attr('data-date');
      var exerciseNum = ($(this).parent().find('.wphealthtracker-response-form-exercise-set-div').length)+1

      var origKey = key;
      key = parseInt(key)+1;
      setKey = parseInt(setKey)+1;
      newIdToAddAfter = 'wphealthtracker-response-form-addexercise-row-div-'+key+'-'+loopNum;

      $('<div class="wphealthtracker-response-form-exercise-set-div" style="height:0px;"><p class="wphealthtracker-response-form-exercise-set-label">'+wphealthtrackerPhpVariables.exercisetrans17+' #'+setKey+'</p><div class="wphealthtracker-response-form-exercise-innerrow-div wphealthtracker-response-form-exercise-innerrow-div-bodyweight-special"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.d3trans40+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-setrep-weight-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/><div class="wphealthtracker-response-form-input-checkbox-div"><input type="checkbox" class="wphealthtracker-response-form-input-checkbox wphealthtracker-response-form-input-checkbox-exercise-bodyweight" id="wphealthtracker-response-form-input-text-setrep-bodyweight-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221);"/><label style="margin-left:3px;">'+wphealthtrackerPhpVariables.exercisetrans38+'</label></div></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.exercisetrans16+'</p><input type="number" class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-setrep-reps-'+key+'-'+loopNum+'" style="border: 1px solid rgb(221, 221, 221); margin-left:5px; margin-right:5px;"/></div><div class="wphealthtracker-response-form-exercise-innerrow-div"><p><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-exercise" data-label="exercise-bp" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'question-black.svg">'+wphealthtrackerPhpVariables.commontrans23+'</p><select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-input-select-setrep-measurement-'+key+'-'+loopNum+'"><option>'+wphealthtrackerPhpVariables.d3trans19+'</option><option>'+wphealthtrackerPhpVariables.d3trans18+'</option></select></div><div class="wphealthtracker-response-form-exercise-set-removal-div"><p>'+wphealthtrackerPhpVariables.commontrans41+'</p><img class="wphealthtracker-response-form-set-removal-img" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'garbage.svg" /></div></div>').insertBefore($(this))

      // Animate the new set row in
      $(this).prev().animate({
         height: 83,
         opacity:1
      }, {
         duration: 1000,
      });

      // Adjust the height of the day itself
      var newIdRef = $('#'+idToAddAfter);
      // Get original Height
      var origHeight = newIdRef.height();
      // Animate to Auto Height
      newIdRef.stop().animate({
         height: origHeight+83,
         opacity:1
      }, {
         duration: 1000,
      });

      // Update dom values of the Add New Row Image
      $(this).attr('data-key', key);
      $(this).attr('data-setkey', setKey);
      $(this).attr('data-exercisenum', (exerciseNum+1));
    });
  }
   
  // For deleting a row of Sets/Reps data
  function wphealthtracker_jre_exercise_delete_row_of_set_data(){
    $(document).on("click",".wphealthtracker-response-form-exercise-set-removal-div", function(event){

      // First get the row to delete
      var rowToDelete = $(this).parent();
      var rowToDeleteParent = rowToDelete.parent();
      var setTextsTotal = 0;

      // First animate the row out
      rowToDelete.animate({
        opacity: 0,
        height: 0
      },{
        duration: 1000,
        complete: function() { 
          
          // Now actually remove row from DOM
          rowToDelete.remove();

          // Now re-number the Set #'s by animating them out
          var setTexts = rowToDeleteParent.find('.wphealthtracker-response-form-exercise-set-label');
          setTextsTotal = setTexts.length;
          setTexts.animate({
            opacity: 0,
          },{
            duration: 500,
            complete: function() { 
              for (var i =  0; i < setTextsTotal; i++) {
                setTexts.eq( i ).text(wphealthtrackerPhpVariables.exercisetrans17+' #'+(i+1))
              }
              setTexts.animate({'opacity':'1'}, 500)
            }
          });

          // Now modify the 'Add a Set' button
          rowToDeleteParent.find('.wphealthtracker-response-form-exercise-set-addition-div').attr('data-setkey', setTextsTotal)
        }
      })
    });
  }

  // For disabling/enabling the Weight input if Bodyweight checkbox is checked
  function wphealthtracker_jre_exercise_disable_set_data_weight(){
    $(document).on("click",".wphealthtracker-response-form-input-checkbox-exercise-bodyweight", function(event){

      if($(this).prop('checked') === true){
        $(this).parent().prev().val('')
        $(this).parent().prev().attr('disabled',true);
      } else {
        $(this).parent().prev().removeAttr('disabled');
      }
    });
  }



});