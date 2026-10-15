import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Copy } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const ShareInvitationButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [copied, setCopied] = useState(false);

  const shareTitle = `${EVENT_DATA.eventName} — ${EVENT_DATA.occasion}`;
  const shareText = `You are cordially invited to ${EVENT_DATA.eventName} (Annual Language Day Celebrations) of ${EVENT_DATA.organizer.school}.\n\nChief Guest: ${EVENT_DATA.chiefGuest.name} (${EVENT_DATA.chiefGuest.designation}, ${EVENT_DATA.chiefGuest.institution})\nDate: ${EVENT_DATA.details.weekday}, 20 October 2026 at 9:00 AM\nVenue: ${EVENT_DATA.details.venueHall}, ${EVENT_DATA.details.venueSchool}\n\nView the digital invitation:`;

  const handleNativeShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: url,
        });
        return;
      } catch {
        // Fallback to clipboard or menu
      }
    }
    // Fallback: Copy URL
    handleCopyLink();
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // Fallback
    });
  };

  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + url)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative inline-flex items-center gap-2 ${className}`}>
      {/* Primary Share Button */}
      <button
        id="share-invitation-btn"
        onClick={handleNativeShare}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF7F0] text-[#17243A] border border-[#C7A76C] text-xs sm:text-sm font-sans font-medium tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
        aria-label="Share this invitation"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Invitation Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4 text-[#C7A76C]" />
            <span>Share Invitation</span>
          </>
        )}
      </button>

      {/* Direct WhatsApp Action Button */}
      <button
        id="share-whatsapp-btn"
        onClick={handleWhatsAppShare}
        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/40 text-xs sm:text-sm font-sans font-medium transition-all duration-300 active:scale-95 cursor-pointer"
        title="Share via WhatsApp"
        aria-label="Share via WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      {/* Quick Copy Link Icon */}
      <button
        id="copy-link-btn"
        onClick={handleCopyLink}
        className="p-2.5 rounded-full bg-white hover:bg-[#FAF7F0] text-[#17243A] border border-[#C7A76C]/50 text-xs transition-all active:scale-95 cursor-pointer"
        title="Copy Link to Clipboard"
        aria-label="Copy invitation link"
      >
        <Copy className="w-3.5 h-3.5 text-[#304F7D]" />
      </button>
    </div>
  );
};
