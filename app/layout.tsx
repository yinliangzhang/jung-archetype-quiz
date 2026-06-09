import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "荣格12原型人格测试",
  description: "24个问题，了解你的核心人格原型"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <form
          name="quiz-leads"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="quiz-leads" />
          <input name="bot-field" />
          <input name="nickname" />
          <input name="phone" />
          <input name="visitor_ip" />
          <input name="visitor_country" />
          <input name="visitor_region" />
          <input name="visitor_city" />
          <input name="primary_archetype" />
          <input name="secondary_archetype" />
          <input name="hidden_archetype" />
          <input name="scores" />
          <input name="completed_at" />
          <input name="submitted_at" />
          <input name="page_url" />
        </form>
        {children}
      </body>
    </html>
  );
}
