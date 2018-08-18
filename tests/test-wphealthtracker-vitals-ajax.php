
<?php 
/**
 * class WP_Meta_VerifyTest - test-wphealthtracker-vitals-ajax.php
 *
 * @author   Jake Evans
 * @category Unit Testing
 * @package  Tests
 * @version  0.0.1
 */

/**
*   1. Double underscores in functions names indicates the beginning of the portion of the function name that is specific to this testing file and that does not appear in the corresponding function name in the source file/class.
*
*/

class WP_Meta_VerifyTest_Ajax_Vitals_Ajax extends WP_Ajax_UnitTestCase
{

    public function setUp()
    {
        \WP_Mock::setUp();
        parent::setUp();

        // To suppress echos and other such output that doesn't effect this unit testing
        $this->setOutputCallback(function() {});

    }

    public function tearDown() 
    {
     
    }

    // Simply for registering table names so the callback functions will have a table to talk to if needed - not really testing the actual 'wphealthtracker_jre_register_table_names()' function in wphealthtracker-functions.php - more like integration testing here.
    public function test_wphealthtracker_jre_register_table_names()
    {
        global $wpdb;
	    $table1 = $wpdb->wphealthtracker_users = "{$wpdb->prefix}wphealthtracker_users";
	    $table2 = $wpdb->wphealthtracker_user_daily_data_vitals = "{$wpdb->prefix}wphealthtracker_user_daily_data_vitals";

	    $this->assertSame($table1, 'wptests_wphealthtracker_users');
	    $this->assertSame($table2, 'wptests_wphealthtracker_user_daily_data_vitals');
    }

    // Simply for creating the 'wphealthtracker_users' table so the callback functions will have a table to talk to if needed - not really testing the actual 'wphealthtracker_jre_create_user_table()' function in wphealthtracker-functions.php - more like integration testing here.
  	public function test_wphealthtracker_jre_create_user_table() {
	    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	    global $wpdb;
	    global $charset_collate; 

	    // If table doesn't exist, create table
	    $test_name = $wpdb->prefix.'wphealthtracker_users';
	    if($wpdb->get_var("SHOW TABLES LIKE '$test_name'") != $test_name) {
	    
	      // This is the table that holds static data about users - things like username, password, height, gender...
	      $sql_create_table = "CREATE TABLE {$wpdb->wphealthtracker_users} 
	      (
	            ID smallint(190) auto_increment,
	            firstname varchar(190),
	            lastname varchar(255),
	            wpuserid smallint(6),
	            PRIMARY KEY  (ID),
	              KEY firstname (firstname)
	      ) $charset_collate; ";
	      $dbDeltaResult = dbDelta( $sql_create_table );

	      $key = $wpdb->prefix.'wphealthtracker_users';

	      $this->assertSame($dbDeltaResult[$key], 'Created table wptests_wphealthtracker_users');
	      return $dbDeltaResult[$key];
	    } else {
	   	  $this->assertTrue(true);
	      return 'Table already exists';
	    }

	}

	// Simply for creating the 'wphealthtracker_user_daily_data_vitals' table so the callback functions will have a table to talk to if needed - not really testing the actual 'wphealthtracker_jre_create_daily_data_vitals_table()' function in wphealthtracker-functions.php - more like integration testing here.
	public function test_wphealthtracker_jre_create_daily_data_vitals_table() {
	    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	    global $wpdb;
	    global $charset_collate; 

	    // Call this manually as we may have missed the init hook
	    //$this->wphealthtracker_jre_register_table_names();


	    // If table doesn't exist, create table
	    $test_name = $wpdb->prefix.'wphealthtracker_user_daily_data_vitals';
	    if($wpdb->get_var("SHOW TABLES LIKE '$test_name'") != $test_name) {
	    
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
	      $dbDeltaResult = dbDelta( $sql_create_table );

	      $key = $wpdb->prefix.'wphealthtracker_user_daily_data_vitals';

	      $this->assertSame($dbDeltaResult[$key], 'Created table wptests_wphealthtracker_user_daily_data_vitals');
	      return $dbDeltaResult[$key];
	    } else {
	      $this->assertTrue(true);
	      return 'Table already exists';
	    }

	}

