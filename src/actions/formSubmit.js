"use server";

export default async function submitForm(data) {
  return {
    success: true,
    data: {
      id: Math.floor(Math.random() * 900000 + 100000).toString(),
      name: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      submittedAt: new Date().toISOString(),
    },
  };
}
