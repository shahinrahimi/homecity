// Dependencies
const axios = require('axios')
const HTMLParser = require('node-html-parser')
const livePrices = require('./livePrices')
const LABLES = require("../constant/LABLES")
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
    label = LABLES.IR.USD
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[1].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )

    // eur = 1
    index = 1
    label = LABLES.IR.EUR
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[1].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )

    // gbp = 3
    index = 3
    label = LABLES.IR.GBP
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[1].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )

    // try = 4
    index = 4
    label = LABLES.IR.TRY
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[1].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )


    
    // ths = cryptoBody.querySelectorAll('tr > th')
    // printValues(ths)
    // tds = cryptoBody.querySelectorAll('tr > td')
    // printValues(tds)

    trs = cryptoTable.querySelectorAll('tr')
    // BTC = 0
    index = 0
    label = LABLES.IR.BTC
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[2].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )

    // ETH = 1
    index = 1
    label = LABLES.IR.ETH
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[2].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )

    // TRX = 5
    index = 5
    label = LABLES.IR.TRX
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[2].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )

    // BNB = 6
    index = 6
    label = LABLES.IR.BNB
    value = trs[index].querySelectorAll('td')[0].text.replaceAll(",", "").trim()
    change = trs[index].querySelectorAll('td')[2].text.trim()
    livePrices.setIRLivePrice(
      label,
      value,
      change
    )
    
  } else {
    console.log(`has problem to get dollar price`, statusCode)
  }
  return null
}

scrappingTools.scrapMinors = async () => {
  const { status, data } = await axios.get('https://www.tradingview.com/markets/currencies/rates-minor/')
  if (status === 200){
    const root = HTMLParser.parse(data)
    const elements = root.querySelectorAll('tbody > tr > td')
    elements.forEach(element => {
      const columns = element.querySelectorAll("td")
      const label = columns[0].querySelector("a").text.trim()
      const value = columns[2].text.trim()
      const change = columns[3].text.trim()
        if (Object.keys(LABLES.GLOBAL).includes(label)){
          livePrices.setGLOBALLivePrice(
            LABLES.GLOBAL[label],
            value,
            change
          )
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
    const elements = root.querySelectorAll('tbody > tr')
    elements.forEach(element => {
      const columns = element.querySelectorAll("td")
      const label = columns[0].querySelector("a").text.trim()
      const value = columns[1].text.trim()
      const change = columns[2].text.trim()
        if (Object.keys(LABLES.GLOBAL).includes(label)){
          livePrices.setGLOBALLivePrice(
            LABLES.GLOBAL[label],
            value,
            change
          )
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
      elements.forEach(element => {
        const columns = element.querySelectorAll("td")
        const label = columns[0].querySelector("a").text.trim()
        const value = columns[2].text.replace("USD", "").trim()
        const change = columns[3].text.trim()
        if (Object.keys(LABLES.GLOBAL).includes(label)){
          livePrices.setGLOBALLivePrice(
            LABLES.GLOBAL[label],
            value,
            change
          )
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
  } catch (e) {
    console.log(e)
    console.log("we have error in scraping prices")
  }
  return setTimeout(() => {
    scrappingTools.infiniteRun(intervalMin)
  }, intervalMin * 1000 * 60)
}


module.exports = scrappingTools