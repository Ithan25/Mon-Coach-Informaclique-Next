'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { FileText, User, Building, Mail, Phone, Globe, Server, Shield, Scale } from 'lucide-react'
import Link from 'next/link'

export default function MentionsLegalesPage() {
    const sections = [
        {
            icon: User,
            title: "Éditeur du site",
            content: (
                <div className="space-y-2">
                    <p><strong>Nom :</strong> Ithan Boismard-Gillot</p>
                    <p><strong>Statut :</strong> Auto-entrepreneur</p>
                    <p><strong>Activité :</strong> Dépannage informatique, formation et création de sites web</p>
                    <p><strong>Adresse :</strong> Nantes, Loire-Atlantique (44), France</p>
                    <p><strong>Téléphone :</strong> <a href="tel:+33640749962" className="text-[var(--color-primary)] hover:underline">06 40 74 99 62</a></p>
                    <p><strong>Email :</strong> <a href="mailto:contact@moncoachinformaclique.fr" className="text-[var(--color-primary)] hover:underline">contact@moncoachinformaclique.fr</a></p>
                </div>
            )
        },
        {
            icon: Building,
            title: "Hébergement",
            content: (
                <div className="space-y-2">
                    <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                    <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                    <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">vercel.com</a></p>
                </div>
            )
        },
        {
            icon: Globe,
            title: "Propriété intellectuelle",
            content: (
                <div className="space-y-3">
                    <p>
                        L'ensemble du contenu de ce site (textes, images, logos, graphismes, vidéos, etc.) est la propriété exclusive de Mon Coach Informaclique, sauf mention contraire.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                    </p>
                    <p>
                        Le logo et le nom "Mon Coach Informaclique" sont des marques déposées. Leur utilisation sans autorisation est prohibée.
                    </p>
                </div>
            )
        },
        {
            icon: Shield,
            title: "Données personnelles",
            content: (
                <div className="space-y-3">
                    <p>
                        Les informations recueillies via le formulaire de contact sont destinées uniquement à répondre à vos demandes et ne sont jamais transmises à des tiers.
                    </p>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                    </p>
                    <p>
                        Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@moncoachinformaclique.fr" className="text-[var(--color-primary)] hover:underline">contact@moncoachinformaclique.fr</a>
                    </p>
                    <p>
                        Pour plus d'informations, consultez notre <Link href="/confidentialite" className="text-[var(--color-primary)] hover:underline">politique de confidentialité</Link>.
                    </p>
                </div>
            )
        },
        {
            icon: Server,
            title: "Cookies",
            content: (
                <div className="space-y-3">
                    <p>
                        Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires.
                    </p>
                    <p>
                        Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt.
                    </p>
                </div>
            )
        },
        {
            icon: Scale,
            title: "Responsabilité",
            content: (
                <div className="space-y-3">
                    <p>
                        Mon Coach Informaclique s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne peut garantir leur complétude ou leur actualité.
                    </p>
                    <p>
                        L'utilisation des informations et contenus disponibles sur ce site se fait sous la seule responsabilité de l'utilisateur.
                    </p>
                    <p>
                        Les liens hypertextes présents sur ce site peuvent renvoyer vers d'autres sites. Mon Coach Informaclique décline toute responsabilité quant au contenu de ces sites externes.
                    </p>
                </div>
            )
        },
        {
            icon: FileText,
            title: "Droit applicable",
            content: (
                <div className="space-y-3">
                    <p>
                        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                    </p>
                    <p>
                        <strong>Dernière mise à jour :</strong> Janvier 2026
                    </p>
                </div>
            )
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
                            className="text-center max-w-3xl mx-auto"
                        >
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">
                                <FileText className="w-3 h-3 mr-1" />
                                Informations légales
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
                                Mentions <span className="text-gradient">Légales</span>
                            </h1>
                            <p className="text-lg text-[var(--color-gray)]">
                                Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
                                voici les informations légales relatives à ce site.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-[var(--color-light)] rounded-2xl p-6 md:p-8"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <section.icon className="w-6 h-6 text-[var(--color-primary)]" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-[var(--color-dark)] mb-4">
                                                {section.title}
                                            </h2>
                                            <div className="text-[var(--color-gray)] leading-relaxed">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
