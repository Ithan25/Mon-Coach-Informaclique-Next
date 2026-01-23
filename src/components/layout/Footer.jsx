'use client'

import { Phone, Mail, MapPin, Linkedin, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="bg-[var(--color-dark)] text-white relative mt-16">
            {/* Decorative top wave - positioned above footer */}
            <div className="absolute -top-16 left-0 right-0 h-16 overflow-hidden pointer-events-none">
                <svg
                    viewBox="0 0 1440 100"
                    fill="none"
                    className="absolute bottom-0 w-full h-full"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
                        fill="var(--color-dark)"
                    />
                </svg>
            </div>

            {/* Main Footer */}
            <div className="container-custom pt-12 pb-8 ">
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    {/* Brand - takes more space */}
                    <div className="lg:col-span-4">
                        <a href="#" onClick={scrollToTop} className="flex items-center gap-2 mb-6 group">
                            <Image
                                src="/logo.png"
                                alt="Mon Coach Informaclique"
                                width={44}
                                height={44}
                                className="w-11 h-11 transition-transform group-hover:scale-110"
                            />
                            <div>
                                <span className="text-lg font-bold block leading-tight">Mon Coach</span>
                                <span className="text-[var(--color-primary)] font-bold text-sm">Informaclique</span>
                            </div>
                        </a>
                        <p className="text-[var(--color-gray-light)] text-sm leading-relaxed mb-6 max-w-xs">
                            Votre partenaire informatique de confiance à Nantes.
                            Dépannage, formation et création de sites web pour les particuliers et professionnels.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/ithan-boismardgillot/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-5">Navigation</h4>
                        <ul className="space-y-3">
                            {[
                                { href: '#services', label: 'Services' },
                                { href: '#pack-vitrine', label: 'Pack Vitrine' },
                                { href: '#abonnement', label: 'Abonnement' },
                                { href: '#a-propos', label: 'À propos' },
                                { href: '#contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-[var(--color-gray-light)] hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-3" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-5">Services</h4>
                        <ul className="space-y-3">
                            {[
                                'Dépannage à domicile',
                                'Formation informatique',
                                'Sites web vitrines',
                                'Installation matériel',
                                'Accompagnement mobile',
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-[var(--color-gray-light)] text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-5">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+33640749962" className="flex items-center gap-3 text-[var(--color-gray-light)] hover:text-white transition-colors group">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                        <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-sm">06 40 74 99 62</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@moncoachinformaclique.fr" className="flex items-center gap-3 text-[var(--color-gray-light)] hover:text-white transition-colors group">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors shrink-0">
                                        <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-sm truncate">contact@moncoach...</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 text-[var(--color-gray-light)]">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-sm">Nantes et agglomération</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[var(--color-gray-light)] text-sm text-center md:text-left">
                            © {currentYear} Mon Coach Informaclique. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-4 text-sm">
                                <a href="#" className="text-[var(--color-gray-light)] hover:text-white transition-colors">
                                    Mentions légales
                                </a>
                                <span className="text-white/20">•</span>
                                <a href="#" className="text-[var(--color-gray-light)] hover:text-white transition-colors">
                                    Confidentialité
                                </a>
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-all duration-300 group"
                                aria-label="Retour en haut"
                            >
                                <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
