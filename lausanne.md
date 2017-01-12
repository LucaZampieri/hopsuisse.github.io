---
layout: page
title: Lausanne Marathon
permalink: /lausanne/
---

Here we can write some _Markdown_ *text* !

## Age distribution

### Overall

<div id="agedistriboverall"></div>

### Women

<div id="agedistribwomen"></div>

### Men

<div id="agedistribmen"></div>

## Towns

<div id="townschart"></div>

<script type="text/javascript">

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
        label: {text:'Age',position:'outer-center'},
      },
      y: {
        label: 'Fraction of runners'
      }
    }
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
        label: {text:'Number of runners / town',position:'outer-center'},
      },
      y: {
        label: 'Number of towns'
      }
    }
  })
}

drawOverallAgeDistribution()
drawAgeDistribution('women', '#agedistribwomen')
drawAgeDistribution('men', '#agedistribmen')
drawTowns()
</script>

