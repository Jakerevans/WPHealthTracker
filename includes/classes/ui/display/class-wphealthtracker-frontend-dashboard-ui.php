<?php
/**
 * Class WPBookList_Frontend_Dashboard_UI - class-wphealthtracker-frontend-dashboard-ui.php
 *
 * @author   Jake Evans
 * @category Display
 * @package  Display
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPBookList_Frontend_Dashboard_UI', false ) ) :
	/**
	 * WPBookList_Frontend_Dashboard_UI class. Here we'll do things like enqueue scripts/css, set up menus, etc.
	 */
	class WPBookList_Frontend_Dashboard_UI {

		public $logged_in      = false;
		public $user_wpht_data = '';

		/**
		 *  Class constructor.
		 */
		public function __construct() {

			global $wpdb;

			// Set the current WordPress user.
			$currentwpuser = wp_get_current_user();

			// Require the translations file.
			require_once WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR . 'class-wphealthtracker-translations.php';
			$this->translations = new WPHealthTracker_Translations();
			$this->translations->front_dashboard_trans_strings();
			$this->translations->common_trans_strings();

			// Determine if user is logged in.
			$this->logged_in = is_user_logged_in();

			if ( $this->logged_in ) {
				$this->user_wpht_data = $wpdb->get_row( 'SELECT * FROM ' . $wpdb->prefix . 'wphealthtracker_users WHERE wpuserid = ' . $currentwpuser->ID );
				$this->output_dashboard_ui();
			} else {
				$this->output_login_ui();
			}

		}

		/**
		 *  Function that outputs the login UI if the user isn't currently logged in.
		 */
		public function output_login_ui() {

		}

		/**
		 *  Function that outputs the dashboard UI if the user is currently logged in.
		 */
		public function output_dashboard_ui() {

			$string1 = '
				<div id="wphealthtracker-dashboard-top-wrapper">
					<div id="wphealthtracker-dashboard-profile-wrapper">
						<div id="wphealthtracker-dashboard-profile-welcome-wrapper">
							<div id="wphealthtracker-welcome-name">' . $this->translations->frontdashboard_trans_1 . ' ' . $this->user_wpht_data->firstname . '!  </div>
							<div id="wphealthtracker-welcome-deco-line"></div>
						</div>
						<div id="wphealthtracker-dashboard-profile-info-wrapper">
							<div class="wphealthtracker-dashboard-profile-info-indiv">
								<div class="wphealthtracker-dashboard-profile-info-title">' . $this->translations->frontdashboard_trans_2 . '</div>
								<div class="wphealthtracker-dashboard-profile-info-data">' . $this->user_wpht_data->firstname . '</div>
							</div>
							<div class="wphealthtracker-dashboard-profile-info-indiv">
								<div class="wphealthtracker-dashboard-profile-info-title">' . $this->translations->frontdashboard_trans_3 . '</div>
								<div class="wphealthtracker-dashboard-profile-info-data">' . $this->user_wpht_data->favoritemotivationalquote . '</div>
							</div>


						</div>


					</div>



				</div>
			';


			echo $string1;

		}

	}

endif;