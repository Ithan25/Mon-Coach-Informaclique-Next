'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Wrench,
    GraduationCap,
    Smartphone,
    HardDrive,
    Globe,
    ArrowRight,
    Clock,
    Euro
} from 'lucide-react'

const services = [
    {
        icon: Wrench,
        title: "Dépannage à Domicile",
        description: "Diagnostic et réparation de vos problèmes informatiques directement chez vous. Virus, lenteurs, pannes... je trouve la solution !",
        price: "30€/h",
        color: "var(--color-primary)",
        bgColor: "var(--color-primary)",
    },
    {
        icon: GraduationCap,
        title: "Formation Informatique",
        description: "Apprenez à maîtriser Windows, Office, internet et vos logiciels du quotidien avec des cours adaptés à votre rythme.",
        price: "Sur devis",
        color: "var(--color-blue)",
        bgColor: "var(--color-blue)",
    },
    {
        icon: Smartphone,
        title: "Accompagnement Mobile",
        description: "Prenez en main votre smartphone ou tablette : applications, photos, messagerie, réseaux sociaux...",
        price: "25€/h",
        color: "var(--color-secondary)",
        bgColor: "var(--color-secondary)",
    },
    {
        icon: HardDrive,
        title: "Installation Matériel",
        description: "Installation et configuration de votre nouvel ordinateur, imprimante, box internet, périphériques...",
        price: "30€/h",
        color: "var(--color-primary-dark)",
        bgColor: "var(--color-primary-light)",
    },
    {
        icon: Globe,
        title: "Création Sites Web",
        description: "Je crée votre site vitrine professionnel pour booster votre visibilité en ligne. Idéal pour commerces et artisans !",
        price: "À partir de 500€",
        color: "var(--color-blue)",
        bgColor: "var(--color-blue-light)",
        featured: true,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export default function Services() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="services" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] rounded-full opacity-5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-5 blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        Mes Services
                    </Badge>
                    <h2 className="mb-6">
                        Des solutions <span className="text-gradient">sur mesure</span> pour tous vos besoins
                    </h2>
                    <p className="text-lg text-[var(--color-gray)]">
                        Que vous soyez particulier ou professionnel, je vous accompagne dans tous vos projets informatiques
                        avec patience et pédagogie.
                    </p>
                </motion.div>

                {/* Services Grid - 5 services in custom layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
                        >
                            <Card
                                className={`h-full hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden ${service.featured ? 'ring-2 ring-[var(--color-primary)] shadow-lg' : ''
                                    }`}
                            >
                                {service.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="default" className="text-xs">
                                            Nouveau
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader>
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${service.bgColor}20` }}
                                    >
                                        <service.icon
                                            className="w-7 h-7"
                                            style={{ color: service.color }}
                                        />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter className="flex items-center justify-between pt-4 border-t border-[var(--color-light)]">
                                    <div className="flex items-center gap-2">
                                        <Euro className="w-4 h-4 text-[var(--color-primary)]" />
                                        <span className="font-semibold text-[var(--color-dark)]">
                                            {service.price}
                                        </span>
                                    </div>
                                    <Button variant="ghost" size="sm" className="gap-1 group/btn" onClick={scrollToContact}>
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--color-light)] rounded-2xl">
                        <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                        <span className="text-[var(--color-gray)]">
                            Besoin d'un service personnalisé ?
                        </span>
                        <Button size="sm" onClick={scrollToContact}>
                            Contactez-moi
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
