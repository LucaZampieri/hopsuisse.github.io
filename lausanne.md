---
layout: page
title: Lausanne Marathon
permalink: /lausanne/
---

This page focuses on a statistical analysis done on data from *Lausanne Marathon
2016*. 

The data used was parsed from this [Datasport page](https://services.datasport.com/2016/lauf/lamara/). 
For more details about how the analysis is done, please refer to this 
[jupyter notebook](https://github.com/maximepeschard/hop_suisse/blob/master/data_analysis/lausanne_marathon_analysis.ipynb)
hosted on Github.

The following table summarizes correlation study among features (✔ : 
done, - : not really relevant).

|      | category | sex | city | age | time | pace |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:| 
| category  |  [✔](#number-of-runners-in-each-category)   | [✔](#number-of-runners-by-sex-and-by-category)    |   -  |  [✔](#age-distribution-by-sex-and-by-category)   | -  | [✔](#paces-distribution-by-category) |
| sex  |  -   |  [✔](#number-of-runners-for-each-sex)   |   -   |  [✔](#age-distribution-by-sex-and-by-category)| [✔](#times-distribution-by-sex-and-by-category)  | [✔](#times-distribution-by-sex-and-by-category) (equivalent to time VS sex) |
| city |  -   |   -  |   [✔](#towns-of-residence-of-the-runners)  |    -    |   -  | - |
| age  |   -  |   -  |   -  |  [✔](#overall-age-distribution)          |  **TODO?** (equivalent to pace VS age)  | **TODO?** |

<br>
Click on the check marks <font color="red">✔</font> to go directly to 
the corresponding sections.

For simplicity and for a more natural visualization, we only consider 
the three main races of Lausanne marathon: 10km, half marathon and full 
marathon.

## Number of runners in each category

In the following bar plot is represented the number of runners in each 
considered category. 

<div id="bar-cat"></div>

The longer the race, the less participants there are. It was expectable 
since the effort is higher when the distance is increased. 

## Number of runners for each sex

In the following bar plot is represented the number of runners of each 
sex, all categories mixed.

<div id="bar-sex"></div>

Consequently, there are gloablly more men than women. 

## Number of runners by sex and by category

The number of runners by categories is represented in the following pie 
plot. 'F' stands for 'female' and 'M' stands for male. 21km and 42 km 
respectively correspond to the half and the full marathon. 

<div id="countschart"></div>

Most of the runners, males and females, participate to the 10km race. 
This corresponds to almost half of the total number of runners for these 
three categories. The less popular race is the full marathon, especially
for females. This result is expectable since it is physically the 
hardest one. The big difference seen in the previous section between the 
number of male and female runners consequently comes mostly from the 
marathon. 

## Age distributions

### Overall age distribution

The following graph represents the fraction of the total number of 
runners with respect to their age at the time of the race.

<div id="agedistriboverall"></div>

The younger runner was 5 years old, the older one was 82 years old. Most 
of the runners are between 25 and 45 years old. There is an interesting 
minimum between 10 and 16 years old that can be socially interesting to 
analyse further. Finally, very few people still run such distances after 
60 years old, for physical reasons. 

### Age distribution by sex and by category

#### Women

The following graph represents the fraction of the total number of female
runners with respect to their age at the time of the race, for the three 
different chosen categories. 

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="agedistribwomen"></div>

After performing 2-samples Kolmogorov-Smirnov statistical tests, we conclude 
that only women who run the 10km race are significantly *younger* than 
the ones running the full marathon or the half marathon. 

The average age for each race is: 

* 10km: 36.11 years old;

* 21km: 37.48 years old; 

* 42km: 39.16 years old.

#### Men

The following graph represents the fraction of the total number of male
runners with respect to their age at the time of the race, for the three 
different chosen categories. 

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="agedistribmen"></div>

After performing 2-samples Kolmogorov-Smirnov statistical tests, we conclude 
that only men who run the full marathon are significantly *older* than 
the ones running the half marathon or the 10km race.

The average age for each race is: 

* 10km: 40.26 years old;

* 21km: 39.88 years old; 

* 42km: 42.15 years old.

#### Women vs Men

After performing 2-samples Kolmogorov-Smirnov statistical tests, we conclude 
that women are significantly *younger* than men in *all* the three chosen 
competitions. 

## Towns of residence of the runners

The following graph represents the number of towns from which come from 
the runners with respect to the number of runners coming from this town 
and that participate to the Lausanne marathon. 

<div id="townschart"></div>

It is obvious that the one city from where come more than 1000 runners 
is Lausanne. Moreover, it was also expectable that there are many towns 
(around 1000) from which comes only one runner. These towns either 
correspond to places very far from Lausanne, or to very small towns. 
Between those two extremes, the behaviour is a power law. 

## Times distribution by sex and by category

### Marathon

The following graph represents the fraction of runners with respect to 
the time it took them to complete the full Lausanne marathon. 

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="times-42km"></div>

After performing a 2-samples Kolmogorov-Smirnov test, we conclude that 
men are significantly *faster* than women at the full marathon. 

Mean time to complete the full marathon for: 

* Women: 4:16.47;

* Men: 3:54.59.

### Half-marathon

The following graph represents the fraction of runners with respect to 
the time it took them to complete the half Lausanne marathon. 

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="times-21km"></div>

After performing a 2-samples Kolmogorov-Smirnov test, we conclude that 
men are significantly *faster* than women at the half-marathon. 

Mean time to complete the half marathon for: 

* Women: 2:03.28;

* Men: 01:50.10.

### 10 km

The following graph represents the fraction of runners with respect to 
the time it took them to complete the 10km race. 

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="times-10km"></div>

After performing a 2-samples Kolmogorov-Smirnov test, we conclude that 
men are significantly *faster* than women at the 10km race. 

Mean time to complete the 10km race for: 

* Women: 00:59.03;

* Men: 00:51.18.

## Paces distribution by category

### Men

The following graph represents the fraction of male runners with respect 
to their paces during each type of race (10km, half-marathon, full 
marathon).

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="paces-men"></div>

After performing a 2-samples Kolmogorov-Smirnov test, we conclude that 
men pace significantly *increases* with race distance in all categories. 

### Women

The following graph represents the fraction of female runners with 
respect to their paces during each type of race (10km, half-marathon, 
full marathon).

On the legend, you can click or unclick some of the categories to only 
see the ones you want to see.

<div id="paces-women"></div>

After performing a 2-samples Kolmogorov-Smirnov test, we conclude that 
women pace is significantly *higher* **only** for the marathon. 

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

var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹";
function formatPower(d) { 
	return (d + "").split("").map(function(c) { return superscript[c]; })
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
          format: function(d){return '10'+formatPower(d)}
        },
        label: {text:'Number of runners',position:'outer-center'},
      },
      y: {
        tick: {
          values: [0, 1, 2, 3],
          format: function(d){return '10'+formatPower(d)}
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

function drawNumber(what) {
	// Retrieve data
	var lab = [];
	var val = [];
	var he = 0;
	switch (what) {
		case 'cat':
			lab = ['x', '10km', '21km', '42km'];
			val = ['value', 5515, 4414, 1318];
			he = 250;
			break;
		default: // 'sex'
			lab = ['x', 'Men', 'Women'];
			val = ['value', 6905, 4655];
			he = 190;
			break;
	}

	// Draw bar plot
	var chart = c3.generate({
        bindto: '#bar-'+what,
        padding: {
            left: 60
        },
        data: {
            x: 'x',
            columns: [ lab, val ],
            type: 'bar'
        },
        axis: {
            rotated: true,
            x: {
                type: 'category'
            },
            y: {
                label: { 
					text: 'Number of runners', 
					position: 'outer-right' 
				}
			}
        },
        size: {
			height: he
		},
		legend: {show: false}
	});
}

function drawPaces(sex) {
  // Load data
  var paces_data = {{ site.data.lausanne_viz.pace_distribution | jsonify}}
  console.log(paces_data)
  
  // Build chart data
  var paces10km = paces_data[sex]["10km"]
  var paces21km = paces_data[sex]["21km"]
  var paces42km = paces_data[sex]["42km"]
  var numBins = 10
  var bins = linspace(paces10km.concat(paces21km).concat(paces42km), numBins, true)
  var counts10km = valueCounts(paces10km, bins, true).map(function(x){return x / paces10km.length})
  var counts21km = valueCounts(paces21km, bins, true).map(function(x){return x / paces21km.length})
  var counts42km = valueCounts(paces42km, bins, true).map(function(x){return x / paces42km.length})
  counts10km.unshift('10km')
  counts21km.unshift('21km')
  counts42km.unshift('42km') 

  // Make bin ticks
  binTicks = makeBinTicks(bins)

  // Draw chart
  var chart = c3.generate({
    bindto: '#paces-'+sex,
    data: { columns: [counts10km, counts21km, counts42km], type: 'spline' },
    point: { show: false },
    axis: {
      x: {
        label: { text: 'Pace', position: 'outer-center' },
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
      $('#paces-'+sex+' .c3-axis-x .tick text').attr('transform', 'translate(-35,0)')
    }
  })
  
}

drawNumber('cat')
drawNumber('sex')
drawCountsChart()
drawOverallAgeDistribution()
drawAgeDistribution('women', '#agedistribwomen')
drawAgeDistribution('men', '#agedistribmen')
drawTowns()
drawTimes('42km')
drawTimes('21km')
drawTimes('10km')
drawPaces('men')
drawPaces('women')
</script>

