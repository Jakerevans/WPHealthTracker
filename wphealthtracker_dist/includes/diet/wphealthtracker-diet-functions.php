<?php
/**
 * Class WPHealthTracker_Diet_Functions - wphealthtracker-diet-functions.php
 *
 * @author   Jake Evans
 * @category Admin
 * @package  Includes/Diet
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_Diet_Functions', false ) ) :
	/**
	 * WPHealthTracker_Diet_Functions class. Here we'll do things like enqueue scripts/css, set up menus, etc.
	 */
	class WPHealthTracker_Diet_Functions {

		public function wphealthtracker_jre_add_core_jquery_ui() {
			wp_enqueue_script( 'jquery-ui-autocomplete' );
		}

	}

endif;



