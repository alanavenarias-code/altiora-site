export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 700, letterSpacing: "0.08em" }}>
          ALTIORA
        </div>
        <nav style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
          <a href="#servicios" style={{ textDecoration: "none", color: "#e5e7eb" }}>
            Servicios
          </a>
          <a href="#casos" style={{ textDecoration: "none", color: "#e5e7eb" }}>
            Casos de uso
          </a>
          <a href="#contacto" style={{ textDecoration: "none", color: "#e5e7eb" }}>
            Solicitar demo
          </a>
        </nav>
      </header>

      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "32px 16px 48px",
          display: "grid",
          gap: "32px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Kharta – Inteligencia del territorio político
          </h1>
          <p style={{ fontSize: "16px", maxWidth: "640px", marginBottom: "24px" }}>
            Convertimos datos dispersos en decisiones claras para campañas, gobiernos y poderes públicos.
          </p>
          <p style={{ fontSize: "15px", maxWidth: "640px", opacity: 0.9 }}>
            En Altiora buscamos que cada recurso invertido en territorio —presupuesto, tiempo y estructura— se traduzca en votos, legitimidad y confianza, no en desgaste.
          </p>

          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            <a
              href="#contacto"
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                backgroundColor: "#22c55e",
                color: "#022c22",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Solicitar demo
            </a>
            <a
              href="#servicios"
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid #475569",
                textDecoration: "none",
                fontSize: "14px",
                color: "#e5e7eb",
              }}
            >
              Ver qué hacemos
            </a>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 32px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Qué hacemos</h2>
        <ul style={{ display: "grid", gap: "12px", fontSize: "15px" }}>
          <li>
            <strong>Estrategia territorial y rutas de trabajo.</strong> Dónde ganar, dónde defender y dónde no vale la pena invertir.
          </li>
          <li>
            <strong>Diagnóstico territorial y electoral.</strong> Mapas de rentabilidad, escenarios de voto y prioridades por sección, colonia o municipio.
          </li>
          <li>
            <strong>Mapas de incidencia política y dashboards para toma prudente de decisiones.</strong> Mapas y dashboards interactivos para simular escenarios y tomar decisiones prudentes en minutos.
          </li>
          <li>
            <strong>Encuestas, push poll de posicionamiento y termómetro del territorio.</strong> Lecturas rápidas del clima político, el posicionamiento de personajes y los temas sensibles por zona.
          </li>
          <li>
            <strong>Canales digitales: bots de WhatsApp y atención ciudadana.</strong> Registro, afiliación, encuestas rápidas y atención ciudadana.
          </li>
        </ul>
      </section>

      <section
        id="casos"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 32px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Para quién funciona</h2>
        <p style={{ fontSize: "15px", marginBottom: "8px" }}>
          Altiora está pensada para equipos que toman decisiones políticas desde el territorio:
        </p>
        <ul style={{ display: "grid", gap: "8px", fontSize: "15px" }}>
          <li>Campañas electorales.</li>
          <li>Gobiernos locales.</li>
          <li>Poder Judicial y órganos autónomos.</li>
          <li>ONG y colectivos.</li>
        </ul>
      </section>

      <section
        id="contacto"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 48px",
          borderTop: "1px solid #1e293b",
          fontSize: "15px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Solicitar una conversación inicial</h2>
        <p>
          Si quieres que el trabajo que ya haces en territorio se traduzca en posiciones más firmes, este es un buen momento para empezar a trabajarlo en equipo.
        </p>
      </section>
    </main>
  );
}