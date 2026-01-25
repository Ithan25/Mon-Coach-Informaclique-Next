'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Check,
    RefreshCw,
    Settings,
    Shield,
    Clock,
    Gift,
    ArrowRight
} from 'lucide-react'

const features = [
    {
        icon: RefreshCw,
        title: "Modifications illimitées",
        description: "Changement de prix, horaires, photos... (intervention sous 24h)"
    },
    {
        icon: Settings,
        title: "Gestion technique",
        description: "Renouvellement de votre nom de domaine inclus"
    },
    {
        icon: Shield,
        title: "Sécurité",
        description: "Mises à jour techniques et surveillance 24/7"
    },
]

export default function Abonnement() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="abonnement" className="section-padding bg-[var(--color-light)] relative overflow-x-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--color-secondary)] rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl" />

            <div className="container-custom relative z-10 px-4 sm:px-6 max-w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-full overflow-hidden"
                    >
                        <Badge variant="secondary" className="mb-4 gap-2">
                            <Clock className="w-4 h-4" />
                            Maintenance
                        </Badge>
                        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
                            L'Abonnement <span className="text-gradient">Sérénité</span>
                        </h2>
                        <p className="text-base sm:text-lg text-[var(--color-gray)] mb-6 sm:mb-8">
                            Votre site web a besoin d'être entretenu pour rester performant et sécurisé.
                            Avec l'abonnement Sérénité, vous n'avez plus à vous en soucier !
                        </p>

                        <div className="space-y-6 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)]" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-[var(--color-dark)] mb-1 text-sm sm:text-base">{feature.title}</h4>
                                        <p className="text-[var(--color-gray)] text-xs sm:text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-full overflow-hidden"
                    >
                        <Card className="relative overflow-hidden p-5 sm:p-8 max-w-full">
                            {/* Offer badge */}
                            <div className="absolute top-0 right-0 max-w-[50%] sm:max-w-none">
                                <div className="bg-[var(--color-accent)] text-[var(--color-dark)] px-3 sm:px-6 py-2 text-xs sm:text-sm font-bold transform rotate-0 origin-top-right flex items-center gap-1 sm:gap-2 rounded-bl-2xl">
                                    <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="whitespace-nowrap">3 mois offerts</span>
                                </div>
                            </div>

                            <div className="mb-6 sm:mb-8 pt-4">
                                <span className="text-[var(--color-gray)] text-sm uppercase tracking-wide">Tarif mensuel</span>
                                <div className="flex items-end gap-2 mt-2">
                                    <span className="text-5xl sm:text-6xl font-bold text-[var(--color-dark)]">15€</span>
                                    <span className="text-[var(--color-gray)] pb-3">/ mois</span>
                                </div>
                                <p className="text-sm text-[var(--color-gray)] mt-2">
                                    Sans engagement
                                </p>
                            </div>

                            {/* What's included */}
                            <div className="space-y-4 mb-8">
                                <p className="font-semibold text-[var(--color-dark)]">Inclus dans le service :</p>
                                {[
                                    "Modifications de contenu illimitées",
                                    "Nom de domaine inclus",
                                    "Certificat SSL (HTTPS)",
                                    "Support prioritaire",
                                    "Sauvegardes automatiques",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[var(--color-secondary)]" />
                                        </div>
                                        <span className="text-[var(--color-dark)] text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Highlight box */}
                            <div className="bg-[var(--color-accent)]/20 rounded-xl p-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <Gift className="w-5 h-5 text-[var(--color-accent-dark)] shrink-0 mt-0.5" />
                                    <p className="text-sm text-[var(--color-dark)]">
                                        <span className="font-semibold">Offre de lancement :</span> Les 3 premiers mois sont offerts
                                        pour toute souscription avec un Pack Vitrine !
                                    </p>
                                </div>
                            </div>

                            {/* Note about hosting */}
                            <div className="bg-[var(--color-light)] rounded-xl p-4 mb-8">
                                <p className="text-xs text-[var(--color-gray)]">
                                    💡 <strong>Note :</strong> L'abonnement est obligatoire avec la création d'un site web.
                                    L'hébergement est à définir selon vos besoins et préférences.
                                </p>
                            </div>

                            <Button
                                size="lg"
                                variant="secondary"
                                className="w-full gap-2"
                                onClick={scrollToContact}
                            >
                                Souscrire à l'abonnement
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
