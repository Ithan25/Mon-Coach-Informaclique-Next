'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { MapPin, Navigation } from 'lucide-react'

const interventionZones = [
    { name: 'Nantes Centre', lat: 47.218371, lng: -1.553621, main: true },
    { name: 'Chantenay', lat: 47.2047, lng: -1.5865 },
    { name: 'La Basse-Indre', lat: 47.1975, lng: -1.6728 },
    { name: 'Saint-Herblain', lat: 47.2117, lng: -1.6494 },
    { name: 'Couëron', lat: 47.2156, lng: -1.7208 },
    { name: 'Saint-Étienne-de-Montluc', lat: 47.2778, lng: -1.7833 },
    { name: 'Cordemais', lat: 47.2908, lng: -1.8767 },
    { name: 'Savenay', lat: 47.3617, lng: -1.9433 },
    { name: 'Donges', lat: 47.3175, lng: -2.0747 },
    { name: 'Rezé', lat: 47.1850, lng: -1.5494 },
    { name: 'Vertou', lat: 47.1681, lng: -1.4681 },
    { name: 'Orvault', lat: 47.2711, lng: -1.6225 },
    { name: 'Carquefou', lat: 47.2967, lng: -1.4908 },
    { name: 'La Chapelle-sur-Erdre', lat: 47.2969, lng: -1.5522 },
    { name: 'Bouguenais', lat: 47.1778, lng: -1.6200 },
    { name: 'Sainte-Luce-sur-Loire', lat: 47.2506, lng: -1.4897 },
]

export default function InterventionMap() {
    return (
        <section id="zone-intervention" className="py-20 bg-gradient-to-br from-[var(--color-light)] via-white to-[var(--color-background)] overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">
                        <Navigation className="w-3 h-3 mr-1" />
                        Zone d'intervention
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
                        J'interviens <span className="text-gradient">près de chez vous</span>
                    </h2>
                    <p className="text-lg text-[var(--color-gray)] max-w-2xl mx-auto">
                        Basé à Nantes, je me déplace dans toute la métropole nantaise et ses environs
                        pour le dépannage, la formation et l'accompagnement informatique à domicile.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl overflow-hidden min-h-[400px]">
                            {/* Decorative map background */}
                            <div className="absolute inset-0 opacity-20">
                                <svg viewBox="0 0 400 400" className="w-full h-full">
                                    {/* Loire river */}
                                    <path
                                        d="M 0 200 Q 100 180 200 200 Q 300 220 400 180"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="8"
                                        opacity="0.5"
                                    />
                                    {/* Roads */}
                                    <path d="M 200 0 L 200 400" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
                                    <path d="M 0 200 L 400 200" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" />
                                </svg>
                            </div>

                            {/* Intervention radius circle */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="w-72 h-72 rounded-full border-4 border-dashed border-[var(--color-primary)]/30"
                                />
                            </div>

                            {/* Map points */}
                            <div className="relative z-10 h-full flex items-center justify-center">
                                <div className="relative w-full max-w-[350px] aspect-square">
                                    {interventionZones.map((zone, index) => {
                                        // Position calculation based on lat/lng relative to Nantes center
                                        const centerLat = 47.218371
                                        const centerLng = -1.553621
                                        const x = 50 + (zone.lng - centerLng) * 80
                                        const y = 50 - (zone.lat - centerLat) * 200

                                        return (
                                            <motion.div
                                                key={zone.name}
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                                className="absolute group"
                                                style={{
                                                    left: `${Math.max(5, Math.min(95, x))}%`,
                                                    top: `${Math.max(5, Math.min(95, y))}%`,
                                                    transform: 'translate(-50%, -50%)'
                                                }}
                                            >
                                                <div className={`relative ${zone.main ? 'z-20' : 'z-10'}`}>
                                                    <div
                                                        className={`
                                                            ${zone.main
                                                                ? 'w-8 h-8 bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/50'
                                                                : 'w-4 h-4 bg-[var(--color-accent)]'
                                                            } 
                                                            rounded-full flex items-center justify-center cursor-pointer
                                                            hover:scale-125 transition-transform
                                                        `}
                                                    >
                                                        {zone.main && <MapPin className="w-4 h-4 text-white" />}
                                                    </div>

                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[var(--color-dark)] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                        {zone.name}
                                                    </div>

                                                    {/* Pulse animation for main point */}
                                                    {zone.main && (
                                                        <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-30" />
                                                    )}
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cities list */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-6">
                            Villes et communes desservies
                        </h3>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {interventionZones.map((zone, index) => (
                                <motion.div
                                    key={zone.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * index }}
                                    className={`
                                        flex items-center gap-2 p-2 rounded-lg
                                        ${zone.main
                                            ? 'bg-[var(--color-primary)]/10 font-semibold'
                                            : 'bg-[var(--color-light)]'
                                        }
                                    `}
                                >
                                    <MapPin className={`w-4 h-4 ${zone.main ? 'text-[var(--color-primary)]' : 'text-[var(--color-gray)]'}`} />
                                    <span className="text-sm text-[var(--color-dark)]">{zone.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-6 rounded-2xl">
                            <p className="text-[var(--color-dark)] mb-2">
                                <strong>🚗 Déplacement gratuit</strong> dans Nantes et sa proche périphérie
                            </p>
                            <p className="text-sm text-[var(--color-gray)]">
                                Pour les communes plus éloignées, des frais de déplacement peuvent s'appliquer.
                                Contactez-moi pour un devis personnalisé !
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
