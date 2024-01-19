import React from 'react'
import { LivePriceContext } from '../../context/LivePriceContext'
import { LanguageContext } from "../../context/LanguageContext"
import { useTranslation } from 'react-i18next'

const PricePage = () => {
    const { livePrices, connect, disconnect, socket } = React.useContext(LivePriceContext)
    const { dir , lang } = React.useContext(LanguageContext)
    const { t } = useTranslation()

    React.useEffect(() => {
        // eslint-disable-next-line no-undef
        window.scrollTo(0, 0)
    }, [])

    React.useEffect(() => {
        if (!socket.connected){
            connect()
        }

        return () => {
            if (socket.connected){
                disconnect()
            }
        }
        
    }, [connect, disconnect, socket.connected])
    

    const cryptoPrices = livePrices.filter(p => p.domain === "CRYPTO")
    const forexPrices = livePrices.filter(p => p.domain === "FOREX")
    const IRPrices = livePrices.filter(p => p.domain === "IR")

    const cryptoPricesRow = cryptoPrices.map((p, index) => {
        return (
            <tr key={index} className={`${index === cryptoPrices.length-1 ? "": "border-b"} transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`}>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{p.name}</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">${p.value.toFixed(4)}</td>
                <td className={`p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 ${p.change > 0 ? "text-green-500" : p.change < 0 ? "text-red-500": "text-gray-500"}`}>{p.change}%</td>
            </tr>
        )
    })

    const forexPricesRow = forexPrices.map((p, index) => {
        return (
            <tr key={index} className={`${index === forexPrices.length-1 ? "": "border-b"} transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`}>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{p.name}</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{p.value}</td>
                <td className={`p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 ${p.change > 0 ? "text-green-500" : p.change < 0 ? "text-red-500": "text-gray-500"}`}>{p.change}%</td>
            </tr>
        )
    })

    const IRPricesRow = IRPrices.map((p, index) => {
        return (
            <tr key={index} className={`vazir ${index === IRPrices.length-1 ? "": "border-b"} transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`}>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{t(p.name)}</td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{p.value.toLocaleString("fa-IR")}</td>
                <td className={`p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 ${p.change > 0 ? "text-green-500" : p.change < 0 ? "text-red-500": "text-gray-500"}`}>{p.change.toLocaleString("fa-IR")}%</td>
            </tr>
        )
    })

    if (lang === "fa"){
        return (
            <main className='container mx-auto pt-32 min-h-screen'>
                <section className="w-full py-12">
                    <div className="container px-4 md:px-6">

                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h1 className="text-2xl font-bold tracking-tight">{t("prices")}</h1>
                        </div>
                        <div className="p-6">
                            <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&amp;_tr]:border-b">
                                </thead>
                                <tbody className="[&amp;_tr:last-child]:border-0">
                                    {IRPricesRow}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
  return (
    <main dir={"ltr"} className='container mx-auto pt-32 min-h-screen'>
        <section className="w-full py-12">
            <div className="container px-4 md:px-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm  mb-10" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h1 className="text-2xl font-bold tracking-tight">Crypto Prices</h1>
                </div>
                <div className="p-6">
                    <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&amp;_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Asset
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Value
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Change
                            </th>
                        </tr>
                        </thead>
                        <tbody className="[&amp;_tr:last-child]:border-0">
                            {cryptoPricesRow}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h1 className="text-2xl font-bold tracking-tight">Forex Prices</h1>
                </div>
                <div className="p-6">
                    <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&amp;_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Asset
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Value
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Change
                            </th>
                        </tr>
                        </thead>
                        <tbody className="[&amp;_tr:last-child]:border-0">
                            {forexPricesRow}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default PricePage