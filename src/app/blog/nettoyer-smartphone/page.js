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
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">Mobile</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                Nettoyer son smartphone pour qu'il reste rapide
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
                                Votre téléphone est lent ou plein ? Quelques gestes simples pour lui redonner de la vitesse et libérer de l'espace.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Libérez de l'espace de stockage</h2>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">Supprimez les applications inutilisées</h3>
                            <p className="text-[var(--color-gray)] mb-4">
                                Faites le tri dans vos applications. Si vous ne l'avez pas ouverte depuis 3 mois, désinstallez-la.
                                Vous pourrez toujours la réinstaller plus tard.
                            </p>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">Videz le cache des applications</h3>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Android :</strong> Paramètres → Applications → [nom de l'app] → Stockage → Vider le cache
                                </p>
                                <p className="text-[var(--color-dark)] m-0 mt-2">
                                    <strong>iPhone :</strong> Désinstallez et réinstallez l'app (le cache sera supprimé)
                                </p>
                            </div>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">Transférez vos photos</h3>
                            <p className="text-[var(--color-gray)] mb-4">
                                Les photos et vidéos prennent énormément de place. Sauvegardez-les sur votre ordinateur ou sur le cloud
                                (Google Photos, iCloud), puis supprimez-les de votre téléphone.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Préservez votre batterie</h2>
                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-6">
                                <ul className="list-disc list-inside text-[var(--color-gray)] m-0 space-y-2">
                                    <li>Évitez de charger à 100% systématiquement (80% suffit)</li>
                                    <li>Ne laissez pas le téléphone se décharger complètement</li>
                                    <li>Désactivez le Bluetooth et le GPS quand inutilisés</li>
                                    <li>Réduisez la luminosité de l'écran</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Faites les mises à jour</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Les mises à jour du système et des applications corrigent des bugs et des failles de sécurité.
                                Acceptez-les régulièrement !
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Redémarrez régulièrement</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Comme un ordinateur, votre téléphone a besoin d'être redémarré de temps en temps.
                                Un redémarrage hebdomadaire libère la mémoire et résout beaucoup de petits soucis.
                            </p>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'aide avec votre smartphone ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je vous apprends à maîtriser votre téléphone : transfert de photos, configuration, utilisation des apps...
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
