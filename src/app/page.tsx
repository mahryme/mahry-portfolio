import Link from "next/link";
import { Button, Container, IconButton, LinkItem } from "@mahry/ds";
import Footer from "@/components/site/footer";
import { Github, Linkedin } from "@/components/site/icons";
import Logo from "@/components/site/logo";

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
                                    I&apos;m a product designer who works on
                                    digital products and the design systems
                                    behind them.
                                </h1>
                                <p className="text-body-sm text-fg-secondary">
                                    I&apos;m meticulous and I like things
                                    organised, which is why I like design
                                    systems. I&apos;m always looking to optimise
                                    either my workflow or the team&apos;s, and I
                                    make room for other perspectives along the
                                    way. I take failures as an opportunity to
                                    learn and grow by rethinking holistically.
                                    Outside work, this approach holds in my
                                    endurance training and in learning Spanish.
                                </p>
                                <p className="text-body-sm text-fg-secondary">
                                    At <span>The Instapreneurs</span>, a
                                    subscription learning platform, I was the{" "}
                                    <span className="text-label-md text-fg-primary">
                                        sole product designer
                                    </span>{" "}
                                    when we moved lectures and accounts off a
                                    third-party platform. I argued for the move,
                                    pitched it to the founder and{" "}
                                    <span className="text-label-md text-fg-primary">
                                        designed it end to end
                                    </span>
                                    . As a result, "How do I find access?"
                                    dropped out of support&apos;s top requests
                                    from October. I learnt that moving users
                                    across was harder for them than for us.
                                </p>
                                <p className="text-body-sm text-fg-secondary">
                                    I started with no-code in Webflow and moved
                                    to React and Next.js. Now I&apos;m{" "}
                                    <span className="text-label-md text-fg-primary">
                                        growing as a design engineer
                                    </span>
                                    . I&apos;m building my own design system,{" "}
                                    <span>Mahry DS</span>, to see how far I can
                                    optimise one with the tools available. I'm
                                    also studying User Experience at the
                                    University of the Arts London.
                                </p>
                            </div>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h2 className="label-mono">Featured</h2>
                            <LinkItem
                                asChild
                                label="Lecture Library Migration"
                                description="Moved lectures and accounts off a third-party platform, built the search and filters it lacked"
                            >
                                <Link href="/cases/lecture-library-migration">
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
                                <h2 className="label-mono">Also</h2>
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
                                <h2 className="label-mono">Socials</h2>
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
