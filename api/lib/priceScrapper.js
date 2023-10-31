// Dependencies
const { curly } = require('node-libcurl')
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
  const {
    statusCode,
    data,
    headers
  } = await curly.get('https://www.tgju.org/')
  // dollar tBody 14
  // bitcoin tBody 18
  if (statusCode === 200){
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
    const cryptoBody = tBodies[18]


    
    // ths = currencyTable.querySelectorAll('tr > th')
    // printValues(ths)
    // tds = currencyTable.querySelectorAll('tr > td')
    // printValues(tds)

    trs = currencyTable.querySelectorAll('tr')
    // usd = 0
    index = 0
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.USDIRR] = parseFloat(tr ? tr : 0)

    // eur = 1
    index = 1
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.EURIRR] = parseFloat(tr ? tr : 0)

    // gbp = 3
    index = 3
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.GBPIRR] = parseFloat(tr ? tr : 0)

    // try = 4
    index = 4
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.TRYIRR] = parseFloat(tr ? tr : 0) 


    
    // ths = cryptoBody.querySelectorAll('tr > th')
    // printValues(ths)
    // tds = cryptoBody.querySelectorAll('tr > td')
    // printValues(tds)

    trs = currencyTable.querySelectorAll('tr')
    // BTC = 0
    index = 0
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.BTCIRR] = parseFloat(tr ? tr : 0)

    // ETH = 1
    index = 1
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.ETHIRR] = parseFloat(tr ? tr : 0)

    // TRX = 5
    index = 5
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.TRXIRR] = parseFloat(tr ? tr : 0)

    index = 6
    tr = trs[index].querySelectorAll('td')[0].text.replace(",", ".")
    livePrices[PRICELABELS.BNBIRR] = parseFloat(tr ? tr : 0)
    
  } else {
    console.log(`has problem to get dollar price`, statusCode)
  }

  console.log(livePrices)
  return null
}

scrappingTools.scrapMinors = async () => {
  const doubles = {}
  const { statusCode, data, headers } = await curly.get('https://www.tradingview.com/markets/currencies/rates-minor/')
  if (statusCode === 200){
    const root = HTMLParser.parse(data)
    const elements = root.querySelectorAll('tbody > tr > td')
      elements.forEach((element, index) => {
        if (index % 9 === 0){
          doubles[element.text.slice(0,6)] = elements[index+1].text
        }
      })
  } else {
      console.error('scrapping minors doubles the status code', statusCode)
  }
  console.log(doubles)
  return doubles;
}

scrappingTools.infiniteRun = (interval = 5) => {
  setInterval(() => {
    try {
      scrappingTools.scrapeIRR()
    } catch (e) {
      console.log(e)
    }
  }, interval * 60 * 1000)
}



module.exports = scrappingTools