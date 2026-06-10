import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Camera, MapPin, Phone, Instagram, Sparkles, Truck, Heart, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import heroImg from "@/assets/hero.jpg";
import g9xAsset from "@/assets/g9x.png.asset.json";
import eos4000dAsset from "@/assets/eos4000d.png.asset.json";
import nikonAsset from "@/assets/nikonl120.png.asset.json";
const g9xImg = g9xAsset.url;
const eos4000dImg = eos4000dAsset.url;
const nikonImg = nikonAsset.url;
import client11 from "@/assets/clients/client-11.png.asset.json";
import client12 from "@/assets/clients/client-12.png.asset.json";
import client13 from "@/assets/clients/client-13.png.asset.json";
import client14 from "@/assets/clients/client-14.png.asset.json";
import client15 from "@/assets/clients/client-15.png.asset.json";
import client16 from "@/assets/clients/client-16.png.asset.json";

const G9X = "Canon G9X Mark II";
const EOS = "Canon EOS 4000D";

// סדר התצוגה במסונרי (RTL, 3 עמודות): ימין למעלה→למטה, אמצע למעלה→למטה, שמאל למעלה→למטה
const clients = [
  { img: client11, camera: G9X }, // ימין למעלה
  { img: client15, camera: EOS }, // ימין למטה
  { img: client12, camera: EOS }, // אמצע למעלה
  { img: client14, camera: G9X }, // אמצע למטה
  { img: client16, camera: G9X }, // שמאל למעלה
  { img: client13, camera: G9X }, // שמאל למטה
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camera for Rent · השכרת מצלמות by Tahel Hamra" },
      { name: "description", content: "השכרת מצלמות אסתטית ואיכותית — Canon G9X, EOS 4000D, Nikon L120. מצליח, רמלה והסביבה. משלוחים זמינים." },
      { property: "og:title", content: "Camera for Rent by Tahel Hamra" },
      { property: "og:description", content: "מצלמות להשכרה לאירועים, מסיבות וטיולים." },
    ],
  }),
  component: Index,
});

