-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leas Table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contact Information
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company_name VARCHAR(255),
  job_title VARCHAR(255),
  
  -- Business Details
  country VARCHAR(100),
  industry VARCHAR(255),
  company_size VARCHAR(50),
  
  -- Inquiry Details
  service_interest VARCHAR(255),
  inquiry_type VARCHAR(100),
  message TEXT,
  budget_range VARCHAR(100),
  timeline VARCHAR(100),
  
  -- Lead Qualification
  lead_source VARCHAR(100),
  lead_status VARCHAR(50) DEFAULT 'new',
  priority VARCHAR(20) DEFAULT 'medium',
  
  -- Marketing & Analytics
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  referrer_url TEXT,
  
  -- Follow-up & Notes
  assigned_to UUID REFERENCES auth.users(id),
  next_follow_up_date TIMESTAMP WITH TIME ZONE,
  internal_notes TEXT,
  
  -- Consent & Compliance
  gdpr_consent BOOLEAN DEFAULT false,
  marketing_consent BOOLEAN DEFAULT false,
  
  -- Additional
  preferred_language VARCHAR(10) DEFAULT 'en',
  ip_address VARCHAR(45),
  user_agent TEXT
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(lead_status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_company ON leads(company_name);

-- Service Inquiries Table
CREATE TABLE service_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  service_type VARCHAR(100) NOT NULL,
  specific_requirements TEXT,
  expected_outcome TEXT,
  attachments JSONB,
  
  status VARCHAR(50) DEFAULT 'pending'
);

-- Meetings Table
CREATE TABLE meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  meeting_date TIMESTAMP WITH TIME ZONE NOT NULL,
  meeting_type VARCHAR(50),
  meeting_platform VARCHAR(100),
  meeting_link TEXT,
  
  duration_minutes INTEGER DEFAULT 30,
  status VARCHAR(50) DEFAULT 'scheduled',
  
  notes TEXT,
  outcome TEXT
);
