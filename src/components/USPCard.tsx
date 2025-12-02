import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface USPCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const USPCard = ({ icon: Icon, title, description, delay = 0 }: USPCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center text-center p-6 rounded-2xl",
        "bg-gradient-card border border-border/50",
        "hover:border-primary/50 transition-all duration-500",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="relative mb-4 p-4 rounded-full bg-secondary/50 group-hover:bg-primary/20 transition-colors duration-500">
        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      {/* Content */}
      <h3 className="relative font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="relative text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default USPCard;
