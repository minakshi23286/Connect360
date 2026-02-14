import {
    Briefcase,
    BarChart,
    Users,
    ShoppingCart,
    Monitor,
    Globe,
    Code,
    Cpu
} from "lucide-react";

export const services = [
    {
        title: "Management Consultancy",
        slug: "management-consultancy",
        description: "Strategic operational advice to improve business performance. We help organizations solve issues, create value, maximize growth and improve business performance.",
        fullDescription: "Our Management Consultancy services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions and sustainability across all industries and geographies.",
        benefits: [
            "Strategic Planning",
            "Operational Efficiency",
            "Change Management",
            "Performance Improvement"
        ],
        icon: BarChart
    },
    {
        title: "Commercial Brokerage",
        slug: "commercial-brokerage",
        description: "Expert facilitation of commercial transactions and business partnerships. We bridge the gap between buyers and sellers, ensuring smooth and profitable deals.",
        fullDescription: "Our Commercial Brokerage service is designed to connect businesses with the right opportunities. Whether you are looking to buy or sell a business, find a partner, or enter a new market, our team provides expert guidance and negotiation support.",
        benefits: [
            "Market Analysis & Valuation",
            "Deal Structuring & Negotiation",
            "Due Diligence Support",
            "Regulatory Compliance"
        ],
        icon: Briefcase
    },
    {
        title: "Human Resources Consultancy",
        slug: "hr-consultancy",
        description: "Talent acquisition, planning, and organizational development. We help you build and manage high-performing teams.",
        fullDescription: "People are your most valuable asset. Our HR Consultancy services range from recruitment and talent acquisition to organizational development, compensation planning, and HR compliance/policy development.",
        benefits: [
            "Talent Acquisition",
            "HR Policy Development",
            "Employee Engagement",
            "Compliance Management"
        ],
        icon: Users
    },
    {
        title: "IT & AI Solutions",
        slug: "it-ai-solutions",
        description: "Leveraging Artificial Intelligence and cutting-edge IT infrastructure to drive innovation and automation in your business.",
        fullDescription: "We provide comprehensive IT and AI solutions. From implementing predictive analytics and machine learning models to optimizing your IT infrastructure for the AI era, we help you stay ahead of the curve.",
        benefits: [
            "AI Strategy & Implementation",
            "Process Automation",
            "Data Analytics",
            "IT Infrastructure Optimization"
        ],
        icon: Cpu
    },
    {
        title: "E-Commerce Solutions",
        slug: "e-commerce",
        description: "End-to-end digital commerce solutions. We help you build, launch, and scale your online business with robust platforms.",
        fullDescription: "Our E-Commerce solutions cover everything from platform selection (Shopify, Magento, Custom) to user experience design, payment gateway integration, and inventory management systems.",
        benefits: [
            "Platform Development",
            "Payment & Logistics Integration",
            "Conversion Rate Optimization",
            "Omnichannel Strategy"
        ],
        icon: ShoppingCart
    },
    {
        title: "Digital & Tech Solutions",
        slug: "digital-tech",
        description: "Holistic digital transformation services including web development, app creation, and cloud solutions.",
        fullDescription: "Our Digital & Tech Solutions empower your business to thrive in the digital age. We offer custom software development, mobile app creation, cloud migration strategies, and cybersecurity assessments.",
        benefits: [
            "Web & Mobile App Development",
            "Cloud Solutions",
            "Cybersecurity",
            "Digital Transformation Strategy"
        ],
        icon: Monitor
    }
];
