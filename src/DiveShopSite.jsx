import heroImg from "./assets/coral_reef_scuba_diver.jpg";
export default function DiveShopSite() {
  const SHOP_NAME = "Dive Connections";
  const SHOP_PHONE_DISPLAY = "(434) 964-9200";
  const SHOP_PHONE_TEL = "+14349649200";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* info banner */}
      <div className="bg-white/90 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-2 text-xs text-slate-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              Schedules change frequently.
            </span>
            <span className="hidden sm:inline">
              Please{" "}
              <a className="text-sky-700 underline" href={`tel:${SHOP_PHONE_TEL}`}>
                call to confirm
              </a>{" "}
              dates and reserve spots.
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a className="hover:text-sky-700" href={`tel:${SHOP_PHONE_TEL}`}>
              Call {SHOP_PHONE_DISPLAY}
            </a>
            <a className="hover:text-sky-700" href="#contact">Request info</a>
          </div>
        </div>
      </div>

      {/* sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">
              DC
            </div>
            <div>
              <p className="font-bold leading-tight">{SHOP_NAME}</p>
              <p className="text-xs text-slate-500 -mt-0.5">Learn • Explore • Protect</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#courses" className="hover:text-sky-600">Courses</a>
            <a href="#trips" className="hover:text-sky-600">Trips</a>
            <a href="#rentals" className="hover:text-sky-600">Rentals</a>
            <a href="#about" className="hover:text-sky-600">About</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
            <a
              href={`tel:${SHOP_PHONE_TEL}`}
              className="px-3 py-1.5 rounded-xl bg-sky-600 text-white hover:bg-sky-700"
            >
              Call to Book
            </a>
          </nav>

          <a
            href={`tel:${SHOP_PHONE_TEL}`}
            className="md:hidden px-3 py-1.5 rounded-xl bg-sky-600 text-white"
          >
            Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: headline + pitch + CTAs */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Dive in with confidence!
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Training, gear, and guided trips from certified pros in Charlottesville.
              Schedules are flexible and may change—please call to confirm availability.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${SHOP_PHONE_TEL}`}
                className="px-5 py-3 rounded-2xl bg-sky-600 text-white hover:bg-sky-700"
              >
                 Call to Book
              </a>

              <a
                href="#trips"
                className="px-5 py-3 rounded-2xl border border-slate-300 hover:border-sky-600 hover:text-sky-700"
              >
                See Trips
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              PADI & SSI certified • Rental packages • On-site service • Call {SHOP_PHONE_DISPLAY} to book
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-sky-200 shadow-xl overflow-hidden">
              <img
                alt="Underwater coral reef with divers"
                className="h-full w-full object-cover"
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </section>  
    </div>
  );
}