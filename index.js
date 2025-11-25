/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-btn")

const fields = {
    length: document.getElementById("length-desc"),
    volume: document.getElementById("volume-desc"),
    mass: document.getElementById("mass-desc")
}

const conversions = {
    length: {
        aName: "meters",
        bName: "feet",
        aToB: 3.281,
        bToA: 0.3048
    },
    volume: {
        aName: "liters",
        bName: "gallons",
        aToB: 0.264,
        bToA: 3.782
    },
    mass: {
        aName: "kilos",
        bName: "pounds",
        aToB: 2.204,
        bToA: 0.453592
    }
}

function format(n) {
    return n.toFixed(3)
}

convertBtn.addEventListener("click", function() {
    const value = Number(inputEl.value)
    if (isNaN(value)) {
        return
    }
    
    for (const key in conversions) {
        const c = conversions[key]
        fields[key].innerText = 
            `${value} ${c.aName} = ${format(value * c.aToB)} ${c.bName} | ` +
            `${value} ${c.bName} = ${format(value * c.bToA)} ${c.aName}`
    }
})
