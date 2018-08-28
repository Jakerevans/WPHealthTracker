<?php

/**
 * Class WPHealthTracker_Translations - wphealthtracker-translations.php
 *
 * @author   Jake Evans
 * @category Translations
 * @package  Includes/Classes/Translations
 * @version  0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPHealthTracker_Translations', false ) ) :
	/**
	 * WPHealthTracker_Translations class. This class will house all the translations we may ever need...
	 */
	class WPHealthTracker_Translations {

		// Member variables for the Vitals tab
		public $vitals_trans_1  = '';
		public $vitals_trans_2  = '';
		public $vitals_trans_3  = '';
		public $vitals_trans_4  = '';
		public $vitals_trans_5  = '';
		public $vitals_trans_6  = '';
		public $vitals_trans_7  = '';
		public $vitals_trans_8  = '';
		public $vitals_trans_9  = '';
		public $vitals_trans_10 = '';
		public $vitals_trans_11 = '';
		public $vitals_trans_12 = '';
		public $vitals_trans_13 = '';
		public $vitals_trans_14 = '';
		public $vitals_trans_15 = '';
		public $vitals_trans_16 = '';
		public $vitals_trans_17 = '';
		public $vitals_trans_18 = '';
		public $vitals_trans_19 = '';
		public $vitals_trans_20 = '';
		public $vitals_trans_21 = '';
		public $vitals_trans_22 = '';
		public $vitals_trans_23 = '';
		public $vitals_trans_24 = '';


		public $common_trans_1  = '';
		public $common_trans_2  = '';
		public $common_trans_3  = '';
		public $common_trans_4  = '';
		public $common_trans_5  = '';
		public $common_trans_6  = '';
		public $common_trans_7  = '';
		public $common_trans_8  = '';
		public $common_trans_9  = '';
		public $common_trans_10 = '';
		public $common_trans_11 = '';
		public $common_trans_12 = '';
		public $common_trans_13 = '';
		public $common_trans_14 = '';
		public $common_trans_15 = '';
		public $common_trans_16 = '';
		public $common_trans_17 = '';
		public $common_trans_18 = '';
		public $common_trans_19 = '';
		public $common_trans_20 = '';
		public $common_trans_21 = '';
		public $common_trans_22 = '';
		public $common_trans_23 = '';
		public $common_trans_24 = '';
		public $common_trans_25 = '';
		public $common_trans_26 = '';
		public $common_trans_27 = '';
		public $common_trans_28 = '';
		public $common_trans_29 = '';
		public $common_trans_30 = '';
		public $common_trans_31 = '';
		public $common_trans_32 = '';
		public $common_trans_33 = '';
		public $common_trans_34 = '';

		public $tab_title_1 = '';
		public $tab_title_2 = '';
		public $tab_title_3 = '';
		public $tab_title_4 = '';

		public $dashboard_trans_1  = '';
		public $dashboard_trans_2  = '';
		public $dashboard_trans_3  = '';
		public $dashboard_trans_4  = '';
		public $dashboard_trans_5  = '';
		public $dashboard_trans_6  = '';
		public $dashboard_trans_7  = '';
		public $dashboard_trans_8  = '';
		public $dashboard_trans_9  = '';
		public $dashboard_trans_10 = '';
		public $dashboard_trans_11 = '';
		public $dashboard_trans_12 = '';
		public $dashboard_trans_13 = '';
		public $dashboard_trans_14 = '';
		public $dashboard_trans_15 = '';
		public $dashboard_trans_16 = '';
		public $dashboard_trans_17 = '';
		public $dashboard_trans_18 = '';
		public $dashboard_trans_19 = '';
		public $dashboard_trans_20 = '';
		public $dashboard_trans_21 = '';
		public $dashboard_trans_22 = '';
		public $dashboard_trans_23 = '';
		public $dashboard_trans_24 = '';
		public $dashboard_trans_25 = '';
		public $dashboard_trans_26 = '';
		public $dashboard_trans_27 = '';
		public $dashboard_trans_28 = '';
		public $dashboard_trans_29 = '';
		public $dashboard_trans_30 = '';
		public $dashboard_trans_31 = '';
		public $dashboard_trans_32 = '';
		public $dashboard_trans_33 = '';
		public $dashboard_trans_34 = '';
		public $dashboard_trans_35 = '';
		public $dashboard_trans_36 = '';
		public $dashboard_trans_37 = '';
		public $dashboard_trans_38 = '';
		public $dashboard_trans_39 = '';

		public $d3_trans_1  = '';
		public $d3_trans_2  = '';
		public $d3_trans_3  = '';
		public $d3_trans_4  = '';
		public $d3_trans_5  = '';
		public $d3_trans_6  = '';
		public $d3_trans_7  = '';
		public $d3_trans_8  = '';
		public $d3_trans_9  = '';
		public $d3_trans_10 = '';
		public $d3_trans_11 = '';
		public $d3_trans_12 = '';
		public $d3_trans_13 = '';
		public $d3_trans_14 = '';
		public $d3_trans_15 = '';
		public $d3_trans_16 = '';
		public $d3_trans_17 = '';
		public $d3_trans_18 = '';
		public $d3_trans_19 = '';
		public $d3_trans_20 = '';
		public $d3_trans_21 = '';
		public $d3_trans_22 = '';
		public $d3_trans_23 = '';
		public $d3_trans_24 = '';
		public $d3_trans_25 = '';
		public $d3_trans_26 = '';
		public $d3_trans_27 = '';
		public $d3_trans_28 = '';
		public $d3_trans_29 = '';
		public $d3_trans_30 = '';
		public $d3_trans_31 = '';
		public $d3_trans_32 = '';
		public $d3_trans_33 = '';
		public $d3_trans_34 = '';
		public $d3_trans_35 = '';
		public $d3_trans_36 = '';
		public $d3_trans_37 = '';
		public $d3_trans_38 = '';
		public $d3_trans_39 = '';
		public $d3_trans_40 = '';
		public $d3_trans_41 = '';
		public $d3_trans_42 = '';
		public $d3_trans_43 = '';
		public $d3_trans_44 = '';
		public $d3_trans_45 = '';
		public $d3_trans_46 = '';
		public $d3_trans_47 = '';
		public $d3_trans_48 = '';


		// This function will house all the strings that would need translations in the wphealthtracker-admin-js.js JavaScript file
		public function admin_js_trans_strings() {
			return $translation_array = array(
				'adminjstransstring1'  => __( 'Select a User', 'wphealthtracker-textdomain' ),
				'adminjstransstring2'  => __( 'Blah', 'wphealthtracker-textdomain' ),
				'adminjstransstring3'  => __( 'Weight', 'wphealthtracker-textdomain' ),
				'adminjstransstring4'  => __( 'Blah', 'wphealthtracker-textdomain' ),
				'adminjstransstring5'  => __( 'Blood Pressure', 'wphealthtracker-textdomain' ),
				'adminjstransstring6'  => __( 'Blah', 'wphealthtracker-textdomain' ),
				'adminjstransstring7'  => __( 'Blood Oxygen Level', 'wphealthtracker-textdomain' ),
				'adminjstransstring8'  => __( 'Blah', 'wphealthtracker-textdomain' ),
				'adminjstransstring9'  => __( 'Expand', 'wphealthtracker-textdomain' ),
				'adminjstransstring10' => __( 'Minimize', 'wphealthtracker-textdomain' ),
			);
		}

		// Translation strings that are common to different tabs and used all throughout the plugin
		public function common_trans_strings() {

			$this->common_trans_1 = __( 'Expand', 'wphealthtracker-textdomain' );

			$this->common_trans_2  = __( 'Data for', 'wphealthtracker-textdomain' );
			$this->common_trans_3  = __( 'Update Data for', 'wphealthtracker-textdomain' );
			$this->common_trans_4  = __( 'Whoops! Looks like you might have missed entering some data!', 'wphealthtracker-textdomain' );
			$this->common_trans_5  = __( 'Enter Data for', 'wphealthtracker-textdomain' );
			$this->common_trans_6  = __( 'Expand', 'wphealthtracker-textdomain' );
			$this->common_trans_7  = __( 'View & Edit Saved Data', 'wphealthtracker-textdomain' );
			$this->common_trans_8  = __( 'Past 7 Days', 'wphealthtracker-textdomain' );
			$this->common_trans_9  = __( 'Past 30 Days', 'wphealthtracker-textdomain' );
			$this->common_trans_10 = __( 'Past 60 Days', 'wphealthtracker-textdomain' );
			$this->common_trans_11 = __( 'Past 90 Days', 'wphealthtracker-textdomain' );
			$this->common_trans_12 = __( 'Filter Data', 'wphealthtracker-textdomain' );
			$this->common_trans_13 = __( 'Filter', 'wphealthtracker-textdomain' );
			$this->common_trans_14 = __( 'Uh-Oh! Looks like you haven\'t created any users yet!', 'wphealthtracker-textdomain' );
			$this->common_trans_15 = __( 'Click Here to Create a User', 'wphealthtracker-textdomain' );
			$this->common_trans_16 = __( 'Select a User', 'wphealthtracker-textdomain' );
			$this->common_trans_17 = __( 'Choose an Option Below', 'wphealthtracker-textdomain' );
			$this->common_trans_18 = __( 'Uh-Oh!', 'wphealthtracker-textdomain' );
			$this->common_trans_19 = __( 'Looks like there\'s no previously saved data for', 'wphealthtracker-textdomain' );
			$this->common_trans_20 = __( 'Try saving some data in the "Enter Data for', 'wphealthtracker-textdomain' );
			$this->common_trans_21 = __( 'section above', 'wphealthtracker-textdomain' );
			$this->common_trans_22 = __( 'Please note that data entered today will not appear in this section until tomorrow', 'wphealthtracker-textdomain' );
			$this->common_trans_23 = __( 'Measurement', 'wphealthtracker-textdomain' );
			$this->common_trans_24 = __( 'Total', 'wphealthtracker-textdomain' );
			$this->common_trans_25 = __( 'Time of Day', 'wphealthtracker-textdomain' );
			$this->common_trans_26 = __( 'Percent', 'wphealthtracker-textdomain' );
			$this->common_trans_27 = __( 'Images', 'wphealthtracker-textdomain' );
			$this->common_trans_28 = __( 'Image URL', 'wphealthtracker-textdomain' );
			$this->common_trans_29 = __( 'Upload Image', 'wphealthtracker-textdomain' );
			$this->common_trans_30 = __( 'Choose/Upload Image', 'wphealthtracker-textdomain' );
			$this->common_trans_31 = __( 'Files', 'wphealthtracker-textdomain' );
			$this->common_trans_32 = __( 'File URL', 'wphealthtracker-textdomain' );
			$this->common_trans_33 = __( 'Upload File', 'wphealthtracker-textdomain' );
			$this->common_trans_34 = __( 'Choose/Upload File', 'wphealthtracker-textdomain' );
			$this->common_trans_35 = __( 'Category', 'wphealthtracker-textdomain' );
			$this->common_trans_36 = __( 'Type', 'wphealthtracker-textdomain' );
			$this->common_trans_37 = __( 'Mixed', 'wphealthtracker-textdomain' );
			$this->common_trans_38 = __( 'Unknown', 'wphealthtracker-textdomain' );
			$this->common_trans_39 = __( 'Minimize', 'wphealthtracker-textdomain' );
			$this->common_trans_40 = __( 'Clone', 'wphealthtracker-textdomain' );
			$this->common_trans_41 = __( 'Delete', 'wphealthtracker-textdomain' );
			$this->common_trans_42 = __( 'Add Row', 'wphealthtracker-textdomain' );
			$this->common_trans_43 = __( 'Times', 'wphealthtracker-textdomain' );
			$this->common_trans_44 = __( 'Time', 'wphealthtracker-textdomain' );
			$this->common_trans_45 = __( 'N/A', 'wphealthtracker-textdomain' );
			$this->common_trans_46 = __( 'Day(s)', 'wphealthtracker-textdomain' );
			$this->common_trans_47 = __( 'Other', 'wphealthtracker-textdomain' );
			$this->common_trans_48 = __( 'Seconds', 'wphealthtracker-textdomain' );
			$this->common_trans_49 = __( 'Minutes', 'wphealthtracker-textdomain' );
			$this->common_trans_50 = __( 'Hours', 'wphealthtracker-textdomain' );
			$this->common_trans_51 = __( 'Feet', 'wphealthtracker-textdomain' );
			$this->common_trans_52 = __( 'Yards', 'wphealthtracker-textdomain' );
			$this->common_trans_53 = __( 'Miles', 'wphealthtracker-textdomain' );
			$this->common_trans_54 = __( 'Meters', 'wphealthtracker-textdomain' );
			$this->common_trans_55 = __( 'Kilometers', 'wphealthtracker-textdomain' );
			$this->common_trans_56 = __( 'KMs', 'wphealthtracker-textdomain' );

			return $translation_array1 = array(
				'commontrans1'  => $this->common_trans_1,
				'commontrans2'  => $this->common_trans_2,
				'commontrans3'  => $this->common_trans_3,
				'commontrans4'  => $this->common_trans_4,
				'commontrans5'  => $this->common_trans_5,
				'commontrans6'  => $this->common_trans_6,
				'commontrans7'  => $this->common_trans_7,
				'commontrans8'  => $this->common_trans_8,
				'commontrans9'  => $this->common_trans_9,
				'commontrans10' => $this->common_trans_10,
				'commontrans11' => $this->common_trans_11,
				'commontrans12' => $this->common_trans_12,
				'commontrans13' => $this->common_trans_13,
				'commontrans14' => $this->common_trans_14,
				'commontrans15' => $this->common_trans_15,
				'commontrans16' => $this->common_trans_16,
				'commontrans17' => $this->common_trans_17,
				'commontrans18' => $this->common_trans_18,
				'commontrans19' => $this->common_trans_19,
				'commontrans20' => $this->common_trans_20,
				'commontrans21' => $this->common_trans_21,
				'commontrans22' => $this->common_trans_22,
				'commontrans23' => $this->common_trans_23,
				'commontrans24' => $this->common_trans_24,
				'commontrans25' => $this->common_trans_25,
				'commontrans26' => $this->common_trans_26,
				'commontrans27' => $this->common_trans_27,
				'commontrans28' => $this->common_trans_28,
				'commontrans29' => $this->common_trans_29,
				'commontrans30' => $this->common_trans_30,
				'commontrans31' => $this->common_trans_31,
				'commontrans32' => $this->common_trans_32,
				'commontrans33' => $this->common_trans_33,
				'commontrans34' => $this->common_trans_34,
				'commontrans35' => $this->common_trans_35,
				'commontrans36' => $this->common_trans_36,
				'commontrans37' => $this->common_trans_37,
				'commontrans38' => $this->common_trans_38,
				'commontrans39' => $this->common_trans_39,
				'commontrans40' => $this->common_trans_40,
				'commontrans41' => $this->common_trans_41,
				'commontrans42' => $this->common_trans_42,
				'commontrans43' => $this->common_trans_43,
				'commontrans44' => $this->common_trans_44,
				'commontrans45' => $this->common_trans_45,
				'commontrans46' => $this->common_trans_46,
				'commontrans47' => $this->common_trans_47,
				'commontrans48' => $this->common_trans_48,
				'commontrans49' => $this->common_trans_49,
				'commontrans50' => $this->common_trans_50,
				'commontrans51' => $this->common_trans_51,
				'commontrans52' => $this->common_trans_52,
				'commontrans53' => $this->common_trans_53,
				'commontrans54' => $this->common_trans_54,
				'commontrans55' => $this->common_trans_55,
				'commontrans56' => $this->common_trans_56,
			);
		}

		public function tab_titles_trans_strings() {

			$this->tab_title_1 = __( 'Welcome!', 'wphealthtracker-textdomain' );
			$this->tab_title_2 = __( 'Vitals', 'wphealthtracker-textdomain' );
			$this->tab_title_3 = __( 'Vital Stats', 'wphealthtracker-textdomain' );
			$this->tab_title_4 = __( 'Diet', 'wphealthtracker-textdomain' );
			$this->tab_title_5 = __( 'Diet Stats', 'wphealthtracker-textdomain' );
			$this->tab_title_6 = __( 'Exercise', 'wphealthtracker-textdomain' );
			$this->tab_title_7 = __( 'Create Users', 'wphealthtracker-textdomain' );
			$this->tab_title_8 = __( 'Medications', 'wphealthtracker-textdomain' );
			$this->tab_title_9 = __( 'Lifestyle', 'wphealthtracker-textdomain' );
			$this->tab_title_10 = __( 'Goal Tracker', 'wphealthtracker-textdomain' );
			$this->tab_title_11 = __( 'Misc. Notes', 'wphealthtracker-textdomain' );
			$this->tab_title_12 = __( 'Exercise Stats', 'wphealthtracker-textdomain' );
			$this->tab_title_13 = __( 'Med Stats', 'wphealthtracker-textdomain' );
			$this->tab_title_14 = __( 'L & A Stats', 'wphealthtracker-textdomain' );
			$this->tab_title_15 = __( 'Goal Stats', 'wphealthtracker-textdomain' );

			return $translation_array1 = array(
				'tabtitle1' => $this->tab_title_1,
				'tabtitle2' => $this->tab_title_2,
				'tabtitle3' => $this->tab_title_3,
				'tabtitle4' => $this->tab_title_4,
				'tabtitle5' => $this->tab_title_5,
				'tabtitle6' => $this->tab_title_6,
				'tabtitle7' => $this->tab_title_7,
			);

		}

		public function vitals_tab_trans_strings() {

			$this->vitals_trans_1  = __( 'Weight', 'wphealthtracker-textdomain' );
			$this->vitals_trans_2  = __( 'Pounds', 'wphealthtracker-textdomain' );
			$this->vitals_trans_3  = __( 'Kilograms', 'wphealthtracker-textdomain' );
			$this->vitals_trans_4  = __( 'Cholesterol', 'wphealthtracker-textdomain' );
			$this->vitals_trans_5  = __( 'LDL', 'wphealthtracker-textdomain' );
			$this->vitals_trans_6  = __( 'HDL', 'wphealthtracker-textdomain' );
			$this->vitals_trans_7  = __( 'Triglycerides', 'wphealthtracker-textdomain' );
			$this->vitals_trans_8  = __( 'Blood Pressure', 'wphealthtracker-textdomain' );
			$this->vitals_trans_9  = __( 'Systolic', 'wphealthtracker-textdomain' );
			$this->vitals_trans_10 = __( 'Diastolic', 'wphealthtracker-textdomain' );
			$this->vitals_trans_11 = __( 'Blood Sugar', 'wphealthtracker-textdomain' );
			$this->vitals_trans_12 = __( 'Level', 'wphealthtracker-textdomain' );
			$this->vitals_trans_13 = __( 'mg/dL', 'wphealthtracker-textdomain' );
			$this->vitals_trans_14 = __( 'mmol/L', 'wphealthtracker-textdomain' );
			$this->vitals_trans_15 = __( 'Blood Oxygen Level', 'wphealthtracker-textdomain' );
			$this->vitals_trans_16 = __( 'Oxygen Level', 'wphealthtracker-textdomain' );
			$this->vitals_trans_17 = __( 'mm HG', 'wphealthtracker-textdomain' );
			$this->vitals_trans_18 = __( 'Body Temperature', 'wphealthtracker-textdomain' );
			$this->vitals_trans_19 = __( 'Temperature', 'wphealthtracker-textdomain' );
			$this->vitals_trans_20 = __( 'Fahrenheit', 'wphealthtracker-textdomain' );
			$this->vitals_trans_21 = __( 'Celcius', 'wphealthtracker-textdomain' );
			$this->vitals_trans_22 = __( 'Heart Rate', 'wphealthtracker-textdomain' );
			$this->vitals_trans_23 = __( 'Beats Per Minute', 'wphealthtracker-textdomain' );
			$this->vitals_trans_24 = __( 'Save Vitals', 'wphealthtracker-textdomain' );

			return $translation_array2 = array(
				'vitalstrans1'  => $this->vitals_trans_1,
				'vitalstrans2'  => $this->vitals_trans_2,
				'vitalstrans3'  => $this->vitals_trans_3,
				'vitalstrans4'  => $this->vitals_trans_4,
				'vitalstrans5'  => $this->vitals_trans_5,
				'vitalstrans6'  => $this->vitals_trans_6,
				'vitalstrans7'  => $this->vitals_trans_7,
				'vitalstrans8'  => $this->vitals_trans_8,
				'vitalstrans9'  => $this->vitals_trans_9,
				'vitalstrans10' => $this->vitals_trans_10,
				'vitalstrans11' => $this->vitals_trans_11,
				'vitalstrans12' => $this->vitals_trans_12,
				'vitalstrans13' => $this->vitals_trans_13,
				'vitalstrans14' => $this->vitals_trans_14,
				'vitalstrans15' => $this->vitals_trans_15,
				'vitalstrans16' => $this->vitals_trans_16,
				'vitalstrans17' => $this->vitals_trans_17,
				'vitalstrans18' => $this->vitals_trans_18,
				'vitalstrans19' => $this->vitals_trans_19,
				'vitalstrans20' => $this->vitals_trans_20,
				'vitalstrans21' => $this->vitals_trans_21,
				'vitalstrans22' => $this->vitals_trans_22,
				'vitalstrans23' => $this->vitals_trans_23,
				'vitalstrans24' => $this->vitals_trans_24,
			);
		}

		public function diet_tab_trans_strings() {

			$this->diet_trans_1  = __( 'Diet', 'wphealthtracker-textdomain' );
			$this->diet_trans_2  = __( 'Food Item', 'wphealthtracker-textdomain' );
			$this->diet_trans_3  = __( 'Time Consumed', 'wphealthtracker-textdomain' );
			$this->diet_trans_4  = __( 'Total Fat', 'wphealthtracker-textdomain' );
			$this->diet_trans_5  = __( 'Saturated Fat', 'wphealthtracker-textdomain' );
			$this->diet_trans_6  = __( 'Monounsaturated Fat', 'wphealthtracker-textdomain' );
			$this->diet_trans_7  = __( 'Polyunsaturated Fat', 'wphealthtracker-textdomain' );
			$this->diet_trans_8  = __( 'Calories/Kilocalories', 'wphealthtracker-textdomain' );
			$this->diet_trans_9  = __( 'Calories', 'wphealthtracker-textdomain' );
			$this->diet_trans_10 = __( 'kcal', 'wphealthtracker-textdomain' );
			$this->diet_trans_11 = __( 'kJ', 'wphealthtracker-textdomain' );
			$this->diet_trans_12 = __( 'Protein', 'wphealthtracker-textdomain' );
			$this->diet_trans_13 = __( 'Whey', 'wphealthtracker-textdomain' );
			$this->diet_trans_14 = __( 'Casein', 'wphealthtracker-textdomain' );
			$this->diet_trans_15 = __( 'Soy', 'wphealthtracker-textdomain' );
			$this->diet_trans_16 = __( 'Animal/Meat', 'wphealthtracker-textdomain' );
			$this->diet_trans_17 = __( 'Milk/Dairy', 'wphealthtracker-textdomain' );
			$this->diet_trans_18 = __( 'Egg', 'wphealthtracker-textdomain' );
			$this->diet_trans_19 = __( 'Vegitarian/Plant-Based', 'wphealthtracker-textdomain' );
			$this->diet_trans_20 = __( 'Total Carbohydrates', 'wphealthtracker-textdomain' );
			$this->diet_trans_21 = __( 'Dietary Fiber', 'wphealthtracker-textdomain' );
			$this->diet_trans_22 = __( 'Total Sugars', 'wphealthtracker-textdomain' );
			$this->diet_trans_23 = __( 'Save this food item for future use?', 'wphealthtracker-textdomain' );
			$this->diet_trans_24 = __( 'Save Food Items for Today', 'wphealthtracker-textdomain' );
			$this->diet_trans_25 = __( 'Enter Food Items for', 'wphealthtracker-textdomain' );
			$this->diet_trans_26 = __( 'View & Edit Saved Food Items', 'wphealthtracker-textdomain' );
			$this->diet_trans_27 = __( 'Try saving some data in the "Enter Food Items for', 'wphealthtracker-textdomain' );
			$this->diet_trans_28 = __( 'Update Food Items for', 'wphealthtracker-textdomain' );
			$this->diet_trans_29 = __( 'Food Items for', 'wphealthtracker-textdomain' );
			$this->diet_trans_30 = __( 'Select a Category...', 'wphealthtracker-textdomain' );
			$this->diet_trans_31 = __( 'Add Food Item', 'wphealthtracker-textdomain' );
			$this->diet_trans_32 = __( 'Consumed', 'wphealthtracker-textdomain' );
			$this->diet_trans_33 = __( 'Kilocalories', 'wphealthtracker-textdomain' );
			$this->diet_trans_34 = __( 'Kilojoules', 'wphealthtracker-textdomain' );
			$this->diet_trans_35 = __( 'Carbohydrates', 'wphealthtracker-textdomain' );
			$this->diet_trans_36 = __( 'Fats', 'wphealthtracker-textdomain' );
			$this->diet_trans_37 = __( 'Monounsat. Fat', 'wphealthtracker-textdomain' );
			$this->diet_trans_38 = __( 'Polyunsat. Fat', 'wphealthtracker-textdomain' );
			$this->diet_trans_39 = __( 'Sugars', 'wphealthtracker-textdomain' );
			$this->diet_trans_40 = __( 'Fiber', 'wphealthtracker-textdomain' );
			$this->diet_trans_41 = __( 'Kcals', 'wphealthtracker-textdomain' );
			$this->diet_trans_42 = __( 'kJs', 'wphealthtracker-textdomain' );
			$this->diet_trans_43 = __( 'Highest Food', 'wphealthtracker-textdomain' );
			$this->diet_trans_44 = __( 'Most Consequtive Energy Decrease', 'wphealthtracker-textdomain' );
			$this->diet_trans_45 = __( 'Most Consequtive Energy Increase', 'wphealthtracker-textdomain' );

			return $translation_array3 = array(
				'diettrans1'  => $this->diet_trans_1,
				'diettrans2'  => $this->diet_trans_2,
				'diettrans3'  => $this->diet_trans_3,
				'diettrans4'  => $this->diet_trans_4,
				'diettrans5'  => $this->diet_trans_5,
				'diettrans6'  => $this->diet_trans_6,
				'diettrans7'  => $this->diet_trans_7,
				'diettrans8'  => $this->diet_trans_8,
				'diettrans9'  => $this->diet_trans_9,
				'diettrans10' => $this->diet_trans_10,
				'diettrans11' => $this->diet_trans_11,
				'diettrans12' => $this->diet_trans_12,
				'diettrans13' => $this->diet_trans_13,
				'diettrans14' => $this->diet_trans_14,
				'diettrans15' => $this->diet_trans_15,
				'diettrans16' => $this->diet_trans_16,
				'diettrans17' => $this->diet_trans_17,
				'diettrans18' => $this->diet_trans_18,
				'diettrans19' => $this->diet_trans_19,
				'diettrans20' => $this->diet_trans_20,
				'diettrans21' => $this->diet_trans_21,
				'diettrans22' => $this->diet_trans_22,
				'diettrans23' => $this->diet_trans_23,
				'diettrans24' => $this->diet_trans_24,
				'diettrans25' => $this->diet_trans_25,
				'diettrans26' => $this->diet_trans_26,
				'diettrans27' => $this->diet_trans_27,
				'diettrans28' => $this->diet_trans_28,
				'diettrans29' => $this->diet_trans_29,
				'diettrans30' => $this->diet_trans_30,
				'diettrans31' => $this->diet_trans_31,
				'diettrans32' => $this->diet_trans_32,
				'diettrans33' => $this->diet_trans_33,
				'diettrans34' => $this->diet_trans_34,
				'diettrans35' => $this->diet_trans_35,
				'diettrans36' => $this->diet_trans_36,
				'diettrans37' => $this->diet_trans_37,
				'diettrans38' => $this->diet_trans_38,
				'diettrans39' => $this->diet_trans_39,
				'diettrans40' => $this->diet_trans_40,
				'diettrans41' => $this->diet_trans_41,
				'diettrans42' => $this->diet_trans_42,
				'diettrans43' => $this->diet_trans_43,
				'diettrans44' => $this->diet_trans_44,
				'diettrans45' => $this->diet_trans_45,
			);
		}

		public function exercise_tab_trans_strings() {

			$this->exercise_trans_1  = __( 'Enter Exercises for', 'wphealthtracker-textdomain' );
			$this->exercise_trans_2  = __( 'View & Edit Saved Exercises', 'wphealthtracker-textdomain' );
			$this->exercise_trans_3  = __( 'Try saving some data in the "Enter Exercises for', 'wphealthtracker-textdomain' );
			$this->exercise_trans_4  = __( 'Add Exercise', 'wphealthtracker-textdomain' );
			$this->exercise_trans_5  = __( 'Update Exercises for', 'wphealthtracker-textdomain' );
			$this->exercise_trans_6  = __( 'Save Exercises for Today', 'wphealthtracker-textdomain' );
			$this->exercise_trans_7  = __( 'Exercise Name', 'wphealthtracker-textdomain' );
			$this->exercise_trans_8  = __( 'Exercise Type', 'wphealthtracker-textdomain' );
			$this->exercise_trans_9  = __( 'Endurance/Cardio', 'wphealthtracker-textdomain' );
			$this->exercise_trans_10 = __( 'Strength/Weightlifting', 'wphealthtracker-textdomain' );
			$this->exercise_trans_11 = __( 'Balance', 'wphealthtracker-textdomain' );
			$this->exercise_trans_12 = __( 'Flexibility', 'wphealthtracker-textdomain' );
			$this->exercise_trans_13 = __( 'Time of Exercise', 'wphealthtracker-textdomain' );
			$this->exercise_trans_14 = __( 'Duration of Exercise', 'wphealthtracker-textdomain' );
			$this->exercise_trans_15 = __( 'Distance Travelled', 'wphealthtracker-textdomain' );
			$this->exercise_trans_16 = __( 'Reps', 'wphealthtracker-textdomain' );
			$this->exercise_trans_17 = __( 'Set', 'wphealthtracker-textdomain' );
			$this->exercise_trans_18 = __( 'Add a Set', 'wphealthtracker-textdomain' );
			$this->exercise_trans_19 = __( 'Muscle Group(s) Trained', 'wphealthtracker-textdomain' );
			$this->exercise_trans_20 = __( 'Abs', 'wphealthtracker-textdomain' );
			$this->exercise_trans_21 = __( 'Biceps', 'wphealthtracker-textdomain' );
			$this->exercise_trans_22 = __( 'Calves', 'wphealthtracker-textdomain' );
			$this->exercise_trans_23 = __( 'Chest', 'wphealthtracker-textdomain' );
			$this->exercise_trans_24 = __( 'Forearm', 'wphealthtracker-textdomain' );
			$this->exercise_trans_25 = __( 'Glutes', 'wphealthtracker-textdomain' );
			$this->exercise_trans_26 = __( 'Hamstrings', 'wphealthtracker-textdomain' );
			$this->exercise_trans_27 = __( 'Lats', 'wphealthtracker-textdomain' );
			$this->exercise_trans_28 = __( 'Lower Back', 'wphealthtracker-textdomain' );
			$this->exercise_trans_29 = __( 'Middle Back', 'wphealthtracker-textdomain' );
			$this->exercise_trans_30 = __( 'Neck', 'wphealthtracker-textdomain' );
			$this->exercise_trans_31 = __( 'Quads', 'wphealthtracker-textdomain' );
			$this->exercise_trans_32 = __( 'Shoulders', 'wphealthtracker-textdomain' );
			$this->exercise_trans_33 = __( 'Traps', 'wphealthtracker-textdomain' );
			$this->exercise_trans_34 = __( 'Triceps', 'wphealthtracker-textdomain' );
			$this->exercise_trans_35 = __( 'Deltoids', 'wphealthtracker-textdomain' );
			$this->exercise_trans_36 = __( 'Obliques', 'wphealthtracker-textdomain' );
			$this->exercise_trans_37 = __( 'Adductors', 'wphealthtracker-textdomain' );
			$this->exercise_trans_38 = __( 'Bodyweight', 'wphealthtracker-textdomain' );
			$this->exercise_trans_39 = __( 'Exercises for', 'wphealthtracker-textdomain' );
			$this->exercise_trans_40 = __( 'Arms', 'wphealthtracker-textdomain' );
			$this->exercise_trans_41 = __( 'Biceps', 'wphealthtracker-textdomain' );
			$this->exercise_trans_43 = __( 'Forearms', 'wphealthtracker-textdomain' );
			$this->exercise_trans_44 = __( 'Back', 'wphealthtracker-textdomain' );
			$this->exercise_trans_45 = __( 'Trapezius', 'wphealthtracker-textdomain' );
			$this->exercise_trans_46 = __( 'Core', 'wphealthtracker-textdomain' );
			$this->exercise_trans_47 = __( 'Pectorals', 'wphealthtracker-textdomain' );

			

			return $translation_array2 = array(
				'exercisetrans1' => $this->exercise_trans_1,
				'exercisetrans2' => $this->exercise_trans_2,
				'exercisetrans3' => $this->exercise_trans_3,
				'exercisetrans4' => $this->exercise_trans_4,
				'exercisetrans5' => $this->exercise_trans_5,
				'exercisetrans6' => $this->exercise_trans_6,
				'exercisetrans7' => $this->exercise_trans_7,
				'exercisetrans8' => $this->exercise_trans_8,
				'exercisetrans9' => $this->exercise_trans_9,
				'exercisetrans10' => $this->exercise_trans_10,
				'exercisetrans11' => $this->exercise_trans_11,
				'exercisetrans12' => $this->exercise_trans_12,
				'exercisetrans13' => $this->exercise_trans_13,
				'exercisetrans14' => $this->exercise_trans_14,
				'exercisetrans15' => $this->exercise_trans_15,
				'exercisetrans16' => $this->exercise_trans_16,
				'exercisetrans17' => $this->exercise_trans_17,
				'exercisetrans18' => $this->exercise_trans_18,
				'exercisetrans19' => $this->exercise_trans_19,
				'exercisetrans20' => $this->exercise_trans_20,
				'exercisetrans21' => $this->exercise_trans_21,
				'exercisetrans22' => $this->exercise_trans_22,
				'exercisetrans23' => $this->exercise_trans_23,
				'exercisetrans24' => $this->exercise_trans_24,
				'exercisetrans25' => $this->exercise_trans_25,
				'exercisetrans26' => $this->exercise_trans_26,
				'exercisetrans27' => $this->exercise_trans_27,
				'exercisetrans28' => $this->exercise_trans_28,
				'exercisetrans29' => $this->exercise_trans_29,
				'exercisetrans30' => $this->exercise_trans_30,
				'exercisetrans31' => $this->exercise_trans_31,
				'exercisetrans32' => $this->exercise_trans_32,
				'exercisetrans33' => $this->exercise_trans_33,
				'exercisetrans34' => $this->exercise_trans_34,
				'exercisetrans35' => $this->exercise_trans_35,
				'exercisetrans36' => $this->exercise_trans_36,
				'exercisetrans37' => $this->exercise_trans_37,
				'exercisetrans38' => $this->exercise_trans_38,
				'exercisetrans39' => $this->exercise_trans_39,
				'exercisetrans40' => $this->exercise_trans_40,
				'exercisetrans41' => $this->exercise_trans_41,
				'exercisetrans42' => $this->exercise_trans_42,
				'exercisetrans43' => $this->exercise_trans_43,
				'exercisetrans44' => $this->exercise_trans_44,
				'exercisetrans45' => $this->exercise_trans_45,
				'exercisetrans46' => $this->exercise_trans_46,
				'exercisetrans47' => $this->exercise_trans_47,
			);
		}

		public function dashboard_trans_strings() {

			$this->dashboard_trans_1  = __( 'QuickStats', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_2  = __( 'Total Days Tracked', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_3  = __( 'Day(s)', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_4  = __( 'Most Consecutive Days Tracked', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_5  = __( 'First Date Tracked', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_6  = __( 'Last Date Tracked', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_7  = __( 'Largest Gap Between Tracked Days', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_8  = __( 'Starting Weight', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_9  = __( 'Most Recent Weight', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_10 = __( 'Starting Cholesterol', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_11 = __( 'Most Recent Cholesterol', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_12 = __( 'Starting Blood Pressure', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_13 = __( 'Most Recent Blood Pressure', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_14 = __( 'Number of Gaps', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_15 = __( 'LDL', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_16 = __( 'HDL', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_17 = __( 'Tri.', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_18 = __( 'Total', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_19 = __( 'Systolic', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_20 = __( 'Diastolic', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_21 = __( 'Uh-Oh!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_22 = __( "Looks like there's no saved data for", 'wphealthtracker-textdomain' );
			$this->dashboard_trans_23 = __( 'Click here to enter some data!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_24 = __( 'Zero Gaps!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_25 = __( 'No Starting Weight!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_26 = __( 'No Recent Weight!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_27 = __( 'No Starting Cholesterol!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_28 = __( 'No Recent Cholesterol!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_29 = __( 'No Starting Blood Pressue!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_30 = __( 'No Recent Blood Pressure!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_31 = __( 'No Consecutive Days Tracked!', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_32 = __( 'Gap(s)', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_33 = __( 'Total Unique Food Items', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_34 = __( 'Top 3 Consumed Food Items', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_35 = __( 'Avg. Daily Protein', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_36 = __( 'Avg. Daily Total Carbohydrates', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_37 = __( 'Avg. Daily Sugars', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_38 = __( 'Avg. Daily Total Fats', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_39 = __( 'Avg. Daily Fiber', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_40 = __( 'Grams', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_41 = __( 'Food Item(s)', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_42 = __( 'Avg. Daily Calories/Kcals', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_43 = __( 'Avg. Daily Kilojoules', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_44 = __( 'Avg. Daily Sat. Fats', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_45 = __( 'Avg. Daily Monounsat. Fats', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_46 = __( 'Avg. Daily Polyunsat. Fats', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_47 = __( 'Total Carbohydrates Consumed', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_48 = __( 'Total Protein Consumed', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_49 = __( 'Total Fats Consumed', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_50 = __( 'Total Unique Exercises', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_51 = __( 'Exercises', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_52 = __( 'Top 3 Exercises', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_53 = __( 'Total Seconds Exercised', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_54 = __( 'Total Minutes Exercised', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_55 = __( 'Total Hours Exercised', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_56 = __( 'Top 3 Exercise Categories', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_57 = __( 'Total Exercise Categories', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_58 = __( 'Total Muscle Groups Exercised', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_59 = __( 'Top 3 Muscle Groups', 'wphealthtracker-textdomain' );
			$this->dashboard_trans_60 = __( 'Muscle Group(s)', 'wphealthtracker-textdomain' );

			return $dashboard_array1 = array(
				'dashboardtrans1'  => $this->dashboard_trans_1,
				'dashboardtrans2'  => $this->dashboard_trans_2,
				'dashboardtrans3'  => $this->dashboard_trans_3,
				'dashboardtrans4'  => $this->dashboard_trans_4,
				'dashboardtrans5'  => $this->dashboard_trans_5,
				'dashboardtrans6'  => $this->dashboard_trans_6,
				'dashboardtrans7'  => $this->dashboard_trans_7,
				'dashboardtrans8'  => $this->dashboard_trans_8,
				'dashboardtrans9'  => $this->dashboard_trans_9,
				'dashboardtrans10' => $this->dashboard_trans_10,
				'dashboardtrans11' => $this->dashboard_trans_11,
				'dashboardtrans12' => $this->dashboard_trans_12,
				'dashboardtrans13' => $this->dashboard_trans_13,
				'dashboardtrans14' => $this->dashboard_trans_14,
				'dashboardtrans15' => $this->dashboard_trans_15,
				'dashboardtrans16' => $this->dashboard_trans_16,
				'dashboardtrans17' => $this->dashboard_trans_17,
				'dashboardtrans18' => $this->dashboard_trans_18,
				'dashboardtrans19' => $this->dashboard_trans_19,
				'dashboardtrans20' => $this->dashboard_trans_20,
				'dashboardtrans21' => $this->dashboard_trans_21,
				'dashboardtrans22' => $this->dashboard_trans_22,
				'dashboardtrans23' => $this->dashboard_trans_23,
				'dashboardtrans24' => $this->dashboard_trans_24,
				'dashboardtrans25' => $this->dashboard_trans_25,
				'dashboardtrans26' => $this->dashboard_trans_26,
				'dashboardtrans27' => $this->dashboard_trans_27,
				'dashboardtrans28' => $this->dashboard_trans_28,
				'dashboardtrans29' => $this->dashboard_trans_29,
				'dashboardtrans30' => $this->dashboard_trans_30,
				'dashboardtrans31' => $this->dashboard_trans_31,
				'dashboardtrans32' => $this->dashboard_trans_32,
				'dashboardtrans33' => $this->dashboard_trans_33,
				'dashboardtrans34' => $this->dashboard_trans_34,
				'dashboardtrans35' => $this->dashboard_trans_35,
				'dashboardtrans36' => $this->dashboard_trans_36,
				'dashboardtrans37' => $this->dashboard_trans_37,
				'dashboardtrans38' => $this->dashboard_trans_38,
				'dashboardtrans39' => $this->dashboard_trans_39,
				'dashboardtrans40' => $this->dashboard_trans_40,
				'dashboardtrans41' => $this->dashboard_trans_41,
				'dashboardtrans42' => $this->dashboard_trans_42,
				'dashboardtrans43' => $this->dashboard_trans_43,
				'dashboardtrans44' => $this->dashboard_trans_44,
				'dashboardtrans45' => $this->dashboard_trans_45,
				'dashboardtrans46' => $this->dashboard_trans_46,
				'dashboardtrans47' => $this->dashboard_trans_47,
				'dashboardtrans48' => $this->dashboard_trans_48,
				'dashboardtrans49' => $this->dashboard_trans_49,
				'dashboardtrans50' => $this->dashboard_trans_50,
				'dashboardtrans51' => $this->dashboard_trans_51,
				'dashboardtrans52' => $this->dashboard_trans_52,
			);

		}

		public function d3_chart_trans_strings() {

			$this->d3_trans_1  = __( 'Weight Chart & Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_2  = __( 'Weight Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_3  = __( 'Began Tracking On', 'wphealthtracker-textdomain' );
			$this->d3_trans_4  = __( 'Lbs', 'wphealthtracker-textdomain' );
			$this->d3_trans_5  = __( 'Kg', 'wphealthtracker-textdomain' );
			$this->d3_trans_6  = __( 'Highest Weight:', 'wphealthtracker-textdomain' );
			$this->d3_trans_7  = __( 'Lowest Weight:', 'wphealthtracker-textdomain' );
			$this->d3_trans_8  = __( 'Average Weight:', 'wphealthtracker-textdomain' );
			$this->d3_trans_9  = __( 'Total Weight Lost:', 'wphealthtracker-textdomain' );
			$this->d3_trans_10 = __( 'Largest Single Loss:', 'wphealthtracker-textdomain' );
			$this->d3_trans_11 = __( 'Largest Single Gain:', 'wphealthtracker-textdomain' );
			$this->d3_trans_12 = __( "Looks like there's no saved Weight Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_13 = __( 'Once there is, this area will display a chart showing Weight change over time.', 'wphealthtracker-textdomain' );
			$this->d3_trans_14 = __( 'Once there is, this area will display some Weight Data Statistics.', 'wphealthtracker-textdomain' );
			$this->d3_trans_15 = __( 'Uh-Oh!', 'wphealthtracker-textdomain' );
			$this->d3_trans_16 = __( "Looks like there's not at least 2 days of saved Weight Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_17 = __( 'Total Weight Gained:', 'wphealthtracker-textdomain' );
			$this->d3_trans_18 = __( 'Kilograms', 'wphealthtracker-textdomain' );
			$this->d3_trans_19 = __( 'Pounds', 'wphealthtracker-textdomain' );
			$this->d3_trans_20 = __( 'Hover Here...', 'wphealthtracker-textdomain' );
			$this->d3_trans_21 = __( 'Blood Pressure Chart & Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_22 = __( "Looks like there's no saved Blood Pressure Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_23 = __( 'Once there is, this area will display a chart showing Blood Pressure readings over time.', 'wphealthtracker-textdomain' );
			$this->d3_trans_24 = __( "Looks like there's not enough Blood Pressure Data yet!", 'wphealthtracker-textdomain' );
			$this->d3_trans_25 = __( 'Blood Pressure Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_26 = __( 'Highest Systolic:', 'wphealthtracker-textdomain' );
			$this->d3_trans_27 = __( 'Lowest Systolic:', 'wphealthtracker-textdomain' );
			$this->d3_trans_28 = __( 'Highest Diastolic:', 'wphealthtracker-textdomain' );
			$this->d3_trans_29 = __( 'Lowest Diastolic:', 'wphealthtracker-textdomain' );
			$this->d3_trans_30 = __( 'Average Single Reading:', 'wphealthtracker-textdomain' );
			$this->d3_trans_31 = __( 'Highest Single Reading:', 'wphealthtracker-textdomain' );
			$this->d3_trans_32 = __( 'Lowest Single Reading:', 'wphealthtracker-textdomain' );
			$this->d3_trans_33 = __( 'Once there is, this area will display some Blood Pressure Data Statistics.', 'wphealthtracker-textdomain' );
			$this->d3_trans_34 = __( 'LDL', 'wphealthtracker-textdomain' );
			$this->d3_trans_35 = __( 'HDL', 'wphealthtracker-textdomain' );
			$this->d3_trans_36 = __( 'Triglycerides', 'wphealthtracker-textdomain' );
			$this->d3_trans_37 = __( 'Total', 'wphealthtracker-textdomain' );
			$this->d3_trans_38 = __( 'Cholesterol Chart & Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_39 = __( 'Cholesterol', 'wphealthtracker-textdomain' );
			$this->d3_trans_40 = __( 'Weight', 'wphealthtracker-textdomain' );
			$this->d3_trans_41 = __( 'Cholesterol Stats', 'wphealthtracker-textdomain' );
			$this->d3_trans_42 = __( 'Average LDL', 'wphealthtracker-textdomain' );
			$this->d3_trans_43 = __( 'Average HDL', 'wphealthtracker-textdomain' );
			$this->d3_trans_44 = __( 'Average Triglycerides', 'wphealthtracker-textdomain' );
			$this->d3_trans_45 = __( 'Average Total Cholesterol', 'wphealthtracker-textdomain' );
			$this->d3_trans_46 = __( 'Highest Total Cholesterol', 'wphealthtracker-textdomain' );
			$this->d3_trans_47 = __( 'Lowest Total Cholesterol', 'wphealthtracker-textdomain' );
			$this->d3_trans_48 = __( 'Building Awesome Chart...', 'wphealthtracker-textdomain' );
			$this->d3_trans_49 = __( "Looks like there's not at least 2 days of saved Cholesterol Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_50 = __( 'Once there is, this area will display a chart showing Cholesterol readings over time.', 'wphealthtracker-textdomain' );
			$this->d3_trans_51 = __( "Looks like there's no saved Cholesterol Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_52 = __( 'Once there is, this area will display some Cholesterol Data Statistics.', 'wphealthtracker-textdomain' );
			$this->d3_trans_53 = __( 'Food Chart & Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_54 = __( 'Hover On Bars Above...', 'wphealthtracker-textdomain' );
			$this->d3_trans_55 = __( 'Total Unique Food Items', 'wphealthtracker-textdomain' );
			$this->d3_trans_56 = __( 'Most Consumed Food', 'wphealthtracker-textdomain' );
			$this->d3_trans_57 = __( 'Total Kilocalories/Cal. Consumed', 'wphealthtracker-textdomain' );

			$this->d3_trans_58 = __( "Looks like there's no saved Food Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_59 = __( 'Once there is, this area will display some Food Data Statistics.', 'wphealthtracker-textdomain' );
			$this->d3_trans_60 = __( 'Once there is, this area will display a chart showing various data about your saved food items.', 'wphealthtracker-textdomain' );
			$this->d3_trans_61 = __( 'Total Kilojoules Consumed', 'wphealthtracker-textdomain' );
			$this->d3_trans_62 = __( 'Energy Chart & Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_63 = __( 'Macronutrients Chart & Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_64 = __( "Looks like there's no saved Energy (Calorie/Kilocalorie) Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_65 = __( 'Once there is, this area will display some Energy Data Statistics.', 'wphealthtracker-textdomain' );
			$this->d3_trans_66  = __( 'Energy (Calorie/Kilocalorie) Stats:', 'wphealthtracker-textdomain' );
			$this->d3_trans_67 = __( 'Once there is, this area will display a chart showing Energy readings over time.', 'wphealthtracker-textdomain' );
			$this->d3_trans_68 = __( "Looks like there's not at least 2 days of saved Energy Data!", 'wphealthtracker-textdomain' );
			$this->d3_trans_69 = __( "Energy", 'wphealthtracker-textdomain' );
			$this->d3_trans_70 = __( "Macronutrients (All-Time Totals)", 'wphealthtracker-textdomain' );
			$this->d3_trans_71 = __( "Macronutrients (Avg. Daily Values)", 'wphealthtracker-textdomain' );
			$this->d3_trans_72 = __( 'Hover Over Colors...', 'wphealthtracker-textdomain' );
			$this->d3_trans_73 = __( 'Macronutrient Stats', 'wphealthtracker-textdomain' );
			$this->d3_trans_74 = __( 'Distance Chart & Stats', 'wphealthtracker-textdomain' );
			$this->d3_trans_75 = __( 'Complete', 'wphealthtracker-textdomain' );
			$this->d3_trans_76 = __( 'Hover Over Dots', 'wphealthtracker-textdomain' );
			$this->d3_trans_77 = __( 'to', 'wphealthtracker-textdomain' );
			$this->d3_trans_78 = __( 'Play Demo...', 'wphealthtracker-textdomain' );
			$this->d3_trans_79 = __( 'Total Miles Travelled', 'wphealthtracker-textdomain' );
			$this->d3_trans_80 = __( 'Total Kilometers Travelled', 'wphealthtracker-textdomain' );
			$this->d3_trans_81 = __( 'Total Meters Travelled', 'wphealthtracker-textdomain' );
			$this->d3_trans_82 = __( 'Total Yards Travelled', 'wphealthtracker-textdomain' );
			$this->d3_trans_83 = __( 'Total Feet Travelled', 'wphealthtracker-textdomain' );
			$this->d3_trans_84 = __( 'Distance Stats', 'wphealthtracker-textdomain' );
			$this->d3_trans_85 = __( "Looks like you haven't travelled any distance at all!", 'wphealthtracker-textdomain' );
			$this->d3_trans_86 = __( 'Once you have, this area will display a map showing how far you\'ve travelled to various locations.', 'wphealthtracker-textdomain' );
			$this->d3_trans_87 = __( 'Once you have, this area will display some statistics about your distance travelled.', 'wphealthtracker-textdomain' );
			$this->d3_trans_88 = __( 'Around The World' );
			$this->d3_trans_89 = __( 'From Earth To The Moon' );
			$this->d3_trans_90 = __( 'Muscle Groups Chart & Stats:' );
			$this->d3_trans_91 = __( 'Muscle Group Stats' );

			return $d3_array1 = array(
				'd3trans1'  => $this->d3_trans_1,
				'd3trans2'  => $this->d3_trans_2,
				'd3trans3'  => $this->d3_trans_3,
				'd3trans4'  => $this->d3_trans_4,
				'd3trans5'  => $this->d3_trans_5,
				'd3trans6'  => $this->d3_trans_6,
				'd3trans7'  => $this->d3_trans_7,
				'd3trans8'  => $this->d3_trans_8,
				'd3trans9'  => $this->d3_trans_9,
				'd3trans10' => $this->d3_trans_10,
				'd3trans11' => $this->d3_trans_11,
				'd3trans12' => $this->d3_trans_12,
				'd3trans13' => $this->d3_trans_13,
				'd3trans14' => $this->d3_trans_14,
				'd3trans15' => $this->d3_trans_15,
				'd3trans16' => $this->d3_trans_16,
				'd3trans17' => $this->d3_trans_17,
				'd3trans18' => $this->d3_trans_18,
				'd3trans19' => $this->d3_trans_19,
				'd3trans20' => $this->d3_trans_20,
				'd3trans21' => $this->d3_trans_21,
				'd3trans22' => $this->d3_trans_22,
				'd3trans23' => $this->d3_trans_23,
				'd3trans24' => $this->d3_trans_24,
				'd3trans25' => $this->d3_trans_25,
				'd3trans26' => $this->d3_trans_26,
				'd3trans27' => $this->d3_trans_27,
				'd3trans28' => $this->d3_trans_28,
				'd3trans29' => $this->d3_trans_29,
				'd3trans30' => $this->d3_trans_30,
				'd3trans31' => $this->d3_trans_31,
				'd3trans32' => $this->d3_trans_32,
				'd3trans33' => $this->d3_trans_33,
				'd3trans34' => $this->d3_trans_34,
				'd3trans35' => $this->d3_trans_35,
				'd3trans36' => $this->d3_trans_36,
				'd3trans37' => $this->d3_trans_37,
				'd3trans38' => $this->d3_trans_38,
				'd3trans39' => $this->d3_trans_39,
				'd3trans40' => $this->d3_trans_40,
				'd3trans41' => $this->d3_trans_41,
				'd3trans42' => $this->d3_trans_42,
				'd3trans43' => $this->d3_trans_43,
				'd3trans44' => $this->d3_trans_44,
				'd3trans45' => $this->d3_trans_45,
				'd3trans46' => $this->d3_trans_46,
				'd3trans47' => $this->d3_trans_47,
				'd3trans48' => $this->d3_trans_48,
				'd3trans49' => $this->d3_trans_49,
				'd3trans50' => $this->d3_trans_50,
				'd3trans51' => $this->d3_trans_51,
				'd3trans52' => $this->d3_trans_52,
				'd3trans53' => $this->d3_trans_53,
				'd3trans54' => $this->d3_trans_54,
				'd3trans55' => $this->d3_trans_55,
				'd3trans56' => $this->d3_trans_56,
				'd3trans57' => $this->d3_trans_57,
				'd3trans58' => $this->d3_trans_58,
				'd3trans59' => $this->d3_trans_59,
				'd3trans60' => $this->d3_trans_60,
				'd3trans61' => $this->d3_trans_61,
				'd3trans62' => $this->d3_trans_62,
				'd3trans63' => $this->d3_trans_63,
				'd3trans64' => $this->d3_trans_64,
				'd3trans65' => $this->d3_trans_65,
				'd3trans66' => $this->d3_trans_66,
				'd3trans67' => $this->d3_trans_67,
				'd3trans68' => $this->d3_trans_68,
				'd3trans69' => $this->d3_trans_69,
				'd3trans70' => $this->d3_trans_70,
				'd3trans71' => $this->d3_trans_71,
				'd3trans72' => $this->d3_trans_72,
				'd3trans73' => $this->d3_trans_73,
				'd3trans74' => $this->d3_trans_74,
				'd3trans75' => $this->d3_trans_75,
				'd3trans76' => $this->d3_trans_76,
				'd3trans77' => $this->d3_trans_77,
				'd3trans78' => $this->d3_trans_78,
			);

		}

		public function ajax_return_strings() {

			$this->ajax_return_1  = __( 'Success!', 'wphealthtracker-textdomain' );
			$this->ajax_return_2  = __( "You've just updated your data for", 'wphealthtracker-textdomain' );
			$this->ajax_return_3  = __( "You've just saved your data for", 'wphealthtracker-textdomain' );
			$this->ajax_return_4  = __( 'Be sure to visit', 'wphealthtracker-textdomain' );
			$this->ajax_return_5  = __( 'The WPHealthTracker Website', 'wphealthtracker-textdomain' );
			$this->ajax_return_6  = __( 'for Extensions, StylePaks, and more!', 'wphealthtracker-textdomain' );
			$this->ajax_return_7  = __( "And don't forget to", 'wphealthtracker-textdomain' );
			$this->ajax_return_8  = __( 'leave a 5-star review', 'wphealthtracker-textdomain' );
			$this->ajax_return_9  = __( 'over at the', 'wphealthtracker-textdomain' );
			$this->ajax_return_10 = __( 'WordPress Plugin Repository', 'wphealthtracker-textdomain' );
			$this->ajax_return_11 = __( 'Uh-Oh!', 'wphealthtracker-textdomain' );
			$this->ajax_return_12 = __( 'Looks like there was an issue saving or updating your data', 'wphealthtracker-textdomain' );
			$this->ajax_return_13 = __( 'Try sending this error message to', 'wphealthtracker-textdomain' );
			$this->ajax_return_14 = __( "Sorry about the trouble - WPHealthTracker Tech Support will do it's best to fix your issue", 'wphealthtracker-textdomain' );

			return $translation_array2 = array(
				'ajaxreturn1'  => $this->ajax_return_1,
				'ajaxreturn2'  => $this->ajax_return_2,
				'ajaxreturn3'  => $this->ajax_return_3,
				'ajaxreturn4'  => $this->ajax_return_4,
				'ajaxreturn5'  => $this->ajax_return_5,
				'ajaxreturn6'  => $this->ajax_return_6,
				'ajaxreturn7'  => $this->ajax_return_7,
				'ajaxreturn8'  => $this->ajax_return_8,
				'ajaxreturn9'  => $this->ajax_return_9,
				'ajaxreturn10' => $this->ajax_return_10,
				'ajaxreturn11' => $this->ajax_return_11,
				'ajaxreturn12' => $this->ajax_return_12,
				'ajaxreturn13' => $this->ajax_return_13,
				'ajaxreturn14' => $this->ajax_return_14,
			);

		}


	}
endif;
