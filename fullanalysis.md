---
layout: page
title: Exploratory statistics on the full dataset
permalink: /fullanalysis/
---

## Work in progress

The workflow we try to follow in this study is the one suggested in 
this [useful paper](http://science.sciencemag.org/content/347/6228/1314.full). 

The following table summarizes correlation study among features (✔ : 
done, - : not really relevant). Mind that the study between feature x 
and y is in position x and y of the table, that is supposed to 
symmetric.

|             | distance   | sex    | age  | time  | pace | race-year | runner | event | weather |
|:----:       |:----:      | :----: |:----:| :----:|:----:|   :----:  |:----:  |:----: |:----:   |
|distance     |      -     |        |      |       |      |[✔](#number-of-runners-across-time-by-distance)| || |  
|sex          |            | -      |      |       |      | [✔](#number-of-runners-across-time-by-sex) |  |  | |
|age          |            |        |    - |[✔](#statistics-on-performance-vs-age)|      |[✔](#age-across-editions)|          |       | | 
|time         |            |        |      |  -    |      |         |          |       |[✔](#plot-time-vs-temperature-for-marathons)|
|pace         |            |        |      |       |  -   |         |          |       |[✔](#plot-pace-vs-temperature)|
|race-year    |            |        |      |       |      |  -      |          |[✔](#distribution-of-the-number-of-editions-per-race)|         |
|runner       |            |        |      |       |      |         |   -      |[✔](#distribution-of-the-number-of-runners-per-race)|         |
|event        |            |        |      |       |      |         |[✔](#distribution-of-the-number-of-races-per-runner)|     - |         |
|weather      |            |        |      |       |      |         |          |       |    -    |

<br>
Click on the check marks <font color="red">✔</font> to go directly to 
the corresponding sections.

## Note on unique runners
Some runners may have the same name but a different birth years, or live 
in different places. 
Checking the demographics of few races, we could notice that there are 
even some namesakes born the same year but with different residence 
cities. However this does not necessarily mean that there are two 
different runners, as some people might change residence during their 
running career - we can find that, by cross-checking our dataset with 
other resources on the web.

We have therefore decided to define uniquely a runner only upon the 
unique name - birthday tuples.

## Statistics across time

# Number of runners across time, by sex

The following graph shows the number of runners across time separated 
by sex. 

<div id="runners-count-sex"></div>

We can observe a clear *increase* in time of the number of participants 
in the races, for both sex, across all Switzerland. 

# Number of runners across time, by distance

The following graph shows the number of runners across time separated 
by distances of the races. We only consider the most relevant distances, 
that is the ones with a larger number of runners. 

<div id="runners-count-distance"></div>

Interestingly in the last 3 years, in terms of number of runners, it 
seems to have been: 

* an *increase* for the 10 km;

* quite a *stable* situation for the half-marathon;

* a *decrease* for the marathon.

## Distribution of the number of editions per race

The following graph shows the number of races with respect to the 
number of times these races took place. 

<div id="editions-distribution"></div>

Consequently, most races have been organized at most twice. The most 
frequent race in history is Chäsitzerlouf - Kehrsatz, which has been 
organized 16 times. Right after, with 15 editions, come 20km de Lausanne, 
Basler Stadtlauf, Frauenfelder, Gurtenclassic - Wabern, Kerzerslauf, and 
Schweizer Frauenlauf Bern. 

## Age across editions

For this study we use the first 20 races with the largest number of 
runners. 

Select a race: <select id='race' onchange='drawAgesAcrossEditions();'></select>
<div id="age-popular-races"></div>

After performing an [Mann-Kendall]
(http://vsp.pnnl.gov/help/Vsample/Design_Trend_Mann_Kendall.htm) test, 
we conclude that for many of the races analysed, it is not possible to 
claim a global trend for the runners' mean age, across time. The test 
is affected by the lack of data points. We have however also obtained 
some significant results: 

* there is an *increase* of the runner's mean age for ASICS Bremgarter 
Reusslauf, Jungfrau-Marathon and Kerzerslauf; 

* there is a *decrease* of the runner's mean age for 20km de Lausanne, 
Course de l'Escalade, Hallwilerseelauf, Luzerner Stadtlauf, 
Morat-Fribourg, Thuner Stadtlauf and Zürcher Silvesterlauf. 

## Statistics on performance VS age

Note that we only consider races with the higher number of runners, and 
categories with standard running distances: 10km, 20km/half marathon 
and full marathon.

We will see that a U-shape is observed for the most popular events, 
especially when enough data is available. This shape becomes more 
visible with longer distances (full marathon), while it somehow fades 
out for shorter distances, like 10 km.

# Marathon

The following graph represents the mean time the runners took to finish 
a full marathon with respect to the age of the runner, for different 
races. 

Select a race: <select id='race-42km' onchange='drawTimeWrtAge("42km");'></select>
<div id="timevsage-42km"></div>

# Half marathon / 20km

The following graph represents the mean time the runners took to finish 
a half marathon with respect to the age of the runner, for different 
races. 

Select a race: <select id='race-21km'  onchange="drawTimeWrtAge('21km');"></select>
<div id="timevsage-21km"></div>

# 10km
The following graph represents the mean time the runners took to finish 
a 10km race with respect to the age of the runner, for different races. 

Select a race: <select id='race-10km' onchange="drawTimeWrtAge('10km');"></select>
<div id="timevsage-10km"></div>

# (Plot Time VS Temperature for marathons) **TODO**

# (Plot Pace VS Temperature) **TODO**

# (Distribution of the number of runners, per race) **TODO**

# (Distribution of the number of races, per runner) **TODO**



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
  var meanAges = raceData.ages
  meanAges.unshift("mean age")
  var years = raceData.years
  years.unshift("year")
  var chart = c3.generate({
    bindto: '#age-popular-races',
    data: {
      x: 'year',
      columns: [years, meanAges]
    }, 
    axis: {
			x: {
				label: {text:'Race year',position:'outer-right'}
			}, 
			y: {
				label: {text: "Runners mean age", position: 'inner-center'}
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
	var menMeanTimes = menRaceData.times
	menMeanTimes.unshift("men")
	var womenMeanTimes = womenRaceData.times
	womenMeanTimes.unshift("women")
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
			columns: [menAges, womenAges, menMeanTimes, womenMeanTimes]
		}, 
		axis: {
			x: {
				label: {text:'Runners mean age',position:'outer-right'}
			}, 
			y: {
				label: {text: 'Time [min]', position: 'inner-center'}
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
