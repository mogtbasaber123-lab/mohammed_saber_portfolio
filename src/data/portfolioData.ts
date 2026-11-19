export interface Metric {
  value: string;
  numberValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Achievement {
  category: string;
  description: string;
  highlightMetric?: string;
}

export interface ExperienceRole {
  id: string;
  jobTitle: string;
  company: string;
  companyLogo?: string;
  companyLogoBg?: string;
  period: string;
  location?: string;
  badge?: string;
  achievements: Achievement[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    description?: string;
    level?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  grade?: string;
  type: 'academic' | 'certification' | 'award';
  description: string;
  image: string;
  badge: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    headline: string;
    bio: string;
    location: string;
    profileImage: string;
    cvPath: string;
    coreStrengths: string[];
  };
  metrics: Metric[];
  experiences: ExperienceRole[];
  skillCategories: SkillCategory[];
  academicDegree: CertificationItem;
  certifications: CertificationItem[];
  contactInfo: {
    email: string;
    whatsapp: {
      display: string;
      link: string;
    };
    linkedin: {
      display: string;
      link: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mohammed Saber",
    title: "Senior Accountant",
    headline: "Financial Management | Tax Compliance | ERP Systems | Executive Reporting",
    bio: "Detail-oriented and results-driven Senior Accountant with over 5 years of hands-on experience in financial reporting, general ledger management, budgeting, and account reconciliation. Proficient in using leading accounting software such as Zoho Books, QuickBooks, SAP, and advanced Excel, with a strong ability to maintain accurate financial records and ensure compliance with regulatory standards. Demonstrated success in improving financial processes, reducing operational costs, and supporting strategic decision-making through timely and reliable financial analysis. Highly trusted with confidential information, committed to ethical practices, accuracy, and meeting tight deadlines in dynamic business environments.",
    location: "Riyadh, Saudi Arabia",
    profileImage: "/images/profile.jpg",
    cvPath: "/cv.pdf",
    coreStrengths: [
      "High Precision & Numerical Accuracy",
      "Strict Adherence to Monthly & Annual Closing Deadlines",
      "Translating Complex Financial Data into Executive Insights"
    ]
  },
  metrics: [
    {
      value: "5+",
      numberValue: 5,
      suffix: "+",
      label: "Years of Practical Experience",
      description: "In financial reporting, general ledger & tax compliance"
    },
    {
      value: "100%",
      numberValue: 100,
      suffix: "%",
      label: "Accuracy in Bank & Tax Reconciliations",
      description: "Zero discrepancy track record across major audits"
    },
    {
      value: "5+",
      numberValue: 5,
      suffix: "+",
      label: "Accounting & ERP Systems Mastered",
      description: "Hands-on expertise in Zoho, Odoo, SAP, QuickBooks & Excel"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      jobTitle: "Senior Accountant (Full-time)",
      company: "Lampaah",
      companyLogo: "/images/company-current.jpg",
      companyLogoBg: "#FFFFFF",
      period: "January 2025 – Present",
      badge: "Current Role",
      achievements: [
        {
          category: "Financial Close & Reporting",
          description: "Led monthly and year-end closing processes and prepared accurate financial statements in compliance with accounting standards, reducing closing turnaround time by ",
          highlightMetric: "30%"
        },
        {
          category: "Team Supervision & Audit",
          description: "Supervised junior accountants and reviewed daily journal entries, bank reconciliations, and AR/AP accounts, maintaining ",
          highlightMetric: "100% balance accuracy"
        },
        {
          category: "Tax & Regulatory Compliance",
          description: "Prepared and reviewed periodic tax and Zakat returns, ensuring full adherence to financial policies and achieving ",
          highlightMetric: "100% compliance with zero penalties"
        },
        {
          category: "Financial Analysis & Asset Control",
          description: "Monitored operating expenses, revenues, and fixed asset registers, delivering actionable financial insights to senior management that optimized costs by ",
          highlightMetric: "15%"
        },
        {
          category: "External & Internal Audit Coordination",
          description: "Acted as the primary point of contact for internal and external auditors, facilitating smooth, on-time completion of ",
          highlightMetric: "100% of annual audits"
        }
      ]
    },
    {
      id: "exp-2",
      jobTitle: "Accountant (Full-time)",
      company: "Taib",
      companyLogo: "/images/company-taib.jpg",
      companyLogoBg: "#94C2DA",
      period: "July 2021 – December 2024",
      badge: "Previous Role",
      achievements: [
        {
          category: "Financial Close & Reporting",
          description: "Led monthly and year-end closing processes and prepared accurate financial statements in compliance with accounting standards, reducing closing turnaround time by ",
          highlightMetric: "30%"
        },
        {
          category: "Team Supervision & Audit",
          description: "Supervised junior accountants and reviewed daily journal entries, bank reconciliations, and AR/AP accounts, maintaining ",
          highlightMetric: "100% balance accuracy"
        },
        {
          category: "Tax & Regulatory Compliance",
          description: "Prepared and reviewed periodic tax and Zakat returns, ensuring full adherence to financial policies and achieving ",
          highlightMetric: "100% compliance with zero penalties"
        },
        {
          category: "Financial Analysis & Asset Control",
          description: "Monitored operating expenses, revenues, and fixed asset registers, delivering actionable financial insights to senior management that optimized costs by ",
          highlightMetric: "15%"
        },
        {
          category: "External & Internal Audit Coordination",
          description: "Acted as the primary point of contact for internal and external auditors, facilitating smooth, on-time completion of ",
          highlightMetric: "100% of annual audits"
        }
      ]
    }
  ],
  skillCategories: [
    {
      id: "cat-erp",
      title: "Accounting & ERP Systems",
      subtitle: "Enterprise Software & Ledger Management",
      iconName: "Database",
      skills: [
        { name: "Zoho Books", description: "Cloud accounting, invoicing & ledger reconciliation" },
        { name: "Odoo ERP", description: "Integrated financial module, inventory & billing" },
        { name: "QuickBooks & SAP", description: "Enterprise general ledger, AP/AR & reporting" }
      ]
    },
    {
      id: "cat-bi",
      title: "Data Analysis & Business Intelligence",
      subtitle: "Advanced Modeling & Executive Dashboards",
      iconName: "BarChart3",
      skills: [
        {
          name: "Microsoft Excel (Advanced Excel)",
          description: "Financial modeling, complex formulas, Pivot Tables, and automated account reconciliation."
        },
        {
          name: "Microsoft Power BI",
          description: "Financial report preparation & analysis, data analytics, and interactive executive dashboard creation."
        }
      ]
    },
    {
      id: "cat-tax",
      title: "Accounting, Financial Reporting & Tax Standards",
      subtitle: "Regulatory Adherence & Corporate Governance",
      iconName: "ShieldCheck",
      skills: [
        { name: "IFRS (International Financial Reporting Standards)", description: "Global financial statement preparation & disclosure" },
        { name: "VAT (Value Added Tax)", description: "Tax calculation, filing & audit defense" },
        { name: "WHT (Withholding Tax)", description: "Compliance, schedule management & returns" },
        { name: "ZATCA Regulatory Compliance", description: "Full adherence to Saudi tax & zakat authority frameworks" },
        { name: "E-Invoicing Implementation & Compliance", description: "Phase 1 & Phase 2 integration & e-invoicing standards" }
      ]
    }
  ],
  academicDegree: {
    id: "degree-1",
    title: "Bachelor’s Degree in Financial and Banking Studies",
    issuer: "Sudan Academy for Banking & Financial Sciences",
    period: "Oct 2015 – Jan 2020",
    grade: "Very Good",
    type: "academic",
    description: "Department of Management and Accounting. Specialized in corporate finance, auditing principles, banking operations, and financial management.",
    image: "/images/cert-degree.jpg",
    badge: "B.Sc. Degree"
  },
  certifications: [
    {
      id: "cert-socpa",
      title: "SOCPA — Associate Membership",
      issuer: "Saudi Organization for Chartered and Professional Accountants",
      type: "certification",
      description: "Certified Active Associate Member of SOCPA (Membership No: 114770). Demonstrating full compliance with Saudi accounting, auditing, and tax regulatory frameworks.",
      image: "/images/cert-socpa.jpg",
      badge: "Membership No: 114770"
    },
    {
      id: "cert-uk",
      title: "British Accounting Fellowship",
      issuer: "Chartered Professional Qualification (UK)",
      type: "certification",
      description: "Chartered professional fellowship demonstrating international excellence in financial management, corporate reporting, and audit.",
      image: "/images/cert-uk.jpg",
      badge: "International Fellowship"
    },
    {
      id: "cert-appreciation",
      title: "Certificate of Appreciation (CBAHI)",
      issuer: "Taib Medical Co. & CBAHI Board",
      type: "award",
      description: "Awarded by Taib for outstanding financial contribution and dedication in meeting quality and financial safety standards required by CBAHI (Saudi Central Board for Accreditation of Healthcare Institutions).",
      image: "/images/cert-appreciation.jpg",
      badge: "CBAHI Quality Award"
    }
  ],
  contactInfo: {
    email: "mohmaedsabera624@gmail.com",
    whatsapp: {
      display: "WhatsApp Direct",
      link: "https://wa.me/qr/IR72V3BS4BQEN1"
    },
    linkedin: {
      display: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/mohammed-saber-24b923216"
    }
  },
  footer: {
    copyright: "© 2026 Mohammed Saber — Senior Accountant. All rights reserved."
  }
};
