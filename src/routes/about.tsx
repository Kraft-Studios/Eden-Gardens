import { createFileRoute } from "@tanstack/react-router";
import { EditorialSection } from "@/components/site/EditorialSection";
import { PullQuote } from "@/components/site/PullQuote";
import { SERVICES } from "@/content/site";
import { Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import durban3 from "@/assets/durban3.jpg";
import heroOne from "@/assets/hero-1.png";
import garden2 from "@/assets/garden2.jpg";
import flower3 from "@/assets/flower3.png";
import careVisit from "@/assets/care-visit.jpg";
import ours from "@/assets/ours.jpg";
import sticker from "@/assets/sticker.jpg";
import workersGroup from "@/assets/workers3jpg.jpg";
import workerCompost from "@/assets/workers4.jpg";
import hedgeWorker from "@/assets/hedgetrim2.jpg";
import ourcars from "@/assets/ourcars.jpg";
import ourcars2 from "@/assets/ourcars2.jpg";

const TITLE = "About | Eden Gardens";
const DESCRIPTION =
  "Eden Gardens is a local garden care team on the KwaZulu-Natal south coast, focused on reliable visits, careful workmanship and outdoor spaces that stay neat all year.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  {
    title: "Reliable, scheduled visits",
    detail: "We show up when we say we will, on a consistent schedule your garden can count on.",
  },
  {
    title: "Consistent, careful workmanship",
    detail: "The same standard of care applied every visit, not just when things look overgrown.",
  },
  {
    title: "Local, community-based service",
    detail:
      "A team that works within our local community and gets to know each garden it looks after.",
  },
  {
    title: "Pride in the finished result",
    detail:
      "Every visit ends with a clean, well-finished garden — that's the standard we hold ourselves to.",
  },
] as const;

