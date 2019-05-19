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

		// For checking for, and displaying error message, if emails don't match.
		wphealthtrackerJreUsersEmailMatching();

		// For checking for, and displaying error message, if passwords don't match.
		wphealthtrackerJreUsersPasswordMatching();

		// For choosing a profile image
		wphealthtrackerJreUsersProfileImageUpload();

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

	// For checking for, and displaying error message if, emails don't match.
	function wphealthtrackerJreUsersEmailMatching() {

		$( '#wphealthtracker-response-form-input-text-emailconfirm, #wphealthtracker-response-form-input-text-email' ).keyup( function() {

			// Get the two E-Mail values
			var email = $( '#wphealthtracker-response-form-input-text-email' ).val();
			var emailConfirm = $( '#wphealthtracker-response-form-input-text-emailconfirm' ).val();
			var message = $( '#wphealthracker-create-users-match-response-p-email' );

			var happy = '<img class="wphealthtracker-stats-good-data-smile" id="wphealthtracker-stats-good-data-smile-emails-match" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg">';

			var shocked = '<img class="wphealthtracker-stats-good-data-smile" id="wphealthtracker-stats-good-data-smile-emails-mismatch" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';

			setTimeout( function() {
				if ( email !== emailConfirm ) {
					message.html( wphealthtrackerPhpVariables.usertrans37 + '<br/>' + wphealthtrackerPhpVariables.usertrans40 + shocked );
					message.css({'color': '#DE235A'});
					message.animate({'opacity': '1'}, 300 );
				} else {
					message.html( wphealthtrackerPhpVariables.usertrans37 + '<br/>' + wphealthtrackerPhpVariables.usertrans38 + happy );
					message.css({'color': '#54AD59'});
					message.animate({'opacity': '1'}, 300 );
				}
			}, 1000 );
		});
	}

	// For checking for, and displaying error message if, passwords don't match.
	function wphealthtrackerJreUsersPasswordMatching() {

		$( document ).on( 'keyup', '#wphealthtracker-response-form-input-text-passwordconfirm, #wphealthtracker-response-form-input-text-password', function( event ) {

			// Get the two E-Mail values
			var password = $( '#wphealthtracker-response-form-input-text-password' ).val();
			var passwordConfirm = $( '#wphealthtracker-response-form-input-text-passwordconfirm' ).val();
			var message = $( '#wphealthracker-create-users-match-response-p-password' );

			var happy = '<img class="wphealthtracker-stats-good-data-smile" id="wphealthtracker-stats-good-data-smile-password-match" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg">';

			var shocked = '<img class="wphealthtracker-stats-good-data-smile" id="wphealthtracker-stats-good-data-smile-password-mismatch" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';

			setTimeout( function() {
				if ( password !== passwordConfirm ) {
					message.html( wphealthtrackerPhpVariables.usertrans39 + '<br/>' + wphealthtrackerPhpVariables.usertrans40 + shocked );
					message.css({'color': '#DE235A'});
					message.animate({'opacity': '1'}, 300 );
				} else {
					message.html( wphealthtrackerPhpVariables.usertrans39 + '<br/>' + wphealthtrackerPhpVariables.usertrans38 + happy );
					message.css({'color': '#54AD59'});
					message.animate({'opacity': '1'}, 300 );
				}
			}, 1000 );
		});
	}

	// For choosing a profile image.
	function wphealthtrackerJreUsersProfileImageUpload() {


		$( document ).on( 'click', '#wphealthtracker-response-form-input-text-profileimage-button', function( event ) {

			var imageFrame;
			event.preventDefault();

			if ( imageFrame ) {
				imageFrame.open();
			}

			// Define imageFrame as wp.media object
			imageFrame = wp.media({
				title: 'Select Media',
				multiple: false,
				library: {
					type: 'image'
				}
			});

			imageFrame.on( 'close', function() {
				var selection =  imageFrame.state().get( 'selection' );
				selection.each( function( attachment ) {
					$( '#wphealthtracker-response-form-input-text-profileimage-url' ).val( attachment.attributes.url );
					$( '#wphealthtracker-create-users-profile-img-div' ).html( '<img id="wphealthracker-create-user-profile-img-actual" src="' + attachment.attributes.url + '" />' );
				});
			});

			imageFrame.on( 'open', function() {

			});

			imageFrame.open();
		});
	}

});
