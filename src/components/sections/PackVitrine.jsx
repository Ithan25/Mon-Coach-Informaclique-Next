'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Globe,
    Smartphone,
    Search,
    Zap,
    Shield,
    ArrowRight,
    Sparkles
} from 'lucide-react'

const features = [
    { icon: Globe, text: "Site Web 4 Pages (Accueil, Menu/Produits, À Propos, Contact)" },
    { icon: Smartphone, text: "Design Premium adapté mobile, tablette et ordinateur" },
    { icon: Search, text: "Optimisation Google (SEO) pour être visible localement" },
    { icon: Zap, text: "Technologie Rapide avec chargement instantané" },
    { icon: Shield, text: "Mise en conformité : Mentions légales, Cookies, HTTPS" },
]

const steps = [
    {
        number: "1",
        title: "La Démo",
        description: "Je crée une maquette de votre site gratuitement et sans engagement.",
        highlight: "Gratuite"
    },
    {
        number: "2",
        title: "La Validation",
        description: "Si la maquette vous plaît, on signe le devis et vous réglez l'acompte de 150€.",
        highlight: null
    },
    {
        number: "3",
        title: "La Finalisation",
        description: "On ajuste ensemble les textes, les photos et les détails.",
        highlight: null
    },
    {
        number: "4",
        title: "Le Lancement",
        description: "Votre site est en ligne sous son nom de domaine officiel. Vous réglez le solde.",
        highlight: null
    },
]

export default function PackVitrine() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="pack-vitrine" className="section-padding bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-primary-dark)] text-white relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full opacity-5" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white rounded-full opacity-5 blur-2xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
                >
                    <Badge className="mb-4 bg-white/20 text-white border-0">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Offre spéciale commerces
                    </Badge>
                    <h2 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
                        Le Pack "Vitrine Nantaise"
                    </h2>
                    <p className="text-base sm:text-xl text-white/80">
                        Vos clients sont sur leur téléphone. Ne laissez pas vos concurrents prendre votre place sur Google !
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Price Card */}
                        <div className="bg-white rounded-3xl p-5 sm:p-8 mb-8 shadow-2xl">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                                <div>
                                    <span className="text-[var(--color-gray)] text-sm uppercase tracking-wide">Tarif unique</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl sm:text-5xl font-bold text-[var(--color-dark)]">500€</span>
                                        <span className="text-[var(--color-gray)] pb-2">TTC</span>
                                    </div>
                                </div>
                                <div>
                                    <Badge variant="accent" className="text-sm">
                                        Tout compris
                                    </Badge>
                                </div>
                            </div>

                            {/* Payment breakdown */}
                            <div className="bg-[var(--color-light)] rounded-xl p-4 mb-6">
                                <p className="text-sm font-medium text-[var(--color-dark)] mb-2">Modalités de paiement :</p>
                                <div className="flex justify-between text-sm">
                                    <span className="text-[var(--color-gray)]">Acompte au lancement</span>
                                    <span className="font-semibold text-[var(--color-dark)]">150€</span>
                                </div>
                                <div className="flex justify-between text-sm mt-1">
                                    <span className="text-[var(--color-gray)]">Solde à la livraison</span>
                                    <span className="font-semibold text-[var(--color-dark)]">350€</span>
                                </div>
                            </div>

                            {/* Features list */}
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                                            <feature.icon className="w-4 h-4 text-[var(--color-primary)]" />
                                        </div>
                                        <span className="text-[var(--color-dark)] text-sm leading-relaxed">
                                            {feature.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <Button
                                size="lg"
                                className="w-full mt-8 gap-2"
                                onClick={scrollToContact}
                            >
                                <span className="hidden sm:inline">Demander ma démo gratuite</span>
                                <span className="sm:hidden">Ma démo gratuite</span>
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column - Process */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                            Comment on travaille ensemble ?
                        </h3>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.15 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg sm:text-xl">
                                            {step.number}
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-0 sm:pt-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h4 className="font-bold text-base sm:text-lg">{step.title}</h4>
                                            {step.highlight && (
                                                <Badge className="bg-[var(--color-accent)] text-[var(--color-dark)] text-xs">
                                                    {step.highlight}
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Illustration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-3xl"
                        >
                            <div className="flex items-center gap-4 text-white/90">
                                <div className="text-4xl">🏪</div>
                                <div>
                                    <p className="font-semibold">Idéal pour :</p>
                                    <p className="text-sm text-white/70">Restaurants, boutiques, salons, artisans, commerces de proximité...</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
