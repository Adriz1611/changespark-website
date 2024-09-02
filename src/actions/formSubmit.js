"use server"

import {createClient} from "@/utils/supabase/server";

export default async function submitForm(data) {
    const supabase = createClient()

    const { data: formData, error} = await supabase.from("applications").insert([
        { "fullname": ""}
        ]
    ).select()

}