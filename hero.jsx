function Hero() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { Button, StatCounter, Badge } = NS;
  const { stats } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); }, []);

  return (
    <section style={{ position: 'relative', marginTop: -88, paddingTop: 88, background: 'var(--grad-brand)', color: '#fff', overflow: 'hidden' }}>
      {/* ambient shapes */}
      <div aria-hidden style={{ position: 'absolute', top: -120, right: -80, width: 520, height: 520, background: 'radial-gradient(circle at center, rgba(70,198,210,0.28), transparent 62%)', pointerEvents: 'none' }}></div>
      <div aria-hidden style={{ position: 'absolute', bottom: -160, left: -120, width: 480, height: 480, background: 'radial-gradient(circle at center, rgba(224,138,43,0.16), transparent 60%)', pointerEvents: 'none' }}></div>
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '72px 24px 88px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }} className="tad-hero-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
            <Badge tone="onDark" icon="badge-check">Thiết kế & thi công trọn gói</Badge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: '0 0 22px' }}>
            Kiến tạo không gian<br /><span style={{ color: 'var(--cyan-400)' }}>Nâng tầm</span> thương hiệu
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 560, margin: '0 0 34px' }}>
            Chuyên thiết kế, thi công nội thất và quảng cáo trọn gói cho nhà ở, văn phòng, showroom, cửa hàng và doanh nghiệp.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" iconRight="arrow-right" href="#du-an">Xem dự án</Button>
            <Button variant="onDark" size="lg" icon="phone-call" href="#lien-he">Nhận báo giá miễn phí</Button>
          </div>
        </div>

        {/* Right showcase panel */}
        <div className="tad-hero-panel" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))', border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
              <i data-lucide="image" style={{ width: 54, height: 54 }}></i>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, marginTop: 12 }}>Ảnh dự án / showroom</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 20, left: -22, background: '#fff', color: 'var(--text-strong)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--grad-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><i data-lucide="award" style={{ width: 22, height: 22 }}></i></span>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, lineHeight: 1 }}>Đúng thiết kế</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>Đúng tiến độ · Đúng ngân sách</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '32px 24px', display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          {stats.map((s) => <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} invert />)}
        </div>
      </div>

      <style>{`@media (max-width:860px){.tad-hero-grid{grid-template-columns:1fr!important;gap:36px!important}.tad-hero-panel{max-width:420px}}`}</style>
    </section>
  );
}
Object.assign(window, { Hero });
