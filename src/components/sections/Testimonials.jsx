'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Rocket, Heart, MessageCircle, ArrowRight } from 'lucide-react'

export default function Testimonials() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="temoignages" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[var(--color-light)] to-transparent" />
            <div className="absolute top-40 right-10 w-64 h-64 bg-[var(--color-primary)] rounded-full opacity-5 blur-3xl" />
            <div className="absolute bottom-40 left-10 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-5 blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        Témoignages
                    </Badge>
                    <h2 className="mb-6">
                        En attente de mes <span className="text-gradient">premiers clients</span>
                    </h2>
                    <p className="text-lg text-[var(--color-gray)]">
                        Je viens de lancer mon activité et je suis impatient de vous accompagner !
                        Soyez parmi les premiers à bénéficier de mes services.
                    </p>
                </motion.div>

                {/* Waiting for clients card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-[var(--color-light)] to-white rounded-3xl p-10 shadow-lg text-center overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 text-4xl opacity-20">✨</div>
                        <div className="absolute bottom-4 left-4 text-4xl opacity-20">🚀</div>

                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-20 h-20 mx-auto mb-6 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center"
                        >
                            <Rocket className="w-10 h-10 text-[var(--color-accent-dark)]" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-4">
                            Nouvelle aventure qui commence !
                        </h3>

                        <p className="text-[var(--color-gray)] mb-8 max-w-md mx-auto">
                            Mon activité vient tout juste de démarrer. Je suis à la recherche de mes premiers clients
                            pour construire ensemble une belle relation de confiance.
                        </p>

                        {/* Benefits for first clients */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-[var(--color-dark)] text-sm">Attention particulière</p>
                                    <p className="text-xs text-[var(--color-gray)]">Chaque client compte</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-[var(--color-dark)] text-sm">Disponibilité maximale</p>
                                    <p className="text-xs text-[var(--color-gray)]">Réponse rapide garantie</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" onClick={scrollToContact} className="gap-2">
                            <span className="hidden sm:inline">Devenir mon premier client</span>
                            <span className="sm:hidden">Premier client</span>
                            <ArrowRight className="w-5 h-5" />
                        </Button>

                        <p className="text-xs text-[var(--color-gray)] mt-6">
                            🎁 Les premiers clients auront droit à une attention toute particulière !
                        </p>
                    </div>
                </motion.div>

                {/* Future testimonials placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-[var(--color-gray-light)] italic">
                        Vos témoignages apparaîtront bientôt ici... 💬
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
