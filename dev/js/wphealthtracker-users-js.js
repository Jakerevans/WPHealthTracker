/**
 * JavaScript Functions - wphealthtracker-users-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

jQuery( document ).ready( function( $ ) {

	'use strict';

	/* BEGINNING SECTION TO CALL ALL FUNCTIONS IN FILE... */

	// For checking for, and displaying error message if, emails don't match.
	wphealthtrackerJreUsersEmailMatching();

	// For checking for, and displaying error message if, passwords don't match.
	wphealthtrackerJreUsersPasswordMatching();

	// For revealing the Godmode message
	wphealthtrackerJreUsersRevealGodmodeMessage();

	/* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */


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

	function wphealthtrackerJreUsersPasswordMatching() {

		$( '#wphealthtracker-response-form-input-text-passwordconfirm, #wphealthtracker-response-form-input-text-password' ).keyup( function() {

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

	function wphealthtrackerJreUsersRevealGodmodeMessage() {

		$( '#wphealthtracker-response-form-select-create-user-role' ).change( function() {

			if ( wphealthtrackerPhpVariables.usertrans45 === $( this ).val() ) {
				
			}

		});

	}


});
