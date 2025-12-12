:root {
  --bg: #020617;
  --panel: #071226;
  --text: #e5e7eb;
  --muted: #a8b0bf;
  --border: #1e293b;
  --accent: #38bdf8;

  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;

  --shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  --shell: 960px;
  --px: 16px;
}

* { box-sizing: border-box; }

html, body {
  padding: 0;
  margin: 0;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
}

/* Layout */
.page {
  min-height: 100vh;
}

.shell {
  max-width: var(--shell);
  margin: 0 auto;
  padding: 0 var(--px);
}

.header {
  padding-top: 22px;
  padding-bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  font-weight: 750;
  letter-spacing: 0.12em;
  font-size: 13px;
}

.nav {
  display: flex;
  gap: 16px;
  font-size: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.navLink {
  text-decoration: none;
  opacity: 0.92;
}

.navLink:hover {
  opacity: 1;
  text-decoration: underline;
  text-decoration-color: rgba(229, 231, 235, 0.35);
  text-underline-offset: 6px;
}

/* Typography */
.h1 {
  font-size: 38px;
  line-height: 1.12;
  margin: 0 0 14px;
  letter-spacing: -0.01em;
}

.h2 {
  font-size: 22px;
  margin: 0 0 12px;
  letter-spacing: -0.005em;
}

.h3 {
  font-size: 16px;
  margin: 0 0 6px;
}

.lead {
  font-size: 16px;
  max-width: 640px;
  margin: 0 0 20px;
}

.p {
  font-size: 15px;
  max-width: 640px;
  margin: 0;
}

.muted {
  color: var(--muted);
}

/* Sections */
.section {
  padding-top: 10px;
  padding-bottom: 34px;
}

.hero {
  padding-top: 26px;
  padding-bottom: 38px;
}

.heroInner {
  display: grid;
  gap: 10px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid rgba(56, 189, 248, 0.25);
  color: rgba(229, 231, 235, 0.92);
  border-radius: 999px;
  width: fit-content;
  font-size: 13px;
  letter-spacing: 0.01em;
}

.textLink {
  display: inline-block;
  margin-top: 14px;
  font-size: 14px;
  text-decoration: none;
  opacity: 0.9;
}

.textLink:hover {
  opacity: 1;
  text-decoration: underline;
  text-decoration-color: rgba(56, 189, 248, 0.45);
  text-underline-offset: 6px;
}

/* Cards */
.card {
  background: rgba(7, 18, 38, 0.55);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 18px;
  box-shadow: var(--shadow);
}

.cardGrid {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
}

@media (min-width: 900px) {
  .cardGrid {
    grid-template-columns: 1fr 1fr;
  }
}

.bulletList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
}

.bulletItem {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.bulletDot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(229, 231, 235, 0.55);
  margin-top: 9px;
  flex: 0 0 auto;
}

.callout {
  margin-top: 14px;
  padding-left: 14px;
  border-left: 2px solid rgba(56, 189, 248, 0.35);
  color: rgba(229, 231, 235, 0.92);
}

/* Timeline */
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  position: relative;
}

.step {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: rgba(7, 18, 38, 0.35);
}

.stepNum {
  font-weight: 800;
  letter-spacing: 0.06em;
  font-size: 13px;
  color: rgba(56, 189, 248, 0.85);
}

.stepBody p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
}

/* Audience chips */
.pillGrid {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
}

@media (min-width: 700px) {
  .pillGrid {
    grid-template-columns: 1fr 1fr;
  }
}

.pill {
  border: 1px solid var(--border);
  background: rgba(7, 18, 38, 0.35);
  border-radius: 999px;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 650;
}

/* CTA */
.cta {
  padding-top: 16px;
  padding-bottom: 56px;
  border-top: 1px solid var(--border);
}

.ctaCard {
  max-width: 720px;
}

/* Footer */
.footer {
  padding: 18px 0 28px;
  color: rgba(168, 176, 191, 0.9);
  font-size: 13px;
}

/* Reduce H1 on small screens */
@media (max-width: 520px) {
  .h1 { font-size: 30px; }
}