	// This function will test the output of the 'Enter' container on the Vitals tab when the user has no saved info at all - so a blank form.
    public function test_wphealthtracker_jre_selecteduser_vitals_enter_action_callback__no_data(){

    	global $wpdb;

    	// Set up POST values for actual function execution
    	$offsetServerInSeconds = date_offset_get(new DateTime)*60*60; // in seconds
    	$offsetServerInMinutes = date_offset_get(new DateTime)*60; //in minutes
    	$_POST['offset'] = $offsetServerInMinutes;
    	$_POST['wpuserid'] = '1';
    	$_POST['tab'] = 'vitals';

    	// Building today's date
		date_default_timezone_set(date_default_timezone_get());
		$date = new DateTime('now');
		$date->setTimezone(new DateTimeZone(CONST_SERVER_TIMEZONE));
		$date = $date->format(CONST_SERVER_DATEFORMAT);
		$date = str_replace('/', '-', $date);
		date_default_timezone_set(date_default_timezone_get());

    	// Create dummy data in the wptests db
    	$users_table_name = $wpdb->prefix . 'wphealthtracker_users';

    	// First delete any and all Transients that may be interferring with getting accurate data
    	$sql = 'DELETE FROM ' . $wpdb->options . ' WHERE option_name LIKE "_transient_%"';
    	$wpdb->query($sql);

        // Delete data from db just in case it already exists, so we can get an accurate test, with the accurate version fo the form being returned.
        $wpdb->delete($users_table_name, array(
        		'ID' => '1',
	            'firstname' => 'Jake',
	            'lastname' => 'Evans',
	            'wpuserid' => '1',
        	)
        );

        // Insert dummy data
        $insert_data = array(
            'ID' => '1',
            'firstname' => 'Jake',
            'lastname' => 'Evans',
            'wpuserid' => '1',
        );
        $mask_array = array('%s','%s','%s','%s');
        $result = $wpdb->insert( $users_table_name, $insert_data, $mask_array);

    	// Spoof the nonce in the POST superglobal
    	$_POST['_wpnonce'] = wp_create_nonce( 'wphealthtracker_jre_selecteduser_vitals_enter_action_callback' );

    	try {
	        $this->_handleAjax( 'wphealthtracker_jre_selecteduser_vitals_enter_action' );
	    } catch ( WPAjaxDieStopException $e ) {


	    }

	    // Check that the exception was thrown.
        $this->assertTrue( isset( $e ) );

	    // Get the actual output
	    $returned_array = $e->getMessage(); 
		$returned_array = json_decode($returned_array);
		$returned_array[1] = json_decode($returned_array[1]);

	    // Replace all 'http://localhost:8888/local/' with 'http://example.org/', and place $date in the 'data-human-date' attribute
	    // Building all our expected values
        $expected_one = '<divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-2"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Weight<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/scale.svg"/></h2><divclass="wphealthtracker-response-form-data-row-weight"id="wphealthtracker-response-form-weight-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Weight</p><inputclass="wphealthtracker-response-form-input"id="wphealthtracker-response-form-input-number-weight"type="number"value=""></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-weight"><option>Pounds</option><option>Kilograms</option></select></div></div></div><divclass="wphealthtracker-response-form-entry-row"><divclass="wphealthtracker-response-form-ch-div"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-cholesterol"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Cholesterol<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/heartbeat.svg"/></h2><divclass="wphealthtracker-response-form-data-row-cholesterol"id="wphealthtracker-response-form-cholesterol-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>LDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-ldl-0"value=""></input></div><divclass="wphealthtracker-response-form-div-row"><p>HDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hdl-0"value=""></input></div><divclass="wphealthtracker-response-form-div-row"><p>Triglycerides</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tri-0"value=""></input></div><divclass="wphealthtracker-response-form-div-row"><p>Total</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tot-0"value=""></input></div></div></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodPressure<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/pressure.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bp"id="wphealthtracker-response-form-bp-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Systolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-sys-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Diastolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-dis-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-bp"id="wphealthtracker-response-form-input-time-bp-0-0"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bp-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodSugar<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/injury.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bs"id="wphealthtracker-response-form-bs-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Level</p><inputtype="number"step="0.1"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bs-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-bs-0-0">"><option>mg/dL</option><option>mmol/L</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bs-0-0"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bs-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodOxygenLevel<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/oxygen.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bo"id="wphealthtracker-response-form-bo-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>OxygenLevel</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bo-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bo-0-0"><option>Percent</option><option>mmHG</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bo-0-0"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bo-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BodyTemperature<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/thermometer.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bt"id="wphealthtracker-response-form-bt-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Temperature</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bt-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bt-0-0"><option>Fahrenheit</option><option>Celcius</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bt-0-0"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bt-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>HeartRate<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/monitor.svg"/></h2><divclass="wphealthtracker-response-form-data-row-hr"id="wphealthtracker-response-form-hr-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>BeatsPerMinute</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hr-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-hr"id="wphealthtracker-response-form-input-time-hr-0-0"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-hr-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Images<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/image.svg"/></h2><divclass="wphealthtracker-response-form-data-row-img"id="wphealthtracker-response-form-img-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>ImageURL</p><inputtype="text"placeholder="ImageURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-image-upload"id="wphealthtracker-response-form-input-text-image-upload-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadImage</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-image-upload"id="wphealthtracker-response-form-input-button-image-upload-0-0">Choose/UploadImage</button></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-img-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Files<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/upload-file.svg"/></h2><divclass="wphealthtracker-response-form-data-row-file"id="wphealthtracker-response-form-file-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>FileURL</p><inputtype="text"placeholder="FileURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-file-upload"id="wphealthtracker-response-form-input-text-file-upload-0-0"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadFile</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-file-upload"id="wphealthtracker-response-form-input-button-file-upload-0-0">Choose/UploadFile</button></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-file-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-save-spinner-response-div"><divclass="wphealthtracker-spinner-primary"id="wphealthtracker-spinner-save-vitals"></div><divclass="wphealthtracker-response-message-div"id="wphealthtracker-response-message-vitals-div"></div><buttonclass="wphealthtracker-save-stuff-button"id="wphealthtracker-save-daily-vitals-enter-0"data-firstname="Jake"data-lastname="Evans"data-human-date="'.$date.'"data-parent-id-num="0">SaveVitals</button></div>';

        // Still building all our expected values
        $expected_two = $date;
        $expected_three = $insert_data['firstname'];
        $expected_four = $insert_data['lastname'];
        $expected_five = $insert_data['wpuserid'];
        $expected_six = '';
        $expected_seven = '';
        $expected_eight = '';
        $expected_nine = '';
        $expected_ten = '';
        $expected_eleven = '';
        $expected_twelve = '';
        $expected_thirteen = '';
        $expected_fourteen = 'Jake';
        $expected_fifteen = 'Evans';
        $expected_sixteen = $date;
        $expected_seventeen = $insert_data['wpuserid'];

        // Stripping all whitespace
        $returned_array[0] = trim(preg_replace('/\s+/', '', $returned_array[0]));
        $returned_array[4] = trim(preg_replace('/\s+/', '', $returned_array[4]));

        // Making our assertions
        $this->assertEquals(6, sizeof($returned_array));
        $this->assertSame($expected_one, $returned_array[0]);
        $this->assertSame($expected_two, $returned_array[1]->humandate);
        $this->assertSame($expected_three, $returned_array[1]->firstname);
        $this->assertSame($expected_four, $returned_array[1]->lastname);
        $this->assertSame($expected_five, $returned_array[1]->wpuserid);
        $this->assertSame($expected_six, $returned_array[1]->bloodpressure);
        $this->assertSame($expected_seven, $returned_array[1]->bloodoxygen);
        $this->assertSame($expected_eight, $returned_array[1]->bodytemp);
        $this->assertSame($expected_nine, $returned_array[1]->cholesterol);
        $this->assertSame($expected_ten, $returned_array[1]->heartrate);
        $this->assertSame($expected_eleven, $returned_array[1]->bloodsugar);
        $this->assertSame($expected_twelve, $returned_array[1]->vitalsimg);
        $this->assertSame($expected_thirteen, $returned_array[1]->vitalsfiles);
        $this->assertSame($expected_fourteen, $returned_array[2]);
        $this->assertSame($expected_fifteen, $returned_array[3]);
        $this->assertSame($expected_sixteen, $returned_array[4]);
        $this->assertSame($expected_seventeen, $returned_array[5]);


    }

