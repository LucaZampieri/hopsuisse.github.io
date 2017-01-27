---
layout: page
title: Exploratory Statistics on the full dataset
permalink: /fullanalysis/
---

## Work in progress

The workflow we try to follow in this study is the one suggested in 
this [useful paper](http://science.sciencemag.org/content/347/6228/1314.full). 

The following table summarizes correlation study among features (√ : 
done, - : not really relevant). Mind that the study between feature x 
and y is in position x and y of the table, that is supposed to 
symmetric.

|             | distance   | sex    | age  | time  | pace | race-year | runner | event | weather |
|:----:       |:----:      | :----: |:----:| :----:|:----:|   :----:  |:----:  |:----: |:----:   |
|distance     |      -     |        |      |       |      |[√](#counts-of-runners-across-time-by-distance)| || |  
|sex          |            | -      |      |       |      | [√](#counts-of-runners-across-time-by-sex) |  |  | |
|age          |            |        |    - |[√](#statistics-on-performance-vs-age)|      |[√](#age-across-editions)|          |       | | 
|time         |            |        |      |  -    |      |         |          |       |[√](#plot-time-vs-temperature-for-marathons)|
|pace         |            |        |      |       |  -   |         |          |       |[√](#plot-pace-vs-temperature)|
|race-year    |            |        |      |       |      |  -      |          |[√](#distribution-of-the-number-of-editions-per-race)|         |
|runner       |            |        |      |       |      |         |   -      |[√](#distribution-of-the-number-of-runners-per-race)|         |
|event        |            |        |      |       |      |         |[√](#distribution-of-the-number-of-races-per-runner)|     - |         |
|weather      |            |        |      |       |      |         |          |       |    -    |

<br>
Click on the check marks <font color="red">√</font> to go directly to 
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

# Statistics across time

The following graph shows the number of runners across time separated 
by sex. 

**TODO plot** 

We can observe a clear increase in time of number of participants in 
the races, for both sexes, across all Switzerland. 

The following graph shows the number of runners across time separated 
by distances of the races. We only consider the most relevant distances, 
that is the one with more runners. 

**TODO plot**

Interestingly in the last 3 years, in terms of number of runners, it 
seems to have been: 

* a decrease for the marathon;

* an increase for the 10 km;

* quite a stable situation for the half-marathon.


# Counts of runners across time, by distance

# Counts of runners across time, by sex

# Statistics on Performance VS Age

# Age across editions

# Plot Time VS Temperature for marathons

# Plot Pace VS Temperature

# Distribution of the number of editions, per race

# Distribution of the number of runners, per race

# Distribution of the number of races, per runner
