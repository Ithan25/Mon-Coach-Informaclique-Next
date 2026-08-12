'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Mail,
    MapPin,
    Copy,
    Check,
    Send
} from 'lucide-react'

export default function Contact() {
    const [emailCopied, setEmailCopied] = useState(false)
    const email = 'ithan.boismard@gmail.com'

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setEmailCopied(true)
            setTimeout(() => setEmailCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <section id="contact" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-light)] to-transparent" />
            <div className="absolute top-40 left-20 w-64 h-64 bg-[var(--color-primary)] rounded-full opacity-5 blur-3xl" />
            <div className="absolute bottom-40 right-20 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-5 blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        Contact
                    </Badge>
                    <h2 className="mb-6">
                        Contactez votre <span className="text-gradient">Coach à Nantes</span>
                    </h2>
                    <p className="text-lg text-[var(--color-gray)]">
                        Un problème informatique ? Un projet de site web ? N'hésitez pas à me contacter par email pour discuter de vos besoins. Devis gratuit et sans engagement !
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
                    {/* Main Email Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="sm:col-span-2"
                    >
                        <Card className="p-8 text-center shadow-xl border-2 border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-2">
                                Par Email
                            </h3>
                            <p className="text-[var(--color-gray)] mb-6">
                                Écrivez-moi directement, je vous réponds rapidement.
                            </p>

                            <div className="bg-[var(--color-light)] p-4 rounded-xl flex items-center justify-center gap-3 mb-6 font-mono text-base sm:text-lg font-semibold text-[var(--color-dark)] break-all">
                                <span>{email}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href={`mailto:${email}`} className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full gap-2 shadow-lg shadow-[var(--color-primary)]/20">
                                        <Send className="w-5 h-5" />
                                        Envoyer un email
                                    </Button>
                                </a>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={copyEmail}
                                    className="w-full sm:w-auto gap-2"
                                >
                                    {emailCopied ? (
                                        <>
                                            <Check className="w-5 h-5 text-green-500" />
                                            Email copié !
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-5 h-5 text-[var(--color-gray)]" />
                                            Copier l'adresse
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Zone d'intervention Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="sm:col-span-2"
                    >
                        <Card className="p-6 flex items-center justify-center gap-4 text-center sm:text-left bg-[var(--color-light)]/50">
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[var(--color-dark)]">Zone d'intervention</h4>
                                <p className="text-sm text-[var(--color-gray)]">Nantes et agglomération — Dépannage à domicile et accompagnement à distance</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
