import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Droplets, 
  DoorClosed, 
  Accessibility, 
  CheckCircle2, 
  TrendingUp,
  Camera,
  Hammer,
  Info,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  Building2,
  Users
} from 'lucide-react';

export default function App() {
  const [activeBudgetTab, setActiveBudgetTab] = useState('mens');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hardcoded current raised amount for the progress bar
  const amountRaised = 850; 
  const totalGoal = 4058.25;
  const progressPercentage = Math.min((amountRaised / totalGoal) * 100, 100);

  const beforeImages = [
    { src: "/images/WhatsApp Image 2026-03-08 at 22.14.54.jpeg", label: "Worn Entryways" },
    { src: "/images/WhatsApp Image 2026-03-08 at 22.14.58.jpeg", label: "Legacy Fixtures" },
    { src: "/images/WhatsApp Image 2026-03-08 at 22.21.10.jpeg", label: "Outdated Basins" },
    { src: "/images/WhatsApp Image 2026-03-08 at 22.15.01.jpeg", label: "Narrow Access" },
    { src: "/images/WhatsApp Image 2026-03-08 at 22.21.12.jpeg", label: "Structural Wear" },
    { src: "/images/WhatsApp Image 2026-03-08 at 22.14.50 (1).jpeg", label: "Incomplete Finishes" }
  ];

  const mensBudget = [
    { item: "10 Urinary Basins - 5 on each side", qty: 10, unit: 30.00, total: 300.00 },
    { item: "Urinary Basins accessories", qty: 10, unit: 35.00, total: 350.00 },
    { item: "4 new complete Toilet seats - Close couple", qty: 4, unit: 50.00, total: 200.00 },
    { item: "4 more Water Basins and Pedestals", qty: 4, unit: 30.00, total: 120.00 },
    { item: "4 Mixers", qty: 4, unit: 10.00, total: 40.00 },
    { item: "4 toilet seat covers", qty: 4, unit: 10.00, total: 40.00 },
    { item: "Plumbing labour", qty: "-", unit: "-", total: 200.00 },
    { item: "Widen Handicapped Toilet and install convenient rails", qty: "-", unit: "-", total: 350.00 },
    { item: "5 new doors raised 10cm", qty: 5, unit: 35.00, total: 175.00 },
    { item: "2 privacy walls on each side for privacy", qty: "-", unit: "-", total: 400.00 },
    { item: "Contingencies 5% of total", qty: "-", unit: "-", total: 108.75 }
  ];

  const ladiesBudget = [
    { item: "6 new toilet seats (close couple)", qty: 6, unit: 50.00, total: 300.00 },
    { item: "6 new toilet seat covers", qty: 6, unit: 10.00, total: 60.00 },
    { item: "4 additional water basins & pedestals", qty: 4, unit: 30.00, total: 120.00 },
    { item: "4 Water Basins Tapes", qty: 4, unit: 15.00, total: 60.00 },
    { item: "Plumbing accessories", qty: "-", unit: "-", total: 100.00 },
    { item: "Plumbing labour", qty: "-", unit: "-", total: 200.00 },
    { item: "Install shower curtains", qty: "-", unit: "-", total: 100.00 },
    { item: "Widen Handicapped Toilet and install convenient rails", qty: "-", unit: "-", total: 350.00 },
    { item: "2 privacy walls on each side for privacy", qty: "-", unit: "-", total: 400.00 },
    { item: "Contingencies 5% of total", qty: "-", unit: "-", total: 84.50 }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer max-w-[70vw] md:max-w-none">
            <img 
              src="/images/adventist-symbol-circle--white.png" 
              alt="Adventist Symbol" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:rotate-12 transition-transform shrink-0"
            />
            <div className={`flex flex-col font-bold leading-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              <span className="text-[10px] sm:text-xs md:text-lg">Cranborne Seventh-Day</span>
              <span className="text-emerald-500 text-[11px] sm:text-sm md:text-lg">Adventist Church</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 mr-8">
            {['Vision', 'Goal', 'Transparency', 'Donate'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-emerald-50'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <a href="#donate" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs sm:text-sm md:text-base transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-emerald-200/50 shrink-0">
            Give Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-subtle-zoom"
            alt="Camp background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/60 to-slate-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center pt-20 pb-32">
          <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest mb-8 uppercase animate-fade-in-up">
            <Users size={14} />
            <span>Karreeboom Campsite</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-white tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Building a Foundation of <br className="hidden lg:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
              Dignity & Access
            </span>
          </h1>
          <p className="text-xl text-emerald-50/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our campsite is a sanctuary of spiritual growth. Help us renovate our facilities to ensure comfort, privacy, and full accessibility for every member of our church family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#donate" className="group w-full sm:w-auto bg-emerald-600 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-emerald-500 transition-all shadow-xl hover:shadow-emerald-500/40 flex items-center justify-center gap-3">
              Support the Drive
              <Heart size={20} className="fill-current" />
            </a>
            <a href="#vision" className="w-full sm:w-auto text-white border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              See the Vision
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Progress Tracker Section */}
      <section id="goal" className="container mx-auto px-6 -mt-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-3">
                <TrendingUp size={32} className="text-emerald-500" />
                Live Tracker
              </h2>
              <p className="text-slate-500 font-medium">Phase 1: Complete Restroom Overhaul</p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex justify-between items-end mb-4">
                <div className="space-y-1">
                  <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Raised So Far</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900">${amountRaised}</span>
                    <span className="text-slate-400 font-bold text-lg">/ ${totalGoal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-500">{progressPercentage.toFixed(1)}%</span>
                </div>
              </div>
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality (Gallery) */}
      <section id="vision" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The Current Reality</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our current facilities have served us for decades, but they no longer provide the dignity our congregation deserves. From broken stalls to inaccessible layouts, the need for renovation is urgent.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                <Camera size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Documentation</p>
                <p className="font-bold text-slate-900">Actual Site Photos</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {beforeImages.map((img, idx) => (
              <div key={idx} className="group relative aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 translate-y-0 hover:-translate-y-2">
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400";
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-sm uppercase tracking-widest">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-Sponsorship Cards */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Meaningful Contributions</h2>
            <p className="text-slate-400 text-lg">
              Every item sponsored brings us one step closer to our goal. Choose a specific part of the renovation to fund and directly impact the comfort of our church family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Sponsor a Basin", price: 30, color: "text-blue-400", bg: "bg-blue-400/10", desc: "Covers one full new water basin and pedestal installation." },
              { icon: DoorClosed, title: "A New Door", price: 35, color: "text-orange-400", bg: "bg-orange-400/10", desc: "Provides a privacy-focused raised cubicle door." },
              { icon: CheckCircle2, title: "Toilet Seat", price: 50, color: "text-emerald-400", bg: "bg-emerald-400/10", desc: "Supplies a high-quality close-couple toilet seat." },
              { icon: Accessibility, title: "Accessibility", price: 350, color: "text-purple-400", bg: "bg-purple-400/10", desc: "Widens entries and installs heavy-duty support rails." },
            ].map((card, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 shadow-2xl">
                <div className={`${card.bg} ${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:rotate-6 transition-transform`}>
                  <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-emerald-400">${card.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">USD</span>
                </div>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">{card.desc}</p>
                <a href="#donate" className="flex items-center justify-center w-full py-3 px-4 bg-white/10 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all gap-2 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                  Select Gift
                  <ChevronRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section id="transparency" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Radical Transparency</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We value your trust. Every cent donated is allocated specifically to the renovation costs outlined in our committee's approved budget.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-50 p-2 rounded-2xl flex mb-8 border border-slate-100 shadow-inner">
              <button 
                className={`flex-1 py-4 px-6 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-3 ${activeBudgetTab === 'mens' ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveBudgetTab('mens')}
              >
                <div className={`p-1.5 rounded-lg ${activeBudgetTab === 'mens' ? 'bg-emerald-100' : 'bg-slate-200'}`}>
                  <Building2 size={20} />
                </div>
                Men's Restroom
              </button>
              <button 
                className={`flex-1 py-4 px-6 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-3 ${activeBudgetTab === 'ladies' ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveBudgetTab('ladies')}
              >
                <div className={`p-1.5 rounded-lg ${activeBudgetTab === 'ladies' ? 'bg-emerald-100' : 'bg-slate-200'}`}>
                  <Building2 size={20} />
                </div>
                Ladies' Restroom
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-6 font-bold uppercase text-xs tracking-widest">Description</th>
                      <th className="p-6 font-bold uppercase text-xs tracking-widest text-center">Qty</th>
                      <th className="p-6 font-bold uppercase text-xs tracking-widest text-right">Unit ($)</th>
                      <th className="p-6 font-bold uppercase text-xs tracking-widest text-right">Total ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(activeBudgetTab === 'mens' ? mensBudget : ladiesBudget).map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="p-6 text-slate-700 text-sm font-bold group-hover:text-emerald-700 transition-colors">{row.item}</td>
                        <td className="p-6 text-slate-500 text-sm font-medium text-center">{row.qty}</td>
                        <td className="p-6 text-slate-500 text-sm font-medium text-right">{row.unit !== '-' ? row.unit.toFixed(2) : '-'}</td>
                        <td className="p-6 text-slate-900 text-sm font-black text-right">${row.total.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50/50">
                      <td colSpan="3" className="p-6 text-right font-black text-slate-900 text-lg uppercase tracking-tight">Total Requirement:</td>
                      <td className="p-6 text-right">
                        <span className="text-2xl font-black text-emerald-600">
                          ${activeBudgetTab === 'mens' ? "2,283.75" : "1,774.50"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Details & Footer */}
      <footer id="donate" className="bg-emerald-950 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-emerald-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-500/20">
              <Heart size={48} className="text-emerald-400 fill-emerald-400/20 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to Transform Lives?</h2>
            <p className="text-emerald-50/70 mb-16 text-xl max-w-2xl mx-auto leading-relaxed">
              Every single gift, regardless of size, is a step toward a camp that welcomes everyone with open arms and comfortable facilities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-20">
              {/* EcoCash Card */}
              <div className="group bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all hover:bg-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-emerald-500 p-3 rounded-2xl">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-emerald-400">Mobile Money</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fast & Secure</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 font-bold text-sm">Biller Code</span>
                    <span className="text-white font-black text-lg">123456</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 font-bold text-sm">Account Name</span>
                    <span className="text-white font-black text-lg uppercase">Church Camp</span>
                  </div>
                  <div className="flex items-center gap-2 pt-4 text-emerald-400 bg-emerald-400/5 p-4 rounded-xl border border-emerald-400/10">
                    <ShieldCheck size={18} />
                    <p className="text-xs font-black uppercase tracking-widest">Ref: <span className="text-white">Toilets</span></p>
                  </div>
                </div>
              </div>

              {/* Bank Card */}
              <div className="group bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all hover:bg-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-emerald-500 p-3 rounded-2xl">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-emerald-400">Direct Bank</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">RTGS / Transfer</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 font-bold text-sm">Bank Name</span>
                    <span className="text-white font-black text-lg">Sample Bank ZW</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-slate-400 font-bold text-sm">Acc Number</span>
                    <span className="text-white font-black text-lg">0011 2233 4455</span>
                  </div>
                  <div className="flex items-center gap-2 pt-4 text-emerald-400 bg-emerald-400/5 p-4 rounded-xl border border-emerald-400/10">
                    <ShieldCheck size={18} />
                    <p className="text-xs font-black uppercase tracking-widest">Ref: <span className="text-white">Toilets</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center space-x-3 text-left">
                <img 
                  src="/images/adventist-symbol-circle--white.png" 
                  alt="Adventist Symbol" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0"
                />
                <div className="flex flex-col font-bold uppercase italic leading-tight text-white">
                  <span className="text-sm md:text-lg">Cranborne Seventh-Day</span>
                  <span className="text-emerald-500 font-black text-xs md:text-lg">Adventist Church</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm font-bold">
                © 2026 Camp Development Committee. For the growth of our faith community.
              </p>
              <div className="flex gap-4">
                <a href="#vision" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"><Info size={20} /></a>
                <a href="#donate" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-emerald-400"><Heart size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-subtle-zoom {
            animation: subtle-zoom 20s infinite alternate ease-in-out;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s forwards ease-out;
            opacity: 0;
          }
        `}} />
      </footer>
    </div>
  );
}
