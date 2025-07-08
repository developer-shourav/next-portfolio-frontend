"use client";
import { Mail, Phone, MapPin, Copy } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ContactInfo: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      toast.success(`${type} copied to clipboard!`, {
        position: "top-right",
        duration: 2000,
      });
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

      <div className="space-y-6">
        {/* Email Section */}
        <div className="flex items-start gap-4 group">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">Email</h4>
            <div className="flex items-center gap-2">
              <a
                href="mailto:developer.shourav1@gmail.com"
                className="text-muted-foreground group-hover:text-primary transition-colors"
              >
                developer.shourav1@gmail.com
              </a>
              <button
                onClick={() =>
                  copyToClipboard("developer.shourav1@gmail.com", "Email")
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                title="Copy email"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-start gap-4 group">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">Phone</h4>
            <div className="flex items-center gap-2">
              <a
                href="tel:+8801932376388"
                className="text-muted-foreground group-hover:text-primary transition-colors"
              >
                +880 192376388
              </a>
              <button
                onClick={() => copyToClipboard("+8801932376388", "Phone")}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary z-10"
                title="Copy phone number"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Section */}
        <a
          href="https://wa.me/+8801932376388"
          target="_blank"
          className="flex items-start gap-4 group"
        >
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <BsWhatsapp className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">WhatsApp</h4>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">+880 192376388</span>
              <a
                href="https://wa.me/+8801932376388"
                target="_blank"
                className="opacity-0 group-hover:opacity-100 transition-opacity underline text-primary text-sm font-medium"
                title="Send a message on WhatsApp"
              >
                Direct Message
              </a>
            </div>
          </div>
        </a>

        {/* Location Section */}
        <div className="flex items-start gap-4 group">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">Location</h4>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">
                Nawabganj, Dhaka-1320, Bangladesh
              </span>
              <a
                href="https://maps.google.com/?q=Nawabganj,+Dhaka-1320,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity text-primary text-sm font-medium underline"
                title="View on Google Maps"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
