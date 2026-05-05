/* global React, Icon, Phone, PhonePlaceholder */
const { useState: useStateVid } = React;

// Para agregar un video: pon el ID de YouTube en youtubeId
// Ejemplo: youtubeId: 'dQw4w9WgXcQ'  (lo que va después de youtu.be/ o v= en la URL)
// Para quitar un video: youtubeId: null  (muestra el placeholder)
const VIDEOS = [
  {
    id: 'url',
    youtubeId: null,
    num: '01',
    name: <>Tu URL <em>pública</em></>,
    eyebrow: 'Capítulo I · Pedido remoto',
    title: <>Una dirección <em>que es tuya.</em></>,
    desc: 'Tu menú vive en una URL pública. Compártela en redes, en tu Google, en cualquier parte. Tus clientes piden directo — sin comisiones, sin intermediarios.',
    points: [
      'Menú con fotos, categorías y precios',
      'Domicilio, recogida o reserva',
      'Pagos en línea integrados',
      'Sin descargar ninguna app'
    ],
    label: '01 · URL pública',
    kind: <>bistro.menu/tu<em>negocio</em></>,
    sub: 'Reproduce el video y mira cómo un cliente pide desde el navegador en menos de 60 segundos.'
  },
  {
    id: 'mesa',
    youtubeId: null,
    num: '02',
    name: <>La <em>mesa</em></>,
    eyebrow: 'Capítulo II · Cliente en sitio',
    title: <>El QR que <em>libera</em> a tus meseros.</>,
    desc: 'En cada mesa, un código QR. El cliente escanea, ordena, paga y disfruta. Tus meseros dejan de tomar pedidos y empiezan a dar servicio.',
    points: [
      'Pedido directo desde la silla',
      'Cuenta dividida automática',
      'Llamadas al mesero con un toque',
      'Reduce errores de orden a casi cero'
    ],
    label: '02 · Mesa con QR',
    kind: <>Escanea y <em>haz tu pedido</em></>,
    sub: 'Mira la experiencia desde la mesa: del QR al plato, sin un solo malentendido.'
  },
  {
    id: 'mesero',
    youtubeId: null,
    num: '03',
    name: <>El <em>mesero</em></>,
    eyebrow: 'Capítulo III · Equipo de sala',
    title: <>Tu sala, en <em>una pantalla.</em></>,
    desc: 'Cada mesero tiene en su celular el estado de cada mesa, cada pedido y cada cuenta. Coordinar el servicio se vuelve evidente.',
    points: [
      'Estado de mesas en tiempo real',
      'Asignación inteligente de pedidos',
      'Historial por mesero',
      'Notificaciones cuando un plato sale'
    ],
    label: '03 · Dashboard del mesero',
    kind: <>Pedidos <em>en curso</em></>,
    sub: 'Así ve un mesero su turno: nuevos, en preparación y listos. Todo claro, todo a tiempo.'
  },
  {
    id: 'cocina',
    youtubeId: null,
    num: '04',
    name: <>La <em>cocina</em></>,
    eyebrow: 'Capítulo IV · Tablero de producción',
    title: <>El corazón <em>en orden.</em></>,
    desc: 'Una pantalla en cocina muestra todo lo que entra, lo que se prepara y lo que está listo. Tu chef ya no grita pedidos: los lee.',
    points: [
      'Columnas de Nuevo · En preparación · Listo',
      'Tiempos por plato',
      'Marca como listo con un toque',
      'Imprime tiquetes opcionales'
    ],
    label: '04 · Cocina',
    kind: <>Estado de <em>pedidos</em></>,
    sub: 'El tablero de cocina en acción: un flujo limpio, sin platos perdidos ni demoras invisibles.'
  }
];

function Videos() {
  const [active, setActive] = useStateVid(0);
  const v = VIDEOS[active];

  return (
    <section className="section video-section" id="videos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Reportaje en cuatro actos</span>
            <h2 className="section-title" style={{marginTop: 18}}>
              Bistró, <em>en acción.</em>
            </h2>
          </div>
          <p className="section-intro">
            Cuatro grabaciones reales del producto funcionando. Desde el cliente que escanea el QR hasta el chef que marca un plato como listo — la operación completa de tu restaurante, contada en video.
          </p>
        </div>

        <div className="video-tabs" role="tablist">
          {VIDEOS.map((vid, i) => (
            <button
              key={vid.id}
              role="tab"
              className={`video-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="vt-num">{vid.num} · CAPÍTULO</span>
              <span className="vt-name">{vid.name}</span>
            </button>
          ))}
        </div>

        <div className="video-stage">
          <div className="video-text">
            <div className="v-step">{v.eyebrow}</div>
            <h3 className="v-title">{v.title}</h3>
            <p className="v-desc">{v.desc}</p>
            <ul className="v-points">
              {v.points.map((p, i) => (
                <li key={i}><Icon.Check size={14} />{p}</li>
              ))}
            </ul>
          </div>
          <div className="video-phone-wrap">
            <Phone>
              <PhonePlaceholder
                kind={v.kind}
                label={v.label}
                sublabel={v.sub}
                youtubeId={v.youtubeId}
              />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Videos = Videos;
