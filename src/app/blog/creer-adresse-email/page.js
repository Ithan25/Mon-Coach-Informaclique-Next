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
                                Créer sa première adresse email (guide pas à pas)
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-[var(--color-gray)]">
                                <div className="flex items-center gap-2"><User className="w-4 h-4" />Mon Coach Informaclique</div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4" />5 min de lecture</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="container-custom max-w-4xl">
                        <article className="prose prose-lg max-w-none">
                            <p className="text-xl text-[var(--color-gray)] mb-8">
                                Vous n'avez pas encore d'email ? Suivez ce guide simple pour créer votre adresse Gmail gratuitement.
                            </p>

                            <div className="bg-[var(--color-light)] p-6 rounded-xl mb-8">
                                <p className="text-[var(--color-dark)] m-0">
                                    📧 <strong>Pourquoi Gmail ?</strong> C'est gratuit, facile à utiliser, et vous aurez accès à
                                    Google Drive (stockage cloud), Google Photos, et bien d'autres services.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Étape 1 : Aller sur Gmail</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Ouvrez votre navigateur internet (Chrome, Firefox, Edge...) et tapez dans la barre d'adresse :
                            </p>
                            <div className="bg-[var(--color-dark)] text-white p-4 rounded-xl mb-6 text-center">
                                <p className="font-mono text-lg m-0">gmail.com</p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Étape 2 : Créer un compte</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Sur la page Gmail, cliquez sur <strong>"Créer un compte"</strong> puis choisissez <strong>"Pour moi"</strong>.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Étape 3 : Remplir les informations</h2>
                            <div className="bg-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg mb-6">
                                <ul className="list-none m-0 space-y-3">
                                    <li><strong>Prénom et nom :</strong> Votre vrai nom</li>
                                    <li><strong>Adresse email :</strong> Choisissez quelque chose de simple comme <em>prenom.nom@gmail.com</em></li>
                                    <li><strong>Mot de passe :</strong> Choisissez un mot de passe sécurisé (voir notre article dédié)</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Étape 4 : Ajouter un numéro de téléphone</h2>
                            <p className="text-[var(--color-gray)] mb-4">
                                Google vous demandera votre numéro de téléphone. C'est important car il servira à récupérer votre compte
                                si vous oubliez votre mot de passe.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Étape 5 : C'est terminé !</h2>
                            <div className="bg-green-50 p-6 rounded-xl mb-6">
                                <p className="text-[var(--color-dark)] m-0 text-lg">
                                    🎉 <strong>Félicitations !</strong> Vous avez maintenant une adresse email.
                                    Notez bien votre adresse et votre mot de passe dans un endroit sûr (un carnet, pas sur un post-it visible).
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-8 mb-4">Conseils pour bien utiliser votre email</h2>
                            <div className="space-y-4 mb-8">
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] m-0">📬 Vérifiez régulièrement</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0 mt-1">Consultez votre boîte mail au moins une fois par jour</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] m-0">🗑️ Supprimez les spams</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0 mt-1">Les emails indésirables vont dans le dossier "Spam"</p>
                                </div>
                                <div className="bg-[var(--color-light)] p-4 rounded-xl">
                                    <h4 className="font-bold text-[var(--color-dark)] m-0">⚠️ Méfiez-vous des arnaques</h4>
                                    <p className="text-sm text-[var(--color-gray)] m-0 mt-1">Ne donnez jamais vos mots de passe par email</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 rounded-2xl text-white mt-12">
                                <h3 className="text-xl font-bold mb-4">Besoin d'aide pour créer votre email ?</h3>
                                <p className="mb-6 text-white/90">
                                    Je me déplace à votre domicile pour vous accompagner et vous apprendre à utiliser votre messagerie.
                                </p>
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Demander de l'aide
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
