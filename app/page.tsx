'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import SectionWrapper from '@/components/SectionWrapper'
import FloatingBlobs from '@/components/FloatingBlobs'
import {
  CheckCircle2,
  Clock,
  Users,
  Heart,
  Shield,
  ArrowRight,
  Building2,
  FileCheck,
  PhoneCall,
  Mail,
  Stethoscope,
  TrendingUp,
  Target,
  Eye,
  Zap,
  Award,
  FileText,
  Calendar,
  CreditCard,
  Building,
  Network,
  Star,
} from 'lucide-react'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FloatingBlobs />
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper id="hero" className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
            >
              <span className="gradient-text-hero">Swasth Bharat Healthcare</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 font-semibold mb-4"
            >
              Professional Healthcare Consultancy & Personal TPA Support
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-primary-700 mb-8"
            >
              Right to Direction | Saving Lives Through Guidance
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We simplify healthcare access through structured guidance, case-level coordination, and accountable support — ensuring faster approvals, timely treatment, and smoother hospital journeys.
            </motion.p>

            {/* Hero Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {[
                { icon: Clock, text: 'Faster Approvals, Timely Treatment' },
                { icon: Users, text: 'Single-Point Coordination Support' },
                { icon: CreditCard, text: 'Simplifying Cashless & Reimbursement Healthcare' },
                { icon: Heart, text: 'End-to-End Patient Assistance' },
                { icon: Shield, text: 'Patient-First, Life-First Approach' },
              ].map((item, index) => {
                const ItemIcon = item.icon
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="glass-card rounded-3xl p-8 card-hover group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-healthcare-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary-100 to-healthcare-100 group-hover:scale-110 transition-transform duration-300">
                      <ItemIcon className="w-8 h-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
                    </div>
                    <p className="font-bold text-gray-800 text-lg group-hover:text-gray-900 transition-colors">{item.text}</p>
                  </div>
                </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-gradient-to-r from-primary-600 via-primary-500 to-healthcare-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-healthcare-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="#partners"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass-card rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group border-2 border-primary-200/50 hover:border-primary-300"
              >
                Partner With Us
                <Users className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* About SBHC */}
      <SectionWrapper id="about" className="bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 gradient-text-hero">
                About SBHC
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We believe the future of healthcare depends not only on medical excellence, but on clarity, coordination, and accountability. Guided by this belief, Swasth Bharat Healthcare operates as a strategic healthcare partner — driven by integrity, efficiency, and outcomes.
            </p>
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10 mb-8 shadow-2xl relative overflow-hidden border-l-4 border-primary-600"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full" />
              <p className="text-2xl md:text-3xl font-bold gradient-text relative z-10 italic leading-relaxed">
                "Right to Direction" is not just our slogan; it represents our leadership philosophy and commitment to transforming healthcare access across India.
              </p>
            </motion.div>
            <p className="text-lg text-gray-600 leading-relaxed">
              SBHC was founded with a clear and purpose-driven vision, shaped by over 14 years of leadership experience across sales, marketing, and corporate strategy. This journey revealed a major gap in the healthcare ecosystem: patients often lack proper direction to access timely and appropriate care, even when infrastructure and insurance exist.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Vision, Mission & Core Purpose */}
      <SectionWrapper id="vision">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 gradient-text-hero">
              Vision, Mission & Core Purpose
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vision',
                icon: Eye,
                content: 'To create a transparent, well-coordinated, and patient-centric healthcare ecosystem in India where every individual has the right direction to timely, appropriate, and quality medical care.',
              },
              {
                title: 'Mission',
                icon: Target,
                content: 'To simplify and streamline healthcare access through structured coordination and clear guidance.',
              },
              {
                title: 'Our Core Purpose',
                icon: Award,
                content: ['Clarity', 'Coordination', 'Accountability', 'Integrity', 'Efficiency', 'Patient-Centricity'],
                isList: true,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card rounded-3xl p-10 shadow-2xl card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-3xl" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-healthcare-100 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">{item.title}</h3>
                  {item.isList ? (
                    <ul className="space-y-2">
                      {item.content.map((value: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                  )}
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Nature of Business */}
      <SectionWrapper id="business" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 gradient-text-hero">
              Nature of Business & Industry Overview
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-10 shadow-2xl card-hover group relative overflow-hidden border-l-4 border-primary-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold mb-6 text-gray-800 flex items-center gap-3 group-hover:text-gray-900 transition-colors">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-md">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  Industry Overview
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  India's healthcare and insurance ecosystem is rapidly expanding due to increasing insurance penetration and government health initiatives. Despite this growth, patients still face delays due to complex procedures, low awareness, and coordination gaps between stakeholders.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-healthcare-600" />
                Nature of Business
              </h3>
              <p className="text-gray-700 leading-relaxed">
                SBHC operates as a private healthcare consultancy and personal TPA support service provider focused on ensuring timely treatment and smoother access to cashless healthcare. We are not an insurance company — we function as a professional healthcare facilitator supporting patients and hospitals in approvals, documentation, and panel coordination (under state/central government schemes and insurance-based panels).
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Problem Statement */}
      <SectionWrapper id="problem">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 gradient-text-hero">
              Problem Statement
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full mb-4" />
            <p className="text-center text-xl font-semibold text-gray-600">
              Problems faced by Patients & Hospitals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {[
              {
                title: 'Patients often face:',
                icon: Users,
                color: 'primary',
                issues: [
                  'Confusing procedures and eligibility rules',
                  'Delays in cashless approvals',
                  'Documentation errors',
                  'Financial uncertainty',
                  'Stress during critical treatment phases',
                ],
              },
              {
                title: 'Hospitals face:',
                icon: Building2,
                color: 'healthcare',
                issues: [
                  'Dependency on external approvals',
                  'High administrative workload',
                  'Delayed discharges',
                  'Revenue cycle delays',
                ],
              },
            ].map((card, index) => {
              const CardIcon = card.icon
              const isPrimary = card.color === 'primary'
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className={`glass-card rounded-3xl p-10 shadow-2xl card-hover group relative overflow-hidden border-l-4 ${
                    isPrimary ? 'border-primary-500' : 'border-healthcare-500'
                  }`}
                >
                  {isPrimary && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-3xl" />
                  )}
                  {!isPrimary && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-healthcare-100/40 to-transparent rounded-bl-3xl" />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      {isPrimary ? (
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-lg group-hover:scale-110 transition-transform">
                          <CardIcon className="w-10 h-10 text-primary-600" />
                        </div>
                      ) : (
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-healthcare-100 to-healthcare-200 shadow-lg group-hover:scale-110 transition-transform">
                          <CardIcon className="w-10 h-10 text-healthcare-600" />
                        </div>
                      )}
                      <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-gray-900 transition-colors">{card.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {card.issues.map((issue, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 group/item">
                          {isPrimary ? (
                            <div className="mt-1 p-1 rounded-full bg-primary-100">
                              <div className="w-2 h-2 rounded-full bg-primary-600" />
                            </div>
                          ) : (
                            <div className="mt-1 p-1 rounded-full bg-healthcare-100">
                              <div className="w-2 h-2 rounded-full bg-healthcare-600" />
                            </div>
                          )}
                          <span className="group-hover/item:text-gray-900 transition-colors font-medium">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-600 italic max-w-3xl mx-auto"
          >
            Patients lack system knowledge, hospitals depend on approvals, and panels follow strict protocols — creating coordination gaps across the ecosystem.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* SBHC Solution */}
      <SectionWrapper id="solution" className="bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 gradient-text-hero">
                The SBHC Solution
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full" />
            </div>
            <div className="glass-card rounded-3xl p-16 shadow-2xl mb-8 relative overflow-hidden border-2 border-primary-200/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/50 to-healthcare-100/50 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-6 rounded-3xl bg-gradient-to-br from-primary-100 to-healthcare-100 shadow-xl">
                  <Stethoscope className="w-24 h-24 text-primary-600" />
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
                  SBHC acts as a <span className="gradient-text font-extrabold">single-point healthcare guide</span> — aligning all stakeholders to ensure clarity, compliance, faster approvals, and timely treatment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Business Model */}
      <SectionWrapper id="model">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Business Model & Personal TPA Role
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl text-gray-700 text-center mb-12 leading-relaxed">
              SBHC follows a patient-first coordination model, integrating patients, hospitals, insurers, TPAs, and government panels into a single managed workflow.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FileCheck, title: 'Case-level ownership' },
              { icon: PhoneCall, title: 'Proactive follow-ups' },
              { icon: Network, title: 'Continuous coordination' },
              { icon: Heart, title: 'Admission-to-discharge support' },
            ].map((item, index) => {
              const ItemIcon = item.icon
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -12 }}
                className="glass-card rounded-3xl p-8 text-center shadow-2xl card-hover group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-healthcare-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-healthcare-100 group-hover:scale-110 transition-transform shadow-lg">
                    <ItemIcon className="w-12 h-12 text-primary-600 group-hover:text-primary-700 transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-gray-900 transition-colors">{item.title}</h3>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* End-to-End Cashless Support */}
      <SectionWrapper id="cashless" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 gradient-text-hero">
              End-to-End Cashless Support
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-xl md:text-2xl text-primary-700 font-bold mb-12"
            >
              Each patient is treated as a <span className="gradient-text">priority case</span> — not just a file number.
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 shadow-2xl relative overflow-hidden border-l-4 border-healthcare-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-healthcare-100/40 to-transparent rounded-bl-3xl" />
              <div className="relative z-10">
              <ul className="space-y-4">
                {[
                  'Eligibility verification',
                  'Pre-authorization & approval follow-ups',
                  'Treatment-stage coordination',
                  'Discharge approvals & billing',
                  'Claim and reimbursement support',
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-lg text-gray-700 group/item"
                  >
                    <div className="p-3 bg-gradient-to-br from-healthcare-100 to-healthcare-200 rounded-xl shadow-md group-hover/item:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-healthcare-600" />
                    </div>
                    <span className="font-semibold group-hover/item:text-gray-900 transition-colors">{service}</span>
                  </motion.li>
                ))}
              </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Hospital Onboarding */}
      <SectionWrapper id="onboarding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Hospital Onboarding & Coordination Model
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary-600" />
                Onboarding Process
              </h3>
              <div className="space-y-4">
                {[
                  'Introductory meeting & alignment',
                  'Information and contact mapping',
                  'Referral workflow setup',
                  'Case coordination protocol',
                  'Go-live with patient referrals',
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-dark rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-healthcare-600" />
                  Hospital Support Services
                </h3>
                <p className="text-gray-700 mb-4">
                  SBHC works closely with hospital admission, billing, and coordination teams to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                    Reduce paperwork burden
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                    Handle panel approvals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                    Speed up discharge processes
                  </li>
                </ul>
              </div>
              <div className="glass-dark rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary-600" />
                  Results / Benefits
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'More referrals',
                    'Faster admissions',
                    'Reduced admin workload',
                    'Improved patient satisfaction',
                    'Better revenue flow',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-healthcare-600" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Patient Services */}
      <SectionWrapper id="services" className="bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Patient Services & Ecosystem Value
          </h2>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-10 shadow-xl mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Services:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Hassle-free cashless admission guidance',
                  'Insurance, TPA & government scheme explanation',
                  'Accurate documentation support',
                  'Dedicated case coordinator',
                  'Transparent communication & updates',
                  'Continuous support during hospital stay',
                  'Smooth discharge & billing assistance',
                  'Post-discharge claim follow-up',
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-8 text-gray-800">Patient Promise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { text: 'No confusion', icon: Shield },
                  { text: 'No unnecessary delays', icon: Zap },
                  { text: 'No patient left alone', icon: Heart },
                ].map((promise, index) => {
                  const PromiseIcon = promise.icon
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-dark rounded-2xl p-8 shadow-xl"
                  >
                    <PromiseIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-xl font-bold text-gray-800">{promise.text}</p>
                  </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Value for Insurance */}
      <SectionWrapper id="insurance">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Value for Insurance & Government Health Schemes
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            SBHC strengthens the healthcare ecosystem by ensuring accurate, compliant, and well-coordinated cases for insurers and government authorities.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Network, title: 'Structured coordination with insurers & TPAs' },
              { icon: FileText, title: 'Accurate documentation' },
              { icon: FileCheck, title: 'Reduced query and rejection rates' },
              { icon: Shield, title: 'Scheme-compliant case handling' },
              { icon: Zap, title: 'Faster claim processing' },
            ].map((item, index) => {
              const ItemIcon = item.icon
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-dark rounded-2xl p-6 text-center shadow-xl"
              >
                <ItemIcon className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
              </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Delhi NCR Expansion */}
      <SectionWrapper id="partners" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Delhi NCR Expansion & Hospital Partnership Strategy
          </h2>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-8 shadow-xl mb-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Target Partners:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Building, title: 'Nursing Homes' },
                  { icon: Building2, title: 'Small & Medium Hospitals' },
                  { icon: Building2, title: 'Multi-Specialty & Super-Specialty Hospitals' },
                ].map((partner, index) => {
                  const PartnerIcon = partner.icon
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-healthcare-50"
                  >
                    <PartnerIcon className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-800">{partner.title}</p>
                  </motion.div>
                  )
                })}
              </div>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-dark rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary-600" />
                  Partnership Model
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                    Referral-based engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                    No panel alignment or structural changes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                    Admission-to-discharge coordination
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-dark rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-healthcare-600" />
                  Growth Benefits for Hospitals
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary-600" />
                    Consistent coverage-verified patient flow
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary-600" />
                    Improved bed occupancy
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary-600" />
                    Faster billing cycles
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary-600" />
                    Lower marketing cost per patient
                  </li>
                </ul>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-lg text-gray-600 mt-8 italic"
            >
              Dedicated Delhi NCR field coordination team ensuring real-time on-ground support.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Differentiators */}
      <SectionWrapper id="differentiators">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Expansion Strategy & Differentiators
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Delhi NCR Expansion Strategy</h3>
              <ul className="space-y-4">
                {[
                  'Panel-wise dedicated manpower',
                  'Separate hospital coordination team',
                  'Case-level ownership',
                  'One panel. One team. One contact.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-primary-100 rounded-lg mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Competitive Advantages</h3>
              <ul className="space-y-4">
                {[
                  'Faster approvals & discharge cycles',
                  'Reduced administrative burden',
                  'High patient satisfaction',
                  'Scalable & replicable model',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-healthcare-100 rounded-lg mt-1">
                      <Award className="w-5 h-5 text-healthcare-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-800 italic max-w-4xl mx-auto">
              Swasth Bharat Healthcare stands as a trusted healthcare facilitation partner — delivering clarity, speed, and trust across the healthcare ecosystem.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <SectionWrapper id="contact" className="bg-gradient-to-b from-white to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Contact Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-2xl p-8 mb-8 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <motion.a
                  href="tel:+911234567890"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all"
                >
                  {/* <Phone className="w-5 h-5" /> */}
                  <span>+91 123 456 7890</span>
                </motion.a>
                <motion.a
                  href="mailto:info@sbhc.in"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@sbhc.in</span>
                </motion.a>
              </div>
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-healthcare-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Consultation
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-700"
            >
              <p className="text-xl font-semibold mb-2">Swasth Bharat Healthcare</p>
              <p className="text-gray-400">Right to Direction | Saving Lives Through Guidance</p>
              <p className="text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} Swasth Bharat Healthcare. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