    // This function will test the output of the 'Enter' container on the Vitals tab when the user has saved data for this date already, but just one row of data per entry - so user entered data for today without clicking on any of the "wphealthtracker-response-form-row-add-img" images to insert another row.
    public function test_wphealthtracker_jre_selecteduser_vitals_enter_action_callback__dummy_data_no_insertions(){

    	global $wpdb;

    	// Set up POST values for actual function execution
    	$offsetServerInSeconds = date_offset_get(new DateTime)*60*60; // in seconds
    	$offsetServerInMinutes = date_offset_get(new DateTime)*60; //in minutes
    	$_POST['offset'] = $offsetServerInMinutes;
    	$_POST['wpuserid'] = '1';
    	$_POST['tab'] = 'vitals';

    	// Building today's date
		date_default_timezone_set(date_default_timezone_get());
		$date = new DateTime('now');
		$date->setTimezone(new DateTimeZone(CONST_SERVER_TIMEZONE));
		$date = $date->format(CONST_SERVER_DATEFORMAT);
		$date = str_replace('/', '-', $date);
		date_default_timezone_set(date_default_timezone_get());

        // Insert dummy data in the 'wphealthtracker_user_daily_data_vitals' table
        $users_daily_table_name = $wpdb->prefix . 'wphealthtracker_user_daily_data_vitals';

        // First delete any and all Transients that may be interferring with getting accurate data
    	$sql = 'DELETE FROM ' . $wpdb->options . ' WHERE option_name LIKE "_transient_%"';
    	$wpdb->query($sql);

        // Delete data from db just in case it already exists, so we can get an accurate test, with the accurate version fo the form being returned.
        $wpdb->delete($users_daily_table_name, array(
        		'firstname'=>'Jake', 
        		'lastname'=>'Evans',
        		'wpuserid'=>'1',
        		'humandate'=>$date  
        	)
        );


		// Insert dummy data
        $insert_data = array(
			'bloodoxygen' => "20/Percent/10:00",
			'bloodpressure' => "140/85/01:00",
			'bloodsugar' => "100-mmol/L-03:02",
			'bodytemp' => "98/Fahrenheit/06:18",
			'cholesterol' => "123,100,40,263",
			'firstname' => "Jake",
			'heartrate' => "120/13:00",
			'humandate' => $date,
			'lastname' => "Evans",
			'vitalsfiles' => "https://www.google.com",
			'vitalsimg' => "https://www.ign.com",
			'weight' => "185;Pounds",
			'wpuserid' => "1",
        );
        $mask_array = array('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%d');
        $result = $wpdb->insert( $users_daily_table_name, $insert_data, $mask_array);

    	// Spoof the nonce in the POST superglobal
    	$_POST['_wpnonce'] = wp_create_nonce( 'wphealthtracker_jre_selecteduser_vitals_enter_action_callback' );

    	try {
	        $this->_handleAjax( 'wphealthtracker_jre_selecteduser_vitals_enter_action' );
	    } catch ( WPAjaxDieStopException $e ) {


	    }

	    // Check that the exception was thrown.
        $this->assertTrue( isset( $e ) );

	    // Get the actual output
	    $returned_array = $e->getMessage(); 
		$returned_array = json_decode($returned_array);
		$returned_array[1] = json_decode($returned_array[1]);


	    // Replace all 'http://localhost:8888/local/' with 'http://example.org/', and place $date in the 'data-human-date' attribute
	    // Building all our expected values
        $expected_one = '<divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-2"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Weight<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/scale.svg"/></h2><divclass="wphealthtracker-response-form-data-row-weight"id="wphealthtracker-response-form-weight-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Weight</p><inputclass="wphealthtracker-response-form-input"id="wphealthtracker-response-form-input-number-weight"type="number"value="185"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-weight"><optionselected>Pounds</option><option>Kilograms</option></select></div></div></div><divclass="wphealthtracker-response-form-entry-row"><divclass="wphealthtracker-response-form-ch-div"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-cholesterol"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Cholesterol<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/heartbeat.svg"/></h2><divclass="wphealthtracker-response-form-data-row-cholesterol"id="wphealthtracker-response-form-cholesterol-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>LDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-ldl-0"value="123"></input></div><divclass="wphealthtracker-response-form-div-row"><p>HDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hdl-0"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Triglycerides</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tri-0"value="40"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Total</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tot-0"value="263"></input></div></div></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodPressure<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/pressure.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bp"id="wphealthtracker-response-form-bp-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Systolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-sys-0-0"value="140"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Diastolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-dis-0-0"value="85"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-bp"id="wphealthtracker-response-form-input-time-bp-0-0"value="01:00"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bp-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodSugar<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/injury.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bs"id="wphealthtracker-response-form-bs-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Level</p><inputtype="number"step="0.1"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bs-0-0"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-bs-0-0">"><option>mg/dL</option><optionselected>mmol/L</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bs-0-0"value="03:02"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bs-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodOxygenLevel<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/oxygen.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bo"id="wphealthtracker-response-form-bo-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>OxygenLevel</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bo-0-0"value="20"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bo-0-0"><optionselected>Percent</option><option>mmHG</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bo-0-0"value="10:00"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bo-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BodyTemperature<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/thermometer.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bt"id="wphealthtracker-response-form-bt-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Temperature</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bt-0-0"value="98"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bt-0-0"><option>Fahrenheit</option><option>Celcius</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bt-0-0"value="06:18"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bt-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>HeartRate<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/monitor.svg"/></h2><divclass="wphealthtracker-response-form-data-row-hr"id="wphealthtracker-response-form-hr-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>BeatsPerMinute</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hr-0-0"value="120"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-hr"id="wphealthtracker-response-form-input-time-hr-0-0"value="13:00"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-hr-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Images<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/image.svg"/></h2><divclass="wphealthtracker-response-form-data-row-img"id="wphealthtracker-response-form-img-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>ImageURL</p><inputtype="text"placeholder="ImageURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-image-upload"id="wphealthtracker-response-form-input-text-image-upload-0-0"value="https://www.ign.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadImage</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-image-upload"id="wphealthtracker-response-form-input-button-image-upload-0-0">Choose/UploadImage</button></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-img-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Files<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/upload-file.svg"/></h2><divclass="wphealthtracker-response-form-data-row-file"id="wphealthtracker-response-form-file-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>FileURL</p><inputtype="text"placeholder="FileURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-file-upload"id="wphealthtracker-response-form-input-text-file-upload-0-0"value="https://www.google.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadFile</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-file-upload"id="wphealthtracker-response-form-input-button-file-upload-0-0">Choose/UploadFile</button></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-file-row-div-0-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-save-spinner-response-div"><divclass="wphealthtracker-spinner-primary"id="wphealthtracker-spinner-save-vitals"></div><divclass="wphealthtracker-response-message-div"id="wphealthtracker-response-message-vitals-div"></div><buttonclass="wphealthtracker-save-stuff-button"id="wphealthtracker-save-daily-vitals-enter-0"data-firstname="Jake"data-lastname="Evans"data-human-date="'.$date.'"data-parent-id-num="0">SaveVitals</button></div>';

        // Still building all our expected values
        $expected_two = $date;
        $expected_three = $insert_data['firstname'];
        $expected_four = $insert_data['lastname'];
        $expected_five = $insert_data['wpuserid'];
        $expected_six = $insert_data['bloodpressure'];
        $expected_seven = $insert_data['bloodoxygen'];
        $expected_eight = $insert_data['bodytemp'];
        $expected_nine = $insert_data['cholesterol'];
        $expected_ten = $insert_data['heartrate'];
        $expected_eleven = $insert_data['bloodsugar'];
        $expected_twelve = $insert_data['vitalsimg'];
        $expected_thirteen = $insert_data['vitalsfiles'];
        $expected_fourteen = $insert_data['firstname'];
        $expected_fifteen = $insert_data['lastname'];
        $expected_sixteen = $insert_data['humandate'];
        $expected_seventeen = $insert_data['wpuserid'];

            

        // Stripping all whitespace
        $returned_array[0] = trim(preg_replace('/\s+/', '', $returned_array[0]));
        $returned_array[4] = trim(preg_replace('/\s+/', '', $returned_array[4]));



        // Making our assertions
        $this->assertEquals(6, sizeof($returned_array));
        $this->assertSame($expected_one, $returned_array[0]);
        $this->assertSame($expected_two, $returned_array[1]->humandate);
        $this->assertSame($expected_three, $returned_array[1]->firstname);
        $this->assertSame($expected_four, $returned_array[1]->lastname);
        $this->assertSame($expected_five, $returned_array[1]->wpuserid);
        $this->assertSame($expected_six, $returned_array[1]->bloodpressure);
        $this->assertSame($expected_seven, $returned_array[1]->bloodoxygen);
        $this->assertSame($expected_eight, $returned_array[1]->bodytemp);
        $this->assertSame($expected_nine, $returned_array[1]->cholesterol);
        $this->assertSame($expected_ten, $returned_array[1]->heartrate);
        $this->assertSame($expected_eleven, $returned_array[1]->bloodsugar);
        $this->assertSame($expected_twelve, $returned_array[1]->vitalsimg);
        $this->assertSame($expected_thirteen, $returned_array[1]->vitalsfiles);
        $this->assertSame($expected_fourteen, $returned_array[2]);
        $this->assertSame($expected_fifteen, $returned_array[3]);
        $this->assertSame($expected_sixteen, $returned_array[4]);
        $this->assertSame($expected_seventeen, $returned_array[5]);

    }

    

