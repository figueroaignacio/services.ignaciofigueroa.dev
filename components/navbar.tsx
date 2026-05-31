'use client'

import Logo from '@/components/logo'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const t = useTranslations('nav')
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es'

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(/^\/(es|en)/, `/${locale}`)
    router.push(newPath)
  }

  const navLinks = [
    { href: '#services', label: t('services') },
    { href: '#why-me', label: t('whyMe') },
    { href: '#pricing', label: t('pricing') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/10 backdrop-blur-md"
      role="banner">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={`/${currentLocale}`}
          className="font-heading text-2xl font-light tracking-wide text-foreground hover:text-accent transition-colors flex items-center gap-2.5"
          aria-label="Inicio">
          <Logo size={34} />
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-wider text-muted-foreground/95 hover:text-primary transition-all duration-300 font-semibold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-1.5 p-1 rounded-full bg-secondary/80 border border-border/40"
            aria-label="Cambiar idioma">
            <button
              onClick={() => switchLocale('es')}
              className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                currentLocale === 'es'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground/80 hover:text-foreground'
              }`}
              aria-label="Cambiar a español"
              aria-pressed={currentLocale === 'es'}>
              {t('langEs')}
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                currentLocale === 'en'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground/80 hover:text-foreground'
              }`}
              aria-label="Switch to English"
              aria-pressed={currentLocale === 'en'}>
              {t('langEn')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
