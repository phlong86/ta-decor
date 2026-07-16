// Homepage content sections (part 2)
function BeforeAfterSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle, BeforeAfterSlider, Badge } = NS;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <Wrap alt>
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 48, alignItems: 'center' }} className="tad-two">
        <div>
          <SectionTitle eyebrow="Trước & sau" title="Sự khác biệt sau khi thi công"
            lead="Kéo thanh trượt để so sánh hiện trạng ban đầu và không gian sau khi TA-Decor hoàn thiện." />
          <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
            <Badge tone="slate" icon="ruler">Tối ưu công năng</Badge>
            <Badge tone="cyan" icon="palette">Đồng bộ thẩm mỹ</Badge>
          </div>
        </div>
        <BeforeAfterSlider beforeLabel="Hiện trạng" afterLabel="Hoàn thiện" />
      </div>
    </Wrap>
  );
}

function PartnerLogos() {
  const names = ['MINH PHÁT', 'AN PHÁT', 'LUXE', 'BAKERY MỘC', 'NHÀ GỖ', 'GRAND PARK', 'VIỆT LONG', 'HOÀNG GIA'];
  const row = [...names, ...names];
  return (
    <section style={{ background: 'var(--bg-page)', padding: '40px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto 22px', padding: '0 24px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-faint)', fontWeight: 600 }}>Khách hàng & đối tác đã tin tưởng</div>
      <div style={{ position: 'relative', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
        <div className="tad-marquee" style={{ display: 'flex', gap: 56, whiteSpace: 'nowrap', width: 'max-content' }}>
          {row.map((n, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '0.06em', color: 'var(--slate-300)' }}>{n}</span>
          ))}
        </div>
      </div>
      <style>{`@keyframes tad-marq{from{transform:translateX(0)}to{transform:translateX(-50%)}}.tad-marquee{animation:tad-marq 28s linear infinite}@media (prefers-reduced-motion: reduce){.tad-marquee{animation:none}}`}</style>
    </section>
  );
}

function Testimonials() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle, Testimonial } = NS;
  const { testimonials } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <Wrap>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <SectionTitle align="center" eyebrow="Khách hàng nói gì" title="Niềm tin được xây từ kết quả" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tad-grid-3">
        {testimonials.map((t) => <Testimonial key={t.name} {...t} />)}
      </div>
    </Wrap>
  );
}

function NewsSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle, Badge, Button } = NS;
  const { news } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <Wrap id="tin-tuc" alt>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 36 }}>
        <SectionTitle eyebrow="Tin tức & cẩm nang" title="Kiến thức cho không gian của bạn" />
        <Button variant="secondary" iconRight="arrow-right" href="#">Xem tất cả bài viết</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tad-grid-3">
        {news.map((a) => (
          <a key={a.title} href="#" style={{ textDecoration: 'none', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-xs)', transition: 'box-shadow var(--dur), transform var(--dur)' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.transform = 'none'; }}>
            <div style={{ aspectRatio: '16 / 10', background: 'var(--grad-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.55)' }}><i data-lucide="newspaper" style={{ width: 36, height: 36 }}></i></div>
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
              <div><Badge tone="cyan">{a.tag}</Badge></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, lineHeight: 1.35, color: 'var(--text-strong)', margin: 0, textWrap: 'pretty' }}>{a.title}</h3>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 14, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-faint)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><i data-lucide="calendar" style={{ width: 13, height: 13 }}></i>{a.date}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><i data-lucide="clock" style={{ width: 13, height: 13 }}></i>{a.read}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Wrap>
  );
}

Object.assign(window, { BeforeAfterSection, PartnerLogos, Testimonials, NewsSection });
