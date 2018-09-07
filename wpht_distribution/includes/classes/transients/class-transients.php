<?php

/**
 * Class WPHealthTracker_Transients - class-wphealthtracker-transients.php
 *
 * @author   Jake Evans
 * @category Transients
 * @package  Includes/Classes/Transients
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_Transients', false ) ) :
	/**
	 * WPHealthTracker_Transients class. This class will house all the Transients stuff
	 */
	class WPHealthTracker_Transients {

		public function existing_transient_check( $transient_name ) {

			$transient_actual = false;
			if ( false === ( $transient_actual = get_transient( $transient_name ) ) ) {
				return $transient_actual;
			} else {
				return $transient_actual;
			}
		}

		public function create_transient( $transient_name, $wpdb_type, $query, $ttl ) {

			global $wpdb;

			switch ( $wpdb_type ) {
				case 'wpdb->get_results':
					$query_result = $wpdb->get_results( $query );
					break;
				case 'wpdb->get_row':
					$query_result = $wpdb->get_row( $query );
					break;

				default:
					// code...
					break;
			}

			$set_result = set_transient( $transient_name, $query_result, $ttl );
			return $query_result;
		}

		public function delete_transient( $transient_name ) {
			return delete_transient( $transient_name );
		}

	}
endif;
