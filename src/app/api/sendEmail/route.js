import sgMail from '@sendgrid/mail';

// Importamos Next response
import { NextResponse } from 'next/server';

export async function POST(req) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    if (!req.body) {
        return NextResponse.json({ error: 'No se ha enviado el formulario', status: 405 });
    }
    try {
        const { email, nombre, telefono } = await req.json();
        const msg = {
            to: 'viviendasparajovenes.com@gmail.com',
            from: 'oscarmorena74@gmail.com',
            templateId: 'd-0395b47a3d704b58babe22ff0eb32a5c',
            dynamic_template_data: {
                correo: email,
                nombre: nombre,
                telefono: telefono,
            },
        };
        await sgMail.send(msg);
        return NextResponse.json({ message: 'Correo electrónico enviado con éxito', status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al enviar el correo electrónico', status: 500 });
    }
}