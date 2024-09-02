"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox, Label, TextInput, Textarea, Radio, Select } from 'flowbite-react';

export default function VolunteerForm() {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  // Watch interests and preferredDays to manually handle checkboxes
  const interests = watch('interests') || [];
  const preferredDays = watch('preferredDays') || [];

  return (
    <div className="bg-gradient-to-br from-background-100 to-background-200 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-secondary-700 mb-8 text-center">Volunteer Application</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName" value="Full Name" className="text-secondary-700 font-semibold" />
              <TextInput
                id="fullName"
                {...register('fullName', { required: 'Full name is required' })}
                className="mt-1"
              />
              {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
            </div>
            <div>
              <Label htmlFor="email" value="Email Address" className="text-secondary-700 font-semibold" />
              <TextInput
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="mt-1"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phoneNumber" value="Phone Number" className="text-secondary-700 font-semibold" />
              <TextInput
                id="phoneNumber"
                type="tel"
                {...register('phoneNumber', { required: 'Phone number is required' })}
                className="mt-1"
              />
              {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
            </div>
            <div>
              <Label htmlFor="address" value="Full Address" className="text-secondary-700 font-semibold" />
              <Textarea
                id="address"
                {...register('address', { required: 'Address is required' })}
                className="mt-1"
                rows={1}
              />
              {errors.address && <span className="text-red-500">{errors.address.message}</span>}
            </div>
          </div>

          <div>
            <Label value="Volunteer Interest" className="text-secondary-700 font-semibold mb-2 block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {['Event Volunteer', 'Administrative Support', 'Social Media Coordinator', 'Fundraising Volunteer', 'Community Outreach', 'Graphic Designer', 'Blogging', 'Photography and Videography'].map((interest) => (
                <div key={interest} className="flex items-center gap-2">
                  <Checkbox
                    id={interest}
                    {...register('interests')}
                    value={interest}
                    checked={interests.includes(interest)}
                    onChange={() => {
                      setValue('interests', interests.includes(interest) ? interests.filter(i => i !== interest) : [...interests, interest]);
                    }}
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
                    {...register('availability', { required: 'Please select your availability' })}
                    value={option}
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
                    {...register('preferredDays')}
                    value={day}
                    checked={preferredDays.includes(day)}
                    onChange={() => {
                      setValue('preferredDays', preferredDays.includes(day) ? preferredDays.filter(d => d !== day) : [...preferredDays, day]);
                    }}
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
              {...register('skills', { required: 'Skills and qualifications are required' })}
              className="mt-1"
            />
            {errors.skills && <span className="text-red-500">{errors.skills.message}</span>}
          </div>

          <div>
            <Label htmlFor="experience" value="Previous Volunteer Experience" className="text-secondary-700 font-semibold" />
            <Textarea
              id="experience"
              {...register('experience')}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="startDate" value="Starting Date" className="text-secondary-700 font-semibold" />
              <TextInput
                id="startDate"
                type="date"
                {...register('startDate', { required: 'Starting date is required' })}
                className="mt-1"
              />
              {errors.startDate && <span className="text-red-500">{errors.startDate.message}</span>}
            </div>
            <div>
              <Label htmlFor="endDate" value="Ending Date" className="text-secondary-700 font-semibold" />
              <TextInput
                id="endDate"
                type="date"
                {...register('endDate', { required: 'Ending date is required' })}
                className="mt-1"
              />
              {errors.endDate && <span className="text-red-500">{errors.endDate.message}</span>}
            </div>
          </div>

          <div>
            <Label htmlFor="qualifications" value="Current Qualifications (Institute's name)" className="text-secondary-700 font-semibold" />
            <TextInput
              id="qualifications"
              {...register('qualifications', { required: 'Qualifications are required' })}
              className="mt-1"
            />
            {errors.qualifications && <span className="text-red-500">{errors.qualifications.message}</span>}
          </div>

          <div>
            <Label htmlFor="reason" value="Why do you want to volunteer with us?" className="text-secondary-700 font-semibold" />
            <Textarea
              id="reason"
              {...register('reason', { required: 'Reason for volunteering is required' })}
              className="mt-1"
            />
            {errors.reason && <span className="text-red-500">{errors.reason.message}</span>}
          </div>

          <div>
            <Label value="Would you like to contribute to the cause?" className="text-secondary-700 font-semibold mb-2 block" />
            <Select
              id="contribute"
              {...register('contribute', { required: 'Please select an option' })}
              className="mt-1"
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </Select>
            {errors.contribute && <span className="text-red-500">{errors.contribute.message}</span>}
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
