"use client";

import Link from "next/link";
import { Button, Container } from "@mahry/ds";

export default function Header() {
    return (
        <>
            <header className="w-full flex items-center justify-center">
                <Container type="nav" className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <Link href="/">
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-action-primary border-border-focus border-2 shadow-2xs transition-all duration-400 ease-out hover:shadow-none hover:bg-action-primary-hover">
                                <div className="h-5 w-5 rounded-full bg-container-high border-border-focus border-2"></div>
                            </div>
                        </Link>
                        <div className="space-y-0">
                            <p className="text-fg-primary text-label-md">
                                Maksym Hrytsenko
                            </p>
                            <p className="text-fg-secondary text-label-sm">
                                Product Designer
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            <Button asChild variant="ghost">
                                <Link
                                    href="/about"
                                    className="items-center gap-1"
                                >
                                    About me
                                </Link>
                            </Button>
                        </div>
                        <Button asChild variant="primary">
                            <Link
                                href="https://www.linkedin.com/in/mahry00/"
                                target="_blank"
                            >
                                Let&apos;s connect!
                            </Link>
                        </Button>
                    </div>
                </Container>
            </header>

            <nav className="fixed bottom-0 left-0 z-10 w-full bg-container-high border-t shadow-lg border-border-secondary md:hidden">
                <div className="flex items-center justify-between px-5 py-4 gap-1">
                    <div className="w-full flex gap-1">
                        <Button asChild variant="ghost">
                            <Link href="/about" className="items-center gap-1">
                                About me
                            </Link>
                        </Button>
                    </div>
                    <Button asChild variant="primary">
                        <Link
                            href="https://www.linkedin.com/in/mahryme/"
                            target="_blank"
                        >
                            Let&apos;s connect!
                        </Link>
                    </Button>
                </div>
            </nav>
        </>
    );
}
