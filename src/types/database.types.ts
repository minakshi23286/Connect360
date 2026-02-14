export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            leads: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    full_name: string
                    email: string
                    phone: string | null
                    company_name: string | null
                    job_title: string | null
                    country: string | null
                    industry: string | null
                    company_size: string | null
                    service_interest: string | null
                    inquiry_type: string | null
                    message: string | null
                    budget_range: string | null
                    timeline: string | null
                    lead_source: string | null
                    lead_status: string
                    priority: string
                    utm_source: string | null
                    utm_medium: string | null
                    utm_campaign: string | null
                    referrer_url: string | null
                    assigned_to: string | null
                    next_follow_up_date: string | null
                    internal_notes: string | null
                    gdpr_consent: boolean | null
                    marketing_consent: boolean | null
                    preferred_language: string | null
                    ip_address: string | null
                    user_agent: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    full_name: string
                    email: string
                    phone?: string | null
                    company_name?: string | null
                    job_title?: string | null
                    country?: string | null
                    industry?: string | null
                    company_size?: string | null
                    service_interest?: string | null
                    inquiry_type?: string | null
                    message?: string | null
                    budget_range?: string | null
                    timeline?: string | null
                    lead_source?: string | null
                    lead_status?: string
                    priority?: string
                    utm_source?: string | null
                    utm_medium?: string | null
                    utm_campaign?: string | null
                    referrer_url?: string | null
                    assigned_to?: string | null
                    next_follow_up_date?: string | null
                    internal_notes?: string | null
                    gdpr_consent?: boolean | null
                    marketing_consent?: boolean | null
                    preferred_language?: string | null
                    ip_address?: string | null
                    user_agent?: string | null
                }
                Update: {
                    // ... same as Insert but all optional
                    id?: string
                    created_at?: string
                    updated_at?: string
                    full_name?: string
                    email?: string
                    phone?: string | null
                    company_name?: string | null
                    job_title?: string | null
                    country?: string | null
                    industry?: string | null
                    company_size?: string | null
                    service_interest?: string | null
                    inquiry_type?: string | null
                    message?: string | null
                    budget_range?: string | null
                    timeline?: string | null
                    lead_source?: string | null
                    lead_status?: string
                    priority?: string
                    utm_source?: string | null
                    utm_medium?: string | null
                    utm_campaign?: string | null
                    referrer_url?: string | null
                    assigned_to?: string | null
                    next_follow_up_date?: string | null
                    internal_notes?: string | null
                    gdpr_consent?: boolean | null
                    marketing_consent?: boolean | null
                    preferred_language?: string | null
                    ip_address?: string | null
                    user_agent?: string | null
                }
            }
            meetings: {
                Row: {
                    id: string
                    lead_id: string | null
                    created_at: string
                    meeting_date: string
                    meeting_type: string | null
                    meeting_platform: string | null
                    meeting_link: string | null
                    duration_minutes: number | null
                    status: string | null
                    notes: string | null
                    outcome: string | null
                }
                Insert: {
                    id?: string
                    lead_id?: string | null
                    created_at?: string
                    meeting_date: string
                    meeting_type?: string | null
                    meeting_platform?: string | null
                    meeting_link?: string | null
                    duration_minutes?: number | null
                    status?: string | null
                    notes?: string | null
                    outcome?: string | null
                }
                Update: {
                    // ...
                    id?: string
                    lead_id?: string | null
                    created_at?: string
                    meeting_date?: string
                    meeting_type?: string | null
                    meeting_platform?: string | null
                    meeting_link?: string | null
                    duration_minutes?: number | null
                    status?: string | null
                    notes?: string | null
                    outcome?: string | null
                }
            }
            // Add service_inquiries if needed
        }
    }
}
