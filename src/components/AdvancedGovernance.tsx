'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Leaf, 
  Award, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Activity,
  ScrollText,
  BadgeCheck
} from 'lucide-react';
import { AdvancedGovernanceData } from '../types';

interface GovernanceProps {
  data: AdvancedGovernanceData;
}

export default function AdvancedGovernance({ data }: GovernanceProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="text-green-500" size={24} />;
      case 'in-progress': return <Clock className="text-brand-gold animate-pulse" size={24} />;
      default: return <Clock className="text-gray-300" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Certified': return 'bg-green-100 text-green-700 border-green-200';
      case 'Implementation': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Candidate': return 'bg-brand-gold/10 text-brand-gold border-brand-gold/20';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={data.hero.image}
            alt="Mining Operation"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
            >
              <ShieldCheck className="text-brand-gold" size={16} />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white">Corporate Integrity</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase"
            >
              {data.hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 font-medium leading-relaxed mb-10"
            >
              {data.hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ISO Framework Grid */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.standards.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 shadow-2xl border border-gray-50 flex flex-col items-center text-center group hover:translate-y-[-10px] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Award size={32} />
                </div>
                <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border ${getStatusColor(item.status)}`}>
                  {item.status}
                </div>
                <h3 className="text-xl font-black text-brand-blue mb-2">{item.id}</h3>
                <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-tighter">{item.title}</p>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Roadmap */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-6 uppercase tracking-tight">{data.roadmap.title}</h2>
            <div className="w-24 h-2 bg-brand-gold mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">{data.roadmap.subtitle}</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {data.roadmap.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 border-4 border-gray-50 shadow-xl ${step.status === 'completed' ? 'bg-green-500 text-white' : step.status === 'in-progress' ? 'bg-brand-gold text-brand-blue' : 'bg-white text-gray-300'}`}>
                    {getStatusIcon(step.status)}
                  </div>
                  <h3 className="text-xl font-black text-brand-blue mb-4 leading-tight">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy & Safety KPIs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Policies */}
            <div>
              <h2 className="text-4xl font-black text-brand-blue mb-12 uppercase tracking-tight">{data.policies.title}</h2>
              <div className="space-y-6">
                {data.policies.items.map((policy, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl flex items-start space-x-6 group hover:border-brand-gold transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                      {policy.icon === 'Award' && <Award size={30} />}
                      {policy.icon === 'Leaf' && <Leaf size={30} />}
                      {policy.icon === 'Shield' && <ShieldCheck size={30} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-brand-blue mb-3 uppercase tracking-tight">{policy.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{policy.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Performance Dashboards */}
            <div className="space-y-12">
              <div className="bg-brand-blue rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
                <h3 className="text-3xl font-black mb-10 flex items-center">
                  <Activity className="mr-4 text-brand-gold" />
                  {data.safety.title}
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {data.safety.kpis.map((kpi, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-4xl font-black text-brand-gold mb-2">{kpi.value}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">{kpi.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-sm text-gray-400 font-medium italic border-l-2 border-brand-gold pl-4">
                  {data.safety.content}
                </p>
              </div>

              <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
                <h3 className="text-3xl font-black text-brand-blue mb-10 flex items-center">
                  <Leaf className="mr-4 text-brand-gold" />
                  {data.environmental.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {data.environmental.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <p className="text-2xl font-black text-brand-blue mb-1">{metric.value}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-sm text-gray-500 font-medium leading-relaxed">
                  {data.environmental.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Transparency */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <ScrollText size={500} className="absolute -bottom-40 -left-40 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight tracking-tight">
                {data.legal.title}
              </h2>
              <p className="text-xl text-gray-300 font-medium mb-12">
                {data.legal.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.legal.items.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-2">{item.label}</p>
                    <p className="text-white font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-massive text-center relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue shadow-lg">
                        <FileCheck size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-brand-blue mt-6 mb-4">Official Verification</h3>
                    <p className="text-gray-500 font-medium mb-8">All legal documents are verified and issued by the relevant authorities of the Republic of Indonesia.</p>
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-3 px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 italic">
                            <BadgeCheck className="text-brand-blue" size={20} />
                            <span className="text-sm font-bold text-gray-600">Verified NIB</span>
                        </div>
                        <div className="flex items-center space-x-3 px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 italic">
                            <BadgeCheck className="text-brand-blue" size={20} />
                            <span className="text-sm font-bold text-gray-600">Active IUP License</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auditor Message */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-gold/10 rounded-full mb-8">
                <AlertTriangle className="text-brand-gold" size={40} />
            </div>
            <h2 className="text-3xl font-black text-brand-blue mb-6">Transparency for Partners & Auditors</h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed italic">
                "PT Wira Energi Utama operates under a Culture of Compliance. Our Integrated Management System is designed not just for certification, but as a living standard for how we conduct business every day."
            </p>
        </div>
      </section>
    </div>
  );
}