    // This function will test the output of the 'Enter' container on the Vitals tab when the user has saved data for this date already, and has inserted one additional row of data where possible.
    public function test_wphealthtracker_jre_selecteduser_vitals_enter_action_callback__dummy_data_mult_insertions(){

    	global $wpdb;

    	// Set up POST values for actual function execution
    	$offsetServerInSeconds = date_offset_get(new DateTime)*60*60; // in seconds
    	$offsetServerInMinutes = date_offset_get(new DateTime)*60; //in minutes
    	$_POST['offset'] = $offsetServerInMinutes;
    	$_POST['wpuserid'] = '1';
    	$_POST['tab'] = 'vitals';

    	// Building today's date
		date_default_timezone_set(date_default_timezone_get());
		$date = new DateTime('now');
		$date->setTimezone(new DateTimeZone(CONST_SERVER_TIMEZONE));
		$date = $date->format(CONST_SERVER_DATEFORMAT);
		$date = str_replace('/', '-', $date);
		date_default_timezone_set(date_default_timezone_get());

        // Insert dummy data in the 'wphealthtracker_user_daily_data_vitals' table
        $users_daily_table_name = $wpdb->prefix . 'wphealthtracker_user_daily_data_vitals';

        // First delete any and all Transients that may be interferring with getting accurate data
    	$sql = 'DELETE FROM ' . $wpdb->options . ' WHERE option_name LIKE "_transient_%"';
    	$wpdb->query($sql);

        // Delete data from db just in case it already exists, so we can get an accurate test, with the accurate version fo the form being returned.
        $wpdb->delete($users_daily_table_name, array(
        		'firstname'=>'Jake', 
        		'lastname'=>'Evans',
        		'wpuserid'=>'1',
        		'humandate'=>$date  
        	)
        );

       
		// Insert dummy data
        $insert_data = array(
			'bloodoxygen' => "20/Percent/10:00,40/mm HG/22:00",
			'bloodpressure' => "140/85/01:00,75/40/13:00",
			'bloodsugar' => "100-mmol/L-03:02,200-mg/dL-15:02",
			'bodytemp' => "98/Fahrenheit/06:18,89/Celcius/18:18",
			'cholesterol' => "123,100,40,263",
			'firstname' => "Jake",
			'heartrate' => "120/13:00,100/01:00",
			'humandate' => $date,
			'lastname' => "Evans",
			'vitalsfiles' => "https://www.google.com,https://www.npr.org",
			'vitalsimg' => "https://www.ign.com,https://www.wired.com",
			'weight' => "185;Pounds",
			'wpuserid' => "1",
        );
        $mask_array = array('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%d');
        $result = $wpdb->insert( $users_daily_table_name, $insert_data, $mask_array);

    	// Spoof the nonce in the POST superglobal
    	$_POST['_wpnonce'] = wp_create_nonce( 'wphealthtracker_jre_selecteduser_vitals_enter_action_callback' );

    	try {
	        $this->_handleAjax( 'wphealthtracker_jre_selecteduser_vitals_enter_action' );
	    } catch ( WPAjaxDieStopException $e ) {


	    }

	    // Check that the exception was thrown.
        $this->assertTrue( isset( $e ) );

	    // Get the actual output
	    $returned_array = $e->getMessage(); 
		$returned_array = json_decode($returned_array);
		$returned_array[1] = json_decode($returned_array[1]);


	    // Replace all 'http://localhost:8888/local/' with 'http://example.org/', and place $date in the 'data-human-date' attribute
	    // Building all our expected values
        $expected_one = '<divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-2"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Weight<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/scale.svg"/></h2><divclass="wphealthtracker-response-form-data-row-weight"id="wphealthtracker-response-form-weight-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Weight</p><inputclass="wphealthtracker-response-form-input"id="wphealthtracker-response-form-input-number-weight"type="number"value="185"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-weight"><optionselected>Pounds</option><option>Kilograms</option></select></div></div></div><divclass="wphealthtracker-response-form-entry-row"><divclass="wphealthtracker-response-form-ch-div"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-cholesterol"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Cholesterol<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/heartbeat.svg"/></h2><divclass="wphealthtracker-response-form-data-row-cholesterol"id="wphealthtracker-response-form-cholesterol-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>LDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-ldl-0"value="123"></input></div><divclass="wphealthtracker-response-form-div-row"><p>HDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hdl-0"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Triglycerides</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tri-0"value="40"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Total</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tot-0"value="263"></input></div></div></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodPressure<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/pressure.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bp"id="wphealthtracker-response-form-bp-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Systolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-sys-0-0"value="140"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Diastolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-dis-0-0"value="85"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-bp"id="wphealthtracker-response-form-input-time-bp-0-0"value="01:00"></input></div></div><divclass="wphealthtracker-response-form-data-row-bp"id="wphealthtracker-response-form-bp-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>Systolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-sys-1-0"value="75"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Diastolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-dis-1-0"value="40"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-bp"id="wphealthtracker-response-form-input-time-bp-1-0"value="13:00"></input><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-bp-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bp-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodSugar<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/injury.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bs"id="wphealthtracker-response-form-bs-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Level</p><inputtype="number"step="0.1"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bs-0-0"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-bs-0-0">"><option>mg/dL</option><optionselected>mmol/L</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bs-0-0"value="03:02"></input></div></div><divclass="wphealthtracker-response-form-data-row-bs"id="wphealthtracker-response-form-bs-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>Level</p><inputtype="number"step="0.1"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bs-1-0"value="200"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-bs-1-0">"><optionselected>mg/dL</option><option>mmol/L</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bs-1-0"value="15:02"></input><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-bs-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bs-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodOxygenLevel<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/oxygen.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bo"id="wphealthtracker-response-form-bo-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>OxygenLevel</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bo-0-0"value="20"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bo-0-0"><optionselected>Percent</option><option>mmHG</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bo-0-0"value="10:00"></input></div></div><divclass="wphealthtracker-response-form-data-row-bo"id="wphealthtracker-response-form-bo-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>OxygenLevel</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bo-1-0"value="40"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bo-1-0"><option>Percent</option><optionselected>mmHG</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bo-1-0"value="22:00"></input><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-bo-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bo-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BodyTemperature<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/thermometer.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bt"id="wphealthtracker-response-form-bt-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>Temperature</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bt-0-0"value="98"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bt-0-0"><optionselected>Fahrenheit</option><option>Celcius</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bt-0-0"value="06:18"></input></div></div><divclass="wphealthtracker-response-form-data-row-bt"id="wphealthtracker-response-form-bt-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>Temperature</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bt-1-0"value="89"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bt-1-0"><option>Fahrenheit</option><optionselected>Celcius</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bt-1-0"value="18:18"></input><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-bt-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-bt-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>HeartRate<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/monitor.svg"/></h2><divclass="wphealthtracker-response-form-data-row-hr"id="wphealthtracker-response-form-hr-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>BeatsPerMinute</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hr-0-0"value="120"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-hr"id="wphealthtracker-response-form-input-time-hr-0-0"value="13:00"></input></div></div><divclass="wphealthtracker-response-form-data-row-hr"id="wphealthtracker-response-form-hr-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>BeatsPerMinute</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hr-1-0"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-hr"id="wphealthtracker-response-form-input-time-hr-1-0"value="01:00"></input><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-bt-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-hr-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Images<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/image.svg"/></h2><divclass="wphealthtracker-response-form-data-row-img"id="wphealthtracker-response-form-img-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>ImageURL</p><inputtype="text"placeholder="ImageURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-image-upload"id="wphealthtracker-response-form-input-text-image-upload-0-0"value="https://www.ign.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadImage</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-image-upload"id="wphealthtracker-response-form-input-button-image-upload-0-0">Choose/UploadImage</button></div></div><divclass="wphealthtracker-response-form-data-row-img"id="wphealthtracker-response-form-img-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>ImageURL</p><inputtype="text"placeholder="ImageURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-image-upload"id="wphealthtracker-response-form-input-text-image-upload-1-0"value="https://www.wired.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadImage</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-image-upload"id="wphealthtracker-response-form-input-button-image-upload-1-0">Choose/UploadImage</button><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-img-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-img-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Files<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/upload-file.svg"/></h2><divclass="wphealthtracker-response-form-data-row-file"id="wphealthtracker-response-form-file-row-div-0-0"><divclass="wphealthtracker-response-form-div-row"><p>FileURL</p><inputtype="text"placeholder="FileURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-file-upload"id="wphealthtracker-response-form-input-text-file-upload-0-0"value="https://www.google.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadFile</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-file-upload"id="wphealthtracker-response-form-input-button-file-upload-0-0">Choose/UploadFile</button></div></div><divclass="wphealthtracker-response-form-data-row-file"id="wphealthtracker-response-form-file-row-div-1-0"><divclass="wphealthtracker-response-form-div-row"><p>FileURL</p><inputtype="text"placeholder="FileURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-file-upload"id="wphealthtracker-response-form-input-text-file-upload-1-0"value="https://www.npr.org"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadFile</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-file-upload"id="wphealthtracker-response-form-input-button-file-upload-1-0">Choose/UploadFile</button><divclass="wphealthtracker-response-form-row-removal-div"data-id-to-remove="wphealthtracker-response-form-file-row-div-1-0"><imgclass="wphealthtracker-response-form-row-removal-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/garbage.svg"/></div></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="1"data-loopnum="0"data-id-to-add-after="wphealthtracker-response-form-file-row-div-1-0"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-save-spinner-response-div"><divclass="wphealthtracker-spinner-primary"id="wphealthtracker-spinner-save-vitals"></div><divclass="wphealthtracker-response-message-div"id="wphealthtracker-response-message-vitals-div"></div><buttonclass="wphealthtracker-save-stuff-button"id="wphealthtracker-save-daily-vitals-enter-0"data-firstname="Jake"data-lastname="Evans"data-human-date="'.$date.'"data-parent-id-num="0">SaveVitals</button></div>';

        // Still building all our expected values
        $expected_two = $date;
        $expected_three = $insert_data['firstname'];
        $expected_four = $insert_data['lastname'];
        $expected_five = $insert_data['wpuserid'];
        $expected_six = $insert_data['bloodpressure'];
        $expected_seven = $insert_data['bloodoxygen'];
        $expected_eight = $insert_data['bodytemp'];
        $expected_nine = $insert_data['cholesterol'];
        $expected_ten = $insert_data['heartrate'];
        $expected_eleven = $insert_data['bloodsugar'];
        $expected_twelve = $insert_data['vitalsimg'];
        $expected_thirteen = $insert_data['vitalsfiles'];
        $expected_fourteen = $insert_data['firstname'];
        $expected_fifteen = $insert_data['lastname'];
        $expected_sixteen = $insert_data['humandate'];
        $expected_seventeen = $insert_data['wpuserid'];

        // Stripping all whitespace
        $returned_array[0] = trim(preg_replace('/\s+/', '', $returned_array[0]));
        $returned_array[4] = trim(preg_replace('/\s+/', '', $returned_array[4]));



        // Making our assertions
        $this->assertEquals(6, sizeof($returned_array));
        $this->assertSame($expected_one, $returned_array[0]);
   
        $this->assertSame($expected_two, $returned_array[1]->humandate);
        $this->assertSame($expected_three, $returned_array[1]->firstname);
        $this->assertSame($expected_four, $returned_array[1]->lastname);
        $this->assertSame($expected_five, $returned_array[1]->wpuserid);
        $this->assertSame($expected_six, $returned_array[1]->bloodpressure);
        $this->assertSame($expected_seven, $returned_array[1]->bloodoxygen);
        $this->assertSame($expected_eight, $returned_array[1]->bodytemp);
        $this->assertSame($expected_nine, $returned_array[1]->cholesterol);
        $this->assertSame($expected_ten, $returned_array[1]->heartrate);
        $this->assertSame($expected_eleven, $returned_array[1]->bloodsugar);
        $this->assertSame($expected_twelve, $returned_array[1]->vitalsimg);
        $this->assertSame($expected_thirteen, $returned_array[1]->vitalsfiles);
        $this->assertSame($expected_fourteen, $returned_array[2]);
        $this->assertSame($expected_fifteen, $returned_array[3]);
        $this->assertSame($expected_sixteen, $returned_array[4]);
        $this->assertSame($expected_seventeen, $returned_array[5]);


    }

