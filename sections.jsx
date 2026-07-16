// Homepage content sections (part 1)
function Wrap({ id, alt, children, style }) {
  return <section id={id} style={{ background: alt ? 'var(--bg-alt)' : 'var(--bg-page)', padding: 'var(--section-y) 0', ...style }}>
    <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 24px' }}>{children}</div>
  </section>;
}

function IntroSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { Button, SectionTitle } = NS;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); }, []);
  const points = [
    { icon: 'users', t: 'Đội ngũ thiết kế & thi công nội bộ' },
    { icon: 'boxes', t: 'Triển khai trọn gói từ A–Z' },
    { icon: 'gem', t: 'Cam kết chất lượng & tiến độ' },
  ];
  return (
    <Wrap id="gioi-thieu">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="tad-two">
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '5 / 4', borderRadius: 'var(--radius-xl)', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center' }}><i data-lucide="image" style={{ width: 48, height: 48 }}></i><div style={{ fontSize: 13, marginTop: 10, fontFamily: 'var(--font-body)' }}>Ảnh đội ngũ / công trình</div></div>
          </div>
          <div style={{ position: 'absolute', right: -18, bottom: -18, background: 'var(--grad-amber)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: '18px 22px', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, lineHeight: 1 }}>12+</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, marginTop: 4 }}>năm kinh nghiệm</div>
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="Về TA-Decor" title="Đồng hành cùng doanh nghiệp xây dựng không gian và hình ảnh thương hiệu"
            lead="Từ ý tưởng đến không gian hoàn thiện, chúng tôi kiến tạo những công trình mang dấu ấn riêng — bền đẹp, đúng công năng và giàu cảm xúc." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '28px 0 32px' }}>
            {points.map((p) => (
              <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--cyan-50)', color: 'var(--cyan-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={p.icon} style={{ width: 21, height: 21 }}></i></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--text-strong)' }}>{p.t}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" iconRight="arrow-right" href="#">Xem thêm về chúng tôi</Button>
        </div>
      </div>
    </Wrap>
  );
}

function ServiceSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle, ServiceCard } = NS;
  const { services } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <Wrap id="dich-vu" alt>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <SectionTitle align="center" eyebrow="Dịch vụ" title="Giải pháp thiết kế và thi công trọn gói"
          lead="Một đầu mối cho toàn bộ nhu cầu nội thất và quảng cáo của bạn." />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="tad-grid-4">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </Wrap>
  );
}

function FeaturedProjects() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle, Tag, ProjectCard, Button } = NS;
  const { filters, projects } = window.TAD;
  const [active, setActive] = React.useState('Tất cả');
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  const shown = active === 'Tất cả' ? projects : projects.filter((p) => p.cat === active);
  return (
    <Wrap id="du-an">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 28 }}>
        <SectionTitle eyebrow="Dự án tiêu biểu" title="Mỗi công trình là một dấu ấn riêng" />
        <Button variant="secondary" iconRight="arrow-right" href="#">Xem tất cả dự án</Button>
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
        {filters.map((f) => <Tag key={f} active={f === active} onClick={() => setActive(f)}>{f}</Tag>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tad-grid-3">
        {shown.map((p) => <ProjectCard key={p.title} {...p} />)}
        {shown.length === 0 && <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0', fontFamily: 'var(--font-body)' }}>Chưa có dự án trong hạng mục này.</div>}
      </div>
    </Wrap>
  );
}

function WhyChooseUs() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle } = NS;
  const { why } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <Wrap alt>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <SectionTitle align="center" eyebrow="Vì sao chọn chúng tôi" title="Sự an tâm trong từng công đoạn" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="tad-grid-3">
        {why.map((w) => (
          <div key={w.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 26, display: 'flex', gap: 16, alignItems: 'flex-start', boxShadow: 'var(--shadow-xs)' }}>
            <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--grad-cyan)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={w.icon} style={{ width: 23, height: 23 }}></i></span>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-strong)', margin: '2px 0 7px' }}>{w.title}</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{w.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function WorkProcess() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { SectionTitle, ProcessStep } = NS;
  const { process } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <Wrap>
      <div style={{ textAlign: 'center', marginBottom: 52 }}>
        <SectionTitle align="center" eyebrow="Quy trình làm việc" title="7 bước rõ ràng, minh bạch" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="tad-grid-4">
        {process.map((p, i) => <ProcessStep key={p.title} step={i + 1} {...p} />)}
      </div>
    </Wrap>
  );
}

Object.assign(window, { Wrap, IntroSection, ServiceSection, FeaturedProjects, WhyChooseUs, WorkProcess });
