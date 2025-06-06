import { Container } from "@/components/container";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider, Slide } from "@/components/shared/slider";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import React from "react";

export default function CarTest() {
    return (
        <>
            <main>
                <Header />
                <section className="flex items-center justify-center">
                    <Container variant="blog" className="flex flex-col gap-8">
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem>...</CarouselItem>
                                <CarouselItem>...</CarouselItem>
                                <CarouselItem>...</CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