    // This function will test the output of the 'View' container on the Vitals tab when the user has just one saved day of data with no insertions.
    public function test_wphealthtracker_jre_selecteduser_vitals_view_action_callback__one_day_no_insertions(){

    	global $wpdb;

    	// Set up POST values for actual function execution
    	$offsetServerInSeconds = date_offset_get(new DateTime)*60*60; // in seconds
    	$offsetServerInMinutes = date_offset_get(new DateTime)*60; //in minutes
    	$_POST['offset'] = $offsetServerInMinutes;
    	$_POST['wpuserid'] = '1';
    	$_POST['tab'] = 'vitals';

    	// Building the date to be one less than the current date, to insert, and then be able to retreive, past data
		date_default_timezone_set(date_default_timezone_get());
		$date = new DateTime('now');
		$date->modify('-1 day');
		$date->setTimezone(new DateTimeZone(CONST_SERVER_TIMEZONE));
		$date = $date->format(CONST_SERVER_DATEFORMAT);
		$date = str_replace('/', '-', $date);
		date_default_timezone_set(date_default_timezone_get());

    	// Insert dummy data in the 'wphealthtracker_user_daily_data_vitals' table
        $users_daily_table_name = $wpdb->prefix . 'wphealthtracker_user_daily_data_vitals';

    	// First delete any and all Transients that may be interferring with getting accurate data
    	$sql = 'DELETE FROM ' . $wpdb->options . ' WHERE option_name LIKE "_transient_%"';
    	$wpdb->query($sql);

        // Delete data from db just in case it already exists, so we can get an accurate test, with the accurate version fo the form being returned.
        $wpdb->delete($users_daily_table_name, array(
        		'bloodoxygen' => "20/Percent/10:00",
				'bloodpressure' => "140/85/01:00",
				'bloodsugar' => "100-mmol/L-03:02",
				'bodytemp' => "98/Fahrenheit/06:18",
				'cholesterol' => "123,100,40,263",
				'firstname' => "Jake",
				'heartrate' => "120/13:00",
				'humandate' => $date,
				'lastname' => "Evans",
				'vitalsfiles' => "https://www.google.com",
				'vitalsimg' => "https://www.ign.com",
				'weight' => "185;Pounds",
				'wpuserid' => "1",
	        )
        );

       	// Insert dummy data
		$insert_data = array(
			'bloodoxygen' => "20/Percent/10:00",
			'bloodpressure' => "140/85/01:00",
			'bloodsugar' => "100-mmol/L-03:02",
			'bodytemp' => "98/Fahrenheit/06:18",
			'cholesterol' => "123,100,40,263",
			'firstname' => "Jake",
			'heartrate' => "120/13:00",
			'humandate' => $date,
			'lastname' => "Evans",
			'vitalsfiles' => "https://www.google.com",
			'vitalsimg' => "https://www.ign.com",
			'weight' => "185;Pounds",
			'wpuserid' => "1",
		);
		$mask_array = array('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%d');
		$result = $wpdb->insert( $users_daily_table_name, $insert_data, $mask_array);

    	// Spoof the nonce in the POST superglobal
    	$_POST['_wpnonce'] = wp_create_nonce( 'wphealthtracker_jre_selecteduser_vitals_view_action_callback' );

    	try {
	        $this->_handleAjax( 'wphealthtracker_jre_selecteduser_vitals_view_action' );
	    } catch ( WPAjaxDieStopException $e ) {


	    }

	    // Check that the exception was thrown.
        $this->assertTrue( isset( $e ) );

	    // Get the actual output
	    $returned_array = $e->getMessage(); 
		$returned_array = json_decode($returned_array);
		$returned_array[1] = json_decode($returned_array[1]);

	    // Replace all 'http://localhost:8888/local/' with 'http://example.org/', and place $date in the 'data-human-date' attribute and in the Save button
	    // Building all our expected values
        $expected_one = '<divclass="wphealthtracker-response-form-all-data-row"id="wphealthtracker-response-form-all-data-row-1"><imgclass="wphealthtracker-saved-data-indiv-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/analysis.svg"/><pclass="wphealthtracker-all-data-p">Datafor07-12-2018</p><divclass="wphealthtracker-expand-minimize-div-all-data"><pclass="wphealthtracker-expand-minimize-p"id="wphealthtracker-expand-minimize-p-enter">Expand</p><imgsrc="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/rotate.svg"class="wphealthtracker-indiv-choice-img-rotate"id="wphealthtracker-indiv-choice-img-rotate-enter"/></div></div><divclass="wphealthtracker-response-form-all-data-row-actual"id="wphealthtracker-response-form-data-row-actual-1"><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-2"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Weight<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/scale.svg"/></h2><divclass="wphealthtracker-response-form-data-row-weight"id="wphealthtracker-response-form-weight-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>Weight</p><inputclass="wphealthtracker-response-form-input"id="wphealthtracker-response-form-input-number-weight"type="number"value="185"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-weight"><optionselected>Pounds</option><option>Kilograms</option></select></div></div></div><divclass="wphealthtracker-response-form-entry-row"><divclass="wphealthtracker-response-form-ch-div"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-cholesterol"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Cholesterol<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/heartbeat.svg"/></h2><divclass="wphealthtracker-response-form-data-row-cholesterol"id="wphealthtracker-response-form-cholesterol-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>LDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-ldl-1"value="123"></input></div><divclass="wphealthtracker-response-form-div-row"><p>HDL</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hdl-1"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Triglycerides</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tri-1"value="40"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Total</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-tot-1"value="263"></input></div></div></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodPressure<imgclass="wphealthtracker-icon-h2-image"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/pressure.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bp"id="wphealthtracker-response-form-bp-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>Systolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-sys-0-1"value="140"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Diastolic</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bp-dis-0-1"value="85"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-bp"id="wphealthtracker-response-form-input-time-bp-0-1"value="01:00"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-bp-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodSugar<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/injury.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bs"id="wphealthtracker-response-form-bs-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>Level</p><inputtype="number"step="0.1"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bs-0-1"value="100"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-select"id="wphealthtracker-response-form-select-bs-0-1">"><option>mg/dL</option><optionselected>mmol/L</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bs-0-1"value="03:02"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-bs-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BloodOxygenLevel<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/oxygen.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bo"id="wphealthtracker-response-form-bo-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>OxygenLevel</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bo-0-1"value="20"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bo-0-1"><optionselected>Percent</option><option>mmHG</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bo-0-1"value="10:00"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-bo-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>BodyTemperature<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/thermometer.svg"/></h2><divclass="wphealthtracker-response-form-data-row-bt"id="wphealthtracker-response-form-bt-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>Temperature</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-bt-0-1"value="98"></input></div><divclass="wphealthtracker-response-form-div-row"><p>Measurement</p><selectclass="wphealthtracker-response-form-selectwphealthtracker-response-form-select-bo"id="wphealthtracker-response-form-select-bt-0-1"><option>Fahrenheit</option><option>Celcius</option></select></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-time"id="wphealthtracker-response-form-input-time-bt-0-1"value="06:18"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-bt-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>HeartRate<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/monitor.svg"/></h2><divclass="wphealthtracker-response-form-data-row-hr"id="wphealthtracker-response-form-hr-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>BeatsPerMinute</p><inputtype="number"class="wphealthtracker-response-form-input-number"id="wphealthtracker-response-form-input-number-hr-0-1"value="120"></input></div><divclass="wphealthtracker-response-form-div-row"><p>TimeofDay</p><inputtype="time"class="wphealthtracker-response-form-input-timewphealthtracker-response-form-input-time-hr"id="wphealthtracker-response-form-input-time-hr-0-1"value="13:00"></input></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-hr-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Images<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/image.svg"/></h2><divclass="wphealthtracker-response-form-data-row-img"id="wphealthtracker-response-form-img-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>ImageURL</p><inputtype="text"placeholder="ImageURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-image-upload"id="wphealthtracker-response-form-input-text-image-upload-0-1"value="https://www.ign.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadImage</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-image-upload"id="wphealthtracker-response-form-input-button-image-upload-0-1">Choose/UploadImage</button></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-img-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-response-form-entry-row"><h2class="wphealthtracker-response-form-heading-black"><imgid="wphealthtracker-icon-image-question-id-3"class="wphealthtracker-icon-image-question-enter-view"data-label="vitals-bp"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg"/>Files<imgclass="wphealthtracker-icon-h2-image"data-label="vitals-weight"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/upload-file.svg"/></h2><divclass="wphealthtracker-response-form-data-row-file"id="wphealthtracker-response-form-file-row-div-0-1"><divclass="wphealthtracker-response-form-div-row"><p>FileURL</p><inputtype="text"placeholder="FileURL"class="wphealthtracker-response-form-input-textwphealthtracker-response-form-input-text-file-upload"id="wphealthtracker-response-form-input-text-file-upload-0-1"value="https://www.google.com"></input></div><divclass="wphealthtracker-response-form-div-row"><p>UploadFile</p><buttonclass="wphealthtracker-response-form-input-buttonwphealthtracker-response-form-input-button-file-upload"id="wphealthtracker-response-form-input-button-file-upload-0-1">Choose/UploadFile</button></div></div><divclass="wphealthtracker-response-form-row-addition-div"data-key="0"data-loopnum="1"data-id-to-add-after="wphealthtracker-response-form-file-row-div-0-1"><imgclass="wphealthtracker-response-form-row-add-img"src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/web-site.svg"/></div></div><divclass="wphealthtracker-save-spinner-response-div"><divclass="wphealthtracker-spinner-red"id="wphealthtracker-spinner-save-vitals"></div><divclass="wphealthtracker-response-message-div"id="wphealthtracker-response-message-vitals-div"></div><buttonclass="wphealthtracker-save-stuff-button"id="wphealthtracker-save-daily-vitals-enter-1"data-firstname="Jake"data-lastname="Evans"data-human-date="'.$date.'"data-parent-id-num="1">UpdateDatafor'.$date.'</button></div></div>';

        // Still building all our expected values
        $expected_two = $date;
        $expected_three = $insert_data['firstname'];
        $expected_four = $insert_data['lastname'];
        $expected_five = $insert_data['wpuserid'];
        $expected_six = $insert_data['bloodpressure'];
        $expected_seven = $insert_data['bloodoxygen'];
        $expected_eight = $insert_data['bodytemp'];
        $expected_nine = $insert_data['cholesterol'];
        $expected_ten = $insert_data['heartrate'];
        $expected_eleven = $insert_data['bloodsugar'];
        $expected_twelve = $insert_data['vitalsimg'];
        $expected_thirteen = $insert_data['vitalsfiles'];
        $expected_fourteen = $insert_data['firstname'];
        $expected_fifteen = $insert_data['lastname'];

        // Rebuild date for today
		date_default_timezone_set(date_default_timezone_get());
		$date = new DateTime('now');
		$date->setTimezone(new DateTimeZone(CONST_SERVER_TIMEZONE));
		$date = $date->format(CONST_SERVER_DATEFORMAT);
		$date = str_replace('/', '-', $date);
		date_default_timezone_set(date_default_timezone_get());

        $expected_sixteen = $date;
        $expected_seventeen = $insert_data['wpuserid'];

        // Stripping all whitespace
        $returned_array[0] = trim(preg_replace('/\s+/', '', $returned_array[0]));
        $returned_array[4] = trim(preg_replace('/\s+/', '', $returned_array[4]));

        // Making our assertions
        $this->assertEquals(6, sizeof($returned_array));
        $this->assertSame($expected_one, $returned_array[0]);
        
        $this->assertSame($expected_two, $returned_array[1][0]->humandate);
        $this->assertSame($expected_three, $returned_array[1][0]->firstname);
        $this->assertSame($expected_four, $returned_array[1][0]->lastname);
        $this->assertSame($expected_five, $returned_array[1][0]->wpuserid);
        $this->assertSame($expected_six, $returned_array[1][0]->bloodpressure);
        $this->assertSame($expected_seven, $returned_array[1][0]->bloodoxygen);
        $this->assertSame($expected_eight, $returned_array[1][0]->bodytemp);
        $this->assertSame($expected_nine, $returned_array[1][0]->cholesterol);
        $this->assertSame($expected_ten, $returned_array[1][0]->heartrate);
        $this->assertSame($expected_eleven, $returned_array[1][0]->bloodsugar);
        $this->assertSame($expected_twelve, $returned_array[1][0]->vitalsimg);
        $this->assertSame($expected_thirteen, $returned_array[1][0]->vitalsfiles);
        $this->assertSame($expected_fourteen, $returned_array[2]);
        $this->assertSame($expected_fifteen, $returned_array[3]);
        $this->assertSame($expected_sixteen, $returned_array[4]);
        $this->assertSame($expected_seventeen, $returned_array[5]);
    }

    /*
    #TODO: Create one of each:

    	The output of the 'View' container on the Vitals tab when the user has no saved days of data.

		The output of the 'View' container on the Vitals tab when the user has two saved days of data with no insertions.

		The output of the 'View' container on the Vitals tab when the user has just one saved day of data with one example of an insertion where possible - so two rows of data for each section where possible.

		The output of the 'View' container on the Vitals tab when the user has two saved days of data with one example of an insertion where possible - so two rows of data for each section where possible.


    */
}

?>