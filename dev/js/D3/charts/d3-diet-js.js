/**
 * JavaScript Functions - d3-diet-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

"use strict";

function wphealthtrackerDietD3One(mydataFoodItems, $){

	// Set dimensions.
	var margin = {
		top: 120,
		right: 40,
		left: 60,
		bottom: 100
	};
	var width = 550 - margin.right - margin.left;
	var height = 450 - margin.top - margin.bottom;

	var formatPercent = d3.format("0");
	var x = d3.scaleBand().rangeRound([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	var xAxis = d3.axisBottom(x);
	var yAxis = d3.axisLeft(y).tickFormat(function(e){
        if(Math.floor(e) != e){
            return;
        }
        return e;
    });

    d3.select("#wphealthtracker-stats-actual-inner-d3-1-1")
    	.style('bottom','20px');

	var svg = d3.select("#wphealthtracker-stats-actual-inner-d3-1-1").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .style("opacity",'0')
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.tsv('', wpht_helper_d3_fooditem_type, function(error, data) {
		data = mydataFoodItems;
		console.log('mydata')
		console.log(data)

	  x.domain(data.map(function(d) { return d.letter; }));
	  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

	  svg.append("g")
	      .attr("class", "x axis wphealthtracker-d3chart-x-axis-food-items")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

	  svg.append("g")
	      .attr("class", "y axis wphealthtracker-d3chart-y-axis-food-items")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text("Frequency");

	  svg.selectAll(".wphealthtracker-d3chart-bar-fooditem")
	      .data(data)
	    .enter().append("rect")
	      .attr("class", "wphealthtracker-d3chart-bar wphealthtracker-d3chart-bar-fooditem")
	      .attr("x", function(d) { return x(d.letter)+2 })
	      .attr("width", x.bandwidth()-2)
	      .attr("y", function(d) { return y(d.frequency) })
	      .attr("height", function(d) { return height - y(d.frequency); })
	      .style("margin",'2px')
	      .style("padding",'2px')
	      .on('mouseover', function(d){

	      	d3.selectAll(".wphealthtracker-d3chart-bar-fooditem")
	      		.style("fill",'#F3BFCE');

	      	d3.select(this)
	      		.style("fill",'rgba(222, 35, 90, 1)');

	      	// Modify the Food Name
	      	var categoryName = d.letter.split(';');
	      	var foodName = '<img class="wphealthtracker-d3chart-iconimg-fooditems" src="'+wphealthtrackerPhpVariables.WPHEALTHTRACKER_ROOT_IMG_ICONS_URL+'groceries.svg" />'+categoryName[0].charAt(0).toUpperCase() + categoryName[0].slice(1);
	      	if ( categoryName[1] !== ''){
	      		categoryName = '      ('+wphealthtrackerPhpVariables.commontrans35+': '+categoryName[1]+')'
	      	} else {
	      		categoryName = '';
	      	}
	      	categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

			d3.select(".wphealthtracker-d3chart-readout-fooditems")
				.style("opacity", "1")
				.select("#wphealthtracker-d3chart-tooltip-fooditems-item")
				.html(foodName)

			d3.select(".wphealthtracker-d3chart-readout-fooditems")
				.style("opacity", "1")
				.select("#wphealthtracker-d3chart-tooltip-fooditems-category")
				.text(categoryName)

				var consumedText1 = '<p id="wphealthtracker-d3chart-consumed1-fooditems">';
				var consumedText2 = '';
				var finalConsumedText = '';
				if(d.frequency == 1){
					consumedText1 = consumedText1+wphealthtrackerPhpVariables.diettrans32+' '+d.frequency+' '+wphealthtrackerPhpVariables.commontrans44;
				} else {
					consumedText1 = consumedText1+wphealthtrackerPhpVariables.diettrans32+' '+d.frequency+' '+wphealthtrackerPhpVariables.commontrans43;
				}
				consumedText1 = consumedText1+'</p>';

				var energies = d.calories.split(';');

				consumedText2 = '<p id="wphealthtracker-d3chart-consumed2-fooditems">'+wphealthtrackerPhpVariables.diettrans9+': '+energies[0]+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans33+': '+energies[1]+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans34+': '+energies[2]+'</p>';

				// Now build the MacroNutrients String
				var carbs = wphealthtrackerPhpVariables.commontrans45;
				var protein = wphealthtrackerPhpVariables.commontrans45;
				var fats = wphealthtrackerPhpVariables.commontrans45;

				if(d.carbs != ''){
					carbs = d.carbs;
				}

				if(d.protein != ''){
					protein = d.protein;
				}

				if(d.fats != ''){
					fats = d.fats;
				}

				consumedText3 = '<p id="wphealthtracker-d3chart-consumed3-fooditems">'+wphealthtrackerPhpVariables.diettrans35+': '+carbs+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans12+': '+protein+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans36+': '+fats+'</p>';


				// Now build the Fats String
				var satfats = wphealthtrackerPhpVariables.commontrans45;
				var monosatfats = wphealthtrackerPhpVariables.commontrans45;
				var polysatfats = wphealthtrackerPhpVariables.commontrans45;

				if(d.satfats != ''){
					satfats = d.satfats;
				}

				if(d.monosatfats != ''){
					monosatfats = d.monosatfats;
				}

				if(d.polysatfats != ''){
					polysatfats = d.polysatfats;
				}

				consumedText4 = '<p id="wphealthtracker-d3chart-consumed3-fooditems">'+wphealthtrackerPhpVariables.diettrans5+': '+satfats+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans37+': '+monosatfats+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans38+': '+polysatfats+'</p>';

				// Now build the Carbs String
				var sugars = wphealthtrackerPhpVariables.commontrans45;
				var fiber = wphealthtrackerPhpVariables.commontrans45;

				if(d.sugars != ''){
					sugars = d.sugars;
				}

				if(d.fiber != ''){
					fiber = d.fiber;
				}

				consumedText5 = '<p id="wphealthtracker-d3chart-consumed3-fooditems">'+wphealthtrackerPhpVariables.diettrans39+': '+sugars+'&nbsp;&nbsp;&nbsp;&nbsp;'+wphealthtrackerPhpVariables.diettrans40+': '+fiber+'</p>';




				finalConsumedText = consumedText1+consumedText2+consumedText3+consumedText4+consumedText5;

			d3.select(".wphealthtracker-d3chart-readout-fooditems")
				.select("#wphealthtracker-d3chart-tooltip-fooditems-number")
				.html(finalConsumedText);

	      })
	      .on('mouseout', function(){
	      	d3.selectAll(".wphealthtracker-d3chart-bar-fooditem")
	      		.style("fill",'rgba(222, 35, 90, 1)');

	      })

	      d3.select("input").on("change", wpht_helper_d3_fooditem_change);

	      var sortTimeout = setTimeout(function() {
	      	// Hide the spinner.
	      	$('#wphealthtracker-stats-actual-inner-d3-1-1 svg').animate({'opacity':'1'}, 2000)
    		$('#wphealthtracker-spinner-d3-await-1').animate({'opacity':'0'})
    		$('#wphealthtracker-chart-hover-message-fooditem').html('<p>'+wphealthtrackerPhpVariables.d3trans54+'</p>');
		    d3.select("input").property("checked", true).each(wpht_helper_d3_fooditem_change);
		  }, 2000);

	      function wpht_helper_d3_fooditem_change() {
		    clearTimeout(sortTimeout);

		    // Copy-on-write since tweens are evaluated after a delay.
		    var x0 = x.domain(data.sort(this.checked
		        ? function(a, b) { return b.frequency - a.frequency; }
		        : function(a, b) { return d3.ascending(a.letter, b.letter); })
		        .map(function(d) { return d.letter; }))
		        .copy();

		    svg.selectAll(".wphealthtracker-d3chart-bar-fooditem")
		        .sort(function(a, b) { return x0(a.letter) - x0(b.letter); });

		    var transition = svg.transition().duration(750),
		        delay = function(d, i) { return i * 50; };

		    transition.selectAll(".wphealthtracker-d3chart-bar-fooditem")
		        .delay(delay)
		        .attr("x", function(d) { return x0(d.letter); });

		    transition.select(".x.axis")
		        .call(xAxis)
		      .selectAll("g")
		        .delay(delay);
		  }

	});

	function wpht_helper_d3_fooditem_type(d) {
	  d.frequency = +d.frequency;
	  return d;
	}
}

function wphealthtrackerDietD3Two(mydataEnergy, $) {

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
		.text(wphealthtrackerPhpVariables.d3trans69);

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
		var dataEnergy = mydataEnergy;
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
			.text(wphealthtrackerPhpVariables.diettrans34);
		// Calories
		legend.append("text")
			.attr("class", "wphealthtracker-d3chart-legend wphealthtracker-d3chart-legend-energy")
			.attr('x',80)
			.attr('y',43)
			.text(wphealthtrackerPhpVariables.diettrans8)
		

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
				if(+tmpArr[0] == '00') {
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

    	$('#wphealthtracker-chart-hover-message-energy').html('<p>'+wphealthtrackerPhpVariables.d3trans20+'</p>');
	});

}

function wphealthtrackerDietD3Three(d3Three, $){

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

	$('#wphealthtracker-chart-hover-message-macro').html('<p>'+wphealthtrackerPhpVariables.d3trans72+'</p>');

}