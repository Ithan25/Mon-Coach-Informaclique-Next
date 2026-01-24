'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Clock, User, Shield } from 'lucide-react'
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
                            <ArrowLeft className="w-4 h-4" />
                            Retour au blog
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">Sécurité</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-6">
                                Comment reconnaître et éviter les emails de phishing
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
                                Les arnaques par email sont de plus en plus sophistiquées. Apprenez à les détecter pour protéger vos données personnelles et bancaires.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-8">
                                <p className="text-[var(--color-dark)] m-0">
                                    <strong>⚠️ Attention :</strong> Le phishing (hameçonnage) est la technique d'arnaque la plus répandue sur internet.
                                    Les escrocs se font passer pour votre banque, les impôts, la Poste, Netflix... pour voler vos identifiants.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les indices d'un email frauduleux</h2>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">1. L'adresse de l'expéditeur est bizarre</h3>
                            <p className="text-[var(--color-gray)] mb-4">
                                Regardez attentivement l'adresse email, pas seulement le nom affiché. Un email officiel des impôts viendra de @impots.gouv.fr,
                                jamais de impots-gouv@gmail.com ou service-impots@random123.com.
                            </p>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">2. Le message crée un sentiment d'urgence</h3>
                            <p className="text-[var(--color-gray)] mb-4">
                                "Votre compte sera suspendu dans 24h", "Action immédiate requise", "Dernière chance"...
                                Ces formulations visent à vous faire paniquer pour que vous agissiez sans réfléchir.
                            </p>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">3. Des fautes d'orthographe</h3>
                            <p className="text-[var(--color-gray)] mb-4">
                                Les emails officiels sont relus. Si vous voyez des fautes grossières ou une mise en page approximative, méfiance !
                            </p>

                            <h3 className="text-xl font-bold text-[var(--color-dark)] mt-6 mb-3">4. On vous demande vos identifiants</h3>
                            <p className="text-[var(--color-gray)] mb-4">
                                Votre banque ne vous demandera JAMAIS votre mot de passe ou vos codes par email. C'est la règle d'or.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Les bons réflexes</h2>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl mb-6">
                                <ul className="list-disc list-inside text-[var(--color-dark)] m-0 space-y-2">
                                    <li><strong>Ne cliquez jamais</strong> sur un lien dans un email douteux</li>
                                    <li><strong>Allez directement</strong> sur le site officiel en tapant l'adresse vous-même</li>
                                    <li><strong>En cas de doute</strong>, appelez l'organisme concerné avec le numéro officiel</li>
                                    <li><strong>Ne téléchargez jamais</strong> de pièce jointe suspecte</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Que faire si vous avez cliqué ?</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Pas de panique, mais agissez vite :
                            </p>
                            <ol className="list-decimal list-inside text-[var(--color-gray)] mb-6 space-y-2">
                                <li>Changez immédiatement vos mots de passe</li>
                                <li>Contactez votre banque si vous avez donné des infos bancaires</li>
                                <li>Signalez l'arnaque sur signal-spam.fr</li>
                                <li>Faites une analyse antivirus complète</li>
                            </ol>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'aide pour sécuriser vos emails ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je vous apprends à reconnaître les arnaques et à configurer votre messagerie pour filtrer les spams.
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
