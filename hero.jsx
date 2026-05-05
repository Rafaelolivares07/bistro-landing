/* global React, Icon, Phone, PhonePlaceholder */
const { useState: useStateHero } = React;

function Nav({ wa }) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark"><Icon.Cloche size={28} /></span>
          <span className="brand-name">Bistró</span>
        </a>
        <div className="nav-links">
          <a href="#producto">Producto</a>
          <a href="#videos">En acción</a>
          <a href="#planes">Planes</a>
          <a href={wa} target="_blank" rel="noreferrer" className="btn btn-dark" style={{padding: '10px 18px', fontSize: '13.5px'}}>
            Hablar por WhatsApp <Icon.ArrowRight size={12} />
          </a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;

function Hero({ wa, tagline }) {
  const today = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-meta">
          <span className="left">N.º 01 — Cali, Colombia</span>
          <span className="right">{today.toUpperCase()}</span>
        </div>

        <div className="hero-grid">
          <div className="hero-text">
            <span className="kicker">Software para restaurantes</span>
            <h1 className="display hero-title" style={{marginTop: '24px'}}>
              <span className="row">Tu</span>
              <span className="row"><em>restaurante,</em></span>
              <span className="row">en orden.</span>
            </h1>

            <p className="hero-subhead">
              {tagline}
            </p>

            <div className="hero-cta">
              <a href={wa} target="_blank" rel="noreferrer" className="btn btn-dark">
                Hablar con ventas <Icon.ArrowRight size={14} />
              </a>
              <a href="#planes" className="btn btn-ghost">Ver planes</a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">3 <em>planes</em></div>
                <div className="lbl">Desde $50.000 / mes — escala cuando lo necesites</div>
              </div>
              <div className="hero-stat">
                <div className="num">4 <em>módulos</em></div>
                <div className="lbl">URL pública, mesa, mesero y cocina conectados</div>
              </div>
              <div className="hero-stat">
                <div className="num">1 <em>flujo</em></div>
                <div className="lbl">Del pedido a la cocina sin fricción ni papel</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <span className="hero-tag"><span className="dot"></span>Demo en vivo · 00:42</span>
            <Phone>
              <PhonePlaceholder
                kind={<>Pide, paga y <em>disfruta.</em></>}
                label="01 · Cliente en mesa"
                sublabel="Escanea el QR y pide sin esperar al mesero. Reproduce el video."
              />
            </Phone>
          </div>
        </div>

        <div className="feature-strip">
          <div className="item">
            <span className="num">01 — URL</span>
            <span className="ttl">Tu menú, tu dominio</span>
            <span className="dsc">Recibe pedidos online desde una dirección que es tuya.</span>
          </div>
          <div className="item">
            <span className="num">02 — MESA</span>
            <span className="ttl">QR en cada mesa</span>
            <span className="dsc">El cliente pide, paga y se va. Sin filas, sin esperas.</span>
          </div>
          <div className="item">
            <span className="num">03 — MESERO</span>
            <span className="ttl">Equipo conectado</span>
            <span className="dsc">Pedidos, mesas y estados en tiempo real desde el celular.</span>
          </div>
          <div className="item">
            <span className="num">04 — COCINA</span>
            <span className="ttl">Tablero de cocina</span>
            <span className="dsc">Cada plato, cada estado, perfectamente coordinado.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

/* ---------- Editorial pull-quote ---------- */
function Pull() {
  return (
    <section className="pull">
      <div className="wrap pull-inner">
        <span className="kicker no-rule" style={{color: '#D4B383', marginBottom: 24, display: 'block'}}>Manifiesto</span>
        <q>
          Un restaurante no se administra con <em>papel y memoria.</em> Se administra con un sistema que respira al ritmo de tu cocina, tus meseros y tus clientes — todos en la misma página, en tiempo real.
        </q>
        <div className="pull-byline">
          <Icon.Cloche size={20} />
          <span>Bistró — Filosofía de producto</span>
        </div>
      </div>
    </section>
  );
}
window.Pull = Pull;
