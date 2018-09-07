
<?php 
/**
 * class WP_Meta_VerifyTest - test-wphealthtracker-general-functions.php
 * For testing fucntions found in 
 * @author   Jake Evans
 * @category Unit Testing
 * @package  Tests
 * @version  0.0.1
 */

/**
*   1. Double underscores in functions names indicates the beginning of the portion of the function name that is specific to this testing file and that does not appear in the corresponding function name in the source file/class.
*
*/

class WP_Meta_VerifyTest_General_Functions extends WP_UnitTestCase
{

    public function setUp()
    {
        \WP_Mock::setUp();
        parent::setUp();

        // Get class instance of the WPHealthTracker_General_Functions in wphealthtracker-functions.php file
        $this->functions_file_class_instance = new WPHealthTracker_General_Functions();

        // To suppress echos and other such output that doesn't effect this unit testing
        $this->setOutputCallback(function() {});



    }

    public function tearDown() 
    {

    }

    // For making sure the table names get registered
    public function test_wphealthtracker_jre_register_table_names()
    {
        global $wpdb;
        $table1 = $wpdb->prefix.'wphealthtracker_users';
        $table2 = $wpdb->prefix.'wphealthtracker_user_daily_data_vitals';
        $expected = $table1.$table2;

        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_register_table_names());
    }

    // For testing the creation of the wphealthtracker_users table
    public function test_wphealthtracker_jre_create_user_table()
    {

        $expected = 'Created table ';
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        global $wpdb;
        global $charset_collate; 

        $wpdb->wphealthtracker_users = "{$wpdb->prefix}wphealthtracker_users";

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

        $this->assertStringStartsWith( $expected,  $dbDeltaResult[$key]);

    }

    // For testing the function that adds the admin menu entry
    public function test_wphealthtracker_jre_admin_menu()
    {
        $expected = 'toplevel_page_WPHealthTracker-Options';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_menu());
    }

    // For testing the addition of the submenu pages ('Tracker, Users, etc...'). Making sure the number of subpages added was at least the number of elements found in WPHEALTHTRACKER_SUBMENU_ARRAY
    public function test_wphealthtracker_jre_my_subadmin_menu__one()
    {
        $submenucount = sizeof(WPHEALTHTRACKER_SUBMENU_ARRAY);
        $return_actual = explode('--', $this->functions_file_class_instance->wphealthtracker_jre_my_subadmin_menu());
        $this->assertGreaterThanOrEqual($submenucount, $return_actual[0]);
    }

    // For testing the addition of the submenu pages ('Tracker, Users, etc...'). Making sure the number of subpages added was at least the number of elements found in WPHEALTHTRACKER_SUBMENU_ARRAY
    public function test_wphealthtracker_jre_my_subadmin_menu__two()
    {
        $submenucount = sizeof(WPHEALTHTRACKER_SUBMENU_ARRAY);
        $return_actual = explode('--', $this->functions_file_class_instance->wphealthtracker_jre_my_subadmin_menu());
        $this->assertGreaterThanOrEqual($submenucount, $return_actual[1]);
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the default admin page for this plugin, i.e., no tab param in url
    public function test_wphealthtracker_jre_admin_page_function__default()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'tracker'
    public function test_wphealthtracker_jre_admin_page_function__tracker()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'tracker';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'vitals'
    public function test_wphealthtracker_jre_admin_page_function__vitals()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'vitals';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'diet'
    public function test_wphealthtracker_jre_admin_page_function__diet()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'diet';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'medications'
    public function test_wphealthtracker_jre_admin_page_function__medications()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'medications';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'exercise'
    public function test_wphealthtracker_jre_admin_page_function__exercise()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'exercise';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'lifestyle'
    public function test_wphealthtracker_jre_admin_page_function__lifestyle()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'lifestyle';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'goaltracker'
    public function test_wphealthtracker_jre_admin_page_function__goaltracker()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'goaltracker';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

    // For testing the loading of require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-master-ui.php'); and simulating the url page param 'WPHealthTracker-tracker' and tab param 'misc'
    public function test_wphealthtracker_jre_admin_page_function__misc()
    {
        $expected = 1;
        $_GET['page'] = 'WPHealthTracker-tracker';
        $_GET['tab'] = 'misc';
        $this->assertEquals( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_admin_page_function());
    }

     #TODO: functions like the past 9 for the 'Users' page, once I create them

    // For testing the loading of the Ajax library script into head (for https sites)
    public function test_wphealthtracker_jre_add_ajax_library__https()
    {
        // Simulate the $_SERVER global setting
        $_SERVER['HTTPS'] = true;
        $_SERVER['HTTPS'] = 'on';

        $html = '<script type="text/javascript">';

        // checking $protocol in HTTP or HTTPS
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') {
            // this is HTTPS
            $protocol  = "https";
        } else {
            // this is HTTP
            $protocol  = "http";
        }

        $html .= 'var ajaxurl = "'.$protocol;
        $expected = $html;


        $this->assertStringStartsWith( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_add_ajax_library());
    }

    // For testing the loading of the Ajax library script into head (for http sites)
    public function test_wphealthtracker_jre_add_ajax_library__http()
    {
        // Simulate the $_SERVER global setting
        unset($_SERVER['HTTPS']);
        $_SERVER['HTTPS'] = 'off';

        $html = '<script type="text/javascript">';

        // checking $protocol in HTTP or HTTPS
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') {
            // this is HTTPS
            $protocol  = "https";
        } else {
            // this is HTTP
            $protocol  = "http";
        }

        $html .= 'var ajaxurl = "'.$protocol;
        $expected = $html;


        $this->assertStringStartsWith( $expected,  $this->functions_file_class_instance->wphealthtracker_jre_add_ajax_library());
    }

    // For testing the code that will pass Translations to the admin.js file (not a TRanslations test, a test to verify that we're successfully passing ALL Translations into wp_localize_script)
    public function test_wphealthtracker_jre_admin_js()
    {
        // Build our expected value by requiring the file and calling the function
        require_once(WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR.'class-wphealthtracker-translations.php');      
        $trans = new WPHealthTracker_Translations;
        $expected_translation_array = $trans->admin_js_trans_strings();

        $this->assertArraySubset( $expected_translation_array,  $this->functions_file_class_instance->wphealthtracker_jre_admin_js('health-tracker'));
    }

    #TODO: Create test for the wphealthtracker_jre_create_general_settings_table() table

    #TODO: create test for wphealthtracker_jre_d3_js(), like wphealthtracker_jre_admin_js() here.
}

?>