import Link from "next/link";
import { Button, Container, IconButton } from "@mahry/ds";
import { Github, Linkedin } from "@/components/site/icons";
import { cn } from "@/lib/utils";

type FooterProps = {
    variant?: "default" | "with-links";
};

export default function Footer({ variant = "default" }: FooterProps) {
    const hasLinks = variant === "with-links";

    return (
        <footer
            className={cn(
                "w-full",
                hasLinks &&
                    "sticky bottom-0 z-10 border-t border-border-tertiary bg-surface-default",
            )}
        >
            <Container className="flex items-center justify-between py-4 md:py-6">
                <p className="text-label-sm text-fg-tertiary whitespace-nowrap">
                    © 2026 Maksym Hrytsenko
                </p>
                {hasLinks && (
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
                            <Link
                                href="https://github.com/mahryme"
                                target="_blank"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </IconButton>
                        <Button asChild variant="primary">
                            <Link
                                href="https://www.linkedin.com/in/mahryme/"
                                target="_blank"
                            >
                                Say hi!
                            </Link>
                        </Button>
                    </div>
                )}
            </Container>
        </footer>
    );
}
