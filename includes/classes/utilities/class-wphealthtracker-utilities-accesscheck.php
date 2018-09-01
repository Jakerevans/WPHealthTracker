<?php
/**
 * Class WPHealthTracker_Utilities_Date - class-wphealthtracker-utilities-accesscheck.php
 *
 * @author   Jake Evans
 * @category Admin
 * @package  Includes/Exercise
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_Utilities_Accesscheck', false ) ) :
	/**
	 * WPHealthTracker_Utilities_Date class. Here we'll house everything to do with getting the current accesscheck.
	 */
	class WPHealthTracker_Utilities_Accesscheck {

		/** Common member variable
		 *
		 *  @var array $user
		 */
	//	public $user = array();

		/**
		 * Returns the current accesscheck using the WordPress 'current_time()' function and accepts a time format
		 *
		 * @param int $wpuserid - The users ID we're checking access on.
		 */
		public function wphealthtracker_accesscheck( $wpuserid ) {

			global $wpdb;

			// Get all saved Users from the WPHealthTracker Users table.
			$users_table_name = $wpdb->prefix . 'wphealthtracker_users';

			// Make call to Transients class to see if Transient currently exists. If so, retrieve it, if not, make call to create_transient() with all required Parameters.
			require_once WPHEALTHTRACKER_CLASSES_TRANSIENTS_DIR . 'class-transients.php';
			$transients       = new WPHealthTracker_Transients();
			$transient_name   = 'wpht_' . md5( 'SELECT * FROM ' . $users_table_name . ' WHERE wpuserid == ' . $wpuserid );
			$transient_exists = $transients->existing_transient_check( $transient_name );
			if ( $transient_exists ) {
				$this->user = $transient_exists;
			} else {
				$query      = 'SELECT * FROM ' . $users_table_name . '  WHERE wpuserid = ' . $wpuserid;
				$this->user = $transients->create_transient( $transient_name, 'wpdb->get_row', $query, MONTH_IN_SECONDS );
			}

			// If we've retreived a user, continue on to permission check, otherwise return false.
			if ( null !== $this->user ) {

				// Get user's specific permissions.
				$perms = $this->user->permissions;
				$perms = explode( ',', $perms );

				// Now check permissions - if user is just a regular user or a reviewer, and they haven't been granted specific access to this page, then they have no access to this page.
				if ( ( 'admin' !== $this->user->role && 'godmode' !== $this->user->role ) && '1' !== $perms[0] ) {
					return false;
				} else {
					return $this->user;
				}
			} else {

				// No registered WPHealthTracker user was found - return false.
				return false;
			}
		}
	}

endif;
