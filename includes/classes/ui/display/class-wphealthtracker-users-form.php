<?php
/**
 * Class WPHEALTHTRACKER_Users_Form - class-users-form.php
 *
 * @author   Jake Evans
 * @category Display
 * @package  Includes/Classes/UI/Display
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHEALTHTRACKER_Users_Form', false ) ) :
	/**
	 * WPHEALTHTRACKER_Users_Form.
	 */
	class WPHEALTHTRACKER_Users_Form {

		/** Common member variable
		 *
		 *  @var string $userstring
		 */
		public $userstring = '';

		/** Common member variable
		 *
		 *  @var object $currentwpuser
		 */
		public $currentwpuser = '';

		/** Common member variable
		 *
		 *  @var int $currentwphtuser
		 */
		public $currentwphtuser = '';

		/** Common member variable
		 *
		 *  @var string $date
		 */
		public $date = '';

		/** Common member variable
		 *
		 *  @var object $allusers
		 */
		public $allusers = null;

		/** Common member variable
		 *
		 *  @var object $general_settings
		 */
		public $general_settings = null;

		/** Common member variable
		 *
		 *  @var object $default_user
		 */
		public $default_user = null;

		/** Common member variable
		 *
		 *  @var string $role_select_string
		 */
		public $role_select_string = '';

		/** Common member variable
		 *
		 *  @var string $role_warning
		 */
		public $role_warning = '';

		/** Common member variable
		 *
		 *  @var object $trans
		 */
		public $trans;

		/** Common member variable
		 *
		 *  @var string $create_form_part_the_beginning
		 */
		public $create_form_part_the_beginning = '';

		/** Common member variable
		 *
		 *  @var string $create_form_part_one
		 */
		public $create_form_part_one = '';
		/** Common member variable
		 *
		 *  @var string $create_form_part_one
		 */
		public $create_form_part_two = '';

		/** Common member variable
		 *
		 *  @var string $create_form_part_the_ending
		 */
		public $create_form_part_the_ending = '';

		/**
		 * Class Constructor
		 */
		public function __construct() {

			global $wpdb;

			// First we'll get all the translations for this tab.
			require_once WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR . 'class-translations.php';
			$this->trans = new WPHealthTracker_Translations();
			$this->trans->common_trans_strings();
			$this->trans->dashboard_trans_strings();
			$this->trans->users_tab_trans_strings();

			// Set the current WordPress user.
			$currentwpuser = wp_get_current_user();

			// Now we'll determine access, and stop all execution if user isn't allowed in.
			require_once WPHEALTHTRACKER_CLASSES_UTILITIES_DIR . 'class-wphealthtracker-utilities-accesscheck.php';
			$this->access = new WPHealthTracker_Utilities_Accesscheck();
			$this->currentwphtuser = $this->access->wphealthtracker_accesscheck( $currentwpuser->ID );

			// If we received false from accesscheck class, display permissions message.
			if ( false === $this->currentwphtuser ) {

				// Outputs the 'No Permission!' message.
				$this->wphealthtracker_no_permission_message();
				return false;
			}

			// Set the date.
			require_once WPHEALTHTRACKER_CLASSES_UTILITIES_DIR . 'class-wphealthtracker-utilities-date.php';
			$utilities_date = new WPHealthTracker_Utilities_Date();
			$this->date     = $utilities_date->wphealthtracker_get_date_via_current_time( 'mysql' );

			// Grabs all user info from DB to make checks for usernames already taken, autofills, etc.
			$this->wphealthtracker_get_all_saved_users();

			// Creates the User Roles Drop-down (makes superadmin check).
			$this->wphealthtracker_create_role_dropdown_and_warning();

			// Creating the beginning HTML
			$this->create_form_part_the_beginning();

			// Creating 'The Basics' form part
			$this->create_form_part_the_basics();

			// Creating the Contact Info form part
			$this->create_form_part_contact_info();

			// Creating the ending HTML
			$this->create_form_part_the_ending();

			// Output final HTML.
			$this->output_create_users_form();

		}


/*


	contact info
	
		country
		street1
		street2
		city
		state
		zip
		phone


	About this user...

		bio
		profile iamge
		birthdate
		height
		gender
		main exercise interest
		secondary exercise interest
		fav. quote
		fav. workout song
		fav single exercise
		playlist
	


	Social & 




*/

		public function wphealthtracker_no_permission_message() {

			// Grab Superadmin from the settings table to the user knows who to contact.
			global $wpdb;

			// Make call to Transients class to see if Transient currently exists. If so, retrieve it, if not, make call to create_transient() with all required Parameters.
			require_once WPHEALTHTRACKER_CLASSES_TRANSIENTS_DIR . 'class-transients.php';
			$transients          = new WPHealthTracker_Transients();
			$settings_table_name = $wpdb->prefix . 'wphealthtracker_general_settings';
			$transient_name      = 'wpht_' . md5( 'SELECT * FROM ' . $settings_table_name );
			$transient_exists    = $transients->existing_transient_check( $transient_name );
			if ( $transient_exists ) {
				$this->general_settings = $transient_exists;
			} else {
				$query                  = 'SELECT * FROM ' . $settings_table_name;
				$this->general_settings = $transients->create_transient( $transient_name, 'wpdb->get_row', $query, MONTH_IN_SECONDS );
			}

			$gmuser = $this->general_settings->gmuser;
			$gmuser = explode( ',', $gmuser );

			$this->initial_output = '<div class="wphealthtracker-no-saved-data-stats-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span-stats-1">' . $this->trans->dashboard_trans_21 . '</span>
					<br>
					' . $this->trans->common_trans_75 . '
					<br>
					' . $this->trans->common_trans_76 . ' ' . $gmuser[0] . ' ' . $gmuser[1] . ' ' . $this->trans->common_trans_78 . ' ' . $gmuser[2] . ' ' . $this->trans->common_trans_77 . '
					<br><br>
				</p>
			</div>';
		}


		/**
		 *  Get all saved Users from the WPHealthTracker Users table.
		 */
		public function wphealthtracker_get_all_saved_users() {

			global $wpdb;

			// Get all saved Users from the WPHealthTracker Users table.
			$users_table_name = $wpdb->prefix . 'wphealthtracker_users';

			// Make call to Transients class to see if Transient currently exists. If so, retrieve it, if not, make call to create_transient() with all required Parameters.
			require_once WPHEALTHTRACKER_CLASSES_TRANSIENTS_DIR . 'class-transients.php';
			$transients       = new WPHealthTracker_Transients();
			$transient_name   = 'wpht_' . md5( 'SELECT * FROM ' . $users_table_name . ' ORDER BY firstname' );
			$transient_exists = $transients->existing_transient_check( $transient_name );
			if ( $transient_exists ) {
				$this->allusers = $transient_exists;
			} else {
				$query          = 'SELECT * FROM ' . $users_table_name . ' ORDER BY firstname';
				$this->allusers = $transients->create_transient( $transient_name, 'wpdb->get_results', $query, MONTH_IN_SECONDS );
			}
		}

		public function wphealthtracker_create_role_dropdown_and_warning() {

			// If user is godmode, give option to grant a different user godmode status.
			if ( 'godmode' === $this->currentwphtuser->role ) {
				$options_string =
					'<option selected default disabled>' . $this->trans->user_trans_44 . '</option>
					<option>' . $this->trans->user_trans_41 . '</option>
					<option>' . $this->trans->user_trans_42 . '</option>
					<option>' . $this->trans->user_trans_43 . '</option>
					<option>' . $this->trans->user_trans_45 . '</option>';

				$this->role_warning =
					'<div id="wphealthtracker-create-user-godmode-warning-message">
						<p id="wphealthtracker-create-user-godmode-warning-message-title">' . $this->trans->user_trans_46 . '</p>
						<img id="wphealthtracker-create-user-godmode-warning-message-image" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'warning.svg">
						<p id="wphealthtracker-create-user-godmode-warning-message-body">' . $this->trans->user_trans_47 . '</p>
					</div>';

			} else {
				$options_string = 
					'<option selected default disabled>' . $this->trans->user_trans_44 . '</option>
					<option>' . $this->trans->user_trans_41 . '</option>
					<option>' . $this->trans->user_trans_42 . '</option>
					<option>' . $this->trans->user_trans_43 . '</option>';
			}

			$this->role_select_string =
				'<select class="wphealthtracker-response-form-select" id="wphealthtracker-response-form-select-create-user-role">
					' . $options_string . '
				</select>';

		}

		public function create_form_part_the_beginning() {
			$this->create_form_part_the_beginning = '
			<div id="wphealthtracker-indiv-choice-create-user">
				<div class="wphealthtracker-indiv-choice" id="wphealthtracker-indiv-choice-enter">
					<div class="wphealthtracker-expansion-div-create-user" id="wphealthtracker-expansion-div-enter">
						<img src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'data-entry.svg" class="wphealthtracker-indiv-choice-img" />
						<p class="wphealthtracker-indiv-choice-p">' . $this->trans->common_trans_74 . '</p>
					</div>
					<div class="wphealthtracker-create-user-div" id="wphealthtracker-response-form-data-row-actual-0">';
		}

		public function create_form_part_the_ending() {
			$this->create_form_part_the_ending = '</div></div></div>';
		}

		public function create_form_part_the_basics() {

			$this->create_form_part_one = '
			<div class="wphealthtracker-response-form-entry-row">
				<h2 class="wphealthtracker-response-form-heading-black">
				<img id="wphealthtracker-icon-image-question-id-2" class="wphealthtracker-icon-image-question-enter-view" data-label="user-basics" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">
				' . $this->trans->user_trans_1 . '<img class="wphealthtracker-icon-h2-image" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'list.svg"></h2>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_2 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-firstname" type="text" placeholder="' . $this->trans->user_trans_30 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_3 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-lastname" type="text" placeholder="' . $this->trans->user_trans_31 . '">
					</div>
				</div>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-email" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_4 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-email" type="text" placeholder="' . $this->trans->user_trans_32 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_5 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-lastname" type="text" placeholder="' . $this->trans->user_trans_33 . '">
						<div class="wphealthracker-create-users-match-response-div" id="wphealthracker-create-users-match-response-div-email">
							<div class="wphealthtracker-spinner-tiny-primary" id="wphealthtracker-spinner-create-user-email">
							</div>
							<p id="wphealthracker-create-users-match-response-p-email">Passwords<br/>Don\'t Match!</p>
						</div>
					</div>
				</div>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-password" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_6 . '
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-password" type="text" placeholder="' . $this->trans->user_trans_34 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_7 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-lastname" type="text" placeholder="' . $this->trans->user_trans_35 . '">
						<div class="wphealthracker-create-users-match-response-div" id="wphealthracker-create-users-match-response-div-password">
							<div class="wphealthtracker-spinner-tiny-primary" id="wphealthtracker-spinner-create-user-password">
							</div>
							<p id="wphealthracker-create-users-match-response-p-password">Passwords</br>Don\'t Match!</p>
					</div>
				</div>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-password" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_8 . '
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-password" type="text" placeholder="' . $this->trans->user_trans_36 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_9 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						 ' . $this->role_select_string . '
						</div>
					</div>
				</div>
				' . $this->role_warning . '
			</div>';

		}

		public function create_form_part_contact_info() {




			/*

				contact info
	
		country
		street1
		street2
		city
		state
		zip
		phone*/

			$this->create_form_part_two = '
			<div class="wphealthtracker-response-form-entry-row">
				<h2 class="wphealthtracker-response-form-heading-black">
				<img id="wphealthtracker-icon-image-question-id-2" class="wphealthtracker-icon-image-question-enter-view" data-label="user-basics" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">
				' . $this->trans->user_trans_48 . '<img class="wphealthtracker-icon-h2-image" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'phonebook.svg"></h2>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_2 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-firstname" type="text" placeholder="' . $this->trans->user_trans_30 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_3 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-lastname" type="text" placeholder="' . $this->trans->user_trans_31 . '">
					</div>
				</div>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-email" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_4 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-email" type="text" placeholder="' . $this->trans->user_trans_32 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_5 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-lastname" type="text" placeholder="' . $this->trans->user_trans_33 . '">
						<div class="wphealthracker-create-users-match-response-div" id="wphealthracker-create-users-match-response-div-email">
							<div class="wphealthtracker-spinner-tiny-primary" id="wphealthtracker-spinner-create-user-email">
							</div>
							<p id="wphealthracker-create-users-match-response-p-email">Passwords<br/>Don\'t Match!</p>
						</div>
					</div>
				</div>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-password" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_6 . '
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-password" type="text" placeholder="' . $this->trans->user_trans_34 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_7 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-lastname" type="text" placeholder="' . $this->trans->user_trans_35 . '">
						<div class="wphealthracker-create-users-match-response-div" id="wphealthracker-create-users-match-response-div-password">
							<div class="wphealthtracker-spinner-tiny-primary" id="wphealthtracker-spinner-create-user-password">
							</div>
							<p id="wphealthracker-create-users-match-response-p-password">Passwords</br>Don\'t Match!</p>
					</div>
				</div>
				<div class="wphealthtracker-response-form-data-row-text" id="wphealthtracker-response-form-fisrtname-row-div">
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-password" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_8 . '
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						<input class="wphealthtracker-response-form-input-text" id="wphealthtracker-response-form-input-text-password" type="text" placeholder="' . $this->trans->user_trans_36 . '">
					</div>
					<div class="wphealthtracker-response-form-div-row-create-users">
						<p class="wphealthtracker-response-form-users-label-row"><img id="wphealthtracker-icon-image-question-id-3" class="wphealthtracker-icon-image-question-enter-view-food" data-label="user-firstname" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg">' . $this->trans->user_trans_9 . '</p>
						<div class="wphealthtracker-decorative-red-underline-create-users"></div>
						 ' . $this->role_select_string . '
						</div>
					</div>
				</div>
				' . $this->role_warning . '
			</div>';

		}


		/**
		 * Creates the form user fills out for creating new user
		 */
		public function output_create_users_form() {
			$this->initial_output = $this->create_form_part_the_beginning . $this->create_form_part_one . $this->create_form_part_two . $this->create_form_part_the_ending;
		}
	}
endif;
