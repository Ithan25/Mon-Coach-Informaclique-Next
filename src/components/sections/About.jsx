'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Heart,
    MapPin,
    GraduationCap,
    Code,
    ArrowRight,
    Lightbulb,
    Users
} from 'lucide-react'

const values = [
    {
        icon: Heart,
        title: "Patience & Pédagogie",
        description: "J'explique sans jargon technique"
    },
    {
        icon: MapPin,
        title: "Proximité",
        description: "Intervention à domicile à Nantes"
    },
    {
        icon: Lightbulb,
        title: "Passion",
        description: "L'informatique depuis toujours"
    },
    {
        icon: Users,
        title: "Écoute",
        description: "Je m'adapte à votre niveau"
    },
]

export default function About() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="a-propos" className="section-padding bg-[var(--color-light)] relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] rounded-full opacity-5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-secondary)] rounded-full opacity-5 blur-3xl" />

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
                        À propos
                    </Badge>
                    <h2 className="mb-6">
                        Un passionné <span className="text-gradient">à votre service</span>
                    </h2>
                    <p className="text-lg text-[var(--color-gray)]">
                        Titulaire d'un BTS Services Informatiques aux Organisations et actuellement en Bachelor
                        Développeur Web, je lance mon activité d'accompagnement informatique à Nantes.
                    </p>
                </motion.div>

                {/* Main content */}
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 flex justify-center lg:justify-start"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-lg text-center max-w-xs w-full">
                            {/* Avatar */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-6xl">
                                👨‍💻
                            </div>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">
                                Mon Coach Informaclique
                            </h3>
                            <p className="text-[var(--color-gray)] text-sm mb-4">
                                Dépannage, Formation & Création Web
                            </p>

                            {/* Diplomas */}
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                <Badge variant="outline" className="gap-1">
                                    <GraduationCap className="w-3 h-3" />
                                    BTS SIO
                                </Badge>
                                <Badge variant="outline" className="gap-1">
                                    <Code className="w-3 h-3" />
                                    Bachelor Dev Web
                                </Badge>
                            </div>

                            <Button onClick={scrollToContact} className="w-full gap-2">
                                Me contacter
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Center & Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Description */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="font-bold text-[var(--color-dark)] text-lg mb-4">Ma mission</h4>
                            <p className="text-[var(--color-gray)] leading-relaxed">
                                J'ai toujours été passionné par l'informatique et j'aime partager mes connaissances.
                                Mon objectif ? Rendre la technologie accessible à tous grâce à une approche
                                humaine et pédagogique. Que vous ayez besoin d'un dépannage, d'une formation
                                personnalisée ou d'un site web pour votre commerce, je suis là pour vous aider.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex gap-3 items-center p-4 bg-white rounded-xl shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                                        <value.icon className="w-5 h-5 text-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-dark)] text-sm">
                                            {value.title}
                                        </h4>
                                        <p className="text-xs text-[var(--color-gray)]">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Zone d'intervention */}
                        <div className="bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-secondary)]/20 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-[var(--color-accent-dark)]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">Zone d'intervention</h4>
                                    <p className="text-[var(--color-gray)] text-sm">
                                        Nantes et toutes les communes de l'agglomération : Rezé, Saint-Herblain,
                                        Orvault, Carquefou, Vertou, Bouguenais, La Chapelle-sur-Erdre...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
