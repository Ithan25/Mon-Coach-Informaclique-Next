import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

        // 1. Email pour vous (Notification)
        await resend.emails.send({
            from: 'Mon Coach Informaclique <contact@moncoachinformaclique.fr>',
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Nouveau contact : ${name} (${service || 'Général'})`,
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
        })

        // 2. Email de confirmation pour le client
        await resend.emails.send({
            from: 'Mon Coach Informaclique <contact@moncoachinformaclique.fr>',
            to: email,
            subject: `Confirmation de réception - Mon Coach Informaclique`,
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
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Erreur envoi email:', error)
        return NextResponse.json(
            { error: error.message || 'Erreur lors de l\'envoi de l\'email' },
            { status: 500 }
        )
    }
}
