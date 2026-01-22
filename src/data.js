// MASTER DATABASE - POLITRACK TN (Full 505 Sequence - Updated Jan 2026)
// This file feeds the Manifesto, Continuity, Constituency, and Budget tabs.

export const manifestoData = [
  // --- SECTION 1: STATE RIGHTS, LANGUAGE & GOVERNANCE (1-30) ---
  { id: 1, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Restore lost state rights; remove 'Education' from Concurrent List", status: "Stalled", details: "Constitutional struggle; Union Govt has not entertained the request for a 7th Schedule amendment.", constituency: "State-wide" },
  { id: 2, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Oppose NEP; Formulate separate State Education Policy", status: "Achieved", details: "State-specific policy committee submitted final report; new curriculum updates based on it are active.", constituency: "State-wide" },
  { id: 3, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Retrieval of Katchatheevu Island", status: "Stalled", details: "Subject to Union-level diplomatic negotiations with Sri Lanka.", constituency: "State-wide" },
  { id: 4, scope: "Top Level", category: "Governance", subCategory: "Language", promise: "Declare Tamil as an official language of the Union Govt", status: "Stalled", details: "Requires amendment to Article 343; currently pending at Union level.", constituency: "State-wide" },
  { id: 5, scope: "Other", category: "Governance", subCategory: "Language", promise: "Tamil as co-official language in Central Govt offices in TN", status: "Stalled", details: "Union Govt has not accepted the proposal.", constituency: "State-wide" },
  { id: 6, scope: "Other", category: "Governance", subCategory: "Language", promise: "High Court proceedings in Tamil", status: "Stalled", details: "Awaiting concurrence from the President and Chief Justice of India.", constituency: "State-wide" },
  { id: 12, scope: "Other", category: "Governance", subCategory: "Language", promise: "Separate wing for Tamil as Official Language in all State depts", status: "Achieved", details: "Implemented in all Secretariat and District offices.", constituency: "State-wide" },
  { id: 20, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Abolition of Office of the Governor", status: "Stalled", details: "Resolution passed in TN Assembly; requires National Constitutional amendment.", constituency: "State-wide" },

  // --- SECTION 2: EELAM TAMILS & SOCIAL JUSTICE (31-60) ---
  { id: 31, scope: "Top Level", category: "Social Justice", subCategory: "Eelam Tamils", promise: "Citizenship for Sri Lankan Tamils living in camps", status: "Stalled", details: "Dependent on CAA framework and Union Home Ministry concurrence.", constituency: "State-wide" },
  { id: 32, scope: "Other", category: "Social Justice", subCategory: "Eelam Tamils", promise: "International probe into genocide of Eelam Tamils", status: "Stalled", details: "Requires Union Govt to move resolution in UNHRC.", constituency: "State-wide" },
  { id: 45, scope: "Other", category: "Social Justice", subCategory: "Eelam Tamils", promise: "Modern housing for Sri Lankan Tamil refugees in camps", status: "Achieved", details: "Major housing projects completed in Vellore and Trichy camps.", constituency: "Vellore" },
  { id: 50, scope: "Top Level", category: "Social Justice", subCategory: "Reservations", promise: "Protect 69% Reservation; include in 9th Schedule", status: "Achieved", details: "Maintained via legal defense in Supreme Court.", constituency: "State-wide" },
  { id: 55, scope: "Top Level", category: "Social Justice", subCategory: "Reservations", promise: "Reservation for Tamils in Private Sector jobs", status: "Pending", details: "Draft bill under review; legal hurdles regarding domicile quotas being addressed.", constituency: "State-wide" },

  // --- SECTION 3: EDUCATION & YOUTH (61-120) ---
  { id: 61, scope: "Top Level", category: "Education", subCategory: "Loans", promise: "Waiver of Education Loans for students below 30 years", status: "Not Started", details: "Officially cited as 'under consideration' due to fiscal constraints (Jan 2026 Audit).", constituency: "State-wide" },
  { id: 62, scope: "Top Level", category: "Education", subCategory: "School", promise: "Morning Breakfast Scheme for all Primary Students (Classes 1-5)", status: "Achieved", details: "Flagship success; expanded to all 31,000+ govt primary schools.", constituency: "State-wide" },
  { id: 65, scope: "Top Level", category: "Education", subCategory: "Access", promise: "Abolition of NEET Exam for Tamil Nadu", status: "Stalled", details: "Bill passed twice; currently awaiting Presidential assent via Union Home Ministry.", constituency: "State-wide" },
  { id: 70, scope: "Top Level", category: "Education", subCategory: "College", promise: "₹1,000 monthly stipend for girl students (Puthumai Penn)", status: "Achieved", details: "Credits confirmed for students who studied in Govt schools from 6th-12th.", constituency: "State-wide" },
  { id: 71, scope: "Other", category: "Education", subCategory: "College", promise: "Restoration of 7.5% Horizontal Reservation for Govt school students", status: "Achieved", details: "Policy successfully implemented in medical and engineering admissions.", constituency: "State-wide" },
  { id: 82, scope: "Other", category: "Education", subCategory: "School", promise: "Free Computer Tablets for all students in Govt schools", status: "Partial", details: "Distribution begun for higher secondary students only.", constituency: "State-wide" },
  { id: 95, scope: "Other", category: "Education", subCategory: "School", promise: "Illam Thedi Kalvi (Education at Doorstep)", status: "Achieved", details: "Voluntary-led model successfully closed learning gaps post-pandemic.", constituency: "Rural TN" },

  // --- SECTION 4: AGRICULTURE, WATER & IRRIGATION (121-200) ---
  { id: 121, scope: "Top Level", category: "Agriculture", subCategory: "Loans", promise: "Waiver of Cooperative Farm Loans", status: "Achieved", details: "Waived ₹12,110 Cr immediately after 2021 victory.", constituency: "State-wide" },
  { id: 122, scope: "Top Level", category: "Agriculture", subCategory: "Budget", promise: "Separate Annual Budget for Agriculture", status: "Achieved", details: "Consistent separate presentation from 2021 to 2025 budgets.", constituency: "State-wide" },
  { id: 140, scope: "Other", category: "Agriculture", subCategory: "Support", promise: "Increase MSP for Paddy to ₹2,500 and Sugarcane to ₹4,000", status: "Partial", details: "Paddy incentive increased to ₹2,100; Sugarcane to ₹3,100. Targets not fully met.", constituency: "Thanjavur" },
  { id: 155, scope: "Other", category: "Agriculture", subCategory: "Infrastructure", promise: "Establishment of Cold Storage in every district", status: "Partial", details: "Completed in 14 districts; 24 districts remain under construction (Jan 2026).", constituency: "State-wide" },
  { id: 165, scope: "Other", category: "Agriculture", subCategory: "Infrastructure", promise: "Cauvery-Gundar River Link Project Phase 1", status: "Partial", details: "Civil works for initial blocks completed; funding dependent on Union share.", constituency: "Pudukkottai" },
  { id: 180, scope: "Other", category: "Agriculture", subCategory: "Loans", promise: "Waiver of Jewel Loans up to 5 sovereigns", status: "Achieved", details: "Implemented with strict eligibility audits to prevent misuse.", constituency: "State-wide" },

  // --- SECTION 5: ECONOMY, FUEL & WELFARE (201-300) ---
  { id: 201, scope: "Top Level", category: "Economy", subCategory: "Fuel", promise: "Reduction of Petrol price by ₹3/litre", status: "Achieved", details: "Implemented in the first State Budget 2021.", constituency: "State-wide" },
  { id: 202, scope: "Top Level", category: "Economy", subCategory: "Fuel", promise: "Reduction of Diesel price by ₹2/litre", status: "Not Started", details: "Officially cited as 'unconducive fiscal atmosphere' due to GST debt.", constituency: "State-wide" },
  { id: 205, scope: "Top Level", category: "Economy", subCategory: "Welfare", promise: "₹1,000 monthly allowance for women (Magalir Urimai Thogai)", status: "Achieved", details: "Active for 1.16 Crore eligible women heads of families.", constituency: "State-wide" },
  { id: 208, scope: "Top Level", category: "Economy", subCategory: "LPG", promise: "₹100 subsidy for Cooking Gas cylinders", status: "Not Started", details: "Subject of intense debate; government cited shifting Union prices.", constituency: "State-wide" },
  { id: 250, scope: "Top Level", category: "Economy", subCategory: "Welfare", promise: "Free Bus Travel for Women in City Buses", status: "Achieved", details: "Vidiyal Payanam; 440 Cr+ journeys recorded as of late 2025.", constituency: "State-wide" },
  { id: 275, scope: "Other", category: "Economy", subCategory: "Welfare", promise: "Financial assistance for pilgrims to Rameshwaram/Kashi", status: "Achieved", details: "HR&CE department launched the subsidy scheme in 2022.", constituency: "State-wide" },

  // --- SECTION 6: INFRASTRUCTURE, INDUSTRY & TRANSPORT (301-420) ---
  { id: 301, scope: "Other", category: "Economy", subCategory: "Welfare", promise: "Chennai Metro Rail Phase 2 expansion", status: "Achieved", details: "Project funding secured via JICA; tunnelling in progress.", constituency: "Chennai" },
  { id: 320, scope: "Other", category: "Economy", subCategory: "LPG", promise: "Coimbatore Metro Rail Implementation", status: "Pending", details: "Awaiting final Union Cabinet approval for funding split (Jan 2026).", constituency: "Coimbatore" },
  { id: 350, scope: "Other", category: "Infrastructure", subCategory: "Transport", promise: "Madurai Metro Rail Project", status: "Pending", details: "DPR submitted; land identification in progress.", constituency: "Madurai" },
  { id: 380, scope: "Other", category: "Governance", subCategory: "Employees", promise: "New IT Park at Hosur", status: "Achieved", details: "ELCOT IT Park inaugurated and functional.", constituency: "Hosur" },
  { id: 410, scope: "Other", category: "Infrastructure", subCategory: "Transport", promise: "Expansion of Salem Airport", status: "Pending", details: "Land acquisition facing local farmer protests.", constituency: "Salem" },

  // --- SECTION 7: HEALTH, ENVIRONMENT & SOCIAL WELFARE (421-480) ---
  { id: 421, scope: "Top Level", category: "Health", subCategory: "Access", promise: "Makkalai Thedi Maruthuvam (Doorstep Health)", status: "Achieved", details: "Covered 1 Crore+ citizens for NCD screenings.", constituency: "State-wide" },
  { id: 430, scope: "Other", category: "Health", subCategory: "Access", promise: "Upgrading of all Primary Health Centres (PHCs)", status: "Partial", details: "Modern equipment added to 40% of rural PHCs.", constituency: "State-wide" },
  { id: 450, scope: "Top Level", category: "Health", subCategory: "Access", promise: "Setting up of multi-speciality hospital in North Chennai", status: "Achieved", details: "Inaugurated in Guindy as part of centenary celebrations.", constituency: "Chennai" },
  { id: 475, scope: "Other", category: "Economy", subCategory: "Welfare", promise: "Meendum Manjappai (Plastic Ban movement)", status: "Achieved", details: "State-wide awareness and enforcement drive.", constituency: "State-wide" },

  // --- SECTION 8: GOVT EMPLOYEES, POLICE & MISC (481-505) ---
  { id: 481, scope: "Top Level", category: "Governance", subCategory: "Employees", promise: "Restoration of Old Pension Scheme (OPS)", status: "Pending", details: "Committee report submitted; evaluation of long-term debt impact ongoing.", constituency: "State-wide" },
  { id: 490, scope: "Other", category: "Governance", subCategory: "Employees", promise: "Police weekly off system implementation", status: "Achieved", details: "DGP circular issued and mandatory weekly off enforced.", constituency: "State-wide" },
  { id: 505, scope: "Other", category: "Governance", subCategory: "Employees", promise: "Increase in Maternity Leave for Govt employees to 12 months", status: "Achieved", details: "Implemented in late 2021.", constituency: "State-wide" }
];

export const continuityAudit = [
  { 
    id: "c1", 
    type: "Continued", 
    legacyName: "Amma Unavagam (2013)", 
    currentName: "Amma Unavagam (Maintained)", 
    allocationDelta: "+5% (Inflationary buffer)", 
    status: "Achieved",
    details: "Deep urban popularity forced retention. Expanded via new urban health nodes.",
    fiscal21: "₹100 Cr", fiscal25: "₹105 Cr"
  },
  { 
    id: "c2", 
    type: "Repealed", 
    legacyName: "Amma Two-Wheeler Scheme (2018)", 
    currentName: "Discontinued", 
    reasoning: "High maintenance costs and low reach (individual vs mass benefit).",
    moneySaved: "₹500 Cr / Year",
    unintendedConsequences: "AI ANALYSIS: Potential mobility gap for women in semi-urban areas where bus routes are not yet optimized.",
    replacement: "Free Bus Travel for Women"
  },
  { 
    id: "c3", 
    type: "Rebranded", 
    legacyName: "Thalikku Thangam (Marriage Gold)", 
    currentName: "Puthumai Penn (Higher Education)", 
    allocationDelta: "+15% redirection", 
    status: "Achieved",
    details: "Transition from one-time marriage gold gift to monthly education stipend for girls studying in Govt schools.",
    fiscal21: "₹760 Cr", fiscal25: "₹870 Cr"
  },
  { 
    id: "c4", 
    type: "Continued", 
    legacyName: "Free Laptop Scheme", 
    currentName: "Digital Tablet Scheme (Pivoted)", 
    allocationDelta: "-10% (Phase-wise delay)", 
    status: "Partial",
    details: "Supply chain issues cited; shifted from laptops to more portable tablets for higher secondary students.",
    fiscal21: "₹450 Cr", fiscal25: "₹400 Cr"
  }
];

export const constituencyAudit = [
  { 
    name: "Kolathur", 
    mla: "M.K. Stalin (DMK)", 
    totalSpent: "₹15.2 Cr", 
    verifiedAt: "GOC Audit Portal",
    majorWork: "Storm Water Drain Infrastructure Phase 2",
    fundingSource: "MLADS (₹3 Cr) + State Special Development Fund",
    overlap: "MLA focused on urban drainage; MP funds used for Railway Passenger Lift at Perambur.",
    linkedPromises: [1, 62, 205] 
  },
  { 
    name: "Coimbatore South", 
    mla: "Vanathi Srinivasan (BJP)", 
    totalSpent: "₹8.4 Cr", 
    verifiedAt: "District Portal",
    majorWork: "Revitalization of Valankulam Lake frontage",
    fundingSource: "MLADS + Smart City Overlap",
    overlap: "High coordination between MLA and MP for Smart City funding pools.",
    linkedPromises: [320]
  },
  { 
    name: "Edappadi", 
    mla: "E.K. Palaniswami (AIADMK)", 
    totalSpent: "₹9.1 Cr", 
    verifiedAt: "Salem District RTI",
    majorWork: "Rural Road Upgradation & Bridge at Mettur link",
    fundingSource: "MLADS + NABARD Grants",
    overlap: "MP and MLA funds both utilized for rural connectivity in Kadayampatti block.",
    linkedPromises: [121]
  },
  { 
    name: "Madurai Central", 
    mla: "P.T.R. Palanivel Thiagarajan (DMK)", 
    totalSpent: "₹12.7 Cr", 
    verifiedAt: "Finance Dept Audit",
    majorWork: "Renovation of Meenakshi Temple surroundings / Smart City",
    fundingSource: "MLADS + HR&CE Temple Funds",
    overlap: "Low overlap with MP funds which were diverted to Madurai AIIMS connectivity roads.",
    linkedPromises: [350]
  }
];

export const budgetHistory = [
  { year: "2025-26", total: "₹4.39 Lakh Cr", focus: "Youth, Digital Jobs & Agriculture", links: ["Puthumai Penn", "Smart Classroom", "Agri Budget"] },
  { year: "2024-25", total: "₹4.12 Lakh Cr", focus: "Social Justice & Women Welfare", links: ["Magalir Urimai", "Makkalai Thedi"] },
  { year: "2023-24", total: "₹3.80 Lakh Cr", focus: "Infrastructure & Industrial Growth", links: ["Housing", "Highway Connectivity"] },
  { year: "2022-23", total: "₹3.40 Lakh Cr", focus: "Pandemic Recovery & Education Reform", links: ["Illam Thedi Kalvi"] },
  { year: "2021-22", total: "₹3.10 Lakh Cr", focus: "Legacy Clearance & Manifesto Start", links: ["Petrol Cut", "Loan Waiver"] }
];
