'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Clock, User } from 'lucide-react'
import Link from 'next/link'

export default function ArticlePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-light)] overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />
                    <div className="container-custom relative z-10 max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline mb-6">
                            <ArrowLeft className="w-4 h-4" />Retour au blog
                        </Link>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">Conseils</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                Sauvegardez vos données : le guide complet
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-[var(--color-gray)]">
                                <div className="flex items-center gap-2"><User className="w-4 h-4" />Mon Coach Informaclique</div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4" />4 min de lecture</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="container-custom max-w-4xl">
                        <article className="prose prose-lg max-w-none">
                            <p className="text-xl text-[var(--color-gray)] mb-8">
                                Photos, documents importants... Ne perdez plus jamais vos fichiers précieux grâce à une bonne stratégie de sauvegarde.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-8">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>⚠️ Le saviez-vous ?</strong> La panne de disque dur est la cause n°1 de perte de données.
                                    Et quand ça arrive, il est souvent trop tard pour récupérer vos fichiers.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">La règle du 3-2-1</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Les professionnels de l'informatique suivent cette règle simple :
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-[var(--color-light)] p-4 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-[var(--color-primary)]">3</div>
                                    <p className="text-sm text-[var(--color-dark)]">copies de vos données</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-[var(--color-primary)]">2</div>
                                    <p className="text-sm text-[var(--color-dark)]">supports différents</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-[var(--color-primary)]">1</div>
                                    <p className="text-sm text-[var(--color-dark)]">copie hors de chez vous</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Solution 1 : Le disque dur externe</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                C'est la solution la plus simple et économique. Pour 50-80€, vous avez un disque de 1 To (1000 Go)
                                qui peut stocker des milliers de photos et documents.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Conseil :</strong> Branchez-le au moins une fois par mois et copiez vos dossiers Documents, Photos et Vidéos.
                                    Mieux encore, utilisez l'outil "Historique des fichiers" de Windows pour automatiser.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Solution 2 : Le cloud</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Le cloud, c'est un espace de stockage sur internet. Vos fichiers sont en sécurité même si votre maison brûle
                                (on ne vous le souhaite pas !).
                            </p>
                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-[var(--color-dark)] mb-3">Services gratuits :</h4>
                                <ul className="list-disc list-inside text-[var(--color-gray)] space-y-2">
                                    <li><strong>Google Drive</strong> : 15 Go gratuits</li>
                                    <li><strong>OneDrive</strong> : 5 Go gratuits (intégré à Windows)</li>
                                    <li><strong>iCloud</strong> : 5 Go gratuits (Apple)</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Comment automatiser vos sauvegardes</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                La meilleure sauvegarde est celle qu'on n'a pas à penser ! Windows 10 et 11 ont un outil intégré :
                            </p>
                            <ol className="list-decimal list-inside text-[var(--color-gray)] mb-6 space-y-2">
                                <li>Branchez votre disque dur externe</li>
                                <li>Allez dans Paramètres → Mise à jour et sécurité → Sauvegarde</li>
                                <li>Cliquez sur "Ajouter un lecteur" et sélectionnez votre disque</li>
                                <li>Activez "Sauvegarder automatiquement mes fichiers"</li>
                            </ol>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'aide pour configurer vos sauvegardes ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je me déplace à votre domicile pour mettre en place une solution de sauvegarde adaptée à vos besoins.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Prendre rendez-vous
                                    </Button>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
