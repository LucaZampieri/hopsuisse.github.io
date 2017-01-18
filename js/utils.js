function linspace(data, num, round) {
    var min = Math.min(...data)
    var max = Math.max(...data)
    
    var step = (max - min)/num
    var values = []
    for (var i = 0; i < num; i++) {
        if (round) {
            values.push(Math.round(min + i * step))
        } else {
            values.push(min + i * step)
        }
    }
    values.push(max)

    //console.log(values)
    
    return values
}

function makeBinTicks(bins) {
    var binTicks = []
    for (var i = 0; i < bins.length - 1; i++) {
        binTicks.push(bins[i] + " - " + bins[i+1])
    }
    return binTicks
}

function valueCounts(data, bins, includeLast) {
    /*
     * Bins are left inclusive, right exclusive
     * If includeLast param is defined and true, the last value is counted in
     * the last bin
     */

    var counts = Array(bins.length - 1).fill(0)
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < bins.length - 1; j++) {
            if (data[i] >= bins[j] && data[i] < bins[j+1]) {
                counts[j] = counts[j] + 1
            }
        }
    }
    if (includeLast) { counts[counts.length - 1] += 1 }
    //console.log(counts)

    return counts
}

function secondsToTime(secondsString) {
    var minutes = Math.floor(Number(secondsString) / 60)
    var seconds = Number(secondsString) % 60
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60
    if (hours > 0) {
        return hours + ':' + minutes + ':' + seconds
    } else {
        return minutes + ':' + seconds
    }
}

function getWeatherIcon(weather) {
    var iconDict = {
        'Partly cloudy': 'wi-cloud',
        'Clear': 'wi-day-cloudy',
        'Light rain shower': 'wi-day-showers',
        'Patchy rain possible': 'wi-day-sprinkle',
        'Mist': 'wi-day-fog',
        'Sunny': 'wi-day-sunny',
        'Patchy light rain with thunder': 'wi-day-storm-showers',
        'Moderate rain': 'wi-showers',
        'Cloudy': 'wi-cloudy',
        'Heavy rain': 'wi-rain',
        'Moderate snow': 'wi-day-snow',
        'Freezing fog': 'wi-fog',
        'Patchy light snow': 'wi-snow',
        'Moderate or heavy snow with thunder': 'wi-day-snow-thunderstorm',
        'Fog': 'wi-day-fog',
        'Heavy snow': 'wi-snow',
        'Light snow': 'wi-day-snow',
        'Moderate or heavy rain shower': 'wi-rain',
        'Light drizzle': 'wi-sprinkle',
        'Patchy light rain': 'wi-showers',
        'Moderate rain at times': 'wi-showers',
        'Heavy rain at times': 'wi-rain',
        'Light rain': 'wi-day-showers',
        'Patchy light drizzle': 'wi-sprinkle',
        'Overcast': 'wi-cloudy',
        'Moderate or heavy sleet': 'wi-sleet',
        'Moderate or heavy rain with thunder': 'wi-thunderstorm',
        'Light sleet': 'wi-day-sleet',
        'Patchy moderate snow': 'wi-day-snow',
        'Light snow showers': 'wi-day-snow'
    }
    var weatherIcon = '<i class="wi ' + iconDict[weather] + '"></i>'
    return weatherIcon
}
