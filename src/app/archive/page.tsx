import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Container,
    LinkItem,
} from "@mahry/ds";
import Footer from "@/components/site/footer";
import Header from "@/components/site/header";

const sectionLabel = "font-mono text-label-md uppercase text-fg-tertiary";

export default function ArchivePage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <Container variant="no-pt">
                    <div className="flex flex-col gap-4 lg:gap-5">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Archive</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h1 className="text-heading-lg text-fg-primary">
                            Archive
                        </h1>
                        <div className="grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
                            <section className="flex flex-col gap-2">
                                <h2 className={sectionLabel}>Case studies</h2>
                                <LinkItem
                                    asChild
                                    label="Lecture Library Migration"
                                    description="Moved lectures and accounts off a third-party platform, built the search and filters it lacked"
                                >
                                    <Link href="/cases/personal-account-migration">
                                        Lecture Library Migration
                                    </Link>
                                </LinkItem>
                                <LinkItem
                                    asChild
                                    label="Job Board"
                                    description="Added a job board to the lecture library with a related lecture on every vacancy"
                                >
                                    <Link href="/cases/job-board">
                                        Job Board
                                    </Link>
                                </LinkItem>
                                <LinkItem
                                    status="coming-soon"
                                    label="Metis"
                                    description="Designed a language flashcard app and co-built its published design system (not shipped)"
                                />
                                <LinkItem
                                    status="coming-soon"
                                    label="Two Platforms and One Subscription"
                                    description="Fitted a second brand into the design system and designed its landing, library and pricing"
                                />
                            </section>

                            <div className="flex flex-col gap-6">
                                <section className="flex flex-col gap-2">
                                    <h2 className={sectionLabel}>System</h2>
                                    <LinkItem
                                        status="coming-soon"
                                        label="Mahry DS"
                                        description="A token-driven design system in React and Tailwind, documented in Storybook"
                                    />
                                </section>
                                <section className="flex flex-col gap-2">
                                    <h2 className={sectionLabel}>Playground</h2>
                                    <LinkItem
                                        status="coming-soon"
                                        label="Spanish word of the day"
                                        description="Every day a new Spanish word with definition"
                                    />
                                </section>
                            </div>

                            <section className="flex flex-col gap-2">
                                <h2 className={sectionLabel}>Also built</h2>
                                <LinkItem
                                    asChild
                                    label="Nivroku"
                                    description="Built a Ukrainian creative agency’s website in Webflow, now design and ship its updates"
                                >
                                    <Link
                                        href="https://www.nivroku.co/"
                                        target="_blank"
                                    >
                                        Nivroku
                                    </Link>
                                </LinkItem>
                                <LinkItem
                                    asChild
                                    label="Gower Map"
                                    description="Designed and built an interactive map of the Gower Peninsula for a college project"
                                >
                                    <Link
                                        href="https://gowermap.webflow.io/"
                                        target="_blank"
                                    >
                                        Gower Map
                                    </Link>
                                </LinkItem>
                            </section>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer variant="with-links" />
        </div>
    );
}
