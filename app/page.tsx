export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary-600">
            AI Recruiter Agent
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-primary-600 transition"
            >
              Funktionen
            </a>
            <a
              href="#process"
              className="text-sm text-gray-600 hover:text-primary-600 transition"
            >
              So funktioniert&apos;s
            </a>
            <a
              href="#benefits"
              className="text-sm text-gray-600 hover:text-primary-600 transition"
            >
              Vorteile
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-primary-700 transition"
            >
              Demo anfordern
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            KI-gestütztes Recruiting der Zukunft
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
            Bewerber gewinnen.{" "}
            <span className="text-gradient">Vollautomatisch.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Unser KI-Agent kontaktiert, screent und qualifiziert Kandidaten per
            Telefon und WhatsApp &ndash; rund um die Uhr, ohne manuellen
            Aufwand.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition shadow-lg shadow-primary-200"
            >
              Kostenlose Demo vereinbaren
            </a>
            <a
              href="#process"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition"
            >
              Mehr erfahren
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">85%</div>
              <div className="text-sm text-gray-500 mt-1">Zeitersparnis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm text-gray-500 mt-1">Erreichbarkeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">3x</div>
              <div className="text-sm text-gray-500 mt-1">Mehr Bewerber</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Alles, was Sie f&uuml;r modernes Recruiting brauchen
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ein KI-Agent, der den gesamten Recruiting-Prozess von der ersten
              Kontaktaufnahme bis zum qualifizierten Interview abdeckt.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="phone"
              title="KI-Telefon-Screening"
              description="Automatisierte Telefonate mit nat&uuml;rlicher Sprachf&uuml;hrung. Der Agent stellt gezielte Fragen und bewertet Kandidaten in Echtzeit."
            />
            <FeatureCard
              icon="chat"
              title="WhatsApp-Kommunikation"
              description="Direkte Ansprache &uuml;ber WhatsApp mit personalisierten Nachrichten. H&ouml;here Antwortrate als E-Mail oder Jobportale."
            />
            <FeatureCard
              icon="brain"
              title="Intelligentes Matching"
              description="KI-gest&uuml;tzter Abgleich von Kandidatenprofilen mit Ihren Anforderungen. Pr&auml;zise Vorauswahl spart Ihnen wertvolle Zeit."
            />
            <FeatureCard
              icon="calendar"
              title="Automatische Terminplanung"
              description="Nahtlose Integration in Ihren Kalender. Interviews werden automatisch koordiniert und best&auml;tigt."
            />
            <FeatureCard
              icon="chart"
              title="Echtzeit-Analytics"
              description="&Uuml;bersichtliches Dashboard mit KPIs zu Ihrem Recruiting-Funnel. Jederzeit volle Transparenz."
            />
            <FeatureCard
              icon="lock"
              title="DSGVO-konform"
              description="Vollst&auml;ndig datenschutzkonform nach europ&auml;ischem Recht. Alle Daten werden sicher in Deutschland gehostet."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              So funktioniert&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              In vier einfachen Schritten zu qualifizierten Bewerbern &ndash;
              ohne manuellen Aufwand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step={1}
              title="Anforderungen definieren"
              description="Sie hinterlegen Ihr Stellenprofil und Ihre Anforderungen an Kandidaten."
            />
            <ProcessStep
              step={2}
              title="KI kontaktiert Kandidaten"
              description="Der Agent erreicht passende Kandidaten per Telefon und WhatsApp."
            />
            <ProcessStep
              step={3}
              title="Automatisches Screening"
              description="Gezielte Fragen qualifizieren Bewerber anhand Ihrer Kriterien."
            />
            <ProcessStep
              step={4}
              title="Qualifizierte Profile erhalten"
              description="Sie bekommen nur vorqualifizierte Kandidaten mit vollst&auml;ndiger Bewertung."
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Warum Unternehmen auf den AI Recruiter Agent setzen
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Schneller besetzen, weniger Aufwand, bessere Kandidaten &ndash;
                mit KI-Recruiting der n&auml;chsten Generation.
              </p>
              <ul className="mt-8 space-y-4">
                <BenefitItem text="Bis zu 85% weniger manueller Aufwand im Screening-Prozess" />
                <BenefitItem text="Rund-um-die-Uhr-Verf&uuml;gbarkeit &ndash; auch abends und am Wochenende" />
                <BenefitItem text="H&ouml;here Antwortrate durch pers&ouml;nliche Ansprache per WhatsApp" />
                <BenefitItem text="Konsistente, faire Bewertung jedes Kandidaten durch KI" />
                <BenefitItem text="Nahtlose Integration in bestehende HR-Systeme" />
                <BenefitItem text="Skalierbar von 10 bis 10.000 offene Stellen" />
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary-600">67%</div>
                <div className="text-gray-600 mt-2">
                  schnellere Time-to-Hire
                </div>
              </div>
              <div className="space-y-6">
                <StatBar label="Zeitersparnis" value={85} />
                <StatBar label="Kandidatenqualit&auml;t" value={92} />
                <StatBar label="Antwortrate" value={78} />
                <StatBar label="Kundenzufriedenheit" value={96} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800">
            &ldquo;Seit wir den AI Recruiter Agent nutzen, besetzen wir unsere
            Stellen in der H&auml;lfte der Zeit. Die Qualit&auml;t der
            vorqualifizierten Kandidaten ist beeindruckend.&rdquo;
          </blockquote>
          <div className="mt-8">
            <div className="font-semibold text-lg">Thomas M&uuml;ller</div>
            <div className="text-gray-500">
              Head of HR, Mittelstand GmbH
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-primary-600 to-primary-800"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Bereit, Ihr Recruiting zu revolutionieren?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
            Vereinbaren Sie jetzt eine kostenlose Demo und sehen Sie, wie der AI
            Recruiter Agent f&uuml;r Sie arbeitet.
          </p>
          <form className="mt-10 max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Ihr Name"
              className="w-full px-5 py-3.5 rounded-xl border-0 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="w-full px-5 py-3.5 rounded-xl border-0 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Unternehmen"
              className="w-full px-5 py-3.5 rounded-xl border-0 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition text-lg"
            >
              Kostenlose Demo anfordern
            </button>
          </form>
          <p className="mt-4 text-sm text-primary-200">
            Keine Verpflichtung. Antwort innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-white text-lg font-bold mb-4">
                AI Recruiter Agent
              </div>
              <p className="text-sm leading-relaxed">
                Automatisierte Bewerbergewinnung mit K&uuml;nstlicher
                Intelligenz. Made in Germany.
              </p>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Produkt</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Funktionen
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition">
                    So funktioniert&apos;s
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-white transition">
                    Vorteile
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Rechtliches</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/impressum" className="hover:text-white transition">
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="hover:text-white transition"
                  >
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="/agb" className="hover:text-white transition">
                    AGB
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Kontakt</div>
              <ul className="space-y-2 text-sm">
                <li>info@ai-recruiter-agent.de</li>
                <li>+49 (0) 123 456 789</li>
                <li>Deutschland</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            &copy; {new Date().getFullYear()} AI Recruiter Agent. Alle Rechte
            vorbehalten.
          </div>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const icons: Record<string, string> = {
    phone: "\u{1F4DE}",
    chat: "\u{1F4AC}",
    brain: "\u{1F9E0}",
    calendar: "\u{1F4C5}",
    chart: "\u{1F4CA}",
    lock: "\u{1F512}",
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="text-4xl mb-4">{icons[icon]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto">
        {step}
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
        &#10003;
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-semibold text-gray-900">{value}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-600 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
