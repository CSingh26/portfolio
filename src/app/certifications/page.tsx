import type { Metadata } from "next"
import { Award, ExternalLink } from "lucide-react"
import { SectionShell } from "@/components/section-shell"

const certifications = [
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    status: "Completed",
    focus: "Linux administration, SELinux, storage, networking basics",
    year: "2024",
    file: "/certifications/RHCSA_Chaitanya.jpeg",
  },
  {
    title: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    status: "Completed",
    focus: "Automation with Ansible, security hardening, troubleshooting",
    year: "2024",
    file: "/certifications/RHCE_Chaitanya.pdf",
  },
  {
    title: "Red Hat Certified Specialist in Containers and Kubernetes",
    issuer: "Red Hat",
    status: "Completed",
    focus: "Containerization, Podman/Kubernetes fundamentals, secure supply chain",
    year: "2025",
    file: "/certifications/Container_Chaitanya.jpeg",
  },
]

export const metadata: Metadata = {
  title: "Certifications | Chaitanya",
  description: "Highlighted certifications including RHCSA, RHCE, and Red Hat container specialist.",
}

export default function CertificationsPage() {
  return (
    <main className="pt-28 pb-16">
      <SectionShell
        eyebrow="Certifications"
        title="Credentialed in systems, automation, and containers."
        description="Formal Red Hat certifications that reinforce hands-on experience across Linux, automation, and secure deployments."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col rounded-2xl border border-border bg-card/80 p-5 shadow-soft transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                  {cert.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{cert.focus}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>{cert.year}</span>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 font-semibold text-accent transition hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`View ${cert.title} certificate`}
                >
                  View certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </main>
  )
}
