'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

type Currency = 'ARS' | 'USD';

export default function Pricing() {
  const t = useTranslations('pricing');
  const [currency, setCurrency] = useState<Currency>('ARS');

  const tiers = [
    {
      nameKey: 'starterName',
      priceArsKey: 'starterPriceArs',
      priceUsdKey: 'starterPriceUsd',
      forKey: 'starterFor',
      featuresKey: 'starterFeatures',
      highlighted: false,
    },
    {
      nameKey: 'proName',
      priceArsKey: 'proPriceArs',
      priceUsdKey: 'proPriceUsd',
      forKey: 'proFor',
      featuresKey: 'proFeatures',
      highlighted: true,
    },
    {
      nameKey: 'customName',
      priceArsKey: 'customPriceArs',
      priceUsdKey: 'customPriceUsd',
      forKey: 'customFor',
      featuresKey: 'customFeatures',
      highlighted: false,
    },
  ] as const;

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-28 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-widest uppercase font-semibold text-primary mb-3 block">
              Investment Tiers
            </span>
            <h2
              id="pricing-heading"
              className="font-heading text-4xl md:text-5xl font-light text-foreground tracking-tight"
            >
              {t('title')} <span className="font-heading italic text-accent font-normal">& Planes</span>
            </h2>
          </div>

          {/* Currency toggle */}
          <div
            className="flex items-center gap-1 p-1.5 rounded-full bg-muted border border-border/80 w-fit shrink-0"
            role="group"
            aria-label="Seleccionar moneda"
          >
            {(['ARS', 'USD'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                aria-pressed={currency === c}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  currency === c
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {c === 'ARS' ? t('toggleArs') : t('toggleUsd')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {tiers.map((tier) => {
            const features = t.raw(tier.featuresKey) as string[];
            return (
              <article
                key={tier.nameKey}
                className={`relative p-8 rounded-[var(--radius-lg)] border flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? 'border-primary/80 bg-secondary/80 shadow-lg shadow-primary/5 dark:shadow-black/40'
                    : 'border-border/80 bg-card/50'
                }`}
                aria-label={t(tier.nameKey)}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="px-3.5 py-1 rounded-full bg-accent text-accent-foreground text-[10px] uppercase tracking-widest font-semibold shadow-sm">
                      {t('highlighted')}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-2xl font-light text-foreground mb-2">
                    {t(tier.nameKey)}
                  </h3>
                  <p className="text-xs text-muted-foreground/90 font-light leading-relaxed min-h-[32px]">
                    {t(tier.forKey)}
                  </p>
                </div>

                <div className="border-b border-border/40 pb-4">
                  <p className="font-heading text-3xl font-light text-foreground tracking-tight">
                    {currency === 'ARS' ? t(tier.priceArsKey) : t(tier.priceUsdKey)}
                  </p>
                </div>

                <ul className="flex flex-col gap-3.5 flex-1" aria-label={`Características de ${t(tier.nameKey)}`}>
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground/90">
                      <Check
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-sans font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 active:scale-95 ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-md'
                      : 'border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-transparent'
                  }`}
                  aria-label={`${t('cta')} — ${t(tier.nameKey)}`}
                >
                  {t('cta')}
                </a>
              </article>
            );
          })}
        </div>

        <p className="text-[11px] tracking-wide text-muted-foreground/75 text-center font-light mt-8">
          * {t('footnote')}
        </p>
      </div>
    </section>
  );
}
