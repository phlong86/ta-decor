// Consultation form (CTA) + Footer
function ConsultationForm() {
  const NS = window.TADecorDesignSystem_573d7b;
  const { Input, Select, Textarea, Checkbox, Button } = NS;
  const { company, services, budgets } = window.TAD;
  const [errors, setErrors] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [agree, setAgree] = React.useState(false);
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });

  const [sending, setSending] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const errs = {};
    if (!f.name.value.trim()) errs.name = 'Vui lòng nhập họ tên.';
    if (!/^0\d{9,10}$/.test(f.phone.value.replace(/\s/g, ''))) errs.phone = 'Số điện thoại chưa hợp lệ.';
    if (f.email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value)) errs.email = 'Email không hợp lệ.';
    if (!agree) errs.agree = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Gửi dữ liệu tới Netlify Forms (miễn phí, không cần backend).
    const data = new FormData(f);
    data.set('form-name', 'tu-van');
    const body = new URLSearchParams(data).toString();
    setSending(true);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      .then(() => {
        f.reset(); setAgree(false);
        setToast({ ok: true, msg: 'Đã gửi yêu cầu! TA-Decor sẽ liên hệ với bạn trong thời gian sớm nhất.' });
      })
      .catch(() => {
        setToast({ ok: false, msg: 'Gửi chưa thành công. Vui lòng gọi Hotline hoặc thử lại.' });
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => setToast(null), 4600);
      });
  };

  return (
    <section id="lien-he" style={{ position: 'relative', background: 'var(--grad-brand)', color: '#fff', padding: 'var(--section-y) 0', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: -100, left: -60, width: 420, height: 420, background: 'radial-gradient(circle,rgba(70,198,210,0.22),transparent 62%)' }}></div>
      <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="tad-two">
        <div>
          <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: 12, fontWeight: 600, color: 'var(--cyan-400)', marginBottom: 14 }}>Nhận tư vấn</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem,3.4vw,2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 18px' }}>Bạn đang cần thiết kế hoặc thi công?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', margin: '0 0 32px', maxWidth: 460 }}>Hãy để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ tư vấn và báo giá hoàn toàn miễn phí.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[{ i: 'phone', l: company.hotline, s: 'Hotline / Zalo', href: 'tel:' + company.hotlineRaw }, { i: 'mail', l: company.email, s: 'Email', href: 'mailto:' + company.email }, { i: 'map-pin', l: company.address, s: 'Địa chỉ', href: company.googleMapUrl }].map((r) => (
              <a key={r.s} href={r.href} target={r.href && r.href.startsWith('http') ? '_blank' : undefined} rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' }}>
                <span style={{ width: 46, height: 46, flexShrink: 0, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid var(--border-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={r.i} style={{ width: 20, height: 20 }}></i></span>
                <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>{r.l}</div><div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-dark-muted)' }}>{r.s}</div></div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', padding: 32, boxShadow: 'var(--shadow-lg)' }}>
          <form name="tu-van" method="POST" data-netlify="true" netlify-honeypot="company_website" onSubmit={submit} noValidate style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <input type="hidden" name="form-name" value="tu-van" />
            <Input name="name" label="Họ và tên" icon="user" placeholder="Nguyễn Văn A" required error={errors.name} />
            <Input name="phone" label="Số điện thoại" icon="phone" placeholder="09xx xxx xxx" required error={errors.phone} />
            <Input name="email" label="Email" icon="mail" placeholder="email@company.vn" error={errors.email} style={{ gridColumn: '1 / 3' }} />
            <Select name="service" label="Dịch vụ quan tâm" placeholder="Chọn dịch vụ" options={services.map((s) => s.title)} />
            <Select name="budget" label="Ngân sách dự kiến" placeholder="Chọn mức ngân sách" options={budgets} />
            <Textarea name="msg" label="Nội dung yêu cầu" rows={3} placeholder="Mô tả không gian, diện tích và mong muốn của bạn…" style={{ gridColumn: '1 / 3' }} />
            <div style={{ gridColumn: '1 / 3' }}>
              <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} label={<>Tôi đồng ý với <a href="#">chính sách bảo mật</a> của TA-Decor.</>} />
              {errors.agree && <div style={{ color: 'var(--danger)', fontSize: 12, marginTop: 6, fontFamily: 'var(--font-body)' }}>Vui lòng đồng ý với chính sách bảo mật.</div>}
            </div>
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden />
            <div style={{ gridColumn: '1 / 3' }}><Button type="submit" variant="accent" icon="send" block size="lg" disabled={sending}>{sending ? 'Đang gửi…' : 'Gửi yêu cầu tư vấn'}</Button></div>
          </form>
        </div>
      </div>

      {toast && (
        <div role="status" style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 200, background: '#fff', color: 'var(--text-strong)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, maxWidth: 'min(92vw, 460px)', borderLeft: `4px solid ${toast.ok ? 'var(--success)' : 'var(--danger)'}` }}>
          <span style={{ color: toast.ok ? 'var(--success)' : 'var(--danger)' }}><i data-lucide={toast.ok ? 'check-circle-2' : 'alert-circle'} style={{ width: 22, height: 22 }}></i></span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5 }}>{toast.msg}</span>
        </div>
      )}
    </section>
  );
}

