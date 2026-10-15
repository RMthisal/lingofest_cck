import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { GoldDivider } from './Ornaments';
import { Music2, Mic2, Globe, Sparkles } from 'lucide-react';

export const ProgrammeHighlights: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'performances':
        return <Music2 className="w-6 h-6 text-[#C7785C]" />;
      case 'speeches':
        return <Mic2 className="w-6 h-6 text-[#304F7D]" />;
      case 'pageant':
        return <Globe className="w-6 h-6 text-[#C7A76C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C7A76C]" />;
    }
  };

  return (
    <section
      id="programme"
      aria-label="Programme Highlights"
      className="relative py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-transparent via-[#FAF7F0] to-[#FAF7F0]"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#304F7D] font-bold mb-2">
            EVENT HIGHLIGHTS
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#17243A] tracking-tight leading-snug">
            {EVENT_DATA.programmeTitle}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-[#17243A]/75 mt-2">
            {EVENT_DATA.programmeSubtitle}
          </p>
          <GoldDivider className="mt-4" />
        </div>

        {/* 3 Refined Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EVENT_DATA.programmes.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#FAF7F0] rounded-xl p-6 sm:p-8 border border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Subtle Corner Gold Pip */}
              <div className="absolute top-3 right-3 text-[10px] font-mono font-semibold text-[#17243A]/40 group-hover:text-[#C7A76C] transition-colors">
                0{index + 1}
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white border border-[#C7A76C]/40 flex items-center justify-center shadow-xs mb-5 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.id)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#17243A] mb-3 group-hover:text-[#304F7D] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-[#17243A]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Highlight Tag */}
              <div className="mt-6 pt-4 border-t border-[#C7A76C]/20 flex items-center gap-1.5 text-xs font-serif italic text-[#C7785C]">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A76C]" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Thoughtful Cultural Quotation */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-lg bg-white/50 border border-[#C7A76C]/30">
          <p className="text-xs sm:text-sm font-serif italic text-[#17243A]/85">
            &ldquo;If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.&rdquo;
          </p>
          <p className="text-[11px] font-sans uppercase tracking-widest text-[#304F7D] font-semibold mt-1.5">
            — Nelson Mandela
          </p>
        </div>

      </div>
    </section>
  );
};
