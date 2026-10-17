import Link from "next/link";
import { Container } from "@mahry/ds";
import Logo from "@/components/site/logo";

export default function Header() {
    return (
        <header className="w-full">
            <Container className="flex items-center gap-2">
                <Link href="/" aria-label="Maksym Hrytsenko, home">
                    <Logo />
                </Link>
                <div>
                    <p className="text-fg-primary text-label-md">
                        Maksym Hrytsenko
                    </p>
                    <p className="text-fg-secondary text-label-sm">
                        Product Designer
                    </p>
                </div>
            </Container>
        </header>
    );
}
