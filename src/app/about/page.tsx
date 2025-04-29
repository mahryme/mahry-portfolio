import { Container } from "@/components/container"
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Card from '@/components/shared/card';

export default function AboutMe() {
  return(
    <>
      <main className="flex-1 pb-16 md:pb-0 max-h md:min-h-[100dvh]">
        <Header />
        <Footer />
      </main>
    </>
  ) 
}