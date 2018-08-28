/**
 * JavaScript Functions - d3-vitals-js.js
 *
 * @author   Jake Evans
 * @category JavaScript
 * @package  Includes/Assets/Js
 * @version  0.0.1
 */

"use strict";

function wphealthtracker_vitals_d3_1(mydata) {

  // Basic SVG setup
  var margin = { top: 50, right: 150, bottom: 5, left: 35 };
  var height = 350 - margin.top - margin.bottom;
  var width = 375 - margin.left - margin.right;

  var svg = d3.select("#wphealthtracker-stats-actual-inner-d3-1-1").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // setup scales - the domain is specified inside of the function called when we load the data
  var xScale = d3.time.scale().range([0, width]);
  var yScale = d3.scale.linear().range([height, 0]);
  var color = d3.scale.category10();

  // setup the axes
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");

  // create function to parse dates into date objects
  var parseDate = d3.time.format("%Y-%m-%d").parse;
  var formatDate = d3.time.format("%Y-%m-%d");
  var bisectDate = d3.bisector(function (d) {
    return d.date;
  }).left;

  // Set the line attributes
  var line = d3.svg.line().interpolate("basis").x(function (d) {
    return xScale(d.date);
  }).y(function (d) {
    return yScale(d.close);
  });

  var focus = svg.append("g").style("display", "none");

  // Get the data
  d3.csv("", function (error, data) {

    // Using my own data instead of suppling a URL/File path to the first argument in the d3.csv() function above (instead, we just pass an empty string)
    data = mydata;

    data.forEach(function (d) {
      d.date = parseDate(d.date), Kilograms = d.Kilograms, Pounds = d.Pounds;
    });

    // Sort data ascending - needed to get correct bisector results
    data.sort(function (a, b) {
      return a.date - b.date;
    });

    // color domain
    color.domain(d3.keys(data[0]).filter(function (key) {
      return key !== "date";
    }));

    // create stocks array with object for each company containing all data
    var stocks = color.domain().map(function (name) {
      return {
        name: name,
        values: data.map(function (d) {
          return { date: d.date, close: d[name] };
        })
      };
    });

    // add domain ranges to the x and y scales
    xScale.domain([d3.min(stocks, function (c) {
      return d3.min(c.values, function (v) {
        return v.date;
      });
    }), d3.max(stocks, function (c) {
      return d3.max(c.values, function (v) {
        return v.date;
      });
    })]);
    yScale.domain([d3.min(stocks, function (c) {
      return d3.min(c.values, function (v) {
        return v.close - v.close * 0.20;
      });
    }), d3.max(stocks, function (c) {
      return d3.max(c.values, function (v) {
        return v.close + v.close * 0.05;
      });
    })]);

    // add the x axis
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").style("font-size", "10px");
    //.call(xAxis);

    // add the y axis
    svg.append("g").attr("class", "y axis").call(yAxis); /*
                                                         .append("text")
                                                         .attr("y",0)
                                                         .attr("x",-65)
                                                         .attr("dy",".71em")
                                                         .attr("dx",".71em")
                                                         .style({"text-anchor":"end","font-weight":"bold", "font-size":"15px"})
                                                         .text("Weight");
                                                         */
    // add circle at intersection
    focus.append("circle").attr("class", "y").style("fill", "#F8C849").style("stroke", "#F8C849").style("opacity", "1").attr("r", 4);

    // add circle at intersection
    focus.append("circle").attr("class", "x").style("fill", "#F8C849").style("stroke", "#F8C849").style("opacity", "1").attr("r", 4);

    // Place the Pounds value at the intersection
    focus.append("text").style("fill", "#DE235A").style("background-color", "#DE235A").style("font-weight", "bold").style("opacity", 1).attr("class", "y1").attr("dx", 8).attr("dy", "1.4em");

    // Place the Date value at the Pounds intersection
    focus.append("text").style("fill", "#DE235A").style("background-color", "#DE235A").style("font-weight", "bold").style("opacity", 1).attr("class", "y2").attr("dx", 8).attr("dy", "2.5em");

    // Place the Kilograms value at the intersection
    focus.append("text").style("fill", "#DE235A").style("background-color", "#DE235A").style("font-weight", "bold").style("opacity", 1).attr("class", "y3").attr("dx", 8).attr("dy", "1.4em");

    // Place the Date value at the Kilograms intersection
    focus.append("text").style("fill", "#DE235A").style("background-color", "#DE235A").style("font-weight", "bold").style("opacity", 1).attr("class", "y4").attr("dx", 8).attr("dy", "2.5em");

    // add horizontal line at intersection
    focus.append("line").attr("class", "x").style("fill", "#F8C849").style("stroke", "#F8C849").attr("stroke-dasharray", "3,3").style("opacity", 0.5).attr("x1", 0).attr("x2", width);

    // add horizontal line at intersection
    focus.append("line").attr("class", "x2").style("fill", "#F8C849").style("stroke", "#F8C849").attr("stroke-dasharray", "3,3").style("opacity", 0.5).attr("x1", 0).attr("x2", width);

    // add vertical line at intersection
    focus.append("line").attr("class", "y").style("fill", "#F8C849").style("stroke", "#F8C849").attr("stroke-dasharray", "3,3").style("opacity", 0.5).attr("y1", 0).attr("y2", height);

    // append rectangle for capturing if mouse moves within area
    svg.append("rect").attr("width", width).attr("height", height).style("fill", "none").style("pointer-events", "all").on("mouseover", function () {
      focus.style("display", null);
    }).on("mouseout", function () {
      focus.style("display", "none");
    }).on("mousemove", mousemove);

    // add the line groups
    var stock = svg.selectAll(".stockXYZ").data(stocks).enter().append("g").attr("class", "stockXYZ");

    // add the stock price paths
    stock.append("path").attr("class", "line").attr("id", function (d, i) {
      return "id" + i;
    }).attr("d", function (d) {
      return line(d.values);
    }).style("stroke", function (d) {
      return color(d.name);
    });

    // add the stock labels at the right edge of chart
    var maxLen = data.length;
    stock.append("text").datum(function (d) {
      return { name: d.name, value: d.values[maxLen - 1] };
    }).attr("transform", function (d) {

      if (d.name == wphealthtrackerPhpVariables.d3trans19) {
        return "translate(" + xScale(d.value.date) + "," + yScale(d.value.close) + ")";
      } else {
        return "translate(" + xScale(d.value.date) + "," + yScale(d.value.close) + ")";
      }
    }).style({ "font-size": "15px", "font-weight": "bold" }).style("fill", function (d) {
      if (d.name == wphealthtrackerPhpVariables.d3trans19) {
        return "rgb(31, 119, 180)";
      } else {
        return "rgb(255, 127, 14)";
      }
    }).attr("id", function (d, i) {
      return "text_id" + i;
    }).attr("x", 3).attr("dy", ".35em").text(function (d) {
      return d.name;
    }).on("mouseover", function (d, i) {
      for (j = 0; j < 6; j++) {
        if (i !== j) {
          d3.select("#id" + j).style("opacity", 0.1);
          d3.select("#text_id" + j).style("opacity", 0.2);
        }
      };
    }).on("mouseout", function (d, i) {
      for (j = 0; j < 6; j++) {
        d3.select("#id" + j).style("opacity", 1);
        d3.select("#text_id" + j).style("opacity", 1);
      };
    });

    // mousemove function
    function mousemove() {

      var x0 = xScale.invert(d3.mouse(this)[0]);
      var i = bisectDate(data, x0, 1); // gives index of element which has date higher than x0
      var d0 = data[i - 1],
          d1 = data[i];
      var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
      var close = d3.max([+d.Kilograms, d.Pounds]);

      focus.select("circle.y").attr("transform", "translate(" + xScale(d.date) + "," + yScale(close) + ")");

      focus.select("circle.x").attr("transform", "translate(" + xScale(d.date) + "," + yScale(d.Kilograms) + ")");

      focus.select("line.y").attr("y2", height - yScale(close)).attr("transform", "translate(" + xScale(d.date) + "," + yScale(close) + ")");

      focus.select("line.x").attr("x2", xScale(d.date)).attr("transform", "translate(0," + yScale(close) + ")");

      focus.select("line.x2").attr("x2", xScale(d.date)).attr("transform", "translate(0," + yScale(d.Kilograms) + ")");

      focus.select("text.y1").attr("transform", "translate(" + xScale(d.date) + "," + yScale(close) + 20 + ")").text(close.toFixed(2));

      // Format date for displaying in circle
      var date = String(formatDate(d.date)).split('-');
      var myDateFormat = date[1] + '/' + date[2] + '/' + date[0].slice(-2);

      focus.select("text.y2").attr("transform", "translate(" + xScale(d.date) + "," + yScale(close) + ")").text(myDateFormat);

      focus.select("text.y3").attr("transform", "translate(" + xScale(d.date) + "," + yScale(d.Kilograms) + 20 + ")").text(d.Kilograms.toFixed(2));

      // Format date for displaying in circle
      var date = String(formatDate(d.date)).split('-');
      var myDateFormat = date[1] + '/' + date[2] + '/' + date[0].slice(-2);

      focus.select("text.y4").attr("transform", "translate(" + xScale(d.date) + "," + yScale(d.Kilograms) + ")").text(myDateFormat);
    };
  });
}

