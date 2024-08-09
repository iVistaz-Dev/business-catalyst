"use client"

import React, { useEffect, useState } from "react"
import { Country, State, City } from "country-state-city"
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
  const [error, setError] = useState(true)
  const [error1, setError1] = useState(true)
  const [error2, setError2] = useState(true)

  // Fetch countries on component mount
  useEffect(() => {
    const countryList = Country.getAllCountries()

    setCountries(countryList)
  }, [])

  // Update states when country changes
  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry.isoCode)
      //console.log(stateList)
      setStates(stateList)
      setSelectedState(isStateExists ? isStateExists : null) // Reset selected state
      setCities([]) // Clear cities
      //setError(false);
    }
  }, [selectedCountry])

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

  // Validate and pass data to parent component when all fields are selected
  useEffect(() => {
    //console.log(selectedCountry, selectedState, selectedCity);

    if (selectedCountry && selectedState && selectedCity) {
      onDataSelect({
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
      })
    }
  }, [selectedCity])

  // Filter list based on user input
  const filterList = (list, query) => {
    return query === ""
      ? list
      : list.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
  }

  return (
    <div className="grid grid-cols-1 py-1">
      <form>
        <div className="grid grid-cols-1 gap-4">
          <p className="-mb-2 text-start text-black text-sm">Country</p>
          <Combobox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative w-full">
              <div className="relative cursor-default overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Combobox.Input
                  placeholder="Choose Country"
                  className={`${
                    error
                      ? errorCountry
                        ? "border-0"
                        : "border-none"
                      : "border-none"
                  } text-sm  text-gray-900 focus:ring-0 bg-gray-50 py-[3px]`}
                  displayValue={(country) => (country ? country.name : "")}
                  onChange={(event) =>
                    setCountries(
                      filterList(Country.getAllCountries(), event.target.value)
                    )
                  }
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="size-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-start text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {countries.length === 0 && (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  )}
                  {countries.map((country) => (
                    <Combobox.Option
                      key={country.isoCode}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={country}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {country.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="size-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
              {error && errorCountry && (
                <p className="-mb-4 p-0 pl-2 pt-2 text-start text-red-500 text-sm">
                  {errorCountry}
                </p>
              )}
            </div>
          </Combobox>
          <p className="-mb-2 text-start text-black text-sm">State</p>
          <Combobox
            value={selectedState}
            onChange={setSelectedState}
            disabled={!selectedCountry}
          >
            <div className="relative">
              <div className="relative cursor-default overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Combobox.Input
                  placeholder="Choose State"
                  className={`${
                    error
                      ? errorState
                        ? "border-none text-sm"
                        : "border-none text-sm"
                      : "border-none"
                  } text-sm  text-gray-900 focus:ring-0 bg-gray-50 py-[3px]`}
                  displayValue={(state) => (state ? state.name : "")}
                  onChange={(event) =>
                    setStates(
                      filterList(
                        State.getStatesOfCountry(selectedCountry.isoCode),
                        event.target.value
                      )
                    )
                  }
                  disabled={!selectedCountry}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="size-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-start shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {states.length === 0 && (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  )}
                  {states.map((state) => (
                    <Combobox.Option
                      key={state.isoCode}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={state}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {state.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="size-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
              {error1 && errorState && (
                <p className="-mb-4 p-0 pl-2 pt-2 text-start text-red-500 text-sm">
                  {errorState}
                </p>
              )}
            </div>
          </Combobox>
          <p className="-mb-2 text-start text-black text-sm">City</p>
          <Combobox
            value={selectedCity}
            onChange={setSelectedCity}
            disabled={!selectedState}
          >
            <div className="relative">
              <div className="relative cursor-default overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Combobox.Input
                  placeholder="Choose City"
                  className={`${
                    error
                      ? errorCity
                        ? "border-none"
                        : "border-none"
                      : "border-none"
                  } text-sm  text-gray-900 focus:ring-0 bg-gray-50 py-[3px]`}
                  displayValue={(city) => (city ? city.name : "")}
                  onChange={(event) =>
                    setCities(
                      filterList(
                        City.getCitiesOfState(
                          selectedCountry.isoCode,
                          selectedState.isoCode
                        ),
                        event.target.value
                      )
                    )
                  }
                  disabled={!selectedState}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="size-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-start text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  {cities.length === 0 && (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  )}
                  {cities.map((city) => (
                    <Combobox.Option
                      key={city.name}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={city}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {city.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="size-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
              {error2 && errorCity && (
                <p className="-mb-4 p-0 pl-2 pt-2 text-start text-red-500 text-sm">
                  {errorCity}
                </p>
              )}
            </div>
          </Combobox>
        </div>
      </form>
    </div>
  )
}

export default MyCountry
