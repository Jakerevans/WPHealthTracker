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

	// For checking for, and displaying error message, if emails don't match.
	wphealthtrackerJreUsersEmailMatching();

	// For checking for, and displaying error message, if passwords don't match.
	wphealthtrackerJreUsersPasswordMatching();

	// For revealing the Godmode message
	wphealthtrackerJreUsersRevealGodmodeMessage();

	// For revealing the password text
	wphealthtrackerJreUsersRevealPassword();

	// For choosing a profile image
	wphealthtrackerJreUsersProfileImageUpload();

	/* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */

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

	// For revealing the Godmode message.
	function wphealthtrackerJreUsersRevealGodmodeMessage() {

		$( '#wphealthtracker-response-form-select-create-user-role' ).change( function() {

			var messageBlock = $( '#wphealthtracker-create-user-godmode-warning-message' );

			if ( wphealthtrackerPhpVariables.usertrans45 === $( this ).val() ) {
				messageBlock.css({'display': 'block'});
				messageBlock.animate({'height': '175px', 'opacity': '1'}, 600 );

			} else {
				messageBlock.animate({'height': 0, 'opacity': 0}, 600 );
			}
		});
	}

	// For revealing the passwords.
	function wphealthtrackerJreUsersRevealPassword() {

		$( '#wphealthtracker-create-user-show-password' ).click( function() {

			var passwordOne = document.getElementById( 'wphealthtracker-response-form-input-text-password' );
			var passwordTwo = document.getElementById( 'wphealthtracker-response-form-input-text-passwordconfirm' );

			if ( 'password' === passwordOne.type ) {
				passwordOne.type = 'text';
				$( '#wphealthtracker-create-user-show-password' ).html( wphealthtrackerPhpVariables.usertrans80 );
			} else {
				passwordOne.type = 'password';
				$( '#wphealthtracker-create-user-show-password' ).html( wphealthtrackerPhpVariables.usertrans79 );
			}

			if ( 'password' === passwordTwo.type ) {
				$( '#wphealthtracker-create-user-show-password' ).html( wphealthtrackerPhpVariables.usertrans80 );
				passwordTwo.type = 'text';
			} else {
				passwordTwo.type = 'password';
				$( '#wphealthtracker-create-user-show-password' ).html( wphealthtrackerPhpVariables.usertrans79 );
			}
		});
	}

	// For choosing a profile image.
	function wphealthtrackerJreUsersProfileImageUpload() {

		$( '#wphealthtracker-response-form-input-text-profileimage-button' ).click( function( e ) {

			var imageFrame;
			e.preventDefault();

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