function wphealthtracker_vitals_d3_2(mydata) {
  var bisectDate = d3.bisector(function (d) {
    return d.date;
  }).left;

  function filterJSON(json, key, value) {
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
    top: 80,
    right: 40,
    left: 50,
    bottom: 200
  };
  var width = 1000 - margin.right - margin.left;
  var height = 800 - margin.top - margin.bottom;

  var svg = d3.select("svg").attr('width', width + margin.right + margin.left).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", width).attr("height", height);

  // Parse the time 
  var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%L");

  //Set the ranges
  var x = d3.scaleTime().domain([new Date(2018, 1, 1), new Date(2018, 1, 10)]).range([0, width]);

  var y = d3.scaleLinear().range([height, 0]);

  var xAxis = d3.axisBottom(x);
  //.tickSize(-height);

  var yAxis = d3.axisLeft(y).tickSize(-width);

  // Define the line
  var stationLine = d3.line().x(function (d) {
    return x(d.date);
  }).y(function (d) {
    return y(d.value);
  });

  var xGroup = svg.append("g")
  //.attr("class", "axis") 
  .attr("transform", "translate(0," + height + ")");

  // zoom effect
  var zoom = d3.zoom().scaleExtent([1, 32]).extent([[0, 0], [width, height]]).translateExtent([[0, 0], [width, height]]).on("zoom", zoomed);

  // zoom panel
  var zoomRect = svg.append("rect").attr("width", width).attr("height", height).attr("fill", "none").attr("pointer-events", "all")
  //.on("mousemove", mousemove)
  .call(zoom);

  //globals
  var data;
  var series;
  var dataFiltered;
  var lines;
  var updateOn;
  var maxChart;
  var maxLine;

  var datafile = "https://gist.githubusercontent.com/AF7TI/d494e77abef2d27738d2a8a825400236/raw/ce7a98dcc7e10da7f2922a900dbeaf49cf885f7e/data_small.json";
  var largedatafile = "https://gist.githubusercontent.com/AF7TI/d494e77abef2d27738d2a8a825400236/raw/b11ed18d2b92bd458d3494960f4c2be17f51891b/data_large.json";
  // Get the data
  d3.json(datafile, function (error, json) {
    json.forEach(function (d) {
      d.value = +d.value;
      d.date = parseDate(d.date);
    });

    seriesNest = d3.nest().key(function (d) {
      return d.variable;
    }).sortKeys(d3.ascending).entries(json);

    var list = d3.select("#seriesMenu").append("select");

    list.selectAll("option").data(seriesNest).enter().append("option").attr("value", function (d) {
      return d.key;
    }).text(function (d) {
      return d.key;
    });

    list.on("change", function () {
      series = d3.event.target.value;
      if (updateOn == true) {
        console.log('updateOn is true using updatedJson');
        json = updatedJson;
        data = filterJSON(json, 'variable', series); //global data set
        updateGraph(data);
      } else {
        console.log('updateOn is false using original json');
        if (updateOn == false) {
          json = originalJson;
        } else {}
        data = filterJSON(json, 'variable', series); //global data set
        updateGraph(data);
      }
    });

    // generate initial graph using first series name
    series = seriesNest[0].key;
    data = filterJSON(json, 'variable', series);
    updateGraph(data);
  });

  function updateGraph(data) {

    d3.select(".mouse-line").remove();
    d3.selectAll(".mouse-per-line circle").remove();
    d3.selectAll(".mouse-per-line text").remove();
    d3.selectAll(".mouse-per-line").remove();
    /* d3.selectAll(".legend").remove();
    d3.selectAll(".legendData").remove();
    d3.selectAll(".legendcheckbox").remove();
    d3.selectAll(".line").remove(); */
    d3.selectAll(".xaxismax").remove();

    data.forEach(function (d) {
      return d.value = +d.value;
    });

    console.log('data[0].variable ' + data[0].variable);

    var t = d3.transition().duration(750);

    dataCopy = data;
    dataFiltered = dataCopy.filter(function (d) {
      return $("." + d.station_id).attr("fill") != "#ccc";
    });
    maxChart = d3.max(dataFiltered.sort(function (a, b) {
      return d3.descending(a.value, b.value);
    }));
    console.log('updateGraph dataFiltered length: ' + dataFiltered.length);
    console.log('updateGraph dataFiltered max: ' + d3.max(dataFiltered, function (d) {
      return d.value;
    }));
    x.domain(d3.extent(dataFiltered, function (d) {
      return d.date;
    }));
    y.domain([d3.min(dataFiltered, function (d) {
      return d.value;
    }), d3.max(dataFiltered, function (d) {
      return d.value;
    })]);

    var color = d3.scaleOrdinal().domain(data).range(["#3957ff", "#d3fe14", "#c9080a", "#fec7f8", "#0b7b3e", "#0bf0e9", "#c203c8", "#fd9b39", "#888593", "#906407", "#98ba7f", "#fe6794", "#10b0ff", "#ac7bff", "#fee7c0", "#964c63", "#1da49c", "#0ad811", "#bbd9fd", "#fe6cfe", "#297192", "#d1a09c", "#78579e", "#81ffad", "#739400", "#ca6949", "#d9bf01", "#646a58", "#d5097e", "#bb73a9", "#ccf6e9", "#9cb4b6", "#b6a7d4", "#9e8c62", "#6e83c8", "#01af64", "#a71afd", "#cfe589", "#d4ccd1", "#fd4109", "#bf8f0e", "#2f786e", "#4ed1a5", "#d8bb7d", "#a54509", "#6a9276", "#a4777a", "#fc12c9", "#606f15", "#3cc4d9", "#f31c4e", "#73616f", "#f097c6", "#fc8772", "#92a6fe", "#875b44", "#699ab3", "#94bc19", "#7d5bf0", "#d24dfe", "#c85b74", "#68ff57", "#b62347", "#994b91", "#646b8c"]);

    zoomRect.call(zoom.transform, d3.zoomIdentity);

    // Nest the entries by station
    dataNest = d3.nest() //global dataNest set
    .key(function (d) {
      return d.station_id;
    }).entries(data);

    // match data with selector status
    var result = dataNest.filter(function (d) {
      return $("." + d.key).attr("fill") != "#ccc";
    });

    // JOIN new data with old elements.
    var station = svg.selectAll(".line").data(result, function (d) {
      return d.key;
    }).on("mouseover", handleMouseOver).on("mouseout", handleMouseOut);

    // ENTER new elements present in new data.
    station.enter().append("path").style("stroke", function (d, i) {
      return d.color = color(d.key);
    }).attr("class", "line").on("mouseover", handleMouseOver).on("mouseout", handleMouseOut).attr("id", function (d) {
      return 'tag' + d.key;
    }).attr("linekey", function (d) {
      return d.key;
    }).attr("name", function (d) {
      return d.values[0].name;
    }).attr("d", function (d) {
      return stationLine(d.values);
    }).attr("clip-path", "url(#clip)");

    station.transition(t).attr("id", function (d) {
      return 'tag' + d.key;
    }).attr("d", function (d) {
      return stationLine(d.values);
    });

    // EXIT old elements not present in new data.
    station.exit().transition(t).remove();

    // text label for the x axis
    var txtMaxLine = svg.append("text").attr("transform", "translate(" + 0 + " ," + (height + 100) + ")").style("text-anchor", "left").attr("class", "xaxismaxline");
    //.text('Line Max: ' + maxLine.value + " " + maxLine.date + " " + maxLine.name);

    // JOIN new data with old elements.
    var legend = d3.select("#legend").selectAll(".legend").data(dataNest, function (d) {
      return d.key;
    }).attr("id", function (d) {
      return 'legend' + d.key;
    });

    // Add the Legend text
    legend.enter().append("text").attr("x", 80).attr("y", function (d, i) {
      return 20 + i * 25;
    }).attr("class", "legend").text(function (d) {
      return d.values[0].name;
    });

    legend.enter().append("text").attr("x", 0).attr("y", function (d, i) {
      return 20 + i * 25;
    }) // spacing
    .attr("id", function (d, i) {
      return "legendData" + d.key;
    }).attr("class", "legendData");

    // ENTER new elements present in new data checkboxes
    legend.enter().append("rect").attr("width", 15).attr("height", 15).attr("x", 50).attr("y", function (d, i) {
      return 7.5 + i * 25;
    }) // spacing
    .attr("fill", function (d) {
      return color(d.key);
    }).attr("class", function (d, i) {
      return "legendcheckbox " + d.key;
    }).attr("region_id", function (d, i) {
      return d.values[0].region_id;
    }).attr("id", function (d, i) {
      return "legendRect" + d.key;
    }).on("mouseover", function (d) {
      tempid = d.key;
      dataFilteredTemp = dataFiltered.filter(function (d) {
        return d.station_id == tempid;
      });
      maxLine = d3.max(dataFilteredTemp.sort(function (a, b) {
        return d3.descending(a.value, b.value);
      }));
      svg.selectAll(".line").style("opacity", 0.15);
      svg.select('path#tag' + d.key + '.line').style("stroke-width", 5).style("opacity", 1);;
      d3.select(".xaxislinedetail").text(d.values[0].name);
      d3.select(".xaxismaxline").text('Line Max: ' + maxLine.value + " " + maxLine.date + " " + maxLine.name);
      d3.selectAll(".legendcheckbox").style("opacity", 0.15);
      d3.select("#legendRect" + d.key).style("opacity", 1);
    }).on("mouseout", function (d) {
      svg.selectAll(".line").style("opacity", 1);
      svg.select('path#tag' + d.key + '.line').style("stroke-width", 1.5);
      d3.select(".xaxislinedetail").text("");
      d3.select(".xaxismaxline").text("");
      d3.selectAll(".legendcheckbox").style("opacity", 1);
    }).on("click", function (d) {
      //console.log('click ' + d.values[0].name + ' ' + d.values[0].variable);
      d3.select(this).attr("fill", function (d) {
        if (d3.select(this).attr("fill") == "#ccc") {
          //grey fill
          return color(d.key);
        } else {
          return "#ccc";
        }
      });
      // matching the data with selector status
      var result = dataNest.filter(function (d) {
        return $("." + d.key).attr("fill") != "#ccc";
      });
      dataFiltered = dataCopy.filter(function (d) {
        return $("." + d.station_id).attr("fill") != "#ccc";
      });
      maxChart = d3.max(dataFiltered.sort(function (a, b) {
        return d3.descending(a.value, b.value);
      }));
      //console.log('dataCopy[0].variable ' + dataCopy[0].variable);
      //console.log ('data length: ' + dataCopy.length);
      //console.log('data max: ' + d3.max(dataCopy, d => d.value));
      //console.log ('dataFiltered length: ' + dataFiltered.length);
      //console.log('dataFiltered max: ' + d3.max(dataFiltered, d => d.value));
      x.domain(d3.extent(dataFiltered, function (d) {
        return d.date;
      }));
      y.domain([d3.min(dataFiltered, function (d) {
        return d.value;
      }), d3.max(dataFiltered, function (d) {
        return d.value;
      })]);

      d3.selectAll(".line") // change the line
      .transition(t).attr("d", function (d) {
        return stationLine(d.values);
      });

      svg.select(".ygrid") // change the y axis
      .transition(t).call(yAxis);
      yAxis.scale(y);
      d3.select(".ygrid").transition(t).call(yAxis);

      // Hide or show the lines based on the ID
      svg.selectAll(".line").data(result, function (d) {
        return d.key;
      }).enter().append("path").attr("id", function (d) {
        return 'tag' + d.key;
      }).attr("class", "line").attr("linekey", function (d) {
        return d.key;
      }).attr("name", function (d) {
        return d.values[0].name;
      }).attr("clip-path", "url(#clip)").style("stroke", function (d, i) {
        return d.color = color(d.key);
      }).on("mousemove", handleMouseOver).on("mouseout", handleMouseOut).attr("d", function (d) {
        return stationLine(d.values);
      });

      svg.selectAll(".line").data(result, function (d) {
        return d.key;
      }).exit().transition(t).style("opacity", 0).remove();

      svg.selectAll(".xaxismax").text('Chart Max: ' + maxChart.value + " " + maxChart.date + " " + maxChart.name);

      var mousePerLine = mouseG.selectAll('.mouse-per-line').data(result).enter().append("g").attr("class", "mouse-per-line").attr("id", function (d) {
        return 'm' + d.key;
      });

      mousePerLine.append("circle").attr("r", 7).style("fill", "none").style("stroke-width", "1px").style("opacity", "0");

      mousePerLine.append("text").attr("transform", "translate(10,3)");

      d3.selectAll(".mouse-per-line").data(result).exit().remove();

      return result;
    }); //END CLICK 

    svg.selectAll(".axislabel").remove();
    svg.selectAll(".ygrid").remove();
    svg.selectAll(".axis").remove();

    // Add the Y Axis
    svg.append("g").attr("class", "ygrid").transition(t).call(yAxis);

    // text label for the y axis
    svg.append("text").attr("transform", "rotate(-90)").attr("y", -40).attr("x", 0 - height / 2).attr("class", "axislabel").style("text-anchor", "middle").text(series);

    // text label for the x axis
    svg.append("text").attr("transform", "translate(" + width / 2 + " ," + -15 + ")").style("text-anchor", "middle").attr("class", "xaxislabel");

    // text label for the x axis
    svg.append("text").attr("transform", "translate(" + width / 2 + " ," + (height + 50) + ")").style("text-anchor", "middle").attr("class", "xaxislinedetail");

    // text label for the x axis
    var maxText = svg.append("text").attr("transform", "translate(" + 0 + " ," + (height + 125) + ")").style("text-anchor", "left").attr("class", "xaxismax").text('Chart Max: ' + maxChart.value + " " + maxChart.date + " " + maxChart.name);

    var mouseG = svg.append("g").attr("class", "mouse-over-effects");

    mouseG.append("path") // this is the black vertical line to follow mouse
    .attr("class", "mouse-line").style("stroke", "black").style("stroke-width", "1px").style("opacity", "0");

    lines = document.getElementsByClassName('line');

    var mousePerLine = mouseG.selectAll('.mouse-per-line').data(result).enter().append("g").attr("class", "mouse-per-line").attr("id", function (d) {
      return 'm' + d.key;
    });

    mousePerLine.append("circle").attr("r", 7).style("fill", "none").style("stroke-width", "1px").style("opacity", "0");

    mousePerLine.append("text").attr("transform", "translate(10,3)");

    mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
    .attr('width', width) // can't catch mouse events on a g element
    .attr('height', 200).attr("transform", "translate(0," + height + ")").attr('fill', 'none').attr('pointer-events', 'all').on('mouseout', function () {
      // on mouse out hide line, circles and text
      d3.select(".mouse-line").style("opacity", "0");
      d3.selectAll(".mouse-per-line circle").style("opacity", "0");
      d3.selectAll(".mouse-per-line text").style("opacity", "0");
    }).on('mouseover', touchStart).on('touchstart', touchStart).on('mousemove', touchMove).on('touchmove', touchMove);
  } // END UPDATEGRAPH

  function touchStart() {
    // on mouse in show line, circles and text
    d3.select(".mouse-line").style("opacity", "1");
    d3.selectAll(".mouse-per-line circle").style("opacity", "1");
    d3.selectAll(".mouse-per-line text").style("opacity", "1");
  }

  function touchMove() {
    d3.event.preventDefault();
    var mouse = d3.mouse(this);
    var transform = d3.zoomTransform(zoomRect.node());
    var xtScale = transform.rescaleX(x);
    d3.select(".mouse-line").attr("d", function () {
      //var x0 = xtScale.invert(mouse[0]);
      var d = "M" + mouse[0] + "," + height;
      //var d = "M" + x0 + "," + height;
      d += " " + mouse[0] + "," + 0;
      //console.log ('mousemove d: ' + d);
      return d;
    });

    d3.selectAll(".mouse-per-line").attr("transform", function (d, i) {
      //console.log(width/mouse[0]);
      var xDate = xtScale.invert(mouse[0]),
          bisect = d3.bisector(function (d) {
        return d.date;
      }).right;
      idx = bisect(d.values, xDate);

      var beginning = 0,
          end = lines[i].getTotalLength(),
          target = null;

      while (true) {
        target = Math.floor((beginning + end) / 2);
        pos = lines[i].getPointAtLength(target);
        if ((target === end || target === beginning) && pos.x !== mouse[0]) {
          break;
        }
        if (pos.x > mouse[0]) end = target;else if (pos.x < mouse[0]) beginning = target;else break; //position found
      }

      var fillColor = d3.select("#legendRect" + d.key).attr("fill");

      d3.select(this).select('circle').style("stroke", fillColor);

      d3.select(this).select('text').text(y.invert(pos.y).toFixed(2));

      d3.select(".xaxislabel").text(xDate);

      d3.select("#legendData" + d.key).text(y.invert(pos.y).toFixed(2));

      return "translate(" + mouse[0] + "," + pos.y + ")";
    });
  }

  // Create Event Handlers for mouse
  function handleMouseOver(d, i) {
    var mouse = d3.mouse(this);
    var line = d3.select(this).attr('linekey');
    dataFilteredTemp = dataFiltered.filter(function (d) {
      return d.station_id == line;
    });
    maxLine = d3.max(dataFilteredTemp.sort(function (a, b) {
      return d3.descending(a.value, b.value);
    }));
    var name = d3.select(this).attr('name');
    var transform = d3.zoomTransform(zoomRect.node());
    var xtScale = transform.rescaleX(x);
    var xDate = xtScale.invert(mouse[0]);
    d = mouseDate(xtScale, line);
    var value = y.invert(mouse[1]);
    d3.select("#legendData" + line).text(value.toFixed(2));
    d3.select(".xaxislabel").text(xDate + " " + d.name + " " + value.toFixed(2));
    d3.select(".xaxislinedetail").text(xDate + " " + d.name + " " + value.toFixed(2));
    d3.selectAll(".legendcheckbox").style("opacity", 0.15);
    d3.select("#legendRect" + line).style("opacity", 1);
    //console.log(maxLine.value + " " + maxLine.date + " " + maxLine.name);
    d3.select(".xaxismaxline").text('Line Max: ' + maxLine.value + " " + maxLine.date + " " + maxLine.name);
    svg.selectAll(".line").style("opacity", 0.15);
    d3.select(this).style("stroke-width", 5).style("opacity", 1);
  }

  function handleMouseOut(d, i) {
    d3.select(this).style("stroke-width", 1.5);
    d3.selectAll(".legendData").text("");
    d3.select(".xaxislabel").text("");
    d3.select(".xaxislinedetail").text("");
    d3.select(".xaxismaxline").text("");
    d3.selectAll(".legendcheckbox").style("opacity", 1);
    svg.selectAll(".line").style("opacity", 1);
  }

  function toggle() {
    d3.selectAll(".line").attr("d", function (d) {
      return stationLine(d.values);
    });
    d3.select("#legend").selectAll("rect").each(function (d, i) {
      var onClickFunc = d3.select(this).on("click");
      onClickFunc.apply(this, [d, i]);
    });
  }

  function toggleNA() {
    d3.selectAll(".line").attr("d", function (d) {
      return stationLine(d.values);
    });
    d3.select("#legend").selectAll("rect").each(function (d, i) {
      var onClickFunc = d3.select(this).on("click");
      if (d3.select(this).attr('region_id') == 4) {
        console.log('region 4 match; clicking');
        onClickFunc.apply(this, [d, i]);
      } else {}
    });
  }
  function toggleRegion(region) {
    d3.selectAll(".line").attr("d", function (d) {
      return stationLine(d.values);
    });
    d3.select("#legend").selectAll("rect").each(function (d, i) {
      var onClickFunc = d3.select(this).on("click");
      if (d3.select(this).attr('region_id') == region) {
        console.log('clicking region' + region);
        onClickFunc.apply(this, [d, i]);
      } else {}
    });
  }

  function mouseDate(xtScale, line, mouse) {
    var g = d3.select('#tag' + line)._groups[0][0];
    zoomData = data.filter(function (d) {
      return d.station_id == line;
    });
    var x0 = xtScale.invert(d3.mouse(g)[0]);
    var i = bisectDate(zoomData, x0, 1);
    var d0 = zoomData[i - 1];
    var d1 = zoomData[i];
    var d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    return d;
  }

  function zoomed() {
    var xz = d3.event.transform.rescaleX(x);
    //var yz = d3.event.transform.rescaleY(y);

    //axis zoom
    xGroup.call(xAxis.scale(xz));

    //line zoom
    stationLine.x(function (d) {
      return xz(d.date);
    }).y(function (d) {
      return y(d.value);
    });

    d3.selectAll(".line").attr("d", function (d) {
      return stationLine(d.values);
    });
  }

  // Update data section (Called from the onclick)
  function updateData() {
    //window.alert("updateData function here yo");
    // Get the data
    d3.json(largedatafile, function (error, json) {
      json.forEach(function (d) {
        d.value = +d.value;
        d.date = parseDate(d.date);
      });

      // generate initial graph using first series name
      series = seriesNest[0].key;
      updatedJson = json;
      updateOn = !updateOn;
      console.log(updateOn);
      data = filterJSON(json, 'variable', series);
      d3.selectAll(".legend").remove();
      d3.selectAll(".legendData").remove();
      d3.selectAll(".legendcheckbox").remove();
      d3.selectAll(".line").remove();
      updateGraph(data);
    });
  }
  // Update data section (Called from the onclick)
  function restoreData() {
    d3.json(datafile, function (error, json) {
      json.forEach(function (d) {
        d.value = +d.value;
        d.date = parseDate(d.date);
      });

      // generate initial graph using first series name
      series = seriesNest[0].key;
      originalJson = json;
      updateOn = false;
      console.log(updateOn);
      data = filterJSON(json, 'variable', series);
      d3.selectAll(".legend").remove();
      d3.selectAll(".legendData").remove();
      d3.selectAll(".legendcheckbox").remove();
      d3.selectAll(".line").remove();
      updateGraph(data);
    });
  }
}

