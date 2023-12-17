const LABELS = require("../constant/LABLES")

const createLivePices = () => {
    let prices = []
    Object.keys(LABELS.IR).forEach(name => {
      prices.push({
        domain: LABELS.DOMAINS.IR,
        name: name,
        value: 0,
        change: 0,
      })
    })
  
    Object.keys(LABELS.FOREX).forEach(name => {
      prices.push({
        domain: LABELS.DOMAINS.FOREX,
        name: name,
        value: 0,
        change: 0,
      })
    })

    Object.keys(LABELS.CRYPRO).forEach(name => {
      prices.push({
        domain: LABELS.DOMAINS.CRYPTO,
        name: name,
        value: 0,
        change: 0,
      })
    })
  
    return prices
}

const livePrices = {}

livePrices.prices = createLivePices()

livePrices.setIRLivePrice = (label, value, change) => {
    const price = livePrices.prices.filter(p => p.domain === LABELS.DOMAINS.IR).filter(p => p.name === label)[0]
    const regex = /\(([^)]+)\)/
    const match = change.match(regex)
    const revisedValue = parseFloat(value)
    const revisedChange = parseFloat(match ? match[1]: "0") 
    if (price){
        price.value = !isNaN(revisedValue) ? revisedValue : 0
        price.change = !isNaN(revisedChange) ? revisedChange : 0
    }else {
        console.log("The IR live price not found")
    }
    return  
}

livePrices.setForexLivePrice = (label, value, change) => {
    const price = livePrices.prices.filter(p => p.domain === LABELS.DOMAINS.FOREX).filter(p => p.name === label)[0]
    const revisedValue = parseFloat(value)
    const revisedChange = parseFloat(change.replace(/[\u2212]/g, "-")) //replace e dash char with minus char
    if (price){
        price.value = !isNaN(revisedValue) ? revisedValue : 0
        price.change = !isNaN(revisedChange) ? revisedChange : 0
    }else {
        console.log("The GLOBAL live price not found")
    }
    return
}

livePrices.setCryptoLivePrice = (label, value, change) => {
  const price = livePrices.prices.filter(p => p.domain === LABELS.DOMAINS.CRYPTO).filter(p => p.name === label)[0]
  const revisedValue = parseFloat(value)
  const revisedChange = parseFloat(change.replace(/[\u2212]/g, "-")) //replace e dash char with minus char
  if (price){
      price.value = !isNaN(revisedValue) ? revisedValue : 0
      price.change = !isNaN(revisedChange) ? revisedChange : 0
  }else {
      console.log("The GLOBAL live price not found")
  }
  return
}


module.exports = livePrices