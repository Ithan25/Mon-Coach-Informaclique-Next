'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
    HelpCircle,
    MapPin,
    Euro,
    Wrench,
    GraduationCap,
    Clock,
    Globe,
    Users,
    Monitor,
    Calendar,
    Shield,
    ArrowRight,
    Phone,
    ChevronDown
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            icon: MapPin,
            question: "Quelle est votre zone d'intervention à Nantes ?",
            answer: "J'interviens à domicile dans toute la métropole nantaise : Nantes centre, Rezé, Saint-Herblain, Orvault, Carquefou, Vertou, Bouguenais, Saint-Sébastien-sur-Loire, La Chapelle-sur-Erdre, Sainte-Luce-sur-Loire, et les communes environnantes dans un rayon de 20 km autour de Nantes."
        },
        {
            icon: Euro,
            question: "Quels sont vos tarifs et comment obtenir un devis ?",
            answer: "Mes tarifs sont transparents : 45€/heure pour le dépannage à domicile, 40€/heure pour les formations. Le déplacement est offert dans Nantes intra-muros. Pour un devis gratuit et sans engagement, appelez-moi directement au 06 40 74 99 62 ou utilisez le formulaire de contact. Je vous réponds sous 24h."
        },
        {
            icon: Wrench,
            question: "Quels types de pannes pouvez-vous réparer ?",
            answer: "Je répare la plupart des problèmes informatiques courants : ordinateur lent ou qui plante, virus et logiciels malveillants, problèmes de connexion internet/WiFi, imprimante qui ne fonctionne plus, écran bleu, perte de données, configuration de nouveaux appareils, et bien plus. Si je ne peux pas résoudre votre problème sur place, je vous orienterai vers la meilleure solution."
        },
        {
            icon: GraduationCap,
            question: "Quelles formations proposez-vous ?",
            answer: "Je propose des formations personnalisées adaptées à votre niveau : initiation à l'informatique (allumer un PC, utiliser une souris), maîtrise de Windows, navigation internet en sécurité, gestion des emails, utilisation de Word/Excel, visioconférence (Skype, WhatsApp, Zoom), sauvegarde de photos, et utilisation de votre smartphone ou tablette."
        },
        {
            icon: Clock,
            question: "Quel est le délai d'intervention ?",
            answer: "Je m'efforce d'intervenir rapidement. Pour les urgences (ordinateur professionnel en panne par exemple), je peux souvent passer dans la journée ou le lendemain. Pour les interventions moins urgentes, comptez généralement 2-3 jours ouvrés. Je m'adapte à vos disponibilités, y compris le samedi matin."
        },
        {
            icon: Globe,
            question: "Comment fonctionne la création de site web vitrine ?",
            answer: "Mon Pack Vitrine Nantaise est clé en main : je m'occupe de tout, de A à Z. Après un échange pour comprendre vos besoins, je crée votre site web professionnel (5 pages), l'optimise pour Google, et vous forme à sa gestion. Le tout pour 599€ TTC, avec 1 an d'hébergement et nom de domaine inclus. Idéal pour artisans, commerçants et professions libérales."
        },
        {
            icon: Users,
            question: "Êtes-vous spécialisé dans l'accompagnement des seniors ?",
            answer: "Oui, j'ai une expérience particulière avec les seniors et les personnes qui débutent en informatique. Ma pédagogie est basée sur la patience, les explications simples (sans jargon technique), et la répétition si nécessaire. Je prends le temps qu'il faut et je m'assure que vous êtes à l'aise avant de partir. Beaucoup de mes clients sont des seniors qui ont appris à utiliser WhatsApp pour parler à leurs petits-enfants !"
        },
        {
            icon: Monitor,
            question: "Quel matériel pouvez-vous dépanner ?",
            answer: "J'interviens sur les ordinateurs fixes et portables (Windows principalement), les tablettes, les smartphones (Android et iPhone pour les bases), les imprimantes, les box internet, et tous les périphériques associés. Pour les Mac/Apple, je peux aider sur les problèmes simples, mais pour les réparations complexes, je recommande un spécialiste Apple."
        },
        {
            icon: Calendar,
            question: "Comment prendre rendez-vous ?",
            answer: "C'est très simple : appelez-moi au 06 40 74 99 62 (je réponds rapidement) ou envoyez-moi un message via le formulaire de contact du site. Décrivez brièvement votre problème ou besoin, et nous convenons ensemble d'un créneau qui vous arrange. Je suis disponible du lundi au vendredi de 9h à 19h, et le samedi matin."
        },
        {
            icon: Shield,
            question: "Y a-t-il une garantie sur vos interventions ?",
            answer: "Oui ! Je m'engage sur la qualité de mon travail. Si le problème que j'ai résolu réapparaît dans les 15 jours suivant mon intervention (pour la même cause), je reviens gratuitement. De plus, vous ne payez que si le problème est résolu. Pas de résultat = pas de facture. C'est ma garantie de confiance."
        }
    ]

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-light)] overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto "
                        >
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">
                                <HelpCircle className="w-3 h-3 mr-1" />
                                FAQ
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
                                Questions <span className="text-gradient">Fréquentes</span>
                            </h1>
                            <p className="text-lg text-[var(--color-gray)]">
                                Retrouvez ici les réponses aux questions les plus courantes sur mes services
                                de dépannage informatique, formation et création de sites web à Nantes.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card
                                        className={`border-none shadow-md hover:shadow-lg transition-all cursor-pointer ${openIndex === index ? 'ring-2 ring-[var(--color-primary)]' : ''
                                            }`}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        <CardContent className="p-0">
                                            <div className="flex items-center gap-4 p-6">
                                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                                                    <faq.icon className="w-6 h-6 text-[var(--color-primary)]" />
                                                </div>
                                                <h3 className="flex-1 text-lg font-semibold text-[var(--color-dark)]">
                                                    {faq.question}
                                                </h3>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-[var(--color-gray)] transition-transform ${openIndex === index ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </div>
                                            <AnimatePresence>
                                                {openIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-6">
                                                            <p className="text-[var(--color-gray)] pl-16">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                    <div className="container-custom text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Vous avez une autre question ?
                            </h2>
                            <p className="text-white/90 mb-8 max-w-xl mx-auto">
                                N'hésitez pas à me contacter directement. Je réponds à toutes vos questions !
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Me contacter <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <a href="tel:0640749962">
                                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                        <Phone className="w-4 h-4 mr-2" /> 06 40 74 99 62
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
