'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, Database, Lock, Eye, UserCheck, Clock, Mail, Settings, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function ConfidentialitePage() {
    const sections = [
        {
            icon: Database,
            title: "Données collectées",
            content: (
                <div className="space-y-3">
                    <p>
                        Lors de l'utilisation de notre site, nous pouvons collecter les données suivantes :
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li><strong>Via le formulaire de contact :</strong> Nom, prénom, adresse email, numéro de téléphone, message</li>
                        <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées (via cookies techniques)</li>
                    </ul>
                    <p>
                        Aucune donnée sensible n'est collectée (origine ethnique, opinions politiques, données de santé, etc.).
                    </p>
                </div>
            )
        },
        {
            icon: Eye,
            title: "Finalité du traitement",
            content: (
                <div className="space-y-3">
                    <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>Répondre à vos demandes de contact et de devis</li>
                        <li>Assurer le bon fonctionnement du site web</li>
                        <li>Améliorer nos services et l'expérience utilisateur</li>
                        <li>Respecter nos obligations légales</li>
                    </ul>
                    <p>
                        <strong>Nous ne vendons jamais vos données à des tiers.</strong>
                    </p>
                </div>
            )
        },
        {
            icon: Lock,
            title: "Base légale du traitement",
            content: (
                <div className="space-y-3">
                    <p>Le traitement de vos données repose sur :</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li><strong>Votre consentement :</strong> Lorsque vous remplissez le formulaire de contact</li>
                        <li><strong>L'intérêt légitime :</strong> Pour l'amélioration de nos services et l'analyse du trafic</li>
                        <li><strong>L'exécution contractuelle :</strong> Pour la réalisation de prestations demandées</li>
                    </ul>
                </div>
            )
        },
        {
            icon: Clock,
            title: "Durée de conservation",
            content: (
                <div className="space-y-3">
                    <p>Vos données sont conservées :</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li><strong>Données de contact :</strong> 3 ans à compter du dernier échange</li>
                        <li><strong>Données clients :</strong> Durée de la relation commerciale + 5 ans (obligations comptables)</li>
                        <li><strong>Cookies techniques :</strong> 13 mois maximum</li>
                    </ul>
                    <p>
                        Au-delà de ces délais, vos données sont supprimées ou anonymisées.
                    </p>
                </div>
            )
        },
        {
            icon: UserCheck,
            title: "Vos droits",
            content: (
                <div className="space-y-3">
                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
                        <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                        <li><strong>Droit de suppression :</strong> Demander l'effacement de vos données</li>
                        <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                        <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                        <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
                    </ul>
                    <p>
                        Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@moncoachinformaclique.fr" className="text-[var(--color-primary)] hover:underline">contact@moncoachinformaclique.fr</a>
                    </p>
                </div>
            )
        },
        {
            icon: Shield,
            title: "Sécurité des données",
            content: (
                <div className="space-y-3">
                    <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>Connexion sécurisée HTTPS (certificat SSL)</li>
                        <li>Hébergement sur serveurs sécurisés (Vercel)</li>
                        <li>Accès restreint aux données personnelles</li>
                        <li>Mises à jour régulières de sécurité</li>
                    </ul>
                </div>
            )
        },
        {
            icon: Settings,
            title: "Cookies",
            content: (
                <div className="space-y-3">
                    <p>Ce site utilise uniquement des cookies strictement nécessaires au fonctionnement du site :</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li><strong>Cookies techniques :</strong> Gestion de la session, préférences d'affichage</li>
                    </ul>
                    <p>
                        Nous n'utilisons pas de cookies publicitaires ni de traceurs tiers (Facebook Pixel, Google Analytics, etc.).
                    </p>
                    <p>
                        Vous pouvez gérer les cookies via les paramètres de votre navigateur.
                    </p>
                </div>
            )
        },
        {
            icon: RefreshCw,
            title: "Transfert de données",
            content: (
                <div className="space-y-3">
                    <p>
                        Notre site est hébergé par Vercel (États-Unis). Le transfert de données vers les États-Unis
                        est encadré par le Data Privacy Framework UE-États-Unis.
                    </p>
                    <p>
                        Les emails sont envoyés via Resend, qui garantit également la conformité RGPD.
                    </p>
                </div>
            )
        },
        {
            icon: Mail,
            title: "Contact et réclamation",
            content: (
                <div className="space-y-3">
                    <p>
                        Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                    </p>
                    <p>
                        <strong>Email :</strong> <a href="mailto:contact@moncoachinformaclique.fr" className="text-[var(--color-primary)] hover:underline">contact@moncoachinformaclique.fr</a><br />
                        <strong>Téléphone :</strong> <a href="tel:+33640749962" className="text-[var(--color-primary)] hover:underline">06 40 74 99 62</a>
                    </p>
                    <p>
                        En cas de litige, vous pouvez également saisir la CNIL (Commission Nationale de l'Informatique et des Libertés) :
                        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline ml-1">www.cnil.fr</a>
                    </p>
                    <p className="pt-2">
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
                                <Shield className="w-3 h-3 mr-1" />
                                Protection des données
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
                                Politique de <span className="text-gradient">Confidentialité</span>
                            </h1>
                            <p className="text-lg text-[var(--color-gray)]">
                                Votre vie privée est importante pour nous. Cette politique explique comment nous collectons,
                                utilisons et protégeons vos données personnelles conformément au RGPD.
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
