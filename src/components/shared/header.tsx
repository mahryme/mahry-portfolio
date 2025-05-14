"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from "@/components/container"
import { ArrowUpRight} from 'lucide-react'
import { Metis } from "@/components/shared/icons"

export default function Header () {
    return (
        <>
            <header className="w-full flex items-center justify-center">
                <Container variant="nav">
                    <div className="flex gap-2">
                        <Link href="/">
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-action-accent border-action-accent-border border-2 shadow-xs transition-all duration-400 ease-out hover:shadow-none hover:bg-action-accent-hovered">
                                <div className="h-5 w-5 rounded-full bg-cont-primary border-border-accent border-2"></div>
                            </div>
                        </Link>
                        <div className="space-y-0">
                            <p className="text-text-primary text-label-lg font-semibold">Maksym Hrytsenko</p>
                            <p className="text-text-secondary text-label-s font-semibold">Product Designer</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            <Button asChild variant="ghost" size="default">
                                <Link href="https://metis.works/" target="_blank" className="items-center gap-1">
                                    <Metis className="h-5 w-5"/>
                                    Metis
                                    <ArrowUpRight className="w-6 h-6 text-text-secondary -ml-1"/>
                                </Link>
                            </Button>
                        </div>
                        <Link href="/contact">
                            <Button variant="accent">
                                <span>Let&apos;s connect!</span>
                            </Button>
                        </Link>
                    </div>
                </Container>
            </header>

            <nav className="fixed bottom-0 left-0 z-10 w-full bg-cont-primary border-t shadow-lg border-border-default md:hidden">
                <div className="flex items-center justify-between px-5 py-4 gap-1">
                    <div className="w-full flex gap-1">
                        <Button asChild variant="ghost" size="default">
                            <Link href="https://metis.works/" target="_blank" className="items-center gap-1">
                            <Metis className="h-5 w-5"/>
                                Metis
                                <ArrowUpRight className="w-6 h-6 text-text-secondary -ml-1"/>
                            </Link>
                        </Button>
                    </div>
                    <Button asChild variant="accent" size="default">
                        <Link href="https://www.linkedin.com/in/mahry00/" target="_blank">
                            Let&apos;s connect!
                        </Link>
                    </Button>
                </div>
            </nav>
        </>
    )
}