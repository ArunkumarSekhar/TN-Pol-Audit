import React, { useState, useMemo } from 'react';
import { 
  Search, ExternalLink, ChevronDown, ChevronUp, ChevronRight, 
  MapPin, Wallet, Scale, ArrowRightLeft, Sparkles, PieChart, 
  CheckCircle2, Info, Coins, Globe, FileText, TrendingUp, Users,
  GraduationCap, Building2, Stethoscope, Tractor
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('manifesto-505');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedScope, setSelectedScope] = useState('All');

  const manifesto505 = [
    { id: 1, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Restore lost state rights; remove 'Education' from Concurrent List", status: "Stalled", details: "Requires Constitutional amendment; Union non-cooperation cited in 2026 Audit.", constituency: "State-wide" },
    { id: 2, scope: "Top Level", category: "Governance", subCategory: "State Rights", promise: "Oppose NEP; Formulate separate State Education Policy", status: "Achieved", details: "High-level committee draft submitted 2024; implementation ongoing.", constituency: "State-wide" },
    { id: 4, scope: "Top Level", category: "Governance", subCategory: "Language", promise: "Declare Tamil as an official language of the Union Govt", status: "Stalled", details: "Requires amendment to Article 343.", constituency: "State-wide" },
    { id: 45, scope: "Top Level", category: "Education", subCategory: "School", promise: "Morning Breakfast Scheme for all Primary Students", status: "Achieved", details: "State-wide rollout completed; significant boost in attendance.", constituency: "State-wide" },
    { id: 48, scope: "Top Level", category: "Education", subCategory: "Access", promise: "Complete Abolition of NEET Exam for Tamil Nadu", status: "Stalled", details: "Constitutional struggle; awaiting Presidential assent.", constituency: "State-wide" },
    { id: 205, scope: "Top Level", category: "Economy", subCategory: "Welfare", promise: "₹1,000 monthly allowance for women (Magalir Urimai Thogai)", status: "Achieved", details: "Monthly transfer active for 1.16 Crore eligible women.", constituency: "State-wide" }
  ];

  const continuityData = [
    { 
      id: "c1", 
      type: "Continued", 
      legacyName: "Amma Unavagam (Launched 2013)", 
      currentName: "Amma Unavagam (Maintained)", 
      allocationDelta: "+5%", 
      status: "Achieved",
      details: "Retained due to urban popularity.",
      fiscal21: "₹100 Cr", fiscal25: "₹105 Cr"
    },
    { 
      id: "c2", 
      type: "Repealed", 
      legacyName: "Amma Two-Wheeler Scheme", 
      currentName: "Discontinued", 
      reasoning: "High cost and low reach compared to public transit.",
      moneySaved: "₹500 Cr / Year",
      unintendedConsequences: "Potential reduction in last-mile mobility for women without bus access.",
      replacement: "Free Bus Travel for Women"
    }
  ];

  const constituencyWorks = [
    { 
      name: "Kolathur", 
      mla: "M.K. Stalin (DMK)", 
      totalSpent: "₹15.2 Cr", 
      verifiedAt: "GOC District Audit Portal",
      majorWork: "Integrated Storm Water Drain (Phase 2)",
      fundingSource: "MLADS (₹3 Cr) + State Special Fund (₹12.2 Cr)",
      overlap: "Minimal. MP funds used for Railway amenities.",
      linkedPromises: [1, 45, 205] 
    }
  ];

  const budgetData = [
    { year: "2025-26", total: "₹4.39 Lakh Cr", focus: "Youth & Agriculture", links: ["Puthumai Penn", "Smart Classroom"] },
    { year: "2024-25", total: "₹4.12 Lakh Cr", focus: "Social Welfare", links: ["Magalir Urimai"] }
  ];

  const categories = [
    { name: 'Governance', sub: ['State Rights', 'Language', 'Employees'] },
    { name: 'Education', sub: ['School', 'College', 'Access'] },
    { name: 'Economy', sub: ['Fuel', 'Welfare', 'LPG'] }
  ];

  const filteredManifesto = useMemo(() => {
    return manifesto505.filter(p => {
      const matchesSearch = p.promise.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesScope = selectedScope === 'All' || p.scope === selectedScope;
      return matchesSearch && matchesScope;
    });
  }, [searchQuery, selectedScope]);

  const getStatusStyles = (status) => {
    switch(status) {
      case 'Achieved': return 'bg-green-600 text-white border-green-700';
      case 'Pending': return 'bg-amber-500 text-white border-amber-600';
      case 'Stalled': return 'bg-red-600 text-white border-red-700';
      case 'Not Started': return 'bg-white text-slate-400 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-sans flex flex-col antialiased">
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-black tracking-tighter text-slate-900">POLITRACK 505</h1>
            <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Audit Dashboard Jan 2026</span>
          </div>
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
             {[
               { id: 'manifesto-505', label: 'Manifesto' },
               { id: 'continuity', label: 'Continuity' },
               { id: 'constituency', label: 'Constituency' },
               { id: 'budget', label: 'Budget' }
             ].map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => { setActiveTab(tab.id); setExpandedItem(null); }}
                 className={`px-3 sm:px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider transition-all ${
                   activeTab === tab.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'
                 }`}
               >
                 {tab.label}
               </button>
             ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-10">
        {activeTab === 'manifesto-505' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-center md:text-left">
                 <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Audit Summary (Claimed by Government)</h2>
                 <span className="text-5xl font-black text-slate-900 leading-none">404 <span className="text-sm font-bold text-slate-300">/ 505</span></span>
               </div>
               <div className="flex flex-col items-center md:items-end">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Fulfillment Velocity</div>
                  <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                    <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-2">80% State Implementation</span>
               </div>
            </section>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 text-slate-300" size={18} />
                <input 
                  type="text" placeholder="Search specific promises..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-slate-50 transition-all outline-none"
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
                      selectedScope === scope ? 'bg-slate-900 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-16">
              {categories.map(cat => {
                const catPromises = filteredManifesto.filter(p => p.category === cat.name);
                if (catPromises.length === 0) return null;
                return (
                  <section key={cat.name} className="space-y-6">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4 px-2">
                       {cat.name} <div className="flex-1 h-px bg-slate-100"></div>
                    </h2>
                    {cat.sub.map(sub => {
                      const subPromises = catPromises.filter(p => p.subCategory === sub);
                      if (subPromises.length === 0) return null;
                      return (
                        <div key={sub} className="space-y-4">
                          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 pl-4">
                            <ChevronRight size={12} className="text-slate-300" /> {sub}
                          </h3>
                          <div className="space-y-2">
                            {subPromises.map((p) => (
                              <div key={p.id} className={`bg-white rounded-3xl border transition-all ${expandedItem === p.id ? 'border-slate-300 ring-8 ring-slate-50 shadow-sm' : 'border-slate-100 hover:border-slate-200'}`}>
                                <div className="p-5 cursor-pointer flex items-center gap-4" onClick={() => setExpandedItem(expandedItem === p.id ? null : p.id)}>
                                  <div className={`shrink-0 px-3 py-1.5 rounded-xl border text-[9px] font-black uppercase min-w-[100px] text-center ${getStatusStyles(p.status)}`}>{p.status}</div>
                                  <div className="flex-1">
                                    <span className={`text-[8px] font-black uppercase tracking-widest mb-0.5 block ${p.scope === 'Top Level' ? 'text-slate-900' : 'text-slate-300'}`}>{p.scope}</span>
                                    <h4 className="text-sm md:text-base font-bold text-slate-800 leading-snug">{p.promise}</h4>
                                  </div>
                                  <div className="text-slate-300">{expandedItem === p.id ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}</div>
                                </div>
                                {expandedItem === p.id && (
                                  <div className="px-5 pb-5 animate-in slide-in-from-top-2">
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

        {activeTab === 'continuity' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
               <h2 className="text-xl font-black mb-1">Continuity & Repeal Audit</h2>
               <p className="text-xs text-slate-500 font-medium tracking-wide">Evaluating legacy AIADMK policies against current 2021-2026 mandates.</p>
            </div>
            <div className="grid gap-6">
               {continuityData.map(item => (
                 <div key={item.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col gap-8 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                       <div className="flex-1">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${item.type === 'Repealed' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{item.type}</span>
                          <h3 className="text-2xl font-black mt-2 text-slate-400 line-through decoration-slate-200">{item.legacyName}</h3>
                          {item.currentName !== 'Discontinued' && (
                            <div className="flex items-center gap-2 mt-1">
                               <ArrowRightLeft size={16} className="text-slate-400"/>
                               <h3 className="text-2xl font-black text-slate-900">{item.currentName}</h3>
                            </div>
                          )}
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Impact</span>
                          <span className="text-xl font-black text-slate-900">{item.allocationDelta || item.moneySaved}</span>
                       </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                       {item.type === 'Repealed' ? (
                         <div className="space-y-4">
                           <p className="text-sm font-medium leading-relaxed"><strong>Reasoning:</strong> {item.reasoning}</p>
                           <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex gap-4 text-xs text-amber-800">
                              <Sparkles className="shrink-0" size={18}/> 
                              <div><strong>AI Unintended Consequences Map:</strong> {item.unintendedConsequences}</div>
                           </div>
                         </div>
                       ) : (
                         <div className="grid grid-cols-2 gap-8 text-sm">
                           <div className="p-4 bg-white rounded-2xl border border-slate-50"><span className="text-[9px] font-black text-slate-400 block uppercase mb-1">2021 Baseline</span><strong>{item.fiscal21}</strong></div>
                           <div className="p-4 bg-white rounded-2xl border border-slate-50"><span className="text-[9px] font-black text-slate-400 block uppercase mb-1">2025 Current</span><strong>{item.fiscal25}</strong></div>
                         </div>
                       )}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'constituency' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between gap-8">
               <h2 className="text-xl font-black text-slate-900">Constituency Delivery Audit</h2>
               <div className="flex gap-2">
                  <div className="px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] font-black uppercase text-slate-500 tracking-widest">MLA Ledger</div>
                  <div className="px-5 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-200">MP Audit</div>
               </div>
            </div>
            <div className="grid gap-8">
               {constituencyWorks.map(con => (
                 <div key={con.name} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-50">
                       <h3 className="text-3xl font-black text-slate-900">{con.name}</h3>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Globe size={14}/> Verified: {con.verifiedAt}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                       <div className="space-y-5">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Coins size={14}/> MLA Spending (MLADS)</span>
                          <div className="flex justify-between border-b pb-2"><span className="font-black text-xl">{con.mla}</span> <span className="text-green-600 font-black text-2xl">{con.totalSpent}</span></div>
                          <p className="text-sm font-bold text-slate-800 leading-relaxed italic">Verified Project: {con.majorWork}</p>
                       </div>
                       <div className="border-l border-slate-100 pl-12 space-y-5">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><ArrowRightLeft size={14}/> MP Overlap Audit</span>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">{con.overlap}</p>
                          <div className="flex flex-wrap gap-2 pt-4">
                             {con.linkedPromises.map(id => (
                               <span key={id} className="px-3 py-1.5 bg-slate-900 text-white text-[9px] font-black uppercase rounded-xl">Promise #{id}</span>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center">
               <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Fiscal Timeline</h2>
               <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">Linking State Treasury to Manifesto Goals</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {budgetData.map(budget => (
                 <div key={budget.year} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                       <span className="text-xl font-black text-slate-400 font-mono tracking-tighter">{budget.year}</span>
                       <div className="p-3 bg-slate-50 rounded-2xl"><PieChart className="text-slate-300" size={24}/></div>
                    </div>
                    <div className="text-4xl font-black text-slate-900 tracking-tighter leading-none">{budget.total}</div>
                    <p className="text-sm font-bold text-slate-700">{budget.focus}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                       {budget.links.map(link => (
                         <span key={link} className="text-[9px] font-black uppercase bg-slate-900 text-white px-3 py-1.5 rounded-xl shadow-sm tracking-tighter">{link}</span>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
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
