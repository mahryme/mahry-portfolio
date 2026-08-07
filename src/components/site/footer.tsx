import Link from "next/link";
import { IconButton } from "@mahry/ds";
import { Container } from "@/components/site/container";
import { Github, Linkedin } from "@/components/site/icons";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center flex-1 pb-16 md:pb-0">
            <Container variant="nav">
                <p className="max-w-[12.5rem] text-label-sm text-fg-tertiary">
                    Designed with curiosity by Maksym Hrytsenko ©2026
                </p>
                <div className="flex items-center gap-2">
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
                        <Link href="https://github.com/mahryme" target="_blank">
                            <Github className="h-5 w-5" />
                        </Link>
                    </IconButton>
                </div>
            </Container>
        </footer>
    );
}