const cameras = [
  {
    name: "Canon G9X Mark II",
    tag: "קומפקטית · יומיומית",
    img: g9xImg,
    desc: "מצלמה קטנה וקומפקטית, איכות תמונה גבוהה מאוד, צילום וידאו ומסך טאץ׳. מושלמת לטיולים, מסיבות וצילומים יומיומיים. נכנסת לכיס, קלה ונוחה לשימוש.",
  },
  {
    name: "Canon EOS 4000D",
    tag: "DSLR מקצועית",
    img: eos4000dImg,
    desc: "מצלמת DSLR מקצועית עם עדשה גדולה ואיכות גבוהה. מתאימה לצילומי פורטרטים, אירועים ותוכן איכותי שדורש את הטוב ביותר.",
  },
  {
    name: "Nikon Coolpix L120",
    tag: "זום עוצמתי",
    img: nikonImg,
    desc: "מצלמה עם זום חזק במיוחד, מתקרבת רחוק בלי לאבד איכות. קלה לשימוש בסטייל דיגיטלית פשוטה. מושלמת לטיולים, טבע וצילומים מרחוק.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-20">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2 text-foreground/80">
            <Camera className="w-5 h-5" strokeWidth={1.4} />
            <span className="text-xs tracking-[0.3em] uppercase">Tahel Hamra</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#cameras" className="hover:text-primary transition">המצלמות</a>
            <a href="#how" className="hover:text-primary transition">איך זה עובד</a>
            <a href="#contact" className="hover:text-primary transition">צרו קשר</a>
          </div>
          <a href="tel:0507755668" className="hidden md:inline-flex items-center gap-2 text-sm border border-foreground/20 rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition">
            <Phone className="w-3.5 h-3.5" /> 050-775-5668
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[100vh] items-center">
          <div className="px-6 md:px-16 py-32 md:py-0 order-2 md:order-1">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Camera for rent</p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6">
              רגעים יפים<br />
              <span className="italic text-primary">ראויים למצלמה אמיתית.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              השכרת מצלמות איכותיות לאירועים, טיולים ומסיבות.
              שירות אישי, מחירים הוגנים, ומלא רגעים יפים שמחכים להיתפס.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cameras" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm hover:opacity-90 transition">
                <Sparkles className="w-4 h-4" /> בחרו מצלמה
              </a>
              <a href="https://www.instagram.com/camera_for_rent1/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-foreground/20 rounded-full px-6 py-3 text-sm hover:bg-foreground/5 transition">
                <Instagram className="w-4 h-4" /> DM להזמנות
              </a>
            </div>
            <div className="flex items-center gap-6 mt-12 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> מצליח · רמלה</span>
              <span className="flex items-center gap-2"><Truck className="w-3.5 h-3.5" /> משלוחים זמינים</span>
            </div>
          </div>
          <div className="relative order-1 md:order-2 h-[55vh] md:h-screen">
            <img src={heroImg} alt="מצלמה אסתטית עם פרחים" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/40 md:to-background/60" />
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-border bg-secondary/40 py-5 overflow-hidden">
        <div className="flex items-center justify-around text-xs tracking-[0.3em] uppercase text-foreground/70 gap-8 whitespace-nowrap px-6">
          <span>· Canon G9X ·</span>
          <span className="hidden sm:inline">· EOS 4000D ·</span>
          <span>· Nikon L120 ·</span>
          <span className="hidden sm:inline">· משלוחים ·</span>
          <span>· מצליח / רמלה ·</span>
        </div>
      </div>

      {/* CAMERAS */}
      <section id="cameras" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">The Collection</p>
          <h2 className="text-4xl md:text-5xl mb-4">המצלמות שלנו</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">שלוש מצלמות, שלושה סגנונות — בחרו את זו שמתאימה בדיוק לרגע שלכם.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {cameras.map((c) => (
            <article key={c.name} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-blush aspect-square mb-6">
                <img src={c.img} alt={c.name} width={900} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">{c.tag}</p>
              <h3 className="text-2xl mb-3">{c.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-secondary/40 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl">איך זה עובד?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", t: "שולחים DM", d: "פונים אלינו באינסטגרם או בוואטסאפ עם התאריך וסוג המצלמה הרצויה." },
              { n: "02", t: "מקבלים הצעה", d: "נשמח להתאים לכם בדיוק את המצלמה הנכונה והמחיר ההוגן." },
              { n: "03", t: "מקבלים את הציוד", d: "ביום ההשכרה — הסבר ברור ופשוט על השימוש, וכל הציוד המלווה." },
              { n: "04", t: "מצלמים רגעים", d: "אתם נהנים, מצלמים, ומחזירים בסוף. ליווי אישי לכל אורך הדרך." },
            ].map((s) => (
              <div key={s.n} className="text-center md:text-right">
                <div className="text-4xl text-primary/40 mb-3 font-serif">{s.n}</div>
                <h3 className="text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">What's included</p>
            <h2 className="text-4xl md:text-5xl mb-6">מגיע אליכם<br /><span className="italic">עם הכל.</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              כל מצלמה מגיעה עם הציוד המלא שצריך כדי להתחיל מיד — בלי דאגות, בלי הפתעות.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              { i: "🔌", t: "מטען מקורי", d: "להישאר טעונים לאורך כל האירוע." },
              { i: "📱", t: "מתאם להעברת תמונות", d: "ישירות לנייד שלכם." },
              { i: "💌", t: "ליווי אישי", d: "אנחנו זמינים בצ׳אט לכל שאלה או תקלה." },
              { i: "✨", t: "הסבר מלא לפני שימוש", d: "תצאו לדרך בביטחון." },
            ].map((item) => (
              <li key={item.t} className="flex gap-4 pb-5 border-b border-border last:border-0">
                <span className="text-2xl">{item.i}</span>
                <div>
                  <h4 className="text-base mb-1 font-medium">{item.t}</h4>
                  <p className="text-sm text-muted-foreground">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLIENTS — masonry gallery */}
      <section id="clients" className="bg-secondary/30 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Our clients</p>
            <h2 className="text-4xl md:text-5xl mb-4">הלקוחות שלנו</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">רגעים אמיתיים שנתפסו במצלמות שלנו — תודה לכל מי שבחר בנו.</p>
          </div>

          <RevealGallery />


          <div className="text-center mt-12">
            <a href="https://www.instagram.com/camera_for_rent1/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border border-foreground/20 rounded-full px-6 py-3 hover:bg-foreground hover:text-background transition">
              <Instagram className="w-4 h-4" /> עוד באינסטגרם
            </a>
          </div>
        </div>
      </section>




      {/* CTA / CONTACT */}
      <section id="contact" className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Heart className="w-8 h-8 mx-auto mb-6 opacity-70" strokeWidth={1.2} />
          <h2 className="text-4xl md:text-6xl mb-6">בואו נתפוס<br /><span className="italic">את הרגע.</span></h2>
          <p className="opacity-80 mb-10 max-w-lg mx-auto leading-relaxed">
            שלחו הודעה עם התאריך וסוג המצלמה שתרצו — ואנחנו דואגים לכל השאר.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0507755668" className="inline-flex items-center gap-2 bg-background text-foreground rounded-full px-6 py-3 text-sm hover:opacity-90 transition">
              <Phone className="w-4 h-4" /> 050-775-5668
            </a>
            <a href="https://wa.me/972507755668" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/40 rounded-full px-6 py-3 text-sm hover:bg-primary-foreground/10 transition">
              <MessageCircle className="w-4 h-4" /> וואטסאפ
            </a>
            <a href="https://www.instagram.com/camera_for_rent1/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/40 rounded-full px-6 py-3 text-sm hover:bg-primary-foreground/10 transition">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-10 text-xs opacity-70">
            <MapPin className="w-3.5 h-3.5" /> מצליח · רמלה והסביבה · משלוחים זמינים
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-muted-foreground tracking-[0.2em] uppercase">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Camera className="w-4 h-4" strokeWidth={1.3} />
          <span>Camera for rent · by Tahel Hamra</span>
        </div>
        <p>© {new Date().getFullYear()} · כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}

function RevealGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const activeIndex = open ?? -1;
  const active = open !== null ? clients[open] : null;

  const goNext = () => {
    if (activeIndex < clients.length - 1) setOpen(activeIndex + 1);
    else setOpen(0);
  };

  const goPrev = () => {
    if (activeIndex > 0) setOpen(activeIndex - 1);
    else setOpen(clients.length - 1);
  };

  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, activeIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].screenX - touchStartX.current;
    if (deltaX < -50) goNext();
    if (deltaX > 50) goPrev();
    touchStartX.current = null;
  };

  return (
    <>
      <div ref={containerRef} className="columns-2 md:columns-3 gap-4 space-y-4">
        {clients.map((c, i) => (
          <button
            key={i}
            data-reveal
            onClick={() => setOpen(i)}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            className="reveal-init relative block w-full overflow-hidden rounded-2xl bg-blush break-inside-avoid group cursor-pointer text-right"
          >
            <img
              src={c.img.url}
              alt={`תמונת לקוח צולמה עם ${c.camera}`}
              loading="lazy"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase bg-background/90 text-foreground rounded-full px-3 py-1.5">
                <Camera className="w-3 h-3" /> {c.camera}
              </span>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent
          className="max-w-2xl p-0 overflow-hidden bg-background border-primary/20 select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {active && (
            <div className="flex flex-col relative">
              <img src={active.img.url} alt={`תמונת לקוח צולמה עם ${active.camera}`} className="w-full max-h-[70vh] object-contain bg-blush" />

              {/* Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 backdrop-blur-sm transition shadow"
                aria-label="תמונה קודמת"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 backdrop-blur-sm transition shadow"
                aria-label="תמונה הבאה"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="p-6 text-center">
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-2">Captured with</p>
                <DialogTitle className="text-2xl mb-2 flex items-center justify-center gap-2">
                  <Camera className="w-5 h-5" /> {active.camera}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  התמונה הזו צולמה במצלמה {active.camera} — אחת מהמצלמות הזמינות להשכרה.
                </DialogDescription>
                <p className="text-xs text-muted-foreground mt-3">{activeIndex + 1} / {clients.length}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
