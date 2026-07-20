'use client';
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { MessageSquare, Star } from "lucide-react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const Reviews = () => {

  const testimonials = [
    {
      quote:
        "The team delivered under intense timelines and we launched our website on Product Hunt with confidence. It's been a pleasure working together. Thank you for all the effort!",
      name: "Suvrat Bhooshan",
      title: "Co-founder and CEO of GenAi",
      rating: 5,
      image: null,
    },
    {
      quote:
        "Upscale Alliance crafted our new brand identity, dynamic website with seamless animations, and top-notch marketing assets. The team made all updates swiftly and precisely, and kept communication clear and consistent throughout. The team carefully incorporated every suggestion while maintaining design integrity.",
      name: "Ali Elzein",
      title: "Co-founder of Droxy.ai",
      rating: 5,
      image: null,
    },
    {
      quote:
        "I was impressed with their great outputs and wonderful design outcomes! Excellent project management capability, centralized in one person who orchestrates the projects' tasks and aligns the efforts to the needs. Very able to switch priorities on the fly.",
      name: "Aurelien Bonnel",
      title: "CTO @N3XT",
      rating: 5,
      image: null,
    },
    {
      quote:
        "Abdullah is a phenomenal designer. He and the Upscale Alliance team have shaped all the visuals for Datawizz, from brand and marketing collateral to our website.",
      name: "Iddo Gino",
      title: "Founder & CEO of Datawizz",
      rating: 5,
      image: null,
    },
    {
      quote:
        "Upscale Alliance turned around a complex project in just one month, covering information architecture, visual language, high-fidelity design, and Webflow development. Their efficiency, creativity, and responsiveness made them a valuable partner.",
      name: "Sid",
      title: "Head of Product",
      rating: 5,
      image: null,
    },
    {
      quote: "We had a website that looked nice but didn't get us any business. The team didn't just redesign it; they focused on making it work for our specific market. We've had more calls in the last two months than we did all last year. The project management was tight, which I appreciated, and they didn't try to sell us stuff we didn't need.",
      name: "Paul E. Bateman",
      title: "Owner, Bateman Law Firm",
      rating: 5,
      image: null,
    },
    {
      quote: "I was looking for a better way to handle our reporting across all our properties. Rehan set up an AI system that automates our tenant screening and creates property performance reports for our investors automatically. It used to be an all-day affair once a week. Now it's just a report that lands in my inbox. I'm not a tech person, but the setup was surprisingly easy.",
      name: "Arthur J. Gallagher",
      title: "President, Gallagher Real Estate & Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "Our old website was a nightmare to update. Abdullah moved us to a proper system and made it so I can actually edit it myself without having to bother a developer. He also fixed our local SEO so we're actually showing up when people in our area search for construction companies. It's been a good investment for the business.",
      name: "Todd M. Davis",
      title: "President, Davis Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "I was skeptical about AI for our business, but Rehan built a system that handles all our follow-up emails and even scores the leads. It saved my sales guy at least 10 hours a week of admin work. The reporting is clear and we can actually see where our money is going. It's straightforward and it works, which is all I ask for.",
      name: "Dr. Robert A. Kramer",
      title: "Owner, Kramer Healthcare",
      rating: 5,
      image: null,
    },
    {
      quote: "We make good parts, but nobody could find us online. The team understood our industry and didn't use jargon. We got a clean website that actually loads fast and now we're seeing organic traffic for the first time. The Google Ads they run have been bringing in the exact kind of manufacturing buyers we want. We've definitely seen a return.",
      name: "David M. Chen",
      title: "President, Chen Manufacturing",
      rating: 5,
      image: null,
    },
    // -------------------- 🇬🇧 UNITED KINGDOM (5) --------------------
    {
      quote: "Our website was holding us back, and I didn't have time to fix it. Abdullah just got on with it. He built a website that our clients actually like using and made it so we rank for local searches. We were already a well-known firm, but we've definitely seen a significant increase in enquiries from the website. I'd recommend them.",
      name: "Simon C. Williams",
      title: "Senior Partner, Williams & Co Solicitors",
      rating: 5,
      image: null,
    },
    {
      quote: "We were spending a fortune on ads that weren't converting. The team ran a proper audit and set up Google Ads properly for us. They focused on local keywords and we've seen a much better cost per lead. The reporting is solid, no fluff. I can actually see what's working. It's a relief to have someone who actually knows what they're doing.",
      name: "James A. Roberts",
      title: "Director, Roberts Real Estate",
      rating: 5,
      image: null,
    },
    {
      quote: "Managing our supply chain was a manual spreadsheet nightmare. Rehan built an AI integration that automates our inventory updates and sends alerts for delays. It's saved my team a huge amount of time. The project was handled professionally and came in on budget. It's been a significant improvement to our daily operations.",
      name: "David R. Phillips",
      title: "Managing Director, Phillips Logistics",
      rating: 5,
      image: null,
    },
    {
      quote: "We needed a website that reflected the quality of our work. The new site is clean and professional, and the copywriting is very good. They took the time to understand our clients. We're also showing up on the first page for our key search terms now, which has made a real difference.",
      name: "Andrew T. Clarke",
      title: "Managing Director, Clarke Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "Our old site was slow and our bounce rate was high. Abdullah designed a new site that is much faster and easier for our students to navigate. They also helped with our content and now we get decent organic traffic from people searching for courses. It was a straightforward process and the team was easy to work with.",
      name: "Dr. Sarah J. Mitchell",
      title: "Principal, Mitchell Education Group",
      rating: 5,
      image: null,
    },
    // -------------------- 🇦🇺 AUSTRALIA (5) --------------------
    {
      quote: "Our old website was just a brochure. Rehan helped us build a proper site with an AI chatbot that answers all the basic questions, which has cut down on our admin time significantly. We also started getting more enquiries from Google. It's been a pretty smooth experience, and the communication was always good.",
      name: "Michael A. Carter",
      title: "Director, Carter Accounting",
      rating: 5,
      image: null,
    },
    {
      quote: "We have a great property, but we were invisible online. Abdullah sorted out our SEO and got us a website that actually looks good on a phone. The number of direct bookings has definitely increased. We've also started running Google Ads locally, which has been effective. It's great to see the business grow from this.",
      name: "Peter J. O'Brien",
      title: "Owner, O'Brien Hospitality",
      rating: 5,
      image: null,
    },
    {
      quote: "We were struggling to get good quality leads from our website. The team redesigned it and focused on lead generation. They also set up a simple AI automation that qualifies leads for us. It's now our primary source of new business. They were a pleasure to work with and the results are there.",
      name: "John A. Smith",
      title: "Managing Director, Smith Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "We are a specialized firm, and our website didn't reflect that. Abdullah created a brand identity for us that we are really happy with. We also got a new website and better content. The feedback from our clients has been very positive. The whole process was very well managed.",
      name: "Dr. Mark R. Wilson",
      title: "Director, Wilson Financial Services",
      rating: 5,
      image: null,
    },
    {
      quote: "I was spending too much time posting on social media. Rehan built an AI tool that helps schedule and generate posts for us, which saves me hours each week. It's a straightforward solution that just does what it's supposed to. The website update also helped us look more professional.",
      name: "Elizabeth A. Moore",
      title: "Owner, Moore Tourism",
      rating: 5,
      image: null,
    },
    // -------------------- 🇩🇪 GERMANY (5) --------------------
    {
      quote: "Our website was technically functional but not generating any leads. They built a new site and focused on our key services. We've seen a noticeable improvement in organic traffic from German businesses. The team understood the market well and the project was delivered on time.",
      name: "Dr. Hans-Peter Müller",
      title: "Managing Director, Müller Legal",
      rating: 5,
      image: null,
    },
    {
      quote: "We had no idea how to handle digital marketing. They set up our Google Ads and have been managing it for us. The lead quality is much better now, and we are not wasting money on irrelevant clicks. They also helped with our website content to make it clearer for our customers. It's been good to work with them.",
      name: "Klaus W. Schmidt",
      title: "CEO, Schmidt Real Estate",
      rating: 5,
      image: null,
    },
    {
      quote: "Managing our fleet was becoming a huge challenge. Rehan developed a custom dashboard for us that uses AI to predict maintenance needs. It's a game changer for us. We can now be proactive instead of reactive. The implementation was smooth and the team was very professional.",
      name: "Thomas J. Fischer",
      title: "Managing Director, Fischer Automotive",
      rating: 5,
      image: null,
    },
    {
      quote: "We are in a competitive industry, and our website didn't stand out. They designed a new site and wrote all the content. It's modern and professional, and our clients have commented on it. It definitely helps with our brand. They were very easy to communicate with.",
      name: "Andreas K. Weber",
      title: "Partner, Weber & Co. Accountants",
      rating: 5,
      image: null,
    },
    {
      quote: "We had a basic website but no strategy to get people to it. They helped us with a complete digital marketing strategy, including SEO and content writing. We're seeing more visitors and more enquiries. The reporting shows clear progress. They listen and then deliver.",
      name: "Dr. Stefan L. Wagner",
      title: "Director, Wagner Manufacturing",
      rating: 5,
      image: null,
    },
    // -------------------- 🇫🇷 FRANCE (5) --------------------
    {
      quote: "Our old website was outdated and we weren't getting any new clients. Rehan redesigned it and improved our local SEO. We are now showing up for relevant searches in Paris and the surrounding areas. It was a no-fuss project and they were really easy to deal with.",
      name: "Jean-Pierre Dubois",
      title: "Founder, Dubois Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "We wanted to make our booking process easier. Abdullah built a new website with a booking system and an AI chatbot that handles basic customer questions. It has saved us a lot of time at reception. The whole project was well managed, and we have had no issues.",
      name: "Marie-Claire Lefèvre",
      title: "Owner, Lefèvre Hospitality",
      rating: 5,
      image: null,
    },
    {
      quote: "We were getting a lot of website visitors but no one was calling. They ran a full audit and reworked our website to focus on conversion. We also started a Google Ads campaign that is bringing in the right kind of leads. It's been a worthwhile investment for the business.",
      name: "Pierre A. Moreau",
      title: "CEO, Moreau Real Estate",
      rating: 5,
      image: null,
    },
    {
      quote: "Our SEO was terrible. They did a deep dive into our keywords and our competitors and implemented a solid SEO strategy. We've seen our rankings climb steadily. The content writing is also very good. It's great to have a team that knows what they're doing.",
      name: "Dr. François G. Laurent",
      title: "Director, Laurent Law Firm",
      rating: 5,
      image: null,
    },
    {
      quote: "Rehan set up an AI automation for our accounts that reconciles our invoices automatically. It's a pretty technical process, but they made it simple. It has saved my staff a significant amount of time. It's one of those things you don't realize you need until you have it.",
      name: "Philippe B. Roux",
      title: "Managing Director, Roux Accounting",
      rating: 5,
      image: null,
    },
    // -------------------- 🇳🇱 NETHERLANDS (5) --------------------
    {
      quote: "Our website was very basic and not professional. They built us a new one that is clean and modern. They also wrote all the copy for us. It's much easier for us to update the site ourselves now, and we are seeing better engagement from potential clients.",
      name: "Jan W. de Vries",
      title: "Director, de Vries Real Estate",
      rating: 5,
      image: null,
    },
    {
      quote: "We were spending money on a lot of different marketing channels, and we couldn't track what was working. They helped us focus on Google Ads and local SEO, and now we have a much clearer picture of our ROI. The lead quality has definitely improved. It's a much more efficient way of marketing for us.",
      name: "Pieter A. Bakker",
      title: "Partner, Bakker Legal",
      rating: 5,
      image: null,
    },
    {
      quote: "The logistics industry is tough, and our website wasn't helping us stand out. They redesigned our website and built it with a focus on the services that matter most to our clients. We've seen a noticeable increase in qualified leads from the site. They were very professional to work with.",
      name: "Dirk H. van der Meer",
      title: "CEO, Van der Meer Logistics",
      rating: 5,
      image: null,
    },
    {
      quote: "We wanted to automate some of our patient follow-ups. Rehan built a simple AI system that sends reminders and checks in with patients. It's been a great help and saved my staff a lot of admin. The setup was done remotely and it all went smoothly.",
      name: "Dr. Anne M. Jansen",
      title: "Practice Owner, Jansen Healthcare",
      rating: 5,
      image: null,
    },
    {
      quote: "We sell high-end manufacturing equipment and we needed a website that projects quality. They created a new brand identity and a website that looks the part. They also helped us with our content strategy. We have definitely seen an improvement in how we are perceived online.",
      name: "Henk J. van Dijk",
      title: "Managing Director, Van Dijk Manufacturing",
      rating: 5,
      image: null,
    },
    // -------------------- 🇦🇪 UNITED ARAB EMIRATES (5) --------------------
    {
      quote: "We had a website, but nobody in Dubai could find it. The team did a local SEO overhaul and now we are much more visible. They also set up a proper booking system. It's been a very positive change for our property business.",
      name: "Ahmed S. Al Maktoum",
      title: "Owner, Al Maktoum Real Estate",
      rating: 5,
      image: null,
    },
    {
      quote: "We were handling all our project updates manually, which was a nightmare. Rehan set up an AI system that centralizes our project reporting. Now we can give our clients instant updates without spending hours on it. It has made our operations much more efficient.",
      name: "Khalid A. Al Falasi",
      title: "Managing Director, Al Falasi Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "Our Google Ads were just burning money. They restructured our campaigns and focused on the highest-value keywords. Our cost per acquisition has gone down significantly. They also refreshed our website to improve conversions. It's been a solid return on investment for us.",
      name: "Sultan M. Al Qasimi",
      title: "Managing Director, Al Qasimi Logistics",
      rating: 5,
      image: null,
    },
    {
      quote: "We are a boutique firm and our old website didn't reflect that. They designed a custom website that really showcases our work and we have received good feedback. They also helped us with our overall branding. The team was always quick to respond to our requests.",
      name: "Omar H. Al Ghurair",
      title: "Partner, Al Ghurair Law Firm",
      rating: 5,
      image: null,
    },
    {
      quote: "I was spending too much time on social media and not enough time running my business. Abdullah set up an AI tool to manage our content posting. It saves me hours a week. The new website is also performing much better. It's all working well together.",
      name: "Dr. Rashid A. Al Mazrouei",
      title: "Director, Al Mazrouei Healthcare",
      rating: 5,
      image: null,
    },
    // -------------------- 🇸🇦 SAUDI ARABIA (5) --------------------
    {
      quote: "Our website was basic, to be honest. They built a proper, modern site and it's already making a difference. We're getting more leads through the website and the new site is much easier to manage. It was a painless process and the team was very communicative.",
      name: "Fahad A. Al Saud",
      title: "CEO, Al Saud Real Estate",
      rating: 5,
      image: null,
    },
    {
      quote: "We had an old system for managing our fleet. Rehan created a custom AI solution that optimizes our routes and predicts maintenance. We've seen cost savings and improvements in efficiency. The project was delivered within our budget and it's been a huge help.",
      name: "Turki S. Al Otaibi",
      title: "General Manager, Al Otaibi Automotive",
      rating: 5,
      image: null,
    },
    {
      quote: "Construction is competitive and we weren't getting the right leads. We started working with them on SEO and Google Ads. It took a few months, but we're now getting consistent leads that are actually turning into projects. The reporting is clear, and they keep us updated.",
      name: "Bandar M. Al Rajeh",
      title: "Managing Director, Al Rajeh Construction",
      rating: 5,
      image: null,
    },
    {
      quote: "We wanted a website that was easy to navigate for our clients. They designed one that is user-friendly and looks great. They also helped us create better content. Our clients have given us good feedback on the new site. The project was managed very well.",
      name: "Dr. Abdulaziz N. Al Ghamdi",
      title: "Director, Al Ghamdi Law Firm",
      rating: 5,
      image: null,
    },
    {
      quote: "We were handling all our financial reporting manually, and it was taking a lot of my team's time. Abdullah set up an AI system that pulls data from all our sources and generates reports automatically. It's saved us so much time and improved our accuracy.",
      name: "Yousef A. Al Amoudi",
      title: "Managing Partner, Al Amoudi Accounting",
      rating: 5,
      image: null,
    },
  ];

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);


  return (
    <section
      ref={(el) => {
        sectionRefs.current[12] = el;
      }}
      className="py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6"
          >
            <MessageSquare className="w-4 h-4 text-[#1570EF]" />
            <span className="text-[#1570EF] font-medium text-sm">
              CLIENT SUCCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted by <span className="text-[#1570EF]">100+</span> Businesses
          </motion.h2>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="testimonialSwiper"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Reviews