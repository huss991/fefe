import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/components/LanguageProvider';
import { Analytics } from '@/components/Analytics';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'AI Voice & CX-Automation Agency | Jordan',
  description: 'We replace missed calls and manual tasks with sub-second Arabic/English voice bots & end-to-end automations.',
  keywords: 'AI voice, voice agents, automation, Jordan, Arabic voice bots, customer experience',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-voice-agency.com',
    title: 'AI Voice & CX-Automation Agency | Jordan',
    description: 'We replace missed calls and manual tasks with sub-second Arabic/English voice bots & end-to-end automations.',
    siteName: 'AI Voice Agency',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <LanguageProvider>
            {children}
            <Toaster />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}