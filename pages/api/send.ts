import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Ensure EmailTemplate is awaited if it's returning a Promise
    const emailContent = await EmailTemplate({ firstName: 'Jonni' });

    const { data, error } = await resend.emails.send({
      from: 'Acmecurestrepo@gmail.com <onboarding@resend.dev>',
      to: ['curestrepo@gmail.com'],
      subject: 'Hello world',
      react: emailContent, // Pass the resolved content here
    });

    if (error) {
      console.error("Email sending error:", error);
      res.status(400).json({ error });
      return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ data: data.id });
  } catch (error) {
    res.status(400).json({ error });
  }
}
