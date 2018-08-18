<?php






/*
 * Below is a boilerplate ajax function and callback,
 * complete with console.logs and echos to verify functionality
 */

/*
// For
add_action( 'admin_footer', 'wphealthtracker_boilerplate_action_javascript' );
add_action( 'wp_ajax_wphealthtracker_boilerplate_action', 'wphealthtracker_boilerplate_action_callback' );
add_action( 'wp_ajax_nopriv_wphealthtracker_boilerplate_action', 'wphealthtracker_boilerplate_action_callback' );


function wphealthtracker_boilerplate_action_javascript() {
	?>
	  <script type="text/javascript" >
	  "use strict";
	  jQuery(document).ready(function($) {
		  $(document).on("click",".wphealthtracker-trigger-actions-checkbox", function(event){

			  var data = {
				'action': 'wphealthtracker_boilerplate_action',
				'security': '<?php echo wp_create_nonce( "wphealthtracker_boilerplate_action_callback" ); ?>',
			};
			console.log(data);

			 var request = $.ajax({
				url: ajaxurl,
				type: "POST",
				data:data,
				timeout: 0,
				success: function(response) {
					console.log(response);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(errorThrown);
					console.log(textStatus);
					console.log(jqXHR);
				}
			});

			event.preventDefault ? event.preventDefault() : event.returnValue = false;
		  });
	});
	</script>
	<?php
}

// Callback function for
function wphealthtracker_boilerplate_action_callback(){
	global $wpdb;
	check_ajax_referer( 'wphealthtracker_boilerplate_action_callback', 'security' );
	//$var1 = filter_var($_POST['var'],FILTER_SANITIZE_STRING);
	//$var2 = filter_var($_POST['var'],FILTER_SANITIZE_NUMBER_INT);
	echo 'hi';
	wp_die();
}*/





