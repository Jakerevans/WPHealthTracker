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

	var milesTravelled = 200000;

        	// San Diego to...
        	var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sandiego-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego');
            newLine.setAttribute('d','M40 158 L40 15');
            newLine.setAttribute('stroke-dasharray',142);
            newLine.setAttribute('stroke-dashoffset',142);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',142);
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
            newLine.setAttribute('stroke-dasharray',62);
            newLine.setAttribute('stroke-dashoffset',62);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',62);
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
            newLine.setAttribute('d','M30.5 143 L40 14');
            newLine.setAttribute('stroke-dasharray',127);
            newLine.setAttribute('stroke-dashoffset',127);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',127);
            newLine.setAttribute('data-straightlinedistance',961);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-la-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla');
            newLine.setAttribute('d','M30.5 143 L31 32');
            newLine.setAttribute('stroke-dasharray',126);
            newLine.setAttribute('stroke-dashoffset',126);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',126);
            newLine.setAttribute('data-straightlinedistance',826);
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
            newLine.setAttribute('data-straightlinedistance',357);
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
            newLine.setAttribute('data-straightlinedistance',348);
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
            newLine.setAttribute('data-straightlinedistance',580);
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
            newLine.setAttribute('data-straightlinedistance',831);
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
            newLine.setAttribute('data-straightlinedistance',1239);
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
            newLine.setAttribute('data-straightlinedistance',1372);
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
            newLine.setAttribute('data-straightlinedistance',1523);
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
            newLine.setAttribute('data-straightlinedistance',1744);
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
            newLine.setAttribute('data-straightlinedistance',1982);
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
            newLine.setAttribute('data-straightlinedistance',2338);
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
            newLine.setAttribute('data-straightlinedistance',2448);
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
            newLine.setAttribute('data-straightlinedistance',2297);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            // San Francisco to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 100 L40 14');
            newLine.setAttribute('stroke-dasharray',90);
            newLine.setAttribute('stroke-dashoffset',90);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',90);
            newLine.setAttribute('data-straightlinedistance',680);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 100 L31 32');
            newLine.setAttribute('stroke-dasharray',68);
            newLine.setAttribute('stroke-dashoffset',68);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',68);
            newLine.setAttribute('data-straightlinedistance',535);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103.5 L76 156.5');
            newLine.setAttribute('stroke-dasharray',80);
            newLine.setAttribute('stroke-dashoffset',80);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',80);
            newLine.setAttribute('data-straightlinedistance',654);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 104.5 l17 39');
            newLine.setAttribute('stroke-dasharray',42);
            newLine.setAttribute('stroke-dashoffset',42);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',42);
            newLine.setAttribute('data-straightlinedistance',348);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 104.5 l27.5 55');
            newLine.setAttribute('stroke-dasharray',60);
            newLine.setAttribute('stroke-dashoffset',60);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',60);
            newLine.setAttribute('data-straightlinedistance',459);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 102 l80 -6');
            newLine.setAttribute('stroke-dasharray',78);
            newLine.setAttribute('stroke-dashoffset',78);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',78);
            newLine.setAttribute('data-straightlinedistance',600);
            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l123 6');
            newLine.setAttribute('stroke-dasharray',124);
            newLine.setAttribute('stroke-dashoffset',124);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',124);
            newLine.setAttribute('data-straightlinedistance',948);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l180 70');
            newLine.setAttribute('stroke-dasharray',196);
            newLine.setAttribute('stroke-dashoffset',196);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',196);
            newLine.setAttribute('data-straightlinedistance',1483);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l194 99');
            newLine.setAttribute('stroke-dasharray',218);
            newLine.setAttribute('stroke-dashoffset',218);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',218);
            newLine.setAttribute('data-straightlinedistance',1644);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l200 -41');
            newLine.setAttribute('stroke-dasharray',206);
            newLine.setAttribute('stroke-dashoffset',206);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',206);
            newLine.setAttribute('data-straightlinedistance',1583);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 104 l240 -16');
            newLine.setAttribute('stroke-dasharray',242);
            newLine.setAttribute('stroke-dashoffset',242);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',242);
            newLine.setAttribute('data-straightlinedistance',1857);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l272 -19');
            newLine.setAttribute('stroke-dasharray',272);
            newLine.setAttribute('stroke-dashoffset',272);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',272);
            newLine.setAttribute('data-straightlinedistance',2089);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l316 122');
            newLine.setAttribute('stroke-dasharray',340);
            newLine.setAttribute('stroke-dashoffset',340);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',340);
            newLine.setAttribute('data-straightlinedistance',2594);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l340 -22');
            newLine.setAttribute('stroke-dasharray',340);
            newLine.setAttribute('stroke-dashoffset',340);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',340);
            newLine.setAttribute('data-straightlinedistance',2569);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-sanfrancisco-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco');
            newLine.setAttribute('d','M13.5 103 l320 4');
            newLine.setAttribute('stroke-dasharray',320);
            newLine.setAttribute('stroke-dashoffset',320);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',320);
            newLine.setAttribute('data-straightlinedistance',2438);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");



            // Denver to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 111 L40 14');
            newLine.setAttribute('stroke-dasharray',138);
            newLine.setAttribute('stroke-dashoffset',138);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',138);
            newLine.setAttribute('data-straightlinedistance',1021);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 110.5 L30 32');
            newLine.setAttribute('stroke-dasharray',134);
            newLine.setAttribute('stroke-dashoffset',134);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',134);
            newLine.setAttribute('data-straightlinedistance',981);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 108 L75 154');
            newLine.setAttribute('stroke-dasharray',80);
            newLine.setAttribute('stroke-dashoffset',80);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',80);
            newLine.setAttribute('data-straightlinedistance',596);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 108.5 L32 142.5');
            newLine.setAttribute('stroke-dasharray',114);
            newLine.setAttribute('stroke-dashoffset',114);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',114);
            newLine.setAttribute('data-straightlinedistance',831);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 108.5 L42 157');
            newLine.setAttribute('stroke-dasharray',112);
            newLine.setAttribute('stroke-dashoffset',112);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',112);
            newLine.setAttribute('data-straightlinedistance',834);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 109.5 L90 95.5');
            newLine.setAttribute('stroke-dasharray',52);
            newLine.setAttribute('stroke-dashoffset',52);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',52);
            newLine.setAttribute('data-straightlinedistance',371);
            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 109.5 L12 102.5');
            newLine.setAttribute('stroke-dasharray',128);
            newLine.setAttribute('stroke-dashoffset',128);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',128);
            newLine.setAttribute('data-straightlinedistance',948);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M140 111 L195 173');
            newLine.setAttribute('stroke-dasharray',84);
            newLine.setAttribute('stroke-dashoffset',84);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',84);
            newLine.setAttribute('data-straightlinedistance',663);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L210 205');
            newLine.setAttribute('stroke-dasharray',116);
            newLine.setAttribute('stroke-dashoffset',116);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',116);
            newLine.setAttribute('data-straightlinedistance',879);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L216 61');
            newLine.setAttribute('stroke-dasharray',92);
            newLine.setAttribute('stroke-dashoffset',92);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',92);
            newLine.setAttribute('data-straightlinedistance',699);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L258 87.5');
            newLine.setAttribute('stroke-dasharray',118);
            newLine.setAttribute('stroke-dashoffset',118);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',118);
            newLine.setAttribute('data-straightlinedistance',919);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L288 83.5');
            newLine.setAttribute('stroke-dasharray',150);
            newLine.setAttribute('stroke-dashoffset',150);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',150);
            newLine.setAttribute('data-straightlinedistance',1156);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L330 225.5');
            newLine.setAttribute('stroke-dasharray',226);
            newLine.setAttribute('stroke-dashoffset',226);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',226);
            newLine.setAttribute('data-straightlinedistance',1727);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L350 80.5');
            newLine.setAttribute('stroke-dasharray',216);
            newLine.setAttribute('stroke-dashoffset',216);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',216);
            newLine.setAttribute('data-straightlinedistance',1629);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-denver-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver');
            newLine.setAttribute('d','M138 109 L332 107.5');
            newLine.setAttribute('stroke-dasharray',196);
            newLine.setAttribute('stroke-dashoffset',196);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',196);
            newLine.setAttribute('data-straightlinedistance',1491);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            // Salt Lake City to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L40 14');
            newLine.setAttribute('stroke-dasharray',94);
            newLine.setAttribute('stroke-dashoffset',94);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',94);
            newLine.setAttribute('data-straightlinedistance',701);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L30 32');
            newLine.setAttribute('stroke-dasharray',86);
            newLine.setAttribute('stroke-dashoffset',86);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',86);
            newLine.setAttribute('data-straightlinedistance',634);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 99 L75 152');
            newLine.setAttribute('stroke-dasharray',58);
            newLine.setAttribute('stroke-dashoffset',58);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',58);
            newLine.setAttribute('data-straightlinedistance',506);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90, 96 L32 142.5');
            newLine.setAttribute('stroke-dasharray',76);
            newLine.setAttribute('stroke-dashoffset',76);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',76);
            newLine.setAttribute('data-straightlinedistance',580);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 97.5 L41 157');
            newLine.setAttribute('stroke-dasharray',78);
            newLine.setAttribute('stroke-dashoffset',78);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',78);
            newLine.setAttribute('data-straightlinedistance',628);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L138 109');
            newLine.setAttribute('stroke-dasharray',48);
            newLine.setAttribute('stroke-dashoffset',48);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',48);
            newLine.setAttribute('data-straightlinedistance',371);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L12 102.5');
            newLine.setAttribute('stroke-dasharray',78);
            newLine.setAttribute('stroke-dashoffset',78);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',78);
            newLine.setAttribute('data-straightlinedistance',600);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L195 173');
            newLine.setAttribute('stroke-dasharray',130);
            newLine.setAttribute('stroke-dashoffset',130);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',130);
            newLine.setAttribute('data-straightlinedistance',1000);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L210 205');
            newLine.setAttribute('stroke-dasharray',160);
            newLine.setAttribute('stroke-dashoffset',160);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',160);
            newLine.setAttribute('data-straightlinedistance',1200);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L216 61');
            newLine.setAttribute('stroke-dasharray',130);
            newLine.setAttribute('stroke-dashoffset',130);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',130);
            newLine.setAttribute('data-straightlinedistance',986);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L258 87.5');
            newLine.setAttribute('stroke-dasharray',164);
            newLine.setAttribute('stroke-dashoffset',164);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',164);
            newLine.setAttribute('data-straightlinedistance',1259);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L288 83.5');
            newLine.setAttribute('stroke-dasharray',196);
            newLine.setAttribute('stroke-dashoffset',196);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',196);
            newLine.setAttribute('data-straightlinedistance',1490);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L330 225.5');
            newLine.setAttribute('stroke-dasharray',274);
            newLine.setAttribute('stroke-dashoffset',274);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',274);
            newLine.setAttribute('data-straightlinedistance',2090);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L350 80.5');
            newLine.setAttribute('stroke-dasharray',264);
            newLine.setAttribute('stroke-dashoffset',264);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',264);
            newLine.setAttribute('data-straightlinedistance',1970);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-saltlakecity-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity');
            newLine.setAttribute('d','M90 96 L332 107.5');
            newLine.setAttribute('stroke-dasharray',244);
            newLine.setAttribute('stroke-dashoffset',244);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',244);
            newLine.setAttribute('data-straightlinedistance',1844);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");


            // Seattle to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L90 94');
            newLine.setAttribute('stroke-dasharray',96);
            newLine.setAttribute('stroke-dashoffset',96);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',96);
            newLine.setAttribute('data-straightlinedistance',701);
            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L32 30');
            newLine.setAttribute('stroke-dasharray',20);
            newLine.setAttribute('stroke-dashoffset',20);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',20);
            newLine.setAttribute('data-straightlinedistance',146);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L74 155');
            newLine.setAttribute('stroke-dasharray',144);
            newLine.setAttribute('stroke-dashoffset',144);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',144);
            newLine.setAttribute('data-straightlinedistance',1116);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L31 140');
            newLine.setAttribute('stroke-dasharray',130);
            newLine.setAttribute('stroke-dashoffset',130);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',130);
            newLine.setAttribute('data-straightlinedistance',961);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L40 155');
            newLine.setAttribute('stroke-dasharray',144);
            newLine.setAttribute('stroke-dashoffset',144);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',144);
            newLine.setAttribute('data-straightlinedistance',1065);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L138 109');
            newLine.setAttribute('stroke-dasharray',136);
            newLine.setAttribute('stroke-dashoffset',136);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',136);
            newLine.setAttribute('data-straightlinedistance',1021);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L13.5 100');
            newLine.setAttribute('stroke-dasharray',94);
            newLine.setAttribute('stroke-dashoffset',94);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',94);
            newLine.setAttribute('data-straightlinedistance',680);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L196 174');
            newLine.setAttribute('stroke-dasharray',224);
            newLine.setAttribute('stroke-dashoffset',224);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',224);
            newLine.setAttribute('data-straightlinedistance',1682);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L210 204');
            newLine.setAttribute('stroke-dasharray',254);
            newLine.setAttribute('stroke-dashoffset',254);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',254);
            newLine.setAttribute('data-straightlinedistance',1891);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L215 61');
            newLine.setAttribute('stroke-dasharray',182);
            newLine.setAttribute('stroke-dashoffset',182);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',182);
            newLine.setAttribute('data-straightlinedistance',1393);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L255 87');
            newLine.setAttribute('stroke-dasharray',226);
            newLine.setAttribute('stroke-dashoffset',226);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',226);
            newLine.setAttribute('data-straightlinedistance',1735);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L285 83');
            newLine.setAttribute('stroke-dasharray',256);
            newLine.setAttribute('stroke-dashoffset',256);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',256);
            newLine.setAttribute('data-straightlinedistance',1935);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L330 225.5');
            newLine.setAttribute('stroke-dasharray',360);
            newLine.setAttribute('stroke-dashoffset',360);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',360);
            newLine.setAttribute('data-straightlinedistance',2735);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L355 81');
            newLine.setAttribute('stroke-dasharray',320);
            newLine.setAttribute('stroke-dashoffset',320);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',320);
            newLine.setAttribute('data-straightlinedistance',2405);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-seattle-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle');
            newLine.setAttribute('d','M40 14 L333 107');
            newLine.setAttribute('stroke-dasharray',308);
            newLine.setAttribute('stroke-dashoffset',308);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',308);
            newLine.setAttribute('data-straightlinedistance',2324);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            // Portland to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L90 95');
            newLine.setAttribute('stroke-dasharray',88);
            newLine.setAttribute('stroke-dashoffset',88);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',88);
            newLine.setAttribute('data-straightlinedistance',634);

            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 34 L40.5 13');
            newLine.setAttribute('stroke-dasharray',22);
            newLine.setAttribute('stroke-dashoffset',22);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',22);
            newLine.setAttribute('data-straightlinedistance',146);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M31 34 L74.5 155');
            newLine.setAttribute('stroke-dasharray',128);
            newLine.setAttribute('stroke-dashoffset',128);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',128);
            newLine.setAttribute('data-straightlinedistance',1006);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M31 34 L30.5 145');
            newLine.setAttribute('stroke-dasharray',108);
            newLine.setAttribute('stroke-dashoffset',108);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',108);
            newLine.setAttribute('data-straightlinedistance',826);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M31 34 L40 155');
            newLine.setAttribute('stroke-dasharray',124);
            newLine.setAttribute('stroke-dashoffset',124);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',124);
            newLine.setAttribute('data-straightlinedistance',932);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L138 109');
            newLine.setAttribute('stroke-dasharray',146);
            newLine.setAttribute('stroke-dashoffset',146);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',146);
            newLine.setAttribute('data-straightlinedistance',981);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30.5 34 L13.5 100');
            newLine.setAttribute('stroke-dasharray',70);
            newLine.setAttribute('stroke-dashoffset',70);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',70);
            newLine.setAttribute('data-straightlinedistance',535);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L195 173.5');
            newLine.setAttribute('stroke-dasharray',218);
            newLine.setAttribute('stroke-dashoffset',218);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',218);
            newLine.setAttribute('data-straightlinedistance',1632);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L208 202');
            newLine.setAttribute('stroke-dasharray',246);
            newLine.setAttribute('stroke-dashoffset',246);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',246);
            newLine.setAttribute('data-straightlinedistance',1835);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L215 60.5');
            newLine.setAttribute('stroke-dasharray',188);
            newLine.setAttribute('stroke-dashoffset',188);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',188);
            newLine.setAttribute('data-straightlinedistance',1424);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L254 87');
            newLine.setAttribute('stroke-dasharray',232);
            newLine.setAttribute('stroke-dashoffset',232);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',232);
            newLine.setAttribute('data-straightlinedistance',1756);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L286 83.5');
            newLine.setAttribute('stroke-dasharray',262);
            newLine.setAttribute('stroke-dashoffset',262);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',262);
            newLine.setAttribute('data-straightlinedistance',1966);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L330 226');
            newLine.setAttribute('stroke-dasharray',358);
            newLine.setAttribute('stroke-dashoffset',358);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',358);
            newLine.setAttribute('data-straightlinedistance',2702);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L350 80');
            newLine.setAttribute('stroke-dasharray',326);
            newLine.setAttribute('stroke-dashoffset',326);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',326);
            newLine.setAttribute('data-straightlinedistance',2441);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-portland-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland');
            newLine.setAttribute('d','M30 32 L333 107');
            newLine.setAttribute('stroke-dasharray',312);
            newLine.setAttribute('stroke-dashoffset',312);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',312);
            newLine.setAttribute('data-straightlinedistance',2349);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            // Phoenix to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L91 95');
            newLine.setAttribute('stroke-dasharray',61);
            newLine.setAttribute('stroke-dashoffset',61);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',61);
            newLine.setAttribute('data-straightlinedistance',506);

            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 154 L40 13');
            newLine.setAttribute('stroke-dasharray',144);
            newLine.setAttribute('stroke-dashoffset',144);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',144);
            newLine.setAttribute('data-straightlinedistance',1116);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 154 L30 30');
            newLine.setAttribute('stroke-dasharray',128);
            newLine.setAttribute('stroke-dashoffset',128);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',128);
            newLine.setAttribute('data-straightlinedistance',1006);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L30.5 143');
            newLine.setAttribute('stroke-dasharray',45);
            newLine.setAttribute('stroke-dashoffset',45);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',45);
            newLine.setAttribute('data-straightlinedistance',357);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L40 158');
            newLine.setAttribute('stroke-dasharray',34);
            newLine.setAttribute('stroke-dashoffset',34);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',34);
            newLine.setAttribute('data-straightlinedistance',299);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L138 109');
            newLine.setAttribute('stroke-dasharray',79);
            newLine.setAttribute('stroke-dashoffset',79);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',79);
            newLine.setAttribute('data-straightlinedistance',586);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M75 156 L13 103');
            newLine.setAttribute('stroke-dasharray',82);
            newLine.setAttribute('stroke-dashoffset',82);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',82);
            newLine.setAttribute('data-straightlinedistance',654);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L195 173.5');
            newLine.setAttribute('stroke-dasharray',123);
            newLine.setAttribute('stroke-dashoffset',123);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',123);
            newLine.setAttribute('data-straightlinedistance',886);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L208 202');
            newLine.setAttribute('stroke-dasharray',143);
            newLine.setAttribute('stroke-dashoffset',143);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',143);
            newLine.setAttribute('data-straightlinedistance',1015);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L215 62');
            newLine.setAttribute('stroke-dasharray',171);
            newLine.setAttribute('stroke-dashoffset',171);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',171);
            newLine.setAttribute('data-straightlinedistance',1280);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L254 88');
            newLine.setAttribute('stroke-dasharray',193);
            newLine.setAttribute('stroke-dashoffset',193);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',193);
            newLine.setAttribute('data-straightlinedistance',1453);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L286 83.5');
            newLine.setAttribute('stroke-dasharray',224);
            newLine.setAttribute('stroke-dashoffset',224);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',224);
            newLine.setAttribute('data-straightlinedistance',1689);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L330 226');
            newLine.setAttribute('stroke-dasharray',266);
            newLine.setAttribute('stroke-dashoffset',266);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',266);
            newLine.setAttribute('data-straightlinedistance',1981);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L350 81');
            newLine.setAttribute('stroke-dasharray',288);
            newLine.setAttribute('stroke-dashoffset',288);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',288);
            newLine.setAttribute('data-straightlinedistance',2142);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-phoenix-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix');
            newLine.setAttribute('d','M74 155 L333 107');
            newLine.setAttribute('stroke-dasharray',264);
            newLine.setAttribute('stroke-dashoffset',264);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',264);
            newLine.setAttribute('data-straightlinedistance',1980);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");


            // Dallas to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L91 96');
            newLine.setAttribute('stroke-dasharray',130);
            newLine.setAttribute('stroke-dashoffset',130);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',130);
            newLine.setAttribute('data-straightlinedistance',1000);

            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M195 173.5 L39 13');
            newLine.setAttribute('stroke-dasharray',222);
            newLine.setAttribute('stroke-dashoffset',222);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',222);
            newLine.setAttribute('data-straightlinedistance',1682);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M195 173.5 L32 33.5');
            newLine.setAttribute('stroke-dasharray',216);
            newLine.setAttribute('stroke-dashoffset',216);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',216);
            newLine.setAttribute('data-straightlinedistance',1632);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L30.5 143');
            newLine.setAttribute('stroke-dasharray',168);
            newLine.setAttribute('stroke-dashoffset',168);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',168);
            newLine.setAttribute('data-straightlinedistance',1239);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L40 158');
            newLine.setAttribute('stroke-dasharray',156);
            newLine.setAttribute('stroke-dashoffset',156);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',156);
            newLine.setAttribute('data-straightlinedistance',1183);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 174 L138 109');
            newLine.setAttribute('stroke-dasharray',87);
            newLine.setAttribute('stroke-dashoffset',87);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',87);
            newLine.setAttribute('data-straightlinedistance',663);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L13 102.5');
            newLine.setAttribute('stroke-dasharray',196);
            newLine.setAttribute('stroke-dashoffset',196);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',196);
            newLine.setAttribute('data-straightlinedistance',1483);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L75 155');
            newLine.setAttribute('stroke-dasharray',123);
            newLine.setAttribute('stroke-dashoffset',123);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',123);
            newLine.setAttribute('data-straightlinedistance',886);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L208 202');
            newLine.setAttribute('stroke-dasharray',32);
            newLine.setAttribute('stroke-dashoffset',32);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',32);
            newLine.setAttribute('data-straightlinedistance',225);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M195.5 173.5 L216.5 60');
            newLine.setAttribute('stroke-dasharray',114);
            newLine.setAttribute('stroke-dashoffset',114);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',114);
            newLine.setAttribute('data-straightlinedistance',865);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L254.5 88');
            newLine.setAttribute('stroke-dasharray',104);
            newLine.setAttribute('stroke-dashoffset',104);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',104);
            newLine.setAttribute('data-straightlinedistance',806);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L286.5 83.5');
            newLine.setAttribute('stroke-dasharray',127);
            newLine.setAttribute('stroke-dashoffset',127);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',127);
            newLine.setAttribute('data-straightlinedistance',1000);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L330 226');
            newLine.setAttribute('stroke-dasharray',144);
            newLine.setAttribute('stroke-dashoffset',144);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',144);
            newLine.setAttribute('data-straightlinedistance',1111);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L350 82');
            newLine.setAttribute('stroke-dasharray',182);
            newLine.setAttribute('stroke-dashoffset',182);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',182);
            newLine.setAttribute('data-straightlinedistance',1372);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-dallas-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas');
            newLine.setAttribute('d','M196 173.5 L333 108');
            newLine.setAttribute('stroke-dasharray',153);
            newLine.setAttribute('stroke-dashoffset',153);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',153);
            newLine.setAttribute('data-straightlinedistance',1183);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");


            // Houston to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L91 96');
            newLine.setAttribute('stroke-dasharray',158);
            newLine.setAttribute('stroke-dashoffset',158);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',158);
            newLine.setAttribute('data-straightlinedistance',1200);

            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L39 13');
            newLine.setAttribute('stroke-dasharray',253);
            newLine.setAttribute('stroke-dashoffset',253);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',253);
            newLine.setAttribute('data-straightlinedistance',1891);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L32 33.5');
            newLine.setAttribute('stroke-dasharray',245);
            newLine.setAttribute('stroke-dashoffset',245);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',245);
            newLine.setAttribute('data-straightlinedistance',1835);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L30.5 143');
            newLine.setAttribute('stroke-dasharray',187);
            newLine.setAttribute('stroke-dashoffset',187);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',187);
            newLine.setAttribute('data-straightlinedistance',1372);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L40 158');
            newLine.setAttribute('stroke-dasharray',173);
            newLine.setAttribute('stroke-dashoffset',173);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',173);
            newLine.setAttribute('data-straightlinedistance',1303);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L138 109');
            newLine.setAttribute('stroke-dasharray',117);
            newLine.setAttribute('stroke-dashoffset',117);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',117);
            newLine.setAttribute('data-straightlinedistance',879);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L13 102.5');
            newLine.setAttribute('stroke-dasharray',219);
            newLine.setAttribute('stroke-dashoffset',219);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',219);
            newLine.setAttribute('data-straightlinedistance',1644);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L75 155');
            newLine.setAttribute('stroke-dasharray',142);
            newLine.setAttribute('stroke-dashoffset',142);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',142);
            newLine.setAttribute('data-straightlinedistance',1015);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M209 203 L196 176');
            newLine.setAttribute('stroke-dasharray',32);
            newLine.setAttribute('stroke-dashoffset',32);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',32);
            newLine.setAttribute('data-straightlinedistance',225);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208.5 203 L216.5 60');
            newLine.setAttribute('stroke-dasharray',142);
            newLine.setAttribute('stroke-dashoffset',142);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',142);
            newLine.setAttribute('data-straightlinedistance',1059);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L254.5 88');
            newLine.setAttribute('stroke-dasharray',124);
            newLine.setAttribute('stroke-dashoffset',124);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',124);
            newLine.setAttribute('data-straightlinedistance',943);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L286.5 83.5');
            newLine.setAttribute('stroke-dasharray',142);
            newLine.setAttribute('stroke-dashoffset',142);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',142);
            newLine.setAttribute('data-straightlinedistance',1107);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L330 226');
            newLine.setAttribute('stroke-dasharray',125);
            newLine.setAttribute('stroke-dashoffset',125);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',125);
            newLine.setAttribute('data-straightlinedistance',968);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L350 82');
            newLine.setAttribute('stroke-dasharray',189);
            newLine.setAttribute('stroke-dashoffset',189);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',189);
            newLine.setAttribute('data-straightlinedistance',1419);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-houston-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston');
            newLine.setAttribute('d','M208 203 L335 106');
            newLine.setAttribute('stroke-dasharray',158);
            newLine.setAttribute('stroke-dashoffset',158);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',158);
            newLine.setAttribute('data-straightlinedistance',1220);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");


            // Minneapolis to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L91 96');
            newLine.setAttribute('stroke-dasharray',132);
            newLine.setAttribute('stroke-dashoffset',132);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',132);
            newLine.setAttribute('data-straightlinedistance',986);

            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L39 14');
            newLine.setAttribute('stroke-dasharray',184);
            newLine.setAttribute('stroke-dashoffset',184);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',184);
            newLine.setAttribute('data-straightlinedistance',1393);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L32 33');
            newLine.setAttribute('stroke-dasharray',189);
            newLine.setAttribute('stroke-dashoffset',189);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',189);
            newLine.setAttribute('data-straightlinedistance',1424);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L30.5 143');
            newLine.setAttribute('stroke-dasharray',205);
            newLine.setAttribute('stroke-dashoffset',205);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',205);
            newLine.setAttribute('data-straightlinedistance',1523);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L40 158');
            newLine.setAttribute('stroke-dasharray',203);
            newLine.setAttribute('stroke-dashoffset',203);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',203);
            newLine.setAttribute('data-straightlinedistance',1532);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L138 109');
            newLine.setAttribute('stroke-dasharray',92);
            newLine.setAttribute('stroke-dashoffset',92);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',92);
            newLine.setAttribute('data-straightlinedistance',699);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L13 102.5');
            newLine.setAttribute('stroke-dasharray',209);
            newLine.setAttribute('stroke-dashoffset',209);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',209);
            newLine.setAttribute('data-straightlinedistance',1583);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L74 155');
            newLine.setAttribute('stroke-dasharray',172);
            newLine.setAttribute('stroke-dashoffset',172);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',172);
            newLine.setAttribute('data-straightlinedistance',1280);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M216.5 61 L195.5 176');
            newLine.setAttribute('stroke-dasharray',115);
            newLine.setAttribute('stroke-dashoffset',115);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',115);
            newLine.setAttribute('data-straightlinedistance',865);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M216.5 61 L209 200');
            newLine.setAttribute('stroke-dasharray',142);
            newLine.setAttribute('stroke-dashoffset',142);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',142);
            newLine.setAttribute('data-straightlinedistance',1059);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-chicago');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M217 61 L254.5 88');
            newLine.setAttribute('stroke-dasharray',46);
            newLine.setAttribute('stroke-dashoffset',46);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',46);
            newLine.setAttribute('data-straightlinedistance',355);
            newLine.setAttribute('data-destcity', 'Chicago');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 62 L286.5 83.5');
            newLine.setAttribute('stroke-dasharray',72);
            newLine.setAttribute('stroke-dashoffset',72);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',72);
            newLine.setAttribute('data-straightlinedistance',543);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M217 61 L330 226');
            newLine.setAttribute('stroke-dasharray',201);
            newLine.setAttribute('stroke-dashoffset',201);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',201);
            newLine.setAttribute('data-straightlinedistance',1516);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L350 80');
            newLine.setAttribute('stroke-dasharray',135);
            newLine.setAttribute('stroke-dashoffset',135);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',135);
            newLine.setAttribute('data-straightlinedistance',1017);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-minneapolis-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis');
            newLine.setAttribute('d','M218 61 L335 107.5');
            newLine.setAttribute('stroke-dasharray',125);
            newLine.setAttribute('stroke-dashoffset',125);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',125);
            newLine.setAttribute('data-straightlinedistance',932);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");


            // Chicago to...
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-saltlakecity');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L91 96');
            newLine.setAttribute('stroke-dasharray',164);
            newLine.setAttribute('stroke-dashoffset',164);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',164);
            newLine.setAttribute('data-straightlinedistance',1259);

            newLine.setAttribute('data-destcity', 'Salt Lake City');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-seattle');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L39 14');
            newLine.setAttribute('stroke-dasharray',227);
            newLine.setAttribute('stroke-dashoffset',227);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',227);
            newLine.setAttribute('data-straightlinedistance',1735);
            newLine.setAttribute('data-destcity', 'Seattle');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-portland');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L32 33');
            newLine.setAttribute('stroke-dasharray',230);
            newLine.setAttribute('stroke-dashoffset',230);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',230);
            newLine.setAttribute('data-straightlinedistance',1756);
            newLine.setAttribute('data-destcity', 'Portland');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-la');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L30.5 143');
            newLine.setAttribute('stroke-dasharray',231);
            newLine.setAttribute('stroke-dashoffset',231);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',231);
            newLine.setAttribute('data-straightlinedistance',1744);
            newLine.setAttribute('data-destcity', 'Los Angeles');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-sandiego');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L40 158');
            newLine.setAttribute('stroke-dasharray',226);
            newLine.setAttribute('stroke-dashoffset',226);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',226);
            newLine.setAttribute('data-straightlinedistance',1733);
            newLine.setAttribute('data-destcity', 'San Diego');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-denver');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L138 109.5');
            newLine.setAttribute('stroke-dasharray',119);
            newLine.setAttribute('stroke-dashoffset',119);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',119);
            newLine.setAttribute('data-straightlinedistance',919);
            newLine.setAttribute('data-destcity', 'Denver');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-sanfrancisco');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 87.5 L13 102.5');
            newLine.setAttribute('stroke-dasharray',243);
            newLine.setAttribute('stroke-dashoffset',243);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',243);
            newLine.setAttribute('data-straightlinedistance',1857);
            newLine.setAttribute('data-destcity', 'San Francisco');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-phoenix');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L74 155');
            newLine.setAttribute('stroke-dasharray',193);
            newLine.setAttribute('stroke-dashoffset',193);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',193);
            newLine.setAttribute('data-straightlinedistance',1453);
            newLine.setAttribute('data-destcity', 'Phoenix');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-dallas');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L194.5 176');
            newLine.setAttribute('stroke-dasharray',105);
            newLine.setAttribute('stroke-dashoffset',105);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',105);
            newLine.setAttribute('data-straightlinedistance',806);
            newLine.setAttribute('data-destcity', 'Dallas');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-houston');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L209.5 200');
            newLine.setAttribute('stroke-dasharray',124);
            newLine.setAttribute('stroke-dashoffset',124);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',124);
            newLine.setAttribute('data-straightlinedistance',943);
            newLine.setAttribute('data-destcity', 'Houston');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-minneapolis');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L216 60.5');
            newLine.setAttribute('stroke-dasharray',47);
            newLine.setAttribute('stroke-dashoffset',47);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',47);
            newLine.setAttribute('data-straightlinedistance',355);
            newLine.setAttribute('data-destcity', 'Minneapolis');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-detroit');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 87.5 L286.5 83.5');
            newLine.setAttribute('stroke-dasharray',32);
            newLine.setAttribute('stroke-dashoffset',32);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',32);
            newLine.setAttribute('data-straightlinedistance',237);
            newLine.setAttribute('data-destcity', 'Detroit');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-miami');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L330 226');
            newLine.setAttribute('stroke-dasharray',157);
            newLine.setAttribute('stroke-dashoffset',157);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',157);
            newLine.setAttribute('data-straightlinedistance',1193);
            newLine.setAttribute('data-destcity', 'Miami');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-newyork');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L350 80');
            newLine.setAttribute('stroke-dasharray',97);
            newLine.setAttribute('stroke-dashoffset',97);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',97);
            newLine.setAttribute('data-straightlinedistance',712);
            newLine.setAttribute('data-destcity', 'New York');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

            var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
            newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-chicago-washingtondc');
            newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago');
            newLine.setAttribute('d','M255 88 L335 107.5');
            newLine.setAttribute('stroke-dasharray',81);
            newLine.setAttribute('stroke-dashoffset',81);
            newLine.setAttribute('data-offsettoanimateto',0);
            newLine.setAttribute('data-offsettoreturnto',81);
            newLine.setAttribute('data-straightlinedistance',594);
            newLine.setAttribute('data-destcity', 'Washington D.C.');
            newLine.setAttribute('stroke-width',1);
            $(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");







// Detroit to...
var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-saltlakecity');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L91 96');
newLine.setAttribute('stroke-dasharray',164);
newLine.setAttribute('stroke-dashoffset',164);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',164);
newLine.setAttribute('data-straightlinedistance',1259);