function Footer() {
  const { company, nav, services } = window.TAD;
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  const social = [
    { i: 'thumbs-up', href: company.facebookUrl, l: 'Facebook' },
    { i: 'message-circle', href: company.zaloUrl, l: 'Zalo' },
    { i: 'play', href: '#', l: 'YouTube' },
    { i: 'music', href: company.tiktokUrl, l: 'TikTok' },
  ];
  const linkStyle = { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-dark-muted)', textDecoration: 'none', lineHeight: 2.1 };
  const head = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 };
  return (
    <footer style={{ background: 'var(--bg-inverse-deep)', color: 'var(--text-on-dark)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '68px 24px 0', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }} className="tad-foot">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <img src={company.logo} alt="TA-Decor" style={{ width: 48, height: 48, borderRadius: '50%' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '0.04em', color: '#fff' }}>TA-DECOR</div>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-on-dark-muted)', margin: '0 0 18px', maxWidth: 320 }}>Thiết kế & thi công nội thất, quảng cáo trọn gói. Kiến tạo không gian – Nâng tầm thương hiệu.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ ...linkStyle, display: 'flex', gap: 8, alignItems: 'center' }}><i data-lucide="map-pin" style={{ width: 15, height: 15 }}></i>{company.address}</span>
            <a href={'tel:' + company.hotlineRaw} style={{ ...linkStyle, display: 'flex', gap: 8, alignItems: 'center' }}><i data-lucide="phone" style={{ width: 15, height: 15 }}></i>{company.hotline}</a>
            <a href={'mailto:' + company.email} style={{ ...linkStyle, display: 'flex', gap: 8, alignItems: 'center' }}><i data-lucide="mail" style={{ width: 15, height: 15 }}></i>{company.email}</a>
          </div>
        </div>
        <div>
          <div style={head}>Liên kết</div>
          {nav.map((n) => <a key={n.label} href={n.href} style={{ ...linkStyle, display: 'block' }}>{n.label}</a>)}
        </div>
        <div>
          <div style={head}>Dịch vụ</div>
          {services.slice(0, 6).map((s) => <a key={s.title} href="#dich-vu" style={{ ...linkStyle, display: 'block' }}>{s.title}</a>)}
        </div>
        <div>
          <div style={head}>Kết nối</div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
            {social.map((s) => (
              <a key={s.l} href={s.href} aria-label={s.l} target="_blank" rel="noopener" style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><i data-lucide={s.i} style={{ width: 18, height: 18 }}></i></a>
            ))}
          </div>
          <a href={company.googleMapUrl} target="_blank" rel="noopener" style={{ ...linkStyle, display: 'flex', gap: 8, alignItems: 'center' }}><i data-lucide="map" style={{ width: 15, height: 15 }}></i>Xem trên Google Maps</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 48 }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '22px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-dark-muted)' }}>
          <span>© 2024 TA-Decor. Bảo lưu mọi quyền.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>Chính sách bảo mật</a>
            <a href="#" style={{ color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ConsultationForm, Footer });
