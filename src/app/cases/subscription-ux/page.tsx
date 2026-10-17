import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Button, Container } from "@mahry/ds";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SubscriptionUX() {
    return (
        <>
            <main>
                <Header />
                <section className="flex items-center justify-center">
                    <Container className="max-w-3xl flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-heading-md">
                                    Subscription UX
                                </h2>
                                <p className="text-body-md text-fg-primary">
                                    Subscription-related support tickets were
                                    piling up and most of those could&apos;ve
                                    been resolved within the interface. Being
                                    within our Webflow+Memberstack setup, I
                                    redesigned the subscription page to give
                                    users more clarity about their
                                    subscriptions.
                                </p>
                                <p className="text-body-md text-fg-primary">
                                    <span className="font-semibold">Note:</span>{" "}
                                    Some screenshots in this case studies have
                                    been translated from Ukrainian to English
                                    for international portfolio presentation
                                    purposes.
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
                                        Q4 2024
                                    </p>
                                    <p className="text-body-sm font-semibold text-fg-success">
                                        -40% Support Tickets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
                                <div className="relative w-full aspect-[440/277.68]">
                                    <Image
                                        src="/images/subs/sub-ver-2-ua.webp"
                                        alt="Optimised version (Ukrainian UI)"
                                        priority={true}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </figure>
                            <figcaption className="text-caption-default text-fg-secondary">
                                Optimised version (Ukrainian UI)
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
                                    for digital specialists that offers a range
                                    of lectures from SMM to Design that help
                                    users update their skills to become more
                                    employable (one lecture = one skill). Apart
                                    from Lectures Library, it has an embedded
                                    UGC Library with a separate subscription,
                                    but managed within one personal account.
                                </p>
                                <p className="text-body-md text-fg-primary">
                                    Our support team experienced{" "}
                                    <span className="font-semibold">
                                        an increasing volume of basic
                                        subscription-related inquiries
                                    </span>{" "}
                                    due to users being unable to find essential
                                    information and manage their subscriptions
                                    effectively through the interface of the
                                    personal account.
                                </p>
                            </div>
                        </div>

                        {/* My role */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">My role</h4>
                            <p className="text-body-md text-fg-primary">
                                As a sole Product Designer, I led the process of
                                understanding the problem and finding a solution
                                that would conform either to our two-product
                                business model and to our technical limitations
                                with a low-code stack Webflow+Memberstack.
                            </p>
                        </div>

                        {/* Research */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">
                                Understanding the problem
                            </h4>
                            <div className="flex flex-col gap-2">
                                <p className="text-body-md text-fg-primary">
                                    I looked at the current &quot;Plan&quot;
                                    page in the Personal Account and identified
                                    key issues that might affect user
                                    experience:
                                </p>
                                <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                    <li>
                                        Inconsistent terminology between
                                        &quot;Plans&quot; and
                                        &quot;Subscription&quot;
                                    </li>
                                    <li>
                                        Multiple confusing buttons for
                                        subscription management
                                    </li>
                                    <li>
                                        Missing important details about
                                        subscription (dates, status)
                                    </li>
                                    <li>Poor information hierarchy</li>
                                    <li>Limited user guidance</li>
                                </ul>
                                <p className="text-body-md text-fg-primary">
                                    However, due to a technical constrains, we
                                    use a third-party services for subscriptions
                                    which makes us unable to create more smooth
                                    experience for users - they still need to
                                    access Stripe panel to change a payment
                                    method or check billing.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
                                <div className="relative w-full aspect-[440/277.68]">
                                    <Image
                                        src="/images/subs/problem.webp"
                                        alt="Identifying the reasons (English UI)"
                                        priority={true}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </figure>
                            <figcaption className="text-caption-default text-fg-secondary">
                                Identifying the reasons (English UI)
                            </figcaption>
                        </div>

                        {/* Solution */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Solution</h4>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <p className="text-body-md text-fg-primary">
                                        <span className="font-semibold">
                                            In our first iteration,
                                        </span>{" "}
                                        we sketched out a richer “My
                                        Subscription” page by{" "}
                                        <span className="font-semibold">
                                            testing a third-party solution on a
                                            free trial.
                                        </span>{" "}
                                        Users could see their plan name, status,
                                        start & renewal dates, and all
                                        management actions lived in one place.
                                        However, after reviewing costs, we
                                        decided the integration wasn&apos;t
                                        sustainable.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
                                            <div className="relative w-full aspect-[440/277.68]">
                                                <Image
                                                    src="/images/subs/sub-ver-1.webp"
                                                    alt="Iteration 1 (English UI)"
                                                    priority={true}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </figure>
                                        <figcaption className="text-caption-default text-fg-secondary">
                                            Iteration 1 (English UI)
                                        </figcaption>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-body-md text-fg-primary">
                                        <span className="font-semibold">
                                            In our second iteration,
                                        </span>{" "}
                                        after deciding not to purchase the paid
                                        extension, I focused purely on{" "}
                                        <span className="font-semibold">
                                            clarity and consistency.
                                        </span>{" "}
                                        I renamed the page &quot;My
                                        Subscription&quot;, unified terminology
                                        across the interface and rewrote the
                                        cancel buttons to explicitly say
                                        &quot;Cancel Plan - Lecture
                                        Library&quot; and &quot;Cancel Plan -
                                        UGC&quot;. All subscription controls now
                                        sit together under &quot;Advanced
                                        Settings&quot;, with a single
                                        &quot;Upgrade&quot; action below.
                                        Finally, I added a clear &quot;Contact
                                        support team&quot; link for corporate
                                        subscriptions.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <figure className="bg-container-brand p-3 rounded-2xl md:rounded-3xl">
                                            <div className="relative w-full aspect-[440/277.68]">
                                                <Image
                                                    src="/images/subs/sub-ver-2-eng.webp"
                                                    alt="Iteration 2 (English UI)"
                                                    priority={true}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </figure>
                                        <figcaption className="text-caption-default text-fg-secondary">
                                            Iteration 2 (English UI)
                                        </figcaption>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Outcome */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-heading-sm">Outcome</h4>
                            <ul className="list-disc list-outside pl-4 space-y-1 text-body-md text-fg-primary">
                                <li>
                                    Terminology unified across the interface for
                                    zero confusion
                                </li>
                                <li>
                                    &quot;Where&apos;s my renewal date?&quot;
                                    and &quot;How do I cancel?&quot; tickets{" "}
                                    <span className="font-semibold text-fg-success">
                                        fell by 40%
                                    </span>
                                </li>
                                <li>
                                    The streamlined flow{" "}
                                    <span className="font-semibold text-fg-success">
                                        saved ~2 hours/week of support time
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <Button
                            asChild
                            variant="tertiary"
                            className="w-full h-auto rounded-2xl p-4"
                        >
                            <Link href="/cases/job-board">
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-body-sm text-fg-secondary">
                                            Next Case
                                        </p>
                                        <h5 className="text-heading-sm text-action-on-tertiary">
                                            Job Board Integration
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
