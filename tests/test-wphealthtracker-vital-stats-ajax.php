
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

    

    /*
    #TODO: When complete, write test that will test the function of the drop-down box on the vital stats page

    	


    */
}

?>