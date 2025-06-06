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
                            <div className="flex flex-col gap-4">
                                <h2 className="text-h2 font-semibold text-balance">
                                    About me
                                </h2>
                                <p className="text-body-md">
                                    I see design as a bridge between vision and
                                    function which starts with the right
                                    questions and ends with clear, useful
                                    solutions that serve both people and
                                    business. Over the last two years, I&apos;ve
                                    been focused on learning by doing: mapping
                                    user flows, shaping design systems and
                                    improving how people interact with digital
                                    products. Along the way, I&apos;ve picked up
                                    low-code tools and front-end basics to
                                    better connect design with implementation.
                                </p>
                                <p className="text-body-md">
                                    Outside of work, I keep a steady routine. I
                                    run, eat with intention, recover in the
                                    sauna and make time to reflect - it helps me
                                    stay clear-headed and focused. I&apos;m also
                                    learning Spanish daily, which reminds me
                                    what it&apos;s like to be a learner and stay
                                    patient with progress.
                                </p>
                                <p className="text-body-md">
                                    Right now, I&apos;m building Metis, a
                                    language flashcard app, with my talented
                                    younger brother who does a lot of coding. It
                                    all started from my own frustration with
                                    messy learning tools. Now we&apos;re trying
                                    to make studying languages more direct, more
                                    efficient and more enjoyable integrating AI
                                    to cut down the noise and let people focus
                                    on learning and progress itself.
                                </p>
                                <p className="text-body-md">
                                    This September, I&apos;ll start studying UX
                                    Design at University of the Arts London.
                                    I&apos;m also learning Next.js and Tailwind
                                    CSS to prototype more tangibly and speak the
                                    language of engineers (at least a bit). I
                                    want to grow into a designer who makes an
                                    impact and inspire others.
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
