'use client';
import  clientConnectionWithSupabase from '@/lib/supabase';

export default async function checkUserAuthClient() {
    const supabase = clientConnectionWithSupabase()
    return supabase.auth.getSession()
}