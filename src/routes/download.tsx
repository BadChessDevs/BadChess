import { createFileRoute } from "@tanstack/react-router";
import { Download, Radio, Chrome, Crown } from "lucide-react";

// Replace this with your MediaFire download link
const STREAMER_COMPANION_URL = "https://www.mediafire.com/file/your-file-id/BadChess_Streamer_Companion.zip/file";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download — BadChess Extensions" },
      { name: "description", content: "Download BadChess Chrome extensions for chess.com, starting with Streamer Companion." },
      { property: "og:title", content: "Download — BadChess Extensions" },
      { property: "og:description", content: "Get Streamer Companion and other BadChess extensions for chess.com." },
    ],
  }),
  component: DownloadPage,
});

const extensions = [
  {
    name: "Streamer Companion",
    tagline: "Your sidekick for streaming chess.com games.",
    version: "v1.0",
    status: "Download",
    href: STREAMER_COMPANION_URL,
    icon: Radio,
  },
  {
    name: "BadChess Pro",
    tagline: "Review your finished games and see the best move you missed.",
    version: "New",
    status: "Coming soon",
    href: undefined,
    icon: Crown,
  },
];

const steps = ["Download and unzip the file.", "Open chrome://extensions in Chrome.", "Turn on Developer mode (top right).", "Click Load unpacked and pick the folder."];

function DownloadPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="animate-rise text-5xl font-extrabold md:text-6xl">Downloads</h1>
      <p className="animate-rise mt-4 max-w-lg text-lg text-muted-foreground [animation-delay:100ms]">Every BadChess extension, in one place.</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {extensions.map((e) => (
          <div key={e.name} className="animate-rise group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow [animation-delay:200ms]">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <e.icon className="h-7 w-7" />
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{e.version}</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold">{e.name}</h2>
            <p className="mt-2 text-muted-foreground">{e.tagline}</p>
            {e.href ? (
              <a href={e.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-glow">
                <Download className="h-4 w-4" /> {e.status}
              </a>
            ) : (
              <span className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 font-semibold text-muted-foreground">
                {e.status}
              </span>
            )}
          </div>
        ))}
        <div className="animate-rise flex flex-col justify-center rounded-3xl border border-dashed border-border p-8 text-muted-foreground [animation-delay:300ms]">
          <p className="font-semibold text-foreground">More extensions on the way</p>
          <p className="mt-2">We're cooking up the next one.</p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold"><Chrome className="h-6 w-6 text-primary" /> How to install</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s} className="rounded-2xl border border-border bg-card p-5">
              <span className="text-3xl font-extrabold text-gradient">{i + 1}</span>
              <p className="mt-2 text-sm text-muted-foreground">{s}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
