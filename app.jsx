/* global React, ReactDOM, Nav, Hero, Pull, Videos, Plans, CtaFinal, Foot, Icon */

const PHONE     = "+573175718658";
const TAGLINE   = "Bistró es la aplicación que empodera a tu restaurante con tecnología simple, conectando la fuerza y poder de tu negocio con la eficiencia digital.";
const ACCENT    = "#B8915A";

function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--gold', ACCENT);
    document.documentElement.style.setProperty('--serif', '"Inter Tight", system-ui, sans-serif');
  }, []);

  const waBase = `https://wa.me/${PHONE.replace(/\D/g, '')}`;
  const wa = `${waBase}?text=${encodeURIComponent('Hola, quiero saber más sobre Bistró.')}`;

  return (
    <>
      <Nav wa={wa} />
      <Hero wa={wa} tagline={TAGLINE} />
      <Pull />
      <Videos />
      <Plans wa={wa} waBase={waBase} />
      <CtaFinal wa={wa} />
      <Foot />

      <a href={wa} target="_blank" rel="noreferrer" className="wa-float" aria-label="WhatsApp">
        <Icon.Whatsapp size={28} />
      </a>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
