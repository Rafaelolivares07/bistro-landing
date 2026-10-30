/* global React, Icon */

const PLANS = [
  {
    name: 'Básico',
    tagline: 'Simple, rápido y hecho para crecer contigo.',
    price: '$50.000',
    unit: '/ mes',
    badge: null,
    featured: false,
    feats: [
      { icon: 'Globe', text: 'Menú digital con pedidos online' },
      { icon: 'QR', text: 'URL pública para tus clientes' },
      { icon: 'Tray', text: 'Gestión básica de pedidos' },
      { icon: 'Cart', text: 'Domicilios y recogida' }
    ],
    foot: 'Empieza aquí',
    waMsg: 'Hola, me interesa el plan Básico de Bistró ($50.000/mes).'
  },
  {
    name: 'Mediano',
    tagline: 'Más control, más coordinación, mejor servicio.',
    price: '$90.000',
    unit: '/ mes',
    badge: 'Más popular',
    featured: true,
    feats: [
      { icon: 'Check', text: 'Todo lo de Bistró Básico' },
      { icon: 'User', text: 'Dashboard del mesero' },
      { icon: 'Monitor', text: 'Dashboard de cocina' },
      { icon: 'List', text: 'Gestión de estados de pedidos' }
    ],
    foot: 'El equilibrio perfecto',
    waMsg: 'Hola, me interesa el plan Mediano de Bistró ($90.000/mes).'
  },
  {
    name: 'Full',
    tagline: 'Más control, mejores decisiones, mayor crecimiento.',
    price: '$140.000',
    unit: '/ mes',
    badge: null,
    featured: false,
    feats: [
      { icon: 'Layers', text: 'Todo lo de Básico y Mediano' },
      { icon: 'Box', text: 'Control de inventarios' },
      { icon: 'Chart', text: 'Reportes y analítica' },
      { icon: 'Doc', text: 'Gestión contable' }
    ],
    foot: 'Operación completa',
    waMsg: 'Hola, me interesa el plan Full de Bistró ($140.000/mes).'
  }
];

function Plans({ wa, waBase }) {
  return (
    <section className="section plans-section" id="planes">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Tarifa &amp; Edición</span>
            <h2 className="section-title" style={{marginTop: 18}}>
              Tres planes, <em>una cocina.</em>
            </h2>
          </div>
          <p className="section-intro">
            Empieza simple con Básico, conecta tu equipo con Mediano, o lleva las decisiones al siguiente nivel con Full. Todos los planes hablan el mismo idioma — escala cuando tu restaurante lo pida.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map((p, i) => {
            const IconC = Icon[p.feats[0].icon] || Icon.Check;
            return (
              <article key={p.name} className={`plan ${p.featured ? 'featured' : ''}`}>
                {p.badge && <span className="plan-badge">{p.badge}</span>}
                <div className="plan-cloche"><Icon.Cloche size={28} /></div>
                <h3 className="plan-name">Bistró <em>{p.name}</em></h3>
                <p className="plan-tagline">{p.tagline}</p>
                <div className="plan-price-row">
                  <span className="plan-price">{p.price}</span>
                  <span className="plan-price-unit">{p.unit} COP</span>
                </div>
                <ul className="plan-feat">
                  {p.feats.map((f, j) => {
                    const FI = Icon[f.icon] || Icon.Check;
                    return (
                      <li key={j}>
                        <span className="ico"><FI size={14} /></span>
                        <span>{f.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={`${waBase}?text=${encodeURIComponent(p.waMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${p.featured ? 'btn-gold' : 'btn-dark'} plan-cta`}
                >
                  Empezar con {p.name} <Icon.ArrowRight size={14} />
                </a>
                <div className="plan-foot">{p.foot}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Plans = Plans;

function CtaFinal({ wa }) {
  return (
    <section className="cta-final">
      <div className="wrap">
        <div className="cta-cloche"><Icon.Cloche size={48} /></div>
        <span className="kicker">Próximo servicio</span>
        <h2 className="display" style={{marginTop: 20}}>
          ¿Listo para <em>cocinar</em> mejor?
        </h2>
        <p className="lede">
          Un mensaje. Una conversación. Tu restaurante, organizado por dentro y por fuera. El equipo te responde directo.
        </p>
        <div className="cta-buttons">
          <a href={wa} target="_blank" rel="noreferrer" className="btn btn-dark">
            <Icon.Whatsapp size={16} /> Hablar por WhatsApp
          </a>
          <a href="#planes" className="btn btn-ghost">Ver planes</a>
        </div>
      </div>
    </section>
  );
}
window.CtaFinal = CtaFinal;

function Foot() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-meta">Bistró · +57 317 571 8658</div>
        <div className="brand-mark" style={{justifySelf:'center', color:'var(--gold)'}}><Icon.Cloche size={28} /></div>
        <div className="foot-credit">© 2026 · Bistró.tuc-tuc.co</div>
      </div>
    </footer>
  );
}
window.Foot = Foot;
