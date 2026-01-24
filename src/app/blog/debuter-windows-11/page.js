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
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">Formation</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                Bien débuter sur Windows 11 : les bases
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
                                Vous venez d'avoir un nouvel ordinateur sous Windows 11 ? Voici comment prendre vos marques rapidement.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Le menu Démarrer</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Le menu Démarrer est votre point de départ pour tout. Dans Windows 11, il est centré dans la barre des tâches.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    👆 <strong>Cliquez sur l'icône Windows</strong> au centre de la barre en bas de l'écran.
                                    Vous y trouverez vos applications épinglées et une barre de recherche très pratique.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">La barre des tâches</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                C'est la barre en bas de l'écran. Elle affiche vos applications ouvertes et celles que vous avez épinglées.
                            </p>
                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    💡 <strong>Astuce :</strong> Pour épingler une application, faites un clic droit dessus et choisissez
                                    "Épingler à la barre des tâches". Elle sera toujours accessible en un clic !
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les raccourcis clavier essentiels</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">Windows + E</p>
                                    <p className="text-sm text-[var(--color-dark)] m-0">Ouvrir l'explorateur de fichiers</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">Windows + I</p>
                                    <p className="text-sm text-[var(--color-dark)] m-0">Ouvrir les paramètres</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">Alt + Tab</p>
                                    <p className="text-sm text-[var(--color-dark)] m-0">Basculer entre les fenêtres</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">Windows + L</p>
                                    <p className="text-sm text-[var(--color-dark)] m-0">Verrouiller l'écran</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">Ctrl + C</p>
                                    <p className="text-sm text-[var(--color-dark)] m-0">Copier</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <p className="font-mono text-sm text-[var(--color-primary)] mb-1">Ctrl + V</p>
                                    <p className="text-sm text-[var(--color-dark)] m-0">Coller</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Personnaliser Windows 11</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Vous pouvez personnaliser l'apparence de votre bureau très facilement :
                            </p>
                            <ol className="list-decimal list-inside text-[var(--color-gray)] mb-6 space-y-2">
                                <li>Faites un clic droit sur le bureau</li>
                                <li>Choisissez "Personnaliser"</li>
                                <li>Changez le fond d'écran, les couleurs, et plus encore</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">N'ayez pas peur d'explorer !</h2>
                            <div className="bg-green-50 p-6 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0 text-lg">
                                    🎯 <strong>Conseil de coach :</strong> Vous ne pouvez rien casser en cliquant !
                                    Le meilleur moyen d'apprendre est d'explorer. Si vous faites une erreur,
                                    la plupart des actions sont annulables avec Ctrl + Z.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'une formation personnalisée ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je me déplace à votre domicile pour vous apprendre à maîtriser Windows 11 à votre rythme.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Réserver une formation
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
