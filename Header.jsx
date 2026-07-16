const { useState, useEffect } = React;

function Header() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { Button } = NS;
  const { company, nav } = window.TAD;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { if (window.lucide) lucide.createIcons(); }, [open, scrolled]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 80,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--dur) var(--ease-out)',
    }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 24px', height: scrolled ? 70 : 88, display: 'flex', alignItems: 'center', gap: 20, transition: 'height var(--dur) var(--ease-out)' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
          <img src="../../assets/logo-circle.jpg" alt="TA-Decor" style={{ width: scrolled ? 42 : 50, height: scrolled ? 42 : 50, borderRadius: '50%', boxShadow: 'var(--shadow-sm)', transition: 'all var(--dur)' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '0.04em', color: scrolled ? 'var(--slate-800)' : '#fff' }}>TA-DECOR</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: scrolled ? 'var(--cyan-600)' : 'rgba(255,255,255,0.75)' }}>Advertising · Interior · Design</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="tad-nav" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 30 }}>
          {nav.map((n) => (
            <a key={n.label} href={n.href} style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, textDecoration: 'none', color: scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)', transition: 'color var(--dur)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? 'var(--slate-800)' : '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)')}>{n.label}</a>
          ))}
        </nav>
        <div className="tad-nav">
          <Button variant="accent" icon="phone-call" size="sm">Nhận báo giá</Button>
        </div>

        {/* Mobile hamburger */}
        <button className="tad-burger" aria-label="Mở menu" onClick={() => setOpen(true)}
          style={{ display: 'none', marginLeft: 'auto', width: 44, height: 44, border: 'none', background: 'transparent', color: scrolled ? 'var(--slate-800)' : '#fff', cursor: 'pointer' }}>
          <i data-lucide="menu" style={{ width: 28, height: 28 }}></i>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && <MobileMenu onClose={() => setOpen(false)} />}
      <style>{`@media (max-width:900px){.tad-nav{display:none!important}.tad-burger{display:inline-flex!important;align-items:center;justify-content:center}}`}</style>
    </header>
  );
}

function MobileMenu({ onClose }) {
  const { company, nav } = window.TAD;
  const NS = window.TADecorDesignSystem_573d7b;
  const { Button } = NS;
  useEffect(() => { if (window.lucide) lucide.createIcons(); }, []);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 120 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(15,30,37,0.5)' }}></div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(84vw, 340px)', background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <img src="../../assets/logo-circle.jpg" alt="TA-Decor" style={{ width: 44, height: 44, borderRadius: '50%' }} />
          <button aria-label="Đóng" onClick={onClose} style={{ width: 44, height: 44, border: '1px solid var(--border)', borderRadius: '50%', background: '#fff', cursor: 'pointer', color: 'var(--slate-700)' }}><i data-lucide="x" style={{ width: 22, height: 22 }}></i></button>
        </div>
        {nav.map((n) => (
          <a key={n.label} href={n.href} onClick={onClose} style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-strong)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>{n.label}</a>
        ))}
        <div style={{ marginTop: 16 }}><Button variant="accent" icon="phone-call" block>Nhận báo giá miễn phí</Button></div>
        <a href={'tel:' + company.hotlineRaw} style={{ marginTop: 14, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--slate-800)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}><i data-lucide="phone" style={{ width: 18, height: 18 }}></i>{company.hotline}</a>
      </div>
    </div>
  );
}

Object.assign(window, { Header, MobileMenu });
