'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Send,
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle,
    MessageSquare,
    AlertCircle,
    Shield,
    Copy,
    Check
} from 'lucide-react'

const contactInfo = [
    {
        icon: Phone,
        title: "Téléphone",
        value: "06 40 74 99 62",
        description: "Du lundi au samedi",
        color: "var(--color-primary)",
    },
    {
        icon: Mail,
        title: "Email",
        value: "contact@moncoach...",
        description: "Réponse sous 24h",
        color: "var(--color-blue)",
    },
    {
        icon: MapPin,
        title: "Zone d'intervention",
        value: "Nantes et agglomération",
        description: "Déplacement inclus",
        color: "var(--color-secondary)",
    },
    {
        icon: Clock,
        title: "Horaires",
        value: "Lun - Sam : 9h - 19h",
        description: "Sur rendez-vous",
        color: "var(--color-accent-dark)",
    },
]

const services = [
    "Dépannage informatique",
    "Formation",
    "Site web vitrine",
    "Accompagnement smartphone",
    "Installation matériel",
    "Autre",
]

// Regex patterns for validation
const patterns = {
    name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
}

// Sanitize input to prevent XSS
const sanitizeInput = (input) => {
    if (typeof input !== 'string') return ''
    return input
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim()
        .slice(0, 1000) // Limit length
}

// Simple honeypot check
const HONEYPOT_FIELD = 'website_url'

// Rate limiting (simple client-side)
const RATE_LIMIT_KEY = 'contact_form_submissions'
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

const checkRateLimit = () => {
    if (typeof window === 'undefined') return true
    const stored = localStorage.getItem(RATE_LIMIT_KEY)
    if (!stored) return true

    const { count, timestamp } = JSON.parse(stored)
    const now = Date.now()

    if (now - timestamp > RATE_LIMIT_WINDOW) {
        localStorage.removeItem(RATE_LIMIT_KEY)
        return true
    }

    return count < RATE_LIMIT_MAX
}