export default function Home() {
  return (
    <main className="page">
      <header className="shell header">
        <div className="brand">ALTIORA</div>
        <nav className="nav" aria-label="Navegación principal">
          <a className="navLink" href="#servicios">
            Servicios
          </a>
          <a className="navLink" href="#casos">
            Casos de uso
          </a>
          <a className="navLink" href="#contacto">
            Hagamos equipo
          </a>
        </nav>
      </header>

      <section className="shell hero">
        <div className="heroInner">
          <div className="chip">Estrategia territorial y canales digitales</div>
          <h1 className="h1">Altiora Consultoría – Estrategia política desde el territorio</h1>
          <p className="lead">
            Convertimos datos dispersos en decisiones claras para campañas, gobiernos y poderes públicos.
          </p>
          <p className="p muted" style={{ marginBottom: 8 }}>
            En Altiora buscamos que cada recurso invertido en territorio —presupuesto, tiempo y estructura— se traduzca en votos,
            legitimidad y confianza, no en desgaste.
          </p>
          <p className="p muted">
            En Altiora nos dedicamos a posicionar personajes y narrativas en territorio. Microsegmentamos y medimos el mapa
            electoral con un sistema de herramientas propias hecho para decidir dónde y cómo conviene aparecer.
          </p>
          <a className="textLink" href="#enfoque">
            Ver cómo trabajamos ↓
          </a>
        </div>
      </section>

      <section id="contexto" className="shell section">
        <h2 className="h2">Por qué hace falta Altiora</h2>
        <div className="card">
          <ul className="bulletList">
            <li className="bulletItem">
              <span className="bulletDot" aria-hidden="true" />
              <span>Mucha información, pero poca claridad sobre dónde concentrar esfuerzos.</span>
            </li>
            <li className="bulletItem">
              <span className="bulletDot" aria-hidden="true" />
              <span>Equipos saturados que trabajan prácticamente a ciegas.</span>
            </li>
            <li className="bulletItem">
              <span className="bulletDot" aria-hidden="true" />
              <span>Herramientas tecnológicas sueltas, sin una estrategia coherente que las integre.</span>
            </li>
            <li className="bulletItem">
              <span className="bulletDot" aria-hidden="true" />
              <span>Dificultad para medir en tiempo real qué funciona y qué no en el territorio.</span>
            </li>
          </ul>
          <p className="callout">
            Altiora existe para traducir datos, mapas y canales digitales en un plan territorial con prioridades claras y un
            sistema de seguimiento que se puede explicar en una sola conversación.
          </p>
        </div>
      </section>

      <section id="servicios" className="shell section">
        <h2 className="h2">Qué hacemos</h2>
        <div className="cardGrid">
          <div className="card">
            <h3 className="h3">Estrategia territorial y rutas de trabajo</h3>
            <p className="muted">
              Dónde ganar, dónde defender y dónde no vale la pena invertir.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Diagnóstico territorial y electoral</h3>
            <p className="muted">
              Mapas de rentabilidad, escenarios de voto y prioridades por sección, colonia o municipio.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Mapas de incidencia política y dashboards</h3>
            <p className="muted">
              Mapas y dashboards interactivos para simular escenarios y tomar decisiones prudentes en minutos.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Encuestas, push poll y termómetro del territorio</h3>
            <p className="muted">
              Lecturas rápidas del clima político, el posicionamiento de personajes y los temas sensibles por zona.
            </p>
          </div>
          <div className="card">
            <h3 className="h3">Canales digitales: bots de WhatsApp y atención ciudadana</h3>
            <p className="muted">
              Registro, afiliación, encuestas rápidas y atención ciudadana.
            </p>
          </div>
        </div>
      </section>

      <section id="enfoque" className="shell section">
        <h2 className="h2">Nuestro enfoque de trabajo</h2>
        <ol className="timeline">
          <li className="step">
            <div className="stepNum">01</div>
            <div className="stepBody">
              <h3 className="h3">Escuchar y entender</h3>
              <p>
                Partimos de escuchar al equipo y al territorio: datos, mapas y calle. Nuestras herramientas de análisis
                geográfico, electoral y digital nos permiten ver cómo está colocado el personaje y qué temas están vivos en cada
                zona.
              </p>
            </div>
          </li>
          <li className="step">
            <div className="stepNum">02</div>
            <div className="stepBody">
              <h3 className="h3">Diagnóstico del territorio</h3>
              <p>
                Con esa escucha construimos un diagnóstico claro: dónde hay potencial, dónde hay riesgo, qué universos de voto
                existen y qué temas conectan con cada segmento.
              </p>
            </div>
          </li>
          <li className="step">
            <div className="stepNum">03</div>
            <div className="stepBody">
              <h3 className="h3">Estrategia y paquetes de acción</h3>
              <p>
                A partir del diagnóstico definimos qué hacer, dónde, con qué mensajes y en qué orden, para que el personaje no
                sólo aparezca, sino que quede asociado a las temáticas que le conviene encarnar.
              </p>
            </div>
          </li>
          <li className="step">
            <div className="stepNum">04</div>
            <div className="stepBody">
              <h3 className="h3">Implementación con herramientas propias</h3>
              <p>
                Bajamos la estrategia a tierra con mapas de priorización, rutas territoriales, canales digitales (WhatsApp),
                encuestas y push poll, alineando presencia, mensajes y estructura.
              </p>
            </div>
          </li>
          <li className="step">
            <div className="stepNum">05</div>
            <div className="stepBody">
              <h3 className="h3">Acompañamiento y ajustes</h3>
              <p>
                Medimos cómo responde el territorio, qué temas prenden y dónde hay resistencia, y ajustamos rutas, mensajes y
                focos de inversión. La estrategia se corrige según lo que de verdad pasa en tierra.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="casos" className="shell section">
        <h2 className="h2">Para quién funciona</h2>
        <p className="p muted" style={{ maxWidth: 720, marginBottom: 12 }}>
          Altiora está pensada para equipos que toman decisiones políticas desde el territorio:
        </p>
        <div className="pillGrid">
          <div className="pill">Campañas electorales</div>
          <div className="pill">Gobiernos locales</div>
          <div className="pill">Poder Judicial y órganos autónomos</div>
          <div className="pill">ONG y colectivos</div>
        </div>
      </section>

      <section id="contacto" className="shell cta">
        <div className="card ctaCard">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            Hagamos equipo
          </h2>
          <p className="p muted" style={{ maxWidth: 720 }}>
            Si quieres que el trabajo que ya haces en territorio se traduzca en posiciones más firmes, este es un buen momento
            para empezar a trabajarlo en equipo.
          </p>
        </div>
        <div className="footer">
          © {new Date().getFullYear()} Altiora Consultoría
        </div>
      </section>
    </main>
  );
}