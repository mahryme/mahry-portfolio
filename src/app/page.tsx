import Link from "next/link";
import { Button, Container, IconButton, LinkItem } from "@mahry/ds";
import Footer from "@/components/site/footer";
import { Github, Linkedin } from "@/components/site/icons";
import Logo from "@/components/site/logo";

const sectionLabel = "font-mono text-label-md uppercase text-fg-tertiary";

export default function HomePage() {
    return (
        <div className="flex min-h-dvh flex-col">
            <main className="flex-1">
                <Container>
                    <div className="grid gap-5 lg:grid-cols-3 lg:items-start lg:gap-8">
                        <section className="flex flex-col gap-5 lg:gap-6">
                            <div className="flex gap-2">
                                <Logo />
                                <div>
                                    <p className="text-label-md text-fg-primary">
                                        Maksym Hrytsenko
                                    </p>
                                    <p className="text-label-sm text-fg-secondary">
                                        Product Designer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-label-lg text-fg-primary">
                                    I’m a product designer who works on digital
                                    products, platforms and the design systems
                                    behind them.
                                </h1>
                                <p className="text-body-sm text-fg-secondary">
                                    On{" "}
                                    <span className="font-medium text-fg-primary">
                                        The Instapreneurs
                                    </span>
                                    , an educational subscription platform,{" "}
                                    <br className="hidden lg:block" />I
                                    initiated and led the migration of users
                                    from a third-party service to own in-house
                                    built platform. It cut unresolved support
                                    tickets by 65%, and enabled opportunities
                                    for product upsale and user experience
                                    improvement.
                                </p>
                                <p className="text-body-sm text-fg-secondary">
                                    I’m the person who thinks in systems both in
                                    my everyday life and in work. I always look
                                    to optimise something — and sometimes it’s
                                    not my own workflow, but someone else’s or a
                                    team. If my system slips (that happens),
                                    it’s a learning curve and opportunity to
                                    rethink as a whole. Outside work, same
                                    approach holds in my endurance training and
                                    learning Spanish day to day.
                                </p>
                                <p className="text-body-sm text-fg-secondary">
                                    Along the way, I’ve been interested in
                                    implementing my own ideas: started with
                                    no-code in Webflow, then React and Next.js.
                                    Now I am growing as a design engineer,
                                    curious about how design systems work and
                                    how to optimise them with the tools
                                    available.
                                </p>
                            </div>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h2 className={sectionLabel}>Featured</h2>
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
                                <Link href="/cases/job-board">Job Board</Link>
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
                                <h2 className={sectionLabel}>Also</h2>
                                <LinkItem
                                    asChild
                                    label="Archive"
                                    description="Older and smaller projects, all in one place"
                                >
                                    <Link href="/archive">Archive</Link>
                                </LinkItem>
                                <LinkItem
                                    status="coming-soon"
                                    label="Mahry DS"
                                    description="A token-driven design system in React and Tailwind, documented in Storybook"
                                />
                                <LinkItem
                                    status="coming-soon"
                                    label="Playground"
                                    description="Small prototypes built to stress-test the design system"
                                />
                            </section>
                            <section className="flex flex-col gap-1 lg:gap-3">
                                <h2 className={sectionLabel}>Socials</h2>
                                <div className="flex items-center gap-2">
                                    <Button
                                        asChild
                                        variant="primary"
                                        className="order-last flex-1 justify-center lg:order-first lg:flex-none"
                                    >
                                        <Link
                                            href="https://www.linkedin.com/in/mahryme/"
                                            target="_blank"
                                        >
                                            Say hi!
                                        </Link>
                                    </Button>
                                    <IconButton
                                        asChild
                                        variant="tertiary"
                                        icon={<Linkedin className="h-5 w-5" />}
                                        label="LinkedIn"
                                    >
                                        <Link
                                            href="https://www.linkedin.com/in/mahryme/"
                                            target="_blank"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    </IconButton>
                                    <IconButton
                                        asChild
                                        variant="tertiary"
                                        icon={<Github className="h-5 w-5" />}
                                        label="GitHub"
                                    >
                                        <Link
                                            href="https://github.com/mahryme"
                                            target="_blank"
                                        >
                                            <Github className="h-5 w-5" />
                                        </Link>
                                    </IconButton>
                                </div>
                            </section>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