function wphealthtracker_vitals_d3_3(mydata) {

  // Set the dimensions of the canvas / graph
  var margin = { top: 50, right: 40, bottom: 50, left: 70 },
      width = 600 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

  // Parse the date / time
  var parseDate = d3.time.format("%d-%b-%y").parse,
      formatDate = d3.time.format("%d-%b"),
      bisectDate = d3.bisector(function (d) {
    return d.date;
  }).left;

  // Set the ranges
  var x = d3.time.scale().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  // Define the axes
  var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(10);

  var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);

  // Define the line
  var valueline = d3.svg.line().x(function (d) {
    return x(d.date);
  }).y(function (d) {
    return y(d.close);
  });

  // Adds the svg canvas
  var svg = d3.select("#wphealthtracker-stats-actual-inner-d3-1-3").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var lineSvg = svg.append("g");

  var focus = svg.append("g").style("display", "none");

  var dataCount = 0;

  // Get the data
  d3.csv("", function (error, data) {

    // Using my own data instead of suppling a URL/File path to the first argument in the d3.csv() function above (instead, we just pass an empty string)
    data = mydata;

    data.forEach(function (d) {
      dataCount++;
      d.date = parseDate(d.date);
      d.close = +d.close;
    });

    var PlusTen = d3.max(data, function (d) {
      return d.close;
    }) + d3.max(data, function (d) {
      return d.close;
    }) * 0.05;
    var MinusTen = d3.min(data, function (d) {
      return d.close;
    }) - d3.min(data, function (d) {
      return d.close;
    }) * 0.05;

    // Scale the range of the data
    x.domain(d3.extent(data, function (d) {
      return d.date;
    }));
    y.domain([MinusTen, PlusTen]);

    // Add the valueline path.
    lineSvg.append("path").attr("class", "line").attr("d", valueline(data));

    // Add the X Axis
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

    // Add the Y Axis
    svg.append("g").attr("class", "y axis").call(yAxis);

    // append the x line
    focus.append("line").attr("class", "x").style("stroke", "#F8C849").style("stroke-dasharray", "3,3").style("opacity", 0.5).attr("y1", 0).attr("y2", height);

    // append the y line
    focus.append("line").attr("class", "y").style("stroke", "#F8C849").style("stroke-dasharray", "3,3").style("opacity", 0.5).attr("x1", width).attr("x2", width);

    // append the circle at the intersection
    focus.append("circle").attr("class", "y").style("fill", "#F8C849").style("stroke", "#F8C849").attr("r", 4);

    // place the value at the intersection
    focus.append("text").attr("class", "y1").style("stroke", "white").style("stroke-width", "3.5px").style("opacity", 0.8).attr("dx", 8).attr("dy", "-.3em");
    focus.append("text").attr("class", "y2").attr("dx", 8).attr("dy", "-.3em");

    // place the date at the intersection
    focus.append("text").attr("class", "y3").style("stroke", "white").style("stroke-width", "3.5px").style("opacity", 0.8).attr("dx", 8).attr("dy", "1em");
    focus.append("text").attr("class", "y4").attr("dx", 8).attr("dy", "1em");

    // append the rectangle to capture mouse
    svg.append("rect").attr("width", width).attr("height", height).style("fill", "none").style("pointer-events", "all").on("mouseover", function () {
      focus.style("display", null);
    }).on("mouseout", function () {
      focus.style("display", "none");
    }).on("mousemove", mousemove);

    function mousemove() {
      var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.date > d1.date - x0 ? d1 : d0;

      focus.select("circle.y").attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");

      focus.select("text.y1").attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")").text(d.close);

      focus.select("text.y2").attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")").text(d.close);

      focus.select("text.y3").attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")").text(formatDate(d.date));

      focus.select("text.y4").attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")").text(formatDate(d.date));

      focus.select(".x").attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")").attr("y2", height - y(d.close));

      focus.select(".y").attr("transform", "translate(" + width * -1 + "," + y(d.close) + ")").attr("x2", width + width);
    }
  });
}