import { Container } from "@/components/container"
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Card from '@/components/shared/card';
import Image from 'next/image';

export default function JobBoard() {
  return(
    <>
      <main className="flex-1 pb-16 md:pb-0">
        <Header />
        <section className="flex items-center justify-center">
            <Container variant="blog" className="flex flex-col">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-h2 font-semibold">Designing a Unified Personal Account</h2>
                        <p className="text-body-md font-regular">Removed third‑party friction, brought everything under one roof, and set the stage for long‑term growth</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-3 gap-5">
                            <p className="text-label-md font-semibold text-text-primary">My role</p>
                            <p className="text-label-md font-semibold text-text-primary">Timeline</p>
                            <p className="text-label-md font-semibold text-text-primary">Impact</p>
                        </div>
                        <hr className="border-t border-border-strong" />
                        <div className="grid grid-cols-3 gap-5">
                            <p className="text-body-s font-semibold text-text-primary">Solo Product Designer</p>
                            <p className="text-body-s font-semibold text-text-primary">6 months (H2 2024)</p>
                            <p className="text-body-s font-semibold text-text-primary">–65 % Support Tickets</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <figure className="bg-cont-secondary p-3 rounded-3xl">
                        <div className="relative w-full aspect-[440/277.68]">
                            <Image
                                src="/covers/dashboard.svg"
                                alt="Default alt text"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </figure>
                    <figcaption className="text-label-xs font-semibold text-text-secondary">Final Home Dashboard (Ukrainian UI shown)</figcaption>
                </div>

                {/* Overview Section */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-h4 font-semibold">Overview</h4>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-h5 font-semibold">Context</h5>
                        <blockquote className="border-l-4 border-border-accent pl-2">
                            <p className="text-body-md [text-wrap:pretty]"> <span className="font-semibold">The Instapreneurs</span> is a subscription‑based learning platform for junior to mid‑level marketing and SMM specialists. As a lean startup still honing its market fit, we needed to improve the user experience. Our learners want to boost their income, manage their time better, and pick up new skills—and their personal account is the gateway to all our courses and UGC library.</p>
                        </blockquote>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-h5 font-semibold">Problem</h5>
                        <p className="text-body-md">Because our personal‑account lived inside Kwiga’s third‑party interface, learners faced a disjointed, confusing experience, we couldn’t track how they used the product, and support tickets surged—especially around playback issues, pricing confusion, and cancellations.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-h5 font-semibold">Objective</h5>
                        <ul className="list-disc list-inside space-y-1 text-body-md text-text-primary">
                            <li>
                            <span className="font-semibold">Unify the experience</span> by migrating off Kwiga into a single, cohesive personal-account interface
                            </li>
                            <li>
                            <span className="font-semibold">Reduce support load</span> by clarifying navigation, subscription status, and content access
                            </li>
                            <li>
                            <span className="font-semibold">Boost engagement</span> through improved discovery: search, filters, playlists and bite-sized “10-minute” lectures
                            </li>
                            <li>
                            <span className="font-semibold">Enable analytics</span> to capture user behaviour and preferences for personalised content
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5 className="text-h5 font-semibold">My role</h5>
                        <p className="text-body-md">As the solo Product Designer, I owned research, information architecture, UI design, and design‑system implementation through to developer hand‑off.</p>
                    </div>
                </div>

                {/* Lecture Library Image */}
                <div className="flex flex-col gap-3">
                    <figure className="bg-cont-secondary p-3 rounded-3xl">
                        <div className="relative w-full aspect-[440/277.68]">
                            <Image
                                src="/covers/dashboard.svg"
                                alt="Default alt text"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </figure>
                    <figcaption className="text-label-xs font-semibold text-text-secondary">Lecture Library Page (Ukrainian UI shown)</figcaption>
                </div>

                {/* Research */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-h4 font-semibold">Research & Key Insights</h4>
                </div>
            </Container>
        </section>
        <Footer />
      </main>
    </>
  ) 
}