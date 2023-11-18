// Dependencies
const axios = require('axios')
const HTMLParser = require('node-html-parser')
const livePrices = require('./livePrices')
const PRICELABELS = require('../constant/priceLabels')

const scrappingTools = {}

const printValues = (items) => {
  items.forEach((item,index) => {
    const message = `index ${index}, ${item?.text ? item.text.trim() : item.text}`
    console.log(message)
  })
}

scrappingTools.scrapeIRR = async () => {

  const { data, status } = await axios.get('https://www.tgju.org/')

  // dollar tBody 14
  // bitcoin tBody 18
  if (status === 200){
    const root = HTMLParser.parse(data)
    const tBodies = root.querySelectorAll('tbody')

    // for checking which table belong to what
    // experimental code
    // tBodies.forEach((tbody,index) => {
    //   const th = (tbody.querySelectorAll('tr > th')[0]?.text)
    //   const td = (tbody.querySelectorAll('tr > td')[0]?.text)
    //   const message = `index: ${index}, th: ${th ? th.trim(): th}, td: ${td ? td.trim() : td}`
    //   console.log(message)
    // })

    let trs, ths, tds
    let tr, td, index
    const currencyTable = tBodies[14]
    const cryptoTable = tBodies[18]

    // ths = currencyTable.querySelectorAll('tr > th')
    // printValues(ths)
    // tds = currencyTable.querySelectorAll('tr > td')
    // printValues(tds)

    trs = currencyTable.querySelectorAll('tr')
    // usd = 0
    index = 0
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.USD = parseFloat(tr ? tr : 0)

    // eur = 1
    index = 1
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.EUR = parseFloat(tr ? tr : 0)

    // gbp = 3
    index = 3
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.GBP = parseFloat(tr ? tr : 0)

    // try = 4
    index = 4
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.TRY = parseFloat(tr ? tr : 0) 


    
    // ths = cryptoBody.querySelectorAll('tr > th')
    // printValues(ths)
    // tds = cryptoBody.querySelectorAll('tr > td')
    // printValues(tds)

    trs = cryptoTable.querySelectorAll('tr')
    // BTC = 0
    index = 0
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.BTC = parseFloat(tr ? tr : 0)

    // ETH = 1
    index = 1
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.ETH = parseFloat(tr ? tr : 0)

    // TRX = 5
    index = 5
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.TRX = parseFloat(tr ? tr : 0)

    // BNB = 6
    index = 6
    tr = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "")
    livePrices.IR.BNB = parseFloat(tr ? tr : 0)
    
  } else {
    console.log(`has problem to get dollar price`, statusCode)
  }

  // console.log(livePrices)
  return null
}

scrappingTools.scrapMinors = async () => {
  const { status, data } = await axios.get('https://www.tradingview.com/markets/currencies/rates-minor/')
  if (status === 200){
    const root = HTMLParser.parse(data)
    const elements = root.querySelectorAll('tbody > tr > td')
    elements.forEach((element, index) => {
      if (index % 9 === 0){
        // adding just needed doubles defined 
        const name = element.text.slice(0,6)
        if (Object.keys(livePrices.FOREX).includes(name)){
          livePrices.FOREX[name] = parseFloat(elements[index+1].text)
        }
      }
    })
  } else {
      console.error('scrapping minors doubles the status code', statusCode)
  }
  return null;
}

scrappingTools.scrapMajors = async () => {
  const { status, data } = await axios.get('https://www.tradingview.com/markets/currencies/rates-major/')
  if (status === 200){
    const root = HTMLParser.parse(data)
    const elements = root.querySelectorAll('tbody > tr > td')
    elements.forEach((element, index) => {
      if (index % 9 === 0){
        // adding just needed doubles defined 
        const name = element.text.slice(0,6)
        if (Object.keys(livePrices.FOREX).includes(name)){
          livePrices.FOREX[name] = parseFloat(elements[index+1].text)
        }
      }
    })
  } else {
      console.error('scrapping minors doubles the status code', statusCode)
  }
  return null;
}

scrappingTools.scrapCryptos = async () => {
  const { status, data } = await axios.get('https://www.tradingview.com/markets/cryptocurrencies/prices-all/')
  if (status === 200){
    const root = HTMLParser.parse(data)
    const elements = root.querySelectorAll('tbody > tr')
      elements.forEach((element, index) => {
        const columns = element.querySelectorAll("td")
        const name = columns[0].querySelector("a").text
        const price = columns[2].text
        if (Object.keys(livePrices.CRYPTOS).includes(name)){
          livePrices.CRYPTOS[name] = parseFloat(price.replace(" USD", ""))
        }
        
      })
  } else {
      console.error('scrapping minors doubles the status code', statusCode)
  }
  return null;
}

scrappingTools.infiniteRun = async (intervalMin = 5) => {
  try {
    await scrappingTools.scrapeIRR()
    await scrappingTools.scrapMajors()
    await scrappingTools.scrapCryptos()
    // console.log(livePrices)
  } catch (e) {
    console.log(e)
  }
  return setTimeout(() => {
    scrappingTools.infiniteRun(intervalMin)
  }, intervalMin * 1000 * 60)
}



module.exports = scrappingTools