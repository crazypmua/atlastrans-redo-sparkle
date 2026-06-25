import { createFileRoute, Link } from "@tanstack/react-router";
import heroUrl from "../assets/hero-logistics.jpg";
import logoUrl from "../assets/logo.png";

export const Route = createFileRoute("/minimal")({
  head: () => ({
    meta: [
      { title: "Atlas Trans — ЗЕД, митне оформлення, логістика" },
      {
        name: "description",
        content:
          "Atlas Trans координує зовнішньоекономічну діяльність: митне оформлення, імпорт під ключ, сертифікація та логістика.",
      },
    ],
  }),
  component: MinimalPage,
});

const NAVY = "#0c2340";
const NAVY_2 = "#13355c";
const ACCENT = "#c9a84c";

function MinimalPage() {
  return (
    <div style={{ fontFamily: '"Inter", system-ui, sans-serif', color: "#0f172a", background: "#fff" }}>
      <style>{`
        .mn-wrap{max-width:1200px;margin:0 auto;padding:0 24px}
        .mn-serif{font-family:"Playfair Display","Cormorant Garamond",Georgia,serif;font-weight:700;letter-spacing:-.01em}
        .mn-nav{position:sticky;top:0;z-index:50;background:${NAVY};border-bottom:1px solid rgba(255,255,255,.08);transition:background .3s ease}
        .mn-nav-inner{display:flex;align-items:center;justify-content:space-between;height:140px;transition:height .3s ease}
        .mn-nav-logo{height:130px;transition:height .3s ease}
        .mn-nav.shrunk .mn-nav-inner{height:56px}
        .mn-nav.shrunk .mn-nav-logo{height:40px}
        .mn-nav a.mn-link{color:rgba(255,255,255,.78);font-size:15px;margin-left:32px;text-decoration:none;font-weight:500;transition:color .2s}
        .mn-nav a.mn-link:hover{color:#fff}
        .mn-nav a.mn-link.active{color:#fff;font-weight:600}
        .mn-hero{position:relative;background:linear-gradient(rgba(12,35,64,.78),rgba(12,35,64,.85)),url(${heroUrl}) center/cover;color:#fff;padding:120px 0 0}
        .mn-hero-eyebrow{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:24px}
        .mn-hero h1{font-size:clamp(44px,6vw,84px);line-height:1.02;margin:0 0 20px}
        .mn-hero-sub{font-size:22px;color:rgba(255,255,255,.92);margin:0 0 28px;max-width:640px}
        .mn-hero-desc{font-size:16px;line-height:1.7;color:rgba(255,255,255,.78);max-width:560px;margin:0 0 40px}
        .mn-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 26px;border-radius:4px;font-weight:600;font-size:15px;text-decoration:none;transition:all .2s;border:none;cursor:pointer}
        .mn-btn-primary{background:#fff;color:${NAVY}}
        .mn-btn-primary:hover{background:${ACCENT};color:${NAVY}}
        .mn-btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4)}
        .mn-btn-ghost:hover{background:rgba(255,255,255,.1)}
        .mn-hero-actions{display:flex;gap:14px;flex-wrap:wrap;padding-bottom:80px}
        .mn-stats{background:${NAVY_2};padding:48px 0;color:#fff}
        .mn-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
        .mn-stat-icon{display:inline-flex;width:36px;height:36px;align-items:center;justify-content:center;color:rgba(255,255,255,.7);margin-bottom:12px}
        .mn-stat-num{font-family:"Playfair Display",Georgia,serif;font-size:28px;font-weight:600;line-height:1}
        .mn-stat-lbl{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-top:8px}
        .mn-section{padding:100px 0;background:#f7f9fb}
        .mn-section.white{background:#fff}
        .mn-section-head{text-align:center;max-width:680px;margin:0 auto 64px}
        .mn-section-head h2{font-size:clamp(34px,4vw,46px);margin:0 0 16px;color:#0f1b3d}
        .mn-section-head p{color:#64748b;font-size:17px;line-height:1.6;margin:0 0 18px}
        .mn-rule{width:64px;height:3px;background:${NAVY};margin:0 auto}
        .mn-cards-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .mn-cards-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        .mn-card{background:#fff;border:1px solid #e5ebf2;border-radius:8px;padding:36px 32px;transition:all .25s}
        .mn-card:hover{border-color:${NAVY};box-shadow:0 12px 32px -16px rgba(12,35,64,.25);transform:translateY(-2px)}
        .mn-card-ico{width:48px;height:48px;background:#eef2f7;border-radius:6px;display:flex;align-items:center;justify-content:center;color:${NAVY};margin-bottom:24px}
        .mn-card h3{font-family:"Playfair Display",Georgia,serif;font-size:22px;margin:0 0 14px;color:#0f1b3d;font-weight:700}
        .mn-card p{color:#64748b;font-size:15px;line-height:1.6;margin:0 0 18px}
        .mn-card a{color:${NAVY};font-size:14px;font-weight:600;text-decoration:none}
        .mn-step{position:relative;background:#fff;border:1px solid #e5ebf2;border-radius:8px;padding:48px 24px 32px;text-align:center;margin-top:18px}
        .mn-step-num{position:absolute;top:-18px;left:50%;transform:translateX(-50%);background:${NAVY};color:#fff;width:48px;height:32px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;letter-spacing:.1em}
        .mn-step-ico{color:${NAVY};margin:0 auto 16px;display:flex;justify-content:center}
        .mn-step h3{font-family:"Playfair Display",Georgia,serif;font-size:20px;margin:0 0 12px;color:#0f1b3d}
        .mn-step p{color:#64748b;font-size:14px;line-height:1.55;margin:0}
        .mn-why{display:grid;grid-template-columns:1fr 1.4fr;gap:64px;align-items:start}
        .mn-why h2{font-size:clamp(32px,3.5vw,44px);margin:0 0 16px;color:#0f1b3d;position:relative;padding-bottom:18px}
        .mn-why h2::after{content:"";position:absolute;left:0;bottom:0;width:48px;height:3px;background:${NAVY}}
        .mn-why-desc{color:#64748b;font-size:16px;line-height:1.65;margin-top:24px}
        .mn-why-list{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
        .mn-why-item{background:#fff;border:1px solid #e5ebf2;border-radius:6px;padding:18px 20px;display:flex;gap:12px;align-items:flex-start;font-size:15px;color:#1e293b;line-height:1.45}
        .mn-why-item svg{flex-shrink:0;color:${NAVY};margin-top:1px}
        .mn-cta{background:linear-gradient(rgba(12,35,64,.88),rgba(12,35,64,.92)),url(${heroUrl}) center/cover;color:#fff;padding:100px 0;text-align:center}
        .mn-cta h2{font-family:"Playfair Display",Georgia,serif;font-size:clamp(32px,4vw,46px);margin:16px 0 18px}
        .mn-cta p{color:rgba(255,255,255,.85);font-size:17px;max-width:640px;margin:0 auto 32px;line-height:1.6}
        .mn-footer{background:#0a1c33;color:rgba(255,255,255,.7);padding:48px 0 32px;font-size:14px}
        .mn-footer-grid{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
        .mn-footer img{height:36px}
        @media (max-width:880px){
          .mn-stats-grid,.mn-cards-3,.mn-cards-4{grid-template-columns:1fr 1fr}
          .mn-why{grid-template-columns:1fr}
          .mn-nav a.mn-link{margin-left:18px;font-size:14px}
        }
        @media (max-width:540px){
          .mn-stats-grid,.mn-cards-3,.mn-cards-4,.mn-why-list{grid-template-columns:1fr}
        }
      `}</style>

      {/* NAV */}
      <header className="mn-nav" id="mn-nav">
        <div className="mn-wrap mn-nav-inner">
          <img src={logoUrl} alt="Atlas Trans" className="mn-nav-logo" />
          <nav>
            <a href="#about" className="mn-link active">Головна</a>
            <a href="#services" className="mn-link">Послуги</a>
            <a href="#process" className="mn-link">Процес</a>
            <a href="#why" className="mn-link">Чому ми</a>
            <a href="#contact" className="mn-link">Контакти</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mn-hero">
        <div className="mn-wrap">
          <div className="mn-hero-eyebrow">Авторизований митний брокер України · UACBR126002924</div>
          <h1 className="mn-serif">ATLAS TRANS</h1>
          <p className="mn-hero-sub">Ваш брокерський відділ на аутсорсі</p>
          <p className="mn-hero-desc">
            Вам не потрібно тримати митного брокера або менеджера ЗЕД у штаті. Ви ставите задачу — ми беремо на себе митне оформлення, документи, сертифікацію, комунікацію з митницею та супровід поставки до результату.
          </p>
          <div className="mn-hero-actions">
            <a href="#services" className="mn-btn mn-btn-primary">Наші послуги <span>→</span></a>
            <a href="#contact" className="mn-btn mn-btn-ghost">Обговорити задачу</a>
          </div>
        </div>
        {/* STATS */}
        <div className="mn-stats">
          <div className="mn-wrap">
            <div className="mn-stats-grid">
              {[
                { n: "Море", l: "Контейнерні перевезення", i: <Ship /> },
                { n: "Авто", l: "Автомобільна логістика", i: <Pin /> },
                { n: "Митниця", l: "Повний супровід", i: <Doc /> },
                { n: "24/7", l: "Підтримка клієнтів", i: <Clock /> },
              ].map((s) => (
                <div key={s.l}>
                  <div className="mn-stat-icon">{s.i}</div>
                  <div className="mn-stat-num">{s.n}</div>
                  <div className="mn-stat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mn-section" id="services">
        <div className="mn-wrap">
          <div className="mn-section-head">
            <h2 className="mn-serif">Наші послуги</h2>
            <p>Що ми робимо — повний цикл зовнішньоекономічної діяльності.</p>
            <div className="mn-rule" />
          </div>
          <div className="mn-cards-4">
            {[
              { t: "Митне декларування", d: "Оформлюємо імпорт, експорт, транзит та інші митні режими по всій території України. Готуємо декларації, перевіряємо документи, визначаємо коди УКТ ЗЕД та супроводжуємо оформлення до випуску товару.", i: <Doc /> },
              { t: "Імпорт під ключ", d: "Працюємо за договором комісії та беремо на себе весь процес закупівлі: пошук постачальника, контракт, міжнародні платежі, логістику, митне оформлення та передачу товару клієнту.", i: <Ship /> },
              { t: "Сертифікація", d: "Організовуємо отримання сертифікатів відповідності, декларацій, висновків та інших документів, необхідних для законного імпорту товарів.", i: <Box /> },
              { t: "Консалтинг із ЗЕД", d: "Аналізуємо документи, перевіряємо умови поставки, визначаємо код УКТ ЗЕД, розраховуємо митні платежі та перелік дозвільних документів — ще до відправлення товару.", i: <Globe /> },
            ].map((c) => (
              <div key={c.t} className="mn-card">
                <div className="mn-card-ico">{c.i}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <a href="#contact">Обговорити →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mn-section white" id="process">
        <div className="mn-wrap">
          <div className="mn-section-head">
            <h2 className="mn-serif">Як ми працюємо</h2>
            <p>Підключаємося тоді, коли потрібно оформити вантаж, організувати імпорт, отримати дозвільні документи або вирішити питання з митницею. Усім процесом керує Atlas.</p>
            <div className="mn-rule" />
          </div>
          <div className="mn-cards-4">
            {[
              { t: "Постановка задачі", d: "Ви описуєте вантаж, країну та орієнтовні строки. Ми відповідаємо протягом робочого дня.", i: <Handshake /> },
              { t: "Підготовка ЗЕД", d: "Перевіряємо документи, коди УКТ ЗЕД, розраховуємо митні платежі та перелік дозвільних документів.", i: <Doc /> },
              { t: "Логістика та оформлення", d: "Організовуємо доставку, отримуємо сертифікати, готуємо декларації та супроводжуємо оформлення на митниці.", i: <Ship /> },
              { t: "Випуск товару", d: "Контролюємо випуск вантажу та передачу клієнту. Ви отримуєте товар на склад без зривів.", i: <Anchor /> },
            ].map((s, i) => (
              <div key={s.t} className="mn-step">
                <div className="mn-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="mn-step-ico">{s.i}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mn-section" id="why">
        <div className="mn-wrap mn-why">
          <div>
            <h2 className="mn-serif">Чому компанії передають ЗЕД на аутсорс</h2>
            <p className="mn-why-desc">
              Власний відділ ЗЕД потрібен не кожному бізнесу. Якщо поставки не щоденні або обсяг роботи змінюється протягом року — аутсорсинг дозволяє скоротити витрати та отримати досвід цілої команди без утримання штатних спеціалістів.
            </p>
          </div>
          <div className="mn-why-list">
            {[
              "Оплачуєте результат, а не зарплату",
              "Команда замість одного спеціаліста",
              "Досвід складних поставок",
              "Один партнер для всіх задач ЗЕД",
              "Масштабується разом із бізнесом",
              "Менше ризиків і затримок на митниці",
            ].map((t) => (
              <div key={t} className="mn-why-item">
                <Check /> <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mn-cta" id="contact">
        <div className="mn-wrap">
          <Trend />
          <h2>Обговоримо вашу задачу</h2>
          <p>
            Опишіть що потрібно — відповімо протягом робочого дня. Якщо ще не знаєте всіх деталей, нічого страшного. Напишіть що є — решту з’ясуємо разом.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:pd@atlastrans.com.ua" className="mn-btn mn-btn-primary">pd@atlastrans.com.ua <span>→</span></a>
            <a href="https://t.me/AtlasTransUA" target="_blank" rel="noopener" className="mn-btn mn-btn-ghost">Telegram @AtlasTransUA</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mn-footer">
        <div className="mn-wrap mn-footer-grid">
          <img src={logoUrl} alt="Atlas Trans" />
          <div>© {new Date().getFullYear()} Atlas Trans. Усі права захищені.</div>
          <Link to="/" style={{ color: "rgba(255,255,255,.7)" }}>← На основну версію</Link>
        </div>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var n=document.getElementById('mn-nav');if(!n)return;var on=function(){if(window.scrollY>40)n.classList.add('shrunk');else n.classList.remove('shrunk')};window.addEventListener('scroll',on,{passive:true});on();})();`,
        }}
      />
    </div>
  );
}

/* ICONS */
const S = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const Pin = () => (<svg {...S}><path d="M12 22s-7-7.58-7-13a7 7 0 1 1 14 0c0 5.42-7 13-7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>);
const Ship = () => (<svg {...S}><path d="M3 18s2 2 4 2 3-2 5-2 3 2 5 2 4-2 4-2"/><path d="M5 14l7-3 7 3"/><path d="M12 11V5h4l2 6"/><path d="M12 5H8L6 11"/></svg>);
const People = () => (<svg {...S}><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15 20c0-2.5 2-4 4.5-4"/></svg>);
const Clock = () => (<svg {...S}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
const Globe = () => (<svg {...S}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);
const Box = () => (<svg {...S}><path d="M12 3l9 5v8l-9 5-9-5V8z"/><path d="M9 12l2 2 4-4"/></svg>);
const Handshake = () => (<svg {...S}><path d="M2 13l4-4 4 2 4-4 4 2 4-4"/><path d="M6 17l4 3 4-3 4 1"/></svg>);
const Doc = () => (<svg {...S}><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/><path d="M9 14l2 2 4-4"/></svg>);
const Anchor = () => (<svg {...S}><circle cx="12" cy="5" r="2"/><path d="M12 7v15"/><path d="M5 15a7 7 0 0 0 14 0"/><path d="M3 15h4M17 15h4"/></svg>);
const Check = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>);
const Trend = () => (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{margin:"0 auto",display:"block"}}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>);