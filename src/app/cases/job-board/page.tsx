import { Container } from "@/components/container";
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Slider, Slide } from "@/components/shared/slider";
import { ArrowRight } from 'lucide-react'

import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

export default function JobBoard() {

    const sliderMain: Slide[] = [
        { src: "/images/job/claude-artefact.webp", caption: "Claude Artifact" },
        { src: "/images/job/job-vac-p.webp", caption: "Vacancy page" },
        { src: "/images/job/job-lect-recom.webp", caption: "Relevant lectures at the bottom of each vacancy" },
        { src: "/images/job/job-vac-mob.webp", caption: "Vacancy page on mobile" },
      ];

    return(
        <>
        <main className="flex-1 pb-16 md:pb-0">
            <Header />
            <section className="flex items-center justify-center">
                <Container variant="blog" className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-h2 font-semibold">Job Board Integration</h2>
                            <p className="text-body-md font-regular">We built a job board inside our lectures library to primarily boost lecture library conversions. In six weeks, we launched a fully responsive job board with 64 published vacancies and drove a 15% click-through rate from job listings into related lectures.</p>
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
                                <p className="text-body-s font-medium text-text-primary">Q1-Q2 2025</p>
                                <p className="text-body-s font-semibold text-green-600">+15 % Lecture CTR</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <figure className="bg-cont-secondary p-1 rounded-3xl">
                            <div className="relative w-full aspect-[440/277.68]">
                                <Image
                                    src="/images/job/job-vacs.webp"
                                    alt="Job Board"
                                    priority={true}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </figure>
                        <figcaption className="text-label-xs font-semibold text-text-secondary">Job Board: Vacancies with a comprehensive filtering</figcaption>
                    </div>

                    {/* Problem & Context Section */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Problem & Context</h4>
                        <div className="flex flex-col gap-2">
                            <p className="text-body-md text-text-primary">
                                <span className="font-semibold">The Instapreneurs</span> is a subscription-based learning platform for junior-to-mid marketing and SMM professionals. After finishing courses, our learners repeatedly asked “What&apos;s next?” - and businesses began reaching out for access to our specialist pool.
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-body-md font-semibold">So we needed to:</p>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-secondary">
                                    <li>
                                        Retain users after they upskill
                                    </li>
                                    <li>
                                        Showcase relevant vacancies alongside lectures
                                    </li>
                                    <li>
                                        Drive lecture upsells
                                    </li>
                                    <li>
                                        Enable an easy “post a job” flow for employers
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Objectives */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Objectives</h4>
                        <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-primary">
                            <li>
                                <span className="font-semibold">Unify</span> learning and job discovery in one interface
                            </li>
                            <li>
                                <span className="font-semibold">Feature</span> targeted lectures library upsells via in-listing banners
                            </li>
                            <li>
                                <span className="font-semibold">Engage</span> users with “Recommended Lectures” tied to roles
                            </li>
                            <li>
                                <span className="font-semibold">Enable</span> employers to post vacancies easily
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <figure className="bg-cont-secondary p-1 rounded-3xl shadow-xs">
                            <div className="relative w-full aspect-[440/277.68]">
                                <Image
                                    src="/images/job/job-board-mob.webp"
                                    alt="Job Board on mobile"
                                    fill
                                    loading="eager"
                                    className="object-cover"
                                />
                            </div>
                        </figure>
                        <figcaption className="text-label-xs font-semibold text-text-secondary">Job Board: Mobile</figcaption>
                    </div>

                    {/* My role */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">My role</h4>
                        <p className="text-body-md text-text-primary">
                          I collaborated with the whole team including founder Veronika, PM Viktoriia, dev Oleh and marketing Oleksandra. I nailed down requirements, designed hi-fi screens and a prototype in Figma while maintaining our existing design-system. Then I teamed up with dev to launch the portal with CMS-driven listings and upsell banners.
                        </p>
                    </div>

                    {/* Research */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Research & Key Insights</h4>
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
                        <div className="flex flex-col gap-2">
                            <h5 className="text-h5 font-semibold">Key insights</h5>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-text-primary">
                                <li>
                                    <span className="font-semibold">Learner survey (N = 50):</span> 80% would click a “Recommended Lecture” on a job page
                                </li>
                                <li>
                                    <span className="font-semibold">Competitive analysis:</span> Users expect keyword search, multi-select filters and straightforward CTAs
                                </li>
                                <li>
                                    <span className="font-semibold">Stakeholder input:</span> Employers wanted a simple “Post a Job” form and quick visibility into our candidate pool
                                </li>
                            </ul>
                        </div>  
                    </div>

                    {/* Solution */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Solution</h4>
                        <div className="flex flex-col gap-2">
                          <p className="text-body-md text-text-primary">
                            At first place, we wanted to keep it very simple and handful for users. Knowing all the basic requirements and having done some quick low-fidelity wireframes, I kicked off by using Claude AI to generate some quick artifacts in seconds and discuss some basic ideas with my team. After validating them, I used it as a base to design our board that conformed to our vision, requirements and any relevant information that we were able to obtain from the companies. 
                          </p>
                          <p className="text-body-md text-text-primary">
                            Finally, I partnered closely with development to construct a CMS for live listings, embed upsell slots and Ship the new experience across desktop and mobile - all within our six-week timeline.
                          </p>
                        </div>
                        <Slider slides={sliderMain} />
                    </div>

                    {/* Outcome */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-h4 font-semibold">Outcome</h4>
                        <p className="text-body-md text-text-secondary">
                          Launching the in-library job board has already brought us <span className="font-semibold text-text-primary">12 pilot partners, 64 live vacancies</span> and a <span className="font-semibold text-text-primary">+15% click-through rate into related lectures</span> which comes as one of our foundation to approaching B2B stream. 
                        </p>
                    </div>
                    <Link
                        href="/cases/personal-account-migration"
                        className="p-4 bg-action-secondary text-action-secondary-text border-action-secondary-border border-1 rounded-2xl shadow-xs cursor-pointer transition-all duration-400 ease-out hover:bg-action-secondary-hovered hover:shadow-none"
                        >
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-body-s font-medium text-text-secondary">Next Case</p>
                                <h5 className="text-h5 font-semibold text-text-primary">
                                  Personal Account Migration
                                </h5>
                            </div>
                            <ArrowRight className="h-8 w-8 text-action-secondary-text" aria-hidden="true" />
                        </div>
                    </Link>
                </Container>
            </section>
            <Footer />
        </main>
        </>
    ) 
}