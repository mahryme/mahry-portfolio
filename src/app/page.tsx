import { Container } from "@/components/container"
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Card from '@/components/shared/card';

export default function HomePage() {
  return(
    <>
      <main className="flex-1 pb-16 md:pb-0 max-h md:min-h-[100dvh]">
        <Header />
        <section className="flex items-center justify-center">
          <Container>
            <div className="max-w-2xl flex flex-col gap-3">
              <h2 className="text-h2 font-semibold">Hi 👋 I’m a product designer who loves building systems and helping things grow</h2>
              <p className="text-body-lg font-regular">Besides, I’m learning Next.js, co-building Metis, running, mastering Spanish and keeping up with sport :)</p>
            </div>
          </Container>
        </section>
        <section className="flex items-center justify-center">
          <Container>
            <div className="flex flex-col gap-4">
              <h4 className="text-h4 font-semibold">Cases</h4>
              <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                <Card
                  imageSrc="/covers/dashboard.svg"
                  title="Designing a Unified Personal Account"
                  subtitle="Built an in-house personal account to streamline UX and reduce support tickets by 65%"
                  tags={["UX", "Design System", "Product Strategy"]}
                  href="/projects/unified-personal-account"
                />
                <Card
                  title="Job Board"
                  subtitle="Built an in-house personal account to streamline UX and reduce support tickets by 65%"
                  tags={["UX", "Design System", "Product Strategy"]}
                  href="/projects/job-board"
                />
                <Card
                  title="Settings"
                  subtitle="Built an in-house personal account to streamline UX and reduce support tickets by 65%"
                  tags={["UX", "Design System", "Product Strategy"]}
                  href="/projects/unified-personal-account"
                />
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </main>
    </>
  ) 
}


