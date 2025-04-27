import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from "@/components/container"

export default function Footer () {
    return (
        <footer className="flex items-center justify-center">
            <Container variant="nav">
                <p className="max-w-[12.5rem] text-body-xs font-semibold text-text-tertiary">Designed with curiosity by Maksym Hrytsenko © 2025</p>
                <div className="flex items-center gap-2">
                    <Button asChild variant="icon" size="icon">
                        <Link href="https://www.linkedin.com/in/maksymhrytsenko/" target="_blank">
                            L
                        </Link>
                    </Button>
                    <Button asChild variant="icon" size="icon">
                        <Link href="https://github.com/mahry00" target="_blank">
                            G
                        </Link>
                    </Button>
                </div>
            </Container>
        </footer>
    )
}