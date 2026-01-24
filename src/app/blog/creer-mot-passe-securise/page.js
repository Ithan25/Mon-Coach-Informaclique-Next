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
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">Sécurité</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                Comment créer un mot de passe vraiment sécurisé
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
                                123456, azerty, votre date de naissance... Ce sont les pires mots de passe. Voici comment en créer un vraiment sécurisé.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-8">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>⚠️ Chiffre choc :</strong> 80% des piratages sont dus à des mots de passe faibles ou réutilisés.
                                    Un mot de passe comme "123456" est cracké en moins d'une seconde !
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les critères d'un bon mot de passe</h2>
                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-6">
                                <ul className="list-none m-0 space-y-3">
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <strong>Long</strong> : minimum 12 caractères</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <strong>Varié</strong> : majuscules, minuscules, chiffres, symboles</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <strong>Unique</strong> : différent pour chaque site</li>
                                    <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> <strong>Impersonnel</strong> : pas de date de naissance, nom du chien...</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">La méthode de la phrase</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                C'est la technique la plus simple pour créer un mot de passe long et mémorisable :
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] mb-2">
                                    <strong>Exemple :</strong> Prenez une phrase personnelle
                                </p>
                                <p className="text-[var(--color-gray)] mb-2">
                                    "Mon chat Félix a 3 ans depuis 2021"
                                </p>
                                <p className="text-[var(--color-dark)]">
                                    → Devient : <code className="bg-[var(--color-light)] px-2 py-1 rounded">McFa3ad2021!</code>
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Utilisez un gestionnaire de mots de passe</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Retenir des dizaines de mots de passe différents est impossible. La solution : un gestionnaire de mots de passe.
                            </p>
                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-[var(--color-dark)] mb-3">Options recommandées :</h4>
                                <ul className="list-disc list-inside text-[var(--color-gray)] space-y-2">
                                    <li><strong>Bitwarden</strong> : gratuit et open source</li>
                                    <li><strong>Gestionnaire de Chrome/Firefox</strong> : intégré et pratique</li>
                                    <li><strong>Dashlane</strong> : payant mais très complet</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Ce qu'il ne faut JAMAIS faire</h2>
                            <div className="bg-red-50 p-6 rounded-xl mb-6">
                                <ul className="list-none m-0 space-y-3">
                                    <li className="flex items-center gap-3"><span className="text-red-500 text-xl">✗</span> Utiliser le même mot de passe partout</li>
                                    <li className="flex items-center gap-3"><span className="text-red-500 text-xl">✗</span> Votre date de naissance ou celle de vos proches</li>
                                    <li className="flex items-center gap-3"><span className="text-red-500 text-xl">✗</span> Le nom de votre animal de compagnie</li>
                                    <li className="flex items-center gap-3"><span className="text-red-500 text-xl">✗</span> Écrire vos mots de passe sur un post-it</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'aide pour sécuriser vos comptes ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je vous accompagne pour configurer un gestionnaire de mots de passe et sécuriser tous vos comptes.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Demander une formation
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
