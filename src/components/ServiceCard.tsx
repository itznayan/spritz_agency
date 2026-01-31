import { type LucideIcon } from "lucide-react";
import TextAni from "./TextAni";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  alignment?: "left" | "right";
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  alignment = "left",
}: ServiceCardProps) {
  return (
    <div className="bg-stone-800 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent/50 group">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
        <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <TextAni blockColor="#AC5B41">
        <h3 className="text-2xl text-white font-bold mb-3">{title}</h3>
      </TextAni>
      {/* Description */}

      <TextAni blockColor="#AC5B41">
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </TextAni>
    </div>
  );
}
