import Link from "next/link";
import { Button, Container, Divider } from "@mahry/ds";
import { ArrowRight } from "lucide-react";
import CaseBreadcrumb from "@/components/site/case-breadcrumb";
import CaseNav from "@/components/site/case-nav";
import Footer from "@/components/site/footer";
import Header from "@/components/site/header";
import MediaFrame from "@/components/site/media-frame";
import MediaSlider, { type MediaSlide } from "@/components/site/media-slider";

const navItems = [
    { id: "context", label: "Context" },
    { id: "final-artefact", label: "Final artefact" },
    { id: "key-design-moments", label: "Key design moments" },
    { id: "impact", label: "Impact" },
    { id: "wrap-up", label: "Wrap-up" },
];

const meta = [
    {
        label: "My role",
        value: "Sole product designer. IA, flows, UI, design system, direction for the developer.",
    },
    { label: "Timeline", value: "Jun-Dec 2024" },
    {
        label: "Team",
        value: "Founder, PM, support manager, Webflow developer",
    },
    { label: "Skills", value: "IA, product design, design systems" },
];

const finalSlides: MediaSlide[] = [
    {
        src: "/images/acc/final-dash.webp",
        alt: "Home page and navigation",
        caption: "Home page and navigation",
    },
    {
        src: "/images/acc/lects-p.webp",
        alt: "Lectures Library",
        caption: "Lectures Library",
    },
    {
        src: "/images/acc/lects-mob.webp",
        alt: "Lectures Discovery on mobile",
        caption: "Lectures Discovery (Mobile)",
    },
    {
        src: "/images/acc/final-lect.webp",
        alt: "Lecture page",
        caption: "Lecture page",
    },
    {
        src: "/images/acc/final-playlists.webp",
        alt: "Playlists",
        caption: "Playlists",
    },
];

const sectionHeading = "text-heading-md font-medium text-fg-primary";
const strong = "font-medium text-fg-primary";

export default function PersonalAccountMigrationPage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <Container variant="no-pt">
                    <div className="flex flex-col gap-6">
                        <CaseBreadcrumb current="Lecture Library Migration" />

                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
                            <div className="flex flex-col justify-between gap-6">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-2">
                                        <p className="label-mono">
                                            Case study
                                        </p>
                                        <h1 className="text-heading-lg text-fg-primary">
                                            Lecture Library Migration
                                        </h1>
                                    </div>
                                    <p className="text-body-sm text-fg-secondary">
                                        Learners kept bouncing between The
                                        Instapreneurs’s website and a
                                        third-party platform with lectures
                                        library, the support tickets kept piling
                                        up. I curated the move from to an
                                        in-house account area with lecture
                                        library.
                                    </p>
                                </div>
                                <dl className="flex flex-col gap-3">
                                    {meta.map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex flex-col gap-1"
                                        >
                                            <dt className="label-mono">
                                                {item.label}
                                            </dt>
                                            <dd className="text-label-md text-fg-primary">
                                                {item.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <MediaFrame
                                src="/images/acc/lects-p.webp"
                                alt="Lectures Page"
                                caption="Lectures Page (Ukrainian UI shown)"
                                captionTone="secondary"
                                priority
                            />
                        </div>

                        <Divider />

                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-8">
                            <div className="hidden lg:sticky lg:top-8 lg:block">
                                <CaseNav items={navItems} />
                            </div>

                            <div className="flex min-w-0 flex-col gap-8">
                                <section
                                    id="context"
                                    className="flex scroll-mt-8 flex-col gap-4"
                                >
                                    <h2 className={sectionHeading}>Context</h2>
                                    <div className="flex flex-col gap-4 text-body-md text-fg-secondary">
                                        <p>
                                            <span className={strong}>
                                                The Instapreneurs
                                            </span>{" "}
                                            is a Ukrainian subscription learning
                                            platform for junior-to-mid marketers
                                            and SMM professionals. Its account
                                            experience and lectures lived in{" "}
                                            <span className={strong}>
                                                Kwiga
                                            </span>
                                            , a third-party partnering platform,
                                            behind a branded website. It
                                            impacted the churn rate with about
                                            30% of users dropping off due to the
                                            segmented experience. Roughly
                                            two-thirds of support tickets were
                                            about Kwiga’s usability issues and
                                            features improvements which we were
                                            unable to address directly. There
                                            was no analytics on content use, so
                                            it was hard to tell what to improve
                                            or promote — the only source was
                                            reaching out directly to users.
                                        </p>
                                        <div className="flex flex-col gap-1">
                                            <p className={strong}>
                                                So this project enabled us to:
                                            </p>
                                            <ul className="list-disc pl-5">
                                                <li>
                                                    facilitate content
                                                    management, have metrics on
                                                    content consumption and
                                                    control over platform
                                                </li>
                                                <li>
                                                    reduce the support burden on
                                                    a small team we had
                                                </li>
                                                <li>
                                                    scale other products like
                                                    courses and UGC library with
                                                    upsells
                                                </li>
                                                <li>
                                                    reduce cost on third-party
                                                    subscriptions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <MediaFrame
                                        src="/images/acc/kwiga-scr.webp"
                                        alt="Legacy Kwiga dashboard"
                                        caption="Legacy Kwiga dashboard"
                                    />
                                </section>

                                <section
                                    id="final-artefact"
                                    className="flex scroll-mt-8 flex-col gap-4"
                                >
                                    <h2 className={sectionHeading}>
                                        Final artefact
                                    </h2>
                                    <MediaSlider slides={finalSlides} />
                                    <p className="text-body-md text-fg-primary">
                                        Here maybe some description
                                    </p>
                                </section>

                                <section
                                    id="key-design-moments"
                                    className="flex scroll-mt-8 flex-col gap-4"
                                >
                                    <h2 className={sectionHeading}>
                                        Key design moments
                                    </h2>
                                    <p className="text-body-md text-fg-primary">
                                        Here maybe some description
                                    </p>
                                </section>

                                <section
                                    id="impact"
                                    className="flex scroll-mt-8 flex-col gap-4"
                                >
                                    <h2 className={sectionHeading}>Impact</h2>
                                    <p className="text-body-md text-fg-primary">
                                        Here maybe some description
                                    </p>
                                </section>

                                <section
                                    id="wrap-up"
                                    className="flex scroll-mt-8 flex-col gap-4"
                                >
                                    <h2 className={sectionHeading}>Wrap-up</h2>
                                    <p className="text-body-md text-fg-primary">
                                        Here maybe some description
                                    </p>
                                </section>

                                <Button
                                    asChild
                                    variant="tertiary"
                                    className="h-auto w-full rounded-2xl p-4"
                                >
                                    <Link href="/cases/job-board">
                                        <div className="flex w-full items-center justify-between gap-3">
                                            <div className="flex flex-col gap-1 text-left">
                                                <span className="text-body-sm text-fg-secondary">
                                                    Next Case
                                                </span>
                                                <span className="text-heading-sm text-action-on-tertiary">
                                                    Job Board Integration
                                                </span>
                                            </div>
                                            <ArrowRight
                                                className="h-8 w-8 shrink-0"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer variant="with-links" />
        </div>
    );
}
