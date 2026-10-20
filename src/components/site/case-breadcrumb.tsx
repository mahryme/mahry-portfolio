"use client";

import { Fragment, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@mahry/ds";

type Crumb = { label: string; href: string };

const origins: Record<string, Crumb> = {
    archive: { label: "Archive", href: "/archive" },
};

const home: Crumb = { label: "Home", href: "/" };

function Trail({ trail, current }: { trail: Crumb[]; current: string }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {trail.map((crumb) => (
                    <Fragment key={crumb.href}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={crumb.href}>{crumb.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </Fragment>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{current}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}

function OriginAwareTrail({ current }: { current: string }) {
    const from = useSearchParams().get("from");
    const origin = from ? origins[from] : undefined;

    return <Trail trail={origin ? [home, origin] : [home]} current={current} />;
}

export default function CaseBreadcrumb({ current }: { current: string }) {
    return (
        <Suspense fallback={<Trail trail={[home]} current={current} />}>
            <OriginAwareTrail current={current} />
        </Suspense>
    );
}
