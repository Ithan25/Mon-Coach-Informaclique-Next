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
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">Dépannage</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                Améliorer sa connexion WiFi à la maison
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
                                Internet rame dans certaines pièces ? Voici comment optimiser votre réseau sans fil.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Bien placer sa box internet</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                L'emplacement de votre box est crucial pour la qualité du signal WiFi.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-[var(--color-dark)] mb-3">✓ Les bonnes pratiques :</h4>
                                <ul className="list-disc list-inside text-[var(--color-gray)] m-0 space-y-2">
                                    <li>Placez la box au <strong>centre</strong> de votre logement si possible</li>
                                    <li>Mettez-la en <strong>hauteur</strong> (sur un meuble, pas au sol)</li>
                                    <li>Évitez de la mettre près du sol ou dans un meuble fermé</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-[var(--color-dark)] mb-3">✗ Ce qui bloque le signal :</h4>
                                <ul className="list-disc list-inside text-[var(--color-gray)] m-0 space-y-2">
                                    <li>Les <strong>murs épais</strong> (béton, pierre)</li>
                                    <li>Les <strong>micro-ondes</strong> (utilisent la même fréquence)</li>
                                    <li>Les <strong>miroirs</strong> et surfaces métalliques</li>
                                    <li>Les <strong>aquariums</strong></li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Changez de canal WiFi</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Si vos voisins utilisent le même canal WiFi que vous, les signaux interfèrent.
                                C'est comme si tout le monde parlait en même temps sur la même fréquence radio.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Comment faire :</strong> Connectez-vous à l'interface de votre box (généralement 192.168.1.1)
                                    et cherchez l'option "Canal WiFi" ou demandez à votre fournisseur.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Solutions si ça ne suffit pas</h2>
                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">Répéteur WiFi</h4>
                                    <p className="text-sm text-[var(--color-gray)] mb-2">30-50€</p>
                                    <p className="text-xs text-[var(--color-gray)] m-0">Amplifie le signal dans les zones mortes</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">Prises CPL</h4>
                                    <p className="text-sm text-[var(--color-gray)] mb-2">50-80€</p>
                                    <p className="text-xs text-[var(--color-gray)] m-0">Utilisent le réseau électrique pour transporter internet</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] mb-2">Système Mesh</h4>
                                    <p className="text-sm text-[var(--color-gray)] mb-2">150-300€</p>
                                    <p className="text-xs text-[var(--color-gray)] m-0">Plusieurs bornes pour un réseau uniforme</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">L'astuce simple qui marche</h2>
                            <div className="bg-[var(--color-accent)]/20 p-6 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0 text-lg">
                                    💡 <strong>Redémarrez votre box une fois par mois !</strong><br />
                                    Débranchez-la 30 secondes puis rebranchez. Ça résout beaucoup de petits problèmes de connexion.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Problèmes de connexion persistants ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je me déplace pour diagnostiquer votre réseau et trouver la meilleure solution.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Demander un diagnostic
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
