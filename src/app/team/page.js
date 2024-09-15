import Team from "@/components/pages/team";
import { createClient } from "@/utils/supabase/server";

export default async function TeamSection() {
  const data = await fetchMembers();

  return (
    <section className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <Team users={data} />
    </section>
  );
}

async function fetchMembers() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("volunteers")
    .select("name, role, avatar, socials")
    .order("created_at", { ascending: true }); // Order by creation date in ascending order

  if (error) throw error;
  return data;
}
