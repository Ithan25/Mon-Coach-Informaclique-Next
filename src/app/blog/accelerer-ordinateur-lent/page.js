'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Clock, User, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ArticlePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Article Header */}
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-light)] overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />

                    <div className="container-custom relative z-10 max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline mb-6">
                            <ArrowLeft className="w-4 h-4" />
                            Retour au blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">
                                Dépannage
                            </Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                5 astuces pour accélérer un ordinateur lent
                            </h1>

                            <div className="flex items-center gap-6 text-sm text-[var(--color-gray)]">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Mon Coach Informaclique
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    3 min de lecture
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-12 bg-white">
                    <div className="container-custom max-w-4xl">
                        <article className="prose prose-lg max-w-none">
                            <p className="text-xl text-[var(--color-gray)] mb-8">
                                Votre PC rame ? Découvrez les gestes simples pour lui redonner une seconde jeunesse sans changer de matériel.
                            </p>

                            <div className="bg-[var(--color-light)] p-6 rounded-2xl mb-8">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>💡 Bonne nouvelle :</strong> Un ordinateur qui devient lent avec le temps, c'est frustrant mais très courant.
                                    Dans 90% des cas, vous pouvez retrouver de bonnes performances sans acheter de nouveau matériel !
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">
                                1. Désinstallez les programmes inutiles
                            </h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Chaque programme installé sur votre ordinateur consomme des ressources, même quand vous ne l'utilisez pas.
                                Au fil du temps, on accumule des logiciels qu'on n'utilise plus jamais.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Comment faire :</strong> Allez dans <em>Paramètres → Applications</em> et parcourez la liste.
                                    Désinstallez tout ce que vous n'avez pas utilisé depuis plus de 6 mois.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">
                                2. Limitez les programmes au démarrage
                            </h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Beaucoup de logiciels se lancent automatiquement quand vous allumez votre ordinateur.
                                C'est souvent la première cause de lenteur au démarrage.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Comment faire :</strong> Appuyez sur <em>Ctrl + Shift + Échap</em> pour ouvrir le Gestionnaire des tâches.
                                    Cliquez sur l'onglet "Démarrage" et désactivez les programmes non essentiels
                                    (gardez votre antivirus, mais désactivez Spotify, Discord, etc.).
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">
                                3. Nettoyez votre disque dur
                            </h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Windows accumule des fichiers temporaires qui prennent de la place et ralentissent votre système.
                                Un nettoyage régulier est recommandé.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Comment faire :</strong> Tapez "Nettoyage de disque" dans la barre de recherche Windows et lancez l'outil.
                                    Cochez toutes les cases et cliquez sur "Nettoyer les fichiers système" pour un nettoyage complet.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">
                                4. Redémarrez régulièrement votre ordinateur
                            </h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Beaucoup de personnes mettent leur PC en veille sans jamais le redémarrer.
                                Or, un redémarrage libère la mémoire vive et résout de nombreux petits problèmes.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Conseil :</strong> Prenez l'habitude de redémarrer votre ordinateur au moins une fois par semaine.
                                    C'est simple mais très efficace !
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">
                                5. Vérifiez la présence de virus
                            </h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Des logiciels malveillants peuvent tourner en arrière-plan et consommer vos ressources.
                                Un antivirus à jour est essentiel.
                            </p>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>Bonne nouvelle :</strong> Windows Defender, l'antivirus intégré à Windows 10 et 11, est gratuit et très efficace.
                                    Lancez une analyse complète de temps en temps.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Toujours des problèmes ?</h3>
                                <p className="mb-6 text-white/90">
                                    Si ces astuces ne suffisent pas, le problème peut être plus profond :
                                    disque dur défaillant, manque de RAM, ou virus tenace.
                                    Je me déplace à votre domicile à Nantes pour diagnostiquer et résoudre le problème.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Demander un dépannage
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
