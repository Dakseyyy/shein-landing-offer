import { Button } from "@/components/ui/button";
import USPCard from "@/components/USPCard";
import { Clock, CreditCard, Sparkles, CheckCircle } from "lucide-react";

const Index = () => {
  const usps = [
    {
      icon: Clock,
      title: "5 Minutes",
      description: "Quick application process that fits into your busy schedule",
    },
    {
      icon: CreditCard,
      title: "No Credit Card",
      description: "Completely free to join, no payment info required",
    },
    {
      icon: Sparkles,
      title: "Limited Time",
      description: "Get in before the Black Friday deal is over",
    },
    {
      icon: CheckCircle,
      title: "99% Qualify",
      description: "Nearly everyone who applies gets accepted",
    },
  ];

  return (
    <main className="relative min-h-dvh h-auto flex flex-col items-center justify-center px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="mt-8 relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 opacity-0 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Exclusive Beauty Program</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Become a{" "}
          <span className="text-gradient">Shein</span>
          <br />
          Shopaholic
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Unlock exclusive SHEIN perks before anyone else gets the chance to claim your spot.
        </p>

        {/* CTA Button */}
        <div
          className="mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          <Button variant="hero" size="xl">
            <a
              href="https://gloffers.org/aff_c?offer_id=1113&aff_id=158638"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Join 50,000+ SHEIN enthusiasts
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {usps.map((usp, index) => (
            <USPCard
              key={usp.title}
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
              delay={400 + index * 100}
            />
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </main>
  );
};

export default Index;
