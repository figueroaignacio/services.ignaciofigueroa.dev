import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from 'react-email'

type ContactEmailProps = {
  name: string
  email: string
  message: string
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Html>
      <Head />
      <Preview>New service request from {name} — ignaciofigueroa.dev</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Top accent bar */}
          <Section style={accentBar} />

          {/* Header */}
          <Section style={headerSection}>
            <Text style={badge}>SERVICE REQUEST</Text>
            <Heading style={h1}>New Inquiry</Heading>
            <Text style={dateText}>{date}</Text>
          </Section>

          <Hr style={hr} />

          {/* Requester Info */}
          <Section style={infoSection}>
            <Text style={sectionLabel}>REQUESTER DETAILS</Text>
            <Row style={infoRow}>
              <Column style={labelCol}>Name</Column>
              <Column style={valueCol}>{name}</Column>
            </Row>
            <Row style={infoRow}>
              <Column style={labelCol}>Email</Column>
              <Column style={valueCol}>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Message */}
          <Section style={messageSection}>
            <Text style={sectionLabel}>MESSAGE / REQUEST</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>

          <Hr style={hr} />

          {/* CTA */}
          <Section style={ctaSection}>
            <Text style={ctaText}>
              Reply directly to this email to respond to {name}.
            </Text>
            <Link href={`mailto:${email}`} style={ctaButton}>
              Reply to {name}
            </Link>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This message was submitted via the contact form at{' '}
              <Link href="https://ignaciofigueroa.dev" style={footerLink}>
                ignaciofigueroa.dev
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const main = {
  backgroundColor: '#f4f4f5',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '40px 0',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #e4e4e7',
  borderRadius: '10px',
  margin: '0 auto',
  maxWidth: '580px',
  overflow: 'hidden' as const,
}

const accentBar = {
  backgroundColor: '#18181b',
  height: '4px',
  width: '100%',
}

const headerSection = {
  padding: '40px 48px 28px',
}

const badge = {
  display: 'inline-block',
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '0.12em',
  color: '#71717a',
  margin: '0 0 12px',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
}

const h1 = {
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '1.1',
  color: '#09090b',
  margin: '0 0 8px',
}

const dateText = {
  fontSize: '13px',
  color: '#a1a1aa',
  margin: '0',
}

const hr = {
  border: 'none',
  borderTop: '1px solid #f4f4f5',
  margin: '0',
}

const infoSection = {
  padding: '28px 48px',
}

const sectionLabel = {
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '0.1em',
  color: '#a1a1aa',
  margin: '0 0 16px',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
}

const infoRow = {
  marginBottom: '10px',
}

const labelCol = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#71717a',
  width: '80px',
  verticalAlign: 'top' as const,
  paddingRight: '16px',
}

const valueCol = {
  fontSize: '14px',
  color: '#09090b',
  fontWeight: '500',
  verticalAlign: 'top' as const,
}

const messageSection = {
  padding: '28px 48px',
  backgroundColor: '#fafafa',
}

const messageContent = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#27272a',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}

const link = {
  color: '#18181b',
  textDecoration: 'underline',
}

const ctaSection = {
  padding: '28px 48px',
  textAlign: 'center' as const,
}

const ctaText = {
  fontSize: '13px',
  color: '#71717a',
  margin: '0 0 20px',
}

const ctaButton = {
  display: 'inline-block',
  backgroundColor: '#18181b',
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: '600',
  letterSpacing: '0.03em',
  padding: '12px 28px',
  borderRadius: '6px',
  textDecoration: 'none',
}

const footer = {
  padding: '20px 48px 32px',
  backgroundColor: '#fafafa',
  borderTop: '1px solid #f4f4f5',
}

const footerText = {
  fontSize: '12px',
  color: '#a1a1aa',
  margin: '0',
  textAlign: 'center' as const,
}

const footerLink = {
  color: '#71717a',
  textDecoration: 'underline',
}
