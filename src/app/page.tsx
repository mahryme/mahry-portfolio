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
              <h2 className="text-h2 font-semibold">Hi 👋 I&apos;m a product designer who loves building systems and helping things grow</h2>
              <p className="text-body-lg font-regular">I&apos;m passionate about designing cool things that work and make an impact. Also, I&apos;m learning Next.js to code my own prototypes and systems.</p>
            </div>
          </Container>
        </section>
        <section className="flex items-center justify-center">
          <Container>
            <div className="flex flex-col gap-4">
              <h4 className="text-h4 font-semibold">Cases</h4>
              <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                <Card
                  imageSrc="/covers/job-board-cover.webp"
                  title="Job Board Integration"
                  subtitle="Embedded a job board into a growing lecture library to drive lecture upsells - 64 live vacancies and a 15% click-through rate to related lectures"
                  tags={["Product", "Q1-Q2 2025"]}
                  href="/cases/job-board"
                />
                <Card
                  imageSrc="/covers/account-cover.webp"
                  title="Personal Account Migration"
                  subtitle="Moved off Kwiga to Webflow + Memberstack - cutting third-party dependency and enabling analytics, content discovery and UGC monetisation"
                  tags={["Product", "H2 2024"]}
                  href="/cases/personal-account-migration"
                />
                <Card
                  imageSrc="/images/subs/sub-ver-2-eng.webp"
                  title="Subscription UX"
                  subtitle="Optimised a subscription management page to reduce subscription-related support tickets by 44% within low-code stack limitations"
                  tags={["Product", "Q4 2024"]}
                  href="/cases/subscription-ux"
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


