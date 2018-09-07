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
			case 'dash-conseqdaystracked':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans4 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring71 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-firstdaytracked':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans5 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring72 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-lastdaytracked':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans6 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring73 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-largestgap':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans7 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring74 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-daystracked':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans2 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring70 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-numberofgaps':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans14 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring75 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-startingweight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans8 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring76 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-recentweight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans9 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring77 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-startingbp':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans12 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring78 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-recentbp':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans13 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring79 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-startingcho':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans10 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring80 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-recentcho':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans11 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring81 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-highestweight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans6 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring82 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-lowestweight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans7 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring83 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-averageweight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans8 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring84 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-totalweightlost':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans9 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring85 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-totalweightgained':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans17 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring86 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-largestsingleweightloss':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring87 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring88 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-largestsingleweightgain':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring89 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring90 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-averagebpreading':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring91 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring92 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-highestbpreading':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring93 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring94 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-lowestbpreading':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring95 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring96 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-highestsys':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring97 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring98 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-lowestsys':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring99 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring100 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-highestdys':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring101 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring102 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-lowestdys':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring103 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring104 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;

			case 'd3-vitals-averageldl':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans42 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring105 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-averagehdl':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans43 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring106 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-averagetri':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans44 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring107 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-averagetotalcho':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans45 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring108 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-highesttotalcho':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans46 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring109 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-lowesttotalcho':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans47 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring110 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-weightchartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans1 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring111 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-bloodpressurechartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans21 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring112 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-vitals-cholesterolchartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans38 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring113 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-totalunique':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans33 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring114 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-top3consumedfoods':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans34 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring115 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-averagedailycals':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans42 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring116 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-averagedailykilojoules':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans43 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring117 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-averagedailyprotein':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans35 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring118 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-averagedailycarbs':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans36 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring119 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-averagedailysugars':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans37 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring120 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-averagedailytotalfats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans38 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring121 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-averagedailyfiber':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans39 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring122 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-mostconsumedfood':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans56 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring123 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-averagesatfat':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans44 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring124 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-averagemonosatfat':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans45 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring125 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-averagepolysatfat':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans46 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring126 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-totalcalsconsumed':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans57 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring127 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-totalkilojoulesconsumed':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans61 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring128 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-highestsinglefood':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.adminjstransstring130 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring129 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-highestconseqdecrease':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans44 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring131 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-highestconseqincrease':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.diettrans45 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring132 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-totalprotein':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans48 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring133 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-totalcarbs':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans47 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring134 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-totalfats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans49 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring135 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-foodchartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans53 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring136 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-energychartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans62 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring137 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-diet-macrobutrientschartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans63 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring138 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-totaluniqueexercises':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans50 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring139 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-topexercise':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans52 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring140 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-topexercisecategory':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans56 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring158 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-totalexercisecategories':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans57 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring141 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'dash-totalmusclegroups':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans58 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring143 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-topmusclegroups':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans59 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring144 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-totalsecondsexercised':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans53 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring145 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-totalminutesexercised':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans54 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring146 + '</p>',
					position: {
						edge: 'left',
						align: 'left'
					}
				});
				break;
			case 'dash-totalhoursexercised':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans55 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring147 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-distancechartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans74 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring148 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-musclegroupschartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans90 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring149 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-durationchartandstats':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans99 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring150 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-totalmiles':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans79 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring151 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-totalkilometers':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans80 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring152 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-totalmeters':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans81 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring153 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-totalyards':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans82 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring154 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-totalfeet':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans83 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring155 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-aroundearth':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans88 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring156 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-earthtomoon':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.d3trans89 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring157 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-totalperformed':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans61 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring159 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-longesthours':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans62 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring160 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-longestminutes':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans63 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring161 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-longestseconds':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans64 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring162 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'd3-exercise-averageoccurance':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.dashboardtrans65 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring163 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-firstname':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans2 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring164 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-lastname':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans3 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring165 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-email':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans4 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring166 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-emailconfirm':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans5 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring167 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-password':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans6 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring168 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-passwordconfirm':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans7 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring169 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-username':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans8 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring170 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-role':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans9 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring171 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans41  +  '</span> - '  +  wphealthtrackerPhpVariables.adminjstransstring172  + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans42  +  '</span> - '  +  wphealthtrackerPhpVariables.adminjstransstring173 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans43  +  '</span> - '  +  wphealthtrackerPhpVariables.adminjstransstring174 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans45  +  '</span> - '  +  wphealthtrackerPhpVariables.adminjstransstring175 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-basics':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans1 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring176 + '<br/><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans2  +  '</span><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans4  +  '</span><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans6  +  '</span><br/><span class="wphealthtracker-admin-bold-tip">'  +  wphealthtrackerPhpVariables.usertrans8  +  '</span></p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-contactinfo':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans48 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring177 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-country':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans11 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring178 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-street1':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans12 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring179 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-street2':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans13 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring180 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-city':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans14 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring181 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-state':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans15 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring182 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-zip':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans16 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring183 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-phone':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans17 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring184 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profile':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans56 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring185 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profileimage':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans57 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring186 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profilebirthday':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans59 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring187 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profilegender':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans60 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring188 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profileheight':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans64 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring189 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profilemainfocus':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans65 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring190 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profilemotivationalquote':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans75 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring191 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
					}
				});
				break;
			case 'user-profilebio':
				pointer = $( this ).pointer({
					content: '<h3>' + wphealthtrackerPhpVariables.usertrans77 + '</h3><p class="wphealthtracker-admin-pointer">' + wphealthtrackerPhpVariables.adminjstransstring192 + '</p>',
					position: {
						edge: 'right',
						align: 'right'
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
