<?php
/**
 * Class WPHealthTracker_D3_Exercise - class-d3-exercise.php
 *
 * @author   Jake Evans
 * @category Transients
 * @package  Includes/Classes/D3/D3_exercise
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_D3_Exercise', false ) ) :
	/**
	 * WPHealthTracker_D3_Exercise class. This class will hold all of the logic needed to create the d3 charts on the Vital Stats tab of the Stats menu page.
	 */
	class WPHealthTracker_D3_Exercise {

		/** Common member variable
		 *
		 *  @var array $alluserdata
		 */
		public $alluserdata = array();

		/** Common member variable
		 *
		 *  @var object $translations
		 */
		public $translations;

		/** Member variables that return d3 data
		 *
		 *  @var array $data_1_array
		 */
		public $data_1_array = array();

		/** Member variables that return d3 data
		 *
		 *  @var array $data_2_array
		 */
		public $data_2_array = array();

		/** Member variables that return d3 data
		 *
		 *  @var array $data_3_array
		 */
		public $data_3_array = array();

		/** Member variables that return d3 data
		 *
		 *  @var array $titles_array
		 */
		public $titles_array = array();

		/** Member variables that return d3 data
		 *
		 *  @var array $stats_array
		 */
		public $stats_array = array();

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var array $unique_food_items_array;
		 */
		public $unique_food_items_array = array();

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var array $top_five_food_items;
		 */
		public $top_five_food_items = array();

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $unique_foods_count;
		 */
		public $unique_foods_count = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $total_cals;
		 */
		public $total_cals = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $total_kcals;
		 */
		public $total_kcals = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $total_kjoules;
		 */
		public $total_kjoules = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_protein;
		 */
		public $average_daily_protein = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $protein_total;
		 */
		public $protein_total = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_carbs;
		 */
		public $average_daily_carbs = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $this->carbs_total_total;
		 */
		public $carbs_total = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_sugars;
		 */
		public $average_daily_sugars = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_fiber;
		 */
		public $average_daily_fiber = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_fats;
		 */
		public $average_daily_fats = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $fats_total;
		 */
		public $fats_total = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_satfats;
		 */
		public $average_daily_satfats = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_monounsatfats;
		 */
		public $average_daily_monounsatfats = 0;

		/** Member variables for use between the build_data_1(), build_stats_data_1(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_polyunsatfats;
		 */
		public $average_daily_polyunsatfats = 0;

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var int $energy_day_counter;
		 */
		public $energy_day_counter = 0;

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_calories;
		 */
		public $average_daily_calories = 0.00;

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var float $average_daily_kilojoules;
		 */
		public $average_daily_kilojoules = 0.00;

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var string $average_daily_calories;
		 */
		public $first_energy_date = '';

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var string $highest_caloric_item
		 */
		public $highest_caloric_item = '';

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var int $conseq_caloric_increase
		 */
		public $conseq_caloric_increase = '';

		/** Member variables for use between the build_data_2(), build_stats_data_2(), and get_stats_area_html() functions
		 *
		 *  @var int $conseq_caloric_decrease
		 */
		public $conseq_caloric_decrease = '';





		/** Class Constructor
		 *
		 *  @param array $userdata - The user's complete data set - all food items.
		 */
		public function __construct( $userdata ) {

			$this->alluserdata = $userdata;

			// Get Translations.
			require_once WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR . 'class-translations.php';
			$this->translations = new WPHealthTracker_Translations();
			$this->translations->d3_chart_trans_strings();
			$this->translations->exercise_tab_trans_strings();
			$this->translations->dashboard_trans_strings();
			$this->translations->tab_titles_trans_strings();
			$this->translations->common_trans_strings();
		}

		/**
		 *  Builds data array for first D3 chart
		 */
		public function build_data_1() {

			$this->miles_running_total = 0;

			foreach ( $this->alluserdata as $key => $indiv_day ) {

				// If we have multiple exercise for one day...
				if ( false !== stripos( $indiv_day->exercisestring, ',' ) ) {

					$indiv_exer = explode( ',', $indiv_day->exercisestring );

					foreach ( $indiv_exer as $key => $exercise ) {

						$exercise = explode( ';', $exercise );

						// Convert everything to miles, if we have a value other than null or zero.
						if ( 0 !== $exercise[5] && null !== $exercise[5] && '' !== $exercise[5] ) {
							if ( $this->translations->common_trans_51 === $exercise[6] ) {
								$this->miles_running_total += $exercise[5] * 0.000189394;
							}

							if ( $this->translations->common_trans_52 === $exercise[6] ) {
								$this->miles_running_total += $exercise[5] * 0.000568182;
							}

							if ( $this->translations->common_trans_53 === $exercise[6] ) {
								$this->miles_running_total += $exercise[5];
							}

							if ( $this->translations->common_trans_54 === $exercise[6] ) {
								$this->miles_running_total += $exercise[5] * 0.000621371;
							}

							if ( $this->translations->common_trans_55 === $exercise[6] ) {
								$this->miles_running_total += $exercise[5] * 0.621371;
							}
						}
					}
				} else {

					$indiv_exer = explode( ';', $indiv_day->exercisestring );

					// Convert everything to miles, if we have a value other than null or zero.
					if ( 0 !== $indiv_exer[5] && null !== $indiv_exer[5] && '' !== $indiv_exer[5] ) {
						if ( $this->translations->common_trans_51 === $indiv_exer[6] ) {
							$this->miles_running_total += $indiv_exer[5] * 0.000189394;
						}

						if ( $this->translations->common_trans_52 === $indiv_exer[6] ) {
							$this->miles_running_total += $indiv_exer[5] * 0.000568182;
						}

						if ( $this->translations->common_trans_53 === $indiv_exer[6] ) {
							$this->miles_running_total += $indiv_exer[5];
						}

						if ( $this->translations->common_trans_54 === $indiv_exer[6] ) {
							$this->miles_running_total += $indiv_exer[5] * 0.000621371;
						}

						if ( $this->translations->common_trans_55 === $indiv_exer[6] ) {
							$this->miles_running_total += $indiv_exer[5] * 0.621371;
						}
					}
				}
			}

			// Now convert to other values.
			$this->feet_running_total       = number_format( ( $this->miles_running_total * 5280 ), 2 );
			$this->yards_running_total      = number_format( ( $this->miles_running_total * 1760 ), 2 );
			$this->meters_running_total     = number_format( ( $this->miles_running_total * 1609.34 ), 2 );
			$this->kilometers_running_total = number_format( ( $this->miles_running_total * 1.60934 ), 2 );

			$this->perc_around_world = number_format( ( ( $this->miles_running_total / 24901 ) * 100 ), 6 ) . '%';

			// Determine at what signifigant digit to format around the world to.
			$sig_dig = 2;
			for ( $i = 4; $i <= 7; $i++ ) {
				if ( 0 < $this->perc_around_world[ $i ] ) {
					$sig_dig = $i - 1;
					break;
				}
			}

			// If we've travelled around the world at least once, just display 100%.
			if ( 100 <= $this->perc_around_world ) {
				$this->perc_around_world = '100%';
			} else {
				$this->perc_around_world = number_format( $this->perc_around_world, $sig_dig ) . '%';
			}

			$this->perc_to_moon = number_format( ( ( $this->miles_running_total / 238900 ) * 100 ), 2 ) . '%';

			// Determine at what signifigant digit to format from earth to moon to.
			$sig_dig = 2;
			for ( $i = 4; $i <= 7; $i++ ) {
				if ( 0 < $this->perc_to_moon[ $i ] ) {
					$sig_dig = $i - 1;
					break;
				}
			}

			// If we've travelled from the earth to the moon at least once, just display 100%.
			if ( 100 <= $this->perc_to_moon ) {
				$this->perc_to_moon = '100%';
			} else {
				$this->perc_to_moon = number_format( $this->perc_to_moon, $sig_dig ) . '%';
			}

			// If there was no saved distance data at all, return an array holding the 'No Data Found' Html.
			if ( 0 >= $this->miles_running_total ) {
				return '<div class="wphealthtracker-no-saved-data-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span1">' . $this->translations->d3_trans_15 . '</span>
					<br>
					' . $this->translations->d3_trans_85 . '
					<br>' . $this->translations->d3_trans_86 . '
				</p>
			</div>';
			} else {
				$this->miles_running_total = (string) $this->miles_running_total;
				return $this->miles_running_total;
			}
		}

		/**
		 *  Builds data array for second D3 chart
		 */
		public function build_data_2() {

			// Build energy array of arrays.
			$temp_array = array();
			foreach ( $this->alluserdata as $key => $value ) {

				$this->energy_day_counter++;

				// If we have multiple food items per day...
				if ( stripos( $value->foodstring, ',' ) !== false ) {
					// Split up energy from it's measurement.
					$indiv_day = explode( ',', $value->foodstring );

					$total_cals = 0.00;
					$total_kjs  = 0.00;
					foreach ( $indiv_day as $key => $day ) {

						$day    = explode( ';', $day );
						$energy = $day[3];

						// If a energy has been recorded for this loop iteration...
						if ( '' !== $energy ) {

							if ( '' === $this->first_energy_date ) {
								$this->first_energy_date = $value->humandate;
							}

							// split up and format date.
							$date = explode( '-', $value->humandate );

							// Build final formatted date.
							$date = $date[2] . '-' . $date[0] . '-' . $date[1];

							// Build Energy.
							$energy_measurement = $day[4];

							// Build both Calories and Kilojoules.
							if ( $energy_measurement === $this->translations->d3_trans_9 ) {
								$energy_calories   = (float) $energy;
								$energy_kilojoules = '';
							} else {
								$energy_calories   = '';
								$energy_kilojoules = (float) $energy;
							}

							// Now convert Pounds to Kilograms.
							if ( '' !== $energy_calories ) {
								$energy_kilojoules = round( ( $energy / 4.184 ), 2 );
							}

							// Now convert Kilograms to Pounds.
							if ( '' !== $energy_kilojoules ) {
								$energy_calories = round( ( $energy * 4.184 ), 2 );
							}

							$total_cals += round( $energy_calories, 2 );
							$total_kjs  += round( $energy_kilojoules, 2 );
						}
					}

					// Now push total calorie per day data into array.
					$temp_array = array(
						'date' => $date,
						$this->translations->exercise_trans_34 => $total_cals,
						$this->translations->exercise_trans_9 => $total_kjs,
					);

					// Push into final return array.
					array_push( $this->data_2_array, $temp_array );
					$total_cals = 0.00;
					$total_kjs  = 0.00;

				} else {

					$day    = explode( ';', $value->foodstring );
					$energy = $day[3];

					// If a energy has been recorded for this loop iteration...
					if ( '' !== $energy ) {

						if ( '' === $this->first_energy_date ) {
							$this->first_energy_date = $value->humandate;
						}

						// split up and format date.
						$date = explode( '-', $value->humandate );

						// Build final formatted date.
						$date = $date[2] . '-' . $date[0] . '-' . $date[1];

						// Build Energy.
						$energy_measurement = $day[4];

						// Build both Calories and Kilojoules.
						if ( $energy_measurement === $this->translations->d3_trans_9 ) {
							$energy_calories   = (float) $energy;
							$energy_kilojoules = '';
						} else {
							$energy_calories   = '';
							$energy_kilojoules = (float) $energy;
						}

						// Now convert Pounds to Kilograms.
						if ( '' !== $energy_calories ) {
							$energy_kilojoules = round( ( $energy / 4.184 ), 2 );
						}

						// Now convert Kilograms to Pounds.
						if ( '' !== $energy_kilojoules ) {
							$energy_calories = round( ( $energy * 4.184 ), 2 );
						}

						$total_cals += round( $energy_calories, 2 );
						$total_kjs  += round( $energy_kilojoules, 2 );

					}

					// Now push total calorie per day data into array.
					$temp_array = array(
						'date' => $date,
						$this->translations->exercise_trans_34 => $total_cals,
						$this->translations->exercise_trans_9 => $total_kjs,
					);

					// Push into final return array.
					array_push( $this->data_2_array, $temp_array );
					$total_cals = 0.00;
					$total_kjs  = 0.00;
				}
			}

			// If there was no saved Exercise data at all, return an array holding the 'No Data Found' Html.
			if ( count( $this->data_2_array ) === 0 ) {
				return '<div class="wphealthtracker-no-saved-data-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span1">' . $this->translations->d3_trans_15 . '</span>
					<br>
					' . $this->translations->d3_trans_64 . '
					<br>' . $this->translations->d3_trans_67 . '
				</p>
			</div>';
			} elseif ( count( $this->data_2_array ) === 1 ) {
				return '<div class="wphealthtracker-no-saved-data-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span1">' . $this->translations->d3_trans_15 . '</span>
					<br>
					' . $this->translations->d3_trans_68 . '
					<br>' . $this->translations->d3_trans_67 . '
				</p>
			</div>';
			} else {
				return $this->data_2_array;
			}
		}

		/**
		 *  Builds data array for third D3 chart
		 */
		public function build_data_3() {

			// Building average protein per day.
			$this->protein_total = 0;
			$protein_counter     = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$protein_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[5] ) {
								$this->protein_total += $indiv_day2[5];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[5] ) {
							$this->protein_total += $indiv_day[5];
						}
					}
				}
			}
			$this->average_daily_protein = round( ( $this->protein_total / $protein_counter ), 2 );

			// Building average carbs per day.
			$this->carbs_total         = 0;
			$this->carbs_total_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$this->carbs_total_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[11] ) {
								$this->carbs_total += $indiv_day2[11];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[11] ) {
							$this->carbs_total += $indiv_day[11];
						}
					}
				}
			}
			$this->average_daily_carbs = round( ( $this->carbs_total / $this->carbs_total_counter ), 2 );

			// Building average fats per day.
			$this->fats_total = 0;
			$fats_counter     = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$fats_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[7] ) {
								$this->fats_total += $indiv_day2[7];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[7] ) {
							$this->fats_total += $indiv_day[7];
						}
					}
				}
			}
			$this->average_daily_fats = round( ( $this->fats_total / $fats_counter ), 2 );

			$carb_array1 = array(
				'cat' => $this->translations->exercise_trans_35,
				'val' => $this->average_daily_carbs,
			);

			$protein_array1 = array(
				'cat' => $this->translations->exercise_trans_12,
				'val' => $this->average_daily_protein,
			);

			$fats_array1 = array(
				'cat' => $this->translations->exercise_trans_36,
				'val' => $this->average_daily_fats,
			);

			$macro_array1 = array();
			array_push( $macro_array1, $carb_array1 );
			array_push( $macro_array1, $protein_array1 );
			array_push( $macro_array1, $fats_array1 );

			// Now push total calorie per day data into array.
			$temp_array1 = array(
				'type'  => $this->translations->d3_trans_71,
				'unit'  => $this->translations->dashboard_trans_40,
				'data'  => $macro_array1,
				'total' => round( $this->average_daily_carbs + $this->average_daily_protein + $this->average_daily_fats, 2 ),
			);

			$carb_array2 = array(
				'cat' => $this->translations->exercise_trans_35,
				'val' => $this->carbs_total,
			);

			$protein_array2 = array(
				'cat' => $this->translations->exercise_trans_12,
				'val' => $this->protein_total,
			);

			$fats_array2 = array(
				'cat' => $this->translations->exercise_trans_36,
				'val' => $this->fats_total,
			);

			$macro_array2 = array();
			array_push( $macro_array2, $carb_array2 );
			array_push( $macro_array2, $protein_array2 );
			array_push( $macro_array2, $fats_array2 );

			// Now push total calorie per day data into array.
			$temp_array2 = array(
				'type'  => $this->translations->d3_trans_70,
				'unit'  => $this->translations->dashboard_trans_40,
				'data'  => $macro_array2,
				'total' => round( $this->carbs_total + $this->protein_total + $this->fats_total, 2 ),
			);

			array_push( $this->data_3_array, $temp_array1 );
			array_push( $this->data_3_array, $temp_array2 );

			return $this->data_3_array;

		}

		/**
		 *  Builds title area HTML for each of the 3 sections
		 */
		public function get_title_area_html() {

			$title_1 = '
			<img class="wphealthtracker-d3-chart-title-img" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'runner.svg"/>		
			<img class="wphealthtracker-icon-image-question" id="wphealthtracker-icon-image-question-d3-chart-title" data-label="selectauser" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg" /><p class="wphealthtracker-d3-chart-title-actual">' . $this->translations->d3_trans_74 . '</p>
			<div class="wphealthtracker-d3-chart-title-line"></div>';

			$title_2 = '
			<img class="wphealthtracker-d3-chart-title-img" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'strong.svg"/>		
			<img class="wphealthtracker-icon-image-question" id="wphealthtracker-icon-image-question-d3-chart-title" data-label="selectauser" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg" /><p class="wphealthtracker-d3-chart-title-actual">' . $this->translations->d3_trans_90 . '</p>
			<div class="wphealthtracker-d3-chart-title-line"></div>';

			$title_3 = '
			<img class="wphealthtracker-d3-chart-title-img" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'scales.svg"/>		
			<img class="wphealthtracker-icon-image-question" id="wphealthtracker-icon-image-question-d3-chart-title" data-label="selectauser" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-black.svg" /><p class="wphealthtracker-d3-chart-title-actual">' . $this->translations->d3_trans_63 . '</p>
			<div class="wphealthtracker-d3-chart-title-line"></div>';

			array_push( $this->titles_array, $title_1 );
			array_push( $this->titles_array, $title_2 );
			array_push( $this->titles_array, $title_3 );

			return $this->titles_array;

		}

		/**
		 *  Builds the stats data variables to be later used in the Stats HTML for the first section
		 */
		public function build_stats_data_1() {

			// Build total Unique Food Items and most eaten food.
			$orig_unique_foods        = $this->unique_food_items_array;
			$final_unique_foods       = array_unique( $this->unique_food_items_array );
			$this->unique_foods_count = count( $final_unique_foods );
			$values                   = array_count_values( $orig_unique_foods );
			arsort( $values );
			$this->top_five_food_items = array_slice( array_keys( $values ), 0, 5, true );
			$temp_top_food_item        = explode( ';', $this->top_five_food_items[0] );
			$this->top_five_food_items = $temp_top_food_item[0];

			$total_cals = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have multiple food items per day...
				if ( stripos( $value->foodstring, ',' ) !== false ) {
					$split_day = explode( ',', $value->foodstring );
					foreach ( $split_day as $key2 => $value2 ) {
						$split_day_items = explode( ';', $value2 );

						// Now convert energy.
						$calories = 0;
						$kcals    = 0;
						$kjs      = 0;

						if ( 'Calories' === $split_day_items[4] ) {
							$calories = $split_day_items[3];
							$kcals    = $split_day_items[3];
							$kjs      = round( ( $split_day_items[3] * 4.184 ), 2 );
						}

						if ( 'kcal' === $split_day_items[4] ) {
							$calories = $split_day_items[3];
							$kcals    = $split_day_items[3];
							$kjs      = round( ( $split_day_items[3] * 4.184 ), 2 );
						}

						if ( 'kJ' === $split_day_items[4] ) {
							$calories = round( ( $split_day_items[3] / 4.184 ), 2 );
							$kcals    = round( ( $split_day_items[3] / 4.184 ), 2 );
							$kjs      = $split_day_items[3];
						}

						$this->total_cals    += $calories;
						$this->total_kcals   += $kcals;
						$this->total_kjoules += $kjs;
					}
				} else {
					// One food item per day.
					$split_day_items = explode( ';', $value->foodstring );

					// Now convert energy.
					$calories = 0;
					$kcals    = 0;
					$kjs      = 0;

					if ( 'Calories' === $split_day_items[4] ) {
						$calories = $split_day_items[3];
						$kcals    = $split_day_items[3];
						$kjs      = round( ( $split_day_items[3] * 4.184 ), 2 );
					}

					if ( 'kcal' === $split_day_items[4] ) {
						$calories = $split_day_items[3];
						$kcals    = $split_day_items[3];
						$kjs      = round( ( $split_day_items[3] * 4.184 ), 2 );
					}

					if ( 'kJ' === $split_day_items[4] ) {
						$calories = round( ( $split_day_items[3] / 4.184 ), 2 );
						$kcals    = round( ( $split_day_items[3] / 4.184 ), 2 );
						$kjs      = $split_day_items[3];
					}

					$this->total_cals    += $calories;
					$this->total_kcals   += $kcals;
					$this->total_kjoules += $kjs;
				}
			}
			$this->total_cals = number_format( round( $this->total_cals, 2 ), 2 );

			// Building average protein per day.
			$protein         = 0;
			$protein_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$protein_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[5] ) {
								$protein += $indiv_day2[5];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[5] ) {
							$protein += $indiv_day[5];
						}
					}
				}
			}
			$this->average_daily_protein = round( ( $protein / $protein_counter ), 2 );

			// Building average carbs per day.
			$this->carbs_total         = 0;
			$this->carbs_total_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$this->carbs_total_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[11] ) {
								$this->carbs_total += $indiv_day2[11];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[11] ) {
							$this->carbs_total += $indiv_day[11];
						}
					}
				}
			}
			$this->average_daily_carbs = round( ( $this->carbs_total / $this->carbs_total_counter ), 2 );

			// Building average sugars per day.
			$sugars         = 0;
			$sugars_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$sugars_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[13] ) {
								$sugars += $indiv_day2[13];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[13] ) {
							$sugars += $indiv_day[13];
						}
					}
				}
			}
			$this->average_daily_sugars = round( ( $sugars / $sugars_counter ), 2 );

			// Building average fiber per day.
			$fiber         = 0;
			$fiber_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$fiber_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[12] ) {
								$fiber += $indiv_day2[12];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[12] ) {
							$fiber += $indiv_day[12];
						}
					}
				}
			}
			$this->average_daily_fiber = round( ( $fiber / $fiber_counter ), 2 );

			// Building average fats per day.
			$this->fats_total = 0;
			$fats_counter     = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$fats_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[7] ) {
								$this->fats_total += $indiv_day2[7];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[7] ) {
							$this->fats_total += $indiv_day[7];
						}
					}
				}
			}
			$this->average_daily_fats = round( ( $this->fats_total / $fats_counter ), 2 );

			// Building average satfats per day.
			$satfats         = 0;
			$satfats_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$satfats_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[8] ) {
								$satfats += $indiv_day2[8];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[8] ) {
							$satfats += $indiv_day[8];
						}
					}
				}
			}
			$this->average_daily_satfats = round( ( $satfats / $satfats_counter ), 2 );

			// Building average monounsatfats per day.
			$monounsatfats         = 0;
			$monounsatfats_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$monounsatfats_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[9] ) {
								$monounsatfats += $indiv_day2[9];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[9] ) {
							$monounsatfats += $indiv_day[9];
						}
					}
				}
			}
			$this->average_daily_monounsatfats = round( ( $monounsatfats / $monounsatfats_counter ), 2 );

			// Building average polyunsatfats per day.
			$polyunsatfats         = 0;
			$polyunsatfats_counter = 0;
			foreach ( $this->alluserdata as $key => $value ) {
				// If we have saved data...
				if ( '' !== $value->foodstring ) {
					// Increment counter for averages and whatnot.
					$polyunsatfats_counter++;

					if ( stripos( $value->foodstring, ',' ) !== false ) {
						$indiv_day = explode( ',', $value->foodstring );
						foreach ( $indiv_day as $key2 => $value2 ) {

							$indiv_day2 = explode( ';', $value2 );
							if ( '' !== $indiv_day2[10] ) {
								$polyunsatfats += $indiv_day2[10];
							}
						}
					} else {
						$indiv_day = explode( ';', $value->foodstring );
						if ( '' !== $indiv_day[10] ) {
							$polyunsatfats += $indiv_day[10];
						}
					}
				}
			}
			$this->average_daily_polyunsatfats = round( ( $polyunsatfats / $polyunsatfats_counter ), 2 );
		}

		/**
		 *  Builds the stats data variables to be later used in the Stats HTML for the second section
		 */
		public function build_stats_data_2() {

		}

		/**
		 *  Builds the stats data variables to be later used in the Stats HTML for the third section
		 */
		public function build_stats_data_3() {

		}

		/**
		 *  Builds the Stats HTML for each of the 3 sections utilizing the
		 *  member variables created in the 3 previous functions.
		 */
		public function get_stats_area_html() {

			// Build data for the Food Items area.
			$this->build_stats_data_1();

			// Build data for the Blood Pressure area.
			$this->build_stats_data_2();

			// Build data for the Cholesterol area.
			$this->build_stats_data_3();

			// If there is more than 1 day of Exercise data saved...
			$stats_1 = '';
			(float) $this->miles_running_total;
			if ( 0 < $this->miles_running_total ) {

				$this->miles_running_total = number_format( $this->miles_running_total, 2 );

				$stats_1 = '
			<img class="wphealthtracker-d3-chart-title-img" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'computer.svg"/>		
			<p class="wphealthtracker-d3-chart-subtitle-actual">' . $this->translations->d3_trans_84 . '</p>
			<div class="wphealthtracker-d3-chart-title-line"></div>
			<div class="wphealthtracker-dashboard-actual-info">
				<div class="wphealthtracker-dashboard-row">
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_3 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->alluserdata[0]->humandate . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_79 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->miles_running_total . ' ' . $this->translations->common_trans_53 . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_80 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->kilometers_running_total . ' ' . $this->translations->common_trans_55 . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_81 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->meters_running_total . ' ' . $this->translations->common_trans_54 . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_82 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->yards_running_total . ' ' . $this->translations->common_trans_52 . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_83 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->feet_running_total . ' ' . $this->translations->common_trans_51 . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_88 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->perc_around_world . ' ' . $this->translations->d3_trans_75 . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_89 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->perc_to_moon . ' ' . $this->translations->d3_trans_75 . '</span>
						</p>
					</div>
					
					
				</div>
			</div>';

			} else {
				$stats_1 = '<div class="wphealthtracker-no-saved-data-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span1">' . $this->translations->d3_trans_15 . '</span>
					<br>
					' . $this->translations->d3_trans_85 . '
					<br>' . $this->translations->d3_trans_87 . '
				</p>
			</div>';
			}

			// If there is 1 or more day of Food data with Calories data saved...
			$stats_2 = '';
			if ( $this->energy_day_counter > 0 ) {
				$stats_2 = '
			<img class="wphealthtracker-d3-chart-title-img" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'computer.svg"/>		
			<p class="wphealthtracker-d3-chart-subtitle-actual">' . $this->translations->d3_trans_91 . '</p>
			<div class="wphealthtracker-d3-chart-title-line"></div>
			<div class="wphealthtracker-dashboard-actual-info">
				<div class="wphealthtracker-dashboard-row">
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_3 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->first_energy_date . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_57 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->total_cals . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_61 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->total_kjoules . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_42 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->average_daily_calories . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_43 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->average_daily_kilojoules . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->exercise_trans_43 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->highest_caloric_item . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->exercise_trans_44 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->conseq_caloric_decrease . ' ' . $this->translations->common_trans_46 . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->exercise_trans_45 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->conseq_caloric_increase . ' ' . $this->translations->common_trans_46 . '
						</p>
					</div>
				</div>
			</div>';

			}

			// If there is no Food data with Calories data saved, display the the 'No Data' message.
			if ( 0 === $this->energy_day_counter ) {
				$stats_2 = '<div class="wphealthtracker-no-saved-data-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span1">' . $this->translations->d3_trans_15 . '</span>
					<br>
					' . $this->translations->d3_trans_64 . '
					<br>' . $this->translations->d3_trans_65 . '
				</p>
			</div>';
			}

			// If there is 1 or more days of Exercise data saved...
			$stats_3 = '';
			if ( count( $this->alluserdata ) > 0 ) {
				$stats_3 = '
			<img class="wphealthtracker-d3-chart-title-img" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'computer.svg"/>		
			<p class="wphealthtracker-d3-chart-subtitle-actual">' . $this->translations->d3_trans_73 . '</p>
			<div class="wphealthtracker-d3-chart-title-line"></div>
			<div class="wphealthtracker-dashboard-actual-info">
				<div class="wphealthtracker-dashboard-row">
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->d3_trans_3 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->alluserdata[0]->humandate . '</span>
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_36 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->average_daily_carbs . ' ' . $this->translations->dashboard_trans_40 . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_35 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->average_daily_protein . ' ' . $this->translations->dashboard_trans_40 . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_38 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->average_daily_fats . ' ' . $this->translations->dashboard_trans_40 . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_48 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->protein_total . ' ' . $this->translations->dashboard_trans_40 . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_47 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->carbs_total . ' ' . $this->translations->dashboard_trans_40 . '
						</p>
					</div>
					<div class="wphealthtracker-dashboard-row-entry">
						<p>
							<img class="wphealthtracker-icon-image-question-dashboard" data-label="dash-daystracked" src="' . WPHEALTHTRACKER_ROOT_IMG_ICONS_URL . 'question-red.svg" />
							<span class="wphealthtracker-dashboard-row-entry-label">' . $this->translations->dashboard_trans_49 . '</span>
							<span class="wphealthtracker-dashboard-row-entry-data">' . $this->fats_total . ' ' . $this->translations->dashboard_trans_40 . '
						</p>
					</div>
				</div>
			</div>';

			}

			// If there's no blood pressure data saved, display the 'No Data' message.
			if ( count( $this->alluserdata ) === 0 ) {
				$stats_3 = '<div class="wphealthtracker-no-saved-data-div">
				<p>
					<img class="wphealthtracker-shocked-image" src="http://localhost:8888/local/wp-content/plugins/wphealthtracker/assets/img/icons/shocked.svg">
					<span class="wphealthtracker-no-saved-span1">' . $this->translations->d3_trans_15 . '</span>
					<br>
					' . $this->translations->d3_trans_51 . '
					<br>' . $this->translations->d3_trans_52 . '
				</p>
			</div>';
			}

			array_push( $this->stats_array, $stats_1 );
			array_push( $this->stats_array, $stats_2 );
			array_push( $this->stats_array, $stats_3 );

			return $this->stats_array;

		}

	}
endif;
