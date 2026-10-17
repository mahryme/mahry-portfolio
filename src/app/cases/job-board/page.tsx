import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Slider, Slide } from "@/components/site/slider";
import { Button, Container } from "@mahry/ds";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JobBoard() {
    const sliderMain: Slide[] = [
        { src: "/images/job/claude-artefact.webp", caption: "Claude Artifact" },
        { src: "/images/job/job-vac-p.webp", caption: "Vacancy page" },
        {
            src: "/images/job/job-lect-recom.webp",
            caption: "Relevant lectures at the bottom of each vacancy",
        },
        {
            src: "/images/job/job-vac-mob.webp",
            caption: "Vacancy page on mobile",
        },
    ];

    return (
        <>
            <main>
                <Header />
                <section className="flex items-center justify-center">
                    <Container className="max-w-3xl flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-heading-md">
                                    Job Board Integration
                                </h2>
                                <p className="text-body-md text-fg-primary">
                                    We built a job board inside our lectures
                                    library to primarily boost lecture library
                                    conversions. In six weeks, we launched a
                                    fully responsive job board with 64 published
                                    vacancies and drove a 15% click-through rate
                                    from job listings into related lectures.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-3 gap-5">
                                    <p className="text-label-md text-fg-primary">
                                        My role
                                    </p>
                                    <p className="text-label-md text-fg-primary">
                                        Timeline
                                    </p>
                                    <p className="text-label-md  text-fg-primary">
                                        Impact
                                    </p>
                                </div>
                                <hr className="border-t border-border-secondary" />
                                <div className="grid grid-cols-3 gap-5">
                                    <p className="text-body-sm text-fg-primary">
                                        Solo Product Designer
                                    </p>
                                    <p className="text-body-sm text-fg-primary">
                                        Q1-Q2 2025
                                    </p>
                                    <p className="text-body-sm font-semibold text-fg-success">
                                        +15 % Lecture CTR
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
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
                            <figcaption className="text-caption-default text-fg-secondary">
                                Job Board: Vacancies with a comprehensive
                                filtering
                            </figcaption>
                        </div>

                        {/* Problem & Context Section */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">
                                Problem & Context
                            </h4>
                            <div className="flex flex-col gap-2">
                                <p className="text-body-md text-fg-primary">
                                    <a
                                        href="https://www.theinstapreneurs.com.ua/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-action-secondary transition-all hover:text-action-secondary-hover underline"
                                    >
                                        The Instapreneurs
                                    </a>{" "}
                                    is a subscription-based learning platform
                                    for junior-to-mid marketing and SMM
                                    professionals. After finishing courses, our
                                    learners repeatedly asked “What&apos;s
                                    next?” - and businesses began reaching out
                                    for access to our specialist pool.
                                </p>
                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-fg-primary">
                                        So we needed to:
                                    </p>
                                    <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                        <li>Retain users after they upskill</li>
                                        <li>
                                            Showcase relevant vacancies
                                            alongside lectures
                                        </li>
                                        <li>Drive lecture upsells</li>
                                        <li>
                                            Enable an easy “post a job” flow for
                                            employers
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Objectives */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Objectives</h4>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                <li>
                                    Unify learning and job discovery in one
                                    interface
                                </li>
                                <li>
                                    Feature targeted lectures library upsells
                                    via in-listing banners
                                </li>
                                <li>
                                    Engage users with “Recommended Lectures”
                                    tied to roles
                                </li>
                                <li>
                                    Enable employers to post vacancies easily
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
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
                            <figcaption className="text-caption-default text-fg-secondary">
                                Job Board: Mobile
                            </figcaption>
                        </div>

                        {/* My role */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">My role</h4>
                            <p className="text-body-md text-fg-primary">
                                I collaborated with the whole team including
                                founder Veronika, PM Viktoriia, dev Oleh and
                                marketing Oleksandra. I nailed down
                                requirements, designed hi-fi screens and a
                                prototype in Figma while maintaining our
                                existing design-system. Then I teamed up with
                                dev to launch the portal with CMS-driven
                                listings and upsell banners.
                            </p>
                        </div>

                        {/* Research */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">
                                Research & Key Insights
                            </h4>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                <li>
                                    <span className="font-semibold text-fg-primary">
                                        Learner survey (N = 50):
                                    </span>{" "}
                                    80% would click a “Recommended Lecture” on a
                                    job page
                                </li>
                                <li>
                                    <span className="font-semibold text-fg-primary">
                                        Competitive analysis:
                                    </span>{" "}
                                    Users expect keyword search, multi-select
                                    filters and straightforward CTAs
                                </li>
                                <li>
                                    <span className="font-semibold text-fg-primary">
                                        Stakeholder input:
                                    </span>{" "}
                                    Employers wanted a simple “Post a Job” form
                                    and quick visibility into our candidate pool
                                </li>
                            </ul>
                        </div>

                        {/* Solution */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Solution</h4>
                            <div className="flex flex-col gap-2">
                                <p className="text-body-md text-fg-primary">
                                    At first place, we wanted to keep it very
                                    simple and handful for users. Knowing all
                                    the basic requirements and having done some
                                    quick low-fidelity wireframes, I kicked off
                                    by using Claude AI to generate some quick
                                    artifacts in seconds and discuss some basic
                                    ideas with my team. After validating them, I
                                    used it as a base to design our board that
                                    conformed to our vision, requirements and
                                    any relevant information that we were able
                                    to obtain from the companies.
                                </p>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    Finally, I partnered closely with
                                    development to construct a CMS for live
                                    listings, embed upsell slots and Ship the
                                    new experience across desktop and mobile -
                                    all within our six-week timeline.
                                </p>
                            </div>
                            <Slider slides={sliderMain} />
                        </div>

                        {/* Outcome */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Outcome</h4>
                            <p className="text-body-md text-fg-primary">
                                Launching the in-library job board has already
                                brought us{" "}
                                <span className="font-semibold text-fg-primary">
                                    12 pilot partners, 64 live vacancies and a
                                    +15% click-through rate
                                </span>{" "}
                                into related lectures which comes as one of our
                                foundation to approaching B2B stream.
                            </p>
                        </div>
                        <Button
                            asChild
                            variant="tertiary"
                            className="w-full h-auto rounded-2xl p-4"
                        >
                            <Link href="/cases/personal-account-migration">
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-body-sm text-fg-secondary">
                                            Next Case
                                        </p>
                                        <h5 className="text-heading-sm text-action-on-tertiary">
                                            Personal Account Migration
                                        </h5>
                                    </div>
                                    <ArrowRight
                                        className="h-8 w-8"
                                        aria-hidden="true"
                                    />
                                </div>
                            </Link>
                        </Button>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
