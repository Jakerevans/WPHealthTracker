/**
 * JavaScript Functions - wphealthtracker-admin-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

console.log( 'This is the JavaScript Object that holds all PHP Variables for use in JavaScript' );
console.log( wphealthtrackerPhpVariables );


// All functions wrapped in jQuery(document).ready()...
jQuery( document ).ready( function( $ ) {
	'use strict';

	/* BEGINNING SECTION TO CALL ALL FUNCTIONS IN FILE... */

	// For expanding/minimizing the 'Enter Data for' container on all tabs.
	wphealthtrackerJreExpMinEnter();

	// For expanding/minimizing the 'View & Edit Saved Data' container on all tabs.
	wphealthtrackerJreExpMinView();

	// Function to display the admin pointer message when entering the Question Mark image with mouse...
	wphealthtrackerJreAdminPointersJavascript();

	/* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


	// A function that will allow the spinning of the yellow circular 'Expand' image when the container opens
	$.fn.wphealthtrackerJreAnimateRotateOpenNonajax = function( angle, duration, easing, complete ) {
		var args = $.speed( duration, easing, complete );
		var step = args.step;
		return this.each( function( i, e ) {
			args.complete = $.proxy( args.complete, e );
			args.step = function( now ) {
				$.style( e, 'transform', 'rotate(' + now + 'deg)' );
				if ( step ) {
					return step.apply( e, arguments );
				}
			};
			$({deg: 0}).animate({deg: angle}, args );
		});
	};

	// A function that will allow the spinning of the yellow circular 'Expand' image when the container closes
	$.fn.wphealthtrackerJreAnimateRotateCloseNonajax = function( angle, duration, easing, complete ) {
		var args = $.speed( duration, easing, complete );
		var step = args.step;
		return this.each( function( i, e ) {
			args.complete = $.proxy( args.complete, e );
			args.step = function( now ) {
				$.style( e, 'transform', 'rotate(' + now + 'deg)' );
				if ( step ) {
					return step.apply( e, arguments );
				}
			};

			$({deg: 180}).animate({deg: angle}, args );
		});
	};


	// For expanding/minimizing the 'Enter Data for' container on all tabs.
	function wphealthtrackerJreExpMinEnter() {
		$( document ).on( 'click', '#wphealthtracker-expansion-div-enter', function( event ) {
			var arrowRotate = $( '#wphealthtracker-indiv-choice-enter .wphealthtracker-expand-minimize-div #wphealthtracker-indiv-choice-img-rotate-enter' );

			var vitalsForm = $( this ).next();
			var curHeight = 0;
			var autoHeight = 0;

			if ( 0 === vitalsForm.height() ) {

				$( '#wphealthtracker-expand-minimize-p-enter' ).animate({
					opacity: 0
				}, {
					duration: 500,
					complete: function() {
						$( this ).text( wphealthtrackerPhpVariables.adminjstransstring10 );
						$( this ).animate({'opacity': '1'});
					}
				});

				// Get Default Height
				curHeight = vitalsForm.height();

				// Get Auto Height
				autoHeight = vitalsForm.css( 'height', 'auto' ).height();

				// Reset to Default Height
				vitalsForm.height( curHeight );

				// Animate to Auto Height
				vitalsForm.stop().animate({
					height: autoHeight
				}, {
					duration: 1000,
					complete: function() {
						vitalsForm.css({'height': 'auto'});
						vitalsForm.find( '#wphealthtracker-save-daily-enter' ).attr( 'data-origheight', vitalsForm.css( 'height' ) );
					}
				});
				arrowRotate.wphealthtrackerJreAnimateRotateOpenNonajax( 180, {
					duration: 1000,
					easing: 'linear'
				});

			} else {

				$( '#wphealthtracker-expand-minimize-p-enter' ).animate({
					opacity: 0
				}, {
					duration: 500,
					complete: function() {
						$( this ).text( wphealthtrackerPhpVariables.adminjstransstring9 );
						$( this ).animate({'opacity': '1'});
					}
				});

				// Animate to Auto Height
				vitalsForm.animate({ height: '0px' }, 1000 );
				arrowRotate.wphealthtrackerJreAnimateRotateCloseNonajax( 360, {
					duration: 1000,
					easing: 'linear'
				});
			}

			event.preventDefault ? event.preventDefault() : event.returnValue = false;
		});
	}

	// For expanding/minimizing the 'View & Edit Saved Data' container on all tabs.
	function wphealthtrackerJreExpMinView() {
		$( document ).on( 'click', '#wphealthtracker-expansion-div-view', function( event ) {

			var arrowRotate = $( '#wphealthtracker-indiv-choice-view #wphealthtracker-indiv-choice-img-rotate-view' );

			var vitalsForm = $( '#wphealthtracker-indiv-choice-view #wphealthtracker-selected-user-response-id-view' );

			var curHeight = 0;
			var autoHeight = 0;

			if ( 0 === vitalsForm.height() ) {

				$( '#wphealthtracker-expand-minimize-p-view' ).animate({
					opacity: 0
				}, {
					duration: 500,
					complete: function() {
						$( this ).text( wphealthtrackerPhpVariables.adminjstransstring10 );
						$( this ).animate({'opacity': '1'});
					}
				});

				// Get Default Height
				curHeight = vitalsForm.height();

				// Get Auto Height
				autoHeight = vitalsForm.css( 'height', 'auto' ).height();

				// Reset to Default Height
				vitalsForm.height( curHeight );

				// Animate to Auto Height
				vitalsForm.stop().animate({
					height: autoHeight
				}, {
					duration: 1000,
					complete: function() {

						vitalsForm.css({'height': 'auto'});

						// Show the entries on the 'View' container
						$( '#wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row, #wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row-actual' ).animate({'opacity': '1'}, 300 );
					}
				});

				arrowRotate.wphealthtrackerJreAnimateRotateOpenNonajax( 180, {
					duration: 1000,
					easing: 'linear'
				});

			} else {

				$( '#wphealthtracker-expand-minimize-p-view' ).animate({
					opacity: 0
				}, {
					duration: 500,
					complete: function() {
						$( this ).text( wphealthtrackerPhpVariables.adminjstransstring9 );
						$( this ).animate({'opacity': '1'});
					}
				});

				// Animate to Auto Height
				vitalsForm.animate({ height: '0px' }, 1000 );
				arrowRotate.wphealthtrackerJreAnimateRotateCloseNonajax( 360, {
					duration: 1000,
					easing: 'linear',
					complete: function() {

						// Hide the entries on the 'View' container again
						$( '#wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row, #wphealthtracker-selected-user-response-id-view .wphealthtracker-response-form-all-data-row-actual' ).css({'opacity': '0'});

					}
				});
			}

			event.preventDefault ? event.preventDefault() : event.returnValue = false;
		});
	}

	// Function to display the admin pointer message when entering the Question Mark image with mouse...
	function wphealthtrackerJreAdminPointersJavascript() {

		$( 'body' ).on( 'mouseenter', '.wphealthtracker-icon-image-question, .wphealthtracker-icon-image-question-enter-view, .wphealthtracker-icon-image-question-dashboard, .wphealthtracker-icon-image-question-enter-view-food, .wphealthtracker-icon-image-question-enter-view-exercise', function() {

			var label = $( this ).attr( 'data-label' );
			var pointer;

			// Switch for which admin message to display
			switch ( label ) {
			case 'selectauser':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring1 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring2 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring24  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-weight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring3 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring4 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-bp':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring5 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring6 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring13  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-bs':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.vitalstrans11 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring14 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring15  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-bt':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.vitalstrans18 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring18 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring19  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-bo':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.vitalstrans15 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring16 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring17  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-hr':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.vitalstrans22 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring20 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring21  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-img':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans27 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring22 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-files':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans31 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring23 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'vitals-cholesterol':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.vitalstrans4 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring11 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-item':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring27 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring25 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring26  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-category':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring30 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring28 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring29  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-time-consumed':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans3 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring31 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-calories':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans8 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring32 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-calories-measurement':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring34 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring33 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-protein':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans12 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring35 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-protein-type':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring36 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring37 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-fat-total':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans4 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring38 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-fat-sat':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans5 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring39 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-fat-monounsat':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans6 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring40 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-fat-polyunsat':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans7 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring41 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-carbs-total':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans20 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring42 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-carbs-fiber':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans21 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring43 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-carbs-sugars':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans22 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring44 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-image':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans28 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring45 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-file':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans32 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring46 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-image-button':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans29 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring47 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'diet-food-file-button':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans33 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring48 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-name':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.exercisetrans7 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring49 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.adminjstransstring12  +  '</span> '  +  wphealthtrackerPhpVariables.adminjstransstring50  +  '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-type':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.exercisetrans8 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring51 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-time':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.exercisetrans14 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring53 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-time-measure':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring55 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring54 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-distance':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.exercisetrans15 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring56 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-distance-measure':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring58 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring57 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-muscle-groups':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.exercisetrans19 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring59 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-weight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring61 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring60 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-reps':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring63 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring62 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-set-measure':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring65 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring64 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-image':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans28 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring66 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-file':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans32 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring67 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-image-button':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans29 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring68 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'exercise-file-button':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.commontrans33 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring69 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-daystracked':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring7 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring8 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			default:
			}

			// Open the pointer on mouseenter
			pointer.pointer( 'open' );

			// Close the pointer on mouseleave
			$( 'body' ).on( 'mouseleave', '.wphealthtracker-icon-image-question, .wphealthtracker-icon-image-question-enter-view, .wphealthtracker-icon-image-question-dashboard, .wphealthtracker-icon-image-question-enter-view-food, .wphealthtracker-icon-image-question-enter-view-exercise', function() {
				pointer.pointer( 'close' );
			});
		});
	}
});
