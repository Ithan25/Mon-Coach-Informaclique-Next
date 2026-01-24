'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, GraduationCap, Code, Sparkles } from 'lucide-react'

export default function Hero() {
    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-light)]">
            {/* Decorative shapes */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[var(--color-secondary)] rounded-full opacity-10 blur-2xl" />

            {/* Floating elements */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 right-20 hidden 2xl:block"
            >
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center text-2xl shadow-lg">
                    💻
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 right-32 hidden 2xl:block"
            >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center text-2xl shadow-lg">
                    📱
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-60 left-16 hidden 2xl:block"
            >
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-secondary-light)] flex items-center justify-center text-xl shadow-lg">
                    🖥️
                </div>
            </motion.div>

            <div className="container-custom relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <Badge variant="accent" className="mb-4 sm:mb-6 text-xs sm:text-sm gap-2">
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                            Votre partenaire numérique
                        </Badge>

                        <h1 className="mb-4 sm:mb-6">
                            <span className="text-[var(--color-dark)]">Votre </span>
                            <span className="text-gradient">Coach Informatique</span>
                            <span className="text-[var(--color-dark)]"> à Nantes</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[var(--color-gray)] mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                            <strong>Dépannage informatique</strong>, <strong>formation à domicile</strong> et création de sites web à <strong>Nantes</strong> et sa métropole.
                            Je simplifie votre vie numérique avec pédagogie et bienveillance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
                            <Button
                                size="lg"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="shadow-xl shadow-[var(--color-primary)]/30 gap-2 text-sm sm:text-base"
                            >
                                Me contacter
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={(e) => scrollToSection(e, '#services')}
                                className="text-sm sm:text-base"
                            >
                                Découvrir mes services
                            </Button>
                        </div>

                        {/* Real profile badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl sm:rounded-2xl shadow-sm">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--color-blue)]/10 flex items-center justify-center">
                                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-blue)]" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs sm:text-sm font-bold text-[var(--color-dark)]">BTS SIO</span>
                                    <span className="text-[10px] sm:text-xs text-[var(--color-gray)]">Services Informatiques</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-xl sm:rounded-2xl shadow-sm">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs sm:text-sm font-bold text-[var(--color-dark)]">Bachelor</span>
                                    <span className="text-[10px] sm:text-xs text-[var(--color-gray)]">Développeur Web</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main computer illustration */}
                            <div className="relative z-10">
                                <div className="w-full max-w-lg mx-auto">
                                    {/* Monitor */}
                                    <div className="bg-[var(--color-dark)] rounded-3xl p-4 shadow-2xl">
                                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                                            {/* Screen content */}
                                            <div className="absolute inset-4 bg-white/10 rounded-xl backdrop-blur-sm p-4">
                                                <div className="flex gap-2 mb-4">
                                                    <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                                                    <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
                                                    <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-3 bg-white/30 rounded w-3/4" />
                                                    <div className="h-3 bg-white/30 rounded w-1/2" />
                                                    <div className="h-3 bg-white/30 rounded w-2/3" />
                                                </div>
                                                <div className="mt-6 flex gap-2">
                                                    <div className="h-8 bg-white/40 rounded-lg flex-1" />
                                                    <div className="h-8 bg-white/20 rounded-lg flex-1" />
                                                </div>
                                            </div>
                                            {/* Code icon */}
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute top-3 right-3 w-10 h-10 bg-[var(--color-blue)] rounded-xl flex items-center justify-center shadow-lg"
                                            >
                                                <Code className="w-5 h-5 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>
                                    {/* Stand */}
                                    <div className="w-24 h-16 bg-[var(--color-dark)] mx-auto -mt-1 rounded-b-lg" />
                                    <div className="w-40 h-3 bg-[var(--color-dark)] mx-auto rounded-full" />
                                </div>
                            </div>

                            {/* Background blob */}
                            <div className="absolute -top-10 -right-10 w-80 h-80 bg-[var(--color-accent)] rounded-full opacity-20 blur-3xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-[var(--color-gray-light)] flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
                    />
                </div>
            </motion.div>
        </section>
    )
}
