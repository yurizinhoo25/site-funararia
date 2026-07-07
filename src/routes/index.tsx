import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Shield,
  Clock,
  Heart,
  FileText,
  Sparkles,
  Flower2,
  Plane,
  Check,
  Crown,
  Users,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  Send,
  Stethoscope,
  Pill,
  Dumbbell,
  Film,
  ShoppingBag,
  Truck,
  Menu,
  X,
  ArrowRight,
  Mail,
  Flame,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
const logoAsset = "/logo-plano-nacional.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP = "https://wa.me/5531986948998";
const EMERGENCY = WHATSAPP;
const PHONE_DISPLAY = "(31) 3272-5307";
const PHONE_TEL = "tel:+553132725307";
const EMAIL = "assistencialplanonaciol@gmail.com";
const BRAND = "Plano Nacional";
const BRAND_SUB = "Funerária";


function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function LandingPage() {
  const reveal = useReveal();
  return (
    <div ref={reveal} className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <ServicosFuneral />
      <Planos />
      <Floricultura />
      <Fechamento />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#planos", label: "Planos" },
    { href: "#floricultura", label: "Floricultura" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#topo" className="flex items-center gap-3">
            <div className="grid h-16 w-16 place-items-center rounded-xl bg-white ring-1 ring-gold/40 glow-gold">
              <img src={logoAsset} alt="Plano Nacional Funerária" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-tight">{BRAND}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {BRAND_SUB}
              </div>
            </div>
          </a>


          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground transition-transform hover:scale-[1.03] pulse-gold sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Emergência 24h
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl glass-light lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-gold-foreground"
                >
                  <Phone className="h-4 w-4" /> Emergência 24h
                </a>

              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div data-reveal className="opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Atendimento Ativo 24h · 7 dias
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Dignidade, cuidado e{" "}
            <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
              presença humana
            </span>{" "}
            em todos os momentos.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Assistência funerária premium com atendimento imediato 24 horas, planos
            familiares acessíveis e uma equipe dedicada a acolher sua família com
            respeito e excelência.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-4 text-base font-bold text-gold-foreground transition-all hover:scale-[1.02] glow-gold"
            >
              <Phone className="h-5 w-5" />
              Assistência Imediata 24h
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Conhecer Planos Familiares
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "24h", l: "Atendimento" },
              { n: "+30", l: "Anos de tradição" },
              { n: "100%", l: "Humanizado" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4 text-center">
                <div className="font-display text-2xl font-bold text-gold">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="relative opacity-0">
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-1 glow-emerald">
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-primary/40 via-background to-secondary">
              <div className="absolute inset-0 grid place-items-center p-10">
                <div className="float relative">
                  <div className="grid place-items-center rounded-full bg-gradient-to-br from-gold/30 to-transparent p-6 backdrop-blur-sm">
                    <div className="overflow-hidden rounded-full ring-4 ring-gold/40 glow-gold">
                      <img
                        src={logoAsset}
                        alt="Plano Nacional Funerária"
                        className="h-56 w-56 object-contain sm:h-64 sm:w-64"
                      />
                    </div>
                  </div>
                </div>
              </div>


              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/20">
                    <Shield className="h-5 w-5 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">Protegido por especialistas</div>
                    <div className="text-xs text-muted-foreground">
                      Equipe própria, sigilo total
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-10 glass rounded-2xl px-4 py-3 float">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold">Resposta &lt; 15min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Serviços ---------- */
const SERVICOS = [
  {
    icon: FileText,
    title: "Documentação Legal",
    desc: "Cartório, certidões, autorizações e toda a burocracia conduzida pela nossa equipe.",
  },
  {
    icon: Sparkles,
    title: "Preparação Avançada",
    desc: "Tanatopraxia e cuidados estéticos realizados por profissionais especializados.",
  },
  {
    icon: Flower2,
    title: "Ornamentação Premium",
    desc: "Urnas selecionadas, arranjos florais sob medida e ambientação com elegância.",
  },
  {
    icon: Plane,
    title: "Translado Nacional & Internacional",
    desc: "Logística completa para qualquer destino, com agilidade e total segurança.",
  },
  {
    icon: Flame,
    title: "Cremação",
    desc: "Serviço de cremação com suporte completo, realizado com respeito e dignidade.",
  },
];

function ServicosFuneral() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center opacity-0">
          <span className="inline-block rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Funeral Particular
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Serviço funeral particular com{" "}
            <span className="text-gold">excelência absoluta</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estrutura completa, sigilo e atendimento personalizado para honrar a memória
            de quem você ama.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICOS.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ animationDelay: `${i * 80}ms` }}
              className="glass group relative overflow-hidden rounded-3xl p-6 opacity-0 transition-all hover:-translate-y-1 hover:glow-emerald"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 ring-1 ring-gold/30">
                  <s.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-12 flex flex-col items-center gap-4 opacity-0">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-4 text-base font-bold text-gold-foreground transition-all hover:scale-[1.02] glow-gold"
          >
            Solicitar Orçamento Instantâneo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-muted-foreground">
            Resposta em poucos minutos · sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Planos ---------- */
const PLANOS = [
  { nome: "Individual", desc: "Para o titular", preco: "17,90", dep: "Apenas titular" },
  { nome: "Família 5", desc: "Titular + 5 dependentes", preco: "29,90", dep: "6 pessoas" },
  {
    nome: "Família 7",
    desc: "Titular + 7 dependentes",
    preco: "39,90",
    dep: "8 pessoas",
    destaque: true,
  },
  { nome: "Família 10", desc: "Titular + 10 dependentes", preco: "49,90", dep: "11 pessoas" },
  { nome: "Família 14", desc: "Titular + 14 dependentes", preco: "59,90", dep: "15 pessoas" },
];

const BENEFICIOS = [
  { icon: Crown, label: "Urna Mortuária" },
  { icon: Flower2, label: "Ornamentação" },
  { icon: Sparkles, label: "Tanatopraxia" },
  { icon: Heart, label: "Coroa de Flores" },
  { icon: Stethoscope, label: "Clínicas Parceiras" },
  { icon: Stethoscope, label: "Rede de Dentistas" },
  { icon: Pill, label: "Farmácias com Desconto" },
  { icon: Dumbbell, label: "Academias Parceiras" },
  { icon: Film, label: "Cinemas com Desconto" },
];

function Planos() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center opacity-0">
          <span className="inline-block rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Planos Familiares
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Proteja quem você ama com{" "}
            <span className="text-gold">planos para toda a família</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Planos acessíveis, sem carência abusiva e com benefícios reais para toda a
            família.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PLANOS.map((p, i) => (
            <div
              key={p.nome}
              data-reveal
              style={{ animationDelay: `${i * 70}ms` }}
              className={`relative flex flex-col rounded-3xl p-6 opacity-0 transition-all hover:-translate-y-1 ${
                p.destaque
                  ? "bg-gradient-to-b from-gold/20 via-card to-card ring-1 ring-gold/40 glow-gold"
                  : "glass hover:glow-emerald"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                  Mais escolhido
                </span>
              )}
              <div className="flex items-center gap-2">
                <Users className={`h-4 w-4 ${p.destaque ? "text-gold" : "text-primary"}`} />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.dep}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold">{p.nome}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>

              <div className="mt-6">
                <span className="text-sm font-semibold text-gold">Orçamento conforme região</span>
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                  p.destaque
                    ? "bg-gold text-gold-foreground hover:scale-[1.02]"
                    : "bg-white/5 text-foreground hover:bg-white/10"
                }`}
              >
                Contratar
              </a>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div data-reveal className="mt-16 glass rounded-3xl p-6 opacity-0 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Benefícios <span className="text-gold">inclusos</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Todo plano vem com cobertura completa e uma poderosa rede de descontos
                em estabelecimentos parceiros.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BENEFICIOS.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/30 ring-1 ring-primary/40">
                    <Check className="h-5 w-5 text-gold" strokeWidth={3} />
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <b.icon className="h-4 w-4 text-muted-foreground" />
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-reveal
          className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 p-8 text-center opacity-0 glow-emerald sm:p-10"
        >
          <p className="font-display text-2xl font-bold sm:text-3xl">
            Todas as vantagens, tudo incluso{" "}
            <span className="text-gold">em um plano só.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Floricultura ---------- */
const COROAS = [
  { nome: "Coroa Tradicional" },
  { nome: "Coroa Premium Lírios" },
  { nome: "Coroa Especial Rosas" },
  { nome: "Coroa Luxo Imperial" },
  { nome: "Coroa Eternidade" },
  { nome: "Coroa Memorial Gold" },
];

function Floricultura() {
  return (
    <section id="floricultura" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center opacity-0">
          <span className="inline-block rounded-full glass-light px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Floricultura
          </span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Coroas de flores com <span className="text-gold">entrega expressa</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Arranjos elaborados por floristas com flores frescas. Entrega em qualquer
            velório da cidade em até 60 minutos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COROAS.map((c, i) => (
            <article
              key={c.nome}
              data-reveal
              style={{ animationDelay: `${i * 70}ms` }}
              className="glass group flex flex-col overflow-hidden rounded-3xl opacity-0 transition-all hover:-translate-y-1 hover:glow-emerald"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/40 via-secondary to-background">
                <div className="absolute inset-0 grid place-items-center">
                  <Flower2 className="h-24 w-24 text-gold/60 transition-transform group-hover:scale-110" />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                  <Truck className="h-3 w-3" />
                  Entrega Rápida
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="text-lg font-bold">{c.nome}</h3>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" fill="currentColor" />
                  Comprar via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Fechamento ---------- */
function Fechamento() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2rem] p-8 opacity-0 sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.28 0.07 160) 0%, oklch(0.22 0.05 160) 60%, oklch(0.18 0.04 160) 100%)",
          }}
        >
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                Fale com um consultor
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Deseja proteger sua família ou{" "}
                <span className="text-gold">contratar um plano agora?</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Fale diretamente com um de nossos consultores comerciais e tire todas as
                suas dúvidas em poucos minutos.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Atendimento humano em até 2 minutos",
                  "Sem burocracia, contratação 100% online",
                  "Consultoria gratuita e sem compromisso",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gold">
                      <Check className="h-3.5 w-3.5 text-gold-foreground" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gold px-7 py-5 text-base font-bold text-gold-foreground transition-all hover:scale-[1.03] sm:text-lg glow-gold pulse-gold"
              >
                <MessageCircle className="h-6 w-6" fill="currentColor" />
                Falar com Vendedor no WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-white ring-1 ring-gold/40">
                <img src={logoAsset} alt="Plano Nacional Funerária" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold">{BRAND}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {BRAND_SUB}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Acolhendo famílias com dignidade, presença e excelência. Assistência
              funerária e planos familiares com atendimento humano 24 horas.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-semibold text-gold">
              <Clock className="h-3.5 w-3.5" /> Suporte 24h · 7 dias
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">
              Nossas Unidades
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="block font-semibold text-foreground">Unidade Nova Gameleira</span>
                  Rua Oscar Negrão de Lima, 364 — Nova Gameleira
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="block font-semibold text-foreground">Unidade Veneza</span>
                  Av. Dionísio Gomes, 1014 — Veneza, Ribeirão das Neves
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 break-all text-muted-foreground transition-colors hover:text-gold">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold">
                  <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
                </a>
              </li>
            </ul>
            <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-gold">
              Navegação
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Serviços", "#servicos"],
                ["Planos", "#planos"],
                ["Floricultura", "#floricultura"],
                ["Contato", "#contato"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-muted-foreground transition-colors hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold">
              Redes sociais
            </h4>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Send, ShoppingBag].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl glass-light transition-colors hover:bg-gold hover:text-gold-foreground"
                  aria-label="social"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-gold-foreground glow-gold"
            >
              <Phone className="h-4 w-4" /> Emergência 24h
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND} {BRAND_SUB}. Todos os direitos reservados.</p>
          <p>Atendimento 24h · 7 dias por semana</p>

        </div>
      </div>
    </footer>
  );
}

/* ---------- WhatsApp Float ---------- */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 pulse-gold sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" />
    </a>
  );
}
