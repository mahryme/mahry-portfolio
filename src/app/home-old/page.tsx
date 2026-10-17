import { Container } from "@mahry/ds";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import Card from "@/components/site/card";

export default function HomeOldPage() {
    return (
        <>
            <Header />
            <main>
                <section className="flex items-center justify-center">
                    <Container>
                        <div className="max-w-4xl flex flex-col gap-3 text-fg-primary">
                            <h2 className="text-heading-md text-pretty">
                                A product designer who loves building systems
                                and helping things grow
                            </h2>
                            <p className="text-body-lg text-fg-secondary text-pretty">
                                I create experiences that solve real problems by
                                asking questions, listening carefully, and
                                combining systematic thinking with intuition.
                                I&apos;m interested in bridging design with
                                development by familiarising myself with code.
                            </p>
                        </div>
                    </Container>
                </section>
                <section className="flex items-center justify-center">
                    <Container>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Cases</h4>
                            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                                <Card
                                    imageSrc="/covers/job-board-cover.webp"
                                    title="Job Board Integration"
                                    subtitle="Embedded a job board into a growing lecture library to drive lecture upsells - 64 live vacancies and a 15% click-through rate to related lectures"
                                    tags={["Product", "Q1-Q2 2025"]}
                                    href="/cases/job-board"
                                />
                                <Card
                                    imageSrc="/covers/account-cover.webp"
                                    title="Personal Account Migration"
                                    subtitle="Moved off Kwiga to Webflow + Memberstack - cutting third-party dependency and enabling analytics, content discovery and UGC monetisation"
                                    tags={["Product", "H2 2024"]}
                                    href="/cases/personal-account-migration"
                                />
                                <Card
                                    imageSrc="/images/subs/sub-ver-2-eng.webp"
                                    title="Subscription UX"
                                    subtitle="Optimised a subscription management page to reduce subscription-related support tickets by 44% within low-code stack limitations"
                                    tags={["Product", "Q4 2024"]}
                                    href="/cases/subscription-ux"
                                />
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer variant="with-links" />
        </>
    );
}
