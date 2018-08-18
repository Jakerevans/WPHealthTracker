/**
 * JavaScript Functions - d3-vitals-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

"use strict";

function wphealthtracker_vitals_d3_1(mydataWeight){

	// Set dimensions
	var margin = {
		top: 120,
		right: 40,
		left: 60,
		bottom: 100
	};

	var width = 550 - margin.right - margin.left;
	var height = 450 - margin.top - margin.bottom;

  	var svgWeight = d3.select("#wphealthtracker-stats-actual-inner-d3-1-1")
  		.append("svg")
  			.attr('class','wphealthtracker-d3chart-topsvg')
  			.attr('id','wphealthtracker-d3chart-topsvg-weight')
  			.attr("width", width + margin.left + margin.right)
  			.attr("height", height + margin.top + margin.bottom)
  				.append("g")
  					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  	// Text label for the y axis
	svgWeight.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("x", 0 - height / 2)
		.attr("class", "wphealthtracker-d3chart-axislabel")
		.attr("id", "wphealthtracker-d3chart-axislabel-weight")
		.style("text-anchor", "middle")
		.text(wphealthtracker_php_variables.d3trans40);

	// Set the ranges - the domain is specified inside of the function called when we load the data
	var xRangeWeight = d3.scaleLinear().range([0, width]);
	var yRangeWeight = d3.scaleLinear().range([height, 0]);
	var color = d3.scaleOrdinal(d3.schemeCategory10);

	// Set up the X and Y axis
	var xAxisWeight = d3.axisBottom(xRangeWeight);
	var yAxisWeight = d3.axisLeft(yRangeWeight).tickSize(-width);

	// Create function to parse dates into date objects
	var parseDate = d3.timeParse("%Y-%m-%d");
	var formatDate = d3.timeFormat("%Y-%m-%d");
	var bisectDate = d3.bisector(function (d) {
		return d.date;
	}).left;


	// Set the line attributes
	var line = d3.line().curve(d3.curveLinear).x(function (d) {
		return xRangeWeight(d.date);
	}).y(function (d) {
		return yRangeWeight(d.close);
	});

	// Get the data
	d3.csv("", function (error, data) {

		// Using my own data instead of suppling a URL/File path to the first argument in the d3.csv() function above (instead, we just pass an empty string)
		dataWeight = mydataWeight;
		dataWeight.forEach(function (d) {
		 	d.date = parseDate(d.date),
		 	Pounds = +d.Pounds, 
		 	Kilograms = +d.Kilograms;
		});

		// Sort data ascending - needed to get correct bisector results
		dataWeight.sort(function (a, b) {
		  return a.date - b.date;
		});

		// Color domain
		color.domain(d3.keys(dataWeight[0]).filter(function (key) {
		  return key !== "date";
		}));

		// Create Weight array 
		var weightValues = color.domain().map(function (name) {
		  return {
		    name: name,
		    values: dataWeight.map(function (d) {
		      return { date: d.date, close: d[name] };
		    })
		  };
		});

		// Add domain ranges to the x and y scales
		xRangeWeight.domain([d3.min(weightValues, function (c) {
		  return d3.min(c.values, function (v) {
		    return v.date;
		  });
		}), d3.max(weightValues, function (c) {
		  return d3.max(c.values, function (v) {
		    return v.date;
		  });
		})]);
		yRangeWeight.domain([d3.min(weightValues, function (c) {
		  return d3.min(c.values, function (v) {
		    return 0;
		  });
		}), d3.max(weightValues, function (c) {
		  return d3.max(c.values, function (v) {
		    return v.close + v.close * 0.05;
		  });
		})]);

		// Add the y axis
		svgWeight.append("g")
			.attr("class", "wphealthtracker-d3chart-yaxis-tick-holder")
			.attr("id", "wphealthtracker-d3chart-yaxis-tick-holder-weight")
			.attr("class", "y axis").call(yAxisWeight); 

		// Append rectangle for capturing if mouse moves within area
		svgWeight.append("rect")
			.attr("class", "wphealthtracker-mousemove-rect-weight")
			.attr("id", "wphealthtracker-mousemove-rect-weight")
			.attr("width", width)
			.attr("height", height)
			.attr("transform", "translate(0," + height + ")")
			.style("fill", "none")
			.style("pointer-events", "all")
			.on("mouseout", function () {
			  d3.select("#wphealthtracker-circle0-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-circle1-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-circle2-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-circle3-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-text0-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-text1-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-text2-weight").style("opacity", '0');
			  d3.select("#wphealthtracker-text3-weight").style("opacity", '0');
			  d3.select(".wphealthtracker-d3chart-mouse-line-weight").style("opacity", '0');
			  d3.selectAll(".wphealthtracker-d3chart-legendtextval-weight").text('');
			  d3.select("#wphealthtracker-d3chart-xaxislabel-top-weight").text('');
			}).on("mousemove", wpht_helper_d3_weight_mousemove);

		// Add the line groups
		var weightLines = svgWeight.selectAll(".wphealthtracker-weight-lines-actual")
			.data(weightValues).enter()
			.append("g")
				.attr("class", "wphealthtracker-weight-lines-actual");

		// Add the weight paths
		weightLines.append("path").attr("id", function (d, i) {
		  return "wphealthtracker-d3chart-linepath-weight-" + i;
		}).attr("class", function (d, i) {
		  return "wphealthtracker-d3chart-line wphealthtracker-d3chart-line-weight wphealthtracker-d3chart-legendrect-weight-" + i;
		}).attr("d", function (d) {
		  return line(d.values);
		}).style("stroke", function (d) {
		  return color(d.name);
		}).on("mouseover", function (d, i) {

		  	d3.select(this).style('stroke-width',3);

			// For getting the Pounds/Kilograms value at associated position on line
			var mouse = d3.mouse(this);
			var xDate = xRangeWeight.invert(mouse[0]),
			  bisect = d3.bisector(function (d) {
				return d.date;
			}).right;
			var beginning = 0,
			 end = weightLines[i].getTotalLength(),
			 target = null;

			while (true) {
				target = Math.floor((beginning + end) / 2);
				pos = weightLines[i].getPointAtLength(target);
				if ((target === end || target === beginning) && pos.x !== mouse[0]) {
				  break;
				}
				if (pos.x > mouse[0]) end = target;else if (pos.x < mouse[0]) beginning = target;else break; // Position found
			}

			var displayValue = yRangeWeight.invert(pos.y).toFixed(2)

			// For formatting things for the Text area centered just above the chart
			xDate = new Date(xDate);
			xDate = wpht_helper_d3_weight_build_better_date(xDate);
			xDate = xDate+' - '+displayValue
			d3.select("#wphealthtracker-d3chart-xaxislabel-top-weight")
				.style('opacity',1)
				.text(xDate);

			// Loop through the per-day entries, if we don't match the selected value, hide things, otherwise, display the values
			for (j = 0; j < 2; j++) {
				if (i !== j) {
					d3.select("#wphealthtracker-d3chart-linepath-weight-" + j).style("opacity", 0.1);
					d3.select("#wphealthtracker-d3chart-legendrect-weight-"+j).style("opacity",0.1);
					d3.select("#wphealthtracker-d3chart-legendtextval-weight-"+j).text('');
				} else {
					d3.select("#wphealthtracker-d3chart-legendtextval-weight-"+j).text(displayValue);
				}
			};

		}).on("mouseout", function (d, i) {
		
		  d3.select(this).style('stroke-width',2);
		  for (j = 0; j < 2; j++) {
		    d3.select("#wphealthtracker-d3chart-linepath-weight-" + j).style("opacity", 1);
		    d3.select("#wphealthtracker-d3chart-legendrect-weight-"+j).style("opacity",1);
		  };
		  d3.selectAll(".wphealthtracker-d3chart-legendtextval-weight").text('');
		  d3.select("#wphealthtracker-d3chart-xaxislabel-top-weight").text('');

		});

		var mouseGWeight = svgWeight.append("g")
			.attr("class", "mouse-over-effects-weight");

		mouseGWeight
			.append("path")
			.attr("class", "wphealthtracker-d3chart-mouse-line-weight")
			.attr("id", "wphealthtracker-d3chart-mouse-line-weight")
			.style("stroke", "black")
			.style("stroke-width", "1px")
			.style("opacity", "0");

		weightLines = document.getElementsByClassName('wphealthtracker-d3chart-line-weight');

		// Appending the 'mouse1, moues2, mouse3...' elements to facilitate the sliding black bar that moves with cursor
		var mouse1Weight = mouseGWeight
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-weight");

		mouse1Weight
			.append("text")
			.attr("id", "wphealthtracker-text0-weight")
			.attr("transform", "translate(10,3)");

		mouse1Weight
			.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle-weight")
			.attr("id", "wphealthtracker-circle0-weight")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(31, 119, 180)");

		var mouse2 = mouseGWeight
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-weight");

		mouse2.append("text")
			.attr("id", "wphealthtracker-text1-weight")
			.attr("transform", "translate(10,3)");

		mouse2.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle-weight")
			.attr("id", "wphealthtracker-circle1-weight")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(255, 127, 14)");

	

		// Add the Legend Text and Rects
		var legend = d3.select("#wphealthtracker-d3chart-legend-weight");

		// Pounds
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-weight")
			.attr('x',80)
			.attr('y',20)
			.text(wphealthtracker_php_variables.d3trans19);
		// Kilograms
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-weight")
			.attr('x',80)
			.attr('y',43)
			.text(wphealthtracker_php_variables.d3trans18)
		

		// Pounds Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-weight wphealthtracker-d3chart-legendrect-weight-0")
			.attr("id", "wphealthtracker-d3chart-legendrect-weight-0")
			.attr('x',50)
			.attr('y',7.5)
			.attr('fill','rgb(31, 119, 180)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-weight-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-weight, .wphealthtracker-d3chart-legendrect-weight').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')

		// Kilograms Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-weight wphealthtracker-d3chart-legendrect-weight-1")
			.attr("id", "wphealthtracker-d3chart-legendrect-weight-2")
			.attr('x',50)
			.attr('y',32.5)
			.attr('fill','rgb(255, 127, 14)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-weight-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-weight, .wphealthtracker-d3chart-legendrect-weight').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')

		// Pounds Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-weight")
			.attr("id", "wphealthtracker-d3chart-legendtextval-weight-0")
			.attr('x',0)
			.attr('y',20)
		// Kilograms Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-weight")
			.attr("id", "wphealthtracker-d3chart-legendtextval-weight-1")
			.attr('x',0)
			.attr('y',45)

		// Add the top text area just above the chart to display date/time/avlue
		svgWeight.append("text")
			.attr("class", "wphealthtracker-d3chart-xaxislabel-top")
			.attr("id", "wphealthtracker-d3chart-xaxislabel-top-weight")
			.attr("transform", "translate(" + width / 2 + " ," + -15 + ")")
			.style("text-anchor", "middle")
			.style('opacity',0)
			.text('')

		function wpht_helper_d3_weight_build_better_date(date){
			date = String(date).split(' ');
			var time = wpht_helper_d3_weight_convert_to_am_pm(date[4]);
			return date[0]+' '+date[1]+' '+date[2]+' '+date[3]+' '+time;
		}

		function wpht_helper_d3_weight_convert_to_am_pm(time) {
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
		function wpht_helper_d3_weight_mousemove() {

			$('#wphealthtracker-chart-hover-message-weight').animate({
	           opacity:0
	        }, {
	           duration: 500,
	           complete: function() { 
	           		$(this).css({'pointer-events':'none','z-index':-99999})
	           } 
	        });

			var mouseWeight = d3.mouse(this);
			d3.select("#wphealthtracker-d3chart-mouse-line-weight").attr("d", function (){
				var d = "M" + mouseWeight[0] + "," + height;
				d += " " + mouseWeight[0] + "," + 0;
				return d;
			});

			d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-weight").attr("transform", function (d, i){

				d3.select("#wphealthtracker-text0-weight").style("opacity", '1');
				d3.select("#wphealthtracker-text1-weight").style("opacity", '1');
				d3.select("#wphealthtracker-text2-weight").style("opacity", '1');
				d3.select("#wphealthtracker-text3-weight").style("opacity", '1');
				d3.select(".wphealthtracker-d3chart-mouse-line-weight").style("opacity", '1');

				// This if is to ensure we don't go over the number of individual data items contained within a day - without this if, this function would run an amount of times equal to how many days of data there are.
				if(i < weightLines.length){
					var xDate = xRangeWeight.invert(mouseWeight[0]),
					  bisect = d3.bisector(function (d) {
						return d.date;
					}).right;

					var beginning = 0,
					 end = weightLines[i].getTotalLength(),
					  target = null;

					while (true) {
						target = Math.floor((beginning + end) / 2);
						pos = weightLines[i].getPointAtLength(target);
						if ((target === end || target === beginning) && pos.x !== mouseWeight[0]) {
						  break;
						}
						if (pos.x > mouseWeight[0]) end = target;else if (pos.x < mouseWeight[0]) beginning = target;else break; //position found
					}

					xDate = new Date(xDate);
					xDate = wpht_helper_d3_weight_build_better_date(xDate);
					d3.select("#wphealthtracker-d3chart-xaxislabel-top-weight")
						.style('opacity',1)
						.text(xDate);

					// Moving the Circles with the black bar
					d3.select(this).select('circle').style("opacity", '1');
					var displayValue = yRangeWeight.invert(pos.y).toFixed(2);
					d3.select(this).select('text').text(displayValue);
					d3.select("#wphealthtracker-d3chart-legendtextval-weight-"+i).text(displayValue);

					return "translate(" + mouseWeight[0] + "," + pos.y + ")";
				}
			});
	
		};

		// Hide the the spinner
    	$('#wphealthtracker-spinner-d3-await-1').animate({'opacity':'0'})

    	$('#wphealthtracker-chart-hover-message-weight').html('<p>'+wphealthtracker_php_variables.d3trans20+'</p>');
	});

}

function wphealthtracker_vitals_d3_2(mydata) {

	var bisectDate = d3.bisector(function (d) {
		return d.date;
	}).left;

	function wpht_helper_d3_bp_filter_json(json, key, value) {
		var result = [];
		json.forEach(function (val, idx, arr) {
			if (val[key] == value) {
				result.push(val);
			}
		});
		return result;
	}

	// Set dimensions
	var margin = {
		top: 120,
		right: 40,
		left: 60,
		bottom: 100
	};
	var width = 550 - margin.right - margin.left;
	var height = 450 - margin.top - margin.bottom;

	var svg = d3.select("#wphealthtracker-stats-actual-inner-d3-1-2")
  		.append("svg")
  			.attr('class','wphealthtracker-d3chart-topsvg')
  			.attr('id','wphealthtracker-d3chart-topsvg-bp')
			.attr('width', width + margin.right + margin.left)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	svg.append("defs")
		.append("clipPath")
			.attr("id", "wphealthtracker-d3chart-clippath-bp")
				.append("rect")
					.attr("width", width)
					.attr("height", height);

	// Parse the time 
	var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%L");

	//Set the ranges
	var xRangeBp = d3.scaleTime().domain([new Date(2018, 1, 1), new Date(2018, 1, 10)]).range([0, width]);
	var yRangeBp = d3.scaleLinear().range([height, 0]);

	// Set the Y Axis and it's tick marks
	var yAxisBp = d3.axisLeft(yRangeBp).tickSize(-width);

	// Define the line
	var stationLine = d3.line().x(function (d) {
		return xRangeBp(d.date);
	}).y(function (d) {
		return yRangeBp(d.value);
	});

	// Zoom effect
	var zoom = d3.zoom().scaleExtent([1, 32]).extent([[0, 0], [width, height]]).translateExtent([[0, 0], [width, height]]).on("zoom", wpht_helper_d3_bp_zoomed);

	// Zoom panel
	var zoomRect = svg.append("rect")
		.attr("width", width)
		.attr("height", height)
		.attr("fill", "none")
		.attr("pointer-events", "all")
		.call(zoom);

	// Global variables
	var data;
	var series;
	var dataFiltered;
	var lines;
	var updateOn;
	var maxChart;
	var maxLine;

	// Get the data
	d3.json('', function (error, json) {

		// Set json equal to the data originally generated from class-d3-vitals.php
		json = mydata;
		var initialLength = json.length;

		// Format data for D3
		for (var i = 0; i < mydata.length; i++) {
			for (var r = 0; r < mydata[i].length; r++) {
				mydata.push(mydata[i][r])
			};
		};

		// Remove the first however many elements, as they are leftover data
		for (var i = 0; i < initialLength; i++) {
			mydata.shift()
		};
	
		// Further modifying data
		json.forEach(function (d) {
			d.value = +d.value;
			d.date = parseDate(d.date);
		});

		seriesNest = d3.nest().key(function (d) {
			return d.variable;
		}).sortKeys(d3.ascending).entries(json);

		var list = d3.select("#wphealthtracker-bp-chart-select-div").append("select");

		list.selectAll("option").data(seriesNest).enter()
			.append("option")
			.attr("value", function (d) {
				return d.key;
			}).text(function (d) {
				return d.key;
			});

		// The change function for the drop-down select
		list.on("change", function () {
			series = d3.event.target.value;
			data = wpht_helper_d3_bp_filter_json(json, 'variable', series);
			wpht_helper_d3_bp_update_graph(data);			
		});

		// Generate initial graph using first series name
		series = seriesNest[0].key;
		data = wpht_helper_d3_bp_filter_json(json, 'variable', series);
		wpht_helper_d3_bp_update_graph(data);
	});



	function wpht_helper_d3_bp_update_graph(data) {

		d3.select("#wphealthtracker-d3chart-mouse-line-bp").remove();
		d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp circle").remove();
		d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp text").remove();
		d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp").remove();

		data.forEach(function (d) {
			return d.value = +d.value;
		});

		var t = d3.transition().duration(750);

		dataCopy = data;
		dataFiltered = dataCopy.filter(function (d) {
			return $("." + d.linetype).attr("fill") != "#ccc";
		});
		maxChart = d3.max(dataFiltered.sort(function (a, b) {
			return d3.descending(a.value, b.value);
		}));
		xRangeBp.domain(d3.extent(dataFiltered, function (d) {
			return d.date;
		}));
		yRangeBp.domain([d3.min(dataFiltered, function (d) {
			return d.value-20;
		}), d3.max(dataFiltered, function (d) {
			return d.value+20;
		})]);

		var color = d3.scaleOrdinal().domain(data).range(["#1f77b4", "#ff7f0e"]);

		zoomRect.call(zoom.transform, d3.zoomIdentity);

		// Nest the entries by linetype
		dataNest = d3.nest() //global dataNest set
			.key(function (d) {
				return d.linetype;
			}).entries(data);

		// match data with selector status
		var result = dataNest.filter(function (d) {
			return $("." + d.key).attr("fill") != "#ccc";
		});

		// JOIN new data with old elements.
		var station = svg.selectAll(".wphealthtracker-d3chart-line-bp").data(result, function (d) {
			return d.key;
		})

		// ENTER new elements present in new data.
		station.enter()
		.append("path").style("stroke", function (d, i) {
			return d.color = color(d.key);
		})
		.attr("id", function (d) {
			return 'wphealthtracker-d3chart-linepath-bp-' + d.key;
		})
		.attr("linekey", function (d) {
			return d.key;
		})
		.attr("name", function (d) {
			return d.values[0].name;
		})
		.attr("d", function (d) {
			return stationLine(d.values);
		})
		.attr("clip-path", "url(#wphealthtracker-d3chart-clippath-bp)")
		.attr("class", "wphealthtracker-d3chart-line wphealthtracker-d3chart-line-bp")
		.on("mouseover", wpht_helper_d3_bp_handle_mouse_over)
		.on("mouseout", wpht_helper_d3_bp_handle_mouse_out)

		station.transition(t).attr("id", function (d) {
			return 'wphealthtracker-d3chart-linepath-bp-' + d.key;
		}).attr("d", function (d) {
			return stationLine(d.values);
		})


		// EXIT old elements not present in new data.
		station.exit().transition(t).remove();

		// JOIN new data with old elements.
		var legend = d3.select("#wphealthtracker-d3chart-legend-bp").selectAll(".wphealthtracker-d3chart-legend").data(dataNest, function (d) {
			return d.key;
		}).attr("id", function (d) {
			return 'wphealthtracker-d3chart-legend-bp' + d.key;
		});

		// Add the Legend text
		legend.enter().append("text").attr("x", 80).attr("y", function (d, i) {
			return 20 + i * 25;
		}).attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-bp").text(function (d) {
			return d.values[0].name;
		});

		legend.enter().append("text").attr("x", 0).attr("y", function (d, i) {
			return 20 + i * 25;
		}) // spacing
		.attr("id", function (d, i) {
			return "wphealthtracker-d3chart-legendtextval-bp-" + i;
		}).attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-bp");

		// ENTER new elements present in new data checkboxes
		legend.enter().append("rect").attr("width", 15).attr("height", 15).attr("x", 50).attr("y", function (d, i) {
			return 7.5 + i * 25;
		}) // spacing
		.attr("fill", function (d) {
			return color(d.key);
		}).attr("class", function (d, i) {
			return "wphealthtracker-d3chart-legendrect wphealthtracker-d3chart-legendrect-" + d.key;
		}).attr("region_id", function (d, i) {
			return d.values[0].region_id;
		}).attr("id", function (d, i) {
			return "wphealthtracker-d3chart-legendrect-bp-" + d.key;
		}).on("mouseover", function (d) {
			tempid = d.key;
			dataFilteredTemp = dataFiltered.filter(function (d) {
				return d.linetype == tempid;
			});
			maxLine = d3.max(dataFilteredTemp.sort(function (a, b) {
				return d3.descending(a.value, b.value);
			}));
			svg.selectAll(".wphealthtracker-d3chart-line-bp")
				.style("opacity", 0.15);

			svg.select('path#wphealthtracker-d3chart-linepath-bp-' + d.key)
				.style("stroke-width", 5)
				.style("opacity", 1);

			d3.select("#wphealthtracker-d3chart-xaxislinedetail-bp")
				.text(d.values[0].name);

			d3.selectAll(".wphealthtracker-d3chart-legendrect")
				.style("opacity", 0.15);

			d3.select("#wphealthtracker-d3chart-legendrect-bp-" + d.key)
				.style("opacity", 1);

		}).on("mouseout", function (d) {
			svg.selectAll(".wphealthtracker-d3chart-line-bp")
				.style("opacity", 1);

			svg.select('path#wphealthtracker-d3chart-linepath-bp-' + d.key)
				.style("stroke-width", 1.5);

			d3.select("#wphealthtracker-d3chart-xaxislinedetail-bp")
				.text("");

			d3.selectAll(".wphealthtracker-d3chart-legendrect")
				.style("opacity", 1);

		}).on("click", function (d) {
			d3.select(this)
				.attr("fill", function (d) {
					if (d3.select(this).attr("fill") == "#ccc") {
					  return color(d.key);
					} else {
					  return "#ccc";
					}
				});

			// Matching the data with selector status
			var result = dataNest.filter(function (d) {
				return $("." + d.key).attr("fill") != "#ccc";
			});
			dataFiltered = dataCopy.filter(function (d) {
				return $("." + d.linetype).attr("fill") != "#ccc";
			});
			maxChart = d3.max(dataFiltered.sort(function (a, b) {
				return d3.descending(a.value, b.value);
			}));
			xRangeBp.domain(d3.extent(dataFiltered, function (d) {
				return d.date;
			}));
			yRangeBp.domain([d3.min(dataFiltered, function (d) {
				return d.value;
			}), d3.max(dataFiltered, function (d) {
				return d.value;
			})]);

			d3.selectAll(".wphealthtracker-d3chart-line-bp") // Change the line
				.transition(t).attr("d", function (d) {
					return stationLine(d.values);
				});

			svg.select("#wphealthtracker-d3chart-yaxis-tick-holder-bp") // Change the y axis
				.transition(t).call(yAxisBp);

			yAxisBp.scale(yRangeBp);

			d3.select("#wphealthtracker-d3chart-yaxis-tick-holder-bp")
				.transition(t).call(yAxisBp);

			// Hide or show the lines based on the ID
			svg.selectAll(".wphealthtracker-d3chart-line-bp").data(result, function (d) {
				return d.key;
			})
			.enter()
			.append("path")
			.attr("id", function (d) {
				return 'wphealthtracker-d3chart-linepath-bp-' + d.key;
			})
			.attr("class", "wphealthtracker-d3chart-line-bp")
			.attr("linekey", function (d) {
				return d.key;
			})
			.attr("name", function (d) {
				return d.values[0].name;
			})
			.attr("clip-path", "url(#wphealthtracker-d3chart-clippath-bp)")
			.style("stroke", function (d, i) {
				return d.color = color(d.key);
			})
			.attr("d", function (d) {
				return stationLine(d.values);
			})
			.on("mousemove", wpht_helper_d3_bp_handle_mouse_over)
			.on("mouseout", wpht_helper_d3_bp_handle_mouse_out);

			svg.selectAll(".wphealthtracker-d3chart-line-bp")
				.data(result, function (d) {
					return d.key;
				})
				.exit()
				.transition(t)
				.style("opacity", 0)
				.remove();

			var mousePerLine = mouseG
				.selectAll('.wphealthtracker-d3chart-mouse-per-line-bp')
				.data(result)
				.enter()
				.append("g")
				.attr("class", "wphealthtracker-d3chart-mouse-per-line wphealthtracker-d3chart-mouse-per-line-bp");

			mousePerLine
				.append("circle")
				.attr("r", 7)
				.attr('class', "wphealthtracker-d3chart-travelling-circle")
				.attr("id", "wphealthtracker-circle0-bp")
				.style("fill", "none")
				.style("stroke-width", "1px")
				.style("opacity", "0");

			mousePerLine
				.append("text")
				.attr("transform", "translate(10,3)");

			d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp")
				.data(result)
				.exit()
				.remove();

			return result;
		}); //END CLICK 

		// For updating the X axis, Y axis, and left-hand label when changing drop-down 
		svg.select("#wphealthtracker-d3chart-axislabel-bp").remove();
		svg.select("#wphealthtracker-d3chart-yaxis-tick-holder-bp").remove();
		svg.select("#wphealthtracker-d3chart-xaxislabel-top-bp").remove();


		// Add the Y Axis
		svg.append("g")
			.attr("class", "wphealthtracker-d3chart-yaxis-tick-holder")
			.attr("id", "wphealthtracker-d3chart-yaxis-tick-holder-bp")
			.transition(t)
			.call(yAxisBp);

		// Text label for the y axis
		svg.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -40)
			.attr("x", 0 - height / 2)
			.attr("class", "wphealthtracker-d3chart-axislabel")
			.attr("id", "wphealthtracker-d3chart-axislabel-bp")
			.style("text-anchor", "middle")
			.text(series);

		// Text label for the x axis
		svg.append("text")
			.attr("transform", "translate(" + width / 2 + " ," + -15 + ")")
			.style("text-anchor", "middle")
			.attr("class", "wphealthtracker-d3chart-xaxislabel-top")
			.attr("id", "wphealthtracker-d3chart-xaxislabel-top-bp");

		var mouseG = svg
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-over-effects")
			.attr("id", "wphealthtracker-d3chart-mouse-over-effects-bp");

		// This is the black vertical line that follows mouse and has cirlces and values appended to it
		mouseG
			.append("path")
			.attr("class", "wphealthtracker-d3chart-mouse-line wphealthtracker-d3chart-mouse-line-bp")
			.attr("id", "wphealthtracker-d3chart-mouse-line-bp")
			.style("stroke", "black")
			.style("stroke-width", "1px")
			.style("opacity", "0");

		bpLines = document.getElementsByClassName('wphealthtracker-d3chart-line-bp');

		var mousePerLine = mouseG
			.selectAll('.wphealthtracker-d3chart-mouse-per-line-bp')
			.data(result)
			.enter()
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line wphealthtracker-d3chart-mouse-per-line-bp");

		mousePerLine
			.append("circle")
			.attr("r", 7)
			.attr('class', "wphealthtracker-d3chart-travelling-circle")
			.attr("id", "wphealthtracker-circle0-bp")
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0");

		mousePerLine
			.append("text")
			.attr("transform", "translate(10,3)");

		// Append a rect to catch mouse movements on canvas
		mouseG.append('svg:rect') 
			.attr("class", "wphealthtracker-mousemove-rect")
			.attr("id", "wphealthtracker-mousemove-rect-bp")
			.attr('width', width) // Can't catch mouse events on a g element
			.attr('height', 200)
			.attr("transform", "translate(0," + height + ")")
			.attr('fill', 'none')
			.attr('pointer-events', 'all')
			.on('mouseout', function () {

				// On mouse out hide line that follows mouse
				d3.select("#wphealthtracker-d3chart-mouse-line-bp")
					.style("opacity", "0");

				// On mouse out hide circles on line that follows mouse
				d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp circle")
					.style("opacity", "0");

				// On mouse out hide text on line that follows mouse
				d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp text")
					.style("opacity", "0");

			})
			.on('mouseover', wpht_helper_d3_bp_touchstart)
			.on('touchstart', wpht_helper_d3_bp_touchstart)
			.on('mousemove', wpht_helper_d3_bp_touchmove)
			.on('touchmove', wpht_helper_d3_bp_touchmove);

		// Hide the the spinner
        $('#wphealthtracker-spinner-d3-await-2').animate({'opacity':'0'})

        $('#wphealthtracker-chart-hover-message-bp').html('<p>'+wphealthtracker_php_variables.d3trans20+'</p>');

	} // END wpht_helper_d3_bp_update_graph

	function wpht_helper_d3_bp_touchstart() {
		$('#wphealthtracker-chart-hover-message-bp').animate({
           opacity:0
        }, {
           duration: 500,
           complete: function() { 
           		$(this).css({'pointer-events':'none','z-index':-99999})
           } 
        });
		// On mouse in show line that follows mouse, circles and text
		d3.select("#wphealthtracker-d3chart-mouse-line-bp")
			.style("opacity", "1");

		// On mouse in show circles on line that follows mouse
		d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp circle")
			.style("opacity", "1");

		// On mouse in show circles on text that follows mouse
		d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp text")
			.style("opacity", "1");
	}

	function wpht_helper_d3_bp_touchmove() {

		d3.event.preventDefault();
		var mouse = d3.mouse(this);
		var transform = d3.zoomTransform(zoomRect.node());
		var xtScale = transform.rescaleX(xRangeBp);

		// Move line that follows mouse
		d3.select("#wphealthtracker-d3chart-mouse-line-bp").attr("d", function (){
			var d = "M" + mouse[0] + "," + height;
			d += " " + mouse[0] + "," + 0;
			return d;
		});

		// Moves the elements appended to each line/path that let's us get data, etc
		d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-bp")
			.attr("transform", function (d, i) {

			var xDate = xtScale.invert(mouse[0]),
			  bisect = d3.bisector(function (d) {
				return d.date;
			}).right;
			idx = bisect(d.values, xDate);

			// Format date in abetter fashion
			xDate = wpht_helper_d3_bp_build_better_date(xDate);

			var beginning = 0,
			  end = bpLines[i].getTotalLength(),
			  target = null;

			while (true) {
				target = Math.floor((beginning + end) / 2);
				pos = bpLines[i].getPointAtLength(target);
				if ((target === end || target === beginning) && pos.x !== mouse[0]) {
				  break;
				}
				if (pos.x > mouse[0]) end = target;else if (pos.x < mouse[0]) beginning = target;else break; //position found
			}

			var fillColor = d3.select("#wphealthtracker-d3chart-legendrect-bp-" + d.key).attr("fill");

			// Setting color of the circles that are appended to the line that follows the cursor
			d3.select(this).select('circle')
				.style("stroke", fillColor);

			// Updating the text values of the elements on the mouse-following line, in the legend, and the top xaxis label
			d3.select(this).select('text')
				.text(yRangeBp.invert(pos.y).toFixed(2));

			d3.select("#wphealthtracker-d3chart-xaxislabel-top-bp")
				.text(xDate);

			d3.select("#wphealthtracker-d3chart-legendtextval-bp-" + i)	
				.text(yRangeBp.invert(pos.y).toFixed(2));

			return "translate(" + mouse[0] + "," + pos.y + ")";
		});
	}

	function wpht_helper_d3_bp_build_better_date(date){
		date = String(date).split(' ');
		var time = wpht_helper_d3_bp_convert_to_am_pm(date[4]);
		return date[0]+' '+date[1]+' '+date[2]+' '+date[3]+' '+time;
	}

	function wpht_helper_d3_bp_convert_to_am_pm(time) {
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

	// Create Event Handlers for mouse
	function wpht_helper_d3_bp_handle_mouse_over(d, i) {

		var mouse = d3.mouse(this);
		var line = d3.select(this)
			.attr('linekey');

		dataFilteredTemp = dataFiltered.filter(function (d) {
			return d.linetype == line;
		});

		maxLine = d3.max(dataFilteredTemp.sort(function (a, b) {
			return d3.descending(a.value, b.value);
		}));

		var name = d3.select(this).attr('name');
		var transform = d3.zoomTransform(zoomRect.node());
		var xtScale = transform.rescaleX(xRangeBp);
		var xDate = xtScale.invert(mouse[0]);
		xDate = wpht_helper_d3_bp_build_better_date(xDate);
		d = wpht_helper_d3_bp_mousedate(xtScale, line);
		var value = yRangeBp.invert(mouse[1]);

		d3.select("#wphealthtracker-d3chart-legendtextval-bp-" + i)
			.text(value.toFixed(2));

		d3.select("#wphealthtracker-d3chart-xaxislabel-top-bp")
			.text(xDate + " " + d.name + " " + value.toFixed(2));

		d3.select("#wphealthtracker-d3chart-xaxislinedetail-bp")
			.text(xDate + " " + d.name + " " + value.toFixed(2));

		svg.selectAll(".wphealthtracker-d3chart-legendrect")
			.style("opacity", 0.15);

		d3.select("#wphealthtracker-d3chart-legendrect-bp-" + line)
			.style("opacity", 1);

		svg.selectAll(".wphealthtracker-d3chart-line-bp")
			.style("opacity", 0.15);

		d3.select(this)
			.style("stroke-width", 5)
			.style("opacity", 1);
	}

	function wpht_helper_d3_bp_handle_mouse_out(d, i) {
		d3.select(this)
			.style("stroke-width", 2);

		svg.selectAll(".wphealthtracker-d3chart-legendtextval-bp")
			.text("");

		d3.select("#wphealthtracker-d3chart-xaxislabel-top-bp")
			.text("");

		d3.select("#wphealthtracker-d3chart-xaxislinedetail-bp")
			.text("");

		svg.selectAll(".wphealthtracker-d3chart-legendrect")
			.style("opacity", 1);

		svg.selectAll(".wphealthtracker-d3chart-line-bp")
			.style("opacity", 1);
	}

	function wpht_helper_d3_bp_mousedate(xtScale, line, mouse) {

		var g = d3.select('#wphealthtracker-d3chart-linepath-bp-' + line)._groups[0][0];

		zoomData = data.filter(function (d) {
			return d.linetype == line;
		});

		var x0 = xtScale.invert(d3.mouse(g)[0]);
		var i = bisectDate(zoomData, x0, 1);
		var d0 = zoomData[i - 1];
		var d1 = zoomData[i];
		var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
		
		return d;
	}

	function wpht_helper_d3_bp_zoomed() {
		var xz = d3.event.transform.rescaleX(xRangeBp);

		// Line zoom
		stationLine.x(function (d) {
			return xz(d.date);
		}).y(function (d) {
			return yRangeBp(d.value);
		});

		d3.selectAll(".wphealthtracker-d3chart-line-bp").attr("d", function (d) {
			return stationLine(d.values);
		});
	}
}

function wphealthtracker_vitals_d3_3(mydataCh){

	// Set dimensions
	var margin = {
		top: 120,
		right: 40,
		left: 60,
		bottom: 100
	};

	var width = 550 - margin.right - margin.left;
	var height = 450 - margin.top - margin.bottom;

  	var svgChol = d3.select("#wphealthtracker-stats-actual-inner-d3-1-3")
  		.append("svg")
  			.attr('class','wphealthtracker-d3chart-topsvg')
  			.attr('id','wphealthtracker-d3chart-topsvg-ch')
  			.attr("width", width + margin.left + margin.right)
  			.attr("height", height + margin.top + margin.bottom)
  				.append("g")
  					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  	// Text label for the y axis
	svgChol.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("x", 0 - height / 2)
		.attr("class", "wphealthtracker-d3chart2-axislabel")
		.attr("id", "wphealthtracker-d3chart2-axislabel-ch")
		.style("text-anchor", "middle")
		.text(wphealthtracker_php_variables.d3trans39);

	// Set the ranges - the domain is specified inside of the function called when we load the data
	var xRangeCh = d3.scaleLinear().range([0, width]);
	var yRangeCh = d3.scaleLinear().range([height, 0]);
	var color = d3.scaleOrdinal(d3.schemeCategory10);

	// Set up the X and Y axis
	var xAxisCh = d3.axisBottom(xRangeCh);
	var yAxisCh = d3.axisLeft(yRangeCh).tickSize(-width);

	// Create function to parse dates into date objects
	var parseDate = d3.timeParse("%Y-%m-%d");
	var formatDate = d3.timeFormat("%Y-%m-%d");
	var bisectDate = d3.bisector(function (d) {
		return d.date;
	}).left;


	// Set the line attributes
	var line = d3.line().curve(d3.curveLinear).x(function (d) {
		return xRangeCh(d.date);
	}).y(function (d) {
		return yRangeCh(d.close);
	});

	// Get the data
	d3.csv("", function (error, data) {

		// Using my own data instead of suppling a URL/File path to the first argument in the d3.csv() function above (instead, we just pass an empty string)
		dataCh = mydataCh;
		dataCh.forEach(function (d) {
		 	d.date = parseDate(d.date),
		 	HDL = +d.HDL, 
		 	LDL = +d.LDL;
		 	Triglycerides = +d.Triglycerides;
		 	Total = +d.Total;
		});

		// Sort data ascending - needed to get correct bisector results
		dataCh.sort(function (a, b) {
		  return a.date - b.date;
		});

		// Color domain
		color.domain(d3.keys(dataCh[0]).filter(function (key) {
		  return key !== "date";
		}));

		// Create Cholesterol array 
		var cholValues = color.domain().map(function (name) {
		  return {
		    name: name,
		    values: dataCh.map(function (d) {
		      return { date: d.date, close: d[name] };
		    })
		  };
		});

		// Add domain ranges to the x and y scales
		xRangeCh.domain([d3.min(cholValues, function (c) {
		  return d3.min(c.values, function (v) {
		    return v.date;
		  });
		}), d3.max(cholValues, function (c) {
		  return d3.max(c.values, function (v) {
		    return v.date;
		  });
		})]);
		yRangeCh.domain([d3.min(cholValues, function (c) {
		  return d3.min(c.values, function (v) {
		    return 0;
		  });
		}), d3.max(cholValues, function (c) {
		  return d3.max(c.values, function (v) {
		    return v.close + v.close * 0.05;
		  });
		})]);

		// Add the y axis
		svgChol.append("g")
			.attr("class", "wphealthtracker-d3chart-yaxis-tick-holder")
			.attr("id", "wphealthtracker-d3chart-yaxis-tick-holder-ch")
			.attr("class", "y axis").call(yAxisCh); 

		// Append rectangle for capturing if mouse moves within area
		svgChol.append("rect")
			.attr("class", "wphealthtracker-mousemove-rect")
			.attr("id", "wphealthtracker-mousemove-rect-ch")
			.attr("width", width)
			.attr("height", height)
			.attr("transform", "translate(0," + height + ")")
			.style("fill", "none")
			.style("pointer-events", "all")
			.on("mouseout", function () {
			  d3.select("#wphealthtracker-circle0-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-circle1-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-circle2-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-circle3-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-text0-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-text1-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-text2-ch").style("opacity", '0');
			  d3.select("#wphealthtracker-text3-ch").style("opacity", '0');
			  d3.select(".wphealthtracker-d3chart-mouse-line-ch").style("opacity", '0');
			  d3.selectAll(".wphealthtracker-d3chart-legendtextval-ch").text('');
			  d3.select("#wphealthtracker-d3chart-xaxislabel-top-ch").text('');
			}).on("mousemove", wpht_helper_d3_ch_mousemove);

		// Add the line groups
		var chLines = svgChol.selectAll(".wphealthtracker-ch-lines-actual")
			.data(cholValues).enter()
			.append("g")
				.attr("class", "wphealthtracker-ch-lines-actual");

		// Add the LDL/HDL/Tri./Total Lines
		chLines.append("path").attr("id", function (d, i) {
		  return "wphealthtracker-d3chart-linepath-ch-" + i;
		}).attr("class", function (d, i) {
		  return "wphealthtracker-d3chart-line wphealthtracker-d3chart-line-ch wphealthtracker-d3chart-legendrect-ch-" + i;
		}).attr("d", function (d) {
		  return line(d.values);
		}).style("stroke", function (d) {
		  return color(d.name);
		}).on("mouseover", function (d, i) {

		  	d3.select(this).style('stroke-width',3);

			// For getting the LDL/HDL/Tri/Total value at associated position on line
			var mouse = d3.mouse(this);
			var xDate = xRangeCh.invert(mouse[0]),
			  bisect = d3.bisector(function (d) {
				return d.date;
			}).right;
			var beginning = 0,
			 end = chLines[i].getTotalLength(),
			 target = null;

			while (true) {
				target = Math.floor((beginning + end) / 2);
				pos = chLines[i].getPointAtLength(target);
				if ((target === end || target === beginning) && pos.x !== mouse[0]) {
				  break;
				}
				if (pos.x > mouse[0]) end = target;else if (pos.x < mouse[0]) beginning = target;else break; // Position found
			}

			var displayValue = yRangeCh.invert(pos.y).toFixed(2)

			// For formatting things for the Text area centered just above the chart
			xDate = new Date(xDate);
			xDate = wpht_helper_d3_ch_build_better_date(xDate);
			xDate = xDate+' - '+displayValue
			d3.select("#wphealthtracker-d3chart-xaxislabel-top-ch")
				.style('opacity',1)
				.text(xDate);

			// Loop through the per-day entries, if we don't match the selected value, hide things, otherwise, display the values
			for (j = 0; j < 5; j++) {
				if (i !== j) {
					d3.select("#wphealthtracker-d3chart-linepath-ch-" + j).style("opacity", 0.1);
					d3.select("#wphealthtracker-d3chart-legendrect-ch-"+j).style("opacity",0.1);
					d3.select("#wphealthtracker-d3chart-legendtextval-ch-"+j).text('');
				} else {
					d3.select("#wphealthtracker-d3chart-legendtextval-ch-"+j).text(displayValue);
				}
			};
		}).on("mouseout", function (d, i) {
		  d3.select(this).style('stroke-width',2);
		  for (j = 0; j < 5; j++) {
		    d3.select("#wphealthtracker-d3chart-linepath-ch-" + j).style("opacity", 1);
		    d3.select("#wphealthtracker-d3chart-legendrect-ch-"+j).style("opacity",1);
		  };
		  d3.selectAll(".wphealthtracker-d3chart-legendtextval-ch").text('');
		  d3.select("#wphealthtracker-d3chart-xaxislabel-top-ch").text('');
		});

		var mouseGCh = svgChol.append("g")
			.attr("class", "mouse-over-effects-ch");

		mouseGCh
			.append("path")
			.attr("class", "wphealthtracker-d3chart-mouse-line-ch")
			.attr("id", "wphealthtracker-d3chart-mouse-line-ch")
			.style("stroke", "black")
			.style("stroke-width", "1px")
			.style("opacity", "0");

		chLines = document.getElementsByClassName('wphealthtracker-d3chart-line-ch');

		// Appending the 'mouse1, moues2, mouse3...' elements to facilitate the sliding black bar that moves with cursor
		var mouse1 = mouseGCh
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-ch");

		mouse1
			.append("text")
			.attr("id", "wphealthtracker-text0-ch")
			.attr("transform", "translate(10,3)");

		mouse1
			.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle")
			.attr("id", "wphealthtracker-circle0-ch")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(31, 119, 180)");

		var mouse2 = mouseGCh
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-ch");

		mouse2.append("text")
			.attr("id", "wphealthtracker-text1-ch")
			.attr("transform", "translate(10,3)");

		mouse2.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle")
			.attr("id", "wphealthtracker-circle1-ch")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(255, 127, 14)");

		var mouse3 = mouseGCh
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-ch");

		mouse3
			.append("text")
			.attr("id", "wphealthtracker-text2-ch")
			.attr("transform", "translate(10,3)");

		mouse3
			.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle")
			.attr("id", "wphealthtracker-circle2-ch")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(44, 160, 44)");

		var mouse4 = mouseGCh
			.append("g")
			.attr("class", "wphealthtracker-d3chart-mouse-per-line-ch");

		mouse4
			.append("text")
			.attr("id", "wphealthtracker-text3-ch")
			.attr("transform", "translate(10,3)");

		mouse4
			.append("circle")
			.attr('class', "wphealthtracker-d3chart-travelling-circle")
			.attr("id", "wphealthtracker-circle3-ch")
			.attr("r", 7)
			.style("fill", "none")
			.style("stroke-width", "1px")
			.style("opacity", "0")
			.style("stroke", "rgb(214, 39, 40)");

		// Add the Legend Text and Rects
		var legend = d3.select("#wphealthtracker-d3chart-legend-ch");

		// LDL
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-ch")
			.attr('x',115)
			.attr('y',20)
			.text(wphealthtracker_php_variables.d3trans34);
		// HDL
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-ch")
			.attr('x',115)
			.attr('y',43)
			.text(wphealthtracker_php_variables.d3trans35)
		// Tri
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-ch")
			.attr('x',225)
			.attr('y',20)
			.text(wphealthtracker_php_variables.d3trans36)
		// Total
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-ch")
			.attr('x',225)
			.attr('y',43)
			.text(wphealthtracker_php_variables.d3trans37)

		// LDL Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-ch wphealthtracker-d3chart-legendrect-ch-0")
			.attr("id", "wphealthtracker-d3chart-legendrect-ch-0")
			.attr('x',95)
			.attr('y',8)
			.attr('fill','rgb(31, 119, 180)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-ch-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-ch, .wphealthtracker-d3chart-legendrect-ch').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')
		// HDL Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-ch wphealthtracker-d3chart-legendrect-ch-1")
			.attr("id", "wphealthtracker-d3chart-legendrect-ch-1")
			.attr('x',205)
			.attr('y',8)
			.attr('fill','rgb(255, 127, 14)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-ch-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-ch, .wphealthtracker-d3chart-legendrect-ch').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')
		// Tri Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-ch wphealthtracker-d3chart-legendrect-ch-2")
			.attr("id", "wphealthtracker-d3chart-legendrect-ch-2")
			.attr('x',95)
			.attr('y',30)
			.attr('fill','rgb(44, 160, 44)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-ch-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-ch, .wphealthtracker-d3chart-legendrect-ch').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')
		// Total Rect
		legend.append("rect")
			.attr("class", "wphealthtracker-d3chart-legendrect-ch wphealthtracker-d3chart-legendrect-ch-3")
			.attr("id", "wphealthtracker-d3chart-legendrect-ch-3")
			.attr('x',205)
			.attr('y',30)
			.attr('fill','rgb(214, 39, 40)')
			.on("mouseover", function (d, i) {
				for (j = 0; j < 5; j++) {
					d3.selectAll('.wphealthtracker-d3chart-legendrect-ch-'+j).style('opacity',0)
				}
				var tempclass = (d3.select(this).attr('class')).split(' ');
				d3.selectAll('.'+tempclass[1]).style('opacity',1)
			}).on("mouseout", function (d, i) {
				d3.selectAll('.wphealthtracker-d3chart-line-ch, .wphealthtracker-d3chart-legendrect-ch').style('opacity',1)
			})
			.style('width', '15')
			.style('height', '15')

		// LDL Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-ch")
			.attr("id", "wphealthtracker-d3chart-legendtextval-ch-0")
			.attr('x',50)
			.attr('y',20)
		// HDL Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-ch")
			.attr("id", "wphealthtracker-d3chart-legendtextval-ch-1")
			.attr('x',160)
			.attr('y',20)
		// Tri Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-ch")
			.attr("id", "wphealthtracker-d3chart-legendtextval-ch-2")
			.attr('x',50)
			.attr('y',43)
		// Total Value Text
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legendtextval wphealthtracker-d3chart-legendtextval-ch")
			.attr("id", "wphealthtracker-d3chart-legendtextval-ch-3")
			.attr('x',160)
			.attr('y',43)

		// Add the top text area just above the chart to display date/time/avlue
		svgChol.append("text")
			.attr("class", "wphealthtracker-d3chart-xaxislabel-top")
			.attr("id", "wphealthtracker-d3chart-xaxislabel-top-ch")
			.attr("transform", "translate(" + width / 2 + " ," + -15 + ")")
			.style("text-anchor", "middle")
			.style('opacity',0)
			.text('fushfshfjdshj')

		function wpht_helper_d3_ch_build_better_date(date){
			date = String(date).split(' ');
			var time = wpht_helper_d3_ch_convert_to_am_pm(date[4]);
			return date[0]+' '+date[1]+' '+date[2]+' '+date[3]+' '+time;
		}

		function wpht_helper_d3_ch_convert_to_am_pm(time) {
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
		function wpht_helper_d3_ch_mousemove() {

			$('#wphealthtracker-chart-hover-message-ch').animate({
	           opacity:0
	        }, {
	           duration: 500,
	           complete: function() { 
	           		$(this).css({'pointer-events':'none','z-index':-99999})
	           } 
	        });

			var mouse = d3.mouse(this);
			d3.select("#wphealthtracker-d3chart-mouse-line-ch").attr("d", function (){
				var d = "M" + mouse[0] + "," + height;
				d += " " + mouse[0] + "," + 0;
				return d;
			});

			d3.selectAll(".wphealthtracker-d3chart-mouse-per-line-ch").attr("transform", function (d, i){

				d3.select("#wphealthtracker-text0-ch").style("opacity", '1');
				d3.select("#wphealthtracker-text1-ch").style("opacity", '1');
				d3.select("#wphealthtracker-text2-ch").style("opacity", '1');
				d3.select("#wphealthtracker-text3-ch").style("opacity", '1');
				d3.select(".wphealthtracker-d3chart-mouse-line-ch").style("opacity", '1');

				// This if is to ensure we don't go over the number of individual data items contained within a day - without this if, this function would run an amount of times equal to how many days of data there are.
				if(i < chLines.length){
					var xDate = xRangeCh.invert(mouse[0]),
					  bisect = d3.bisector(function (d) {
						return d.date;
					}).right;

					var beginning = 0,
					 end = chLines[i].getTotalLength(),
					  target = null;

					while (true) {
						target = Math.floor((beginning + end) / 2);
						pos = chLines[i].getPointAtLength(target);
						if ((target === end || target === beginning) && pos.x !== mouse[0]) {
						  break;
						}
						if (pos.x > mouse[0]) end = target;else if (pos.x < mouse[0]) beginning = target;else break; //position found
					}

					xDate = new Date(xDate);
					xDate = wpht_helper_d3_ch_build_better_date(xDate);
					d3.select("#wphealthtracker-d3chart-xaxislabel-top-ch")
						.style('opacity',1)
						.text(xDate);

					// Moving the Circles with the black bar
					d3.select(this).select('circle').style("opacity", '1');
					var displayValue = yRangeCh.invert(pos.y).toFixed(2);
					d3.select(this).select('text').text(displayValue);
					d3.select("#wphealthtracker-d3chart-legendtextval-ch-"+i).text(displayValue);

					return "translate(" + mouse[0] + "," + pos.y + ")";
				}
			});
		};

		// Hide the the spinner
    	$('#wphealthtracker-spinner-d3-await-3').animate({'opacity':'0'})

    	$('#wphealthtracker-chart-hover-message-ch').html('<p>'+wphealthtracker_php_variables.d3trans20+'</p>');
	});
}