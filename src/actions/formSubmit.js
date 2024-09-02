"use server"

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export default async function submitForm(data) {
    const supabase = createClient()


    const {error} = await supabase.from("applications").insert(
        {
            "fullname": data.fullName,
            "email": data.email,
            "phoneNumber": data.phoneNumber,
            "address": data.address,
            "availability": data.availability,
            "interests": data.interests,
            "preferredDays": data.preferredDays,
            "skills": data.skills,
            "experience": data.experience,
            "startDate": data.startDate,
            "endDate": data.endDate,
            "qualifications": data.qualifications,
            "reason": data.reason,
            "contribute": data.contribute,
        },
    )

    if (error) throw error

    redirect("/")

}