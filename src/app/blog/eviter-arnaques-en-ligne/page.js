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
                                Les arnaques en ligne les plus courantes
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
                                Faux support Microsoft, loterie gagnée, prince nigérian... Les escrocs sont créatifs ! Voici comment les reconnaître.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">1. Le faux support technique</h2>
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>⚠️ Le piège :</strong> Une fenêtre apparaît sur votre écran disant que votre PC est infecté.
                                    Un numéro de téléphone vous invite à appeler le "support Microsoft".
                                </p>
                            </div>
                            <p className="text-[var(--color-gray)] mb-4">
                                <strong>C'est TOUJOURS une arnaque.</strong> Microsoft ne vous contactera jamais de cette façon.
                                Ces faux techniciens vous feront payer des centaines d'euros pour un problème inexistant.
                            </p>
                            <div className="bg-green-50 p-4 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    ✓ <strong>Que faire :</strong> Fermez la fenêtre (Alt+F4 si elle bloque). Ne cliquez sur rien. Redémarrez votre ordinateur.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">2. La loterie / l'héritage surprise</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                "Félicitations ! Vous avez gagné 1 million d'euros !" ou "Un riche parent éloigné vous a légué sa fortune..."
                            </p>
                            <div className="bg-[var(--color-light)] p-4 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    🎯 <strong>La règle :</strong> Si vous n'avez pas joué, vous ne pouvez pas gagner.
                                    Et les vrais héritages passent par des notaires, pas par email.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">3. L'arnaque au colis</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Un SMS vous dit : "Votre colis est en attente. Payez 2€ de frais de douane pour le recevoir."
                                Le lien mène vers un faux site qui vole vos coordonnées bancaires.
                            </p>
                            <div className="bg-red-50 p-4 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0">
                                    ⛔ <strong>Ne cliquez jamais</strong> sur ces liens. La Poste et les transporteurs ne demandent jamais de paiement par SMS.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">4. L'arnaque sentimentale</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Sur les sites de rencontre, méfiez-vous des personnes qui finissent par demander de l'argent.
                                Ces escrocs travaillent leur victime pendant des semaines avant de demander une "aide financière urgente".
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">5. Le faux remboursement</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                "La CAF doit vous rembourser 372€" ou "Les impôts vous doivent de l'argent".
                                Ces messages renvoient vers de faux sites officiels pour voler vos identifiants.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les règles d'or</h2>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-6 rounded-r-lg mb-6">
                                <ul className="list-none m-0 space-y-3">
                                    <li>🔐 Ne donnez JAMAIS vos coordonnées bancaires</li>
                                    <li>💸 Ne faites JAMAIS de virement à un inconnu</li>
                                    <li>🤔 En cas de doute, appelez quelqu'un de confiance</li>
                                    <li>🌐 Tapez vous-même l'adresse des sites officiels</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Victime d'une arnaque ou d'un doute ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je peux vous aider à vérifier si c'est une arnaque et sécuriser votre ordinateur.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Me contacter
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
