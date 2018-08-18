
<?php 
/**
 * class WP_Meta_VerifyTest - test-wphealthtracker-transients.php
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

class WP_Meta_VerifyTest_Transients extends WP_UnitTestCase
{

    public function setUp()
    {
        \WP_Mock::setUp();
        parent::setUp();

        // Get class instance of the WPHEALTHTRACKER_Transients in class-transients.php file
        require_once(WPHEALTHTRACKER_CLASSES_TRANSIENTS_DIR.'class-transients.php');
        $this->transients_class_instance = new WPHEALTHTRACKER_Transients();

        // Create Users Table
        global $wpdb;
        global $charset_collate;
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

        // To suppress echos and other such output that doesn't effect this unit testing
        $this->setOutputCallback(function() {});

    }

    public function tearDown() 
    {

    }

    // For testing the output of the existing_transient_check() function in class-transients.php file
    public function test_existing_transient_check()
    {

        // Create dummy data/transient to test retrieval of transient
        global $wpdb;
        $users_table_name = $wpdb->prefix . 'wphealthtracker_users';

        // Insert dummy data
        $insert_data = array(
            'ID' => '1',
            'firstname' => 'Jake',
            'lastname' => 'Evans',
            'wpuserid' => 1,
        );
        $mask_array = array('%s','%s','%s','%d');
        $result = $wpdb->insert( $users_table_name, $insert_data, $mask_array);

        // Insert more dummy data
        $insert_data = array(
            'ID' => '2',
            'firstname' => 'John',
            'lastname' => 'Doe',
            'wpuserid' => 2,
        );
        $mask_array = array('%s','%s','%s','%d');
        $result = $wpdb->insert( $users_table_name, $insert_data, $mask_array);

        // Set up info for transient
        $transient_name = 'wpht_' . md5("SELECT * FROM ".$users_table_name." ORDER BY firstname");
        $query = "SELECT * FROM ".$users_table_name." ORDER BY firstname";
        $query_result = $wpdb->get_results($query);

        // Actually set the transient
        $trans = set_transient($transient_name, $query_result, MONTH_IN_SECONDS );

        // Now get transient
        $expected = get_transient($transient_name);

        // Now the test
        $this->assertArraySubset($expected, $this->transients_class_instance->existing_transient_check($transient_name));

        delete_transient($transient_name);
    }

    // For testing the output of the create_transient() function with 'wpdb->get_results' in class-transients.php file
    public function test_create_transient__get_results()
    {

        // Create dummy data/transient to test retrieval of transient
        global $wpdb;
        $users_table_name = $wpdb->prefix . 'wphealthtracker_users';

        // Insert dummy data
        $insert_data = array(
            'ID' => '3',
            'firstname' => 'Scarlet',
            'lastname' => 'Johannsen',
            'wpuserid' => 3,
        );
        $mask_array = array('%s','%s','%s','%d');
        $result = $wpdb->insert( $users_table_name, $insert_data, $mask_array);

        // Insert more dummy data
        $insert_data = array(
            'ID' => '4',
            'firstname' => 'Olivia',
            'lastname' => 'Munn',
            'wpuserid' => 4,
        );
        $mask_array = array('%s','%s','%s','%d');
        $result = $wpdb->insert( $users_table_name, $insert_data, $mask_array);

        // Set up info for transient
        $transient_name = 'wpht_' . md5("SELECT * FROM ".$users_table_name." ORDER BY firstname");
        $query = "SELECT * FROM ".$users_table_name." ORDER BY firstname";
        $query_result = $wpdb->get_results($query);

        // Delete the Transient first in case it exists, then actually set the transient, then retrieve it, store the result, then delete the transient so we can test our actual function
        delete_transient($transient_name);
        set_transient($transient_name, $query_result, MONTH_IN_SECONDS );
        $expected = get_transient($transient_name);
        delete_transient($transient_name);

        // Now the test
        $this->assertArraySubset($expected, $this->transients_class_instance->create_transient($transient_name, 'wpdb->get_results', $query, MONTH_IN_SECONDS));
    }

    // For testing the output of the create_transient() function with 'wpdb->get_row' in class-transients.php file
    public function test_create_transient__get_row()
    {

        // Create dummy data/transient to test retrieval of transient
        global $wpdb;
        $users_table_name = $wpdb->prefix . 'wphealthtracker_users';

        // Insert dummy data
        $insert_data = array(
            'ID' => '5',
            'firstname' => 'Karen',
            'lastname' => 'Gillan',
            'wpuserid' => 5,
        );
        $mask_array = array('%s','%s','%s','%d');
        $result = $wpdb->insert( $users_table_name, $insert_data, $mask_array);

        // Set up info for transient
        $transient_name = 'wpht_' . md5("SELECT * FROM ".$users_table_name." WHERE wpuserid = 5");
        $query = $wpdb->prepare("SELECT * FROM $users_table_name WHERE wpuserid = %d", 5);
        $query_result = $wpdb->get_row($query);

        // Delete the Transient first in case it exists, then actually set the transient, then retrieve it, store the result, then delete the transient so we can test our actual function
        delete_transient($transient_name);
        set_transient($transient_name, $query_result, MONTH_IN_SECONDS );
        $expected = get_transient($transient_name);
        delete_transient($transient_name);

        // Now getting Actual value
        $actual = $this->transients_class_instance->create_transient($transient_name, 'wpdb->get_row', $query, MONTH_IN_SECONDS);

        // Now testing
        $this->assertEquals($expected->ID,$actual->ID);
        $this->assertEquals($expected->firstname,$actual->firstname);
        $this->assertEquals($expected->lastname,$actual->lastname);
        $this->assertEquals($expected->wpuserid,$actual->wpuserid);  
    }

    #TODO: One test like the above one for every Switch case in create_transient() - only thing that will change is the 'wpdb->get_results' and what data we grab from db

}

?>