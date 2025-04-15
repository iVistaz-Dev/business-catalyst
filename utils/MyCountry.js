"use client"

import React, { useEffect, useState } from "react"
import { Country, State, City } from "country-state-city"
import Select from "react-select"
import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"

function MyCountry({
  onDataSelect,
  errorCountry,
  errorCity,
  errorState,
  isCountryExists,
  isStateExists,
  isCityExists,
  resetTrigger,
}) {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(
    isCountryExists ? isCountryExists : null
  )
  const [selectedState, setSelectedState] = useState(
    isStateExists ? isStateExists : null
  )
  const [selectedCity, setSelectedCity] = useState(
    isCityExists ? isCityExists : null
  )

  // Fetch countries on mount
  useEffect(() => {
    setCountries(Country.getAllCountries())
  }, [])

  // Update states when country changes
  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry.isoCode)
      setStates(stateList)
      setSelectedState(isStateExists ? isStateExists : null)
      setCities([])
    }
  }, [selectedCountry])

  useEffect(() => {
    if (resetTrigger) {
      setSelectedCountry(null)
      setSelectedState(null)
      setSelectedCity(null)
      setStates([])
      setCities([])
    }
  }, [resetTrigger])

  // Update cities when state changes
  useEffect(() => {
    if (selectedState) {
      const cityList = City.getCitiesOfState(
        selectedCountry.isoCode,
        selectedState.isoCode
      )
      setCities(cityList)
    }
  }, [selectedState])

  // Pass selected values up
  useEffect(() => {
    if (selectedCountry && selectedState && selectedCity) {
      onDataSelect({
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
      })
    }
  }, [selectedCity])

  // Format options
  const formatOptions = (list) =>
    list.map((item) => ({ value: item, label: item.name }))

  // Shared styles
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#f9fafb", // gray-50
      borderColor: "#d1d5db", // gray-300
      minHeight: "2.5rem",
      boxShadow: "none",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#111827", // gray-900
    }),
    placeholder: (base) => ({
      ...base,
      color: "#6b7280", // gray-500
      fontWeight: 400,
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#0d9488" : "white", // teal-600
      color: isFocused ? "white" : "#111827",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 999,
    }),
  }

  return (
    <div className="grid grid-cols-1 py-1">
      <form>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <p className="-mb-2 text-start text-black text-sm">Country</p>
            <Select
              options={formatOptions(countries)}
              value={
                selectedCountry
                  ? { value: selectedCountry, label: selectedCountry.name }
                  : null
              }
              onChange={(option) => {
                setSelectedCountry(option ? option.value : null)
              }}
              placeholder="Choose Country"
              styles={customStyles}
              isClearable
            />
            {errorCountry && (
              <p className="-mb-4 pl-2 pt-1 text-start text-red-500 text-sm">
                {errorCountry}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="-mb-2 text-start text-black text-sm">State</p>
            <Select
              options={formatOptions(states)}
              value={
                selectedState
                  ? { value: selectedState, label: selectedState.name }
                  : null
              }
              onChange={(option) => {
                setSelectedState(option ? option.value : null)
              }}
              placeholder="Choose State"
              styles={customStyles}
              isClearable
              isDisabled={!selectedCountry}
            />
            {errorState && (
              <p className="-mb-4 pl-2 pt-1 text-start text-red-500 text-sm">
                {errorState}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="-mb-2 text-start text-black text-sm">City</p>
            <Select
              options={formatOptions(cities)}
              value={
                selectedCity
                  ? { value: selectedCity, label: selectedCity.name }
                  : null
              }
              onChange={(option) => {
                setSelectedCity(option ? option.value : null)
              }}
              placeholder="Choose City"
              styles={customStyles}
              isClearable
              isDisabled={!selectedState}
            />
            {errorCity && (
              <p className="-mb-4 pl-2 pt-1 text-start text-red-500 text-sm">
                {errorCity}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default MyCountry
