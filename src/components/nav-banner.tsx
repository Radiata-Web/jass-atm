import { MapPin, Phone } from "lucide-react";

export default function NavBanner() {
  return (
    <div className="h-8  flex items-center bg-primary text-white">
      <div className="flex items-center justify-between w-full lg:max-w-[80%] mx-auto px-6">
        {/* Location */}
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <p className="text-sm">Based in Jacksonville, FL</p>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-1">
          <Phone size={16} />
          <p className="text-sm">Call us: (800) 676-6838</p>
        </div>
      </div>
    </div>
  );
}
