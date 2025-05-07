import { Container } from "@/components/container";
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Slider, Slide } from "@/components/shared/slider"; // Import the Slider component

import Image from 'next/image';
import React from 'react';

export default function PersonalAccount() {

    const sliderInitial: Slide[] = [
        { src: "/images/case-1/mvp-sketch.png", caption: "Hand-drawn sidebar & welcome screen concept" },
        { src: "/images/case-1/mvp-dashboard.svg", caption: "MVP dashboard" },
        { src: "/images/case-1/mvp-lectures.svg", caption: "MVP Lectures Library page" },
        { src: "/images/case-1/mvp-ugc.svg", caption: "MVP UGC Library page" },
      ];

      const sliderRefine: Slide[] = [
        { src: "/images/case-1/refinement-dashboard.svg", caption: "Refined dashboard" },
        { src: "/images/case-1/refinement-lectures.svg", caption: "Refined filtering of lectures" },
        { src: "/images/case-1/refinement-ugc.svg", caption: "Enhanced filtering for UGC Library" },
      ];

      const sliderFinal: Slide[] = [
        { src: "/images/case-1/final-dashboard.svg", caption: "Final version of the dashboard" },
        { src: "/images/case-1/final-lectures.svg", caption: "Final Lectures view: desktop shows carousel, filters & “New” tags; mobile shows banner, ratings & completion toggle" },
        { src: "/images/case-1/final-lecture.svg", caption: "Final Lecture page" },
        { src: "/images/case-1/final-playlists.svg", caption: "Playlists" },
      ];

    return(
        <>
        <main className="flex-1 pb-16 md:pb-0">
            <Header />
            <section className="flex items-center justify-center">
                <Container variant="blog" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-h2 font-semibold">Unified Personal Account Migration</h2>
                            <p className="text-body-md font-regular">Migrated our account flows out of a third-party service Kwiga into a custom Webflow + Memberstack setup - cutting support tickets and unlocking new options for growth</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="grid grid-cols-3 gap-5">
                                <p className="text-label-md font-semibold text-text-primary">My role</p>
                                <p className="text-label-md font-semibold text-text-primary">Timeline</p>
                                <p className="text-label-md font-semibold text-text-primary">Impact</p>
                            </div>
                            <hr className="border-t border-border-strong" />
                            <div className="grid grid-cols-3 gap-5">
                                <p className="text-body-s font-medium text-text-primary">Solo Product Designer</p>
                                <p className="text-body-s font-medium text-text-primary">6 months (H2 2024)</p>
                                <p className="text-body-s font-semibold text-green-600">-65% Support Tickets</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <figure className="bg-cont-secondary p-3 rounded-3xl">
                            <div className="relative w-full aspect-[440/277.68]">
                                <Image
                                    src="/covers/dashboard.svg"
                                    alt="Final dashboard design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </figure>
                        <figcaption className="text-label-xs font-semibold text-text-secondary">Final Home Dashboard (Ukrainian UI shown)</figcaption>
                    </div>

                    {/* Problem & Context Section */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Problem & Context</h4>
                        <blockquote className="border-l-4 border-border-accent pl-2">
                            <p className="text-body-md">
                                <span className="font-semibold">The Instapreneurs</span> is a subscription-based learning hub for junior-to-mid marketing and SMM specialists. As a lean startup chasing product-market fit, we needed a single, branded account gateway that helps learners boost their income, manage their time, and master new skills. Our platform offers a core Lectures Library subscription and a separate UGC Library subscription - both managed through the same website. 
                            </p>
                        </blockquote>
                        <p className="text-body-md">
                        Because our personal-account lived inside Kwiga's third-party interface, <span className="font-semibold">learners faced a disjointed experience, our support tickets surged</span> with <span className="italic">“Where's my library?”</span> and <span className="italic">“How do I cancel?”</span> inquiries, and <span className="font-semibold">we had little visibility into user preferences or upsell potential.</span>
                        </p>
                    </div>

                    {/* Research */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Research & Key Insights</h4>
                        <p className="text-body-md">
                            First, I needed to understand what users need and want from the personal account, the limitations of our current Kwiga setup as well as the technical constraints of our no-code stack (Webflow plus third-party tools like Memberstack). My plan was to <span className="font-semibold">talk to stakeholders</span> to <span className="font-semibold">figure out real pain points and feasibility.</span>
                        </p>
                        <div className="flex flex-col gap-1">
                            <p className="text-body-md font-semibold">I interviewed:</p>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-primary">
                                <li>
                                    <span className="font-semibold">Veronika (Founder)</span> to align on business goals
                                </li>
                                <li>
                                    <span className="font-semibold">Viktoriia (PM)</span> who managed Kwiga day-to-day
                                </li>
                                <li>
                                    <span className="font-semibold">Oleksandra (Support Manager)</span> for user reports and support tickets
                                </li>
                                <li>
                                    <span className="font-semibold">Oleh (Developer)</span> to map out technical possibilities
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-h5 font-semibold">Key insights</h5>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-primary">
                                <li>
                                    <span className="font-semibold">The context switch between our site and Kwiga confused learners</span> and drove up support tickets.
                                </li>
                                <li>
                                <span className="font-semibold">Playback issues and “nice-to-have” feature requests</span> (bookmarking, progress tracking, personalised recommendations) were frequent themes, though some weren't possible in Kwiga.
                                </li>
                                <li>
                                    As Viktoriia noted, <span className="font-semibold italic">“content discovery was challenging in the existing interface”.</span>
                                </li>
                                <li>
                                    While Kwiga offers analytics, its <span className="font-semibold">limited data</span> gave only basic metrics, hampering our ability to truly personalise the experience of our users.
                                </li>
                                <li>
                                During our feasibility talks, <span className="font-semibold">Oleh found a cost-effective migration path</span> from Memberstack that also opened doors for our other goals such as full analytics and in-app upsells through onboarding flows.
                                </li>
                            </ul>
                        </div>  
                    </div>

                    <div className="flex flex-col gap-3">
                        <figure className="bg-cont-secondary p-3 rounded-3xl">
                            <div className="relative w-full aspect-[440/277.68]">
                                <Image
                                    src="/images/case-1/kwiga-screen.png"
                                    alt="Our Lectures Library page on Kwiga"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </figure>
                        <figcaption className="text-label-xs font-semibold text-text-secondary">Our Lectures Library page on Kwiga</figcaption>
                    </div>

                    {/* Design Process */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-h4 font-semibold">Design Process</h4>
                            <div className="flex flex-col gap-3">
                                <p className="text-body-md text-text-secondary">
                                    We approached the design in <span className="font-semibold text-text-primary">three phases to arrive at our final solution.</span> First, we defined the basic, easy-to-implement features for an MVP so we could ship quickly, gather feedback, and then layer on improvements to improve the experience.
                                </p>
                                <p className="text-body-md text-text-secondary">
                                    At the same time, we planned our migration communication since we were moving payments from Wayforpay to Stripe via Memberstack :/
                                </p>
                            </div>
                        </div>
                        <hr className="border-t border-border-strong" />
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h5 className="text-h5 font-semibold">Initial MVP</h5>
                                    <p className="text-body-md text-text-secondary">
                                        For our MVP, we unified the Lectures and UGC libraries into a single subscription-driven account. Users land on a personalised dashboard that greets them by name and clearly outlines available actions. The Lectures page offers simple filters for topic and level, whereas the UGC Library lets users browse and download their purchased content. A dedicated “Updates” tab features new lectures, UGC packs, and product/tech announcements.
                                    </p>
                                </div>
                                <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex justify-center">
                                    <div className="w-full px-5 md:px-10">
                                        <Slider slides={sliderInitial} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h5 className="text-h5 font-semibold">Navigation Refinement & Content Variantion </h5>
                                    <p className="text-body-md text-text-secondary">
                                        After launching the MVP, we gathered valuable feedback through surveys and user interviews, which guided our next steps. As our design system evolved, the personal-account UI became more cohesive and polished. We added personalised content modules on the dashboard to invite deeper engagement, and enhanced filtering to improve content discovery driving a <span className="font-semibold text-text-primary">40% increase in engagement.</span>
                                    </p>
                                </div>
                                <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex justify-center">
                                    <div className="w-full px-5 md:px-10">
                                        <Slider slides={sliderRefine} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h5 className="text-h5 font-semibold">Final Solution</h5>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-body-md text-text-secondary">In our final release, we rolled out a fully polished account experience as our design system were complete:</p>
                                        <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-secondary">
                                            <li>
                                                <span className="font-semibold text-text-primary">Slide-out sidebar</span> keeps the UI clean and gives you more room to focus on content
                                            </li>
                                            <li>
                                                <span className="font-semibold text-text-primary">“Meet our Speakers”</span> carousel greets you with expert faces and easy booking links
                                            </li>
                                            <li>
                                                <span className="font-semibold text-text-primary">Lectures page</span> shows tidy topic and level filters alongside video cards with ratings and “New” tags
                                            </li>
                                            <li>
                                                <span className="font-semibold text-text-primary">UGC Library</span> section uses clickable category chips and big thumbnails for fast browsing and downloads
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex justify-center">
                                    <div className="w-full px-5 md:px-10">
                                        <Slider slides={sliderFinal} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Outcome */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Outcome</h4>
                        <p className="text-body-md text-text-secondary">
                            Owning the personal-account UX end-to-end led to<span className="font-semibold text-text-primary">a 65% drop in support tickets, 40% higher onboarding completion,</span> and <span className="font-semibold text-text-primary">50% more UGC engagement</span> - all on a foundation built to scale.
                        </p>
                        <div className="flex flex-col gap-1">
                            <p className="text-body-md font-semibold">Key takeaways:</p>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-primary">
                                <li>
                                    <span className="font-semibold">Ship an MVP</span>, gather real feedback, then iterate
                                </li>
                                <li>
                                    <span className="font-semibold">Partner closely</span> with PM, support, and dev for faster wins
                                </li>
                                <li>
                                    <span className="font-semibold">Invest early</span> in a design system for consistency and speed
                                </li>
                                <li>
                                    <span className="font-semibold">Run small</span> experiments to unlock big gains
                                </li>
                            </ul>
                        </div>
                        <blockquote className="border-l-4 border-border-accent pl-2">
                            <p className="text-body-md text-text-secondary">
                                “Migrating our account flows was just the start—it gave us a <span className="font-semibold text-text-primary">repeatable, user-centered framework for growth.</span>”
                            </p>
                        </blockquote>
                    </div>
                </Container>
            </section>
            <Footer />
        </main>
        </>
    ) 
}