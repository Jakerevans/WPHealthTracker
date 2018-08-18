<?php
/**
 * Class WPHealthTracker_Exercise_Functions - wphealthtracker-exercise-functions.php
 *
 * @author   Jake Evans
 * @category Admin
 * @package  Includes/Exercise
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_Exercise_Functions', false ) ) :
	/**
	 * WPHealthTracker_Exercise_Functions class. Here we'll do things like enqueue scripts/css, set up menus, etc.
	 */
	class WPHealthTracker_Exercise_Functions {

		public function wphealthtracker_jre_add_core_jquery_ui() {
			wp_enqueue_script( 'jquery-ui-autocomplete' );
		}

	}

endif;