newLine.setAttribute('data-destcity', 'Salt Lake City');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-seattle');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L39 14');
newLine.setAttribute('stroke-dasharray',227);
newLine.setAttribute('stroke-dashoffset',227);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',227);
newLine.setAttribute('data-straightlinedistance',1735);
newLine.setAttribute('data-destcity', 'Seattle');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-portland');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L32 33');
newLine.setAttribute('stroke-dasharray',230);
newLine.setAttribute('stroke-dashoffset',230);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',230);
newLine.setAttribute('data-straightlinedistance',1756);
newLine.setAttribute('data-destcity', 'Portland');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-la');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L30.5 143');
newLine.setAttribute('stroke-dasharray',231);
newLine.setAttribute('stroke-dashoffset',231);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',231);
newLine.setAttribute('data-straightlinedistance',1744);
newLine.setAttribute('data-destcity', 'Los Angeles');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-sandiego');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L40 158');
newLine.setAttribute('stroke-dasharray',226);
newLine.setAttribute('stroke-dashoffset',226);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',226);
newLine.setAttribute('data-straightlinedistance',1733);
newLine.setAttribute('data-destcity', 'San Diego');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-denver');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L138 109.5');
newLine.setAttribute('stroke-dasharray',119);
newLine.setAttribute('stroke-dashoffset',119);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',119);
newLine.setAttribute('data-straightlinedistance',919);
newLine.setAttribute('data-destcity', 'Denver');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-sanfrancisco');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 87.5 L13 102.5');
newLine.setAttribute('stroke-dasharray',243);
newLine.setAttribute('stroke-dashoffset',243);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',243);
newLine.setAttribute('data-straightlinedistance',1857);
newLine.setAttribute('data-destcity', 'San Francisco');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-phoenix');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L74 155');
newLine.setAttribute('stroke-dasharray',193);
newLine.setAttribute('stroke-dashoffset',193);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',193);
newLine.setAttribute('data-straightlinedistance',1453);
newLine.setAttribute('data-destcity', 'Phoenix');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-dallas');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L194.5 176');
newLine.setAttribute('stroke-dasharray',105);
newLine.setAttribute('stroke-dashoffset',105);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',105);
newLine.setAttribute('data-straightlinedistance',806);
newLine.setAttribute('data-destcity', 'Dallas');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-houston');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L209.5 200');
newLine.setAttribute('stroke-dasharray',124);
newLine.setAttribute('stroke-dashoffset',124);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',124);
newLine.setAttribute('data-straightlinedistance',943);
newLine.setAttribute('data-destcity', 'Houston');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-minneapolis');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L216 60.5');
newLine.setAttribute('stroke-dasharray',47);
newLine.setAttribute('stroke-dashoffset',47);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',47);
newLine.setAttribute('data-straightlinedistance',355);
newLine.setAttribute('data-destcity', 'Minneapolis');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-chicago');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 87.5 L286.5 83.5');
newLine.setAttribute('stroke-dasharray',32);
newLine.setAttribute('stroke-dashoffset',32);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',32);
newLine.setAttribute('data-straightlinedistance',237);
newLine.setAttribute('data-destcity', 'Chicago');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-miami');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L330 226');
newLine.setAttribute('stroke-dasharray',157);
newLine.setAttribute('stroke-dashoffset',157);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',157);
newLine.setAttribute('data-straightlinedistance',1193);
newLine.setAttribute('data-destcity', 'Miami');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-newyork');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L350 80');
newLine.setAttribute('stroke-dasharray',97);
newLine.setAttribute('stroke-dashoffset',97);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',97);
newLine.setAttribute('data-straightlinedistance',712);
newLine.setAttribute('data-destcity', 'New York');
newLine.setAttribute('stroke-width',1);
$(newLine).insertAfter("#wphealthtracker-d3chart-exercise-city-dot-sandiego");

var newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
newLine.setAttribute('id','wphealthtracker-d3chart-exercise-line-detroit-washingtondc');
newLine.setAttribute('class','wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit');
newLine.setAttribute('d','M255 88 L335 107.5');
newLine.setAttribute('stroke-dasharray',81);
newLine.setAttribute('stroke-dashoffset',81);
newLine.setAttribute('data-offsettoanimateto',0);
newLine.setAttribute('data-offsettoreturnto',81);
newLine.setAttribute('data-straightlinedistance',594);
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

        $(this).animate({'stroke-width':'5'}, 100)

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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

    		rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
    	}

    	// Now build HTML for distance/dest. report
    	var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>San Diego '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
    	$('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
	});

	$('#wphealthtracker-d3chart-exercise-city-dot-la').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

    		rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
    	}

    	// Now build HTML for distance/dest. report
    	var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Los Angeles '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
    	$('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
	});

    $('#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>San Francisco '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-denver').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromdenver').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Denver '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-saltlakecity').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Salt Lake City '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-seattle').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromseattle').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Seattle '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-portland').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromportland').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Seattle '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-phoenix').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromphoenix').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Phoenix '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-dallas').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromdallas').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Dallas '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-houston').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromhouston').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Houston '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-minneapolis').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromminneapolis').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Minneapolis '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-chicago').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromchicago').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Chicago '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });




    $('#wphealthtracker-d3chart-exercise-city-dot-detroit').mouseenter(function(){

        $(this).animate({'stroke-width':'5'}, 100)

        $('.wphealthtracker-d3chart-readout-exercise').html('')
        var distanceArray = [];
        var cityArray = [];
        var percArray = [];
        $('.wphealthtracker-d3chart-exercise-distance-line-fromdetroit').each(function(){
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

            // Calculate distances
            var miles = distanceArray[i];
            var kilometers = (miles * 1.60934).toFixed(0);

            rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>'+cityArray[i]+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+miles+' '+wphealthtracker_php_variables.commontrans53+' / '+kilometers+' '+wphealthtracker_php_variables.commontrans56+'</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>'+percArray[i]+'% '+wphealthtracker_php_variables.d3trans75+' '+congratsHtml+'</p></div></div>'
        }

        // Now build HTML for distance/dest. report
        var reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="'+wphealthtracker_php_variables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'route.svg"/><p>Detroit '+wphealthtracker_php_variables.d3trans77+'...</p></div>'+rowHtml+'<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
        $('.wphealthtracker-d3chart-readout-exercise').append(reportHtml).animate({'opacity':'1'}, 1000);
    });



	$('#wphealthtracker-d3chart-exercise-city-dot-sandiego').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

    	$('.wphealthtracker-d3chart-exercise-distance-line-fromsandiego').each(function(){
    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		$(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
    	})
	});

	$('#wphealthtracker-d3chart-exercise-city-dot-la').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

    	$('.wphealthtracker-d3chart-exercise-distance-line-fromla').each(function(){

    		var offsettoreturnto = $(this).attr('data-offsettoreturnto')
    		$(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
    	})
	});

    $('#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-denver').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromdenver').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-saltlakecity').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-seattle').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromseattle').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-portland').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromportland').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-phoenix').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromphoenix').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-dallas').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromdallas').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-houston').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromhouston').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-minneapolis').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromminneapolis').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-chicago').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromchicago').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

    $('#wphealthtracker-d3chart-exercise-city-dot-detroit').mouseleave(function(){

        $(this).animate({'stroke-width':'2'}, 100)

        $('.wphealthtracker-d3chart-exercise-distance-line-fromdetroit').each(function(){

            var offsettoreturnto = $(this).attr('data-offsettoreturnto')
            $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
        })
    });

	
	// Hide the the spinner
      $('#wphealthtracker-spinner-d3-await-1').animate({'opacity':'0'}) 

      $('#wphealthtracker-chart-hover-message-exercise-distance').html('<p>'+wphealthtracker_php_variables.d3trans76+'</p>');


      var timeouts = [];
      function wphealthtracker_travel_demo(){

            milesTravelled = 200000;

            $('#wphealthtracker-d3chart-exercise-city-dot-la').trigger('mouseenter');

            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-la').trigger('mouseleave');
            }, 4000) )

            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco').trigger('mouseenter');
            }, 5000) )
            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco').trigger('mouseleave');
            }, 8000) )

            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-denver').trigger('mouseenter');
            }, 9000) )
            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-denver').trigger('mouseleave');
            }, 12000) )

            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-portland').trigger('mouseenter');
            }, 13000) )
            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-portland').trigger('mouseleave');
            }, 16000) )

            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-houston').trigger('mouseenter');
            }, 17000) )
            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-houston').trigger('mouseleave');
            }, 20000) )

            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-seattle').trigger('mouseenter');
            }, 21000) )
            timeouts.push( setTimeout(function(){
                  $('#wphealthtracker-d3chart-exercise-city-dot-seattle').trigger('mouseleave');
                  wphealthtracker_travel_demo();
            }, 24000) )
      }

      $('#wphealthtracker-chart-hover-distance-demo-exercise').mouseenter(function(){

            $(this).find('p').css({'animation':'none','-webkit-animation':'none','-moz-animation':'none','-ms-animation':'none'})

            wphealthtracker_travel_demo();
      })

      $('#wphealthtracker-chart-hover-distance-demo-exercise').mouseleave(function(){

            $(this).find('p').css({'animation':'fadeInOut 3s 3s infinite','-webkit-animation':'fadeInOut 3s 3s infinite','-moz-animation':'fadeInOut 3s 3s infinite','-ms-animation':'fadeInOut 3s 3s infinite'})

            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }

            $('.wphealthtracker-d3chart-exercise-distance-line').each(function(){
                  var offsettoreturnto = $(this).attr('data-offsettoreturnto')
                  $(this).animate().stop().css({'stroke-dashoffset':offsettoreturnto},2000);
            })

            $('.wphealthtracker-d3chart-exercise-city-dot').each(function(){
                  $(this).css({'stroke-width':2});
            })

            //milesTravelled = disatncefromphpajax!!!!!!!!!!!!!!!!!!!!
      })
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