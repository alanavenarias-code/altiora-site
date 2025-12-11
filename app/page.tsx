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
            No vendemos mapas ni bots. Diseñamos diagnósticos y rutas de acción para que cada peso, cada brigada
            y cada minuto de una campaña se coloque donde realmente mueve votos y legitimidad.
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
            <strong>Diagnóstico territorial y electoral.</strong> Mapas de rentabilidad, escenarios de voto y
            prioridades por sección, colonia o municipio.
          </li>
          <li>
            <strong>Estrategia territorial y rutas de trabajo.</strong> Dónde ganar, dónde defender y dónde no vale la pena invertir.
          </li>
          <li>
            <strong>Kharta Maps.</strong> Mapas y dashboards interactivos para simular escenarios y decidir en minutos.
          </li>
          <li>
            <strong>Canales digitales y bots de WhatsApp.</strong> Registro, afiliación, encuestas rápidas y atención ciudadana.
          </li>
          <li>
            <strong>Termómetros y encuestas.</strong> Lecturas rápidas del clima político y temas sensibles por zona.
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
        <ul style={{ display: "grid", gap: "8px", fontSize: "15px" }}>
          <li>Campañas electorales que necesitan priorizar territorio y estructura.</li>
          <li>Gobiernos locales que quieren decidir dónde concentrar programas.</li>
          <li>Poderes judiciales y órganos autónomos que buscan construir legitimidad.</li>
          <li>ONG y colectivos que trabajan incidencia en territorio.</li>
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
        <p style={{ marginBottom: "8px" }}>
          Agenda una llamada breve para revisar tu mapa electoral o de gobierno y ver si Kharta tiene sentido para tu proyecto.
        </p>
        <p>
          Puedes escribirnos a{" "}
          <a href="mailto:contacto@altioraconsultoria.lat" style={{ color: "#38bdf8" }}>
            contacto@altioraconsultoria.lat
          </a>{" "}
          o compartir tu contacto por el canal que prefieras.
        </p>
      </section>
    </main>
  );
}