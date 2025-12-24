"use client";
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
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
          <a href="#servicios" style={{ textDecoration: "none", color: "var(--text)" }}>
            Servicios
          </a>
          <a href="#casos" style={{ textDecoration: "none", color: "var(--text)" }}>
            Casos de uso
          </a>
          <a href="#contacto" style={{ textDecoration: "none", color: "var(--text)" }}>
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
        aria-label="hero"
      >
        <div
          style={{
            display: "grid",
            gap: "24px",
            alignItems: "start",
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Columna 1: texto (se conserva) */}
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
            <p className="p muted">
              En Altiora nos dedicamos a posicionar personajes y narrativas en territorio. Microsegmentamos y medimos el mapa electoral con un sistema de herramientas propias hecho para decidir dónde y cómo conviene aparecer.
            </p>
            <div style={{ marginTop: "16px" }}>
              <a
                href="#enfoque"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "var(--link)",
                  opacity: 0.9,
                }}
              >
                Ver cómo trabajamos ↓
              </a>
            </div>
          </div>

          {/* Columna 2: panel visual (nuevo, sin borrar nada) */}
          <aside
            style={{
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "16px",
              background: "var(--panel2)",
              display: "grid",
              gap: "12px",
            }}
            aria-label="Ejemplo de entregables"
          >
            <div style={{ fontSize: "13px", letterSpacing: "0.06em", opacity: 0.9 }}>
              EJEMPLO DE ENTREGABLES
            </div>
            <div className="card" style={{ background: "var(--panel)", border: "1px solid var(--border)", boxShadow: "none" }}>
              <p className="p muted" style={{ marginBottom: "10px" }}>
                Aquí va una captura de un mapa, un dashboard o una muestra de una ruta territorial.
              </p>
              <ul style={{ display: "grid", gap: "8px", fontSize: "14px", paddingLeft: "18px", margin: 0 }}>
                <li>Mapa de priorización</li>
                <li>Ruta territorial</li>
                <li>Dashboard de escenarios</li>
              </ul>
            </div>
            <p className="p muted" style={{ fontSize: "14px" }}>
              (Este panel se reemplaza por una imagen real en el siguiente movimiento.)
            </p>
          </aside>
        </div>

        {/* Ajuste responsivo simple (sin CSS extra) */}
        <style jsx>{`
          @media (min-width: 900px) {
            section[aria-label="hero"] > div {
              grid-template-columns: 1.15fr 0.85fr;
            }
          }
        `}</style>
      </section>

      {/* Nuevo: banda de confianza */}
      <section
        aria-label="banda de confianza"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 16px 24px",
        }}
      >
        <div
          className="card"
          style={{
            background: "var(--panel2)",
            boxShadow: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "14px", opacity: 0.92 }}>
            Campañas · Gobiernos · Poder Judicial · ONG
          </div>
          <div style={{ fontSize: "14px", opacity: 0.92 }}>
            Sección/colonia/municipio · Mapas · WhatsApp · Dashboards
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
            paddingLeft: "0px",
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
        <div className="cardGrid">
          <article className="card">
            <h3 className="h3">Estrategia territorial y rutas de trabajo.</h3>
            <p className="p muted">Dónde ganar, dónde defender y dónde no vale la pena invertir.</p>
          </article>

          <article className="card">
            <h3 className="h3">Diagnóstico territorial y electoral.</h3>
            <p className="p muted">Mapas de rentabilidad, escenarios de voto y prioridades por sección, colonia o municipio.</p>
          </article>

          <article className="card">
            <h3 className="h3">Mapas de incidencia política y dashboards para toma prudente de decisiones.</h3>
            <p className="p muted">Mapas y dashboards interactivos para simular escenarios y tomar decisiones prudentes en minutos.</p>
          </article>

          <article className="card">
            <h3 className="h3">Encuestas, push poll de posicionamiento y termómetro del territorio.</h3>
            <p className="p muted">Lecturas rápidas del clima político, el posicionamiento de personajes y los temas sensibles por zona.</p>
          </article>

          <article className="card">
            <h3 className="h3">Canales digitales: bots de WhatsApp y atención ciudadana.</h3>
            <p className="p muted">Registro, afiliación, encuestas rápidas y atención ciudadana.</p>
          </article>
        </div>

        <div className="spacer12" />

        {/* Texto original (se conserva además del grid) */}
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

      {/* Nuevo: Entregables */}
      <section
        id="entregables"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 32px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Qué recibe tu equipo</h2>
        <p style={{ fontSize: "15px", opacity: 0.9, marginBottom: "12px" }}>
          Entregables pensados para decidir rápido y ejecutar en territorio.
        </p>
        <div className="cardGrid">
          <article className="card">
            <h3 className="h3">Mapa de priorización</h3>
            <p className="p muted">Ranking por sección/colonia/municipio para invertir donde conviene.</p>
          </article>
          <article className="card">
            <h3 className="h3">Rutas territoriales</h3>
            <p className="p muted">Recorridos y puntos de contacto para operar con estructura y tiempo real.</p>
          </article>
          <article className="card">
            <h3 className="h3">Dashboard de escenarios</h3>
            <p className="p muted">Simulaciones simples para definir focos, riesgos y decisiones prudentes.</p>
          </article>
          <article className="card">
            <h3 className="h3">Informe ejecutivo</h3>
            <p className="p muted">Resumen claro para alinear al equipo: qué hacer, dónde y por qué.</p>
          </article>
          <article className="card">
            <h3 className="h3">Segmentación / universos</h3>
            <p className="p muted">Lectura de patrones territoriales para ajustar narrativa y operación.</p>
          </article>
          <article className="card">
            <h3 className="h3">Canal digital (WhatsApp)</h3>
            <p className="p muted">Registro, encuestas rápidas y atención: datos útiles sin fricción.</p>
          </article>
        </div>
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
        <ol
          style={{
            display: "grid",
            gap: "12px",
            fontSize: "15px",
            paddingLeft: 0,
            listStyle: "none",
          }}
        >
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

        <div className="spacer12" />

        {/* Texto original (se conserva además de los pills) */}
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

        {/* Nuevo: Casos de uso (cards) */}
        <div className="spacer12" />
        <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Casos de uso típicos</h3>
        <div className="cardGrid">
          <article className="card">
            <h3 className="h3">Campaña municipal</h3>
            <p className="p muted">
              <strong>Problema:</strong> demasiadas actividades, poca claridad.
              <br />
              <strong>Intervención:</strong> priorización + rutas + seguimiento.
              <br />
              <strong>Resultado esperado:</strong> presencia donde sí impacta.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">Gobierno local</h3>
            <p className="p muted">
              <strong>Problema:</strong> servicios sin foco territorial.
              <br />
              <strong>Intervención:</strong> mapas de demanda + canal ciudadano.
              <br />
              <strong>Resultado esperado:</strong> atención y legitimidad medible.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">Perfil judicial / órgano autónomo</h3>
            <p className="p muted">
              <strong>Problema:</strong> baja conexión con población.
              <br />
              <strong>Intervención:</strong> narrativa por segmentos + territorio.
              <br />
              <strong>Resultado esperado:</strong> claridad pública y confianza.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">ONG / colectivo</h3>
            <p className="p muted">
              <strong>Problema:</strong> mucha operación, poco orden de prioridades.
              <br />
              <strong>Intervención:</strong> mapeo de incidencia + ruta + canal.
              <br />
              <strong>Resultado esperado:</strong> impacto concentrado y rastreable.
            </p>
          </article>
        </div>
      </section>

      {/* Nuevo: FAQ */}
      <section
        id="faq"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 32px",
          fontSize: "15px",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Preguntas frecuentes</h2>
        <div className="card" style={{ background: "var(--panel)", border: "1px solid var(--border)", boxShadow: "none" }}>
          <div style={{ display: "grid", gap: "10px" }}>
            <details>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>¿Qué insumos necesitan para empezar?</summary>
              <p className="p muted" style={{ marginTop: "8px" }}>
                Un objetivo claro (qué quieres mover), el ámbito geográfico (sección/colonia/municipio) y los datos disponibles.
                Si no hay datos, también empezamos desde territorio.
              </p>
            </details>
            <details>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>¿En cuánto tiempo entregan un primer diagnóstico?</summary>
              <p className="p muted" style={{ marginTop: "8px" }}>
                Depende del alcance, pero buscamos entregar un primer mapa/lectura útil lo antes posible para que el equipo decida.
              </p>
            </details>
            <details>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>¿Trabajan por sección, colonia o municipio?</summary>
              <p className="p muted" style={{ marginTop: "8px" }}>
                Sí. Definimos la unidad según el objetivo: operación, comunicación o medición.
              </p>
            </details>
            <details>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>¿Cómo se integra WhatsApp al trabajo territorial?</summary>
              <p className="p muted" style={{ marginTop: "8px" }}>
                WhatsApp sirve para registrar, escuchar, encuestar y atender; pero siempre conectado a un mapa y a una ruta.
              </p>
            </details>
            <details>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>¿Qué NO hace Altiora?</summary>
              <p className="p muted" style={{ marginTop: "8px" }}>
                No hacemos “ruido” sin estrategia: priorizamos claridad, coherencia y decisión.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "16px 16px 48px",
          borderTop: "1px solid var(--border)",
          fontSize: "15px",
        }}
      >
        <div className="card" style={{ background: "var(--panel)", border: "1px solid var(--border)", boxShadow: "none" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>Hagamos equipo</h2>
          <p style={{ marginBottom: "12px" }}>
            Si quieres que el trabajo que ya haces en territorio se traduzca en posiciones más firmes, este es un buen momento para empezar a trabajarlo en equipo.
          </p>

          {/* Nuevo: CTAs (placeholders) */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 14px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--panel)",
                textDecoration: "none",
                color: "var(--text)",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Agendar llamada
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 14px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--panel)",
                textDecoration: "none",
                color: "var(--text)",
                fontSize: "14px",
                opacity: 0.92,
              }}
            >
              Enviar mensaje
            </a>
          </div>

          <p className="p muted" style={{ marginTop: "12px", fontSize: "14px" }}>
            (Aquí conectamos Calendly / WhatsApp / correo en el siguiente movimiento.)
          </p>
        </div>
      </section>
      <style jsx global>{`
        :root{
          --bg: #F5F2EC;
          --panel: #FFFFFF;
          --panel2: #F0EEE8;
          --border: #D7D2C8;

          --text: #14181F;
          --muted: #5E6A78;

          --link: #2F6F7A;
          --linkHover: #255A63;
        }

        html, body { background: var(--bg); color: var(--text); }
        a { color: var(--link); }
        a:hover { color: var(--linkHover); }

        /* Ensure existing utility classes align with the matte palette */
        .muted { color: var(--muted) !important; }
        .card { box-shadow: none !important; }
      `}</style>
    </main>
  );
}