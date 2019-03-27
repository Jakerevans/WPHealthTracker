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

	// Enables the Select2 library for selecting a user to edit.
	wphealthtrackerEnableSelect2();

	// Enables the Select This User button to edit the user;
	wphealthtrackerEditUserEnableButton();

	// Populates the Eidt User form area after a user has been selected.
	wphealthtrackerEditUserPopulateForm();

	// Function to save edits to a WPHealthTracker User.
	wphealthtrackerEditUser();

	/* ENDING SECTION TO CALL ALL FUNCTIONS IN FILE... */

	// For making data checks before saving user
	function wphealthtrackerDataChecksForSavingUserEdits() {

		var firstname = $( '#wphealthtracker-response-form-input-text-firstname' ).val();
		var email = $( '#wphealthtracker-response-form-input-text-email' ).val();
		var emailconfirm = $( '#wphealthtracker-response-form-input-text-emailconfirm' ).val();
		var password = $( '#wphealthtracker-response-form-input-text-password' ).val();
		var passwordconfirm = $( '#wphealthtracker-response-form-input-text-passwordconfirm' ).val();
		var username = $( '#wphealthtracker-response-form-input-text-username' ).val();
		var role = $( '#wphealthtracker-response-form-select-create-user-role' ).val();

		// Set role to default of User if not set
		if ( null === role ) {
			$( '#wphealthtracker-response-form-select-create-user-role' ).val( wphealthtrackerPhpVariables.usertrans41 );
			role = 'user';
		}


		// Checking for missing data
		if ( '' === firstname || '' === email || '' === emailconfirm || '' === password || '' === passwordconfirm || '' === username ) {

			if ( '' === firstname ) {
				$( '#wphealthtracker-response-form-input-text-firstname' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );
				alert( wphealthtrackerPhpVariables.commontrans4 );
				$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-firstname' ).offset().top - 150 }, 1000 );
				return false;
			}

			if ( '' === email ) {
				$( '#wphealthtracker-response-form-input-text-email' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );
				alert( wphealthtrackerPhpVariables.commontrans4 );
				$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-email' ).offset().top - 150 }, 1000 );
				return false;
			}

			if ( '' === emailconfirm ) {
				$( '#wphealthtracker-response-form-input-text-emailconfirm' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );
				alert( wphealthtrackerPhpVariables.commontrans4 );
				$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-emailconfirm' ).offset().top - 150 }, 1000 );
				return false;
			}

			if ( '' === password ) {
				$( '#wphealthtracker-response-form-input-text-password' ).prev().prev().prev().addClass( 'wphealthtracker-missing-data-animation' );
				alert( wphealthtrackerPhpVariables.commontrans4 );
				$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-password' ).offset().top - 150 }, 1000 );
				return false;
			}

			if ( '' === passwordconfirm ) {
				$( '#wphealthtracker-response-form-input-text-passwordconfirm' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );
				alert( wphealthtrackerPhpVariables.commontrans4 );
				$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-passwordconfirm' ).offset().top - 150 }, 1000 );
				return false;
			}

			if ( '' === username ) {
				$( '#wphealthtracker-response-form-input-text-username' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );
				alert( wphealthtrackerPhpVariables.commontrans4 );
				$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-username' ).offset().top - 150 }, 1000 );
				return false;
			}
		}

		// Now checking for matching E-Mail.
		if ( wphealthtrackerPhpVariables.usertrans37 + wphealthtrackerPhpVariables.usertrans40 === $( '#wphealthracker-create-users-match-response-p-email' ).text() ) {

			$( '#wphealthtracker-response-form-input-text-emailconfirm' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );

			$( '#wphealthtracker-response-form-input-text-email' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );

			alert( wphealthtrackerPhpVariables.usertrans84 );

			$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-email' ).offset().top - 150 }, 1000 );
			return false;
		}

		// Now checking for matching Passwords.
		if ( wphealthtrackerPhpVariables.usertrans39 + wphealthtrackerPhpVariables.usertrans40 === $( '#wphealthracker-create-users-match-response-p-password' ).text() ) {

			$( '#wphealthtracker-response-form-input-text-passwordconfirm' ).prev().prev().addClass( 'wphealthtracker-missing-data-animation' );

			$( '#wphealthtracker-response-form-input-text-password' ).prev().prev().prev().addClass( 'wphealthtracker-missing-data-animation' );

			alert( wphealthtrackerPhpVariables.usertrans85 );

			$( 'html, body' ).animate({ scrollTop: $( '#wphealthtracker-response-form-input-text-password' ).offset().top - 150 }, 1000 );
			return false;
		}

		return true;
	}

	// Enables the Select2 library for selecting a user to edit.
	function wphealthtrackerEnableSelect2() {

		// Activate the Select2 stuff WITHOUT the option of adding in custom dynamic Option
		$( '.select2-input-userstoedit' ).select2({
			tags: false
		});
	}

	// Enables the Select This User button to edit the user.
	function wphealthtrackerEditUserEnableButton() {
		$( document ).on( 'change', '#wphealthtracker-edituser-name-search-input', function( event ) {

			if ( 'defaultselection' !== $( this ).val() ) {
				$( '#wphealthtracker-edituser-name-search-button' ).removeAttr( 'disabled' );
			} else {
				$( '#wphealthtracker-edituser-name-search-button' ).attr( 'disabled', 'true' );
			}
		});
	}

	// Populates the Edit User form area after a user has been selected.
	function wphealthtrackerEditUserPopulateForm() {


		$( document ).on( 'click', '#wphealthtracker-edituser-name-search-button', function( event ) {

			var wpuserid = $( '#wphealthtracker-edituser-name-search-input' ).val();
			var request = '';
			var data = {
				'action': 'wphealthtracker_jre_selecteduser_edit_user_populate_action',
				'security': wphealthtrackerPhpVariables.editusersnonce1,
				'wpuserid': wpuserid
			};

			// Hide the response div until we've fully populated it.
			$( '.wphealthtracker-create-user-div' ).css({'opacity':'0'});

			// Reset things.
			$( '.wphealthtracker-create-user-div' ).html( '' );

			$( '#wphealthtracker-spinner-select-user' ).animate({'opacity': '1'});

			console.log( 'This is the data being sent to the server to retreive the user\'s data and the form for the "Edit & Delete Users" container on the "Edit & Delete Users" tab:' );
			console.log( data );

			request = $.ajax({
				url: ajaxurl,
				type: 'POST',
				data: data,
				timeout: 0,
				success: function( response ) {

					var response = response.split( '--sep--' );
					var userData = JSON.parse( response[1] );
					var height   = '';
					var editButtonHtml = '<div class="wphealthtracker-save-spinner-response-div"><div class="wphealthtracker-spinner-primary" id="wphealthtracker-spinner-save-users"></div><div class="wphealthtracker-response-message-div" id="wphealthtracker-response-message-users-div"></div><button id="wphealthtracker-edit-existing-users">' + wphealthtrackerPhpVariables.editusertrans4 + '</button></div>';

					$( '.wphealthtracker-create-user-div' ).html( response[0] + editButtonHtml );

					// Now populate the form with the user's data
					$( '#wphealthtracker-response-form-input-text-firstname' ).val( userData.firstname );
					$( '#wphealthtracker-response-form-input-text-lastname' ).val( userData.lastname );
					$( '#wphealthtracker-response-form-input-text-email' ).val( userData.email );
					$( '#wphealthtracker-response-form-input-text-emailconfirm' ).val( userData.email );

					// Hide the Username field, as Usernames cant be changed once created.
					$( '#wphealthtracker-response-form-usernamerole-row-div' ).children(":first").css({'display':'none'});
					$( '#wphealthtracker-response-form-input-text-username' ).val( userData.username );

					$( '#wphealthtracker-response-form-password1-row-div' ).html( '<button onclick="window.open(\'' + response[2] + '\');" type="button" target="_blank"  class="button wp-generate-pw hide-if-no-js" id="wphealthtracker-password-edit-link">Reset User\'s Password</button>' );
					$( '#wphealthtracker-response-form-password2-row-div' ).css({'display':'none'});




					

					if ( 'godmode' === userData.role ) {
						$( '#wphealthtracker-response-form-select-create-user-role' ).val( 'SuperAdmin' );
					} else {
						$( '#wphealthtracker-response-form-select-create-user-role' ).val( userData.role );
					}

					$( '#wphealthtracker-response-form-input-text-password' ).val();

					$( '#wphealthtracker-response-form-input-text-country' ).val( userData.country );
					$( '#wphealthtracker-response-form-input-text-street1' ).val( userData.streetaddress1 );
					$( '#wphealthtracker-response-form-input-text-street2' ).val( userData.streetaddress2 );
					$( '#wphealthtracker-response-form-input-text-city' ).val( userData.city );
					$( '#wphealthtracker-response-form-input-text-state' ).val( userData.state );
					$( '#wphealthtracker-response-form-input-text-zip' ).val( userData.zip );
					$( '#wphealthtracker-response-form-input-text-phone' ).val( userData.phone );
					$( '#wphealthtracker-response-form-input-text-profileimage-url' ).val( userData.profileimage );
					$( '#wphealthtracker-response-form-input-date-birthday' ).val( userData.birthday );
					$( '#wphealthtracker-response-form-select-create-user-gender' ).val( userData.gender );

					if ( '' !== userData.height && null !== userData.height ) {
						height = userData.height.split( ' ' );
						$( '#wphealthtracker-response-form-select-create-user-height-feet' ).val( height[0]);
						$( '#wphealthtracker-response-form-select-create-user-height-inches' ).val( height[1]);
					}

					$( '#wphealthtracker-response-form-select-create-user-mainfocus' ).val( userData.mainexercisecategory );
					$( '#wphealthtracker-response-form-input-textarea-motivational-quote' ).val( userData.favoritemotivationalquote );
					$( '#wphealthtracker-response-form-input-textarea-bio' ).val( userData.bio );


					$( '.wphealthtracker-create-user-div' ).animate({'opacity': '1'});
					$( '#wphealthtracker-spinner-select-user' ).animate({'opacity': '0'});

				},
				error: function( jqXHR, textStatus, errorThrown ) {
					console.log( errorThrown );
					console.log( textStatus );
					console.log( jqXHR );
				}
			});
		});
	}

	// Function to save edits to a WPHealthTracker User.
	function wphealthtrackerEditUser() {


		$( document ).on( 'click', '#wphealthtracker-edit-existing-users', function( event ) {

			var wpuserid = $( '#wphealthtracker-edituser-name-search-input' ).val();
			var proceed = wphealthtrackerDataChecksForSavingUserEdits();
			var firstname = $( '#wphealthtracker-response-form-input-text-firstname' ).val();
			var lastname = $( '#wphealthtracker-response-form-input-text-lastname' ).val();
			var email = $( '#wphealthtracker-response-form-input-text-email' ).val();
			var emailconfirm = $( '#wphealthtracker-response-form-input-text-emailconfirm' ).val();
			var password = $( '#wphealthtracker-response-form-input-text-password' ).val();
			var passwordconfirm = $( '#wphealthtracker-response-form-input-text-passwordconfirm' ).val();
			var username = $( '#wphealthtracker-response-form-input-text-username' ).val();
			var role = $( '#wphealthtracker-response-form-select-create-user-role' ).val();
			var country = $( '#wphealthtracker-response-form-input-text-country' ).val();
			var street1 = $( '#wphealthtracker-response-form-input-text-street1' ).val();
			var street2 = $( '#wphealthtracker-response-form-input-text-street2' ).val();
			var city = $( '#wphealthtracker-response-form-input-text-city' ).val();
			var state = $( '#wphealthtracker-response-form-input-text-state' ).val();
			var zip = $( '#wphealthtracker-response-form-input-text-zip' ).val();
			var phone = $( '#wphealthtracker-response-form-input-text-phone' ).val();
			var profileimage = $( '#wphealthtracker-response-form-input-text-profileimage-url' ).val();
			var birthday = $( '#wphealthtracker-response-form-input-date-birthday' ).val();
			var gender = $( '#wphealthtracker-response-form-select-create-user-gender' ).val();
			var heightfeet = $( '#wphealthtracker-response-form-select-create-user-height-feet' ).val();
			var heightinches = $( '#wphealthtracker-response-form-select-create-user-height-inches' ).val();
			var mainfocus = $( '#wphealthtracker-response-form-select-create-user-mainfocus' ).val();
			var motivationalquote = $( '#wphealthtracker-response-form-input-textarea-motivational-quote' ).val();
			var bio = $( '#wphealthtracker-response-form-input-textarea-bio' ).val();
			var wpUserResults = '';
			var responseHtml = '';
			var responsetype = '';
			var responseDiv = $( '#wphealthtracker-response-message-users-div' );
			var data = {};

			$( '#wphealthtracker-spinner-save-users' ).animate({'opacity': 1}, 500 );

			if ( proceed ) {

				data = {
					'action': 'wphealthtracker_jre_create_wp_users_data_action',
					'security': wphealthtrackerPhpVariables.usersnonce2,
					'firstname': firstname,
					'lastname': lastname,
					'email': email,
					'emailconfirm': emailconfirm,
					'password': password,
					'passwordconfirm': passwordconfirm,
					'username': username,
					'role': role,
					'country': country,
					'street1': street1,
					'street2': street2,
					'city': city,
					'state': state,
					'zip': zip,
					'phone': phone,
					'profileimage': profileimage,
					'birthday': birthday,
					'gender': gender,
					'heightfeet': heightfeet,
					'heightinches': heightinches,
					'mainfocus': mainfocus,
					'motivationalquote': motivationalquote,
					'bio': bio,
					'wpuserid': wpuserid
				};

				$.ajax({
					url: ajaxurl,
					type: 'POST',
					data: data,
					timeout: 0,
					success: function( response ) {

						console.log('REsponse from checking for existing emails and usernames is:')
						console.log(response)

						if ( 'Username Exists' === response ) {

							console.log('in usernames exists')
							console.log(response)

							$( '#wphealthtracker-spinner-save-users' ).animate({'opacity': 0}, 100 );

							// Create the Error messaging here - print out the mysql error for user to report back with
							responseHtml = '<img class="wphealthtracker-ajax-return-img" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg" /><p class="wphealthtracker-success-title">' + wphealthtrackerPhpVariables.ajaxreturn11 + '</p><p class="wphealthtracker-success-description">' + wphealthtrackerPhpVariables.usertrans86  +  ' '  +  username  +  '!</br>' + wphealthtrackerPhpVariables.usertrans87 + '</p>';

							// Add the response HTML and animate the height...
							responseDiv.html( responseHtml );
							responseDiv.animate({'height': '150px', 'opacity': '1'}, 500 );
						}

						if ( 'E-Mail Exists' === response ) {

							console.log('in emails exists')
							console.log(response)

							$( '#wphealthtracker-spinner-save-users' ).animate({'opacity': 0}, 100 );

							// Create the Error messaging here - print out the mysql error for user to report back with
							responseHtml = '<img class="wphealthtracker-ajax-return-img" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg" /><p class="wphealthtracker-success-title">' + wphealthtrackerPhpVariables.ajaxreturn11 + '</p><p class="wphealthtracker-success-description">' + wphealthtrackerPhpVariables.usertrans88  +  ' '  +  email  +  '!</br>' + wphealthtrackerPhpVariables.usertrans89 + '</p>';

							// Add the response HTML and animate the height...
							responseDiv.html( responseHtml );
							responseDiv.animate({'height': '150px', 'opacity': '1'}, 500 );
						}

						console.log('typeof response is:')
						console.log(typeof response)
						response = response.split('---sep---');

						if ( '$user_id' === response[0]  ) {

							console.log('in number typeof')
							console.log(response)

							data.action = 'wphealthtracker_jre_save_users_data_action';
							data.security = wphealthtrackerPhpVariables.usersnonce1;
							data.wpuserid = response[1];

							$.ajax({
								url: ajaxurl,
								type: 'POST',
								data: data,
								timeout: 0,
								success: function( response ) {

									console.log('in success of call to actually create user')
									console.log(response)

									console.log( 'This is what we received back from the Server after trying to Insert/Update some daily data. Response[0] is either how many rows were modified, or the DB error message. Response[1] is the type of $wpdb function. Response[2] is Humandate. Response[3] is WP User ID. Response[4] is the $wpdb->prepared Query. Response[5] is the list of Transients that were deleted. Response[6] is the actual array of data we tried to insert/update with.' );
									response = JSON.parse( response );
									response[6] = JSON.parse( response[6]);
									console.log( response );

									// Turn off spinner...
									$( '#wphealthtracker-spinner-save-users' ).animate({'opacity': 0}, 100 );

									// We successfully executed our DB query - doesn't mean anything was actually changed though - we could have effected zero rows - still, no errors so we're calling it good.
									responsetype = false;
									responseHtml = '';
									if ( 1 === response[0] || 0 === response[0]) {

										// Flag to determine what height to animate reponse div to
										responsetype = true;

										// Modify the response based on type of query
										if ( 'insert' === response[1]) {
											responseHtml = '<img class="wphealthtracker-ajax-return-img" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg" /><p class="wphealthtracker-success-title">' + wphealthtrackerPhpVariables.ajaxreturn1 + '</p><p class="wphealthtracker-success-description">' + wphealthtrackerPhpVariables.usertrans90 + '!</p><p class="wphealthtracker-success-advert">' + wphealthtrackerPhpVariables.ajaxreturn4 + ' <a href="">' + wphealthtrackerPhpVariables.ajaxreturn5 + '</a> ' + wphealthtrackerPhpVariables.ajaxreturn6 + '</p><p class="wphealthtracker-success-reviews">' + wphealthtrackerPhpVariables.ajaxreturn7 + ' <a href="">' + wphealthtrackerPhpVariables.ajaxreturn8 + '</a> ' + wphealthtrackerPhpVariables.ajaxreturn9 + ' <a href="">' + wphealthtrackerPhpVariables.ajaxreturn10 + '</a>!</p>';
										}

									} else {

										// Create the Error messaging here - print out the mysql error for user to report back with
										responseHtml = '<img class="wphealthtracker-ajax-return-img" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg" /><p class="wphealthtracker-success-title">' + wphealthtrackerPhpVariables.ajaxreturn11 + '</p><p class="wphealthtracker-success-description">' + wphealthtrackerPhpVariables.ajaxreturn12 + '...</p><p class="wphealthtracker-success-advert">' + wphealthtrackerPhpVariables.ajaxreturn13 + ' <a href="mailto:techsupport@wphealthtracker.com">TechSupport@WPHealthTracker.com</a>:  <textarea class="wphealthtracker-ajax-error-textarea">' + response[0] + '</textarea></p><p class="wphealthtracker-success-reviews">' + wphealthtrackerPhpVariables.ajaxreturn14 + '!</p>';
									}

									// Add the response HTML and animate the height...
									responseDiv.html( responseHtml );

									// Animate to one height if db entry was successful, otherwise animate to different height.
									if ( responsetype ) {
										responseDiv.animate({'height': '175px', 'opacity': '1'}, 500 );
									} else {
										responseDiv.animate({'height': '290px', 'opacity': '1'}, 500 );
									}

								}
							});
						}
					}

				});

			} else {

				$( '#wphealthtracker-spinner-save-users' ).animate({'opacity': 0}, 500 );

			}
		});
	}
});
