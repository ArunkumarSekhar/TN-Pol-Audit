import React, { useState, useMemo } from 'react';
import { 
  Search, ExternalLink, ChevronDown, ChevronUp, ChevronRight, 
  MapPin, ArrowRightLeft, Sparkles, PieChart, 
  CheckCircle2, Coins, Globe, FileText, TrendingUp,
  Scale, Wallet, GraduationCap, Building2, Stethoscope, Tractor,
  Users, ShieldCheck
} from 'lucide-react';

/* --- MASTER DATA CONSOLIDATED ---
  For simplicity and stability, all data is included here.
  You do NOT need a separate data.js file with this version.
*/

const manifestoData = [
  // --- SECTION 1: STATE RIGHTS & CONSTITUTIONAL REFORM (1-20) ---
  { id: 1, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Restore State Rights; Move 'Education' back to State List", status: "Stalled", details: "TN Assembly resolution passed; Union Government has not initiated the required 7th Schedule amendment.", constituency: "State-wide" },
  { id: 2, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Oppose NEP; Implement separate State Education Policy", status: "Achieved", details: "State Education Policy committee draft submitted; curriculum updates based on local requirements are active.", constituency: "State-wide" },
  { id: 3, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Retrieval of Katchatheevu Island", status: "Stalled", details: "Subject to Union-level diplomatic negotiations with Sri Lanka; State continues to pressure Centre.", constituency: "State-wide" },
  { id: 4, scope: "Top Level", category: "Governance", subCategory: "Language", promise: "Declare Tamil as an official language of the Union Govt", status: "Stalled", details: "Requires Constitutional amendment to Article 343; pending at Union level.", constituency: "State-wide" },
  { id: 12, scope: "Other", category: "Governance", subCategory: "Language", promise: "Separate wing for Tamil as Official Language in all State depts", status: "Achieved", details: "Established and functional across all major departments and collectorates.", constituency: "State-wide" },
  { id: 20, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Abolition of the Office of the Governor", status: "Stalled", details: "Political stance active; requires a National Constitutional amendment.", constituency: "State-wide" },

  // --- SECTION 2: EELAM TAMILS & SOCIAL JUSTICE (31-60) ---
  { id: 31, scope: "Top Level", category: "Social Justice", subCategory: "Eelam Tamils", promise: "Indian Citizenship for Sri Lankan Tamils living in camps", status: "Stalled", details: "Dependent on Union Home Ministry and legal framework of CAA.", constituency: "State-wide" },
  { id: 45, scope: "Other", category: "Social Justice", subCategory: "Eelam Tamils", promise: "Modern housing and infrastructure for refugees in all 108 camps", status: "Achieved", details: "Major housing projects in Vellore, Trichy, and Tiruvannamalai completed.", constituency: "State-wide" },
  { id: 50, scope: "Top Level", category: "Social Justice", subCategory: "Reservations", promise: "Protect 69% Reservation; include in 9th Schedule", status: "Achieved", details: "Legally defended in the Supreme Court; current percentage maintained.", constituency: "State-wide" },

  // --- SECTION 3: EDUCATION & YOUTH (61-120) ---
  { id: 61, scope: "Top Level", category: "Education", subCategory: "Loans", promise: "Waiver of Education Loans for students below 30 years", status: "Not Started", details: "Cited as unfeasible in current fiscal cycle; awaiting 2026 manifesto review.", constituency: "State-wide" },
  { id: 62, scope: "Top Level", category: "Education", subCategory: "School", promise: "Morning Breakfast Scheme for all Govt Primary School Students", status: "Achieved", details: "Pioneered in 2022; now covers all 31,000+ government schools in TN.", constituency: "State-wide" },
  { id: 65, scope: "Top Level", category: "Education", subCategory: "Access", promise: "Abolition of NEET Exam for medical admissions in TN", status: "Stalled", details: "Bill passed twice by TN Assembly; currently awaiting Presidential assent.", constituency: "State-wide" },
  { id: 70, scope: "Top Level", category: "Education", subCategory: "College", promise: "₹1,000 monthly stipend for girl students (Puthumai Penn)", status: "Achieved", details: "Directly benefitting over 1.15 lakh girls who studied in govt schools.", constituency: "State-wide" },

  // --- SECTION 4: AGRICULTURE & WATER (121-200) ---
  { id: 121, scope: "Top Level", category: "Agriculture", subCategory: "Loans", promise: "Waiver of Cooperative Farm Loans", status: "Achieved", details: "₹12,110 Cr waived immediately after 2021 victory.", constituency: "State-wide" },
  { id: 122, scope: "Top Level", category: "Agriculture", subCategory: "Budget", promise: "Standalone Annual Agriculture Budget", status: "Achieved", details: "Consistently presented as a separate budget since 2021.", constituency: "State-wide" },
  { id: 155, scope: "Other", category: "Agriculture", subCategory: "Infrastructure", promise: "Establishment of Cold Storage in every district", status: "Partial", details: "14 districts completed; 24 districts remain under construction.", constituency: "State-wide" },

  // --- SECTION 5: ECONOMY & WELFARE (201-300) ---
  { id: 201, scope: "Top Level", category: "Economy", subCategory: "Fuel", promise: "Reduction of Petrol price by ₹3/litre", status: "Achieved", details: "Implemented in the first State Budget 2021.", constituency: "State-wide" },
  { id: 205, scope: "Top Level", category: "Economy", subCategory: "Welfare", promise: "₹1,000 monthly allowance for women (Magalir Urimai Thogai)", status: "Achieved", details: "Active for 1.16 Crore eligible women heads of families.", constituency: "State-wide" },
  { id: 208, scope: "Top Level", category: "Economy", subCategory: "LPG", promise: "₹100 subsidy for Cooking Gas cylinders", status: "Not Started", details: "Postponed due to lack of Union control over dynamic pricing.", constituency: "State-wide" },
  { id: 250, scope: "Top Level", category: "Economy", subCategory: "Welfare", promise: "Free Bus Travel for Women in City Buses", status: "Achieved", details: "Vidiyal Payanam; high impact on women's workplace participation.", constituency: "State-wide" }
];

const continuityAudit = [
  { 
    id: "c1", 
    type: "Continued", 
    legacyName: "Amma Unavagam (Launched 2013 - AIADMK)", 
    currentName: "Amma Unavagam (Maintained by DMK)", 
    allocationDelta: "+5% (Inflation buffer)", 
    status: "Achieved",
    details: "Retained due to deep urban popularity. Branding kept but expanded via 'Kalaignar Unavagams' in specific new zones.",
    fiscal21: "₹100 Cr", fiscal25: "₹105 Cr"
  },
  { 
    id: "c2", 
    type: "Repealed", 
    legacyName: "Amma Two-Wheeler Scheme (2018 - AIADMK)", 
    currentName: "Discontinued", 
    reasoning: "High maintenance costs and lower reach per rupee compared to free public transit.",
    moneySaved: "₹500 Cr / Year",
    unintendedConsequences: "AI ANALYSIS: Mobility gap for women in Tier-3 cities where bus frequency is still being optimized.",
    replacement: "Free Bus Travel for Women"
  },
  { 
    id: "c3", 
    type: "Rebranded", 
    legacyName: "Thalikku Thangam (Marriage Assistance)", 
    currentName: "Puthumai Penn (Higher Education)", 
    allocationDelta: "+12% Budget Redirection", 
    status: "Achieved",
    details: "Transition from marriage-age welfare to collegiate incentivization.",
    fiscal21: "₹760 Cr", fiscal25: "₹850 Cr"
  }
];

const constituencyAudit = [
  { 
    name: "Kolathur", 
    mla: "M.K. Stalin (DMK)", 
    totalSpent: "₹15.2 Cr", 
    verifiedAt: "GOC District Audit Portal", 
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
    linkedPromises: [65] 
  }
];

const budgetHistory = [
  { year: "2025-26", total: "₹4.39 Lakh Cr", focus: "Youth, Digital Jobs & Agriculture", links: ["Puthumai Penn", "Agri Budget"] },
  { year: "2024-25", total: "₹4.12 Lakh Cr", focus: "Social Justice & Women Welfare", links: ["Magalir Urimai", "Makkalai Thedi"] },
  { year: "2023-24", total: "₹3.80 Lakh Cr", focus: "Infrastructure & Growth", links: ["Housing", "Highway Links"] }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('manifesto-505');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedScope, setSelectedScope] = useState('All');

  const categories = [
    { name: 'Governance', sub: ['State Rights', 'Language', 'Employees'] },
    { name: 'Social Justice', sub: ['Eelam Tamils', 'Reservations'] },
    { name: 'Education', sub: ['School', 'College', 'Access', 'Loans'] },
    { name: 'Economy', sub: ['Fuel', 'Welfare', 'LPG'] },
    { name: 'Agriculture', sub: ['Loans', 'Budget', 'Infrastructure', 'Support'] },
    { name: 'Health', sub: ['Access'] },
    { name: 'Infrastructure', sub: ['Transport'] }
  ];

  const filteredManifesto = useMemo(() => {
    // We use (manifestoData || []) to be safe in case the file isn't loaded yet
    return (manifestoData || []).filter(p => {
      const matchesSearch = p.promise.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.id.toString() === searchQuery;
      const matchesScope = selectedScope === 'All' || p.scope === selectedScope;
      return matchesSearch && matchesScope;
    });
  }, [searchQuery, selectedScope]);

  const getStatusStyles = (status) => {
    switch(status) {
      case 'Achieved': return 'bg-green-600 text-white border-green-700 shadow-sm';
      case 'Pending': return 'bg-amber-500 text-white border-amber-600 shadow-sm';
      case 'Stalled': return 'bg-red-600 text-white border-red-700 shadow-sm';
      case 'Not Started': return 'bg-white text-slate-400 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-sans flex flex-col antialiased">
      {/* --- GLOBAL HEADER --- */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-slate-900" size={24} />
            <h1 className="text-xl font-black tracking-tighter text-slate-900 leading-none">TN POL AUDIT</h1>
            <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block italic">Fiscal & Policy Tracker</span>
          </div>
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
             {[{ id: 'manifesto-505', label: 'Manifesto' }, { id: 'continuity', label: 'Continuity' }, { id: 'constituency', label: 'Constituency' }, { id: 'budget', label: 'Budget' }].map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => { setActiveTab(tab.id); setExpandedItem(null); }}
                 className={`px-3 sm:px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider transition-all ${
                   activeTab === tab.id ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
                 }`}
               >
                 {tab.label}
               </button>
             ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-10">
        
        {/* --- TAB 1: MANIFESTO 505 --- */}
        {activeTab === 'manifesto-505' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            {/* SUMMARY CARD */}
            <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-center md:text-left">
                 <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Audit Summary (Claimed by Government)</h2>
                 <span className="text-5xl font-black text-slate-900 leading-none">404 <span className="text-sm font-bold text-slate-300">/ 505</span></span>
               </div>
               <div className="flex flex-col items-center md:items-end">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-2 font-mono">Status Allocation</div>
                  <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-2">80% State Implementation</span>
               </div>
            </section>

            {/* SEARCH & FILTERS */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 text-slate-300" size={18} />
                <input 
                  type="text" 
                  placeholder="Search across 505 promises..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-slate-50 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                {['All', 'Top Level', 'Other'].map(scope => (
                  <button
                    key={scope}
                    onClick={() => setSelectedScope(scope)}
                    className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      selectedScope === scope ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            </div>

            {/* LIST ENGINE */}
            <div className="space-y-16">
              {categories.map(cat => {
                const catPromises = filteredManifesto.filter(p => p.category === cat.name);
                if (catPromises.length === 0) return null;

                return (
                  <section key={cat.name} className="space-y-6">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4 px-2">
                       {cat.name} <div className="flex-1 h-px bg-slate-100"></div>
                    </h2>
                    {cat.sub?.map(sub => {
                      const subPromises = catPromises.filter(p => p.subCategory === sub);
                      if (subPromises.length === 0) return null;

                      return (
                        <div key={sub} className="space-y-4">
                          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 pl-4">
                            <ChevronRight size={12} className="text-slate-300" /> {sub}
                          </h3>
                          <div className="space-y-2">
                            {subPromises.map((p) => (
                              <div key={p.id} className={`bg-white rounded-3xl border transition-all ${expandedItem === p.id ? 'border-slate-300 ring-8 ring-slate-50 shadow-sm' : 'border-slate-100 hover:border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)]'}`}>
                                <div className="p-5 cursor-pointer flex items-center gap-4" onClick={() => setExpandedItem(expandedItem === p.id ? null : p.id)}>
                                  <div className={`shrink-0 px-3 py-1.5 rounded-xl border text-[9px] font-black uppercase min-w-[100px] text-center ${getStatusStyles(p.status)}`}>
                                    {p.status}
                                  </div>
                                  <div className="flex-1">
                                    <span className={`text-[8px] font-black uppercase tracking-widest mb-0.5 block ${p.scope === 'Top Level' ? 'text-slate-900' : 'text-slate-300'}`}>{p.scope}</span>
                                    <h4 className="text-sm md:text-base font-bold text-slate-800 leading-snug">{p.promise}</h4>
                                  </div>
                                  <div className="text-slate-300">{expandedItem === p.id ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}</div>
                                </div>
                                {expandedItem === p.id && (
                                  <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-300">
                                    <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 text-sm text-slate-600 font-medium leading-relaxed">
                                      <span className="text-[9px] font-black uppercase text-slate-400 block mb-2 tracking-widest">Audit Commentary</span>
                                      {p.details}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </section>
                );
              })}
            </div>
          </div>
        )}

        {/* --- TAB 2: CONTINUITY --- */}
        {activeTab === 'continuity' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
               <h2 className="text-xl font-black mb-1">Continuity Audit</h2>
               <p className="text-xs text-slate-500 font-medium tracking-wide">Evaluating policy deltas from AIADMK (2011-2021) to DMK (2021-2026).</p>
            </div>
            <div className="grid gap-6">
               {continuityAudit.map(item => (
                 <div key={item.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col gap-6 shadow-sm">
                    <div className="flex justify-between items-start">
                       <div className="flex-1">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${item.type === 'Repealed' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{item.type}</span>
                          <h3 className="text-xl font-black mt-2 text-slate-400 line-through decoration-slate-200">{item.legacyName}</h3>
                          {item.currentName !== 'Discontinued' && (
                            <div className="flex items-center gap-2 mt-1">
                               <ArrowRightLeft size={16} className="text-slate-400"/>
                               <h3 className="text-xl font-black text-slate-900">{item.currentName}</h3>
                            </div>
                          )}
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Impact</span>
                          <span className="text-xl font-black">{item.allocationDelta || item.moneySaved}</span>
                       </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-sm text-slate-600 font-medium leading-relaxed">
                       {item.type === 'Repealed' ? (
                         <div className="space-y-4">
                            <p><strong>Reasoning:</strong> {item.reasoning}</p>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex gap-4 text-xs text-amber-800">
                               <Sparkles size={18}/> <div><strong>AI Consequences Map:</strong> {item.unintendedConsequences}</div>
                            </div>
                         </div>
                       ) : (
                         <div className="grid grid-cols-2 gap-8">
                            <div><span className="text-[9px] font-black text-slate-400 uppercase block mb-1">2021 Base</span><strong>{item.fiscal21}</strong></div>
                            <div><span className="text-[9px] font-black text-slate-400 uppercase block mb-1">2025 Allocation</span><strong>{item.fiscal25}</strong></div>
                            <p className="col-span-2 pt-2 border-t border-slate-200">{item.details}</p>
                         </div>
                       )}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* --- TAB 3: CONSTITUENCY --- */}
        {activeTab === 'constituency' && (
          <div className="grid gap-6 animate-in fade-in">
             {constituencyAudit.map(con => (
               <div key={con.name} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-8 border-b pb-6">
                     <h3 className="text-2xl font-black">{con.name}</h3>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{con.verifiedAt}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12">
                     <div className="space-y-4">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">MLA (MLADS Ledger)</span>
                        <div className="text-lg font-black flex justify-between border-b pb-2"><span>{con.mla}</span> <span className="text-green-600 font-black">{con.totalSpent}</span></div>
                        <p className="text-sm font-bold text-slate-800 italic">Project: {con.majorWork}</p>
                     </div>
                     <div className="border-l pl-10 space-y-4">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">MP Coordination Audit</span>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">{con.overlap}</p>
                        <div className="flex gap-2 pt-2">
                           {con.linkedPromises.map(id => (
                             <span key={id} className="px-3 py-1.5 bg-slate-900 text-white text-[9px] font-black uppercase rounded-lg">Promise #{id}</span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        )}

        {/* --- TAB 4: BUDGET --- */}
        {activeTab === 'budget' && (
          <div className="grid md:grid-cols-3 gap-6 animate-in fade-in">
             {budgetHistory.map(budget => (
               <div key={budget.year} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-6 hover:shadow-lg transition-all">
                  <span className="text-lg font-black text-slate-400 font-mono tracking-tighter">{budget.year}</span>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{budget.total}</div>
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-1 tracking-widest">Fiscal Priority</span>
                    <p className="text-sm font-bold text-slate-700">{budget.focus}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                    {budget.links.map(link => (
                      <span key={link} className="text-[9px] font-black uppercase bg-slate-900 text-white px-3 py-1.5 rounded-full shadow-sm">{link}</span>
                    ))}
                  </div>
               </div>
             ))}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-100 py-20 mt-20 text-center">
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">The Governance Transparency Initiative • TN 2026</p>
      </footer>
    </div>
  );
};

export default App;
