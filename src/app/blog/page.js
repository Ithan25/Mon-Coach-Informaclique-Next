'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
    BookOpen,
    Zap,
    Shield,
    HardDrive,
    Key,
    Smartphone,
    Cloud,
    AlertTriangle,
    Wifi,
    Monitor,
    Mail,
    ArrowRight,
    Phone,
    Clock,
    User
} from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
    const articles = [
        {
            slug: "accelerer-ordinateur-lent",
            icon: Zap,
            category: "Dépannage",
            title: "5 astuces pour accélérer un ordinateur lent",
            excerpt: "Votre PC rame ? Découvrez les gestes simples pour lui redonner une seconde jeunesse sans changer de matériel.",
            content: [
                "Un ordinateur qui devient lent avec le temps, c'est frustrant mais très courant. Voici 5 solutions efficaces :",
                "1. **Désinstallez les programmes inutiles** : Allez dans Paramètres > Applications et supprimez ce que vous n'utilisez plus. Chaque programme installé consomme des ressources.",
                "2. **Limitez les programmes au démarrage** : Ouvrez le Gestionnaire des tâches (Ctrl+Shift+Échap), onglet Démarrage, et désactivez les programmes non essentiels. Moins de programmes au démarrage = démarrage plus rapide.",
                "3. **Nettoyez votre disque dur** : Utilisez l'outil Nettoyage de disque intégré à Windows. Recherchez 'Nettoyage de disque' dans le menu Démarrer.",
                "4. **Redémarrez régulièrement** : Beaucoup de personnes mettent leur PC en veille sans jamais le redémarrer. Un redémarrage hebdomadaire libère la mémoire.",
                "5. **Vérifiez la présence de virus** : Un antivirus à jour est essentiel. Windows Defender (gratuit et intégré) fait très bien le travail."
            ],
            readTime: "3 min"
        },
        {
            slug: "proteger-emails-phishing",
            icon: Shield,
            category: "Sécurité",
            title: "Comment reconnaître et éviter les emails de phishing",
            excerpt: "Les arnaques par email sont de plus en plus sophistiquées. Apprenez à les détecter pour protéger vos données.",
            content: [
                "Le phishing (hameçonnage) est une technique d'arnaque où des escrocs se font passer pour des organismes officiels. Voici comment vous protéger :",
                "**Indices d'un email frauduleux :**",
                "- L'adresse de l'expéditeur est bizarre (ex: impots-gouv@gmail.com au lieu de @impots.gouv.fr)",
                "- Le message crée un sentiment d'urgence ('Votre compte sera suspendu dans 24h')",
                "- Des fautes d'orthographe ou une mise en page approximative",
                "- On vous demande de cliquer sur un lien ou de donner vos identifiants",
                "**Les bons réflexes :**",
                "- Ne cliquez jamais sur un lien dans un email douteux",
                "- Allez directement sur le site officiel en tapant l'adresse vous-même",
                "- En cas de doute, appelez l'organisme concerné",
                "- Votre banque ne vous demandera JAMAIS vos codes par email"
            ],
            readTime: "4 min"
        },
        {
            slug: "sauvegarder-donnees",
            icon: HardDrive,
            category: "Conseils",
            title: "Sauvegardez vos données : le guide complet",
            excerpt: "Photos, documents importants... Ne perdez plus jamais vos fichiers précieux grâce à une bonne stratégie de sauvegarde.",
            content: [
                "La perte de données peut être catastrophique. Voici comment vous en prémunir :",
                "**La règle du 3-2-1 :**",
                "- 3 copies de vos données",
                "- Sur 2 supports différents",
                "- Dont 1 hors de chez vous (cloud)",
                "**Solutions simples :**",
                "1. **Disque dur externe** : Branchez-le régulièrement et copiez vos dossiers importants (Documents, Photos, Vidéos). Comptez 50-80€ pour 1 To.",
                "2. **Clé USB** : Pour les documents les plus importants. Attention, les clés USB peuvent s'abîmer, ne comptez pas dessus comme seule sauvegarde.",
                "3. **Cloud** : Google Drive (15 Go gratuits), OneDrive (5 Go gratuits) ou iCloud. Vos fichiers sont accessibles partout et protégés.",
                "**Conseil important** : Automatisez vos sauvegardes ! Windows a un outil intégré : Paramètres > Mise à jour et sécurité > Sauvegarde."
            ],
            readTime: "4 min"
        },
        {
            slug: "creer-mot-passe-securise",
            icon: Key,
            category: "Sécurité",
            title: "Comment créer un mot de passe vraiment sécurisé",
            excerpt: "123456, azerty, votre date de naissance... Ce sont les pires mots de passe. Voici comment en créer un solide.",
            content: [
                "80% des piratages sont dus à des mots de passe faibles. Protégez-vous :",
                "**Un bon mot de passe doit être :**",
                "- Long (minimum 12 caractères)",
                "- Mélanger majuscules, minuscules, chiffres et symboles",
                "- Unique pour chaque site",
                "**La méthode de la phrase :**",
                "Prenez une phrase que vous retenez facilement : 'Mon chat Félix a 3 ans depuis 2021'",
                "Transformez-la : McFa3ad2021! (premières lettres + chiffres + symbole)",
                "**Utilisez un gestionnaire de mots de passe :**",
                "Des outils comme Bitwarden (gratuit) ou le gestionnaire intégré de votre navigateur retiennent tous vos mots de passe de façon sécurisée.",
                "**Ne faites jamais :**",
                "- Le même mot de passe partout",
                "- Votre date de naissance ou celle de vos proches",
                "- Le nom de votre animal de compagnie"
            ],
            readTime: "3 min"
        },
        {
            slug: "nettoyer-smartphone",
            icon: Smartphone,
            category: "Mobile",
            title: "Nettoyer son smartphone pour qu'il reste rapide",
            excerpt: "Votre téléphone est lent ou plein ? Quelques gestes simples pour lui redonner de la vitesse.",
            content: [
                "Un smartphone bien entretenu dure plus longtemps. Voici comment le garder performant :",
                "**Libérez de l'espace :**",
                "- Supprimez les applications que vous n'utilisez plus",
                "- Videz le cache des applications (Paramètres > Applications > [nom de l'app] > Vider le cache)",
                "- Transférez vos photos sur votre ordinateur ou le cloud",
                "**Surveillez la batterie :**",
                "- Évitez de charger votre téléphone à 100% systématiquement (80% suffit)",
                "- Ne le laissez pas se décharger complètement",
                "- Désactivez le Bluetooth et le GPS quand vous ne les utilisez pas",
                "**Mises à jour :**",
                "- Acceptez les mises à jour du système (elles corrigent des failles de sécurité)",
                "- Mettez à jour vos applications régulièrement",
                "**Redémarrez-le :** Comme un ordinateur, un redémarrage hebdomadaire fait du bien !"
            ],
            readTime: "3 min"
        },
        {
            slug: "utiliser-cloud",
            icon: Cloud,
            category: "Conseils",
            title: "Le cloud expliqué simplement (et pourquoi l'utiliser)",
            excerpt: "Le 'cloud', ce nuage informatique dont tout le monde parle. Qu'est-ce que c'est vraiment ?",
            content: [
                "Le cloud, c'est tout simplement un espace de stockage sur internet. Au lieu de garder vos fichiers uniquement sur votre ordinateur, vous les stockez sur des serveurs sécurisés accessibles partout.",
                "**Avantages du cloud :**",
                "- Accédez à vos fichiers depuis n'importe quel appareil",
                "- Vos données sont protégées même si votre ordinateur tombe en panne",
                "- Partagez facilement des photos avec votre famille",
                "**Services gratuits populaires :**",
                "- **Google Drive** : 15 Go gratuits, idéal si vous avez un compte Gmail",
                "- **OneDrive** : 5 Go gratuits, intégré à Windows",
                "- **iCloud** : 5 Go gratuits, parfait pour les utilisateurs Apple",
                "**Comment commencer :**",
                "1. Créez un compte Google (si ce n'est pas déjà fait)",
                "2. Allez sur drive.google.com",
                "3. Glissez-déposez vos fichiers importants"
            ],
            readTime: "3 min"
        },
        {
            slug: "eviter-arnaques-en-ligne",
            icon: AlertTriangle,
            category: "Sécurité",
            title: "Les arnaques en ligne les plus courantes (et comment s'en protéger)",
            excerpt: "Faux support Microsoft, loterie gagnée, prince nigérian... Les escrocs sont créatifs !",
            content: [
                "Internet regorge d'arnaques. Voici les plus courantes :",
                "**1. Le faux support technique**",
                "Une fenêtre apparaît disant que votre PC est infecté et vous demande d'appeler un numéro. C'est TOUJOURS une arnaque. Microsoft ne vous contactera jamais ainsi.",
                "**2. La loterie/héritage surprise**",
                "'Vous avez gagné 1 million d'euros !' Si vous n'avez pas joué, vous ne pouvez pas gagner. Supprimez ces emails.",
                "**3. L'arnaque au colis**",
                "Un SMS vous demande de payer des frais de douane pour un colis. Ne cliquez jamais sur le lien.",
                "**4. L'arnaque sentimentale**",
                "Sur les sites de rencontre, méfiez-vous des personnes qui finissent par demander de l'argent.",
                "**Règles d'or :**",
                "- Ne donnez jamais vos coordonnées bancaires",
                "- Ne faites jamais de virement à un inconnu",
                "- En cas de doute, demandez à quelqu'un de confiance"
            ],
            readTime: "4 min"
        },
        {
            slug: "optimiser-wifi",
            icon: Wifi,
            category: "Dépannage",
            title: "Améliorer sa connexion WiFi à la maison",
            excerpt: "Internet rame dans certaines pièces ? Voici comment optimiser votre réseau sans fil.",
            content: [
                "Une connexion WiFi faible peut être frustrante. Voici comment l'améliorer :",
                "**Placement de la box :**",
                "- Placez votre box au centre de votre logement si possible",
                "- En hauteur (sur un meuble, pas au sol)",
                "- Loin des murs épais, micro-ondes et miroirs qui bloquent le signal",
                "**Changez de canal WiFi :**",
                "Vos voisins utilisent peut-être le même canal que vous. Accédez à l'interface de votre box (192.168.1.1 généralement) et changez le canal WiFi.",
                "**Solutions si ça ne suffit pas :**",
                "- **Répéteur WiFi** (30-50€) : Amplifie le signal dans les zones mortes",
                "- **Prises CPL** (50-80€) : Utilisent le réseau électrique pour étendre le réseau",
                "- **Système Mesh** (150-300€) : Plusieurs bornes qui créent un réseau uniforme",
                "**Astuce simple :** Redémarrez votre box une fois par mois !"
            ],
            readTime: "3 min"
        },
        {
            slug: "debuter-windows-11",
            icon: Monitor,
            category: "Formation",
            title: "Bien débuter sur Windows 11 : les bases",
            excerpt: "Vous venez d'avoir un nouvel ordinateur sous Windows 11 ? Voici comment prendre vos marques.",
            content: [
                "Windows 11 peut sembler différent, mais les bases restent simples :",
                "**Le menu Démarrer :**",
                "Cliquez sur l'icône Windows au centre de la barre des tâches. Vous y trouverez vos applications épinglées et la barre de recherche.",
                "**La barre des tâches :**",
                "En bas de l'écran. Épinglez vos applications favorites en faisant clic droit > Épingler à la barre des tâches.",
                "**Les raccourcis essentiels :**",
                "- Windows + E : Ouvrir l'explorateur de fichiers",
                "- Windows + I : Ouvrir les paramètres",
                "- Alt + Tab : Basculer entre les fenêtres",
                "- Windows + L : Verrouiller l'écran",
                "**Personnalisation :**",
                "Clic droit sur le bureau > Personnaliser pour changer le fond d'écran, les couleurs, etc.",
                "**Conseil :** Prenez le temps d'explorer. Vous ne pouvez rien casser en cliquant !"
            ],
            readTime: "4 min"
        },
        {
            slug: "creer-adresse-email",
            icon: Mail,
            category: "Formation",
            title: "Créer sa première adresse email (guide pas à pas)",
            excerpt: "Vous n'avez pas encore d'email ? Suivez ce guide simple pour créer votre adresse Gmail gratuitement.",
            content: [
                "Une adresse email est indispensable aujourd'hui. Voici comment en créer une avec Gmail (gratuit) :",
                "**Étape 1 : Aller sur Gmail**",
                "Ouvrez votre navigateur et tapez gmail.com",
                "**Étape 2 : Créer un compte**",
                "Cliquez sur 'Créer un compte' puis 'Pour moi'",
                "**Étape 3 : Remplir les informations**",
                "- Prénom et nom",
                "- Choisissez votre adresse (prenom.nom@gmail.com est un bon choix)",
                "- Créez un mot de passe sécurisé",
                "**Étape 4 : Numéro de téléphone**",
                "Ajoutez votre numéro de téléphone (pour récupérer votre compte si vous oubliez le mot de passe)",
                "**Étape 5 : C'est terminé !**",
                "Vous avez maintenant une adresse email. Notez votre adresse et votre mot de passe dans un endroit sûr.",
                "**Conseil :** Vérifiez vos emails régulièrement, au moins une fois par jour."
            ],
            readTime: "5 min"
        }
    ]

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-light)] overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl" />

                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <Badge className="mb-4 bg-[var(--color-accent)] text-[var(--color-dark)]">
                                <BookOpen className="w-3 h-3 mr-1" />
                                Blog
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] mb-6">
                                Astuces <span className="text-gradient">Informatiques</span>
                            </h1>
                            <p className="text-lg text-[var(--color-gray)]">
                                Des conseils simples et pratiques pour mieux utiliser votre ordinateur,
                                smartphone et vous protéger sur internet.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="py-16 bg-white">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map((article, index) => (
                                <motion.div
                                    key={article.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="h-full border-none shadow-md hover:shadow-xl transition-all group">
                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                                                    <article.icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                                                </div>
                                                <Badge variant="outline" className="text-xs">
                                                    {article.category}
                                                </Badge>
                                            </div>

                                            <h3 className="text-lg font-bold text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                                {article.title}
                                            </h3>

                                            <p className="text-sm text-[var(--color-gray)] flex-1 mb-4">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-light)]">
                                                <div className="flex items-center gap-1 text-xs text-[var(--color-gray)]">
                                                    <Clock className="w-3 h-3" />
                                                    {article.readTime}
                                                </div>
                                                <Link href={`/blog/${article.slug}`}>
                                                    <Button variant="ghost" size="sm" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                                                        Lire <ArrowRight className="w-3 h-3 ml-1" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                    <div className="container-custom text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Besoin d'aide personnalisée ?
                            </h2>
                            <p className="text-white/90 mb-8 max-w-xl mx-auto">
                                Ces astuces ne suffisent pas ? Je me déplace à domicile pour vous accompagner !
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contact">
                                    <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                                        Demander de l'aide <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <a href="tel:0640749962">
                                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                        <Phone className="w-4 h-4 mr-2" /> 06 40 74 99 62
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