const incrementRateLimit = () => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(RATE_LIMIT_KEY)
    const now = Date.now()

    if (!stored) {
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, timestamp: now }))
        return
    }

    const { count, timestamp } = JSON.parse(stored)

    if (now - timestamp > RATE_LIMIT_WINDOW) {
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, timestamp: now }))
    } else {
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: count + 1, timestamp }))
    }
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        [HONEYPOT_FIELD]: '', // Honeypot field
    })
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [emailCopied, setEmailCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText('contact@moncoachinformaclique.fr')
            setEmailCopied(true)
            setTimeout(() => setEmailCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const validateField = useCallback((name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Le nom est requis'
                if (!patterns.name.test(value)) return 'Nom invalide (2-50 caractères, lettres uniquement)'
                break
            case 'email':
                if (!value.trim()) return 'L\'email est requis'
                if (!patterns.email.test(value)) return 'Email invalide'
                break
            case 'phone':
                if (value && !patterns.phone.test(value.replace(/\s/g, ''))) return 'Numéro de téléphone invalide'
                break
            case 'message':
                if (!value.trim()) return 'Le message est requis'
                if (value.trim().length < 10) return 'Le message doit faire au moins 10 caractères'
                if (value.length > 1000) return 'Le message est trop long (max 1000 caractères)'
                break
            default:
                break
        }
        return ''
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        const sanitized = sanitizeInput(value)

        setFormData(prev => ({ ...prev, [name]: sanitized }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target
        const error = validateField(name, value)
        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitError('')

        // Check honeypot (bot detection)
        if (formData[HONEYPOT_FIELD]) {
            console.log('Bot detected via honeypot')
            // Simulate success to not alert the bot
            setIsSubmitted(true)
            return
        }

        // Check rate limit
        if (!checkRateLimit()) {
            setSubmitError('Trop de tentatives. Veuillez réessayer plus tard.')
            return
        }

        // Validate all fields
        const newErrors = {}
        const fieldsToValidate = ['name', 'email', 'message']

        fieldsToValidate.forEach(field => {
            const error = validateField(field, formData[field])
            if (error) newErrors[field] = error
        })

        // Validate phone if provided
        if (formData.phone) {
            const phoneError = validateField('phone', formData.phone)
            if (phoneError) newErrors.phone = phoneError
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Here you would send to your backend
            // The backend should also validate and sanitize all inputs
            console.log('Form submitted (sanitized):', {
                name: sanitizeInput(formData.name),
                email: sanitizeInput(formData.email),
                phone: sanitizeInput(formData.phone),
                service: sanitizeInput(formData.service),
                message: sanitizeInput(formData.message),
                timestamp: new Date().toISOString(),
            })

            incrementRateLimit()
            setIsSubmitted(true)

            // Reset after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', phone: '', service: '', message: '', [HONEYPOT_FIELD]: '' })
            }, 5000)

        } catch (error) {
            setSubmitError('Une erreur est survenue. Veuillez réessayer.')
        } finally {
            setIsSubmitting(false)
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
                        Contactez-<span className="text-gradient">moi</span>
                    </h2>
                    <p className="text-lg text-[var(--color-gray)]">
                        Un problème informatique ? Un projet de site web ? N'hésitez pas à me contacter
                        pour discuter de vos besoins. Devis gratuit et sans engagement !
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-8">
                            Mes coordonnées
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <Card
                                        className={`p-5 h-full hover:-translate-y-1 transition-transform ${info.title === 'Email' ? 'cursor-pointer' : ''}`}
                                        onClick={info.title === 'Email' ? copyEmail : undefined}
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ backgroundColor: `${info.color}15` }}
                                        >
                                            <info.icon className="w-6 h-6" style={{ color: info.color }} />
                                        </div>
                                        <h4 className="font-semibold text-[var(--color-dark)] mb-1">
                                            {info.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-[var(--color-dark)] font-medium text-sm">
                                                {info.title === 'Email' && emailCopied ? 'Copié !' : info.value}
                                            </p>
                                            {info.title === 'Email' && (
                                                emailCopied ? (
                                                    <Check className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <Copy className="w-4 h-4 text-[var(--color-gray)]" />
                                                )
                                            )}
                                        </div>
                                        <p className="text-xs text-[var(--color-gray)]">
                                            {info.title === 'Email' ? (emailCopied ? 'Email copié !' : 'Cliquez pour copier') : info.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick contact */}
                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-8 text-white">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Besoin d'aide urgente ?</h4>
                                    <p className="text-white/80 text-sm">
                                        Appelez-moi directement pour un dépannage rapide
                                    </p>
                                </div>
                            </div>
                            <a
                                href="tel:+33640749962"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] rounded-full font-semibold hover:bg-white/90 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Appeler maintenant
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="p-8 shadow-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-[var(--color-dark)]">
                                    Envoyez-moi un message
                                </h3>
                                <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
                            </div>
                            <p className="text-[var(--color-gray)] mb-8">
                                Je vous réponds sous 24h maximum.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--color-dark)] mb-2">
                                        Message envoyé !
                                    </h4>
                                    <p className="text-[var(--color-gray)]">
                                        Je vous recontacte très vite.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    {/* Honeypot field - hidden from users, visible to bots */}
                                    <input
                                        type="text"
                                        name={HONEYPOT_FIELD}
                                        value={formData[HONEYPOT_FIELD]}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                        style={{
                                            position: 'absolute',
                                            left: '-9999px',
                                            opacity: 0,
                                            height: 0,
                                            width: 0,
                                        }}
                                        aria-hidden="true"
                                    />

                                    {submitError && (
                                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                            <AlertCircle className="w-4 h-4 shrink-0" />
                                            {submitError}
                                        </div>
                                    )}

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
                                                Nom complet *
                                            </label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Jean Dupont"
                                                maxLength={50}
                                                autoComplete="name"
                                                className={errors.name ? 'border-red-400 focus:border-red-400' : ''}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" />
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
                                                Téléphone
                                            </label>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="06 XX XX XX XX"
                                                maxLength={20}
                                                autoComplete="tel"
                                                className={errors.phone ? 'border-red-400 focus:border-red-400' : ''}
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" />
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
                                            Email *
                                        </label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="jean.dupont@email.com"
                                            maxLength={100}
                                            autoComplete="email"
                                            className={errors.email ? 'border-red-400 focus:border-red-400' : ''}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
                                            Service souhaité
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="flex h-12 w-full rounded-xl border-2 border-[var(--color-gray-light)] bg-white px-4 py-3 text-base text-[var(--color-dark)] transition-all duration-300 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                                        >
                                            <option value="">Sélectionnez un service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-dark)] mb-2">
                                            Votre message * <span className="text-[var(--color-gray)] font-normal">({formData.message.length}/1000)</span>
                                        </label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Décrivez brièvement votre besoin..."
                                            maxLength={1000}
                                            className={errors.message ? 'border-red-400 focus:border-red-400' : ''}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" />
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full gap-2"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 hidden sm:block" />
                                                Envoyer le message
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-[var(--color-gray)]">
                                        🔒 Vos données sont protégées et ne seront jamais partagées.
                                    </p>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
