import { createFileRoute } from "@tanstack/react-router";
import { Camera, MapPin, Phone, Instagram, Sparkles, Truck, Heart, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import g9xImg from "@/assets/g9x.jpg";
import eos4000dImg from "@/assets/eos4000d.jpg";
import nikonImg from "@/assets/nikonl120.jpg";
import client11 from "@/assets/clients/client-11.png.asset.json";
import client12 from "@/assets/clients/client-12.png.asset.json";
import client13 from "@/assets/clients/client-13.png.asset.json";
import client14 from "@/assets/clients/client-14.png.asset.json";
import client15 from "@/assets/clients/client-15.png.asset.json";
import client16 from "@/assets/clients/client-16.png.asset.json";

const clients = [client11, client15, client12, client14, client16, client13];

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
              <a href="https://instagram.com/tahelhamra" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-foreground/20 rounded-full px-6 py-3 text-sm hover:bg-foreground/5 transition">
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

      {/* CLIENTS */}
      <section id="clients" className="bg-secondary/30 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Our clients</p>
            <h2 className="text-4xl md:text-5xl mb-4">הלקוחות שלנו</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">רגעים אמיתיים שנתפסו במצלמות שלנו — תודה לכל מי שבחר בנו.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {clients.map((c, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl bg-blush group ${
                  i === 0 || i === 5 ? "row-span-2 aspect-[3/5]" : "aspect-[3/4]"
                }`}
              >
                <img
                  src={c.url}
                  alt={`לקוחה מאושרת ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://instagram.com/tahelhamra" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm border border-foreground/20 rounded-full px-6 py-3 hover:bg-foreground hover:text-background transition">
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
            <a href="https://instagram.com/tahelhamra" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/40 rounded-full px-6 py-3 text-sm hover:bg-primary-foreground/10 transition">
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
