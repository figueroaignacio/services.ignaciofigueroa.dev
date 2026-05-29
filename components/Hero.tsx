import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  const techBadges = ['Next.js', 'TypeScript', 'React', 'Node.js', 'Tailwind', 'i18n', 'AI'];

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 1px 1px, var(--grid-color) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--primary) 8%, transparent), transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-24 relative">
        {/* Main headline */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
          {t('headline').replace(t('headlineAccent'), '')}
          <em className="text-primary not-italic">{t('headlineAccent')}</em>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          {t('subheadline')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-150 shadow-sm"
            aria-label={t('ctaPrimary')}
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-accent active:scale-95 transition-all duration-150"
            aria-label={t('ctaSecondary')}
          >
            {t('ctaSecondary')}
          </Link>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2" aria-label="Tecnologías">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-card text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
