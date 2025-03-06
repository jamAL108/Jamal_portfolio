'use server';
import createSupabaseServerClient from '../lib/server'
import { redirect } from 'next/navigation'
export default async function signOutWithEmailPassword(){
    const supabase = await createSupabaseServerClient()
    await supabase.auth.signOut()
    redirect('/')
}