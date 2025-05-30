import { SENDGRID_API_KEY } from "$env/static/private";
import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';


console.log('SENDGRID_API_KEY:', SENDGRID_API_KEY);
sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }: { request: Request }) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return json({
            success: false,
            error: 'Missing required fields'
        }, {
            status: 400
        })
    }

    try {
        const emailBody = {
            to: email,
            from: "tilbert.balaban@gmail.com",
            subject: "Contact Form on your portfolio",
            html: `Somebody used the contact form on your site. <br/>
            Name: ${name},
            Email: ${email},
            Information about the project: ${message}`,
        };

        await sgMail.send(emailBody)
        return json({
            success: true,
            message: 'Email sent successfully'
        });
    } catch (error) {
        console.log(error)
        return json({
            success: false,
            error: 'Failed to send email'
        }, {
            status: 500
        })
    }
}