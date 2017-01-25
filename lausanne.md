---
layout: page
title: Lausanne Marathon
permalink: /lausanne/
---

This page focuses on a statistical analysis done on data from *Lausanne Marathon
2016*.

## Counts

<div id="countschart"></div>

## Age distribution

### Overall

<div id="agedistriboverall"></div>

### Women

<div id="agedistribwomen"></div>

### Men

<div id="agedistribmen"></div>

## Towns

<div id="townschart"></div>

## Time distribution

### Marathon

<div id="times-42km"></div>

### Semi-marathon

<div id="times-21km"></div>

### 10 km

<div id="times-10km"></div>

<script type="text/javascript">

function drawCountsChart() {
  var counts = {{ site.data.lausanne_viz.counts | jsonify }}

  var chartData = []
  for (let key of Object.keys(counts)) {
    chartData.push([key, counts[key]])
  }
  var chart = c3.generate({
    bindto: '#countschart',
    data: {
      columns: chartData,
      type : 'pie'
    }
  });

}

function drawOverallAgeDistribution() {
  var age_distribution = {{ site.data.lausanne_viz.age_distribution | jsonify }}

  var ages = age_distribution.overall.ages
  ages.unshift('ages')
  var counts = age_distribution.overall.counts
  counts.unshift('fraction')

  var chart = c3.generate({
    bindto: '#agedistriboverall',
    data: {
      x: 'ages',
      columns: [ages, counts],
      type: 'scatter'
    },
    axis: {
      x: {
        min: 0,
        max: 90,
        tick: {values: linspace([0,90],9)},
        label: {text:'Age',position:'outer-center'},
      },
      y: {
        label: 'Fraction of runners'
      }
    },
    legend: {show: false}
  })
}

function drawAgeDistribution(sex, bindName) {
  var age_distribution = {{ site.data.lausanne_viz.age_distribution | jsonify }}
  
  var ages10km = age_distribution[sex]['10km'].ages
  var ages21km = age_distribution[sex]['21km'].ages
  var ages42km = age_distribution[sex]['42km'].ages
  ages10km.unshift('ages_10')
  ages21km.unshift('ages_21')
  ages42km.unshift('ages_42')
  var counts10km = age_distribution[sex]['10km'].counts
  var counts21km = age_distribution[sex]['21km'].counts
  var counts42km = age_distribution[sex]['42km'].counts
  counts10km.unshift('10km')
  counts21km.unshift('21km')
  counts42km.unshift('42km')

  var chart = c3.generate({
    bindto: bindName,
    data: {
      xs: {
        '10km': 'ages_10',
        '21km': 'ages_21',
        '42km': 'ages_42'
      },
      columns: [
        ages10km, ages21km, ages42km,
        counts10km, counts21km, counts42km
      ],
      type: 'scatter'
    },
    axis: {
      x: {
        min: 20,
        max: 90,
        tick: {values: linspace([20,90],7)},
        label: {text:'Age',position:'outer-center'},
      },
      y: {
        label: 'Fraction of runners'
      }
    }
  })
}

function drawTowns() {
  var towns = {{ site.data.lausanne_viz.towns | jsonify }}
  var numRunnersLog = towns.num_runners.map(Math.log10)
  var numTownsLog = towns.num_towns.map(Math.log10)

  numRunnersLog.unshift('num runners')
  numTownsLog.unshift('num towns')
  var chart = c3.generate({
    bindto: '#townschart',
    data: {
      x: 'num runners',
      columns: [numRunnersLog, numTownsLog],
      type: 'scatter'
    },
    axis: {
      x: {
        tick: {
          values: [0, 1, 2, 3],
          format: function(d){return '10^'+d}
        },
        label: {text:'Number of runners / town',position:'outer-center'},
      },
      y: {
        tick: {
          values: [0, 1, 2, 3],
          format: function(d){return '10^'+d}
        },
        label: 'Number of towns'
      }
    },
    legend: {show: false}
  })
}

function drawTimes(distance) {
  // Load data
  var times_data = {{ site.data.lausanne_viz.time_distribution | jsonify}}
  console.log(times_data)
  
  // Build chart data
  var timesMen = times_data[distance]["men"]
  var timesWomen = times_data[distance]["women"]
  var numBins = 10
  var bins = linspace(timesMen.concat(timesWomen), numBins, true)
  var countsMen = valueCounts(timesMen, bins, true).map(function(x){return x / timesMen.length})
  var countsWomen = valueCounts(timesWomen, bins, true).map(function(x){return x / timesWomen.length})
  countsMen.unshift('men')
  countsWomen.unshift('women')

  // Make bin ticks
  binTicks = makeBinTicks(bins)

  // Draw chart
  var chart = c3.generate({
    bindto: '#times-'+distance,
    data: { columns: [countsMen, countsWomen], type: 'spline' },
    point: { show: false },
    axis: {
      x: {
        label: { text: 'Time', position: 'outer-center' },
        type: 'category',
        categories: binTicks,
        tick: {
          format: function(i){
            return secondsToTime(binTicks[i].split(' - ')[0])
          }
        }
      },
      y: { label: 'Fraction of runners' }
    },
    tooltip: { show: false },
    onrendered: function() {
      // HOTFIX for ticks position...
      $('#times-'+distance+' .c3-axis-x .tick text').attr('transform', 'translate(-35,0)')
    }
  })
}

drawCountsChart()
drawOverallAgeDistribution()
drawAgeDistribution('women', '#agedistribwomen')
drawAgeDistribution('men', '#agedistribmen')
drawTowns()
drawTimes('42km')
drawTimes('21km')
drawTimes('10km')
</script>

