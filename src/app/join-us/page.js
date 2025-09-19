"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import submitForm from "../../actions/formSubmit";
import * as z from "zod";
import {
  Users,
  Heart,
  Target,
  Camera,
  Laptop,
  Megaphone,
  Calendar,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const volunteerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  interests: z
    .array(z.string())
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

const JoinUsHero = () => (
  <section className="relative py-32 lg:py-40 bg-gradient-to-br from-background-800 via-background-900 to-background-950 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-overlay filter blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
    <div className="container-custom relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-heading">
          Join Our Mission
        </h1>
        <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-paragraph">
          Be part of a community that's creating lasting change. Your skills,
          passion, and time can make a real difference.
        </p>
      </motion.div>
    </div>
  </section>
);

const VolunteerRoles = () => {
  const roles = [
    {
      icon: Users,
      title: "Community Outreach",
      description: "Connect with communities and build lasting relationships",
    },
    {
      icon: Laptop,
      title: "Digital Support",
      description:
        "Help with social media, web development, and online presence",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description:
        "Photography, videography, and storytelling to share our impact",
    },
    {
      icon: Megaphone,
      title: "Event Coordination",
      description:
        "Organize and manage events, workshops, and community programs",
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Lead initiatives and ensure successful project delivery",
    },
    {
      icon: Heart,
      title: "Fundraising",
      description: "Help raise funds and resources for our various programs",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-700 mb-4">
            How You Can Help
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We have various volunteer opportunities that match different skills
            and interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 mb-4 bg-primary-600 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-700 mb-2">
                  {role.title}
                </h3>
                <p className="text-secondary-600 text-sm">{role.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitForm(data);
      setIsSubmitted(true);
    } catch (error) {
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = watch("interests") || [];
  const preferredDays = watch("preferredDays") || [];

  const interestOptions = [
    { value: "Event Volunteer", icon: Calendar },
    { value: "Administrative Support", icon: Laptop },
    { value: "Social Media Coordinator", icon: Megaphone },
    { value: "Fundraising Volunteer", icon: Target },
    { value: "Community Outreach", icon: Users },
    { value: "Graphic Designer", icon: Camera },
    { value: "Blogging", icon: Laptop },
    { value: "Photography and Videography", icon: Camera },
  ];

  if (isSubmitted) {
    return (
      <>
        <JoinUsHero />
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-lg p-12"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-secondary-700 mb-4">
                Application Submitted!
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Thank you for your interest in volunteering with us. We'll
                review your application and get back to you within 2-3 business
                days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Back to Home
                </a>
                <a href="/projects" className="btn-secondary">
                  See Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <JoinUsHero />
      <VolunteerRoles />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-700 mb-4">
                Volunteer Application
              </h2>
              <p className="text-lg text-secondary-600">
                Fill out this form to start your journey with us
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary-700 border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-sm">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register("phoneNumber")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+91 12345 67890"
                      />
                      {errors.phoneNumber && (
                        <span className="text-red-500 text-sm">
                          {errors.phoneNumber.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Address *
                      </label>
                      <textarea
                        {...register("address")}
                        rows={1}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Your complete address"
                      />
                      {errors.address && (
                        <span className="text-red-500 text-sm">
                          {errors.address.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Volunteer Interests */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary-700 border-b border-gray-200 pb-2">
                    Volunteer Interests *
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interestOptions.map((interest) => {
                      const IconComponent = interest.icon;
                      return (
                        <div
                          key={interest.value}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            interests.includes(interest.value)
                              ? "border-primary-500 bg-primary-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => {
                            setValue(
                              "interests",
                              interests.includes(interest.value)
                                ? interests.filter((i) => i !== interest.value)
                                : [...interests, interest.value]
                            );
                          }}
                        >
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              {...register("interests")}
                              value={interest.value}
                              checked={interests.includes(interest.value)}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            <IconComponent className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                            <span className="text-sm font-medium text-secondary-700">
                              {interest.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.interests && (
                    <span className="text-red-500 text-sm">
                      Please select at least one interest
                    </span>
                  )}
                </div>

                {/* Availability */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary-700 border-b border-gray-200 pb-2">
                    Availability *
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Once a week",
                      "Twice a week",
                      "Once a month",
                      "Occasionally (for special events)",
                      "Regular (6 days a week)",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          {...register("availability")}
                          value={option}
                          className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500 mr-3"
                        />
                        <span className="text-sm text-secondary-700">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.availability && (
                    <span className="text-red-500 text-sm">
                      Please select your availability
                    </span>
                  )}
                </div>

                {/* Preferred Days */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary-700 border-b border-gray-200 pb-2">
                    Preferred Days *
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => {
                      const isSelected = preferredDays.includes(day);
                      return (
                        <div
                          key={day}
                          className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            const newDays = isSelected
                              ? preferredDays.filter((d) => d !== day)
                              : [...preferredDays, day];
                            setValue("preferredDays", newDays, { shouldValidate: true });
                          }}
                        >
                          <input
                            type="checkbox"
                            value={day}
                            checked={isSelected}
                            onChange={() => {}} // Handled by onClick
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">
                            {day}
                          </span>
                          {isSelected && (
                            <CheckCircle className="w-4 h-4 ml-2 text-primary-600" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {errors.preferredDays && (
                    <span className="text-red-500 text-sm">
                      Please select at least one day
                    </span>
                  )}
                </div>

                {/* Skills and Experience */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary-700 border-b border-gray-200 pb-2">
                    Skills & Experience
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Skills and Qualifications *
                      </label>
                      <textarea
                        {...register("skills")}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Tell us about your relevant skills and qualifications..."
                      />
                      {errors.skills && (
                        <span className="text-red-500 text-sm">
                          {errors.skills.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Previous Volunteer Experience
                      </label>
                      <textarea
                        {...register("experience")}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Any previous volunteer experience (optional)..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Preferred Start Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          {...register("startDate")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white hover:border-primary-300 cursor-pointer"
                        />
                      </div>
                      {errors.startDate && (
                        <span className="text-red-500 text-sm">
                          {errors.startDate.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Expected End Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          {...register("endDate")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white hover:border-primary-300 cursor-pointer"
                        />
                      </div>
                      {errors.endDate && (
                        <span className="text-red-500 text-sm">
                          {errors.endDate.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-secondary-700 border-b border-gray-200 pb-2">
                    Additional Information
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Educational Qualifications *
                    </label>
                    <textarea
                      {...register("qualifications")}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Your educational background..."
                    />
                    {errors.qualifications && (
                      <span className="text-red-500 text-sm">
                        {errors.qualifications.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Why do you want to volunteer with us? *
                    </label>
                    <textarea
                      {...register("reason")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Share your motivation and what drives you to volunteer..."
                    />
                    {errors.reason && (
                      <span className="text-red-500 text-sm">
                        {errors.reason.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      <ArrowRight className="w-4 h-4 inline mr-2" />
                      Are you interested in contributing to other activities? *
                    </label>
                    <div className="relative">
                      <select
                        {...register("contribute")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white hover:border-primary-300 cursor-pointer appearance-none"
                      >
                        <option value="" className="text-gray-500">Choose your preference</option>
                        <option value="Yes" className="text-secondary-700">
                          ✓ Yes, I'm open to other opportunities
                        </option>
                        <option value="No" className="text-secondary-700">
                          → No, I prefer to focus on selected areas
                        </option>
                        <option value="Maybe" className="text-secondary-700">
                          ? Maybe, depending on the activity
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.contribute && (
                      <span className="text-red-500 text-sm">
                        {errors.contribute.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
