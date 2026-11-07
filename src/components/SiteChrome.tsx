import { Link } from "@tanstack/react-router";
import logo from "@/assets/badchess-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/download", label: "Download" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <img src={logo.url} alt="BadChess logo" className="h-8 w-8 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
            Bad<span className="text-primary">Chess</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} BadChess. Extensions for chess.com.</span>
        <span>Not affiliated with Chess.com.</span>
      </div>
    </footer>
  );
}
