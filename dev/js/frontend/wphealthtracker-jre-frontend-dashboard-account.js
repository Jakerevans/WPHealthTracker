/**
 * JavaScript Functions - wphealthtracker-jre-frontend-dietstats.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

console.log( 'This is the JavaScript Object that holds all PHP Variables for use in the wphealthtracker-jre-frontend-dietstats.js file' );
console.log( wphealthtrackerPhpVariables );

// All functions wrapped in jQuery(document).ready()...
jQuery( document ).ready( function( $ ) {
	'use strict';

	/* BEGINNING SECTION TO CALL ALL FUNCTIONS IN FILE... */

		// For expanding the Registration Form.
		wphealthtrackerJreExpandRegistrationForm();

	/* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


	// For expanding the Registration Form.
	function wphealthtrackerJreExpandRegistrationForm() {
		$( document ).on( 'click', '#wphealthtracker-dashboard-register-button', function( event ) {

			$( this ).attr( 'disabled', true );
			$( this ).css({'pointer-events': 'none', 'opacity': '0.3' });
			var registrationForm = $( this ).next();
			var curHeight = 0;
			var autoHeight = 0;

			// Get Default Height
			curHeight = registrationForm.height();

			// Get Auto Height
			autoHeight = registrationForm.css( 'height', 'auto' ).height();

			// Reset to Default Height
			registrationForm.height( curHeight );

			// Animate to Auto Height
			registrationForm.stop().animate({
				height: autoHeight,
				opacity: 1,
			}, {
				duration: 1000,
				complete: function() {
					registrationForm.css({'height': 'auto'});
					
				}
			});
			
			
		});
	}

});