function AboutPage() {
  return (
    <>
      {/* INTRODUCTION */}
      <section className="relative overflow-hidden bg-[var(--footer-bg)]">
        <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-16 text-center lg:pt-20">
          <p className="eyebrow text-cream/70">About Eden Gardens</p>
          <h1 className="display-xl mt-4 text-cream">
            A Garden Care Team You Can Rely On
          </h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <EditorialSection
        eyebrow="Who We Are"
        heading="Professional Garden Care, Done Properly"
        content={
          <>
            <p className="service-refined-copy text-base leading-relaxed text-foreground">
              Eden Gardens Services is a garden maintenance business serving the South Coast of
              KwaZulu-Natal. We provide practical, reliable garden care for homeowners and
              properties that want their outdoor spaces to look clean, healthy and well maintained.
            </p>
            <p className="service-refined-copy mt-4 text-base leading-relaxed text-foreground">
              From <strong className="font-semibold">lawn mowing and hedge trimming to weeding, bed care and tree felling</strong>, we take care of the work that keeps a garden looking its best. Our approach is simple: understand what your garden needs, pay attention to the details, and leave the space looking properly cared for.
            </p>
            <h3 className="service-refined-heading mt-8 text-xl text-foreground sm:text-2xl">More Than Just Garden Maintenance</h3>
            <p className="service-refined-copy mt-3 text-base leading-relaxed text-foreground">
              A well-kept garden is made up of more than a freshly cut lawn. It is the clean edges,
              controlled hedges, cared-for beds, managed growth and attention to the details that
              bring everything together.
            </p>
            <p className="service-refined-copy mt-4 text-base leading-relaxed text-foreground">
              That is why we look at the garden as a whole. Whether it needs regular maintenance, a
              tidy-up or more involved work such as tree felling, our goal is to provide a professional
              service that makes your outdoor space easier to enjoy and maintain.
            </p>
            <h3 className="service-refined-heading mt-8 text-xl text-foreground sm:text-2xl">Built Around Quality and Care</h3>
            <p className="service-refined-copy mt-3 text-base leading-relaxed text-foreground">
              We believe good garden care comes down to consistency, attention to detail and pride in
              the finished result. From the first cut to the final clean-up, we aim to leave every garden
              looking neat, presentable and cared for.
            </p>
            <p className="service-refined-copy mt-5 text-base font-semibold leading-relaxed text-foreground">
              Eden Gardens Services — everything your garden needs, taken care of professionally.
            </p>
          </>
        }
        body="Most of what we do is ordinary, regular work — mowing, edging, trimming, tidying. Doing that work well, visit after visit, is what keeps a garden looking cared for. That is the standard we hold ourselves to, whether it is a small home lawn or a larger outdoor area."
        image={aboutImg}
        imageAlt="Garden maintenance equipment on a trailer beside a well-kept South African garden"
        imageWidth={1408}
        imageHeight={1104}
        tone="cream"
        reverse
        darkHeading
      />

      {/* THE PEOPLE BEHIND THE WORK */}
      <section className="relative z-30 overflow-hidden bg-[var(--footer-bg)] watermark-dark">
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-cream/70">The People Behind The Work</p>
            <h2 className="display-lg mt-4 text-cream">
              Not A Call Centre
            </h2>
            <p className="prose-body mt-5 max-w-xl text-body-dark">
              Eden Gardens is a small, local team. The same people arrive at your garden each visit,
              in the same branded vehicle, and get to know the space — rather than a different crew
              showing up every time.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            <img
              src={workerCompost}
              alt="An Eden Gardens team member at work with garden tools"
              width={600}
              height={900}
              loading="lazy"
              style={{ objectPosition: "center 30%" }}
              className="photo-editorial col-span-2 aspect-[16/9] w-full rounded-2xl object-cover lg:col-span-1 lg:aspect-[4/3]"
            />
            <img
              src={hedgeWorker}
              alt="A team member trimming a hedge with a petrol hedge trimmer"
              width={736}
              height={1104}
              loading="lazy"
              style={{ objectPosition: "75% 60%" }}
              className="photo-editorial aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <img
              src={workersGroup}
              alt="Four Eden Gardens team members in uniform, standing together in a garden"
              width={736}
              height={1104}
              loading="lazy"
              style={{ objectPosition: "50% 75%" }}
              className="photo-editorial aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY WE CARE */}
      <PullQuote
        eyebrow="Our Philosophy"
        quote="A garden looks its best when the same team returns, knows the space, and takes care of it properly — every time, not just when it's overgrown."
      />

      {/* OUR APPROACH */}
      <section className="relative z-30 overflow-hidden bg-cream">
        <div className="flex h-[290px] w-full">
          <img
            src={heroOne}
            alt="Eden Gardens team at work in a South African garden"
            loading="lazy"
            className="h-full w-1/3 object-cover"
          />
          <img
            src={durban3}
            alt="A landscaped Durban garden"
            loading="lazy"
            className="h-full w-1/3 object-cover"
          />
          <img
            src={garden2}
            alt="A well-maintained garden bed"
            loading="lazy"
            className="h-full w-1/3 object-cover"
          />
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative z-30 overflow-hidden bg-cream">
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-14 pt-8 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">How We Work</p>
            <h2 className="display-lg mt-4 text-[var(--heading-foreground)]">
              Five Parts To Every Garden
            </h2>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.number} className="border-t border-border pt-6">
                <p className="text-sm font-bold tracking-wide text-primary/70">{service.number}</p>
                <h3 className="display-md mt-2 text-foreground">{service.title}</h3>
                <p className="prose-body mt-3 text-body-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTENTION TO DETAIL */}
      <section className="relative z-30 overflow-hidden bg-[var(--footer-bg)]">
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="eyebrow text-primary">Attention To Detail</p>
              <h2 className="display-lg mt-4 max-w-md text-cream">
                The Small Things That Change Everything
              </h2>
              <p className="service-refined-copy mt-5 max-w-md text-base leading-relaxed text-cream">
                Neat edges, consistent grass height and a well-maintained garden can completely
                change the appearance of an outdoor space. We pay attention to the small details
                that turn routine lawn care into a professional finish.
              </p>

              <div className="mt-8 max-w-md border-t border-cream/15 pt-8">
                <p className="eyebrow text-primary">Our Values</p>
                <h3 className="service-refined-heading mt-3 text-2xl text-cream sm:text-3xl">
                  What We Hold Ourselves To
                </h3>
                <ul className="service-refined-copy mt-5 space-y-4 text-base leading-relaxed text-cream">
                  {VALUES.map((value) => (
                    <li key={value.title}>
                      <span className="text-cream">{value.title}</span> — {value.detail}
                    </li>
                  ))}
                </ul>
                <p className="service-refined-copy mt-6 text-base leading-relaxed text-cream">
                  Want to know more about how we work?{" "}
                  <Link
                    to="/services"
                    className="font-bold text-primary underline underline-offset-4 hover:text-accent-green"
                  >
                    See our services
                  </Link>{" "}
                  or{" "}
                  <Link
                    to="/contact"
                    className="font-bold text-primary underline underline-offset-4 hover:text-accent-green"
                  >
                    get in touch
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="order-1 grid grid-cols-2 gap-3 lg:order-2 lg:gap-4">
              <img
                src={careVisit}
                alt="Gloved hands trimming a green hedge with garden shears"
                width={1408}
                height={1008}
                loading="lazy"
                className="photo-editorial col-span-2 aspect-[16/9] w-full rounded-2xl object-cover"
              />
              <img
                src={ours}
                alt="A close-up of a flower bed with fresh mulch at golden hour"
                width={736}
                height={979}
                loading="lazy"
                className="photo-detail aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <img
                src={sticker}
                alt="A gardener trimming the edge of a paved garden path"
                width={1000}
                height={1331}
                loading="lazy"
                className="photo-detail aspect-[3/4] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VEHICLES — WE COME TO YOU */}
      <section className="relative z-30 overflow-hidden bg-cream">
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-14 pt-8 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">We Come To You</p>
            <h2 className="display-lg mt-4 text-[var(--heading-foreground)]">
              Our Vehicles
            </h2>
            <p className="prose-body mt-5 max-w-xl text-body-light">
              A mobile, equipped team means we can keep to a schedule and carry what a garden needs
              — from mowers to tree-felling tools — to every visit.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
            <img
              src={ourcars}
              alt="The Eden Gardens branded company vehicle parked on-site, loaded with garden tools"
              width={2048}
              height={923}
              loading="lazy"
              className="photo-editorial aspect-[16/9] w-full rounded-2xl object-cover"
            />
            <img
              src={ourcars2}
              alt="A close-up of the Eden Gardens branded company vehicle showing its logo and contact details"
              width={2048}
              height={923}
              loading="lazy"
              className="photo-editorial aspect-[16/9] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* THE RESULTS */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden">
        <img
          src={flower3}
          alt="A well-kept flower bed in a South African garden"
          width={1920}
          height={1280}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--green-deep) 35%, transparent) 45%, color-mix(in oklab, var(--green-deep) 90%, transparent) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <div className="ml-auto max-w-lg text-right">
            <p
              className="eyebrow text-cream/70"
              style={{ textShadow: "0 2px 12px rgba(4, 10, 6, 0.5)" }}
            >
              The Results
            </p>
            <h2
              className="display-lg mt-4 text-cream"
              style={{ textShadow: "0 2px 20px rgba(4, 10, 6, 0.5)" }}
            >
              A Well-Kept Garden Speaks For Itself
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
