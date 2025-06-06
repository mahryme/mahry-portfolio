import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Github, Linkedin } from "@/components/shared/icons";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center flex-1 pb-16 md:pb-0">
            <Container variant="nav">
                <p className="max-w-[12.5rem] text-body-xs font-semibold text-text-tertiary">
                    Designed with curiosity by Maksym Hrytsenko © 2025
                </p>
                <div className="flex items-center gap-2">
                    <Button asChild variant="icon" size="icon">
                        <Link
                            href="https://www.linkedin.com/in/mahry00/"
                            target="_blank"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="icon" size="icon">
                        <Link href="https://github.com/mahry00" target="_blank">
                            <Github className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </footer>
    );
}
