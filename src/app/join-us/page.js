"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Radio,
  Select,
} from "flowbite-react";

// Define the Zod schema for form validation
const volunteerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  interests: z
    .array(z.string(), "At least one interest must be selected")
    .min(1, "At least one interest must be selected"),
  availability: z.string().min(1, "Please select your availability"),
  preferredDays: z
    .array(z.string())
    .min(1, "Please select at least one preferred day"),
  skills: z.string().min(1, "Skills and qualifications are required"),
  experience: z.string().optional(),
  startDate: z.string().min(1, "Starting date is required"),
  endDate: z.string().min(1, "Ending date is required"),
  qualifications: z.string().min(1, "Qualifications are required"),
  reason: z.string().min(1, "Reason for volunteering is required"),
  contribute: z.string().min(1, "Please select an option"),
});

export default function VolunteerForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const interests = watch("interests") || [];
  const preferredDays = watch("preferredDays") || [];

  return (
    <div className="bg-gradient-to-br from-background-100 to-background-200 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-secondary-700 mb-8 text-center">
          Volunteer Application
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="fullName"
                value="Full Name"
                className="text-secondary-700 font-semibold"
              />
              <TextInput
                id="fullName"
                {...register("fullName")}
                className="mt-1"
              />
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName.message}</span>
              )}
            </div>
            <div>
              <Label
                htmlFor="email"
                value="Email Address"
                className="text-secondary-700 font-semibold"
              />
              <TextInput
                id="email"
                type="email"
                {...register("email")}
                className="mt-1"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="phoneNumber"
                value="Phone Number"
                className="text-secondary-700 font-semibold"
              />
              <TextInput
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber")}
                className="mt-1"
              />
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
            <div>
              <Label
                htmlFor="address"
                value="Full Address"
                className="text-secondary-700 font-semibold"
              />
              <Textarea
                id="address"
                {...register("address")}
                className="mt-1"
                rows={1}
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>
          </div>

          <div>
            <Label
              value="Volunteer Interest"
              className="text-secondary-700 font-semibold mb-2 block"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Event Volunteer",
                "Administrative Support",
                "Social Media Coordinator",
                "Fundraising Volunteer",
                "Community Outreach",
                "Graphic Designer",
                "Blogging",
                "Photography and Videography",
              ].map((interest) => (
                <div key={interest} className="flex items-center gap-2">
                  <Checkbox
                    id={interest}
                    {...register("interests")}
                    value={interest}
                    checked={interests.includes(interest)}
                    onChange={() => {
                      setValue(
                        "interests",
                        interests.includes(interest)
                          ? interests.filter((i) => i !== interest)
                          : [...interests, interest]
                      );
                    }}
                  />
                  <Label
                    htmlFor={interest}
                    value={interest}
                    className="text-sm"
                  />
                </div>
              ))}
            </div>
            {errors.interests && (
              <span className="text-red-500">
                {"Please input your interest"}
              </span>
            )}
          </div>

          <div>
            <Label
              value="Availability"
              className="text-secondary-700 font-semibold mb-2 block"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Once a week",
                "Twice a week",
                "Once a month",
                "Occasionally (for special events)",
                "Regular (6 days a week)",
              ].map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <Radio
                    id={option}
                    {...register("availability")}
                    value={option}
                  />
                  <Label htmlFor={option} value={option} className="text-sm" />
                </div>
              ))}
            </div>
            {errors.availability && (
              <span className="text-red-500">
                {"Please mention your availability"}
              </span>
            )}
          </div>

          <div>
            <Label
              value="Preferred Days"
              className="text-secondary-700 font-semibold mb-2 block"
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <div key={day} className="flex items-center gap-2">
                  <Checkbox
                    id={day}
                    {...register("preferredDays")}
                    value={day}
                    checked={preferredDays.includes(day)}
                    onChange={() => {
                      setValue(
                        "preferredDays",
                        preferredDays.includes(day)
                          ? preferredDays.filter((d) => d !== day)
                          : [...preferredDays, day]
                      );
                    }}
                  />
                  <Label htmlFor={day} value={day} className="text-sm" />
                </div>
              ))}
            </div>
            {errors.preferredDays && (
              <span className="text-red-500">
                {"Please fill your preferred days"}
              </span>
            )}
          </div>

          <div>
            <Label
              htmlFor="skills"
              value="Skills and Qualifications"
              className="text-secondary-700 font-semibold"
            />
            <Textarea id="skills" {...register("skills")} className="mt-1" />
            {errors.skills && (
              <span className="text-red-500">{errors.skills.message}</span>
            )}
          </div>

          <div>
            <Label
              htmlFor="experience"
              value="Previous Volunteer Experience"
              className="text-secondary-700 font-semibold"
            />
            <Textarea
              id="experience"
              {...register("experience")}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="startDate"
                value="Starting Date"
                className="text-secondary-700 font-semibold"
              />
              <TextInput
                id="startDate"
                type="date"
                {...register("startDate")}
                className="mt-1"
              />
              {errors.startDate && (
                <span className="text-red-500">{errors.startDate.message}</span>
              )}
            </div>
            <div>
              <Label
                htmlFor="endDate"
                value="Ending Date"
                className="text-secondary-700 font-semibold"
              />
              <TextInput
                id="endDate"
                type="date"
                {...register("endDate")}
                className="mt-1"
              />
              {errors.endDate && (
                <span className="text-red-500">{errors.endDate.message}</span>
              )}
            </div>
          </div>

          <div>
            <Label
              htmlFor="qualifications"
              value="Qualifications"
              className="text-secondary-700 font-semibold"
            />
            <Textarea
              id="qualifications"
              {...register("qualifications")}
              className="mt-1"
            />
            {errors.qualifications && (
              <span className="text-red-500">
                {errors.qualifications.message}
              </span>
            )}
          </div>

          <div>
            <Label
              htmlFor="reason"
              value="Why do you want to volunteer with us?"
              className="text-secondary-700 font-semibold"
            />
            <Textarea id="reason" {...register("reason")} className="mt-1" />
            {errors.reason && (
              <span className="text-red-500">{errors.reason.message}</span>
            )}
          </div>

          <div>
            <Label
              htmlFor="contribute"
              value="Are you interested in contributing to other activities?"
              className="text-secondary-700 font-semibold"
            />
            <Select
              id="contribute"
              {...register("contribute")}
              className="mt-1"
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </Select>
            {errors.contribute && (
              <span className="text-red-500">{errors.contribute.message}</span>
            )}
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
