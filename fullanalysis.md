---
layout: page
title: Exploratory statistics
permalink: /fullanalysis/
---

We present here an exploratory analysis of the full dataset. The workflow we try
to follow in this study is the one suggested in this [useful
paper](http://science.sciencemag.org/content/347/6228/1314.full). 

For more details about how the analysis is done, please refer to this [Jupyter
notebook](https://nbviewer.jupyter.org/github/ggrrll/hop_suisse_ada_project_public/blob/master/6-data_analysis/exploratory_full_sport_dataset.ipynb)
hosted on Github.

### An overview in video

We first try to give an overwiew of the data in video, following the approach of
this great example : [200 Countries, 200 Years, 4
Minutes](https://youtu.be/jbkSRLYSojo). Here, we use the format to display
jointly :

* the pace (on the Y axis),
* the experience of the runners (*ie.* whether they are beginners or experts, on
  the X axis),
* different races and their number of competitors (dots and their size),
* the runners sex (with colors),
* the runners age.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/KzeR-H7_xlE"
frameborder="0" allowfullscreen></iframe>
</center>

## Table of contents
{: .no_toc}

* TOC
{:toc}


## Note on unique runners

Given the significant size of the dataset, we encountered some difficulties when
trying to distinguish runners according to their attributes, given that names
are not unique.

Checking the demographics of a few races, we could notice that there were even
some namesakes born the same year but with different residence cities. At first
glance this combination (name, birthyear and residence city) could have been
used to determine unique runners, *however* this does not necessarily works :
some people might just change residence during their running career (indeed we
can find that by cross-checking our dataset with other resources on the web) and
be idientified as two different people.

We have therefore decided to stick to a simple rule and to distinguish runners
based on their *name* **and** *birthyear* combination.

## Statistics across time

### Number of runners across time, by sex

The following graph shows the number of runners across time separated 
by sex. 

<div id="runners-count-sex"></div>

We can observe a clear *increase* in time of the number of participants 
in the races, for both sex, across all Switzerland. 

### Number of runners across time, by distance

The following graph shows the number of runners across time separated 
by distances of the races. We only consider the most relevant distances, 
that is the ones with a larger number of runners. 

<div id="runners-count-distance"></div>

Interestingly in the last 3 years, in terms of number of runners, it 
seems to have been: 

* an *increase* for the 10 km;

* quite a *stable* situation for the half-marathon;

* a *decrease* for the marathon.

### Distribution of the number of editions per race

The following graph shows the number of races with respect to the 
number of times these races took place. 

<div id="editions-distribution"></div>

Consequently, most races have been organized at most twice. The most 
frequent race in history is Chäsitzerlouf - Kehrsatz, which has been 
organized 16 times. Right after, with 15 editions, come 20km de Lausanne, 
Basler Stadtlauf, Frauenfelder, Gurtenclassic - Wabern, Kerzerslauf, and 
Schweizer Frauenlauf Bern. 

### Age across editions

For this study we use the first 20 races with the largest number of 
runners. 

Select a race: <select id='race' onchange='drawAgesAcrossEditions();'></select>
<div id="age-popular-races"></div>

After performing an
[Mann-Kendall](http://vsp.pnnl.gov/help/Vsample/Design_Trend_Mann_Kendall.htm)
test (with p-value threshold at 0.05), we conclude that for many of the races analysed, it is not possible to
claim a global trend for the runners' mean age, across time. The test is
affected by the lack of data points. We have however also obtained some
significant results:

* there is an *increase* of the runner's mean age for ASICS Bremgarter 
Reusslauf, Jungfrau-Marathon and Kerzerslauf; 

* there is a *decrease* of the runner's mean age for 20km de Lausanne, 
Course de l'Escalade, Hallwilerseelauf, Luzerner Stadtlauf, 
Morat-Fribourg, Thuner Stadtlauf and Zürcher Silvesterlauf. 

## Statistics on performance *vs* age

Note that we only consider races with the higher number of runners, and 
categories with standard running distances: 10km, 20km/half marathon 
and full marathon.

We will see that a U-shape is observed for the most popular events, 
especially when enough data is available. This shape becomes more 
visible with longer distances (full marathon), while it somehow fades 
out for shorter distances, like 10 km.

### Marathon

The following graph represents the mean time the runners took to finish 
a full marathon with respect to the age of the runner, for different 
races. 

Select a race: <select id='race-42km' onchange='drawTimeWrtAge("42km");'></select>
<div id="timevsage-42km"></div>

### Half marathon / 20km

The following graph represents the mean time the runners took to finish 
a half marathon with respect to the age of the runner, for different 
races. 

Select a race: <select id='race-21km'  onchange="drawTimeWrtAge('21km');"></select>
<div id="timevsage-21km"></div>

### 10km
The following graph represents the mean time the runners took to finish 
a 10km race with respect to the age of the runner, for different races. 

Select a race: <select id='race-10km' onchange="drawTimeWrtAge('10km');"></select>
<div id="timevsage-10km"></div>


<script type="text/javascript">

function drawCountAcrossTime(category) {
  // category = 'sex' or 'distance'
  var data = {{ site.data.full_viz.across-time | jsonify }}
  var categData = data["runners-count-"+category]
  var cols = []
  var xsValues = {}
  for (let key of Object.keys(categData)) {
    var count = categData[key]["counts"]
    var years = categData[key]["years"]
    count.unshift(key)
    years.unshift(key+"_x")
    cols.push(count)
    cols.push(years)
    xsValues[key] = key+"_x"
  }
  var chart = c3.generate({
    bindto: '#runners-count-'+category,
    data: {
      xs: xsValues,
      columns: cols,
      type: 'bar'
    },
    axis: {
		x: { 
			label: {text:'Year',position:'outer-right'}
		}, 
		y: {
			label: {text:'Total number of runners',position:'inner-center'}
		}
	}
  })
}

function drawEventsCount() {
  var data = {{ site.data.full_viz.across-time | jsonify }}
  var eventsData = data["events-count"]
  var xsValues = eventsData.months
  xsValues.unshift("months")
  var counts = eventsData.count
  counts.unshift("counts")
  var chart = c3.generate({
    bindto: '#events-count',
    data: {
      x: 'months',
      columns: [xsValues, counts],
      type: 'scatter'
    }
  })
}

function drawEditionsDistribution() {
  var data = {{ site.data.full_viz.across-time | jsonify }}
  var editionsData = data["editions-distribution"]
  var xsValues = editionsData["editions-per-race"]
  xsValues.unshift('editions per race')
  var counts = editionsData.count
  counts.unshift("counts")
  var chart = c3.generate({
    bindto: '#editions-distribution',
    data: {
      x: 'editions per race',
      columns: [xsValues, counts],
      type: 'bar'
    },
    axis: {
      x: {label: {text: 'Number of editions per race', position:'outer-right'}}, 
      y: {label: {text: 'Number of races', position: 'outer-center'}}
	}
  })
}

function fillRaceSelect() {
  var data = {{ site.data.full_viz.across-time.age-popular-races | jsonify }}
  Object.keys(data).forEach(function(name) {
    $('#race').append(new Option(name, name));
  })
}

function fillRaceSelect2(km) {
	var data = {{ site.data.full_viz.timeVSage | jsonify }}
	Object.keys(data[km]["men"]).forEach(function(name) {
		$('#race-'+km).append(new Option(name, name));
	})
}

function drawAgesAcrossEditions() {
  var selectedRace = $('#race').val()  
  var data = {{ site.data.full_viz.across-time.age-popular-races | jsonify }}
  var raceData = data[selectedRace]
  var meanAges = raceData['mean_ages']
  var medianAges = raceData['median_ages']
  meanAges.unshift("mean age")
  medianAges.unshift("median age")
  var years = raceData.years
  years.unshift("year")
  var chart = c3.generate({
    bindto: '#age-popular-races',
    data: {
      x: 'year',
      columns: [years, meanAges, medianAges]
    }, 
    axis: {
			x: {
				label: {text: 'Race year', position:'outer-right'}
			}, 
			y: {
				label: {text: 'Runners age', position: 'outer-center'}
			}
		}
  })
}

function drawTimeWrtAge(km) {
	var selectedRace = $('#race-'+km).val() 
	var data = {{ site.data.full_viz.timeVSage | jsonify }}
	data = data[km]
	
	var menRaceData = data["men"][selectedRace]
	var womenRaceData = data["women"][selectedRace]
	var menMedianTimes = menRaceData.median_times
	menMedianTimes.unshift("men")
	var womenMedianTimes = womenRaceData.median_times
	womenMedianTimes.unshift("women")
	var menAges = menRaceData.ages
	menAges.unshift("men age")
	var womenAges = womenRaceData.ages
	womenAges.unshift("women age")
	
	var chart = c3.generate({
		bindto: '#timevsage-'+km,
		data: {
			xs: {
				'men': 'men age',
				'women': 'women age'
			}, 
			columns: [menAges, womenAges, menMedianTimes, womenMedianTimes]
		}, 
		axis: {
			x: {
				label: {text:'Runners mean age',position:'outer-right'}
			}, 
			y: {
				label: {text: 'Median time [min]', position: 'inner-center'}
			}
		}
	});
	
}

drawCountAcrossTime('sex')
drawCountAcrossTime('distance')
drawEventsCount()
drawEditionsDistribution()
fillRaceSelect()
drawAgesAcrossEditions()
fillRaceSelect2("42km")
drawTimeWrtAge("42km")
fillRaceSelect2("21km")
drawTimeWrtAge("21km")
fillRaceSelect2("10km")
drawTimeWrtAge("10km")
</script>
