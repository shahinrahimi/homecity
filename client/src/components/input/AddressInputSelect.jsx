import React from 'react'
import { ADDRESSES, ADDRESSKEYS } from "../../constants/addresses"

const AddressInputSelect = ({
    country,
    setCountry,
    city,
    setCity,
    district,
    setDistrict
}) => {

    const countries = Array.from(new Set(ADDRESSES.map(address => address[ADDRESSKEYS.COUNTRY])))
    const cities = Array.from(new Set(ADDRESSES.filter(address => address[ADDRESSKEYS.COUNTRY] === country).map(address => address[ADDRESSKEYS.CITY])))
    const districts = ADDRESSES.filter(address => address[ADDRESSKEYS.CITY] === city).map(address => address[ADDRESSKEYS.DISTRICT])

    const handleCountryChange = (e) => {
        e.preventDefault()
        if (e.target.value === ""){
            setCountry("")
            setCity("")
            setDistrict("")
        } else {
            setCountry(e.target.value)
            setCity("")
            setDistrict("")
        }
    }

    return (
        <section className='w-full flex flex-col md:flex-row  justify-start md:justify-between items-start md:items-center gap-2'>
            <div className="flex flex-row w-full justify-between items-center md:flex-col md:basis-[calc(33%-3px)] md:shrink-0 gap-1">
                <label 
                    htmlFor="country"
                    className='uppercase text-sm'
                >country</label>
                <select
                    name='country'
                    className='basis-1/2 capitalize px-4 py-3 border border-c-black-100/25 outline-none w-full'
                    value={country}
                    onChange={handleCountryChange}
                >
                    <option value={""}>select ...</option>
                    {countries.map((country, index) => {
                        return (
                            <option key={index} value={country}>{country}</option>
                        )
                    })}
                </select>

            </div>
            
            <div className="flex flex-row w-full justify-between items-center md:flex-col md:basis-[calc(33%-3px)] md:shrink-0 gap-1">
                <label 
                    htmlFor="city"
                    className='uppercase text-sm'
                >city</label>

                <select 
                    name='city'
                    className='basis-1/2 capitalize px-4 py-3  border border-c-black-100/25 outline-none w-full'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value={""}>select ...</option>
                    {cities.map((city, index) => {
                        return (
                            <option key={index} value={city}>{city}</option>
                        )
                    })}
                </select>

            </div>

            <div className="flex flex-row w-full justify-between items-center md:flex-col md:basis-[calc(33%-3px)] md:shrink-0 gap-1">
                <label 
                    htmlFor="district"
                    className='uppercase text-sm'
                >district</label>

                <select
                    name='district'
                    className='basis-1/2 capitalize px-4 py-3 border border-c-black-100/25 outline-none w-full'
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                
                >
                    <option value={""}>select ...</option>
                    {districts.map((district, index) => {
                        return (
                            <option key={index} value={district}>{district}</option>
                        )
                    })}
                    <option value=""></option>
                </select>

            </div>
        </section>
    )
}

export default AddressInputSelect