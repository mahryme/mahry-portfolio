import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Slider, Slide } from "@/components/site/slider";
import { Button, Container } from "@mahry/ds";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PersonalAccountOld() {
    const sliderInitial: Slide[] = [
        { src: "/images/acc/mvp-dash.webp", caption: "MVP dashboard" },
        {
            src: "/images/acc/mvp-lects.webp",
            caption: "MVP Lectures Library page",
        },
        { src: "/images/acc/mvp-ugc.webp", caption: "MVP UGC Library page" },
    ];

    const sliderRefine: Slide[] = [
        { src: "/images/acc/refine-dash.webp", caption: "Refined dashboard" },
        {
            src: "/images/acc/refine-lects.webp",
            caption: "Refined filtering for Lecture Library",
        },
        {
            src: "/images/acc/refine-ugc.webp",
            caption: "Enhanced filtering for UGC Library",
        },
    ];

    const sliderFinal: Slide[] = [
        { src: "/images/acc/final-dash.webp", caption: "Home page" },
        { src: "/images/acc/lects-mob.webp", caption: "Lecture discovery" },
        { src: "/images/acc/final-lect.webp", caption: "Lecture page" },
        {
            src: "/images/acc/final-playlists.webp",
            caption: "Playlists with the upsell banner for our course",
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
                                    Personal Account Migration
                                </h2>
                                <p className="text-body-md text-fg-primary">
                                    We cut our dependency on a third-party
                                    account service by migrating off Kwiga and
                                    into a custom Webflow + Memberstack setup -
                                    reducing support tickets by 65% and enabling
                                    analytics plus UGC Library monetisation
                                    options.
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
                                    <p className="text-label-md text-fg-primary">
                                        Impact
                                    </p>
                                </div>
                                <hr className="border-t border-border-secondary" />
                                <div className="grid grid-cols-3 gap-5">
                                    <p className="text-body-sm text-fg-primary">
                                        Solo Product Designer
                                    </p>
                                    <p className="text-body-sm text-fg-primary">
                                        6 months (H2 2024)
                                    </p>
                                    <p className="text-body-sm font-semibold text-fg-success">
                                        -65% Support Tickets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
                                <div className="relative w-full aspect-[440/277.68]">
                                    <Image
                                        src="/images/acc/lects-p.webp"
                                        alt="Lectures Page"
                                        priority={true}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </figure>
                            <figcaption className="text-caption-default text-fg-secondary">
                                Lectures Library page
                            </figcaption>
                        </div>

                        {/* Problem & Context Section */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">
                                Problem & Context
                            </h4>
                            <div className="flex flex-col gap-1">
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
                                    professionals. Learners were bouncing
                                    between our branded site and Kwiga&apos;s
                                    third-party interface, leading to:
                                </p>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Jarring context switches
                                        </span>{" "}
                                        that confused users
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Playback errors
                                        </span>{" "}
                                        and unclear cancellation flows spurring
                                        support tickets
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Zero insight
                                        </span>{" "}
                                        into content usage or upsell potential
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
                                <div className="relative w-full aspect-[440/277.68]">
                                    <Image
                                        src="/images/acc/kwiga-scr.webp"
                                        alt="Our Lectures Library page on Kwiga"
                                        fill
                                        loading="eager"
                                        className="object-cover"
                                    />
                                </div>
                            </figure>
                            <figcaption className="text-caption-default text-fg-secondary">
                                Our Lectures Library page on Kwiga
                            </figcaption>
                        </div>

                        {/* Objectives */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Objectives</h4>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                <li>
                                    Unify all account flows in our own branded
                                    UI
                                </li>
                                <li>
                                    Reduce support tickets by clarifying
                                    navigation and subscription status
                                </li>
                                <li>
                                    Boost discovery with search, filters, and
                                    bite-size lectures
                                </li>
                                <li>
                                    Enable more analytics for personalisation
                                    and A/B tests
                                </li>
                                <li>
                                    Scale & Monetise the UGC Library through
                                    in-app upsells and easy content discovery
                                </li>
                            </ul>
                        </div>

                        {/* My role */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">My role</h4>
                            <p className="text-body-md text-fg-primary">
                                As the sole Product Designer, I owned the
                                project from end to end: stakeholder interviews,
                                IA mapping, sketching, high-fidelity Figma
                                designs, design-system foundation and dev
                                hand-off.
                            </p>
                        </div>

                        {/* Research */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">
                                Research & Key Insights
                            </h4>
                            <p className="text-body-md text-fg-primary">
                                First, I needed to understand what users need
                                and want from the personal account, the
                                limitations of our current Kwiga setup as well
                                as the technical constraints of our no-code
                                stack (Webflow plus third-party tools like
                                Memberstack). My plan was to{" "}
                                <span className="font-semibold text-fg-primary">
                                    talk to stakeholders to figure out real pain
                                    points and feasibility.
                                </span>
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-fg-primary">
                                    I interviewed:
                                </p>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Veronika (Founder)
                                        </span>{" "}
                                        to align on business goals
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Viktoriia (PM)
                                        </span>{" "}
                                        who managed Kwiga day-to-day
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Oleksandra (Support Manager)
                                        </span>{" "}
                                        for user reports and support tickets
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Oleh (Developer)
                                        </span>{" "}
                                        to map out technical possibilities
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-heading-sm">
                                    Key insights
                                </h5>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            30% drop-off
                                        </span>{" "}
                                        at the site-to-Kwiga transition
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            65% of support tickets
                                        </span>{" "}
                                        tied to playback, pricing, or
                                        cancellations
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            User requests
                                        </span>{" "}
                                        for a range of features such as
                                        bookmarking, progress tracking and
                                        personalised recommendations
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Content discovery was challenging
                                        </span>{" "}
                                        in the existing interface, making it
                                        hard for users to find relevant lectures
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Limited analytics
                                        </span>{" "}
                                        from Kwiga revealed only basic playback
                                        data, limiting our ability to
                                        personalise the experience
                                    </li>
                                    <li>
                                        <span className="font-semibold text-fg-primary">
                                            Technical audit with our developer
                                        </span>{" "}
                                        uncovered a cost-effective migration
                                        path that would enable full analytics
                                        and in-app upsell slots
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Design Process */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-heading-sm">
                                    Design Process
                                </h4>
                                <div className="flex flex-col gap-3">
                                    <p className="text-body-md text-fg-secondary">
                                        We split the migration into three clear
                                        phases - initial MVP, refinement, and
                                        final polished version - so you can see
                                        both the big picture and the details
                                        that got us there.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t border-border-secondary" />
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h5 className="text-heading-sm">
                                            Initial MVP
                                        </h5>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-body-md text-fg-primary">
                                                <span className="font-semibold">
                                                    Goal:
                                                </span>{" "}
                                                Ship the simplest usable account
                                                experience to validate core
                                                flows and start the migration of
                                                users.
                                            </p>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold">
                                                    What I did:
                                                </p>
                                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                                    <li>
                                                        Built a unified sidebar
                                                        (Home · Lectures · UGC
                                                        Library · Updates ·
                                                        Profile)
                                                    </li>
                                                    <li>
                                                        Designed a personalised
                                                        dashboard greeting and
                                                        quick-action tiles to
                                                        products
                                                    </li>
                                                    <li>
                                                        Implemented the first
                                                        “Updates” tab for new
                                                        content alerts and
                                                        technical updates
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Slider slides={sliderInitial} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h5 className="text-heading-sm">
                                            Refinement
                                        </h5>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-body-md text-fg-primary">
                                                <span className="font-semibold text-fg-primary">
                                                    Goal:
                                                </span>{" "}
                                                Smooth the transition for
                                                existing users and implement key
                                                feedback.
                                            </p>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold text-fg-primary">
                                                    What I did:
                                                </p>
                                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                                    <li>
                                                        Added “Lectures (Kwiga)”
                                                        legacy link for users
                                                        that still have access
                                                        to Kwiga (we were
                                                        transitioning them
                                                        offering discounts)
                                                    </li>
                                                    <li>
                                                        Embedded an in-menu
                                                        survey to gather
                                                        migration feedback
                                                    </li>
                                                    <li>
                                                        Swapped “Updates” for a
                                                        “Recommended Lectures”
                                                        carousel to make the
                                                        content more
                                                        discoverable
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Slider slides={sliderRefine} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h5 className="text-heading-sm">
                                            Final
                                        </h5>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-body-md text-fg-primary">
                                                <span className="font-semibold text-fg-primary">
                                                    Goal:
                                                </span>{" "}
                                                Lock in a cohesive design
                                                system, streamline content
                                                discovery and improve the
                                                layout.
                                            </p>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-semibold text-fg-primary">
                                                    What I did:
                                                </p>
                                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                                    <li>
                                                        Established colour,
                                                        typography, and
                                                        component tokens in our
                                                        Design System that
                                                        unified all our main
                                                        products
                                                    </li>
                                                    <li>
                                                        Introduced contextual
                                                        upsell banners on Home
                                                        and Lecture pages
                                                    </li>
                                                    <li>
                                                        Added a “Meet our
                                                        Speakers” carousel with
                                                        booking links
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Slider slides={sliderFinal} />
                                </div>
                            </div>
                        </div>

                        {/* Outcome */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Outcome</h4>
                            <p className="text-body-md text-fg-primary">
                                Owning our personal-account UX end-to-end led to
                                <span className="font-semibold">
                                    a 65% drop in support tickets, 40% higher
                                    onboarding completion, and 50% more UGC
                                    engagement
                                </span>{" "}
                                as well as gave us richer data on user needs -
                                all on a foundation built to scale.
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-fg-primary">
                                    Key takeaways:
                                </p>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                    <li>
                                        Ship an MVP, gather real feedback, then
                                        iterate
                                    </li>
                                    <li>
                                        Partner closely with PM, support, and
                                        dev for faster wins
                                    </li>
                                    <li>
                                        Invest early in a design system for
                                        consistency and speed
                                    </li>
                                    <li>
                                        Run small experiments to unlock big
                                        gains
                                    </li>
                                </ul>
                            </div>
                            <blockquote className="border-l-4 border-border-focus pl-2">
                                <p className="font-semibold text-fg-primary">
                                    “Migrating our account flows was just the
                                    start — it gave us a repeatable,
                                    user-centered framework for growth.”
                                </p>
                            </blockquote>
                        </div>
                        <Button
                            asChild
                            variant="tertiary"
                            className="w-full h-auto rounded-2xl p-4"
                        >
                            <Link href="/cases/subscription-ux">
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-body-sm text-fg-secondary">
                                            Next Case
                                        </p>
                                        <h5 className="text-heading-sm text-action-on-tertiary">
                                            Subscription UX
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
            <Footer variant="with-links" />
        </>
    );
}
