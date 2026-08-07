import { Container } from "@/components/site/container";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-[100dvh]">
                <Header />
                <main>
                    <section className="flex items-center justify-center">
                        <Container variant="blog" className="flex flex-col">
                            <div className="relative size-full aspect-square rounded-lg overflow-hidden md:size-40">
                                <Image
                                    src="/avatar.jpg"
                                    alt="Me"
                                    priority={true}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-heading-md">About me</h2>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    I&apos;m Maksym (Maks) — a product designer
                                    based in London, UK, studying User
                                    Experience at University of the Arts London.
                                </p>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    <span className="font-semibold">
                                        I take on the whole problem, not just
                                        the screens.
                                    </span>{" "}
                                    On my main project,{" "}
                                    <a
                                        href="https://www.theinstapreneurs.com.ua/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-action-secondary transition-all hover:text-action-secondary-hover underline"
                                    >
                                        The Instapreneurs
                                    </a>{" "}
                                    (an online-education platform), I built the
                                    product from the ground up — information
                                    architecture, user flows, the interface, the
                                    design system and the direction for the
                                    developer who built it — and stayed close
                                    enough to the outcomes to move them: a
                                    personal-account migration that{" "}
                                    <span className="font-semibold">
                                        cut support tickets by 65%
                                    </span>{" "}
                                    and a job-board integration that{" "}
                                    <span className="font-semibold">
                                        lifted lecture click-through by 15%
                                    </span>
                                    .
                                </p>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    Owning that much doesn&apos;t necessarily
                                    mean working alone — it&apos;s{" "}
                                    <span className="font-semibold">
                                        where I lean most collaborative.
                                    </span>{" "}
                                    I&apos;m at my best in a small team I can
                                    help steer: delegating, working out what
                                    each person is strongest at and curating the
                                    discussion so it stays focused on the real
                                    problem. My instinct is to start with
                                    structure — I want the sitemap, the funnel
                                    and the navigation logic right before
                                    anything turns visual, because the surface
                                    is easier to get good once the system
                                    underneath it is sound. I&apos;m opinionated
                                    about these calls, but quick to change my
                                    mind when the evidence does.
                                </p>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    Curiosity is the engine behind all of it as
                                    it pulls me into a problem before I know the
                                    answer, and lately it&apos;s{" "}
                                    <span className="font-semibold">
                                        pulling me toward code.
                                    </span>{" "}
                                    I build design systems in Figma — primitive
                                    values into semantic tokens — then carry
                                    them into React and Tailwind so the system
                                    lives in the product, not just the file.
                                    It&apos;s the part I&apos;m going deepest on
                                    right now.
                                </p>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    Beyond design and code, I&apos;m passionate
                                    about languages and endurance sports. I{" "}
                                    <span className="font-semibold">
                                        learnt Spanish from zero to
                                        conversational
                                    </span>{" "}
                                    across two years of A-levels and I&apos;m
                                    still improving it, and I treat endurance
                                    sport as a long-term personal project —
                                    currently training for 10k and half-marathon
                                    distances (
                                    <a
                                        href="https://www.strava.com/athletes/138692749"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-action-secondary transition-all hover:text-action-secondary-hover underline"
                                    >
                                        My Strava
                                    </a>
                                    ).
                                </p>
                                <p className="text-body-md text-fg-primary text-pretty">
                                    I&apos;m looking for opportunities where I
                                    can take on real product problems and keep
                                    building the design-systems-in-code side of
                                    my practice. If you&apos;re making something
                                    you care about, I&apos;d like to hear about
                                    it.
                                </p>
                            </div>
                        </Container>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
