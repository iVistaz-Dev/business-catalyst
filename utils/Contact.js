"use client"

import React, { useState } from "react"
import axios from "axios"
import MyCountry from "./MyCountry"

export default function Contact() {
  const handleDataSelect = (data) => {
    setFormData((prev) => ({
      ...prev,
      country: data.country.name,
      state: data.state.name,
      city: data.city.name,
    }))
  }

  const [resetLocationSelect, setResetLocationSelect] = useState(false)
  const [countryError, setCountryError] = useState("")
  const [stateError, setStateError] = useState("")
  const [cityError, setCityError] = useState("")
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    company: "",
    comments: "",
    terms: false,
  })

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.first_name) newErrors.first_name = "First name is required"
    if (!formData.last_name) newErrors.last_name = "Last name is required"
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid"
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric"
    }
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.company) newErrors.company = "Company is required"
    if (!formData.terms) newErrors.terms = "You must agree to the terms"

    setCountryError(newErrors.country || "")
    setStateError(newErrors.state || "")
    setCityError(newErrors.city || "")
    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      const formDataToSend = new FormData()
      for (const key in formData) {
        formDataToSend.append(key, formData[key])
      }
      try {
        const response = await axios.post(
          "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10377/feedback",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        console.log(formDataToSend)
        setResetLocationSelect(true) // trigger the reset
        setTimeout(() => setResetLocationSelect(false), 100)
        setSuccessMessage("Thank you for submitting")
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          country: "",
          state: "",
          city: "",
          company: "",
          comments: "",
          terms: false,
        })
        setErrors({})
        console.log("Form submitted successfully", response.data)
      } catch (error) {
        console.error("Error submitting form", error)
      }
    }
  }

  return (
    <div className="lg:w-8/12 mx-auto p-4">
      <div className="flex justify-center items-center mb-4">
        {successMessage && (
          <p className="text-green-500 text-xl">{successMessage}</p>
        )}
      </div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-2">
          <div className="mb-0 w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm">{errors.first_name}</p>
            )}
          </div>
          <div className="mb-3 w-full">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm">{errors.last_name}</p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            maxLength="10"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-456-7890"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <MyCountry
            onDataSelect={handleDataSelect}
            errorCountry={countryError}
            errorCity={cityError}
            errorState={stateError}
            isCountryExists={null}
            isStateExists={null}
            isCityExists={null}
            resetTrigger={resetLocationSelect}
          />
        </div>

        <div className="mb-3 pt-4">
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="comments"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Any additional questions or details? Please share below:
          </label>
          <textarea
            id="comments"
            rows="4"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Additional questions..."
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center mb-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the terms and conditions
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formData.terms}
          className={`p-2 px-6 rounded-lg ${
            !formData.terms ? "bg-slate-400" : "text-white bg-[#7F3F97]"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
