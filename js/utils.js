function test() {
    console.log("hello world")
}

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
