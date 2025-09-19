"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function submitForm(data) {
  const supabase = createClient();

  const { data: applicationData, error } = await supabase
    .from("applications")
    .insert({
      fullname: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      availability: data.availability,
      interests: data.interests,
      preferredDays: data.preferredDays,
      skills: data.skills,
      experience: data.experience,
      startDate: data.startDate,
      endDate: data.endDate,
      qualifications: data.qualifications,
      reason: data.reason,
      contribute: data.contribute,
      isActive: true, // Default to true for new applications, can be managed by admin panel
    })
    .select("id, fullname, phoneNumber, email, created_at")
    .single();

  if (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error.message || "Failed to submit application. Please try again.",
    };
  }

  return {
    success: true,
    data: {
      id: applicationData.id,
      name: applicationData.fullname,
      phoneNumber: applicationData.phoneNumber,
      email: applicationData.email,
      submittedAt: applicationData.created_at,
    },
  };
}
