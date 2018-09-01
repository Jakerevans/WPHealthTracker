/**
 * JavaScript Functions - d3-exercise-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

'use strict';

function wphealthtrackerExerciseD3One( milesTravelledData, $ ) {

	var milesTravelled = parseFloat( milesTravelledData );
	var timeouts = [];

	// San Diego to...
	var newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 L40 15' );
	newLine.setAttribute( 'stroke-dasharray', 142 );
	newLine.setAttribute( 'stroke-dashoffset', 142 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 142 );
	newLine.setAttribute( 'data-straightlinedistance', 1065 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 L31 32' );
	newLine.setAttribute( 'stroke-dasharray', 126 );
	newLine.setAttribute( 'stroke-dashoffset', 126 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 126 );
	newLine.setAttribute( 'data-straightlinedistance', 932 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 L72 155' );
	newLine.setAttribute( 'stroke-dasharray', 33 );
	newLine.setAttribute( 'stroke-dashoffset', 33 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 33 );
	newLine.setAttribute( 'data-straightlinedistance', 299 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l-27.5 -56' );
	newLine.setAttribute( 'stroke-dasharray', 62 );
	newLine.setAttribute( 'stroke-dashoffset', 62 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 62 );
	newLine.setAttribute( 'data-straightlinedistance', 459 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l-10.5 -16' );
	newLine.setAttribute( 'stroke-dasharray', 18 );
	newLine.setAttribute( 'stroke-dashoffset', 18 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 18 );
	newLine.setAttribute( 'data-straightlinedistance', 112 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l50.5 -61' );
	newLine.setAttribute( 'stroke-dasharray', 80 );
	newLine.setAttribute( 'stroke-dashoffset', 80 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 80 );
	newLine.setAttribute( 'data-straightlinedistance', 628 );
	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l97 -48' );
	newLine.setAttribute( 'stroke-dasharray', 110 );
	newLine.setAttribute( 'stroke-dashoffset', 110 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 110 );
	newLine.setAttribute( 'data-straightlinedistance', 834 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l155 15.5' );
	newLine.setAttribute( 'stroke-dasharray', 155 );
	newLine.setAttribute( 'stroke-dashoffset', 155 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 155 );
	newLine.setAttribute( 'data-straightlinedistance', 1183 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l167 44' );
	newLine.setAttribute( 'stroke-dasharray', 174 );
	newLine.setAttribute( 'stroke-dashoffset', 174 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 174 );
	newLine.setAttribute( 'data-straightlinedistance', 1303 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l176 -96.5' );
	newLine.setAttribute( 'stroke-dasharray', 200 );
	newLine.setAttribute( 'stroke-dashoffset', 200 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 200 );
	newLine.setAttribute( 'data-straightlinedistance', 1532 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l212 -69.5' );
	newLine.setAttribute( 'stroke-dasharray', 225 );
	newLine.setAttribute( 'stroke-dashoffset', 225 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 225 );
	newLine.setAttribute( 'data-straightlinedistance', 1733 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l246 -74' );
	newLine.setAttribute( 'stroke-dasharray', 256 );
	newLine.setAttribute( 'stroke-dashoffset', 256 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 256 );
	newLine.setAttribute( 'data-straightlinedistance', 1971 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l288 67' );
	newLine.setAttribute( 'stroke-dasharray', 298 );
	newLine.setAttribute( 'stroke-dashoffset', 298 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 298 );
	newLine.setAttribute( 'data-straightlinedistance', 2271 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l312 -77.5' );
	newLine.setAttribute( 'stroke-dasharray', 322 );
	newLine.setAttribute( 'stroke-dashoffset', 322 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 322 );
	newLine.setAttribute( 'data-straightlinedistance', 2431 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sandiego-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsandiego' );
	newLine.setAttribute( 'd', 'M40 158 l292 -50' );
	newLine.setAttribute( 'stroke-dasharray', 297 );
	newLine.setAttribute( 'stroke-dashoffset', 297 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 297 );
	newLine.setAttribute( 'data-straightlinedistance', 2272 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Los Angeles to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 L40 14' );
	newLine.setAttribute( 'stroke-dasharray', 127 );
	newLine.setAttribute( 'stroke-dashoffset', 127 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 127 );
	newLine.setAttribute( 'data-straightlinedistance', 961 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 L31 32' );
	newLine.setAttribute( 'stroke-dasharray', 126 );
	newLine.setAttribute( 'stroke-dashoffset', 126 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 126 );
	newLine.setAttribute( 'data-straightlinedistance', 826 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 L73 154.5' );
	newLine.setAttribute( 'stroke-dasharray', 44 );
	newLine.setAttribute( 'stroke-dashoffset', 44 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 44 );
	newLine.setAttribute( 'data-straightlinedistance', 357 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l-17.5 -40' );
	newLine.setAttribute( 'stroke-dasharray', 43 );
	newLine.setAttribute( 'stroke-dashoffset', 43 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 43 );
	newLine.setAttribute( 'data-straightlinedistance', 348 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l10.5 16' );
	newLine.setAttribute( 'stroke-dasharray', 17 );
	newLine.setAttribute( 'stroke-dashoffset', 17 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 17 );
	newLine.setAttribute( 'data-straightlinedistance', 112 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l60 -46.5' );
	newLine.setAttribute( 'stroke-dasharray', 74 );
	newLine.setAttribute( 'stroke-dashoffset', 74 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 74 );
	newLine.setAttribute( 'data-straightlinedistance', 580 );
	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l110 -34.5' );
	newLine.setAttribute( 'stroke-dasharray', 112 );
	newLine.setAttribute( 'stroke-dashoffset', 112 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 112 );
	newLine.setAttribute( 'data-straightlinedistance', 831 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l165 30.5' );
	newLine.setAttribute( 'stroke-dasharray', 168 );
	newLine.setAttribute( 'stroke-dashoffset', 168 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 168 );
	newLine.setAttribute( 'data-straightlinedistance', 1239 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l176 58.5' );
	newLine.setAttribute( 'stroke-dasharray', 186 );
	newLine.setAttribute( 'stroke-dashoffset', 186 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 186 );
	newLine.setAttribute( 'data-straightlinedistance', 1372 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l185 -81.5' );
	newLine.setAttribute( 'stroke-dasharray', 202 );
	newLine.setAttribute( 'stroke-dashoffset', 202 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 202 );
	newLine.setAttribute( 'data-straightlinedistance', 1523 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l222 -55' );
	newLine.setAttribute( 'stroke-dasharray', 230 );
	newLine.setAttribute( 'stroke-dashoffset', 230 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 230 );
	newLine.setAttribute( 'data-straightlinedistance', 1744 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l254 -58.5' );
	newLine.setAttribute( 'stroke-dasharray', 262 );
	newLine.setAttribute( 'stroke-dashoffset', 262 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 262 );
	newLine.setAttribute( 'data-straightlinedistance', 1982 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l300 82.5' );
	newLine.setAttribute( 'stroke-dasharray', 312 );
	newLine.setAttribute( 'stroke-dashoffset', 312 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 312 );
	newLine.setAttribute( 'data-straightlinedistance', 2338 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M31.5 143 l320 -62' );
	newLine.setAttribute( 'stroke-dasharray', 326 );
	newLine.setAttribute( 'stroke-dashoffset', 326 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 326 );
	newLine.setAttribute( 'data-straightlinedistance', 2448 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-la-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromla' );
	newLine.setAttribute( 'd', 'M30.5 143 l302 -35' );
	newLine.setAttribute( 'stroke-dasharray', 304 );
	newLine.setAttribute( 'stroke-dashoffset', 304 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 304 );
	newLine.setAttribute( 'data-straightlinedistance', 2297 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// San Francisco to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 100 L40 14' );
	newLine.setAttribute( 'stroke-dasharray', 90 );
	newLine.setAttribute( 'stroke-dashoffset', 90 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 90 );
	newLine.setAttribute( 'data-straightlinedistance', 680 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 100 L31 32' );
	newLine.setAttribute( 'stroke-dasharray', 68 );
	newLine.setAttribute( 'stroke-dashoffset', 68 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 68 );
	newLine.setAttribute( 'data-straightlinedistance', 535 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103.5 L76 156.5' );
	newLine.setAttribute( 'stroke-dasharray', 80 );
	newLine.setAttribute( 'stroke-dashoffset', 80 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 80 );
	newLine.setAttribute( 'data-straightlinedistance', 654 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 104.5 l17 39' );
	newLine.setAttribute( 'stroke-dasharray', 42 );
	newLine.setAttribute( 'stroke-dashoffset', 42 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 42 );
	newLine.setAttribute( 'data-straightlinedistance', 348 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 104.5 l27.5 55' );
	newLine.setAttribute( 'stroke-dasharray', 60 );
	newLine.setAttribute( 'stroke-dashoffset', 60 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 60 );
	newLine.setAttribute( 'data-straightlinedistance', 459 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 102 l80 -6' );
	newLine.setAttribute( 'stroke-dasharray', 78 );
	newLine.setAttribute( 'stroke-dashoffset', 78 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 78 );
	newLine.setAttribute( 'data-straightlinedistance', 600 );
	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l123 6' );
	newLine.setAttribute( 'stroke-dasharray', 124 );
	newLine.setAttribute( 'stroke-dashoffset', 124 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 124 );
	newLine.setAttribute( 'data-straightlinedistance', 948 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l180 70' );
	newLine.setAttribute( 'stroke-dasharray', 196 );
	newLine.setAttribute( 'stroke-dashoffset', 196 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 196 );
	newLine.setAttribute( 'data-straightlinedistance', 1483 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l194 99' );
	newLine.setAttribute( 'stroke-dasharray', 218 );
	newLine.setAttribute( 'stroke-dashoffset', 218 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 218 );
	newLine.setAttribute( 'data-straightlinedistance', 1644 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l200 -41' );
	newLine.setAttribute( 'stroke-dasharray', 206 );
	newLine.setAttribute( 'stroke-dashoffset', 206 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 206 );
	newLine.setAttribute( 'data-straightlinedistance', 1583 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 104 l240 -16' );
	newLine.setAttribute( 'stroke-dasharray', 242 );
	newLine.setAttribute( 'stroke-dashoffset', 242 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 242 );
	newLine.setAttribute( 'data-straightlinedistance', 1857 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l272 -19' );
	newLine.setAttribute( 'stroke-dasharray', 272 );
	newLine.setAttribute( 'stroke-dashoffset', 272 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 272 );
	newLine.setAttribute( 'data-straightlinedistance', 2089 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l316 122' );
	newLine.setAttribute( 'stroke-dasharray', 340 );
	newLine.setAttribute( 'stroke-dashoffset', 340 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 340 );
	newLine.setAttribute( 'data-straightlinedistance', 2594 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l340 -22' );
	newLine.setAttribute( 'stroke-dasharray', 340 );
	newLine.setAttribute( 'stroke-dashoffset', 340 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 340 );
	newLine.setAttribute( 'data-straightlinedistance', 2569 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-sanfrancisco-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' );
	newLine.setAttribute( 'd', 'M13.5 103 l320 4' );
	newLine.setAttribute( 'stroke-dasharray', 320 );
	newLine.setAttribute( 'stroke-dashoffset', 320 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 320 );
	newLine.setAttribute( 'data-straightlinedistance', 2438 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Denver to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 111 L40 14' );
	newLine.setAttribute( 'stroke-dasharray', 138 );
	newLine.setAttribute( 'stroke-dashoffset', 138 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 138 );
	newLine.setAttribute( 'data-straightlinedistance', 1021 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 110.5 L30 32' );
	newLine.setAttribute( 'stroke-dasharray', 134 );
	newLine.setAttribute( 'stroke-dashoffset', 134 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 134 );
	newLine.setAttribute( 'data-straightlinedistance', 981 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 108 L75 154' );
	newLine.setAttribute( 'stroke-dasharray', 80 );
	newLine.setAttribute( 'stroke-dashoffset', 80 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 80 );
	newLine.setAttribute( 'data-straightlinedistance', 596 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 108.5 L32 142.5' );
	newLine.setAttribute( 'stroke-dasharray', 114 );
	newLine.setAttribute( 'stroke-dashoffset', 114 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 114 );
	newLine.setAttribute( 'data-straightlinedistance', 831 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 108.5 L42 157' );
	newLine.setAttribute( 'stroke-dasharray', 112 );
	newLine.setAttribute( 'stroke-dashoffset', 112 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 112 );
	newLine.setAttribute( 'data-straightlinedistance', 834 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 109.5 L90 95.5' );
	newLine.setAttribute( 'stroke-dasharray', 52 );
	newLine.setAttribute( 'stroke-dashoffset', 52 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 52 );
	newLine.setAttribute( 'data-straightlinedistance', 371 );
	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 109.5 L12 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 128 );
	newLine.setAttribute( 'stroke-dashoffset', 128 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 128 );
	newLine.setAttribute( 'data-straightlinedistance', 948 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M140 111 L195 173' );
	newLine.setAttribute( 'stroke-dasharray', 84 );
	newLine.setAttribute( 'stroke-dashoffset', 84 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 84 );
	newLine.setAttribute( 'data-straightlinedistance', 663 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L210 205' );
	newLine.setAttribute( 'stroke-dasharray', 116 );
	newLine.setAttribute( 'stroke-dashoffset', 116 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 116 );
	newLine.setAttribute( 'data-straightlinedistance', 879 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L216 61' );
	newLine.setAttribute( 'stroke-dasharray', 92 );
	newLine.setAttribute( 'stroke-dashoffset', 92 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 92 );
	newLine.setAttribute( 'data-straightlinedistance', 699 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L258 87.5' );
	newLine.setAttribute( 'stroke-dasharray', 118 );
	newLine.setAttribute( 'stroke-dashoffset', 118 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 118 );
	newLine.setAttribute( 'data-straightlinedistance', 919 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L288 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 150 );
	newLine.setAttribute( 'stroke-dashoffset', 150 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 150 );
	newLine.setAttribute( 'data-straightlinedistance', 1156 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L330 225.5' );
	newLine.setAttribute( 'stroke-dasharray', 226 );
	newLine.setAttribute( 'stroke-dashoffset', 226 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 226 );
	newLine.setAttribute( 'data-straightlinedistance', 1727 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L350 80.5' );
	newLine.setAttribute( 'stroke-dasharray', 216 );
	newLine.setAttribute( 'stroke-dashoffset', 216 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 216 );
	newLine.setAttribute( 'data-straightlinedistance', 1629 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-denver-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdenver' );
	newLine.setAttribute( 'd', 'M138 109 L332 107.5' );
	newLine.setAttribute( 'stroke-dasharray', 196 );
	newLine.setAttribute( 'stroke-dashoffset', 196 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 196 );
	newLine.setAttribute( 'data-straightlinedistance', 1491 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Salt Lake City to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L40 14' );
	newLine.setAttribute( 'stroke-dasharray', 94 );
	newLine.setAttribute( 'stroke-dashoffset', 94 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 94 );
	newLine.setAttribute( 'data-straightlinedistance', 701 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L30 32' );
	newLine.setAttribute( 'stroke-dasharray', 86 );
	newLine.setAttribute( 'stroke-dashoffset', 86 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 86 );
	newLine.setAttribute( 'data-straightlinedistance', 634 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 99 L75 152' );
	newLine.setAttribute( 'stroke-dasharray', 58 );
	newLine.setAttribute( 'stroke-dashoffset', 58 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 58 );
	newLine.setAttribute( 'data-straightlinedistance', 506 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90, 96 L32 142.5' );
	newLine.setAttribute( 'stroke-dasharray', 76 );
	newLine.setAttribute( 'stroke-dashoffset', 76 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 76 );
	newLine.setAttribute( 'data-straightlinedistance', 580 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 97.5 L41 157' );
	newLine.setAttribute( 'stroke-dasharray', 78 );
	newLine.setAttribute( 'stroke-dashoffset', 78 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 78 );
	newLine.setAttribute( 'data-straightlinedistance', 628 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 48 );
	newLine.setAttribute( 'stroke-dashoffset', 48 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 48 );
	newLine.setAttribute( 'data-straightlinedistance', 371 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L12 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 78 );
	newLine.setAttribute( 'stroke-dashoffset', 78 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 78 );
	newLine.setAttribute( 'data-straightlinedistance', 600 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L195 173' );
	newLine.setAttribute( 'stroke-dasharray', 130 );
	newLine.setAttribute( 'stroke-dashoffset', 130 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 130 );
	newLine.setAttribute( 'data-straightlinedistance', 1000 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L210 205' );
	newLine.setAttribute( 'stroke-dasharray', 160 );
	newLine.setAttribute( 'stroke-dashoffset', 160 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 160 );
	newLine.setAttribute( 'data-straightlinedistance', 1200 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L216 61' );
	newLine.setAttribute( 'stroke-dasharray', 130 );
	newLine.setAttribute( 'stroke-dashoffset', 130 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 130 );
	newLine.setAttribute( 'data-straightlinedistance', 986 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L258 87.5' );
	newLine.setAttribute( 'stroke-dasharray', 164 );
	newLine.setAttribute( 'stroke-dashoffset', 164 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 164 );
	newLine.setAttribute( 'data-straightlinedistance', 1259 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L288 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 196 );
	newLine.setAttribute( 'stroke-dashoffset', 196 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 196 );
	newLine.setAttribute( 'data-straightlinedistance', 1490 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L330 225.5' );
	newLine.setAttribute( 'stroke-dasharray', 274 );
	newLine.setAttribute( 'stroke-dashoffset', 274 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 274 );
	newLine.setAttribute( 'data-straightlinedistance', 2090 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L350 80.5' );
	newLine.setAttribute( 'stroke-dasharray', 264 );
	newLine.setAttribute( 'stroke-dashoffset', 264 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 264 );
	newLine.setAttribute( 'data-straightlinedistance', 1970 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-saltlakecity-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' );
	newLine.setAttribute( 'd', 'M90 96 L332 107.5' );
	newLine.setAttribute( 'stroke-dasharray', 244 );
	newLine.setAttribute( 'stroke-dashoffset', 244 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 244 );
	newLine.setAttribute( 'data-straightlinedistance', 1844 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );


	// Seattle to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L90 94' );
	newLine.setAttribute( 'stroke-dasharray', 96 );
	newLine.setAttribute( 'stroke-dashoffset', 96 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 96 );
	newLine.setAttribute( 'data-straightlinedistance', 701 );
	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L32 30' );
	newLine.setAttribute( 'stroke-dasharray', 20 );
	newLine.setAttribute( 'stroke-dashoffset', 20 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 20 );
	newLine.setAttribute( 'data-straightlinedistance', 146 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 144 );
	newLine.setAttribute( 'stroke-dashoffset', 144 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 144 );
	newLine.setAttribute( 'data-straightlinedistance', 1116 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L31 140' );
	newLine.setAttribute( 'stroke-dasharray', 130 );
	newLine.setAttribute( 'stroke-dashoffset', 130 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 130 );
	newLine.setAttribute( 'data-straightlinedistance', 961 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L40 155' );
	newLine.setAttribute( 'stroke-dasharray', 144 );
	newLine.setAttribute( 'stroke-dashoffset', 144 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 144 );
	newLine.setAttribute( 'data-straightlinedistance', 1065 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 136 );
	newLine.setAttribute( 'stroke-dashoffset', 136 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 136 );
	newLine.setAttribute( 'data-straightlinedistance', 1021 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L13.5 100' );
	newLine.setAttribute( 'stroke-dasharray', 94 );
	newLine.setAttribute( 'stroke-dashoffset', 94 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 94 );
	newLine.setAttribute( 'data-straightlinedistance', 680 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L196 174' );
	newLine.setAttribute( 'stroke-dasharray', 224 );
	newLine.setAttribute( 'stroke-dashoffset', 224 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 224 );
	newLine.setAttribute( 'data-straightlinedistance', 1682 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L210 204' );
	newLine.setAttribute( 'stroke-dasharray', 254 );
	newLine.setAttribute( 'stroke-dashoffset', 254 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 254 );
	newLine.setAttribute( 'data-straightlinedistance', 1891 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L215 61' );
	newLine.setAttribute( 'stroke-dasharray', 182 );
	newLine.setAttribute( 'stroke-dashoffset', 182 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 182 );
	newLine.setAttribute( 'data-straightlinedistance', 1393 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L255 87' );
	newLine.setAttribute( 'stroke-dasharray', 226 );
	newLine.setAttribute( 'stroke-dashoffset', 226 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 226 );
	newLine.setAttribute( 'data-straightlinedistance', 1735 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L285 83' );
	newLine.setAttribute( 'stroke-dasharray', 256 );
	newLine.setAttribute( 'stroke-dashoffset', 256 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 256 );
	newLine.setAttribute( 'data-straightlinedistance', 1935 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L330 225.5' );
	newLine.setAttribute( 'stroke-dasharray', 360 );
	newLine.setAttribute( 'stroke-dashoffset', 360 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 360 );
	newLine.setAttribute( 'data-straightlinedistance', 2735 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L355 81' );
	newLine.setAttribute( 'stroke-dasharray', 320 );
	newLine.setAttribute( 'stroke-dashoffset', 320 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 320 );
	newLine.setAttribute( 'data-straightlinedistance', 2405 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-seattle-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromseattle' );
	newLine.setAttribute( 'd', 'M40 14 L333 107' );
	newLine.setAttribute( 'stroke-dasharray', 308 );
	newLine.setAttribute( 'stroke-dashoffset', 308 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 308 );
	newLine.setAttribute( 'data-straightlinedistance', 2324 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Portland to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L90 95' );
	newLine.setAttribute( 'stroke-dasharray', 88 );
	newLine.setAttribute( 'stroke-dashoffset', 88 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 88 );
	newLine.setAttribute( 'data-straightlinedistance', 634 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 34 L40.5 13' );
	newLine.setAttribute( 'stroke-dasharray', 22 );
	newLine.setAttribute( 'stroke-dashoffset', 22 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 22 );
	newLine.setAttribute( 'data-straightlinedistance', 146 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M31 34 L74.5 155' );
	newLine.setAttribute( 'stroke-dasharray', 128 );
	newLine.setAttribute( 'stroke-dashoffset', 128 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 128 );
	newLine.setAttribute( 'data-straightlinedistance', 1006 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M31 34 L30.5 145' );
	newLine.setAttribute( 'stroke-dasharray', 108 );
	newLine.setAttribute( 'stroke-dashoffset', 108 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 108 );
	newLine.setAttribute( 'data-straightlinedistance', 826 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M31 34 L40 155' );
	newLine.setAttribute( 'stroke-dasharray', 124 );
	newLine.setAttribute( 'stroke-dashoffset', 124 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 124 );
	newLine.setAttribute( 'data-straightlinedistance', 932 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 146 );
	newLine.setAttribute( 'stroke-dashoffset', 146 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 146 );
	newLine.setAttribute( 'data-straightlinedistance', 981 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30.5 34 L13.5 100' );
	newLine.setAttribute( 'stroke-dasharray', 70 );
	newLine.setAttribute( 'stroke-dashoffset', 70 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 70 );
	newLine.setAttribute( 'data-straightlinedistance', 535 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L195 173.5' );
	newLine.setAttribute( 'stroke-dasharray', 218 );
	newLine.setAttribute( 'stroke-dashoffset', 218 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 218 );
	newLine.setAttribute( 'data-straightlinedistance', 1632 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L208 202' );
	newLine.setAttribute( 'stroke-dasharray', 246 );
	newLine.setAttribute( 'stroke-dashoffset', 246 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 246 );
	newLine.setAttribute( 'data-straightlinedistance', 1835 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L215 60.5' );
	newLine.setAttribute( 'stroke-dasharray', 188 );
	newLine.setAttribute( 'stroke-dashoffset', 188 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 188 );
	newLine.setAttribute( 'data-straightlinedistance', 1424 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L254 87' );
	newLine.setAttribute( 'stroke-dasharray', 232 );
	newLine.setAttribute( 'stroke-dashoffset', 232 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 232 );
	newLine.setAttribute( 'data-straightlinedistance', 1756 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L286 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 262 );
	newLine.setAttribute( 'stroke-dashoffset', 262 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 262 );
	newLine.setAttribute( 'data-straightlinedistance', 1966 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 358 );
	newLine.setAttribute( 'stroke-dashoffset', 358 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 358 );
	newLine.setAttribute( 'data-straightlinedistance', 2702 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L350 80' );
	newLine.setAttribute( 'stroke-dasharray', 326 );
	newLine.setAttribute( 'stroke-dashoffset', 326 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 326 );
	newLine.setAttribute( 'data-straightlinedistance', 2441 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-portland-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromportland' );
	newLine.setAttribute( 'd', 'M30 32 L333 107' );
	newLine.setAttribute( 'stroke-dasharray', 312 );
	newLine.setAttribute( 'stroke-dashoffset', 312 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 312 );
	newLine.setAttribute( 'data-straightlinedistance', 2349 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Phoenix to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L91 95' );
	newLine.setAttribute( 'stroke-dasharray', 61 );
	newLine.setAttribute( 'stroke-dashoffset', 61 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 61 );
	newLine.setAttribute( 'data-straightlinedistance', 506 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 154 L40 13' );
	newLine.setAttribute( 'stroke-dasharray', 144 );
	newLine.setAttribute( 'stroke-dashoffset', 144 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 144 );
	newLine.setAttribute( 'data-straightlinedistance', 1116 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 154 L30 30' );
	newLine.setAttribute( 'stroke-dasharray', 128 );
	newLine.setAttribute( 'stroke-dashoffset', 128 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 128 );
	newLine.setAttribute( 'data-straightlinedistance', 1006 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 45 );
	newLine.setAttribute( 'stroke-dashoffset', 45 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 45 );
	newLine.setAttribute( 'data-straightlinedistance', 357 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 34 );
	newLine.setAttribute( 'stroke-dashoffset', 34 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 34 );
	newLine.setAttribute( 'data-straightlinedistance', 299 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 79 );
	newLine.setAttribute( 'stroke-dashoffset', 79 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 79 );
	newLine.setAttribute( 'data-straightlinedistance', 586 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M75 156 L13 103' );
	newLine.setAttribute( 'stroke-dasharray', 82 );
	newLine.setAttribute( 'stroke-dashoffset', 82 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 82 );
	newLine.setAttribute( 'data-straightlinedistance', 654 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L195 173.5' );
	newLine.setAttribute( 'stroke-dasharray', 123 );
	newLine.setAttribute( 'stroke-dashoffset', 123 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 123 );
	newLine.setAttribute( 'data-straightlinedistance', 886 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L208 202' );
	newLine.setAttribute( 'stroke-dasharray', 143 );
	newLine.setAttribute( 'stroke-dashoffset', 143 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 143 );
	newLine.setAttribute( 'data-straightlinedistance', 1015 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L215 62' );
	newLine.setAttribute( 'stroke-dasharray', 171 );
	newLine.setAttribute( 'stroke-dashoffset', 171 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 171 );
	newLine.setAttribute( 'data-straightlinedistance', 1280 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L254 88' );
	newLine.setAttribute( 'stroke-dasharray', 193 );
	newLine.setAttribute( 'stroke-dashoffset', 193 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 193 );
	newLine.setAttribute( 'data-straightlinedistance', 1453 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L286 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 224 );
	newLine.setAttribute( 'stroke-dashoffset', 224 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 224 );
	newLine.setAttribute( 'data-straightlinedistance', 1689 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 266 );
	newLine.setAttribute( 'stroke-dashoffset', 266 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 266 );
	newLine.setAttribute( 'data-straightlinedistance', 1981 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L350 81' );
	newLine.setAttribute( 'stroke-dasharray', 288 );
	newLine.setAttribute( 'stroke-dashoffset', 288 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 288 );
	newLine.setAttribute( 'data-straightlinedistance', 2142 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-phoenix-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromphoenix' );
	newLine.setAttribute( 'd', 'M74 155 L333 107' );
	newLine.setAttribute( 'stroke-dasharray', 264 );
	newLine.setAttribute( 'stroke-dashoffset', 264 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 264 );
	newLine.setAttribute( 'data-straightlinedistance', 1980 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );


	// Dallas to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 130 );
	newLine.setAttribute( 'stroke-dashoffset', 130 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 130 );
	newLine.setAttribute( 'data-straightlinedistance', 1000 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M195 173.5 L39 13' );
	newLine.setAttribute( 'stroke-dasharray', 222 );
	newLine.setAttribute( 'stroke-dashoffset', 222 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 222 );
	newLine.setAttribute( 'data-straightlinedistance', 1682 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M195 173.5 L32 33.5' );
	newLine.setAttribute( 'stroke-dasharray', 216 );
	newLine.setAttribute( 'stroke-dashoffset', 216 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 216 );
	newLine.setAttribute( 'data-straightlinedistance', 1632 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 168 );
	newLine.setAttribute( 'stroke-dashoffset', 168 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 168 );
	newLine.setAttribute( 'data-straightlinedistance', 1239 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 156 );
	newLine.setAttribute( 'stroke-dashoffset', 156 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 156 );
	newLine.setAttribute( 'data-straightlinedistance', 1183 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 174 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 87 );
	newLine.setAttribute( 'stroke-dashoffset', 87 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 87 );
	newLine.setAttribute( 'data-straightlinedistance', 663 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 196 );
	newLine.setAttribute( 'stroke-dashoffset', 196 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 196 );
	newLine.setAttribute( 'data-straightlinedistance', 1483 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L75 155' );
	newLine.setAttribute( 'stroke-dasharray', 123 );
	newLine.setAttribute( 'stroke-dashoffset', 123 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 123 );
	newLine.setAttribute( 'data-straightlinedistance', 886 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L208 202' );
	newLine.setAttribute( 'stroke-dasharray', 32 );
	newLine.setAttribute( 'stroke-dashoffset', 32 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 32 );
	newLine.setAttribute( 'data-straightlinedistance', 225 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M195.5 173.5 L216.5 60' );
	newLine.setAttribute( 'stroke-dasharray', 114 );
	newLine.setAttribute( 'stroke-dashoffset', 114 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 114 );
	newLine.setAttribute( 'data-straightlinedistance', 865 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L254.5 88' );
	newLine.setAttribute( 'stroke-dasharray', 104 );
	newLine.setAttribute( 'stroke-dashoffset', 104 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 104 );
	newLine.setAttribute( 'data-straightlinedistance', 806 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L286.5 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 127 );
	newLine.setAttribute( 'stroke-dashoffset', 127 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 127 );
	newLine.setAttribute( 'data-straightlinedistance', 1000 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 144 );
	newLine.setAttribute( 'stroke-dashoffset', 144 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 144 );
	newLine.setAttribute( 'data-straightlinedistance', 1111 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L350 82' );
	newLine.setAttribute( 'stroke-dasharray', 182 );
	newLine.setAttribute( 'stroke-dashoffset', 182 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 182 );
	newLine.setAttribute( 'data-straightlinedistance', 1372 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-dallas-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdallas' );
	newLine.setAttribute( 'd', 'M196 173.5 L333 108' );
	newLine.setAttribute( 'stroke-dasharray', 153 );
	newLine.setAttribute( 'stroke-dashoffset', 153 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 153 );
	newLine.setAttribute( 'data-straightlinedistance', 1183 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );


	// Houston to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 158 );
	newLine.setAttribute( 'stroke-dashoffset', 158 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 158 );
	newLine.setAttribute( 'data-straightlinedistance', 1200 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L39 13' );
	newLine.setAttribute( 'stroke-dasharray', 253 );
	newLine.setAttribute( 'stroke-dashoffset', 253 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 253 );
	newLine.setAttribute( 'data-straightlinedistance', 1891 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L32 33.5' );
	newLine.setAttribute( 'stroke-dasharray', 245 );
	newLine.setAttribute( 'stroke-dashoffset', 245 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 245 );
	newLine.setAttribute( 'data-straightlinedistance', 1835 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 187 );
	newLine.setAttribute( 'stroke-dashoffset', 187 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 187 );
	newLine.setAttribute( 'data-straightlinedistance', 1372 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 173 );
	newLine.setAttribute( 'stroke-dashoffset', 173 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 173 );
	newLine.setAttribute( 'data-straightlinedistance', 1303 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 117 );
	newLine.setAttribute( 'stroke-dashoffset', 117 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 117 );
	newLine.setAttribute( 'data-straightlinedistance', 879 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 219 );
	newLine.setAttribute( 'stroke-dashoffset', 219 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 219 );
	newLine.setAttribute( 'data-straightlinedistance', 1644 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L75 155' );
	newLine.setAttribute( 'stroke-dasharray', 142 );
	newLine.setAttribute( 'stroke-dashoffset', 142 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 142 );
	newLine.setAttribute( 'data-straightlinedistance', 1015 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M209 203 L196 176' );
	newLine.setAttribute( 'stroke-dasharray', 32 );
	newLine.setAttribute( 'stroke-dashoffset', 32 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 32 );
	newLine.setAttribute( 'data-straightlinedistance', 225 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208.5 203 L216.5 60' );
	newLine.setAttribute( 'stroke-dasharray', 142 );
	newLine.setAttribute( 'stroke-dashoffset', 142 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 142 );
	newLine.setAttribute( 'data-straightlinedistance', 1059 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L254.5 88' );
	newLine.setAttribute( 'stroke-dasharray', 124 );
	newLine.setAttribute( 'stroke-dashoffset', 124 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 124 );
	newLine.setAttribute( 'data-straightlinedistance', 943 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L286.5 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 142 );
	newLine.setAttribute( 'stroke-dashoffset', 142 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 142 );
	newLine.setAttribute( 'data-straightlinedistance', 1107 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 125 );
	newLine.setAttribute( 'stroke-dashoffset', 125 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 125 );
	newLine.setAttribute( 'data-straightlinedistance', 968 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L350 82' );
	newLine.setAttribute( 'stroke-dasharray', 189 );
	newLine.setAttribute( 'stroke-dashoffset', 189 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 189 );
	newLine.setAttribute( 'data-straightlinedistance', 1419 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-houston-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromhouston' );
	newLine.setAttribute( 'd', 'M208 203 L335 106' );
	newLine.setAttribute( 'stroke-dasharray', 158 );
	newLine.setAttribute( 'stroke-dashoffset', 158 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 158 );
	newLine.setAttribute( 'data-straightlinedistance', 1220 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );


	// Minneapolis to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 132 );
	newLine.setAttribute( 'stroke-dashoffset', 132 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 132 );
	newLine.setAttribute( 'data-straightlinedistance', 986 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L39 14' );
	newLine.setAttribute( 'stroke-dasharray', 184 );
	newLine.setAttribute( 'stroke-dashoffset', 184 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 184 );
	newLine.setAttribute( 'data-straightlinedistance', 1393 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L32 33' );
	newLine.setAttribute( 'stroke-dasharray', 189 );
	newLine.setAttribute( 'stroke-dashoffset', 189 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 189 );
	newLine.setAttribute( 'data-straightlinedistance', 1424 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 205 );
	newLine.setAttribute( 'stroke-dashoffset', 205 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 205 );
	newLine.setAttribute( 'data-straightlinedistance', 1523 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 203 );
	newLine.setAttribute( 'stroke-dashoffset', 203 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 203 );
	newLine.setAttribute( 'data-straightlinedistance', 1532 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L138 109' );
	newLine.setAttribute( 'stroke-dasharray', 92 );
	newLine.setAttribute( 'stroke-dashoffset', 92 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 92 );
	newLine.setAttribute( 'data-straightlinedistance', 699 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 209 );
	newLine.setAttribute( 'stroke-dashoffset', 209 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 209 );
	newLine.setAttribute( 'data-straightlinedistance', 1583 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 172 );
	newLine.setAttribute( 'stroke-dashoffset', 172 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 172 );
	newLine.setAttribute( 'data-straightlinedistance', 1280 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M216.5 61 L195.5 176' );
	newLine.setAttribute( 'stroke-dasharray', 115 );
	newLine.setAttribute( 'stroke-dashoffset', 115 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 115 );
	newLine.setAttribute( 'data-straightlinedistance', 865 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M216.5 61 L209 200' );
	newLine.setAttribute( 'stroke-dasharray', 142 );
	newLine.setAttribute( 'stroke-dashoffset', 142 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 142 );
	newLine.setAttribute( 'data-straightlinedistance', 1059 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M217 61 L254.5 88' );
	newLine.setAttribute( 'stroke-dasharray', 46 );
	newLine.setAttribute( 'stroke-dashoffset', 46 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 46 );
	newLine.setAttribute( 'data-straightlinedistance', 355 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 62 L286.5 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 72 );
	newLine.setAttribute( 'stroke-dashoffset', 72 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 72 );
	newLine.setAttribute( 'data-straightlinedistance', 543 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M217 61 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 201 );
	newLine.setAttribute( 'stroke-dashoffset', 201 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 201 );
	newLine.setAttribute( 'data-straightlinedistance', 1516 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L350 80' );
	newLine.setAttribute( 'stroke-dasharray', 135 );
	newLine.setAttribute( 'stroke-dashoffset', 135 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 135 );
	newLine.setAttribute( 'data-straightlinedistance', 1017 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-minneapolis-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' );
	newLine.setAttribute( 'd', 'M218 61 L335 107.5' );
	newLine.setAttribute( 'stroke-dasharray', 125 );
	newLine.setAttribute( 'stroke-dashoffset', 125 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 125 );
	newLine.setAttribute( 'data-straightlinedistance', 932 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );


	// Chicago to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 164 );
	newLine.setAttribute( 'stroke-dashoffset', 164 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 164 );
	newLine.setAttribute( 'data-straightlinedistance', 1259 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L39 14' );
	newLine.setAttribute( 'stroke-dasharray', 227 );
	newLine.setAttribute( 'stroke-dashoffset', 227 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 227 );
	newLine.setAttribute( 'data-straightlinedistance', 1735 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L32 33' );
	newLine.setAttribute( 'stroke-dasharray', 230 );
	newLine.setAttribute( 'stroke-dashoffset', 230 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 230 );
	newLine.setAttribute( 'data-straightlinedistance', 1756 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 231 );
	newLine.setAttribute( 'stroke-dashoffset', 231 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 231 );
	newLine.setAttribute( 'data-straightlinedistance', 1744 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 226 );
	newLine.setAttribute( 'stroke-dashoffset', 226 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 226 );
	newLine.setAttribute( 'data-straightlinedistance', 1733 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L138 109.5' );
	newLine.setAttribute( 'stroke-dasharray', 119 );
	newLine.setAttribute( 'stroke-dashoffset', 119 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 119 );
	newLine.setAttribute( 'data-straightlinedistance', 919 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 243 );
	newLine.setAttribute( 'stroke-dashoffset', 243 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 243 );
	newLine.setAttribute( 'data-straightlinedistance', 1857 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 193 );
	newLine.setAttribute( 'stroke-dashoffset', 193 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 193 );
	newLine.setAttribute( 'data-straightlinedistance', 1453 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L194.5 176' );
	newLine.setAttribute( 'stroke-dasharray', 105 );
	newLine.setAttribute( 'stroke-dashoffset', 105 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 105 );
	newLine.setAttribute( 'data-straightlinedistance', 806 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L209.5 200' );
	newLine.setAttribute( 'stroke-dasharray', 124 );
	newLine.setAttribute( 'stroke-dashoffset', 124 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 124 );
	newLine.setAttribute( 'data-straightlinedistance', 943 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L216 60.5' );
	newLine.setAttribute( 'stroke-dasharray', 47 );
	newLine.setAttribute( 'stroke-dashoffset', 47 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 47 );
	newLine.setAttribute( 'data-straightlinedistance', 355 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L286.5 83.5' );
	newLine.setAttribute( 'stroke-dasharray', 32 );
	newLine.setAttribute( 'stroke-dashoffset', 32 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 32 );
	newLine.setAttribute( 'data-straightlinedistance', 237 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 157 );
	newLine.setAttribute( 'stroke-dashoffset', 157 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 157 );
	newLine.setAttribute( 'data-straightlinedistance', 1193 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L350 80' );
	newLine.setAttribute( 'stroke-dasharray', 97 );
	newLine.setAttribute( 'stroke-dashoffset', 97 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 97 );
	newLine.setAttribute( 'data-straightlinedistance', 712 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-chicago-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromchicago' );
	newLine.setAttribute( 'd', 'M255 87.5 L335 107.5' );
	newLine.setAttribute( 'stroke-dasharray', 81 );
	newLine.setAttribute( 'stroke-dashoffset', 81 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 81 );
	newLine.setAttribute( 'data-straightlinedistance', 594 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Chicago to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 195 );
	newLine.setAttribute( 'stroke-dashoffset', 195 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 195 );
	newLine.setAttribute( 'data-straightlinedistance', 1490 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L39 14' );
	newLine.setAttribute( 'stroke-dasharray', 255 );
	newLine.setAttribute( 'stroke-dashoffset', 255 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 255 );
	newLine.setAttribute( 'data-straightlinedistance', 1935 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L32 33' );
	newLine.setAttribute( 'stroke-dasharray', 260 );
	newLine.setAttribute( 'stroke-dashoffset', 260 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 260 );
	newLine.setAttribute( 'data-straightlinedistance', 1971 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 262 );
	newLine.setAttribute( 'stroke-dashoffset', 262 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 262 );
	newLine.setAttribute( 'data-straightlinedistance', 1982 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 257 );
	newLine.setAttribute( 'stroke-dashoffset', 257 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 257 );
	newLine.setAttribute( 'data-straightlinedistance', 1971 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L138 109.5' );
	newLine.setAttribute( 'stroke-dasharray', 150 );
	newLine.setAttribute( 'stroke-dashoffset', 150 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 150 );
	newLine.setAttribute( 'data-straightlinedistance', 1156 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 273 );
	newLine.setAttribute( 'stroke-dashoffset', 273 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 273 );
	newLine.setAttribute( 'data-straightlinedistance', 2089 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 223 );
	newLine.setAttribute( 'stroke-dashoffset', 223 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 223 );
	newLine.setAttribute( 'data-straightlinedistance', 1689 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L194.5 176' );
	newLine.setAttribute( 'stroke-dasharray', 128 );
	newLine.setAttribute( 'stroke-dashoffset', 128 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 128 );
	newLine.setAttribute( 'data-straightlinedistance', 1000 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L210 200' );
	newLine.setAttribute( 'stroke-dasharray', 142 );
	newLine.setAttribute( 'stroke-dashoffset', 142 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 142 );
	newLine.setAttribute( 'data-straightlinedistance', 1107 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L216 60.5' );
	newLine.setAttribute( 'stroke-dasharray', 73 );
	newLine.setAttribute( 'stroke-dashoffset', 73 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 73 );
	newLine.setAttribute( 'data-straightlinedistance', 543 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L255 87.5' );
	newLine.setAttribute( 'stroke-dasharray', 32 );
	newLine.setAttribute( 'stroke-dashoffset', 32 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 32 );
	newLine.setAttribute( 'data-straightlinedistance', 237 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L330 226' );
	newLine.setAttribute( 'stroke-dasharray', 149 );
	newLine.setAttribute( 'stroke-dashoffset', 149 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 149 );
	newLine.setAttribute( 'data-straightlinedistance', 1158 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L350 80' );
	newLine.setAttribute( 'stroke-dasharray', 66 );
	newLine.setAttribute( 'stroke-dashoffset', 66 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 66 );
	newLine.setAttribute( 'data-straightlinedistance', 481 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-detroit-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromdetroit' );
	newLine.setAttribute( 'd', 'M286 84 L335 107.5' );
	newLine.setAttribute( 'stroke-dasharray', 53 );
	newLine.setAttribute( 'stroke-dashoffset', 53 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 53 );
	newLine.setAttribute( 'data-straightlinedistance', 394 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Miami to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 272 );
	newLine.setAttribute( 'stroke-dashoffset', 272 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 272 );
	newLine.setAttribute( 'data-straightlinedistance', 2090 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L39 14' );
	newLine.setAttribute( 'stroke-dasharray', 358 );
	newLine.setAttribute( 'stroke-dashoffset', 358 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 358 );
	newLine.setAttribute( 'data-straightlinedistance', 2735 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L32 33' );
	newLine.setAttribute( 'stroke-dasharray', 356 );
	newLine.setAttribute( 'stroke-dashoffset', 356 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 356 );
	newLine.setAttribute( 'data-straightlinedistance', 2707 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 311 );
	newLine.setAttribute( 'stroke-dashoffset', 311 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 311 );
	newLine.setAttribute( 'data-straightlinedistance', 2338 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 298 );
	newLine.setAttribute( 'stroke-dashoffset', 298 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 298 );
	newLine.setAttribute( 'data-straightlinedistance', 2271 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L138 109.5' );
	newLine.setAttribute( 'stroke-dasharray', 225 );
	newLine.setAttribute( 'stroke-dashoffset', 225 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 225 );
	newLine.setAttribute( 'data-straightlinedistance', 1727 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 340 );
	newLine.setAttribute( 'stroke-dashoffset', 340 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 340 );
	newLine.setAttribute( 'data-straightlinedistance', 2594 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 267 );
	newLine.setAttribute( 'stroke-dashoffset', 267 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 267 );
	newLine.setAttribute( 'data-straightlinedistance', 1981 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L194.5 173.5' );
	newLine.setAttribute( 'stroke-dasharray', 143 );
	newLine.setAttribute( 'stroke-dashoffset', 143 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 143 );
	newLine.setAttribute( 'data-straightlinedistance', 1111 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L210 202' );
	newLine.setAttribute( 'stroke-dasharray', 124 );
	newLine.setAttribute( 'stroke-dashoffset', 124 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 124 );
	newLine.setAttribute( 'data-straightlinedistance', 968 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L216 60.5' );
	newLine.setAttribute( 'stroke-dasharray', 200 );
	newLine.setAttribute( 'stroke-dashoffset', 200 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 200 );
	newLine.setAttribute( 'data-straightlinedistance', 1516 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L255 87.5' );
	newLine.setAttribute( 'stroke-dasharray', 156 );
	newLine.setAttribute( 'stroke-dashoffset', 156 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 156 );
	newLine.setAttribute( 'data-straightlinedistance', 1193 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L286.5 84' );
	newLine.setAttribute( 'stroke-dasharray', 149 );
	newLine.setAttribute( 'stroke-dashoffset', 149 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 149 );
	newLine.setAttribute( 'data-straightlinedistance', 1158 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L352 80' );
	newLine.setAttribute( 'stroke-dasharray', 146 );
	newLine.setAttribute( 'stroke-dashoffset', 146 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 146 );
	newLine.setAttribute( 'data-straightlinedistance', 1094 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-miami-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-frommiami' );
	newLine.setAttribute( 'd', 'M330.5 225 L333.5 106' );
	newLine.setAttribute( 'stroke-dasharray', 118 );
	newLine.setAttribute( 'stroke-dashoffset', 118 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 118 );
	newLine.setAttribute( 'data-straightlinedistance', 928 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// New York to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 259 );
	newLine.setAttribute( 'stroke-dashoffset', 259 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 259 );
	newLine.setAttribute( 'data-straightlinedistance', 1970 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L39 14' );
	newLine.setAttribute( 'stroke-dasharray', 317 );
	newLine.setAttribute( 'stroke-dashoffset', 317 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 317 );
	newLine.setAttribute( 'data-straightlinedistance', 2405 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L32 33' );
	newLine.setAttribute( 'stroke-dasharray', 322 );
	newLine.setAttribute( 'stroke-dashoffset', 322 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 322 );
	newLine.setAttribute( 'data-straightlinedistance', 2441 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 326 );
	newLine.setAttribute( 'stroke-dashoffset', 326 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 326 );
	newLine.setAttribute( 'data-straightlinedistance', 2448 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 319 );
	newLine.setAttribute( 'stroke-dashoffset', 319 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 319 );
	newLine.setAttribute( 'data-straightlinedistance', 2431 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L138 109.5' );
	newLine.setAttribute( 'stroke-dasharray', 225 );
	newLine.setAttribute( 'stroke-dashoffset', 225 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 225 );
	newLine.setAttribute( 'data-straightlinedistance', 1629 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 338 );
	newLine.setAttribute( 'stroke-dashoffset', 338 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 338 );
	newLine.setAttribute( 'data-straightlinedistance', 2569 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 285 );
	newLine.setAttribute( 'stroke-dashoffset', 285 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 285 );
	newLine.setAttribute( 'data-straightlinedistance', 2142 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L194.5 173.5' );
	newLine.setAttribute( 'stroke-dasharray', 180 );
	newLine.setAttribute( 'stroke-dashoffset', 180 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 180 );
	newLine.setAttribute( 'data-straightlinedistance', 1372 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M351 81 L210 202' );
	newLine.setAttribute( 'stroke-dasharray', 187 );
	newLine.setAttribute( 'stroke-dashoffset', 187 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 187 );
	newLine.setAttribute( 'data-straightlinedistance', 1419 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 80 L216 60.5' );
	newLine.setAttribute( 'stroke-dasharray', 135 );
	newLine.setAttribute( 'stroke-dashoffset', 135 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 135 );
	newLine.setAttribute( 'data-straightlinedistance', 1017 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L255 87.5' );
	newLine.setAttribute( 'stroke-dasharray', 95 );
	newLine.setAttribute( 'stroke-dashoffset', 95 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 95 );
	newLine.setAttribute( 'data-straightlinedistance', 712 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M350 81 L286.5 84' );
	newLine.setAttribute( 'stroke-dasharray', 64 );
	newLine.setAttribute( 'stroke-dashoffset', 64 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 64 );
	newLine.setAttribute( 'data-straightlinedistance', 481 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M352 81 L331 225' );
	newLine.setAttribute( 'stroke-dasharray', 147 );
	newLine.setAttribute( 'stroke-dashoffset', 147 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 147 );
	newLine.setAttribute( 'data-straightlinedistance', 1094 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-newyork-washingtondc' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromnewyork' );
	newLine.setAttribute( 'd', 'M352 81 L334 106' );
	newLine.setAttribute( 'stroke-dasharray', 29 );
	newLine.setAttribute( 'stroke-dashoffset', 29 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 29 );
	newLine.setAttribute( 'data-straightlinedistance', 204 );
	newLine.setAttribute( 'data-destcity', 'Washington D.C.' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Washington D.C. to...
	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-saltlakecity' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L91 96' );
	newLine.setAttribute( 'stroke-dasharray', 242 );
	newLine.setAttribute( 'stroke-dashoffset', 242 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 242 );
	newLine.setAttribute( 'data-straightlinedistance', 1844 );

	newLine.setAttribute( 'data-destcity', 'Salt Lake City' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-seattle' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L39 14' );
	newLine.setAttribute( 'stroke-dasharray', 308 );
	newLine.setAttribute( 'stroke-dashoffset', 308 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 308 );
	newLine.setAttribute( 'data-straightlinedistance', 2324 );
	newLine.setAttribute( 'data-destcity', 'Seattle' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-portland' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L32 33' );
	newLine.setAttribute( 'stroke-dasharray', 311 );
	newLine.setAttribute( 'stroke-dashoffset', 311 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 311 );
	newLine.setAttribute( 'data-straightlinedistance', 2349 );
	newLine.setAttribute( 'data-destcity', 'Portland' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-la' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L30.5 143' );
	newLine.setAttribute( 'stroke-dasharray', 305 );
	newLine.setAttribute( 'stroke-dashoffset', 305 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 305 );
	newLine.setAttribute( 'data-straightlinedistance', 2297 );
	newLine.setAttribute( 'data-destcity', 'Los Angeles' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-sandiego' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L40 158' );
	newLine.setAttribute( 'stroke-dasharray', 297 );
	newLine.setAttribute( 'stroke-dashoffset', 297 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 297 );
	newLine.setAttribute( 'data-straightlinedistance', 2272 );
	newLine.setAttribute( 'data-destcity', 'San Diego' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-denver' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L138 109.5' );
	newLine.setAttribute( 'stroke-dasharray', 195 );
	newLine.setAttribute( 'stroke-dashoffset', 195 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 195 );
	newLine.setAttribute( 'data-straightlinedistance', 1491 );
	newLine.setAttribute( 'data-destcity', 'Denver' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-sanfrancisco' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L13 102.5' );
	newLine.setAttribute( 'stroke-dasharray', 320 );
	newLine.setAttribute( 'stroke-dashoffset', 320 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 320 );
	newLine.setAttribute( 'data-straightlinedistance', 2438 );
	newLine.setAttribute( 'data-destcity', 'San Francisco' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-phoenix' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L74 155' );
	newLine.setAttribute( 'stroke-dasharray', 263 );
	newLine.setAttribute( 'stroke-dashoffset', 263 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 263 );
	newLine.setAttribute( 'data-straightlinedistance', 1980 );
	newLine.setAttribute( 'data-destcity', 'Phoenix' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-dallas' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L194.5 173.5' );
	newLine.setAttribute( 'stroke-dasharray', 153 );
	newLine.setAttribute( 'stroke-dashoffset', 153 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 153 );
	newLine.setAttribute( 'data-straightlinedistance', 1183 );
	newLine.setAttribute( 'data-destcity', 'Dallas' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-houston' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L210 202' );
	newLine.setAttribute( 'stroke-dasharray', 157 );
	newLine.setAttribute( 'stroke-dashoffset', 157 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 157 );
	newLine.setAttribute( 'data-straightlinedistance', 1220 );
	newLine.setAttribute( 'data-destcity', 'Houston' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-minneapolis' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L216 60.5' );
	newLine.setAttribute( 'stroke-dasharray', 125 );
	newLine.setAttribute( 'stroke-dashoffset', 125 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 125 );
	newLine.setAttribute( 'data-straightlinedistance', 1012 );
	newLine.setAttribute( 'data-destcity', 'Minneapolis' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-chicago' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L255 87.5' );
	newLine.setAttribute( 'stroke-dasharray', 80 );
	newLine.setAttribute( 'stroke-dashoffset', 80 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 80 );
	newLine.setAttribute( 'data-straightlinedistance', 594 );
	newLine.setAttribute( 'data-destcity', 'Chicago' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-detroit' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L286.5 84' );
	newLine.setAttribute( 'stroke-dasharray', 52 );
	newLine.setAttribute( 'stroke-dashoffset', 52 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 52 );
	newLine.setAttribute( 'data-straightlinedistance', 394 );
	newLine.setAttribute( 'data-destcity', 'Detroit' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-miami' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L331 225' );
	newLine.setAttribute( 'stroke-dasharray', 118 );
	newLine.setAttribute( 'stroke-dashoffset', 118 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 118 );
	newLine.setAttribute( 'data-straightlinedistance', 928 );
	newLine.setAttribute( 'data-destcity', 'Miami' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	newLine = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	newLine.setAttribute( 'id', 'wphealthtracker-d3chart-exercise-line-washingtondc-newyork' );
	newLine.setAttribute( 'class', 'wphealthtracker-d3chart-exercise-distance-line wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' );
	newLine.setAttribute( 'd', 'M333 107 L352 81' );
	newLine.setAttribute( 'stroke-dasharray', 33 );
	newLine.setAttribute( 'stroke-dashoffset', 33 );
	newLine.setAttribute( 'data-offsettoanimateto', 0 );
	newLine.setAttribute( 'data-offsettoreturnto', 33 );
	newLine.setAttribute( 'data-straightlinedistance', 204 );
	newLine.setAttribute( 'data-destcity', 'New York' );
	newLine.setAttribute( 'stroke-width', 1 );
	$( newLine ).insertAfter( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' );

	// Hide the hover message once any of the dots are hovered over
	$( '.wphealthtracker-d3chart-exercise-city-dot' ).mouseenter( function() {
		$( '#wphealthtracker-chart-hover-message-exercise-distance' ).animate({
			opacity: 0
		}, {
			duration: 500,
			complete: function() {
				$( this ).css({'pointer-events': 'none', 'z-index': -99999});
			}
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromsandiego' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report...
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>San Diego ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-la' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromla' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Los Angeles ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>San Francisco ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-denver' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromdenver' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Denver ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-saltlakecity' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Salt Lake City ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-seattle' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromseattle' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Seattle ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-portland' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromportland' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;


			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Portland ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-phoenix' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromphoenix' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Phoenix ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-dallas' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromdallas' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Dallas ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-houston' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromhouston' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>San Diego ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-minneapolis' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Minneapolis ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-chicago' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromchicago' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Chicago ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-detroit' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromdetroit' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Detroit ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-miami' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-frommiami' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>San Diego ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-newyork' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromnewyork' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>New York ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-washingtondc' ).mouseenter( function() {

		var distanceArray = [];
		var cityArray = [];
		var percArray = [];
		var rowHtml = '';
		var congratsHtml = '';
		var miles = 0;
		var kilometers = 0;
		var reportHtml = '';

		$( this ).animate({'stroke-width': '5'}, 100 );

		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).html( '' );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' ).each( function() {
			var offsettoanimateto = $( this ).attr( 'data-offsettoanimateto' );
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			var straightlinedistance = $( this ).attr( 'data-straightlinedistance' );
			var destcity = $( this ).attr( 'data-destcity' );
			var temp1 = ( offsettoreturnto * milesTravelled ) / straightlinedistance;
			var percentage = 0;

			temp1 = offsettoreturnto - temp1;

			if ( milesTravelled >=  straightlinedistance ) {
				temp1 = offsettoanimateto;
				percentage = 100;
			} else {
				percentage = ( ( milesTravelled / straightlinedistance ) * 100 ).toFixed( 2 );
			}

			$( this ).animate({'stroke-dashoffset': temp1}, 2000 );

			// Add to distance & city array...
			distanceArray.push( straightlinedistance );
			cityArray.push( destcity );
			percArray.push( percentage );
		});

		for ( var i = cityArray.length - 1; 0 <= i; i-- ) {

			if ( 100 === percArray[i]) {
				congratsHtml = '<img class="wphealhttracker-d3chart-exercise-readout-congrats" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'happy.svg"/>';
			} else {
				congratsHtml = '';
			}

			// Calculate distances
			miles = distanceArray[i];
			kilometers = ( miles * 1.60934 ).toFixed( 0 );

			rowHtml += '<div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p>' + cityArray[i] + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + miles + ' ' + wphealthtrackerPhpVariables.commontrans53 + ' / ' + kilometers + ' ' + wphealthtrackerPhpVariables.commontrans56 + '</p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + percArray[i] + '% ' + wphealthtrackerPhpVariables.d3trans75 + ' ' + congratsHtml + '</p></div></div>';
		}

		// Now build HTML for distance/dest. report.
		reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'route.svg"/><p>Washington D.C. ' + wphealthtrackerPhpVariables.d3trans77 + '...</p></div>' + rowHtml + '<div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';
		$( '#wphealthtracker-d3chart-readout-exercise-distance' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-sandiego' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );;

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromsandiego' ).each( function() {
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-la' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromla' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromsanfrancisco' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-denver' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromdenver' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-saltlakecity' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromsaltlakecity' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-seattle' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromseattle' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-portland' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromportland' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-phoenix' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromphoenix' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-dallas' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromdallas' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-houston' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromhouston' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-minneapolis' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromminneapolis' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-chicago' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromchicago' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-detroit' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromdetroit' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-miami' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-frommiami' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-newyork' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromnewyork' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	$( '#wphealthtracker-d3chart-exercise-city-dot-washingtondc' ).mouseleave( function() {

		$( this ).animate({'stroke-width': '2'}, 100 );

		$( '.wphealthtracker-d3chart-exercise-distance-line-fromwashingtondc' ).each( function() {

			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});
	});

	// Hide the the spinner
	$( '#wphealthtracker-spinner-d3-await-1' ).animate({'opacity': '0'});

	$( '#wphealthtracker-chart-hover-message-exercise-distance' ).html( '<p>' + wphealthtrackerPhpVariables.d3trans76 + '</p>' );

	function wphealthtrackerTravelDemo() {

		milesTravelled = 200000;

		$( '#wphealthtracker-d3chart-exercise-city-dot-la' ).trigger( 'mouseenter' );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-la' ).trigger( 'mouseleave' );
		}, 4000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco' ).trigger( 'mouseenter' );
		}, 5000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-sanfrancisco' ).trigger( 'mouseleave' );
		}, 8000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-denver' ).trigger( 'mouseenter' );
		}, 9000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-denver' ).trigger( 'mouseleave' );
		}, 12000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-portland' ).trigger( 'mouseenter' );
		}, 13000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-portland' ).trigger( 'mouseleave' );
		}, 16000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-houston' ).trigger( 'mouseenter' );
		}, 17000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-houston' ).trigger( 'mouseleave' );
		}, 20000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-seattle' ).trigger( 'mouseenter' );
		}, 21000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-seattle' ).trigger( 'mouseleave' );
		}, 24000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-newyork' ).trigger( 'mouseenter' );
		}, 25000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-newyork' ).trigger( 'mouseleave' );
		}, 28000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-miami' ).trigger( 'mouseenter' );
		}, 29000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-miami' ).trigger( 'mouseleave' );
		}, 32000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-phoenix' ).trigger( 'mouseenter' );
		}, 33000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-phoenix' ).trigger( 'mouseleave' );
		}, 36000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-minneaspolis' ).trigger( 'mouseenter' );
		}, 37000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-minneapolis' ).trigger( 'mouseleave' );
		}, 40000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-washingtondc' ).trigger( 'mouseenter' );
		}, 37000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-washingtondc' ).trigger( 'mouseleave' );
		}, 40000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-chicago' ).trigger( 'mouseenter' );
		}, 41000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-chicago' ).trigger( 'mouseleave' );
		}, 44000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-saltlakecity' ).trigger( 'mouseenter' );
		}, 45000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-saltlakecity' ).trigger( 'mouseleave' );
		}, 48000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-dallas' ).trigger( 'mouseenter' );
		}, 49000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-dallas' ).trigger( 'mouseleave' );
		}, 52000 ) );

		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-detroit' ).trigger( 'mouseenter' );
		}, 53000 ) );
		timeouts.push( setTimeout( function() {
			$( '#wphealthtracker-d3chart-exercise-city-dot-detroit' ).trigger( 'mouseleave' );
			wphealthtrackerTravelDemo();
		}, 56000 ) );
	}

	$( '#wphealthtracker-chart-hover-distance-demo-exercise' ).mouseenter( function() {

		$( this ).find( 'p' ).css({'animation': 'none', '-webkit-animation': 'none', '-moz-animation': 'none', '-ms-animation': 'none'});

		wphealthtrackerTravelDemo();
	});

	$( '#wphealthtracker-chart-hover-distance-demo-exercise' ).mouseleave( function() {

		$( this ).find( 'p' ).css({'animation': 'fadeInOut 3s 3s infinite', '-webkit-animation': 'fadeInOut 3s 3s infinite', '-moz-animation': 'fadeInOut 3s 3s infinite', '-ms-animation': 'fadeInOut 3s 3s infinite'});

		for ( var i = 0; i < timeouts.length; i++ ) {
			clearTimeout( timeouts[i]);
		}

		$( '.wphealthtracker-d3chart-exercise-distance-line' ).each( function() {
			var offsettoreturnto = $( this ).attr( 'data-offsettoreturnto' );
			$( this ).animate().stop().css({'stroke-dashoffset': offsettoreturnto}, 2000 );
		});

		$( '.wphealthtracker-d3chart-exercise-city-dot' ).each( function() {
			$( this ).css({'stroke-width': 2});
		});

		milesTravelled = parseFloat( milesTravelledData );
	});
}

function wphealthtrackerExerciseD3Two( mydataEnergy, $ ) {

	var freqArray = mydataEnergy;
	var highestFreq = 0;
	var highestFreqName = 0;
	var lowestFreq = 10000000;
	var lowestFreqName = '';
	var bottomColor = '';
	var topColor = '';
	var totalFreq = 0;
	var freqAve = 0;
	var percArray = [];
	var percNameArray = [];
	var perc = 0;
	var diff = 0;
	var color = '';

	for ( var i = freqArray.length - 1; 0 <= i; i-- ) {

		if ( highestFreq < freqArray[i].frequency ) {
			highestFreq = freqArray[i].frequency;
			highestFreqName = freqArray[i].name;
		}

		if ( lowestFreq > freqArray[i].frequency ) {
			lowestFreq = freqArray[i].frequency;
			lowestFreqName = freqArray[i].name;
		}

		totalFreq += freqArray[i].frequency;
	}

	freqAve = totalFreq / 14;

	// Build percentage array
	for ( var i = freqArray.length - 1; 0 <= i; i-- ) {

		if ( freqArray[i].frequency >= freqAve ) {

			diff = freqArray[i].frequency - freqAve;

			if ( 0 !== diff ) {
				perc = '-' + ( ( freqArray[i].frequency / totalFreq ) * 100 ) ;
			} else {
				perc = 0;
			}
		}

		if ( freqArray[i].frequency <= freqAve ) {

			diff = freqAve - freqArray[i].frequency;

			if ( 0 !== diff ) {

				if ( 0 === freqArray[i].frequency ) {
					perc = 100;
				} else {
					perc = ( freqArray[i].frequency / totalFreq ) * 100;
				}
			} else {
				perc = 0;
			}
		}

		percArray.push( perc );
		percNameArray.push( freqArray[i].name );
	}

	for ( var i = percArray.length - 1; 0 <= i; i-- ) {

		color = wphealthtrackerShadeColorizer( '#f8d3de', parseFloat( percArray[i]) );
		$( '#wphealthtracker-' + percNameArray[i] + ' path' ).css({'fill': color});
	}

	function wphealthtrackerShadeColorizer(  color, percent ) {

		var R = parseInt( color.substring( 1, 3 ), 16 );
		var G = parseInt( color.substring( 3, 5 ), 16 );
		var B = parseInt( color.substring( 5, 7 ), 16 );
		var RR = '';
		var GG = '';
		var BB = '';

		R = parseInt( R * ( 100 + percent ) / 100 );
		G = parseInt( G * ( 100 + percent ) / 100 );
		B = parseInt( B * ( 100 + percent ) / 100 );

		R = ( 255 > R ) ? R : 255;
		G = ( 255 > G ) ? G : 255;
		B = ( 255 > B ) ? B : 255;

		RR = ( ( 1 === R.toString( 16 ).length ) ? '0' + R.toString( 16 ) : R.toString( 16 ) );
		GG = ( ( 1 === G.toString( 16 ).length ) ? '0' + G.toString( 16 ) : G.toString( 16 ) );
		BB = ( ( 1 === B.toString( 16 ).length ) ? '0' + B.toString( 16 ) : B.toString( 16 ) );

		return '#' + RR + GG + BB;
	}

	// Now let's append info to the dom that will be used to create the readout details.
	for ( var i = freqArray.length - 1; i >= 0; i-- ) {

		switch ( freqArray[i].name ) {
		case 'Biceps':

			var label = $( 'label[for="wphealthtracker-biceps"]' );
			var path = $( '#wphealthtracker-Biceps path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Biceps' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Biceps' );

			break;
		case 'Deltoids':

			var label = $( 'label[for="wphealthtracker-deltoids"]' );
			var path = $( '#wphealthtracker-Deltoids path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Deltoids' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Deltoids' );

			break;
		case 'Forearms':

			var label = $( 'label[for="wphealthtracker-forearms"]' );
			var path = $( '#wphealthtracker-Forearms path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Forearms' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Forearms' );

			break;
		case 'Triceps':

			var label = $( 'label[for="wphealthtracker-triceps"]' );
			var path = $( '#wphealthtracker-Triceps path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Triceps' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Triceps' );

			break;
		case 'Trapezius':

			var label = $( 'label[for="wphealthtracker-trapezius"]' );
			var path = $( '#wphealthtracker-Trapezius path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Trapezius' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Trapezius' );

			break;
		case 'Lats':

			var label = $( 'label[for="wphealthtracker-lats"]' );
			var path = $( '#wphealthtracker-Lats path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Lats' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Lats' );

			break;
		case 'Abs':

			var label = $( 'label[for="wphealthtracker-abs"]' );
			var path = $( '#wphealthtracker-Abs path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Abs' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Abs' );

			break;
		case 'Obliques':

			var label = $( 'label[for="wphealthtracker-obliques"]' );
			var path = $( '#wphealthtracker-Obliques path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Obliques' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Obliques' );

			break;
		case 'Pectorals':

			var label = $( 'label[for="wphealthtracker-pectorals"]' );
			var path = $( '#wphealthtracker-Pectorals path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Pectorals' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Pectorals' );

			break;
		case 'Adductors':

			var label = $( 'label[for="wphealthtracker-adductors"]' );
			var path = $( '#wphealthtracker-Adductors path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Adductors' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Adductors' );

			break;
		case 'Calves':

			var label = $( 'label[for="wphealthtracker-calves"]' );
			var path = $( '#wphealthtracker-Calves path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Calves' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Calves' );

			break;
		case 'Hamstrings':

			var label = $( 'label[for="wphealthtracker-hamstrings"]' );
			var path = $( '#wphealthtracker-Hamstrings path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Hamstrings' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Hamstrings' );

			break;
		case 'Glutes':

			var label = $( 'label[for="wphealthtracker-glutes"]' );
			var path = $( '#wphealthtracker-Glutes path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Glutes' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Glutes' );

			break;
		case 'Quads':

			var label = $( 'label[for="wphealthtracker-quads"]' );
			var path = $( '#wphealthtracker-Quads path' );

			label.attr( 'data-freq', freqArray[i].frequency );
			label.attr( 'data-first', freqArray[i].first );
			label.attr( 'data-last', freqArray[i].last );
			label.attr( 'data-exers', freqArray[i].exers );
			label.attr( 'data-name', 'Quads' );

			path.attr( 'data-freq', freqArray[i].frequency );
			path.attr( 'data-first', freqArray[i].first );
			path.attr( 'data-last', freqArray[i].last );
			path.attr( 'data-exers', freqArray[i].exers );
			path.attr( 'data-name', 'Quads' );

			break;
		default:

		}

	}

	// Hide the hover message once any of the dots are hovered over
	$( '.wphealthtracker-muscle-groups svg g g[id], .wphealthtracker-muscle-groups label' ).mouseenter( function() {
		$( '#wphealthtracker-chart-hover-message-exercise-muscle-groups' ).animate({
			opacity: 0,
			'z-index': -99999,
			'pointer-events': 'none'
		}, {
			duration: 100
		});
	});

	// The hover/ Click effects for each muscle group on diagram.
	document.querySelectorAll( '.wphealthtracker-muscle-groups svg g g[id]' ).forEach( function( group ) {

		// For the hover
		group.addEventListener( 'mouseover', function( el ) {

			var	id = el.path[1].id.toLowerCase();
			var	label = '';
			var path = $( this ).children( ':first' );
			var name = path.attr( 'data-name' );
			var freq = path.attr( 'data-freq' ) + ' ' + wphealthtrackerPhpVariables.commontrans43;
			var first = path.attr( 'data-first' );
			var last = path.attr( 'data-last' );
			var exercises = path.attr( 'data-exers' );

			// Checks for no data
			if ( '' === last ) {
				last = first;
			}

			// Checks for no data
			if ( '' === first ) {
				first = last;
			}

			if ( '0 ' + wphealthtrackerPhpVariables.commontrans43 === freq ) {
				freq = freq + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
				last = wphealthtrackerPhpVariables.commontrans45 + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
				first = wphealthtrackerPhpVariables.commontrans45 + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
				exercises = wphealthtrackerPhpVariables.commontrans45 + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
			}

			$( '#wphealthtracker-d3chart-readout-exercise-muscle-groups' ).html( '' );

			if ( ! id ) {
				id = el.path[2].id.toLowerCase();
			}

			label = document.querySelectorAll( 'label[for=' + id + ']' )[0];

			if ( label.classList ) {
				label.classList.add( 'hover' );
			} else {
				label.className += ' ' + 'hover';
			}

			// Now build HTML for distance/dest. report...
			reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'weightlifting.svg"/><p>' + name + '...</p></div><div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans48 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + freq + '</p></div></div>        <div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans49 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + first + ' </p></div></div>     <div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans50 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + last + ' </p></div></div>    <div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans51 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + exercises + ' </p></div></div><div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';

			$( '#wphealthtracker-d3chart-readout-exercise-muscle-groups' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );

		});
		group.addEventListener( 'mouseout', function( el ) {

			var	id = el.path[1].id.toLowerCase();
			var	clss = 'hover';
			var	label = '';

			if ( ! id ) {
				id = el.path[2].id.toLowerCase();
			}

			label = document.querySelectorAll( 'label[for=' + id + ']' )[0];

			if ( label.classList ) {
				label.classList.remove( clss );
			} else {
				label.className = label.className.replace( new RegExp( '(^|\\b)' + clss.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' );
			}
		});

		// For the click
		group.addEventListener( 'click', function( el ) {

			var	id = el.path[1].id.toLowerCase();
			var input = '';

			if ( ! id ) {
				id = el.path[2].id.toLowerCase();
			}

			input = document.getElementById( id );

			if ( input.checked ) {
				input.checked = false;
			} else {
				input.checked = true;
			}
		});
	});

	// The hover/ Click effects for each muscle group label.
	document.querySelectorAll( '.wphealthtracker-muscle-groups label' ).forEach( function( group ) {

		// For the hover
		group.addEventListener( 'mouseover', function( el ) {

			var name = $( this ).attr( 'data-name' );
			var freq = $( this ).attr( 'data-freq' ) + ' ' + wphealthtrackerPhpVariables.commontrans43;
			var first = $( this ).attr( 'data-first' );
			var last = $( this ).attr( 'data-last' );
			var exercises = $( this ).attr( 'data-exers' );

			// Checks for no data
			if ( '' === last ) {
				last = first;
			}

			// Checks for no data
			if ( '' === first ) {
				first = last;
			}

			if ( '0 ' + wphealthtrackerPhpVariables.commontrans43 === freq ) {
				freq = freq + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
				last = wphealthtrackerPhpVariables.commontrans45 + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
				first = wphealthtrackerPhpVariables.commontrans45 + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
				exercises = wphealthtrackerPhpVariables.commontrans45 + ' <img class="wphealthtracker-stats-no-data-smile" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'shocked.svg">';
			}

			// Outline the muscle
			$( '#wphealthtracker-' + name + ' path' ).css({'stroke': '#DE235A', 'stroke-width': '1px'});

			// Reset the readout HTML
			$( '#wphealthtracker-d3chart-readout-exercise-muscle-groups' ).html( '' );

			// Now build HTML for distance/dest. report...
			reportHtml = '<div><div class="wphealhttracker-d3chart-exercise-readout-title"><img src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'weightlifting.svg"/><p>' + name + '...</p></div><div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans48 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + freq + '</p></div></div>        <div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans49 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + first + ' </p></div></div>     <div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans50 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + last + ' </p></div></div>    <div class="wphealhttracker-d3chart-exercise-readout-row"><div class="wphealhttracker-d3chart-exercise-readout-cityname"><p> ' + wphealthtrackerPhpVariables.exercisetrans51 + ' </p></div><div class="wphealhttracker-d3chart-exercise-readout-percentage"><p>' + exercises + ' </p></div></div><div class="wphealhttracker-d3chart-exercise-readout-contents"></div></div>';

			$( '#wphealthtracker-d3chart-readout-exercise-muscle-groups' ).append( reportHtml ).animate({'opacity': '1'}, 1000 );

		});

		// For the hover
		group.addEventListener( 'mouseout', function( el ) {

			var name = $( this ).attr( 'data-name' );

			// Outline the muscle
			$( '#wphealthtracker-' + name + ' path' ).css({'stroke': '#ccc', 'stroke-width': '0.5px'});
		});

	});

	// Hide spinner, reveal SVG, and change hover text
	$( '#wphealthtracker-spinner-d3-await-2' ).animate({
		opacity: 0
	}, {
		duration: 1000,
		complete: function() {
			$( '.wphealthtracker-muscle-groups svg' ).animate({ opacity: 1 });
			$( '#wphealthtracker-chart-hover-message-exercise-muscle-groups' ).html( '<p>' + wphealthtrackerPhpVariables.d3trans92 + '</p>' );
		}
	});
}

function wphealthtrackerExerciseD3Three( d3Three, $ ) {

	var margin = { top: 50, right: 0, bottom: 0, left: 30 },
		width = 400 - margin.left - margin.right,
		height = 270 - margin.top - margin.bottom,
		gridSize = Math.floor( width / 24 ),
		legendElementWidth = gridSize * 2,
		buckets = 9,
		colors = [ '#F6ED53', '#F5E150', '#F5CD4C', '#F4B648', '#F39D44', '#F37D3F', '#F1473A' ], // alternatively colorbrewer.YlGnBu[ 9 ]
		days = [ wphealthtrackerPhpVariables.commontrans67, wphealthtrackerPhpVariables.commontrans68, wphealthtrackerPhpVariables.commontrans69, wphealthtrackerPhpVariables.commontrans70, wphealthtrackerPhpVariables.commontrans71, wphealthtrackerPhpVariables.commontrans72, wphealthtrackerPhpVariables.commontrans73 ],
		times = [ '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ],
		datasets = [ d3Three ];

	var svg = d3.select( '#wphealthtracker-exercise-time-svg-chart' ).append( 'svg' )
		.attr( 'width', width + margin.left + margin.right )
		.attr( 'height', height + margin.top + margin.bottom )
		.append( 'g' )
		.attr( 'transform', 'translate( ' + margin.left + ', ' + margin.top + ' )' );

	var dayLabels = svg.selectAll( '.dayLabel' )
		.data( days )
		.enter( ).append( 'text' )
		.text( function( d ) {
			return d;
		})
		.attr( 'x', 0 )
		.attr( 'y', function( d, i ) {
			return i * gridSize;
		})
		.style( 'text-anchor', 'end' )
		.attr( 'transform', 'translate( -6, ' + gridSize / 1.5 + ' )' )
		.attr( 'class', 'dayLabel mono axis' );

	var timeLabels = svg.selectAll( '.timeLabel' )
		.data( times )
		.enter( ).append( 'text' )
		.text( function( d ) {
			return d;
		})
		.attr( 'x', function( d, i ) {
			return i * gridSize;
		})
		.attr( 'y', 0 )
		.style( 'text-anchor', 'middle' )
		.attr( 'transform', 'translate( ' + gridSize / 2 + ', -6)' )
		.attr( 'class', 'timeLabel mono axis' );

	var heatmapChart = function( d3ThreeDataSet ) {
		d3.tsv( '', function( error, data ) {

			// Using my own data instead of suppling a URL/File path to the first argument in the d3.csv( ) function above ( instead, we just pass an empty string)
			var data = d3ThreeDataSet;
			var colorScale = '';
			var cards = '';
			var tooltipContainer = $( '#wphealthtracker-exercise-time-tooltip-div' );

			data.forEach( function( d ) {
				day = d.day,
				hour = d.hour,
				value = d.value;
			});

			colorScale = d3.scaleQuantile( )
				.domain([ 0, buckets - 1, d3.max( data, function( d ) {
					return d.value;
				}) ])
				.range( colors  );

			cards = svg.selectAll( '.wphealthtracker-exercise-times-rects' )
				.data( data, function( d ) {
					return d.day + ':' + d.hour;
				});

			cards.enter( ).append( 'rect' )
				.attr( 'x', function( d ) {
					return ( d.hour - 1 ) * gridSize;
				})
				.attr( 'y', function( d ) {
					return ( d.day - 1 ) * gridSize;
				})
				.attr( 'rx', 4 )
				.attr( 'ry', 4 )
				.attr( 'class', 'wphealthtracker-exercise-times-rects' )
				.attr( 'width', gridSize )
				.attr( 'height', gridSize )
				.on( 'mouseover', function( d, i ) {

					// For getting the Pounds/Kilograms value at associated position on line
					var mouse = d3.mouse( this );
					var value = d.value;
					var hour = d.hour;
					var day = '';
					var meridiem = '';

					if ( 12 >= hour ) {
						meridiem = wphealthtrackerPhpVariables.commontrans65;
					} else {
						meridiem = wphealthtrackerPhpVariables.commontrans66;
					}

					switch (  d.day ) {
					case '1':
						day = wphealthtrackerPhpVariables.commontrans58;
						break;
					case '2':
						day =  wphealthtrackerPhpVariables.commontrans59;
						break;
					case '3':
						day =  wphealthtrackerPhpVariables.commontrans60;
						break;
					case '4':
						day =  wphealthtrackerPhpVariables.commontrans61;
						break;
					case '5':
						day =  wphealthtrackerPhpVariables.commontrans62;
						break;
					case '6':
						day =  wphealthtrackerPhpVariables.commontrans63;
						break;
					case '7':
						day =  wphealthtrackerPhpVariables.commontrans64;
						break;
					}

					// Now convert hour.
					if ( '1' === hour ) {
						hour = '12 ' + wphealthtrackerPhpVariables.commontrans65;
					} else if ( '13' === hour ) {
						hour = '12 ' + wphealthtrackerPhpVariables.commontrans66;
					} else if ( 12 < parseInt( hour ) ) {
						hour = ( parseInt( hour ) - 13 ) + ' ' + wphealthtrackerPhpVariables.commontrans66;
					} else {
						hour = ( parseInt(  hour ) - 1 ) + ' ' + wphealthtrackerPhpVariables.commontrans65;
					}

					tooltipContainer.html( '<div class="wphealthtracker-exercise-time-readout-img-div"><img class="wphealthtracker-exercise-time-readout-icon-img" src="' + wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL + 'calendar.svg"/></div><div><p class="wphealthtracker-exercise-time-readout-title">' + day + '</p><p class="wphealthtracker-exercise-time-readout-subtitle">Exercised ' + value + ' time( s) at ' + hour + '</p></div>' );

					tooltipContainer.css({
						'opacity': '1',
						'left': mouse[ 0 ] + 23,
						'top': mouse[ 1 ] + 115
					});

				})
				.on( 'mouseout', function( d, i ) {
					tooltipContainer.css({
						'opacity': '0'
					});
				})
				.transition( ).duration( 1000 )
				.style( 'fill', function( d ) {

					if ( 0 === d.value ) {
						return '#fff';
					} else {
						return colorScale( d.value );
					}
				});

			cards.append( 'title' );
			cards.select( 'title' ).text( function( d ) {
				return d.value;
			});
		});
	};

	heatmapChart( datasets[ 0 ]);

	// Hide the spinner and change the flashing text
	$(  '#wphealthtracker-spinner-d3-await-3' ).animate({'opacity': '0'});
	$(  '#wphealthtracker-chart-hover-message-macro' ).html(  '<p>' + wphealthtrackerPhpVariables.d3trans100 + '</p>' );
}
