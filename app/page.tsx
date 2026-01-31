
"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import FloatingBlobs from "@/components/FloatingBlobs";
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
  Phone,
} from "lucide-react";
import Image from "next/image";

const servicesListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const servicesListItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

const PARTNER_LOGOS = [
  { name: "Partner 1", logo: "/logo.svg" },
  { name: "Partner 2", logo: "/logo.svg" },
  { name: "Partner 3", logo: "/logo.svg" },
  { name: "Partner 4", logo: "/logo.svg" },
  { name: "Partner 5", logo: "/logo.svg" },
  { name: "Partner 6", logo: "/logo.svg" },
  { name: "Partner 7", logo: "/logo.svg" },
];

function PartnersSlider() {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((client, i) => (
          <div
            key={i}
            className="slide grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            aria-hidden={i >= 7}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={250}
              height={100}
              className="max-h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* <FloatingBlobs /> */}
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper
        id="hero"
        className="pt-32 pb-20 min-h-[95vh] bg-[url('/main-bg.png')] bg-cover bg-center flex items-center justify-center"
      >
        <div className="w-[90%] max-w-screen-2xl mx-auto mt-20 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto lg:mt-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold lg:mb-6 mb-3 leading-[1.15]"
            >
              <span className="text-white">Swasth Bharat Healthcare</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-[30px] text-white font-semibold mb-6 lg:mb-8 max-w-3xl mx-auto leading-tight"
            >
              Professional Healthcare Consultancy & Personal TPA Support
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-bold text-white mb-2 uppercase"
            >
              Right to Direction | Saving Lives Through Guidance
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We simplify healthcare access through structured guidance,
              case-level coordination, and accountable support — ensuring faster
              approvals, timely treatment, and smoother hospital journeys.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1, y: -0 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-3 bg-gradient-to-r from-primary-600 via-primary-500 to-healthcare-600 text-white rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group w-fit mx-auto lg:mx-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-healthcare-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
              <motion.a
                href="#partners"
                whileHover={{ scale: 1, y: -0 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 glass-card rounded-full font-bold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group border-2 border-primary-200/50 hover:border-primary-300 w-fit mx-auto lg:mx-0"
              >
                Partner With Us
                <Users className="w-5 h-5 text-primary-600 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* About SBHC */}
      <section
        id="about"
        className="bg-[url('/about-bg.png')] bg-cover bg-center pt-16 lg:pt-24 pb-16 lg:pb-24 overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                About SBHC
              </h2>
              {/* <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full" /> */}
            </div>
            <p className="text-lg text-gray-700 lg:leading-relaxed leading-[1.35] mb-20">
              We believe the future of healthcare depends not only on medical
              excellence, but on clarity, coordination, and accountability.
              Guided by this belief, Swasth Bharat Healthcare operates as a
              strategic healthcare partner — driven by integrity, efficiency,
              and outcomes.
            </p>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-center gap-4 max-w-4xl mx-auto">
           {/* <div className="bg-white rounded-full p-4">
           <Image
              src="/founder-img.png"
              alt="About SBHC"
              width={1000}
              height={500}
              className="max-w-80 lg:max-w-96"
            />
           </div> */}
            <div className="text-base text-gray-600 leading-relaxed border border-[#d2d2d2c2] bg-[#ffffff85] rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-0 lg:gap-6 overflow-hidden">
            <div>
            <Image
              src="/founder-img.png"
              alt="About SBHC"
              width={1000}
              height={500}
              className="max-w-72 lg:max-w-80"
            />
            </div>
            <div className="h-px w-full bg-gradient-to-r from-[#ffffff00] via-[#bbbbbb] to-[#ffffff00] lg:hidden" />
              <div className="p-4 lg:pr-6">
              <p className="lg:leading-relaxed leading-[1.25]">
                {" "}
                SBHC was founded with a clear and purpose-driven vision, shaped
                by over 14 years of leadership experience across sales,
                marketing, and corporate strategy. This journey revealed a major
                gap in the healthcare ecosystem: patients often lack proper
                direction to access timely and appropriate care, even when
                infrastructure and insurance exist.
              </p>
              <p className="text-black font-medium mt-4 lg:mt-6 leading-[1.35] ml-4">
                - Mr. Ajay Bansal
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Purpose */}
      <section
        id="vision"
        className="bg-[#ffffff] pt-16 lg:pt-24 pb-16 lg:pb-24"
      >
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
              Purpose That Transforms Healthcare
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                icon: Eye,
                content:
                  "To help every patient in India get the right medical care at the right time, with clear direction and reliable support throughout their healthcare journey.",
              },
              {
                title: "Mission",
                icon: Target,
                content:
                  "To make healthcare easy to understand and easy to access by providing proper guidance, timely coordination, and continuous support at every step.",
              },
              {
                title: "Our Core Purpose",
                icon: Award,
                content:
                  "We keep everything clear and easy to understand. We make sure all teams work together smoothly, take full responsibility for every case, work honestly, avoid delays, and always put the patient first in every decision.",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden bg-[url('/mission-bg.svg')] bg-cover bg-center border border-[#DDDDDD] group"
                >
                  {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-3xl" /> */}
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-healthcare-100 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                      <IconComponent className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                    </div>
                    <div className="flex items-center mb-3 mt-0 lg:mt-6 ml-[-24px] lg:ml-[-40px]">
                      <div className="w-0.5 h-10 bg-gradient-to-br from-[#3B978C] to-[#093B0C]" />
                      <h3 className="text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B978C] to-[#093B0C] w-fit px-6 lg:px-10">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                    {/* {item.isList ? (
                      <ul className="space-y-2">
                        {item.content.map((value: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-healthcare-600" />
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    )} */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="bg-[#F3F8FF] pt-16 lg:pt-24">
        <div className="w-[90%] max-w-screen-2xl mx-auto">
          <div className="mb-16 lg:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Problems That Delay Care
            </h2>
            {/* <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-healthcare-600 mx-auto rounded-full mb-4" /> */}
            {/* <p className="text-center text-xl font-semibold text-gray-600">
              Problems faced by Patients & Hospitals
            </p> */}
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto pb-28 lg:pb-40">
            <div className="w-full">
              <Image
                src="/problems-img.svg"
                alt="Problem Statement"
                width={1000}
                height={500}
                className="w-full max-w-[42rem]"
              />
            </div>
            <div className="flex flex-col w-full lg:w-auto lg:min-w-[25rem] xl:min-w-[30rem] items-center gap-10 lg:gap-6 xl:gap-12 max-w-6xl mx-auto">
              {/* <div className='absolute top-0 left-6 lg:left-7 xl:left-8 w-px h-80 sm:h-60 lg:h-72 xl:h-60 bg-gradient-to-r from-transparent to-[#E36B0C] rounded-full'/> */}
              {[
                {
                  title: "Patients often face:",
                  icon: Users,
                  color: "primary",
                  issues: [
                    "Confusing procedures rules",
                    "Delays in cashless approvals",
                    "Documentation errors",
                    "Financial uncertainty",
                    "Stress during critical treatment phases",
                  ],
                },
                {
                  title: "Hospitals face:",
                  icon: Building2,
                  color: "healthcare",
                  issues: [
                    "Dependency on external approvals",
                    "High administrative workload",
                    "Delayed discharges",
                    "Revenue cycle delays",
                  ],
                },
              ].map((card, index) => {
                const CardIcon = card.icon;
                const isPrimary = card.color === "primary";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex-1 w-full ${isPrimary ? "" : ""}`}
                  >
                    {/* {isPrimary && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-3xl" />
                  )}
                  {!isPrimary && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-healthcare-100/40 to-transparent rounded-bl-3xl" />
                  )} */}
                    <div className="relative z-10 flex gap-4 xl:gap-12">
                      <div className="">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#E36B0C] to-[#7D3B07] rotate-45">
                          <CardIcon
                            className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white -rotate-45"
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>
                      <div className="mt-2 lg:mt-3">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {card.title}
                        </h3>
                        <ul className="space-y-1">
                          {card.issues.map((issue, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-700 group/item"
                            >
                              {isPrimary ? (
                                <div className="mt-1 p-1 rounded-full bg-primary-100">
                                  <div className="w-2 h-2 rounded-full bg-primary-600" />
                                </div>
                              ) : (
                                <div className="mt-1 p-1 rounded-full bg-healthcare-100">
                                  <div className="w-2 h-2 rounded-full bg-healthcare-600" />
                                </div>
                              )}
                              <span className="group-hover/item:text-gray-900 transition-colors">
                                {issue}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Solutions That Accelerate It */}
        <div className="bg-gradient-to-l from-[#093B0C] to-[#3B978C] max-w-4xl mx-auto lg:px-10 px-4 pb-10 rounded-3xl -mb-[3.5rem] relative z-10 w-[90%] lg:w-full">
          <div className="mb-4 bg-[#F3F8FF] rounded-full py-4 lg:px-10 px-4 absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] lg:w-fit 2xl:min-w-[700px]">
            <h3 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-[#093B0C] to-[#226961] w-full lg:w-fit mx-auto lg:text-2xl 2xl:text-4xl text-xl font-bold leading-[1.25] ">
              Solutions That Accelerate It
            </h3>
          </div>
          <p className="text-white text-center text-base lg:text-lg pt-[4.5rem] lg:pt-12 2xl:pt-16">
            SBHC acts as a single-point healthcare guide — aligning all
            stakeholders to ensure clarity, compliance, faster approvals, and
            timely treatment.
          </p>
        </div>
      </section>

      {/* Services Section */}

      <section className='bg-[url("/services-sm-bg.png")] lg:bg-[url("/services-bg.png")] sm:bg-cover bg-contain bg-bottom bg-no-repeat pt-28 lg:pt-40 pb-24 lg:pb-60 min-h-[100vh]'>
        <div className="max-w-screen-2xl mx-auto w-[90%]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 lg:mb-20">
            Services we Offer
          </h2>
          <div>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "Patient-Facing Services",
                  icon: Eye,
                  content: [
                    "Help with cashless hospital admission",
                    "Checking insurance or scheme eligibility",
                    "Support during treatment and hospital stay",
                    "Help with discharge and billing process",
                    "Assistance with claim follow-ups",
                    "Continued support even after discharge",
                  ],
                },
                {
                  title: "Hospital-Facing Services",
                  icon: Target,
                  content: [
                    "Coordination with insurance panels and TPAs",
                    "Regular follow-ups for faster approvals",
                    "Support to speed up billing and discharge",
                    "Structured patient referral support",
                    "Help with documentation and compliance",
                  ],
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-r from-[#ffc97848] to-[#d9d9d900] p-6 lg:p-10 relative overflow-hidden"
                  >
                    {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-3xl" /> */}
                    <div className="relative z-10">
                      {/* <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-healthcare-100 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                  </div> */}
                      <div className="flex items-center mb-3 ml-[-24px] lg:ml-[-40px]">
                        <div className="w-0.5 h-10 bg-gradient-to-l from-[#3B978C] to-[#093B0C]" />
                        <h3 className="text-2xl lg:text-[30px] lg:leading-[1.25] font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#7e973b] to-[#093B0C] w-fit px-6 lg:px-10">
                          {item.title}
                        </h3>
                      </div>
                      {item.content.length > 1 ? (
                        <motion.ul
                          className="space-y-2 lg:space-y-2"
                          variants={servicesListVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-20px" }}
                        >
                          {item.content.map((value: string, i: number) => (
                            <motion.li
                              key={i}
                              variants={servicesListItemVariants}
                              transition={{ duration: 0.35 }}
                              className="flex items-start gap-2 text-black"
                            >
                              <CheckCircle2 className="min-w-4 max-w-4 min-h-4 max-h-4 text-healthcare-800 mt-0.5 shrink-0" />
                              <span className="leading-tight text-gray-800">
                                {value}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Working with SBHC */}
      <section
        id="working"
        className="bg-[#F3F8FF] pt-16 lg:pt-24 pb-16 lg:pb-24"
      >
        <div className="max-w-screen-2xl mx-auto w-[90%]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 lg:mb-20">
            How SBHC Works
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-4 lg:gap-8 max-w-[100%] 2xl:max-w-7xl mx-auto">
            {[
              {
                title: "Checking Your Coverage",
                content:
                  "We first check whether your insurance, TPA, or government scheme is valid — so you know clearly what is covered before admission",
              },
              {
                title: "Getting Cashless Approval",
                content:
                  "We handle the paperwork and follow up with insurance teams to help you get approvals without unnecessary delays",
              },
              {
                title: "Support During Hospital Stay",
                content:
                  "While treatment is ongoing, we stay connected with the hospital and insurance teams so everything runs smoothly",
              },
              {
                title: "Smooth Discharge Process",
                content:
                  "We help coordinate billing and final approvals so discharge is not delayed and stress is reduced",
              },
              {
                title: "Claim & Follow-Up Support",
                content:
                  "After discharge, we assist with claim tracking and follow-ups to help close the process smoothly",
              },
            ].map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ translateY: -10 }}
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2, duration: 0.4 },
                    },
                  }}
                  transition={{ duration: 0.25 }}
                  className="bg-gradient-to-t from-[#D3EDFF] to-[#ffffff] p-6 lg:p-10 relative overflow-hidden rounded-3xl border border-[#DDDDDD] flex flex-col basis-full sm:basis-[calc(45%-1rem)] lg:basis-[calc(33%-1.33rem)] max-w-[420px] shadow-lg"
                >
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="text-6xl lg:text-8xl font-extrabold text-black w-fit opacity-10 absolute -top-2 lg:-top-5 left-0">
                      {index + 1}
                    </div>
                    <h3 className="text-xl lg:text-2xl 2xl:text-[27px] leading-[1.15] lg:leading-[1.15] font-semibold text-black w-fit ml-6 lg:ml-10 mb-3 lg:mb-6">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-tight">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose SBHC */}
      <section
        id="why"
        className="bg-[url('/why-choose-us-bg.png')] bg-cover bg-center pt-16 lg:pt-24 pb-16 lg:pb-24"
      >
        <div className="max-w-screen-2xl mx-auto w-[90%]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-8 lg:mb-20">
            Why Choose SBHC
          </h2>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {[
              "Faster Cashless <br /> Approvals",
              "Reduced Admin <br /> Burden",
              "Improved Patient <br /> Satisfaction",
              "Hospital Revenue <br /> Optimization",
              "Scalable & Replicable <br /> Model",
              "Delhi NCR On-Ground <br /> Team",
            ].map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2, duration: 0.4 },
                    },
                  }}
                  className="bg-white hover:bg-[#f3f8ff31] hover:text-white transition-all duration-300 border border-[#ffffff] rounded-3xl p-3 lg:p-6 relative overflow-hidden group"
                >
                  <h3
                    className="text-xl lg:text-2xl font-semibold text-black text-center lg:group-hover:text-white transition-all duration-300"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="bg-[#F3F8FF] py-16 lg:py-20 overflow-hidden"
      >
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-14 px-4 lg:px-0"
          >
            Our Partners
          </motion.h2>
          <PartnersSlider />
        </div>
      </section>
      {/* Footer */}
      <section
        id="contact"
        className="bg-white text-black pt-12 lg:pt-16 pb-12 lg:pb-16"
      >
        <div className="max-w-screen-2xl mx-auto w-[90%]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col lg:flex-row gap-6 justify-around items-center mb-6 lg:mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold"
              >
                Contact Us
              </motion.h2>
              <div className="hidden lg:block w-px h-10 lg:h-16 bg-gradient-to-l from-[#3B978C] to-[#093B0C]"></div>
              <div className="flex flex-col md:flex-row lg:gap-4 justify-center items-start">
                <motion.a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 px-6 py-3 group"
                >
                  <div className="bg-gradient-to-r from-[#7D3B07] to-[#E36B0C] rounded-xl p-2 rotate-45 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white -rotate-45" />
                  </div>
                  <span className="text-lg lg:text-[22px] font-semibold">
                    +91 123 456 7890
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:info@sbhc.in"
                  className="flex items-center gap-3 px-6 py-3 group"
                >
                  <div className="bg-gradient-to-r from-[#7D3B07] to-[#E36B0C] rounded-xl p-2 rotate-45 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white -rotate-45" />
                  </div>
                  <span className="text-lg lg:text-[22px] font-semibold">
                    info@sbhc.in
                  </span>
                </motion.a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <motion.a
                  href="tel:+911234567890"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 lg:gap-6 px-6 py-3 "
                >
                  <div className="bg-gradient-to-r from-[#7D3B07] to-[#E36B0C] rounded-xl p-2 rotate-45">
                    <Phone className="w-6 h-6 text-white -rotate-45" />
                  </div>
                  <span className="text-lg lg:text-[28px] font-semibold">+91 123 456 7890</span>
                </motion.a>
                <motion.a
                  href="mailto:info@sbhc.in"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 lg:gap-6 px-6 py-3 "
                >
                  <div className="bg-gradient-to-r from-[#7D3B07] to-[#E36B0C] rounded-xl p-2 rotate-45">
                    <Mail className="w-6 h-6 text-white -rotate-45" />
                  </div>
                  <span className="text-lg lg:text-[28px] font-semibold">info@sbhc.in</span>
                </motion.a>
              </div> */}
              <motion.a
                href="#hero"
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-healthcare-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                Get Consultation
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-xl font-semibold mb-2">
                Swasth Bharat Healthcare
              </p>
              <p className="text-gray-400">
                Right to Direction | Saving Lives Through Guidance
              </p>
              <p className="text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} Swasth Bharat Healthcare. All
                rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}