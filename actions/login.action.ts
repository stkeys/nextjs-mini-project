'use server';
import { redirect } from 'next/navigation';
export async function loginAction(formData : FormData){
  const values = Object.fromEntries(formData.entries());
  console.log(values);

  redirect("/ticket");
}


