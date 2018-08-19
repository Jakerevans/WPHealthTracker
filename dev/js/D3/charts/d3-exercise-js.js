/**
 * JavaScript Functions - d3-exercise-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

"use strict";

function wphealthtracker_exercise_d3_1(mydataFoodItems){

	var milesTravelled = 100;

	// San Diego to...
	var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-seattle');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 15 v100 43');
    newLine.setAttribute('stroke-dasharray',142);
    newLine.setAttribute('stroke-dashoffset',-142);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',-142);
    newLine.setAttribute('data-straightlinedistance',1065);
    newLine.setAttribute('data-destcity', 'Seattle');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-portland');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 L31 32');
    newLine.setAttribute('stroke-dasharray',126);
    newLine.setAttribute('stroke-dashoffset',126);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',126);
    newLine.setAttribute('data-straightlinedistance',932);
    newLine.setAttribute('data-destcity', 'Portland');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-phoenix');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 L72 155');
    newLine.setAttribute('stroke-dasharray',33);
    newLine.setAttribute('stroke-dashoffset',33);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',33);
    newLine.setAttribute('data-straightlinedistance',299);
    newLine.setAttribute('data-destcity', 'Phoenix');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-sanfrancisco');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l-27.5 -56');
    newLine.setAttribute('stroke-dasharray',100);
    newLine.setAttribute('stroke-dashoffset',100);
    newLine.setAttribute('data-offsettoanimateto',40);
    newLine.setAttribute('data-offsettoreturnto',100);
    newLine.setAttribute('data-straightlinedistance',459);
    newLine.setAttribute('data-destcity', 'San Francisco');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-la');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l-10.5 -16');
    newLine.setAttribute('stroke-dasharray',18);
    newLine.setAttribute('stroke-dashoffset',18);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',18);
    newLine.setAttribute('data-straightlinedistance',112);
    newLine.setAttribute('data-destcity', 'Los Angeles');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-saltlakecity');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l50.5 -61');
    newLine.setAttribute('stroke-dasharray',80);
    newLine.setAttribute('stroke-dashoffset',80);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',80);
    newLine.setAttribute('data-straightlinedistance',628);
    newLine.setAttribute('data-destcity', 'Salt Lake City');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-denver');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l97 -48');
    newLine.setAttribute('stroke-dasharray',110);
    newLine.setAttribute('stroke-dashoffset',110);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',110);
    newLine.setAttribute('data-straightlinedistance',834);
    newLine.setAttribute('data-destcity', 'Denver');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-dallas');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l155 15.5');
    newLine.setAttribute('stroke-dasharray',155);
    newLine.setAttribute('stroke-dashoffset',155);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',155);
    newLine.setAttribute('data-straightlinedistance',1183);
    newLine.setAttribute('data-destcity', 'Dallas');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-houston');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l167 44');
    newLine.setAttribute('stroke-dasharray',174);
    newLine.setAttribute('stroke-dashoffset',174);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',174);
    newLine.setAttribute('data-straightlinedistance',1303);
    newLine.setAttribute('data-destcity', 'Houston');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-minneapolis');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l176 -96.5');
    newLine.setAttribute('stroke-dasharray',200);
    newLine.setAttribute('stroke-dashoffset',200);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',200);
    newLine.setAttribute('data-straightlinedistance',1532);
    newLine.setAttribute('data-destcity', 'Minneapolis');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-chicago');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l212 -69.5');
    newLine.setAttribute('stroke-dasharray',225);
    newLine.setAttribute('stroke-dashoffset',225);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',225);
    newLine.setAttribute('data-straightlinedistance',1733);
    newLine.setAttribute('data-destcity', 'Chicago');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-detroit');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l246 -74');
    newLine.setAttribute('stroke-dasharray',256);
    newLine.setAttribute('stroke-dashoffset',256);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',256);
    newLine.setAttribute('data-straightlinedistance',1971);
    newLine.setAttribute('data-destcity', 'Detroit');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-miami');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l288 67');
    newLine.setAttribute('stroke-dasharray',298);
    newLine.setAttribute('stroke-dashoffset',298);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',298);
    newLine.setAttribute('data-straightlinedistance',2271);
    newLine.setAttribute('data-destcity', 'Miami');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-newyork');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l312 -77.5');
    newLine.setAttribute('stroke-dasharray',322);
    newLine.setAttribute('stroke-dashoffset',322);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',322);
    newLine.setAttribute('data-straightlinedistance',2431);
    newLine.setAttribute('data-destcity', 'New York');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-washingtondc');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
    newLine.setAttribute('d','M40 158 l292 -50');
    newLine.setAttribute('stroke-dasharray',297);
    newLine.setAttribute('stroke-dashoffset',297);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',297);
    newLine.setAttribute('data-straightlinedistance',2272);
    newLine.setAttribute('data-destcity', 'Washington D.C.');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");









	// Los Angeles to...
	var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-seattle');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 140 L40 14');
    newLine.setAttribute('stroke-dasharray',125);
    newLine.setAttribute('stroke-dashoffset',125);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',125);
    newLine.setAttribute('data-straightlinedistance',1065);
    newLine.setAttribute('data-destcity', 'Seattle');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-portland');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 140 L31 32');
    newLine.setAttribute('stroke-dasharray',126);
    newLine.setAttribute('stroke-dashoffset',126);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',126);
    newLine.setAttribute('data-straightlinedistance',932);
    newLine.setAttribute('data-destcity', 'Portland');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-phoenix');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 L73 154.5');
    newLine.setAttribute('stroke-dasharray',44);
    newLine.setAttribute('stroke-dashoffset',44);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',44);
    newLine.setAttribute('data-straightlinedistance',299);
    newLine.setAttribute('data-destcity', 'Phoenix');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-sanfrancisco');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l-17.5 -40');
    newLine.setAttribute('stroke-dasharray',43);
    newLine.setAttribute('stroke-dashoffset',43);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',43);
    newLine.setAttribute('data-straightlinedistance',459);
    newLine.setAttribute('data-destcity', 'San Francisco');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-sandiego');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l10.5 16');
    newLine.setAttribute('stroke-dasharray',17);
    newLine.setAttribute('stroke-dashoffset',17);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',17);
    newLine.setAttribute('data-straightlinedistance',112);
    newLine.setAttribute('data-destcity', 'San Diego');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-saltlakecity');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l60 -46.5');
    newLine.setAttribute('stroke-dasharray',74);
    newLine.setAttribute('stroke-dashoffset',74);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',74);
    newLine.setAttribute('data-straightlinedistance',628);
    newLine.setAttribute('data-destcity', 'Salt Lake City');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-denver');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l110 -34.5');
    newLine.setAttribute('stroke-dasharray',112);
    newLine.setAttribute('stroke-dashoffset',112);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',112);
    newLine.setAttribute('data-straightlinedistance',834);
    newLine.setAttribute('data-destcity', 'Denver');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-dallas');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l165 30.5');
    newLine.setAttribute('stroke-dasharray',168);
    newLine.setAttribute('stroke-dashoffset',168);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',168);
    newLine.setAttribute('data-straightlinedistance',1183);
    newLine.setAttribute('data-destcity', 'Dallas');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-houston');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l176 58.5');
    newLine.setAttribute('stroke-dasharray',186);
    newLine.setAttribute('stroke-dashoffset',186);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',186);
    newLine.setAttribute('data-straightlinedistance',1303);
    newLine.setAttribute('data-destcity', 'Houston');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-minneapolis');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l185 -81.5');
    newLine.setAttribute('stroke-dasharray',202);
    newLine.setAttribute('stroke-dashoffset',202);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',202);
    newLine.setAttribute('data-straightlinedistance',1532);
    newLine.setAttribute('data-destcity', 'Minneapolis');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-chicago');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l222 -55');
    newLine.setAttribute('stroke-dasharray',230);
    newLine.setAttribute('stroke-dashoffset',230);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',230);
    newLine.setAttribute('data-straightlinedistance',1733);
    newLine.setAttribute('data-destcity', 'Chicago');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-detroit');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l254 -58.5');
    newLine.setAttribute('stroke-dasharray',262);
    newLine.setAttribute('stroke-dashoffset',262);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',262);
    newLine.setAttribute('data-straightlinedistance',1971);
    newLine.setAttribute('data-destcity', 'Detroit');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-miami');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l300 82.5');
    newLine.setAttribute('stroke-dasharray',312);
    newLine.setAttribute('stroke-dashoffset',312);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',312);
    newLine.setAttribute('data-straightlinedistance',2271);
    newLine.setAttribute('data-destcity', 'Miami');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-newyork');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M31.5 143 l320 -62');
    newLine.setAttribute('stroke-dasharray',326);
    newLine.setAttribute('stroke-dashoffset',326);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',326);
    newLine.setAttribute('data-straightlinedistance',2431);
    newLine.setAttribute('data-destcity', 'New York');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");
    
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-washingtondc');
    newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
    newLine.setAttribute('d','M30.5 143 l302 -35');
    newLine.setAttribute('stroke-dasharray',304);
    newLine.setAttribute('stroke-dashoffset',304);
    newLine.setAttribute('data-offsettoanimateto',0);
    newLine.setAttribute('data-offsettoreturnto',304);
    newLine.setAttribute('data-straightlinedistance',2272);
    newLine.setAttribute('data-destcity', 'Washington D.C.');
    newLine.setAttribute('stroke-width',1);
    $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");




    // Hide the hover message once any of the dots are hovered over 
    $('.wphealthtracker-d3chart-exercise-city-dot').mouseenter(function(){
    	$('#wphealthtracker-chart-hover-message-exercise-distance').animate({
           opacity:0
        }, {
           duration: 500,
           complete: function() { 
           		$(this).css({'pointer-events':'none','z-index':-99999})
           } 
        });
    })
    

    $('#wphealthtracker-d3chart-exercise-city-dot-sandiego').mouseenter(function(){

    	$('.wphealthtracker-d3chart-readout-exercise').html('')
    	var distanceArray = [];
    	var cityArray = [];
    	var percArray = [];
    	$('.wphealthtracker-d3chart-exercise-distance-line-fromsandiego').each(function(){
    		var offsettoanimateto = $(this).attr('data-offsettoanimateto')
    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		var straightlinedistance = $(this).attr('data-straightlinedistance')
    		var destcity = $(this).attr('data-destcity')
    		var temp1 = (offsettoreturnto * milesTravelled) / straightlinedistance;
    		temp1 = offsettoreturnto - temp1;

    		if(milesTravelled >=  straightlinedistance){
    			temp1 = offsettoanimateto;
    			percentage = 100;
    		} else {
    			percentage = ((milesTravelled/straightlinedistance) * 100).toFixed(2);
    		}

    		$(this).animate({'stroke-dashoffset':temp1},2000);

    		// Add to distance & city array
    		distanceArray.push(straightlinedistance)
    		cityArray.push(destcity)
    		percArray.push(percentage)
    	})

    	var rowHtml = '';
    	for (var i = cityArray.length - 1; i >= 0; i--) {

    		var congratsHtml = '';
    		if(percArray[i] == 100){
    			congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'happy.svg"/>'
    		} else {
    			congratsHtml = '';
    		}
    		rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
    	}

    	// Now build HTML for distance/dest. report
    	var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>San Diego '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
    	$('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
	});

	$('#wphealthtracker-d3chart-exercise-city-dot-sandiego').mouseleave(function(){
    	$('.wphealthtracker-d3chart-exercise-distance-line-fromsandiego').each(function(){
    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		$(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
    	})
	});




	$('#wphealthtracker-d3chart-exercise-city-dot-la').mouseenter(function(){

    	$('.wphealthtracker-d3chart-readout-exercise').html('')
    	var distanceArray = [];
    	var cityArray = [];
    	var percArray = [];
    	$('.wphealthtracker-d3chart-exercise-distance-line-fromla').each(function(){
    		var offsettoanimateto = $(this).attr('data-offsettoanimateto')
    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		var straightlinedistance = $(this).attr('data-straightlinedistance')
    		var destcity = $(this).attr('data-destcity')
    		var temp1 = (offsettoreturnto * milesTravelled) / straightlinedistance;
    		temp1 = offsettoreturnto - temp1;

    		if(milesTravelled >=  straightlinedistance){
    			temp1 = offsettoanimateto;
    			percentage = 100;
    		} else {
    			percentage = ((milesTravelled/straightlinedistance) * 100).toFixed(2);
    		}

    		$(this).animate({'stroke-dashoffset':temp1},2000);

    		// Add to distance & city array
    		distanceArray.push(straightlinedistance)
    		cityArray.push(destcity)
    		percArray.push(percentage)
    	})

    	var rowHtml = '';
    	for (var i = cityArray.length - 1; i >= 0; i--) {

    		var congratsHtml = '';
    		if(percArray[i] == 100){
    			congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'happy.svg"/>'
    		} else {
    			congratsHtml = '';
    		}
    		rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
    	}

    	// Now build HTML for distance/dest. report
    	var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Los Angeles '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
    	$('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
	});

	$('#wphealthtracker-d3chart-exercise-city-dot-sandiego').mouseleave(function(){
    	$('.wphealthtracker-d3chart-exercise-distance-line-fromsandiego').each(function(){
    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		$(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
    	})
	});

	$('#wphealthtracker-d3chart-exercise-city-dot-la').mouseleave(function(){
    	$('.wphealthtracker-d3chart-exercise-distance-line-fromla').each(function(){

    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		$(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
    	})
	});

	
	// Hide the the spinner
    $('#wphealthtracker-spinner-d3-await-1').animate({'opacity':'0'}) 

    $('#wphealthtracker-chart-hover-message-exercise-distance').html('<p>'+wphealthtracker_php_variables.d3trans76+'</p>');



}

function wphealthtracker_exercise_d3_2(mydataEnergy) {

	// Set dimensions
	var margin = {
		top: 120,
		right: 40,
		left: 60,
		bottom: 100
	};

	var width = 550 - margin.right - margin.left;
	var height = 450 - margin.top - margin.bottom;

  	var svgEnergy = d3.select("#wphealthtracker-stats-actual-inner-d3-1-2")
  		.append("svg")
  			.attr('class','wphealthtracker-d3chart-topsvg')
  			.attr('id','wphealthtracker-d3chart-topsvg-energy')
  			.attr("width", width + margin.left + margin.right)
  			.attr("height", height + margin.top + margin.bottom)
  				.append("g")
  					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  	// Text label for the y axis
	svgEnergy.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("x", 0 - height / 2)
		.attr("class", "wphealthtracker-d3chart-axislabel")
		.attr("id", "wphealthtracker-d3chart-axislabel-energy")
		.style("text-anchor", "middle")
		.text(wphealthtracker_php_variables.d3trans69);

	// Set the ranges - the domain is specified inside of the function called when we load the data
	var xRangeEnergy = d3.scaleLinear().range([0, width]);
	var yRangeEnergy = d3.scaleLinear().range([height, 0]);
	var color = d3.scaleOrdinal(d3.schemeCategory10);

	// Set up the X and Y axis
	var xAxisEnergy = d3.axisBottom(xRangeEnergy);
	var yAxisEnergy = d3.axisLeft(yRangeEnergy).tickSize(-width);

	// Create function to parse dates into date objects
	var parseDate = d3.timeParse("%Y-%m-%d");
	var formatDate = d3.timeFormat("%Y-%m-%d");
	var bisectDate = d3.bisector(function (d) {
		return d.date;
	}).left;


	// Set the line attributes
	var line = d3.line().curve(d3.curveLinear).x(function (d) {
		return xRangeEnergy(d.date);
	}).y(function (d) {
		return yRangeEnergy(d.close);
	});

	// Get the data
	d3.csv("", function (error, data) {

		console.log('my data')
		console.log(mydataEnergy)

		// Using my own data instead of suppling a URL/File path to the first argument in the d3.csv() function above (instead, we just pass an empty string)
		dataEnergy = mydataEnergy;
		dataEnergy.forEach(function (d) {
		 	d.date = parseDate(d.date),
		 	Kilojoules = +d.Kilojoules, 
		 	Calories = +d.Calories;
		});

		// Sort data ascending - needed to get correct bisector results
		dataEnergy.sort(function (a, b) {
		  return a.date - b.date;
		});

		// Color domain
		color.domain(d3.keys(dataEnergy[0]).filter(function (key) {
		  return key !== "date";
		}));

		// Create Energy array 
		var energyValues = color.domain().map(function (name) {
		  return {
		    name: name,
		    values: dataEnergy.map(function (d) {
		      return { date: d.date, close: d[name] };
		    })
		  };
		});

		// Add domain ranges to the x and y scales
		xRangeEnergy.domain([d3.min(energyValues, function (c) {
		  return d3.min(c.values, function (v) {
		    return v.date;
		  });
		}), d3.max(energyValues, function (c) {
		  return d3.max(c.values, function (v) {
		    return v.date;
		  });
		})]);
		yRangeEnergy.domain([d3.min(energyValues, function (c) {
		  return d3.min(c.values, function (v) {
		    return 0;
		  });
		}), d3.max(energyValues, function (c) {
		  return d3.max(c.values, function (v) {
		    return v.close + v.close * 0.05;
		  });
		})]);

		// Add the y axis
		svgEnergy.append("g")
			.attr("class", "wphealthtracker-d3chart-yaxis-tick-holder")
			.attr("id", "wphealthtracker-d3chart-yaxis-tick-holder-energy")
			.attr("class", "y axis").call(yAxisEnergy); 

		// Append rectangle for capturing if mouse moves within area
		svgEnergy.append("rect")
			.attr("class", "wphealthtracker-mousemove-rect-energy")
			.attr("id", "wphealthtracker-mousemove-rect-energy")
			.attr("width", width)
			.attr("height", height)
			.attr("transform", "translate(0," + height + ")")
			.style("fill", "none")
			.style("pointer-events", "all")
			.on("mouseout", function () {
			  d3.select("#wphealthtracker-circle0-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-circle1-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-circle2-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-circle3-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-text0-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-text1-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-text2-energy").style("opacity", '0');
			  d3.select("#wphealthtracker-text3-energy").style("opacity", '0');
			  d3.select(".wphealthtracker-d3chart-mouse-line-energy").style("opacity", '0');
			  d3.selectAll(".wphealthtracker-d3chart-legendtextval-energy").text('');
			  d3.select("#wphealthtracker-d3chart-xaxislabel-top-energy").text('');
			}).on("mousemove", wpht_helper_d3_energy_mousemove);

		// Add the line groups
		var energyLines = svgEnergy.selectAll(".wphealthtracker-energy-lines-actual")
			.data(energyValues).enter()
			.append("g")
				.attr("class", "wphealthtracker-energy-lines-actual");

		// Add the energy paths
		energyLines.append("path").attr("id", function (d, i) {
		  return "wphealthtracker-d3chart-linepath-energy-" + i;
		}).attr("class", function (d, i) {
		  return "wphealthtracker-d3chart-line wphealthtracker-d3chart-line-energy wphealthtracker-d3chart-legendrect-energy-" + i;
		}).attr("d", function (d) {
		  return line(d.values);
		}).style("stroke", function (d) {
		  return color(d.name);
		}).on("mouseover", function (d, i) {

		  	d3.select(this).style('stroke-width',3);

			// For getting the Kilojoules/Calories value at associated position on line
			var mouse = d3.mouse(this);
			var xDate = xRangeEnergy.invert(mouse[0]),
			  bisect = d3.bisector(function (d) {
				return d.date;
			}).right;
			var beginning = 0,
			 end = energyLines[i].getTotalLength(),
			 target = null;

			while (true) {
				target = Math.floor((beginning + end) / 2);
				pos = energyLines[i].getPointAtLength(target);
				if ((target === end || target === beginning) && pos.x !== mouse[0]) {
				  break;
				}
				if (pos.x > mouse[0]) end = target;else if (pos.x < mouse[0]) beginning = target;else break; // Position found
			}

			var displayValue = yRangeEnergy.invert(pos.y).toFixed(2)

			// For formatting things for the Text area centered just above the chart
			xDate = new Date(xDate);
			xDate = wpht_helper_d3_energy_build_better_date(xDate);
			xDate = xDate+' - '+displayValue
			d3.select("#wphealthtracker-d3chart-xaxislabel-top-energy")
				.style('opacity',1)
				.text(xDate);

			// Loop through the per-day entries, if we don't match the selected value, hide things, otherwise, display the values
			for (j = 0; j < 2; j++) {
				if (i !== j) {
					d3.select("#wphealthtracker-d3chart-linepath-energy-" + j).style("opacity", 0.1);
					d3.select("#wphealthtracker-d3chart-legendrect-energy-"+j).style("opacity",0.1);
					d3.select("#wphealthtracker-d3chart-legendtextval-energy-"+j).text('');
				} else {
					d3.select("#wphealthtracker-d3chart-legendtextval-energy-"+j).text(displayValue);
				}
			};

		}).on("mouseout", function (d, i) {
		
		  d3.select(this).style('stroke-width',2);
		  for (j = 0; j < 2; j++) {
		    d3.select("#wphealthtracker-d3chart-linepath-energy-" + j).style("opacity", 1);
		    d3.select("#wphealthtracker-d3chart-legendrect-energy-"+j).style("opacity",1);
		  };
		  d3.selectAll(".wphealthtracker-d3chart-legendtextval-energy").text('');
		  d3.select("#wphealthtracker-d3chart-xaxislabel-top-energy").text('');

		});

		var mouseGEnergy = svgEnergy.append("g")
			.attr("class", "mouse-over-effects-energy");

		mouseGEnergy
			.append("path")
			.attr("class", "wphealthtracker-d3chart-mouse-line-energy")
			.attr("id", "wphealthtracker-d3chart-mouse-line-energy")
			.style("stroke", "black")
			.style("stroke-width", "1px")
			.style("opacity", "0");

		energyLines = document.getElementsByClassName('wphealthtracker-d3chart-line-energy');

		// Appending the 'mouse1, moues2, mouse3...' elements to facilitate the sliding black bar that moves with cursor
		var mouse1Energy = mouseGEnergy
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-energy");

		mouse1Energy
			.append("text")
			.attr("id", "wphealthtracker-text0-energy")
			.attr("transform", "translate(10,3)");

		mouse1Energy
			.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle-energy")
			.attr("id", "wphealthtracker-circle0-energy")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(31, 119, 180)");

		var mouse2 = mouseGEnergy
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-energy");

		mouse2.append("text")
			.attr("id", "wphealthtracker-text1-energy")
			.attr("transform", "translate(10,3)");

		mouse2.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle-energy")
			.attr("id", "wphealthtracker-circle1-energy")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(255, 127, 14)");

	

		// Add the Legend Text and Rects
		var legend = d3.select("#wphealthtracker-d3chart-legend-energy");

		// Kilojoules
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-energy")
			.attr('x',80)
			.attr('y',20)
			.text(wphealthtracker_php_variables.exercisetrans34);
		// Calories
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-energy")
			.attr('x',80)
			.attr('y',43)
			.text(wphealthtracker_php_variables.exercisetrans8)
		

		// Kilojoules Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-energy wphealthtracker-d3chart-legendrect-energy-0")
			.attr("id", "wphealthtracker-d3chart-legendrect-energy-0")
			.attr('x',50)
			.attr('y',7.5)
			.attr('fill','rgb(31, 119, 180)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-energy-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-energy, .wphealthtracker-d3chart-legendrect-energy').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')

		// Calories Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-energy wphealthtracker-d3chart-legendrect-energy-1")
			.attr("id", "wphealthtracker-d3chart-legendrect-energy-2")
			.attr('x',50)
			.attr('y',32.5)
			.attr('fill','rgb(255, 127, 14)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-energy-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-energy, .wphealthtracker-d3chart-legendrect-energy').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')

		// Kilojoules Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-energy")
			.attr("id", "wphealthtracker-d3chart-legendtextval-energy-0")
			.attr('x',0)
			.attr('y',20)
		// Calories Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-energy")
			.attr("id", "wphealthtracker-d3chart-legendtextval-energy-1")
			.attr('x',0)
			.attr('y',45)

		// Add the top text area just above the chart to display date/time/avlue
		svgEnergy.append("text")
			.attr("class", "wphealthtracker-d3chart-xaxislabel-top")
			.attr("id", "wphealthtracker-d3chart-xaxislabel-top-energy")
			.attr("transform", "translate(" + width / 2 + " ," + -15 + ")")
			.style("text-anchor", "middle")
			.style('opacity',0)
			.text('')

		function wpht_helper_d3_energy_build_better_date(date){
			date = String(date).split(' ');
			var time = wpht_helper_d3_energy_convert_to_am_pm(date[4]);
			return date[0]+' '+date[1]+' '+date[2]+' '+date[3]+' '+time;
		}

		function wpht_helper_d3_energy_convert_to_am_pm(time) {
		  var tmpArr = time.split(':'), time12;
			if(+tmpArr[0] == 12) {
				time12 = tmpArr[0] + ':' + tmpArr[1] + ' PM';
			} else {
				if(+tmpArr[0] == 00) {
					time12 = '12:' + tmpArr[1] + ' AM';
				} else {
					if(+tmpArr[0] > 12) {
						time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' PM';
					} else {
						time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
					}
				}
			}
			return time12;
		}

		// Mousemove function
		function wpht_helper_d3_energy_mousemove() {

			$('#wphealthtracker-chart-hover-message-energy').animate({
	           opacity:0
	        }, {
	           duration: 500,
	           complete: function() { 
	           		$(this).css({'pointer-events':'none','z-index':-99999})
	           } 
	        });

			var mouseEnergy = d3.mouse(this);
			d3.select("#wphealthtracker-d3chart-mouse-line-energy").attr("d", function (){
				var d = "M" + mouseEnergy[0] + "," + height;
				d += " " + mouseEnergy[0] + "," + 0;
				return d;
			});

			d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-energy").attr("transform", function (d, i){

				d3.select("#wphealthtracker-text0-energy").style("opacity", '1');
				d3.select("#wphealthtracker-text1-energy").style("opacity", '1');
				d3.select("#wphealthtracker-text2-energy").style("opacity", '1');
				d3.select("#wphealthtracker-text3-energy").style("opacity", '1');
				d3.select(".wphealthtracker-d3chart-mouse-line-energy").style("opacity", '1');

				// This if is to ensure we don't go over the number of individual data items contained within a day - without this if, this function would run an amount of times equal to how many days of data there are.
				if(i < energyLines.length){
					var xDate = xRangeEnergy.invert(mouseEnergy[0]),
					  bisect = d3.bisector(function (d) {
						return d.date;
					}).right;

					var beginning = 0,
					 end = energyLines[i].getTotalLength(),
					  target = null;

					while (true) {
						target = Math.floor((beginning + end) / 2);
						pos = energyLines[i].getPointAtLength(target);
						if ((target === end || target === beginning) && pos.x !== mouseEnergy[0]) {
						  break;
						}
						if (pos.x > mouseEnergy[0]) end = target;else if (pos.x < mouseEnergy[0]) beginning = target;else break; //position found
					}

					xDate = new Date(xDate);
					xDate = wpht_helper_d3_energy_build_better_date(xDate);
					d3.select("#wphealthtracker-d3chart-xaxislabel-top-energy")
						.style('opacity',1)
						.text(xDate);

					// Moving the Circles with the black bar
					d3.select(this).select('circle').style("opacity", '1');
					var displayValue = yRangeEnergy.invert(pos.y).toFixed(2);
					d3.select(this).select('text').text(displayValue);
					d3.select("#wphealthtracker-d3chart-legendtextval-energy-"+i).text(displayValue);

					return "translate(" + mouseEnergy[0] + "," + pos.y + ")";
				}
			});
	
		};

		// Hide the the spinner
    	$('#wphealthtracker-spinner-d3-await-2').animate({'opacity':'0'})

    	$('#wphealthtracker-chart-hover-message-energy').html('<p>'+wphealthtracker_php_variables.d3trans20+'</p>');
	});

}

function wphealthtracker_exercise_d3_3(d3Three){

	var donutData = d3Three;

    var donuts = new DonutCharts();
    donuts.create(donutData);

    $('#wphealthtracker-chart-hover-message-macro').css({'bottom':'0px'})

    $('#refresh-btn').on('click', function refresh() {
        donuts.update(genData);
    });

    function DonutCharts() {

	  	var charts = d3.select('#wphealthtracker-stats-actual-inner-d3-1-3');

	    var chart_m,
	        chart_r,
	        color = d3.scaleOrdinal(d3.schemeCategory10);

	    var getCatNames = function(dataset) {
	        var catNames = new Array();

	        for (var i = 0; i < dataset[0].data.length; i++) {
	            catNames.push(dataset[0].data[i].cat);
	        }

	        return catNames;
	    }

	    var createLegend = function(catNames) {
	        var legends = charts.select('.legend')
	                        .selectAll('g')
	                            .data(catNames)
	                        .enter().append('g')
	                            .attr('transform', function(d, i) {
	                                return 'translate(50, ' + (i * 20 + 20) + ')';
	                            });

	        legends.append('circle')
	            .attr('class', 'legend-icon')
	            .attr('r', 6)
	            .style('fill', function(d, i) {
	                return color(i);
	            })
	            .on('mouseover', function(d, i){
	            	d3.selectAll('.path'+i)
	            		.transition()
	                    .duration(500)
	                    .ease(d3.easeBounce)
	                    .attr('d', d3.arc()
	                        .innerRadius(chart_r * 0.7)
	                        .outerRadius(chart_r * 1.08)
	                    );
	            })
	            .on('mouseout', function(d, i){
	            	d3.selectAll('.path'+i)
	            		.transition()
	                    .duration(500)
	                    .ease(d3.easeBounce)
	                    .attr('d', d3.arc()
	                        .innerRadius(chart_r * 0.7)
	                        .outerRadius(chart_r)
	                    );
	            })

	        legends.append('text')
	            .attr('dx', '1em')
	            .attr('dy', '.3em')
	            .text(function(d) {
	                return d;
	            });
	    }

	    var createCenter = function(pie) {

	        var donuts = d3.selectAll('.donut');

	        // The circle displaying total data.
	        donuts.append("svg:circle")
	            .attr("r", chart_r * 0.6)
	            .style("fill", "#E7E7E7")
	            .on('mouseover', function(d, i) {
	            	console.log('mouseover1!')
	                d3.select(this)
	                    .transition()
	                    .attr("r", chart_r * 0.65);
	            })
	            .on('mouseout', function(d, i) {
	            	console.log('mouseout1!')
	                d3.select(this)
	                    .transition()
	                    .duration(500)
	                    .ease(d3.easeBounce)
	                    .attr("r", chart_r * 0.6);
	            })
	            .on('click', function(d, i) {
	                var paths = charts.selectAll('.clicked');
	                pathAnim(paths, 0);
	                paths.classed('clicked', false);
	                resetAllCenterText();
	            });

	        donuts.append('text')
	                .attr('class', 'center-txt type')
	                .attr('y', chart_r * -1.13)
	                .attr('text-anchor', 'middle')
	                .style('font-weight', 'bold')
	                .text(function(d, i) {
	                    return d.type;
	                });
	        donuts.append('text')
	                .attr('class', 'center-txt value')
	                .attr('text-anchor', 'middle');
	         donuts.append('text')
	                .attr('class', 'center-txt value2')
	                 .attr('y', chart_r * 0.16)
	                .attr('text-anchor', 'middle');
	        donuts.append('text')
	                .attr('class', 'center-txt percentage')
	                .attr('y', chart_r * 0.36)
	                .attr('text-anchor', 'middle')
	                .style('fill', '#A2A2A2');
	    }

	    var setCenterText = function(thisDonut) {
	        var sum = d3.sum(thisDonut.selectAll('.clicked').data(), function(d) {
	            return d.data.val;
	        });

	        thisDonut.select('.value')
	            .text(function(d) {
	                return (sum)? sum.toFixed(1) +' '+ d.unit
	                            : d.total.toFixed(1) +' '+ d.unit;
	            });

	        thisDonut.select('.value2')
	            .text('');

	        thisDonut.select('.percentage')
	            .text(function(d) {
	                return (sum)? (sum/d.total*100).toFixed(2) + '%'
	                            : '';
	            });
	    }

	    var resetAllCenterText = function() {
	        charts.selectAll('.value')
	            .text(function(d) {
	                return d.total.toFixed(1) +' '+ d.unit;
	            });
	        charts.selectAll('.percentage')
	            .text('');
	    }

	    var pathAnim = function(path, dir) {
	        switch(dir) {
	            case 0:
	                path.transition()
	                    .duration(500)
	                    .ease(d3.easeBounce)
	                    .attr('d', d3.arc()
	                        .innerRadius(chart_r * 0.7)
	                        .outerRadius(chart_r)
	                    );
	                break;

	            case 1:
	                path.transition()
	                    .attr('d', d3.arc()
	                        .innerRadius(chart_r * 0.7)
	                        .outerRadius(chart_r * 1.08)
	                    );
	                break;
	        }
	    }

	    var updateDonut = function() {

	    	console.log('updateDonut!')
	        var pie = d3.pie()
	                        .sort(null)
	                        .value(function(d) {
	                            return d.val;
	                        });

	        var arc = d3.arc()
	                        .innerRadius(chart_r * 0.7)
	                        .outerRadius(function() {
	                            return (d3.select(this).classed('clicked'))? chart_r * 1.08
	                                                                       : chart_r;
	                        });

	        // Start joining data with paths
	        var paths = charts.selectAll('.donut')
	                        .selectAll('path')
	                        .data(function(d, i) {
	                            return pie(d.data);
	                        });

	        paths
	            .transition()
	            .duration(1000)
	            .attr('d', arc);

	        paths.enter()
	            .append('svg:path')
	                .attr('d', arc)
	                .attr('class', function(d, i) {
		                return 'path'+i;
		            })
	                .style('fill', function(d, i) {
	                    return color(i);
	                })
	                .style('stroke', '#FFFFFF')
	                .on('mouseover', function(d, i, j) {
	                    pathAnim(d3.select(this), 1);

	                    var thisDonut = d3.select(this.parentNode);
	                    thisDonut.select('.value').text(function(donut_d) {
	                        return d.data.val.toFixed(1) +' '+ donut_d.unit;
	                    });
	                    thisDonut.select('.value2').text(function(donut_d) {
	                        return d.data.cat;
	                    });
	                    thisDonut.select('.percentage').text(function(donut_d) {
	                        return (d.data.val/donut_d.total*100).toFixed(2) + '%';
	                    });
	                })
			        .on('mouseout', function(d, i, j) {
	                    var thisPath = d3.select(this);
	                    if (!thisPath.classed('clicked')) {
	                        pathAnim(thisPath, 0);
	                    }
	                    var thisDonut = d3.select(this.parentNode);
	                    setCenterText(thisDonut);
	                })
			        .on('click', function(d, i, j) {
		                var thisDonut = d3.select(this.parentNode);

		                if (0 === thisDonut.selectAll('.clicked').length) {
		                    thisDonut.select('circle').on('click')();
		                }

		                var thisPath = d3.select(this);
		                var clicked = thisPath.classed('clicked');
		                pathAnim(thisPath, ~~(!clicked));
		                thisPath.classed('clicked', !clicked);

		                setCenterText(thisDonut);
		            });

	        paths.exit().remove();

	        resetAllCenterText();
	    }

	    this.create = function(dataset) {
	        var $charts = $('#wphealthtracker-stats-actual-inner-d3-1-3');
	        chart_m = $charts.innerWidth() / dataset.length / 2 * 0.14;
	        chart_r = $charts.innerWidth() / dataset.length / 2 * 0.85;

	        charts.append('svg')
	            .attr('class', 'legend')
	            .attr('width', '100%')
	            .attr('height', 100)
	            .attr('transform', 'translate(0, 20)');

	        var donut = charts.selectAll('.donut')
	                        .data(dataset)
	                    .enter().append('svg:svg')
	                        .attr('width', (chart_r + chart_m) * 2)
	                        .attr('height', (chart_r + chart_m) * 2)
	                        .style('padding-top', '20px')
	                    .append('svg:g')
	                        .attr('class', function(d, i) {
	                            return 'donut type' + i;
	                        })
	                        .attr('transform', 'translate(' + (chart_r+chart_m) + ',' + (chart_r+chart_m) + ')');

	        createLegend(getCatNames(dataset));
	        createCenter();

	        updateDonut();
	    }

	    this.update = function(dataset) {
	        // Assume no new categ of data enter
	        var donut = charts.selectAll(".donut")
	                    .data(dataset);

	        updateDonut();
	    }
	}

	/*
     * Returns a json-like object.
     */
    function genData() {

    	console.log(d3ThreeTwo[0])
        var type = d3ThreeTwo[0].type
        var unit = d3ThreeTwo[0].unit

        var catArray = [];
        for (var i = d3ThreeTwo[0].data.length - 1; i >= 0; i--) {
        	catArray.push(d3ThreeTwo[0].data[i].cat)
        }

        var valArray = [];
        for (var i = d3ThreeTwo[0].data.length - 1; i >= 0; i--) {
        	valArray.push(d3ThreeTwo[0].data[i].val)
        }


        var cat = catArray;
        var val = valArray;

        var dataset = new Array();

        for (var i = 0; i < type.length; i++) {
            var data = new Array();
            var total = 0;

            for (var j = 0; j < cat.length; j++) {
                total += val[j];
                data.push({
                    "cat": cat[j],
                    "val": val[j]
                });
            }

            dataset.push({
                "type": type[i],
                "unit": unit[i],
                "data": data,
                "total": total
            });
        }
        console.log('This is the Dataset')
        console.log(dataset)
        return dataset;
    }

	// Hide the the spinner
	$('#wphealthtracker-spinner-d3-await-3').animate({'opacity':'0'})

	$('#wphealthtracker-chart-hover-message-macro').html('<p>'+wphealthtracker_php_variables.d3trans72+'</p>');

}