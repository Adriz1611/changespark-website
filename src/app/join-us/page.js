"use client"

import React, { useState } from 'react';
import { Checkbox, Label, TextInput, Textarea, Radio, Select } from 'flowbite-react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    interests: [],
    availability: '',
    preferredDays: [],
    skills: '',
    experience: '',
    startDate: '',
    endDate: '',
    qualifications: '',
    reason: '',
    contribute: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' 
        ? (checked 
          ? [...prevState[name], value] 
          : prevState[name].filter(item => item !== value))
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="bg-gradient-to-br from-background-100 to-background-200 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-secondary-700 mb-8 text-center">Volunteer Application</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName" value="Full Name" className="text-secondary-700 font-semibold" />
              <TextInput
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email Address" className="text-secondary-700 font-semibold" />
              <TextInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phoneNumber" value="Phone Number" className="text-secondary-700 font-semibold" />
              <TextInput
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="address" value="Full Address" className="text-secondary-700 font-semibold" />
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1"
                rows={1}
              />
            </div>
          </div>

          <div>
            <Label value="Volunteer Interest" className="text-secondary-700 font-semibold mb-2 block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {['Event Volunteer', 'Administrative Support', 'Social Media Coordinator', 'Fundraising Volunteer', 'Community Outreach', 'Graphic Designer', 'Blogging', 'Photography and Videography'].map((interest) => (
                <div key={interest} className="flex items-center gap-2">
                  <Checkbox
                    id={interest}
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                  <Label htmlFor={interest} value={interest} className="text-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label value="Availability" className="text-secondary-700 font-semibold mb-2 block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Once a week',
                'Twice a week',
                'Once a month',
                'Occasionally (for special events)',
                'Regular (6 days a week)'
              ].map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <Radio
                    id={option}
                    name="availability"
                    value={option}
                    checked={formData.availability === option}
                    onChange={handleChange}
                  />
                  <Label htmlFor={option} value={option} className="text-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label value="Preferred Days" className="text-secondary-700 font-semibold mb-2 block" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex items-center gap-2">
                  <Checkbox
                    id={day}
                    name="preferredDays"
                    value={day}
                    checked={formData.preferredDays.includes(day)}
                    onChange={handleChange}
                  />
                  <Label htmlFor={day} value={day} className="text-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="skills" value="Skills and Qualifications" className="text-secondary-700 font-semibold" />
            <Textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="experience" value="Previous Volunteer Experience" className="text-secondary-700 font-semibold" />
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="startDate" value="Starting Date" className="text-secondary-700 font-semibold" />
              <TextInput
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="endDate" value="Ending Date" className="text-secondary-700 font-semibold" />
              <TextInput
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="qualifications" value="Current Qualifications (Institute's name)" className="text-secondary-700 font-semibold" />
            <TextInput
              id="qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="reason" value="Why do you want to volunteer with us?" className="text-secondary-700 font-semibold" />
            <Textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label value="Would you like to contribute to the cause?" className="text-secondary-700 font-semibold mb-2 block" />
            <Select
              id="contribute"
              name="contribute"
              value={formData.contribute}
              onChange={handleChange}
              required
              className="mt-1"
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </Select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-medium text-white bg-background-600 rounded-lg shadow-md transition-all duration-300 hover:bg-background-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-background-500 focus:ring-opacity-50"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}