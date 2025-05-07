import { Container } from "@/components/container"
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Card from '@/components/shared/card';

export default function HomePage() {
  return(
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
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
                  title="Job Board"
                  subtitle="Built an in-house personal account to streamline UX and reduce support tickets by 65%"
                  tags={["UX", "Design System", "Product Strategy"]}
                  href="/projects/job-board"
                />
                <Card
                  imageSrc="/covers/dashboard.svg"
                  title="Unified Personal Account Migration"
                  subtitle="Migrated our account flows out of Kwiga into a custom Webflow + Memberstack setup - cutting support tickets by 65%"
                  tags={["Product Design", "Ukrainian UI", "H2 2024"]}
                  href="/projects/unified-personal-account"
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


