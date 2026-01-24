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
                                Le cloud expliqué simplement (et pourquoi l'utiliser)
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-[var(--color-gray)]">
                                <div className="flex items-center gap-2"><User className="w-4 h-4" />Mon Coach Informaclique</div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4" />3 min de lecture</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="container-custom max-w-4xl">
                        <article className="prose prose-lg max-w-none">
                            <p className="text-xl text-[var(--color-gray)] mb-8">
                                Le "cloud", ce nuage informatique dont tout le monde parle. Qu'est-ce que c'est vraiment et comment en profiter ?
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Le cloud, c'est quoi ?</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Le cloud, c'est tout simplement un espace de stockage sur internet. Au lieu de garder vos fichiers uniquement
                                sur votre ordinateur, vous les stockez sur des serveurs sécurisés accessibles partout dans le monde.
                            </p>
                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    💭 <strong>Imaginez :</strong> Vos photos de vacances sont sur votre ordinateur. Un jour, l'ordinateur tombe en panne.
                                    Avec le cloud, vos photos sont en sécurité ailleurs et vous pouvez les récupérer sur n'importe quel appareil.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les avantages du cloud</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">📱 Accès partout</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Vos fichiers depuis votre PC, téléphone, tablette...</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">🔒 Sécurité</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Protégé même si votre appareil est volé ou cassé</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">👨‍👩‍👧 Partage facile</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Envoyez des photos à votre famille en un clic</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">💾 Espace libéré</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Moins de fichiers sur votre appareil = plus de place</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les services cloud gratuits</h2>
                            <div className="space-y-4 mb-8">
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)]">Google Drive - 15 Go gratuits</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Idéal si vous avez déjà un compte Gmail. Très simple à utiliser.</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)]">OneDrive - 5 Go gratuits</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Intégré à Windows 10 et 11. Se synchronise automatiquement.</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)]">iCloud - 5 Go gratuits</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0">Parfait pour les utilisateurs Apple (iPhone, iPad, Mac).</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Comment commencer ?</h2>
                            <ol className="list-decimal list-inside text-[var(--color-gray)] mb-6 space-y-2">
                                <li>Créez un compte Google si vous n'en avez pas</li>
                                <li>Allez sur <strong>drive.google.com</strong></li>
                                <li>Cliquez sur "Nouveau" puis "Importer un fichier"</li>
                                <li>Sélectionnez les fichiers à sauvegarder</li>
                                <li>C'est fait ! Vos fichiers sont maintenant en sécurité</li>
                            </ol>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'aide pour configurer le cloud ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je vous accompagne pour configurer et utiliser le cloud en toute simplicité.
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
