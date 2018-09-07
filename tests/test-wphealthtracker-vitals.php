
<?php 
/**
 * class WP_Meta_VerifyTest - test-wphealthtracker-vitals.php
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

class WP_Meta_VerifyTest_Vitals extends WP_UnitTestCase
{

    public function setUp()
    {
        \WP_Mock::setUp();
        parent::setUp();

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

    // For testing the creation of the wphealthtracker_user_daily_data_vitals table
    public function test_wphealthtracker_jre_create_daily_data_vitals_table()
    {

        $expected = 'Created table ';
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        global $wpdb;
        global $charset_collate; 

        $wpdb->wphealthtracker_users = "{$wpdb->prefix}wphealthtracker_user_daily_data_vitals";

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

        $this->assertStringStartsWith( $expected,  $dbDeltaResult[$key]);

    }

    // For testing the output of the output_open_display_container() function in class-admin-tracker-vitals-tab-ui.php file
    public function test_output_open_display_container__vitals_tab()
    {

        $icon_url = WPHEALTHTRACKER_ROOT_IMG_ICONS_URL.'cardiogram.svg';
        require_once(WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR.'class-wphealthtracker-translations.php');      
        $trans = new WPHealthTracker_Translations;
        $title = $trans->tab_titles_trans_strings('vitals');

        $expected = '<div class="wphealthtracker-display-container">
            <p class="wphealthtracker-display-top-title"><img class="wphealthtracker-display-title-icon" src="'.$icon_url.'" />'.$title.'</p>
            <div class="wphealthtracker-display-inner-container">';

        // Get class instance of the WPHEALTHTRACKER_Vitals_Tab in class-admin-tracker-vitals-tab-ui.php file
        require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-tracker-vitals-tab-ui.php');
        $this->vitals_tab_class_instance = new WPHEALTHTRACKER_Vitals_Tab();

        $this->assertEquals($expected, $this->vitals_tab_class_instance->output_open_display_container());
    }

    // For testing the output of the output_tab_content() function in class-admin-tracker-vitals-tab-ui.php file
    public function test_output_tab_content__vitals_tab()
    {

        require_once(WPHEALTHTRACKER_CLASSES_TRANSLATIONS_DIR.'class-wphealthtracker-translations.php');     
        require_once(WPHEALTHTRACKER_CLASSES_UI_DISPLAY_DIR.'class-vitals-form.php'); 
        require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-tracker-vitals-tab-ui.php'); 
        $trans = new WPHealthTracker_Translations;
        $trans->common_trans_strings();
        $form = new WPHEALTHTRACKER_Vitals_Form('initial');
        $tab = new WPHEALTHTRACKER_Vitals_Tab('initial');

        /* The expected output of the $tab->output_tab_content(); - modified the SRCs to match what PHPUnit spits out (regardless of the HTTP_HOST and SERVER_NAME supposedly being changed in setUp()...)
        * $this->trans->vitals_trans_3 = $trans->vitals_trans_3
        * $this->userstring = $form->userstring
        * $this->date = $form->date
        * WPHEALTHTRACKER_ROOT_IMG_ICONS_URL = http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/
        */
        $expected = '<div class="wphealthtracker-select-user-container">    
                        <div class="wphealthtracker-user-dropdown-div">
                            <p class="wphealthtracker-user-dropdown-p wphealthtracker-p-title"><img class="wphealthtracker-icon-image-question" id="wphealthtracker-icon-image-question-id-1" data-label="selectauser" src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/question-black.svg" />'.$trans->common_trans_16.':</p>
                                '.$form->userstring.'
                        </div>
                        <div class="wphealthtracker-spinner-primary" id="wphealthtracker-spinner-1"></div>
                        <div class="wphealthtracker-p-title" id="wphealthtracker-choose-title">'.$trans->common_trans_17.'</div>
                    </div>
                    <div id="wphealthtracker-choice-container">
                        <div class="wphealthtracker-indiv-choice" id="wphealthtracker-indiv-choice-enter">
                            <div class="wphealthtracker-expansion-div" id="wphealthtracker-expansion-div-enter">
                                <div class="wphealthtracker-expand-minimize-div">
                                    <p class="wphealthtracker-expand-minimize-p" id="wphealthtracker-expand-minimize-p-enter">Expand</p>
                                    <img src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/rotate.svg" class="wphealthtracker-indiv-choice-img-rotate" id="wphealthtracker-indiv-choice-img-rotate-enter" />
                                </div>
                                <img src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/data-entry.svg" class="wphealthtracker-indiv-choice-img" />
                                <p class="wphealthtracker-indiv-choice-p">Enter Data for '.$form->date.'</p>
                            </div>
                            <div class="wphealthtracker-selected-user-response-enter-div" id="wphealthtracker-response-form-data-row-actual-0">
                            </div>
                        </div>
                        <div class="wphealthtracker-indiv-choice" id="wphealthtracker-indiv-choice-view">
                            <div class="wphealthtracker-expansion-div" id="wphealthtracker-expansion-div-view">
                                <div class="wphealthtracker-expand-minimize-div">
                                    <p class="wphealthtracker-expand-minimize-p" id="wphealthtracker-expand-minimize-p-view">Expand</p>
                                    <img src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/rotate.svg" class="wphealthtracker-indiv-choice-img-rotate" id="wphealthtracker-indiv-choice-img-rotate-view" />
                                </div>
                                <img src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/icons/saved-data.svg" class="wphealthtracker-indiv-choice-img" />
                                <p class="wphealthtracker-indiv-choice-p">View & Edit Saved Data</p>
                            </div>
                            <div class="wphealthtracker-selected-user-response-view-div" id="wphealthtracker-selected-user-response-id-view">
                            </div>
                        </div>
                    </div>';

        // Trimming all whitespace to make comparision a bit easier
        $actual = $tab->output_tab_content();
        $actual = trim(preg_replace('/\s+/', '', $actual));
        $expected = trim(preg_replace('/\s+/', '', $expected));

        $this->assertEquals($expected, $actual);
    }

    // For testing the output of the output_close_display_container() function in class-admin-tracker-vitals-tab-ui.php file
    public function test_output_close_display_container__vitals_tab()
    {

        require_once(WPHEALTHTRACKER_CLASSES_UI_DISPLAY_DIR.'class-vitals-form.php'); 
        require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-tracker-vitals-tab-ui.php'); 
        $form = new WPHEALTHTRACKER_Vitals_Form('initial');
        $tab = new WPHEALTHTRACKER_Vitals_Tab('initial');

        $expected = '</div></div>';

        // Trimming all whitespace to make comparision a bit easier
        $actual = $tab->output_close_display_container();
        $actual = trim(preg_replace('/\s+/', '', $actual));
        $expected = trim(preg_replace('/\s+/', '', $expected));

        $this->assertEquals($expected, $actual);
    }

    // For testing the output of the output_display_template_advert() function in class-admin-tracker-vitals-tab-ui.php file
    public function test_output_display_template_advert__vitals_tab()
    {

        require_once(WPHEALTHTRACKER_CLASSES_UI_DISPLAY_DIR.'class-vitals-form.php'); 
        require_once(WPHEALTHTRACKER_CLASSES_UI_ADMIN_DIR.'class-admin-tracker-vitals-tab-ui.php'); 
        $form = new WPHEALTHTRACKER_Vitals_Form('initial');
        $tab = new WPHEALTHTRACKER_Vitals_Tab('initial');

        /* The expected output of the $tab->output_display_template_advert(); - modified the SRCs to match what PHPUnit spits out (regardless of the HTTP_HOST and SERVER_NAME supposedly being changed in setUp()...)
        */
        $expected = '<div class="wphealthtracker-display-container">
              <div id="wphealthtracker-display-advert-site-div">
                  <div id="wphealthtracker-display-advert-visit-me-title">For Everything WPHEALTHTRACKER</div>
                  <a target="_blank" id="wphealthtracker-display-advert-visit-me-link" href="http://wphealthtracker.com/">
                    <img src="http://wpbooklist.com/wp-content/uploads/2017/08/Screenshot-2017-08-29-14.24.55.png">
                    WPHEALTHTRACKER.com
                  </a>
              </div>
              <p id="wphealthtracker-display-advert-email-me">E-mail with questions, issues, concerns, suggestions, or anything else at <a href="mailto:general@wphealthtracker.com">General@wphealthtracker.com</a></p>
              <div id="wphealthtracker-display-advert-money-container">
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="VUVFXRUQ462UU">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                  </form>

                  <a target="_blank" id="wphealthtracker-patreon-link" href="http://patreon.com/user?u=3614120"><img id="wphealthtracker-patreon-img" src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/patreon.png"></a>
                  <a href="https://ko-fi.com/A8385C9" target="_blank"><img height="34" style="border:0px;height:34px;" src="http://example.org/wp-content/plugins/wphealthtracker/assets/img/kofi1.png" border="0" alt="Buy Me a Coffee at ko-fi.com"></a>
                  <p>And be sure to <a target="_blank" href="https://wordpress.org/support/plugin/wphealthtracker/reviews/">leave a 5-star review of WPHEALTHTRACKER!</a></p>
              </div>
            </div>';

        // Trimming all whitespace to make comparision a bit easier
        $actual = $tab->output_display_template_advert();
        $actual = trim(preg_replace('/\s+/', '', $actual));
        $expected = trim(preg_replace('/\s+/', '', $expected));

        $this->assertEquals($expected, $actual);
    }

    #TODO: Functions like the past 4, when I create the other tabs
    #TODO: Tests for the functions in class-wphealthtracker-transients.php - gonna have to look into making dummy db data & such 
    #TODO: Test for wphealthtracker_get_default_user() in class-vitals-form

}

?>