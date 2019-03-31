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

	// For dynamically suggesting username based off e-mail
	wphealthtrackerJreUsersGenerateUsername();

	// For saving the new user.
	wphealthtrackerCreateWpUser();

	// For resetting the missing data animation
	wphealthrackerResetMissingDataAnim();

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

		$( document ).on( 'click', '#wphealthtracker-create-user-show-password', function( event ) {

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

	// For dynamically suggesting username based off e-mail
	function wphealthtrackerJreUsersGenerateUsername() {

		$( '#wphealthtracker-response-form-input-text-email, #wphealthtracker-response-form-input-text-emailconfirm' ).keyup( function() {
			var email = $( this ).val();
			var username = $( '#wphealthtracker-response-form-input-text-username' );
			if ( -1 === email.indexOf( '@' ) ) {
				username.val( email );
			} else {
				email = email.split( '@' );
				username.val( email[0]);
			}
		});
	}

	// For making data checks before saving user
	function wphealthtrackerDataChecksForSaving() {

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

	function wphealthtrackerCreateWpUser() {

		$( document ).on( 'click', '#wphealthtracker-save-new-users', function( event ) {

			var proceed = wphealthtrackerDataChecksForSaving();
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
					'bio': bio
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

	function wphealthrackerResetMissingDataAnim() {

		$( document ).on( 'click', '#wphealthtracker-response-form-input-text-firstname, #wphealthtracker-response-form-input-text-email, #wphealthtracker-response-form-input-text-emailconfirm, #wphealthtracker-response-form-input-text-password, #wphealthtracker-response-form-input-text-passwordconfirm, #wphealthtracker-response-form-input-text-username', function( event ) {

			if ( $( this ).attr('id') === 'wphealthtracker-response-form-input-text-password' ) {
				$( this ).prev().prev().prev().removeClass( 'wphealthtracker-missing-data-animation' );
			} else {
				$( this ).prev().prev().removeClass( 'wphealthtracker-missing-data-animation' );
			}
		});
	}
});
