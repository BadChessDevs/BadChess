import { createFileRoute, Link } from "@tanstack/react-router";
import { Radio, Sparkles, Zap, ArrowRight, Target, Gauge, History } from "lucide-react";
import logo from "@/assets/badchess-logo.png.asset.json";
import proBoard from "@/assets/badchess-pro-review-board.png.asset.json";

const proFeatures = [
  { icon: Target, text: "Arrows and highlights show the stronger move on the board." },
  { icon: Gauge, text: "Choose how deep the engine looks." },
  { icon: History, text: "Works on games you've already finished, never during play." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BadChess — Chrome extensions for chess.com" },
      { name: "description", content: "BadChess builds clean, powerful Chrome extensions that upgrade your chess.com experience." },
      { property: "og:title", content: "BadChess — Chrome extensions for chess.com" },
      { property: "og:description", content: "Clean, powerful Chrome extensions that upgrade your chess.com experience." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Zap, title: "Lightweight", text: "Tiny footprint. No lag on your board, ever." },
  { icon: Sparkles, title: "Clean by design", text: "Feels native to chess.com, never cluttered." },
  { icon: Radio, title: "Built for players", text: "Made by chess fans, for streamers and grinders alike." },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-board opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> First release: Streamer Companion
            </span>
            <h1 className="animate-rise mt-6 text-5xl font-extrabold leading-[1.05] md:text-7xl [animation-delay:100ms]">
              Make your <span className="text-gradient">chess.com</span> better.
            </h1>
            <p className="animate-rise mt-6 max-w-md text-lg text-muted-foreground [animation-delay:200ms]">
              BadChess makes Chrome extensions for chess.com. Small tools, sharp design, zero clutter.
            </p>
            <div className="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:300ms]">
              <Link to="/download" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
                Download <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#features" className="rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="animate-pulse-glow absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <img src={logo.url} alt="BadChess knight" className="animate-float relative w-64 drop-shadow-2xl md:w-80" />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} style={{ animationDelay: `${i * 120}ms` }} className="animate-rise group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
              <f.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-125" />
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our first extension</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Streamer  Companion</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">Allows streamers to hide there username or there opponents</p>
          <Link to="/download" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Get it now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl border border-primary/40 bg-card p-10 shadow-glow md:grid-cols-2 md:p-14">
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> New release
            </span>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              BadChess <span className="text-gradient">Pro</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Review your finished chess.com games with a strong engine. See the best move you missed, right after the game ends.
            </p>
            <ul className="mt-6 space-y-3">
              {proFeatures.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/download" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
              See BadChess Pro <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={proBoard.url}
              alt="Chessboard with a green arrow showing the best move found in review"
              className="w-full rounded-2xl border border-border shadow-2xl transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
