import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();
    
    const whatsappMessage = `📧 New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nTime: ${new Date().toLocaleString()}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/26775560140?text=${encodedMessage}`;
    
    return NextResponse.json({ 
      success: true, 
      message: 'WhatsApp message prepared!',
      whatsappUrl: whatsappUrl 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
