'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#pack-vitrine', label: 'Pack Vitrine' },
    { href: '#abonnement', label: 'Abonnement' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#a-propos', label: 'À propos' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/90 backdrop-blur-lg shadow-[var(--shadow-sm)] py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 group"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Mon Coach Informaclique"
                            width={40}
                            height={40}
                            className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-base sm:text-lg font-bold text-[var(--color-dark)]">
                            <span className="hidden xs:inline">Mon Coach </span><span className="text-[var(--color-primary)]">Informaclique</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-[var(--color-gray)] font-medium hover:text-[var(--color-primary)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-all hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="shadow-lg shadow-[var(--color-primary)]/30"
                        >
                            Contactez-moi
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden',
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="container-custom py-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="py-3 px-4 text-[var(--color-gray)] font-medium hover:text-[var(--color-primary)] hover:bg-[var(--color-light)] rounded-lg transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="mt-2"
                    >
                        Contactez-moi
                    </Button>
                </div>
            </div>
        </header>
    )
}
