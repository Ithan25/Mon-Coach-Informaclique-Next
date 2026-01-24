'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
    GraduationCap,
    Heart,
    Users,
    Clock,
    MapPin,
    Award,
    Sparkles,
    ArrowRight,
    Phone
} from 'lucide-react'
import Link from 'next/link'

export default function AProposPage() {
    const values = [
        {
            icon: Heart,
            title: "Patience & Bienveillance",
            description: "Je prends le temps d'expliquer, sans jugement. Chaque question est légitime, chaque difficulté est surmontable."
        },
        {
            icon: Users,
            title: "Pédagogie Adaptée",
            description: "J'adapte mon langage et ma méthode à votre niveau. Pas de jargon technique incompréhensible."
        },
        {
            icon: Clock,
            title: "Disponibilité",
            description: "Intervention rapide à domicile. Je m'adapte à vos horaires pour vous dépanner au plus vite."
        },
        {
            icon: Award,
            title: "Expertise Reconnue",
            description: "Un professionnel expérimenté dans l'accompagnement informatique des particuliers et professionnels."
        }
    ]

    const parcours = [
        { year: "2015", event: "Début de l'activité de coach informatique" },
        { year: "2018", event: "Spécialisation dans la formation seniors" },
        { year: "2020", event: "Lancement de la création de sites web vitrines" },
        { year: "2024", event: "Plus de 500 clients accompagnés à Nantes" }
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
                            className="text-center max-w-3xl mx-auto"
                        >
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">
                                <Sparkles className="w-3 h-3 mr-1" />
                                À propos
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
                                Votre <span className="text-gradient">Coach Informatique</span> à Nantes
                            </h1>
                            <p className="text-lg text-[var(--color-gray)] mb-8">
                                Passionné d'informatique depuis toujours, j'ai fait de l'accompagnement des particuliers
                                et des professionnels ma vocation. Mon objectif : rendre la technologie accessible à tous.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Ma Mission */}
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-[var(--color-dark)] mb-6">
                                    Ma <span className="text-gradient">Mission</span>
                                </h2>
                                <p className="text-[var(--color-gray)] mb-4">
                                    Trop souvent, l'informatique est perçue comme compliquée, frustrante ou réservée aux "initiés".
                                    Ma mission est de changer cette perception.
                                </p>
                                <p className="text-[var(--color-gray)] mb-4">
                                    Que vous soyez un senior qui souhaite communiquer avec ses petits-enfants par vidéo,
                                    un artisan qui veut créer sa présence en ligne, ou simplement quelqu'un dont l'ordinateur
                                    ne fonctionne plus, je suis là pour vous aider.
                                </p>
                                <p className="text-[var(--color-gray)]">
                                    <strong>Mon approche :</strong> pas de jargon, pas de jugement. Juste de la patience,
                                    des explications claires et une vraie volonté de vous rendre autonome.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-3xl text-white"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Coach Informatique</h3>
                                        <p className="text-white/80">Nantes et métropole</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        <span>Intervention à domicile dans toute la métropole nantaise</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        <span>Disponible du lundi au samedi</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Award className="w-5 h-5" />
                                        <span>Expérimenté</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Valeurs */}
                <section className="py-16 bg-[var(--color-light)]">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-[var(--color-dark)] mb-4">
                                Mes <span className="text-gradient">Valeurs</span>
                            </h2>
                            <p className="text-[var(--color-gray)] max-w-2xl mx-auto">
                                Ce qui me différencie d'un simple dépanneur informatique
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6 text-center">
                                            <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <value.icon className="w-7 h-7 text-[var(--color-primary)]" />
                                            </div>
                                            <h3 className="text-lg font-bold text-[var(--color-dark)] mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-gray)]">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Parcours */}
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-[var(--color-dark)] mb-4">
                                Mon <span className="text-gradient">Parcours</span>
                            </h2>
                        </motion.div>

                        <div className="max-w-2xl mx-auto">
                            {parcours.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 mb-6"
                                >
                                    <div className="w-20 shrink-0">
                                        <span className="text-2xl font-bold text-[var(--color-primary)]">{item.year}</span>
                                    </div>
                                    <div className="flex-1 bg-[var(--color-light)] p-4 rounded-xl">
                                        <p className="text-[var(--color-dark)]">{item.event}</p>
                                    </div>
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
                                Prêt à être accompagné ?
                            </h2>
                            <p className="text-white/90 mb-8 max-w-xl mx-auto">
                                Contactez-moi pour discuter de vos besoins. Premier échange gratuit et sans engagement.
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
