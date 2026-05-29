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
      className="py-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('title')}
          </h2>

          {/* Currency toggle */}
          <div
            className="flex items-center gap-1 p-1 rounded-full bg-muted border border-border w-fit"
            role="group"
            aria-label="Seleccionar moneda"
          >
            {(['ARS', 'USD'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                aria-pressed={currency === c}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  currency === c
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {c === 'ARS' ? t('toggleArs') : t('toggleUsd')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {tiers.map((tier) => {
            const features = t.raw(tier.featuresKey) as string[];
            return (
              <article
                key={tier.nameKey}
                className={`relative p-6 rounded-[var(--radius-lg)] border flex flex-col gap-4 ${
                  tier.highlighted
                    ? 'border-primary bg-secondary'
                    : 'border-border bg-card'
                }`}
                aria-label={t(tier.nameKey)}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {t('highlighted')}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {t(tier.nameKey)}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {t(tier.forKey)}
                  </p>
                </div>

                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    {currency === 'ARS' ? t(tier.priceArsKey) : t(tier.priceUsdKey)}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 flex-1" aria-label={`Características de ${t(tier.nameKey)}`}>
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check
                        size={14}
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-150 active:scale-95 ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'border border-border text-foreground hover:bg-accent'
                  }`}
                  aria-label={`${t('cta')} — ${t(tier.nameKey)}`}
                >
                  {t('cta')}
                </a>
              </article>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          {t('footnote')}
        </p>
      </div>
    </section>
  );
}
