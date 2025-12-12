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
            Hagamos equipo
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
            Altiora Consultoría – Estrategia política desde el territorio
          </h1>
          <p style={{ fontSize: "16px", maxWidth: "640px", marginBottom: "24px" }}>
            Convertimos datos dispersos en decisiones claras para campañas, gobiernos y poderes públicos.
          </p>
          <p style={{ fontSize: "15px", maxWidth: "640px", opacity: 0.9, marginBottom: "8px" }}>
            En Altiora buscamos que cada recurso invertido en territorio —presupuesto, tiempo y estructura— se traduzca en votos, legitimidad y confianza, no en desgaste.
          </p>
          <p style={{ fontSize: "15px", maxWidth: "640px", opacity: 0.9 }}>
            En Altiora nos dedicamos a posicionar personajes y narrativas en territorio. Microsegmentamos y medimos el mapa electoral con un sistema de herramientas propias hecho para decidir dónde y cómo conviene aparecer.
          </p>
          <div style={{ marginTop: "16px" }}>
            <a
              href="#enfoque"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#e5e7eb",
                opacity: 0.9,
              }}
            >
              Ver cómo trabajamos ↓
            </a>
          </div>
        </div>
      </section>

      <section
        id="contexto"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 16px 32px",
          fontSize: "15px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Por qué hace falta Altiora</h2>
        <ul
          style={{
            fontSize: "15px",
            marginBottom: "8px",
            display: "grid",
            gap: "4px",
            paddingLeft: "20px",
          }}
        >
          <li>Mucha información, pero poca claridad sobre dónde concentrar esfuerzos.</li>
          <li>Equipos saturados que trabajan prácticamente a ciegas.</li>
          <li>Herramientas tecnológicas sueltas, sin una estrategia coherente que las integre.</li>
          <li>Dificultad para medir en tiempo real qué funciona y qué no en el territorio.</li>
        </ul>
        <p>
          Altiora existe para traducir datos, mapas y canales digitales en un plan territorial con prioridades claras y un sistema de seguimiento que se puede explicar en una sola conversación.
        </p>
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
        id="enfoque"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 32px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Nuestro enfoque de trabajo</h2>
        <ol style={{ display: "grid", gap: "12px", fontSize: "15px", paddingLeft: "20px" }}>
          <li>
            <strong>Escuchar y entender.</strong>{" "}
            Partimos de escuchar al equipo y al territorio: datos, mapas y calle. Nuestras herramientas de análisis geográfico,
            electoral y digital nos permiten ver cómo está colocado el personaje y qué temas están vivos en cada zona.
          </li>
          <li>
            <strong>Diagnóstico del territorio.</strong>{" "}
            Con esa escucha construimos un diagnóstico claro: dónde hay potencial, dónde hay riesgo, qué universos de voto existen
            y qué temas conectan con cada segmento.
          </li>
          <li>
            <strong>Estrategia y paquetes de acción.</strong>{" "}
            A partir del diagnóstico definimos qué hacer, dónde, con qué mensajes y en qué orden, para que el personaje no sólo
            aparezca, sino que quede asociado a las temáticas que le conviene encarnar.
          </li>
          <li>
            <strong>Implementación con herramientas propias.</strong>{" "}
            Bajamos la estrategia a tierra con mapas de priorización, rutas territoriales, canales digitales (WhatsApp), encuestas
            y push poll, alineando presencia, mensajes y estructura.
          </li>
          <li>
            <strong>Acompañamiento y ajustes.</strong>{" "}
            Medimos cómo responde el territorio, qué temas prenden y dónde hay resistencia, y ajustamos rutas, mensajes y focos de
            inversión. La estrategia se corrige según lo que de verdad pasa en tierra.
          </li>
        </ol>
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
        <ul style={{ display: "grid", gap: "8px", fontSize: "16px" }}>
          <li>
            <strong>Campañas electorales.</strong>
          </li>
          <li>
            <strong>Gobiernos locales.</strong>
          </li>
          <li>
            <strong>Poder Judicial y órganos autónomos.</strong>
          </li>
          <li>
            <strong>ONG y colectivos.</strong>
          </li>
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
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Hagamos equipo</h2>
        <p style={{ marginBottom: "12px" }}>
          Si quieres que el trabajo que ya haces en territorio se traduzca en posiciones más firmes, este es un buen momento para empezar a trabajarlo en equipo.
        </p>
      </section>
    </main>
  );
}