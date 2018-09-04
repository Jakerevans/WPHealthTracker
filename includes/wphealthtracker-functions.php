<?php

/**
 * Class WPHealthTracker_General_Functions - wphealthtracker-functions.php
 *
 * @author   Jake Evans
 * @category Admin
 * @package  Includes
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_General_Functions', false ) ) :
	/**
	 * WPHealthTracker_General_Functions class. Here we'll do things like enqueue scripts/css, set up menus, etc.
	 */
	class WPHealthTracker_General_Functions {

		// Create new WPHeathTracker User on plugin activation.
		public function wphealthtracker_add_wphealthtracker_role_on_plugin_activation() {

			require_once WPHEALTHTRACKER_CLASSES_UTILITIES_DIR . 'class-wphealthtracker-utilities-accesscheck.php';
			$this->access          = new WPHealthTracker_Utilities_Accesscheck();
			$this->currentwphtuser = $this->access->wphealthtracker_accesscheck_create_role( 'WPHealthTracker Basic User' );

		}

		// Function to add the admin menu entry.
		public function wphealthtracker_jre_admin_menu() {
			$hook_suffix = add_menu_page( 'WPHealthTracker Options', 'WPHealthTracker', 'wphealthtracker_dashboard_access', 'WPHealthTracker-Options', array( $this, 'wphealthtracker_jre_admin_page_function' ), WPHEALTHTRACKER_ROOT_IMG_URL . 'wphealthtrackerdashboardicon.png', 6 );
			return $hook_suffix;
		}


		// Function to add the individual admin menu pages
		public function wphealthtracker_jre_my_subadmin_menu() {

			// Default sub menu pages
			$submenu_array = json_decode( WPHEALTHTRACKER_SUBMENU_ARRAY );

			// Filter to allow the addition of a new subpage
			if ( has_filter( 'wphealthtracker_add_sub_menu' ) ) {
				$submenu_array = apply_filters( 'wphealthtracker_add_sub_menu', $submenu_array );
			}

			$add_submenu_results = 0;
			foreach ( $submenu_array as $key => $submenu ) {
				$menu_slug = strtolower( str_replace( ' ', '-', $submenu ) );
				add_submenu_page( 'WPHealthTracker-Options', 'WPHealthTracker', $submenu, 'wphealthtracker_dashboard_access', 'WPHealthTracker-' . $menu_slug, array( $this, 'wphealthtracker_jre_admin_page_function' ) );
				$add_submenu_results++;
			}

			$add_submenu_result = remove_submenu_page( 'WPHealthTracker-Options', 'WPHealthTracker-Options' );
			$sizeofaddsubmenu   = sizeof( $add_submenu_result );
			$sizeofsubmenuarray = sizeof( $submenu_array );

			return $sizeofsubmenuarray . '--' . $add_submenu_results . '--' . $sizeofaddsubmenu;
		}

		// Here we take the Constant defined in wphealthtracker.php that holds the values that all our nonces will be created from, we create the actual nonces using wp_create_nonce, and the we define our new, final nonces Constant, called WPHEALTHTRACKER_FINAL_NONCES_ARRAY.
		public function wphealthtracker_jre_create_nonces() {

			$temp_array = array();
			foreach ( json_decode( WPHEALTHTRACKER_NONCES_ARRAY ) as $key => $noncetext ) {
				$nonce              = wp_create_nonce( $noncetext );
				$temp_array[ $key ] = $nonce;
			}

			// Defining our final nonce array
			define( 'WPHEALTHTRACKER_FINAL_NONCES_ARRAY', wp_json_encode( $temp_array ) );

		}

		// Callback function for loading up the master file that will coordinate which file to output based on what page and/or tab user is on
		function wphealthtracker_jre_admin_page_function() {
			global $wpdb;
			$result = require_once WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR . 'class-wphealthtracker-admin-master-ui.php';
			return $result;
		}

		// Adding the jQuery Effects Library that ships with WordPress.
		function wphealthtracker_jre_add_jquery_effects_library() {
			wp_enqueue_script( 'jquery-effects-core' );
		}


		// Function that adds the Ajax Library into the head of the doc: <script type="text/javascript">var ajaxurl = "http://localhost:8888/local/wp-admin/admin-ajax.php"</script>
		function wphealthtracker_jre_add_ajax_library() {

			$html = '<script type="text/javascript">';

			// checking $protocol in HTTP or HTTPS
			if ( isset( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] != 'off' ) {
				// this is HTTPS
				$protocol = 'https';
			} else {
				// this is HTTP
				$protocol = 'http';
			}
			$tempAjaxPath = admin_url( 'admin-ajax.php' );
			$goodAjaxUrl  = $protocol . strchr( $tempAjaxPath, ':' );

			$html .= 'var ajaxurl = "' . $goodAjaxUrl . '"';
			$html .= '</script>';
			echo $html;
			return $html;
		}


		// Code for adding the admin js file
		function wphealthtracker_jre_admin_js( $hook ) {

			// Loading this up on just the WPBookList admin pages that need it
			if ( stripos( $hook, 'wphealthtracker' ) !== false ) {

				// First just register the script
				wp_register_script( 'wphealthtracker_jre_admin_js', WPHEALTHTRACKER_ROOT_JS_URL . 'wphealthtracker-admin-min.js', array( 'jquery' ), WPHEALTHTRACKER_VERSION_NUM, true );

				// Next 4-5 lines are required to allow translations of strings that would otherwise live in the wphealthtracker-admin-js.js JavaScript File
				require_once WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR . 'class-translations.php';
				$trans = new WPHealthTracker_Translations();
				// Localize the script with the appropriate translation array from the Translations class
				$translation_array1 = $trans->admin_js_trans_strings();
				$translation_array2 = $trans->vitals_tab_trans_strings();
				$translation_array3 = $trans->ajax_return_strings();
				$translation_array4 = $trans->d3_chart_trans_strings();
				$translation_array5 = $trans->common_trans_strings();
				$translation_array6 = $trans->diet_tab_trans_strings();
				$translation_array7 = $trans->exercise_tab_trans_strings();
				$translation_array8 = $trans->tab_titles_trans_strings();
				$translation_array9 = $trans->users_tab_trans_strings();

				// Now grab all of our Nonces to pass to the JavaScript for the Ajax functions and merge with the Translations array
				$final_array_of_php_values = array_merge( $translation_array1, $translation_array2 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array3 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array4 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array5 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array6 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array7 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array8 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, $translation_array9 );
				$final_array_of_php_values = array_merge( $final_array_of_php_values, json_decode( WPHEALTHTRACKER_FINAL_NONCES_ARRAY, TRUE ) );

				// Adding some other individual values we may need
				$final_array_of_php_values['WPHEALTHTRACKER_ROOT_IMG_ICONS_URL'] = WPHEALTHTRACKER_ROOT_IMG_ICONS_URL;

				// Now registering/localizing our JavaScript file, passing all the PHP variables we'll need in our $final_array_of_php_values array, to be accessed from 'wphealthtrackerPhpVariables' object (like wphealthtrackerPhpVariables.nameofkey, like any other JavaScript object).
				wp_localize_script( 'wphealthtracker_jre_admin_js', 'wphealthtrackerPhpVariables', $final_array_of_php_values );

				// Enqueued script with localized data.
				wp_enqueue_script( 'wphealthtracker_jre_admin_js' );

				return $final_array_of_php_values;
			}
		}

		// Code for adding the admin js file
		function wphealthtracker_jre_d3_js( $hook ) {

			// Loading this up on just the WPBookList admin pages that need it
			if ( stripos( $hook, 'WPHealthTracker-stats' ) !== false ) {

				// First just register the script
				wp_register_script( 'wphealthtracker_jre_d3_js', WPHEALTHTRACKER_ROOT_JS_URL . 'd3.min.js', array( 'jquery' ), WPHEALTHTRACKER_VERSION_NUM, true );

				// Enqueued script.
				wp_enqueue_script( 'wphealthtracker_jre_d3_js' );

			}
		}

		// Code for adding the general admin CSS file
		function wphealthtracker_jre_admin_style() {
			if ( is_admin( 'administrator' ) ) {
				wp_register_style( 'wphealthtracker-admin-ui', WPHEALTHTRACKER_ROOT_CSS_URL . 'wphealthtracker-admin-ui.css' );
				wp_enqueue_style( 'wphealthtracker-admin-ui' );
			}
		}

		/**
		 *  For registering table names.
		 */
		public function wphealthtracker_jre_register_table_names() {
			global $wpdb;
			$table1 = $wpdb->wphealthtracker_users = "{$wpdb->prefix}wphealthtracker_users";
			$table2 = $wpdb->wphealthtracker_user_daily_data_vitals = "{$wpdb->prefix}wphealthtracker_user_daily_data_vitals";
			$table3 = $wpdb->wphealthtracker_general_settings = "{$wpdb->prefix}wphealthtracker_general_settings";
			$table4 = $wpdb->wphealthtracker_user_daily_data_diet = "{$wpdb->prefix}wphealthtracker_user_daily_data_diet";
			$table5 = $wpdb->wphealthtracker_user_daily_data_exercise = "{$wpdb->prefix}wphealthtracker_user_daily_data_exercise";

			// Return a built string for Unit Test.
			return $table1 . $table2 . $table3 . $table4 . $table5;

		}

		/**
		 *  Runs once upon plugin activation and creates the Users tables
		 */
		public function wphealthtracker_jre_create_user_table() {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			global $wpdb;
			global $charset_collate;

			// Call this manually as we may have missed the init hook.
			$this->wphealthtracker_jre_register_table_names();

			// If table doesn't exist, create table.
			$test_name = $wpdb->prefix . 'wphealthtracker_users';
			if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $test_name ) ) !== $test_name ) {

				// This is the table that holds static data about users - things like username, password, height, gender...
				$sql_create_table = "CREATE TABLE {$wpdb->wphealthtracker_users} 
					(
			            ID smallint(190) auto_increment,
			            firstname varchar(190),
			            lastname varchar(255),
			            datecreated varchar(255),
			            wpuserid smallint(6),
			            email varchar(255),
			            username varchar(255),
			            role varchar(255),
			            permissions varchar(255),
			            country varchar(255),
			            streetaddress1 varchar(255),
						streetaddress2 varchar(255),
						city varchar(255),
						state varchar(255),
						zip varchar(255),
						phone varchar(255),
			            profileimage varchar(255),
			            height varchar(255),
			            age varchar(255),
			            birthday varchar(255),
			            gender varchar(255),
			            bio MEDIUMTEXT,
			            mainexercisecategory varchar(255),
			            secondaryexercisecategory varchar(255),
			            goalscompleted varchar(255),
			            goalsinprogress varchar(255),
			            favoriteworkoutsong varchar(255),
						favoritemotivationalquote MEDIUMTEXT,
						playlist LONGTEXT,
						website varchar(255),
						facebook varchar(255),
						twitter varchar(255),
						instagram varchar(255),
						googleplus varchar(255),
						snapchat varchar(255),
			            PRIMARY KEY  (ID),
			              KEY firstname (firstname)
     				) $charset_collate; ";

				// If table doesn't exist, create table and add initial data to it.
				$test_name = $wpdb->prefix . 'wphealthtracker_users';
				if ( $test_name !== $wpdb->get_var( "SHOW TABLES LIKE '$test_name'" ) ) {
					$db_delta_result = dbDelta( $sql_create_table );
					$table_name      = $wpdb->prefix . 'wphealthtracker_users';
					$current_user    = wp_get_current_user();
					if ( ! ( $current_user instanceof WP_User ) ) {
						return;
					}

					$firstname = '';
					$lastname  = '';
					if ( '' === $current_user->user_firstname || null === $current_user->user_firstname ) {

						if ( '' === $current_user->display_name || null === $current_user->display_name ) {
							$firstname = 'Admin';
							$lastname  = '';
						} else {
							$firstname = $current_user->display_name;
							$lastname  = '';
						}
					} else {
						$firstname = $current_user->user_firstname;
						$lastname  = $current_user->user_lastname;
					}

					$wpdb->insert( $table_name,
						array(
							'role'      => 'godmode',
							'username'  => $current_user->user_login,
							'email'     => $current_user->user_email,
							'firstname' => $firstname,
							'lastname'  => $lastname,
							'wpuserid'  => $current_user->ID,
						)
					);
				}
				$key = $wpdb->prefix . 'wphealthtracker_users';
				return $db_delta_result[ $key ];
			} else {
				return 'Table already exists';
			}

		}

		// Runs once upon plugin activation and creates the General Settings tables
		function wphealthtracker_jre_create_general_settings_table() {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			global $wpdb;
			global $charset_collate;

			// Call this manually as we may have missed the init hook
			$this->wphealthtracker_jre_register_table_names();

			// If table doesn't exist, create table
			$test_name = $wpdb->prefix . 'wphealthtracker_general_settings';
			if ( $wpdb->get_var( "SHOW TABLES LIKE '$test_name'" ) != $test_name ) {

				// This is the table that holds static data about users - things like username, password, height, gender...
				$sql_create_table = "CREATE TABLE {$wpdb->wphealthtracker_general_settings} 
      (
            ID smallint(190) auto_increment,
            defaultwpuser smallint(6),
            gmuser varchar(255),
            PRIMARY KEY  (ID),
              KEY defaultwpuser (defaultwpuser)
      ) $charset_collate; ";
				$db_delta_result    = array();

				// If table doesn't exist, create table and add initial data to it
				$test_name = $wpdb->prefix . 'wphealthtracker_general_settings';
				if ( $wpdb->get_var( "SHOW TABLES LIKE '$test_name'" ) != $test_name ) {
					$db_delta_result = dbDelta( $sql_create_table );
					$table_name    = $wpdb->prefix . 'wphealthtracker_general_settings';
					$wpdb->insert( $table_name, array( 'ID' => 1 ) );
				}

				$key = $wpdb->prefix . 'wphealthtracker_general_settings';

				return $db_delta_result[ $key ];
			} else {
				return 'Table already exists';
			}

		}

		// Runs once upon plugin activation and creates the Daily Data - Vitals tables
		function wphealthtracker_jre_create_daily_data_vitals_table() {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			global $wpdb;
			global $charset_collate;

			// Call this manually as we may have missed the init hook
			$this->wphealthtracker_jre_register_table_names();

			// If table doesn't exist, create table
			$test_name = $wpdb->prefix . 'wphealthtracker_user_daily_data_vitals';
			if ( $wpdb->get_var( "SHOW TABLES LIKE '$test_name'" ) != $test_name ) {

				// This is the table that holds static data about users - things like username, password, height, gender...
				$sql_create_table = "CREATE TABLE {$wpdb->wphealthtracker_user_daily_data_vitals} 
      (
            ID smallint(190) auto_increment,
            firstname varchar(190),
            lastname varchar(255),
            wpuserid smallint(6),
            humandate varchar(255),
            weight TINYTEXT,
            bloodpressure TINYTEXT,
            bloodoxygen TINYTEXT,
            bodytemp TINYTEXT,
            cholesterol TINYTEXT,
            heartrate TINYTEXT,
            bloodsugar TINYTEXT,
            vitalsimg MEDIUMTEXT,
            vitalsfiles MEDIUMTEXT,
            PRIMARY KEY  (ID),
              KEY firstname (firstname)
      ) $charset_collate; ";
				$db_delta_result    = dbDelta( $sql_create_table );

				$key = $wpdb->prefix . 'wphealthtracker_user_daily_data_vitals';

				return $db_delta_result[ $key ];
			} else {
				return 'Table already exists';
			}
		}

		// Runs once upon plugin activation and creates the Daily Data - Diet tables.
		function wphealthtracker_jre_create_daily_data_diet_table() {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			global $wpdb;
			global $charset_collate;

			// Call this manually as we may have missed the init hook
			$this->wphealthtracker_jre_register_table_names();

			// If table doesn't exist, create table
			$test_name = $wpdb->prefix . 'wphealthtracker_user_daily_data_diet';
			if ( $wpdb->get_var( "SHOW TABLES LIKE '$test_name'" ) != $test_name ) {

				// This is the table that holds static data about users - things like username, password, height, gender...
				$sql_create_table = "CREATE TABLE {$wpdb->wphealthtracker_user_daily_data_diet} 
      (
            ID smallint(190) auto_increment,
            firstname varchar(190),
            lastname varchar(255),
            wpuserid smallint(6),
            humandate varchar(255),
            foodstring LONGTEXT,
            dietimg MEDIUMTEXT,
            dietfiles MEDIUMTEXT,
            PRIMARY KEY  (ID),
              KEY firstname (firstname)
      ) $charset_collate; ";
				$db_delta_result    = dbDelta( $sql_create_table );

				$key = $wpdb->prefix . 'wphealthtracker_user_daily_data_diet';

				return $db_delta_result[ $key ];
			} else {
				return 'Table already exists';
			}
		}

		/**
		 *  Runs once upon plugin activation and creates the Daily Data - Exercise tables.
		 */
		public function wphealthtracker_jre_create_daily_data_exercise_table() {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			global $wpdb;
			global $charset_collate;

			// Call this manually as we may have missed the init hook.
			$this->wphealthtracker_jre_register_table_names();

			// If table doesn't exist, create table.
			$test_name = $wpdb->prefix . 'wphealthtracker_user_daily_data_exercise';
			if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $test_name ) ) !== $test_name ) {

				$sql_create_table = "CREATE TABLE {$wpdb->wphealthtracker_user_daily_data_exercise} 
					(
						ID smallint(190) auto_increment,
			            firstname varchar(190),
			            lastname varchar(255),
			            wpuserid smallint(6),
			            humandate varchar(255),
			            exercisestring LONGTEXT,
			            exerciseimg MEDIUMTEXT,
			            exercisefiles MEDIUMTEXT,
			            PRIMARY KEY  (ID),
			              KEY firstname (firstname)
     				) $charset_collate; ";
				$db_delta_result  = dbDelta( $sql_create_table );

				$key = $wpdb->prefix . 'wphealthtracker_user_daily_data_exercise';

				return $db_delta_result[ $key ];
			} else {
				return 'Table already exists';
			}

		}


		// Function that calls the Style and Scripts needed for displaying of admin pointer messages.
		function wphealthtracker_jre_admin_pointers_javascript() {
			wp_enqueue_style( 'wp-pointer' );
			wp_enqueue_script( 'wp-pointer' );
			wp_enqueue_script( 'utils' );
		}




	}
endif;
