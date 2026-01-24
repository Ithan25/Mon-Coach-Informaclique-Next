import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, phone, service, message } = await request.json()

        // Validation basique
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Champs manquants' },
                { status: 400 }
            )
        }

        // Configuration du transporteur IONOS
        const transporter = nodemailer.createTransport({
            host: 'smtp.ionos.fr',
            port: 465, // Port sécurisé SSL
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // 1. Email pour vous (Notification)
        const mailOptionsAdmin = {
            from: `"Site Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Vous recevez l'email sur votre propre adresse
            replyTo: email, // Pour répondre directement au client
            subject: `Nouveau contact : ${name} (${service || 'Général'})`,
            text: `
Nouveau message via le site web :

Nom : ${name}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Service : ${service || 'Non spécifié'}

Message :
${message}
            `,
            html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #FF6B6B;">Nouveau contact client</h2>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
    <p><strong>Service demandé :</strong> ${service || 'Non spécifié'}</p>
    <hr style="border: 1px solid #eee; margin: 20px 0;">
    <p><strong>Message :</strong></p>
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
</div>
            `,
        }

        // 2. Email de confirmation pour le client (Optionnel mais pro)
        const mailOptionsClient = {
            from: `"Mon Coach Informaclique" <${process.env.EMAIL_USER}>`,
            to: email, // Email du client
            subject: `Confirmation de réception - Mon Coach Informaclique`,
            text: `Bonjour ${name},\n\nJ'ai bien reçu votre message et je vous en remercie.\nJe vous recontacte sous 24h pour répondre à votre demande.\n\nCordialement,\n\nMon Coach Informaclique\n06 40 74 99 62`,
            html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #FF6B6B;">Message bien reçu !</h2>
    <p>Bonjour ${name},</p>
    <p>Merci de m'avoir contacté. J'ai bien reçu votre demande concernant : <strong>${service || 'Votre projet'}</strong>.</p>
    <p>Je reviens vers vous <strong>sous 24h</strong> (souvent bien avant !) pour en discuter.</p>
    <br>
    <p>En attendant, n'hésitez pas à consulter mon site ou à m'appeler directement si c'est urgent.</p>
    <br>
    <p>Cordialement,</p>
    <p><strong>Votre Coach Informatique</strong><br>
    06 40 74 99 62<br>
    <a href="https://www.moncoachinformaclique.fr">www.moncoachinformaclique.fr</a></p>
</div>
            `,
        }

        // Envoi des deux emails
        await transporter.sendMail(mailOptionsAdmin)
        await transporter.sendMail(mailOptionsClient) // Vous pouvez commenter cette ligne si vous ne voulez pas de confirmation auto

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Erreur envoi email:', error)
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email' },
            { status: 500 }
        )
    }
}
