import { Container } from "@/components/container";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

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
                                    alt="Job Board"
                                    priority={true}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-h2 font-semibold">
                                    About me
                                </h2>
                                <p className="text-body-md text-neutral-950">
                                    <span className="font-semibold">
                                        I&apos;m Maksym,
                                    </span>{" "}
                                    a 20-year-old interface designer from
                                    Ukraine, currently based in the UK and
                                    studying User Experience at University of
                                    the Arts London.
                                </p>
                                <p className="text-body-md text-neutral-950">
                                    <span className="font-semibold">
                                        I approach
                                    </span>{" "}
                                    every bit of work understanding that design
                                    is about solving problems — for users,
                                    business, or both combined. I tend to ask a
                                    lot of questions and listen carefully, which
                                    I believe helps me tackle each problem
                                    effectively. I combine systematic thinking
                                    with intuition, which helps me generate
                                    diverse ideas that genuinely impact
                                    products. Beyond spending countless hours in
                                    Figma, I&apos;m interested in basic code,
                                    applying it to translate design systems into
                                    development whilst communicating with
                                    developers and documenting each token.
                                </p>
                                <p className="text-body-md text-neutral-950">
                                    <span className="font-semibold">
                                        When I&apos;m not designing,
                                    </span>{" "}
                                    you&apos;ll likely find me lacing up my
                                    running shoes. I&apos;m actively training
                                    for 10k and half-marathon distances,
                                    maintaining a structured routine (follow me
                                    on{" "}
                                    <a
                                        href="https://www.strava.com/athletes/138692749"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600 transition-all hover:text-blue-800 underline"
                                    >
                                        Strava
                                    </a>
                                    ). There&apos;s something about the rhythm
                                    of running that mirrors good design — both
                                    require patience, persistence and the
                                    ability to see the bigger picture whilst
                                    focusing on each step.
                                </p>
                                <p className="text-body-md text-neutral-900">
                                    <span className="font-semibold">
                                        What drives me
                                    </span>{" "}
                                    is creating experiences that matter. I
                                    believe the best solutions come from
                                    understanding what people actually need, not
                                    what we think they should want —
                                    particularly since products tend to fail
                                    when they solve problems that weren&apos;t
                                    there to begin with.
                                </p>
                                <p className="text-body-md text-neutral-900">
                                    <span className="font-semibold">
                                        Currently I&apos;m looking for
                                        opportunities
                                    </span>{" "}
                                    where I can contribute to meaningful
                                    projects whilst continuing to learn and
                                    grow. If you&apos;re building something that
                                    could make a positive impact, I&apos;d love
                                    to hear about it — either contributing to
                                    your design system or generating fresh
                                    product ideas.
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
