/* @ds-bundle: {"format":4,"namespace":"TADecorDesignSystem_573d7b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BeforeAfterSlider","sourcePath":"components/marketing/BeforeAfterSlider.jsx"},{"name":"FloatingContact","sourcePath":"components/marketing/FloatingContact.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"ProjectCard","sourcePath":"components/marketing/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatCounter","sourcePath":"components/marketing/StatCounter.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4f975aa7f5f9","components/core/Button.jsx":"704a79c1cd7f","components/core/Card.jsx":"161c0e27967c","components/core/IconButton.jsx":"068fc771e74f","components/core/SectionTitle.jsx":"b1ea6d1baf15","components/core/Tag.jsx":"6dbfe7e80ae7","components/forms/Checkbox.jsx":"a14d71ec1132","components/forms/Input.jsx":"27588989b37b","components/forms/Select.jsx":"8351f1b1afdb","components/forms/Textarea.jsx":"c51a7db7d2b5","components/marketing/BeforeAfterSlider.jsx":"9dfd477a4126","components/marketing/FloatingContact.jsx":"6f123ef9184c","components/marketing/ProcessStep.jsx":"d0a9a2181786","components/marketing/ProjectCard.jsx":"75fa444dd8c5","components/marketing/ServiceCard.jsx":"21ac29e6f4af","components/marketing/StatCounter.jsx":"ba43789789d3","components/marketing/Testimonial.jsx":"b961a2cf3d25","ui_kits/website/Header.jsx":"f1bad9128251","ui_kits/website/Hero.jsx":"d6071406ef4b","ui_kits/website/Sections.jsx":"e2cbc2789bdc","ui_kits/website/Sections2.jsx":"1b188c4ed787","ui_kits/website/Sections3.jsx":"e908425b171e","ui_kits/website/data.js":"bf66a5cfcff2","ui_kits/website/site-deploy/data.js":"bf66a5cfcff2","ui_kits/website/site-deploy/header.jsx":"f1bad9128251","ui_kits/website/site-deploy/hero.jsx":"d6071406ef4b","ui_kits/website/site-deploy/sections.jsx":"e2cbc2789bdc","ui_kits/website/site-deploy/sections2.jsx":"1b188c4ed787","ui_kits/website/site-deploy/sections3.jsx":"e908425b171e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TADecorDesignSystem_573d7b = window.TADecorDesignSystem_573d7b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/** Small status/label pill. */
function Badge({
  children,
  tone = 'cyan',
  icon,
  style = {}
}) {
  const tones = {
    cyan: {
      background: 'var(--cyan-50)',
      color: 'var(--cyan-600)'
    },
    slate: {
      background: 'var(--mist-100)',
      color: 'var(--slate-700)'
    },
    amber: {
      background: 'var(--amber-100)',
      color: 'var(--amber-600)'
    },
    success: {
      background: '#e4f4ec',
      color: 'var(--success)'
    },
    solid: {
      background: 'var(--brand)',
      color: '#fff'
    },
    onDark: {
      background: 'rgba(255,255,255,0.14)',
      color: '#fff'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...tones,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TA-Decor Button. Uses Lucide icon names via the `icon` / `iconRight` props
 * (host must load the Lucide CDN script and call lucide.createIcons() after mount).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  href,
  block = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 18px',
      font: 'var(--fs-sm)',
      gap: 8
    },
    md: {
      height: 'var(--control-h)',
      padding: '0 26px',
      font: 'var(--fs-body)',
      gap: 10
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 34px',
      font: '1.0625rem',
      gap: 12
    }
  }[size];
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: '#fff',
      border: '1px solid var(--brand)',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--grad-amber)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-amber)'
    },
    cyan: {
      background: 'var(--grad-cyan)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-cyan)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    onDark: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      border: '1px solid var(--border-on-dark)',
      boxShadow: 'none'
    }
  }[variant];
  const s = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    height: sizes.height,
    padding: sizes.padding,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: sizes.font,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...variants,
    ...style
  };
  const ico = name => name ? /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: '1.1em',
      height: '1.1em'
    }
  }) : null;
  const El = href ? 'a' : 'button';
  const extra = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    className: "tad-btn",
    style: s,
    onClick: onClick,
    onMouseEnter: e => !disabled && (e.currentTarget.style.transform = 'translateY(-2px)'),
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, extra, rest), ico(icon), children, ico(iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Generic content surface. */
function Card({
  children,
  padding = 24,
  hover = false,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular icon-only button (Lucide `icon` name). */
function IconButton({
  icon,
  variant = 'solid',
  size = 44,
  label,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: '#fff',
      border: '1px solid var(--brand)'
    },
    cyan: {
      background: 'var(--grad-cyan)',
      color: '#fff',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--grad-amber)',
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: '#fff',
      color: 'var(--brand)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  }[variant];
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: variant === 'outline' || variant === 'ghost' ? 'none' : 'var(--shadow-sm)',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    ...variants,
    ...style
  };
  const El = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(El, _extends({
    className: "tad-iconbtn",
    "aria-label": label,
    title: label,
    style: s,
    href: href,
    onClick: onClick,
    onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.08)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: size * 0.42,
      height: size * 0.42
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
/** Section heading block: eyebrow + title + optional lead. */
function SectionTitle({
  eyebrow,
  title,
  lead,
  align = 'left',
  invert = false,
  style = {}
}) {
  const c = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: c ? 720 : 640,
      margin: c ? '0 auto' : 0,
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      color: invert ? 'var(--cyan-400)' : 'var(--cyan-600)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 2,
      background: 'var(--amber-500)',
      display: c ? 'none' : 'inline-block'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--tracking-tight)',
      margin: 0,
      color: invert ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.55,
      color: invert ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Interactive filter chip / tag. Set `active` for the selected state. */
function Tag({
  children,
  active = false,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      transition: 'all var(--dur) var(--ease-out)',
      background: active ? 'var(--brand)' : 'transparent',
      color: active ? '#fff' : 'var(--text-body)',
      border: `1.5px solid ${active ? 'var(--brand)' : 'var(--border)'}`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with inline label (supports React node label for policy links). */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style = {}
}) {
  const inputId = id || 'cb-' + Math.random().toString(36).slice(2, 7);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: inputId,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    style: {
      width: 18,
      height: 18,
      marginTop: 2,
      accentColor: 'var(--cyan-500)',
      cursor: 'pointer',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text input with optional Lucide icon and error state. */
function Input({
  label,
  icon,
  error,
  hint,
  id,
  required,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      position: 'absolute',
      left: 16,
      width: 18,
      height: 18,
      color: 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    required: required,
    style: {
      width: '100%',
      height: 'var(--control-h)',
      boxSizing: 'border-box',
      padding: icon ? '0 16px 0 44px' : '0 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
      outline: 'none',
      transition: 'border-color var(--dur), box-shadow var(--dur)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--cyan-400)';
      e.target.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }, rest))), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--danger)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "alert-circle",
    style: {
      width: 13,
      height: 13
    }
  }), error), !error && hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled native select with chevron. `options` = [{value,label}] or string[]. */
function Select({
  label,
  options = [],
  error,
  id,
  required,
  placeholder,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    required: required,
    defaultValue: "",
    style: {
      width: '100%',
      height: 'var(--control-h)',
      boxSizing: 'border-box',
      padding: '0 42px 0 16px',
      appearance: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
      outline: 'none',
      transition: 'border-color var(--dur), box-shadow var(--dur)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--cyan-400)';
      e.target.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 18,
      height: 18,
      color: 'var(--text-faint)',
      pointerEvents: 'none'
    }
  })), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled multiline textarea with error state. */
function Textarea({
  label,
  error,
  rows = 4,
  id,
  required,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    required: required,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '13px 16px',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.55,
      color: 'var(--text-strong)',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
      outline: 'none',
      transition: 'border-color var(--dur), box-shadow var(--dur)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--cyan-400)';
      e.target.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border)';
      e.target.style.boxShadow = 'none';
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BeforeAfterSlider.jsx
try { (() => {
/** Draggable before/after image comparison slider. */
function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Trước',
  afterLabel = 'Sau',
  ratio = '16 / 10'
}) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);
  const move = clientX => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, (clientX - r.left) / r.width * 100)));
  };
  React.useEffect(() => {
    const up = () => dragging.current = false;
    const mm = e => dragging.current && move(e.clientX);
    const tm = e => dragging.current && move(e.touches[0].clientX);
    window.addEventListener('mouseup', up);
    window.addEventListener('mousemove', mm);
    window.addEventListener('touchend', up);
    window.addEventListener('touchmove', tm);
    return () => {
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('touchend', up);
      window.removeEventListener('touchmove', tm);
    };
  }, []);
  const panel = (bg, i) => ({
    position: 'absolute',
    inset: 0,
    background: bg ? `center/cover no-repeat url(${bg})` : i ? 'var(--grad-cyan)' : 'var(--grad-brand)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.4)'
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      userSelect: 'none',
      boxShadow: 'var(--shadow-md)',
      cursor: 'ew-resize'
    },
    onMouseDown: e => {
      dragging.current = true;
      move(e.clientX);
    },
    onTouchStart: e => {
      dragging.current = true;
      move(e.touches[0].clientX);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: panel(after, 1)
  }, !after && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 40,
      height: 40
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 14,
      zIndex: 3,
      background: 'rgba(255,255,255,0.16)',
      backdropFilter: 'blur(6px)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, afterLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: panel(before, 0)
  }, !before && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 40,
      height: 40
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      background: 'rgba(15,30,37,0.55)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, beforeLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 3,
      background: '#fff',
      transform: 'translateX(-50%)',
      zIndex: 4,
      boxShadow: '0 0 0 1px rgba(15,30,37,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--slate-700)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "move-horizontal",
    style: {
      width: 20,
      height: 20
    }
  }))));
}
Object.assign(__ds_scope, { BeforeAfterSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BeforeAfterSlider.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FloatingContact.jsx
try { (() => {
/**
 * Fixed contact cluster (bottom-right on desktop). Hotline (pulsing), Zalo,
 * Messenger + scroll-to-top. On narrow screens renders a bottom action bar.
 */
function FloatingContact({
  hotline = '0846316316',
  zaloUrl = 'https://zalo.me/0846316316',
  messengerUrl = '#',
  showScrollTop = true,
  mobileBar = true
}) {
  const tel = 'tel:' + hotline.replace(/\s/g, '');
  const items = [{
    key: 'phone',
    icon: 'phone',
    label: 'Gọi ngay',
    href: tel,
    bg: 'var(--grad-amber)',
    pulse: true
  }, {
    key: 'zalo',
    icon: 'message-circle',
    label: 'Chat Zalo',
    href: zaloUrl,
    bg: 'var(--grad-cyan)'
  }, {
    key: 'mess',
    icon: 'messages-square',
    label: 'Nhắn Facebook',
    href: messengerUrl,
    bg: 'linear-gradient(120deg,#0a7cff,#0063e0)'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `@keyframes tad-pulse{0%{box-shadow:0 0 0 0 rgba(224,138,43,.55)}70%{box-shadow:0 0 0 16px rgba(224,138,43,0)}100%{box-shadow:0 0 0 0 rgba(224,138,43,0)}}
      @media (prefers-reduced-motion: reduce){.tad-pulse{animation:none!important}}
      .tad-fc-item .tad-fc-tip{opacity:0;transform:translateX(8px);pointer-events:none}
      .tad-fc-item:hover .tad-fc-tip{opacity:1;transform:translateX(0)}`), /*#__PURE__*/React.createElement("div", {
    className: "tad-fc-desktop",
    style: {
      position: 'fixed',
      right: 20,
      bottom: 24,
      zIndex: 90,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-end'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    className: "tad-fc-item",
    href: it.href,
    "aria-label": it.label,
    target: it.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tad-fc-tip",
    style: {
      background: 'var(--ink-800)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      padding: '8px 13px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: it.pulse ? 'tad-pulse' : '',
    style: {
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: it.bg,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      animation: it.pulse ? 'tad-pulse 2s infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 24,
      height: 24
    }
  })))), showScrollTop && /*#__PURE__*/React.createElement("button", {
    "aria-label": "L\xEAn \u0111\u1EA7u trang",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--border)',
      background: '#fff',
      color: 'var(--slate-700)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up",
    style: {
      width: 20,
      height: 20
    }
  }))), mobileBar && /*#__PURE__*/React.createElement("div", {
    className: "tad-fc-mobile",
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 90,
      display: 'none',
      gridTemplateColumns: '1fr 1fr 1fr',
      background: '#fff',
      borderTop: '1px solid var(--border)',
      boxShadow: '0 -6px 24px rgba(15,30,37,0.1)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    href: it.href,
    "aria-label": it.label,
    target: it.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      padding: '10px 6px',
      textDecoration: 'none',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: it.key === 'phone' ? 'var(--amber-500)' : it.key === 'zalo' ? 'var(--cyan-600)' : '#0a7cff'
    }
  }), it.label))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:640px){.tad-fc-desktop{display:none!important}.tad-fc-mobile{display:grid!important}}`));
}
Object.assign(__ds_scope, { FloatingContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FloatingContact.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
/** One node in the work-process timeline. */
function ProcessStep({
  step,
  icon,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--white)',
      border: '1.5px solid var(--cyan-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cyan-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      fontWeight: 800,
      color: 'var(--cloud-200)',
      lineHeight: 1
    }
  }, String(step).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProjectCard.jsx
try { (() => {
/** Portfolio project card. Image + hover overlay revealing "Xem dự án". */
function ProjectCard({
  image,
  title,
  category,
  location,
  year,
  href = '#',
  ratio = '4 / 3'
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--dur) var(--ease-out)',
      background: 'var(--slate-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: image ? `center/cover no-repeat url(${image})` : 'var(--grad-brand)',
      transform: h ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, !image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.28)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 44,
      height: 44
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(15,30,37,0) 40%, rgba(15,30,37,0.82) 100%)',
      opacity: h ? 1 : 0.85,
      transition: 'opacity var(--dur)'
    }
  }), category && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'rgba(255,255,255,0.16)',
      backdropFilter: 'blur(6px)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)'
    }
  }, category)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.35rem',
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 6px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)'
    }
  }, location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 14,
      height: 14
    }
  }), location), year && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar",
    style: {
      width: 14,
      height: 14
    }
  }), year)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 14,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: '#fff',
      maxHeight: h ? 30 : 0,
      opacity: h ? 1 : 0,
      overflow: 'hidden',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, "Xem d\u1EF1 \xE1n", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 16,
      height: 16
    }
  })))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/** Service tile: icon medallion, title, short copy, quiet link. */
function ServiceCard({
  icon = 'sofa',
  title,
  description,
  href = '#',
  linkLabel = 'Xem chi tiết'
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: h ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: h ? 'var(--grad-cyan)' : 'var(--cyan-50)',
      color: h ? '#fff' : 'var(--cyan-600)',
      transition: 'all var(--dur) var(--ease-out)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 27,
      height: 27
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 10px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: h ? 'var(--amber-500)' : 'var(--slate-700)',
      transition: 'color var(--dur)'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16,
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur)'
    }
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCounter.jsx
try { (() => {
/** Animated stat counter. Counts up to `value` when scrolled into view. */
function StatCounter({
  value,
  suffix = '',
  label,
  duration = 1600,
  invert = false
}) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver(ents => {
      ents.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = t => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: invert ? '#fff' : 'var(--brand)'
    }
  }, n, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-500)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: invert ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
/** Customer testimonial card with star rating. */
function Testimonial({
  quote,
  name,
  role,
  avatar,
  rating = 5,
  project
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 30,
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    style: {
      width: 18,
      height: 18,
      color: i < rating ? 'var(--amber-500)' : 'var(--cloud-200)',
      fill: i < rating ? 'var(--amber-500)' : 'var(--cloud-200)'
    }
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '1.0625rem',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      flexGrow: 1
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      borderTop: '1px solid var(--border)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--grad-cyan)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : (name || '?').charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, role, project ? ` · ${project}` : ''))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function Header() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button
  } = NS;
  const {
    company,
    nav
  } = window.TAD;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, [open, scrolled]);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 80,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      height: scrolled ? 70 : 88,
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      transition: 'height var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: company.logo,
    alt: "TA-Decor",
    style: {
      width: scrolled ? 42 : 50,
      height: scrolled ? 42 : 50,
      borderRadius: '50%',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all var(--dur)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '0.04em',
      color: scrolled ? 'var(--slate-800)' : '#fff'
    }
  }, "TA-DECOR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 9,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: scrolled ? 'var(--cyan-600)' : 'rgba(255,255,255,0.75)'
    }
  }, "Advertising \xB7 Interior \xB7 Design"))), /*#__PURE__*/React.createElement("nav", {
    className: "tad-nav",
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 500,
      textDecoration: 'none',
      color: scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)',
      transition: 'color var(--dur)'
    },
    onMouseEnter: e => e.currentTarget.style.color = scrolled ? 'var(--slate-800)' : '#fff',
    onMouseLeave: e => e.currentTarget.style.color = scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)'
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "tad-nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "phone-call",
    size: "sm"
  }, "Nh\u1EADn b\xE1o gi\xE1")), /*#__PURE__*/React.createElement("button", {
    className: "tad-burger",
    "aria-label": "M\u1EDF menu",
    onClick: () => setOpen(true),
    style: {
      display: 'none',
      marginLeft: 'auto',
      width: 44,
      height: 44,
      border: 'none',
      background: 'transparent',
      color: scrolled ? 'var(--slate-800)' : '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "menu",
    style: {
      width: 28,
      height: 28
    }
  }))), open && /*#__PURE__*/React.createElement(MobileMenu, {
    onClose: () => setOpen(false)
  }), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){.tad-nav{display:none!important}.tad-burger{display:inline-flex!important;align-items:center;justify-content:center}}`));
}
function MobileMenu({
  onClose
}) {
  const {
    company,
    nav
  } = window.TAD;
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button
  } = NS;
  useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,30,37,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(84vw, 340px)',
      background: '#fff',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: company.logo,
    alt: "TA-Decor",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0110\xF3ng",
    onClick: onClose,
    style: {
      width: 44,
      height: 44,
      border: '1px solid var(--border)',
      borderRadius: '50%',
      background: '#fff',
      cursor: 'pointer',
      color: 'var(--slate-700)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 22,
      height: 22
    }
  }))), nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    onClick: onClose,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      padding: '12px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, n.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "phone-call",
    block: true
  }, "Nh\u1EADn b\xE1o gi\xE1 mi\u1EC5n ph\xED")), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + company.hotlineRaw,
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--slate-800)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 18,
      height: 18
    }
  }), company.hotline)));
}
Object.assign(window, {
  Header,
  MobileMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button,
    StatCounter,
    Badge
  } = NS;
  const {
    stats
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      marginTop: -88,
      paddingTop: 88,
      background: 'var(--grad-brand)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 520,
      height: 520,
      background: 'radial-gradient(circle at center, rgba(70,198,210,0.28), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      bottom: -160,
      left: -120,
      width: 480,
      height: 480,
      background: 'radial-gradient(circle at center, rgba(224,138,43,0.16), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.06,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 24px 88px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "tad-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    icon: "badge-check"
  }, "Thi\u1EBFt k\u1EBF & thi c\xF4ng tr\u1ECDn g\xF3i")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.6rem, 5vw, 4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      margin: '0 0 22px'
    }
  }, "Ki\u1EBFn t\u1EA1o kh\xF4ng gian", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-400)'
    }
  }, "N\xE2ng t\u1EA7m"), " th\u01B0\u01A1ng hi\u1EC7u"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 560,
      margin: '0 0 34px'
    }
  }, "Chuy\xEAn thi\u1EBFt k\u1EBF, thi c\xF4ng n\u1ED9i th\u1EA5t v\xE0 qu\u1EA3ng c\xE1o tr\u1ECDn g\xF3i cho nh\xE0 \u1EDF, v\u0103n ph\xF2ng, showroom, c\u1EEDa h\xE0ng v\xE0 doanh nghi\u1EC7p."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    href: "#du-an"
  }, "Xem d\u1EF1 \xE1n"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    icon: "phone-call",
    href: "#lien-he"
  }, "Nh\u1EADn b\xE1o gi\xE1 mi\u1EC5n ph\xED"))), /*#__PURE__*/React.createElement("div", {
    className: "tad-hero-panel",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
      border: '1px solid rgba(255,255,255,0.16)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 54,
      height: 54
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      marginTop: 12
    }
  }, "\u1EA2nh d\u1EF1 \xE1n / showroom"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 20,
      left: -22,
      background: '#fff',
      color: 'var(--text-strong)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--grad-amber)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "award",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      lineHeight: 1
    }
  }, "\u0110\xFAng thi\u1EBFt k\u1EBF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "\u0110\xFAng ti\u1EBFn \u0111\u1ED9 \xB7 \u0110\xFAng ng\xE2n s\xE1ch"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '32px 24px',
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatCounter, {
    key: s.label,
    value: s.value,
    suffix: s.suffix,
    label: s.label,
    invert: true
  })))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:860px){.tad-hero-grid{grid-template-columns:1fr!important;gap:36px!important}.tad-hero-panel{max-width:420px}}`));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Homepage content sections (part 1)
function Wrap({
  id,
  alt,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: alt ? 'var(--bg-alt)' : 'var(--bg-page)',
      padding: 'var(--section-y) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, children));
}
function IntroSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button,
    SectionTitle
  } = NS;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, []);
  const points = [{
    icon: 'users',
    t: 'Đội ngũ thiết kế & thi công nội bộ'
  }, {
    icon: 'boxes',
    t: 'Triển khai trọn gói từ A–Z'
  }, {
    icon: 'gem',
    t: 'Cam kết chất lượng & tiến độ'
  }];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "gioi-thieu"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "tad-two"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '5 / 4',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--grad-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.4)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 48,
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 10,
      fontFamily: 'var(--font-body)'
    }
  }, "\u1EA2nh \u0111\u1ED9i ng\u0169 / c\xF4ng tr\xECnh"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -18,
      bottom: -18,
      background: 'var(--grad-amber)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 22px',
      boxShadow: 'var(--shadow-lg)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1
    }
  }, "12+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      marginTop: 4
    }
  }, "n\u0103m kinh nghi\u1EC7m"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "V\u1EC1 TA-Decor",
    title: "\u0110\u1ED3ng h\xE0nh c\xF9ng doanh nghi\u1EC7p x\xE2y d\u1EF1ng kh\xF4ng gian v\xE0 h\xECnh \u1EA3nh th\u01B0\u01A1ng hi\u1EC7u",
    lead: "T\u1EEB \xFD t\u01B0\u1EDFng \u0111\u1EBFn kh\xF4ng gian ho\xE0n thi\u1EC7n, ch\xFAng t\xF4i ki\u1EBFn t\u1EA1o nh\u1EEFng c\xF4ng tr\xECnh mang d\u1EA5u \u1EA5n ri\xEAng \u2014 b\u1EC1n \u0111\u1EB9p, \u0111\xFAng c\xF4ng n\u0103ng v\xE0 gi\xE0u c\u1EA3m x\xFAc."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      margin: '28px 0 32px'
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cyan-50)',
      color: 'var(--cyan-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 21,
      height: 21
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, p.t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    href: "#"
  }, "Xem th\xEAm v\u1EC1 ch\xFAng t\xF4i"))));
}
function ServiceSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    ServiceCard
  } = NS;
  const {
    services
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "dich-vu",
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "D\u1ECBch v\u1EE5",
    title: "Gi\u1EA3i ph\xE1p thi\u1EBFt k\u1EBF v\xE0 thi c\xF4ng tr\u1ECDn g\xF3i",
    lead: "M\u1ED9t \u0111\u1EA7u m\u1ED1i cho to\xE0n b\u1ED9 nhu c\u1EA7u n\u1ED9i th\u1EA5t v\xE0 qu\u1EA3ng c\xE1o c\u1EE7a b\u1EA1n."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    },
    className: "tad-grid-4"
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s)))));
}
function FeaturedProjects() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    Tag,
    ProjectCard,
    Button
  } = NS;
  const {
    filters,
    projects
  } = window.TAD;
  const [active, setActive] = React.useState('Tất cả');
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const shown = active === 'Tất cả' ? projects : projects.filter(p => p.cat === active);
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "du-an"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "D\u1EF1 \xE1n ti\xEAu bi\u1EC3u",
    title: "M\u1ED7i c\xF4ng tr\xECnh l\xE0 m\u1ED9t d\u1EA5u \u1EA5n ri\xEAng"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    href: "#"
  }, "Xem t\u1EA5t c\u1EA3 d\u1EF1 \xE1n")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    active: f === active,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      textAlign: 'center',
      color: 'var(--text-muted)',
      padding: '40px 0',
      fontFamily: 'var(--font-body)'
    }
  }, "Ch\u01B0a c\xF3 d\u1EF1 \xE1n trong h\u1EA1ng m\u1EE5c n\xE0y.")));
}
function WhyChooseUs() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle
  } = NS;
  const {
    why
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "V\xEC sao ch\u1ECDn ch\xFAng t\xF4i",
    title: "S\u1EF1 an t\xE2m trong t\u1EEBng c\xF4ng \u0111o\u1EA1n"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, why.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.title,
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--grad-cyan)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": w.icon,
    style: {
      width: 23,
      height: 23
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)',
      margin: '2px 0 7px'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, w.description))))));
}
function WorkProcess() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    ProcessStep
  } = NS;
  const {
    process
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "Quy tr\xECnh l\xE0m vi\u1EC7c",
    title: "7 b\u01B0\u1EDBc r\xF5 r\xE0ng, minh b\u1EA1ch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32
    },
    className: "tad-grid-4"
  }, process.map((p, i) => /*#__PURE__*/React.createElement(ProcessStep, _extends({
    key: p.title,
    step: i + 1
  }, p)))));
}
Object.assign(window, {
  Wrap,
  IntroSection,
  ServiceSection,
  FeaturedProjects,
  WhyChooseUs,
  WorkProcess
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Homepage content sections (part 2)
function BeforeAfterSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    BeforeAfterSlider,
    Badge
  } = NS;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 48,
      alignItems: 'center'
    },
    className: "tad-two"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Tr\u01B0\u1EDBc & sau",
    title: "S\u1EF1 kh\xE1c bi\u1EC7t sau khi thi c\xF4ng",
    lead: "K\xE9o thanh tr\u01B0\u1EE3t \u0111\u1EC3 so s\xE1nh hi\u1EC7n tr\u1EA1ng ban \u0111\u1EA7u v\xE0 kh\xF4ng gian sau khi TA-Decor ho\xE0n thi\u1EC7n."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "slate",
    icon: "ruler"
  }, "T\u1ED1i \u01B0u c\xF4ng n\u0103ng"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan",
    icon: "palette"
  }, "\u0110\u1ED3ng b\u1ED9 th\u1EA9m m\u1EF9"))), /*#__PURE__*/React.createElement(BeforeAfterSlider, {
    beforeLabel: "Hi\u1EC7n tr\u1EA1ng",
    afterLabel: "Ho\xE0n thi\u1EC7n"
  })));
}
function PartnerLogos() {
  const names = ['MINH PHÁT', 'AN PHÁT', 'LUXE', 'BAKERY MỘC', 'NHÀ GỖ', 'GRAND PARK', 'VIỆT LONG', 'HOÀNG GIA'];
  const row = [...names, ...names];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto 22px',
      padding: '0 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, "Kh\xE1ch h\xE0ng & \u0111\u1ED1i t\xE1c \u0111\xE3 tin t\u01B0\u1EDFng"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tad-marquee",
    style: {
      display: 'flex',
      gap: 56,
      whiteSpace: 'nowrap',
      width: 'max-content'
    }
  }, row.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '0.06em',
      color: 'var(--slate-300)'
    }
  }, n)))), /*#__PURE__*/React.createElement("style", null, `@keyframes tad-marq{from{transform:translateX(0)}to{transform:translateX(-50%)}}.tad-marquee{animation:tad-marq 28s linear infinite}@media (prefers-reduced-motion: reduce){.tad-marquee{animation:none}}`));
}
function Testimonials() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    Testimonial
  } = NS;
  const {
    testimonials
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "Kh\xE1ch h\xE0ng n\xF3i g\xEC",
    title: "Ni\u1EC1m tin \u0111\u01B0\u1EE3c x\xE2y t\u1EEB k\u1EBFt qu\u1EA3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, testimonials.map(t => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: t.name
  }, t)))));
}
function NewsSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    Badge,
    Button
  } = NS;
  const {
    news
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "tin-tuc",
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Tin t\u1EE9c & c\u1EA9m nang",
    title: "Ki\u1EBFn th\u1EE9c cho kh\xF4ng gian c\u1EE7a b\u1EA1n"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    href: "#"
  }, "Xem t\u1EA5t c\u1EA3 b\xE0i vi\u1EBFt")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, news.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.title,
    href: "#",
    style: {
      textDecoration: 'none',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur), transform var(--dur)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: 'var(--grad-cyan)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "newspaper",
    style: {
      width: 36,
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan"
  }, a.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.35,
      color: 'var(--text-strong)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar",
    style: {
      width: 13,
      height: 13
    }
  }), a.date), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 13,
      height: 13
    }
  }), a.read)))))));
}
Object.assign(window, {
  BeforeAfterSection,
  PartnerLogos,
  Testimonials,
  NewsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections3.jsx
try { (() => {
// Consultation form (CTA) + Footer
function ConsultationForm() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Input,
    Select,
    Textarea,
    Checkbox,
    Button
  } = NS;
  const {
    company,
    services,
    budgets
  } = window.TAD;
  const [errors, setErrors] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [agree, setAgree] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const [sending, setSending] = React.useState(false);
  const submit = e => {
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
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    }).then(() => {
      f.reset();
      setAgree(false);
      setToast({
        ok: true,
        msg: 'Đã gửi yêu cầu! TA-Decor sẽ liên hệ với bạn trong thời gian sớm nhất.'
      });
    }).catch(() => {
      setToast({
        ok: false,
        msg: 'Gửi chưa thành công. Vui lòng gọi Hotline hoặc thử lại.'
      });
    }).finally(() => {
      setSending(false);
      setTimeout(() => setToast(null), 4600);
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "lien-he",
    style: {
      position: 'relative',
      background: 'var(--grad-brand)',
      color: '#fff',
      padding: 'var(--section-y) 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -100,
      left: -60,
      width: 420,
      height: 420,
      background: 'radial-gradient(circle,rgba(70,198,210,0.22),transparent 62%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "tad-two"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--cyan-400)',
      marginBottom: 14
    }
  }, "Nh\u1EADn t\u01B0 v\u1EA5n"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2rem,3.4vw,2.75rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: '0 0 18px'
    }
  }, "B\u1EA1n \u0111ang c\u1EA7n thi\u1EBFt k\u1EBF ho\u1EB7c thi c\xF4ng?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      margin: '0 0 32px',
      maxWidth: 460
    }
  }, "H\xE3y \u0111\u1EC3 l\u1EA1i th\xF4ng tin, \u0111\u1ED9i ng\u0169 c\u1EE7a ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 t\u01B0 v\u1EA5n v\xE0 b\xE1o gi\xE1 ho\xE0n to\xE0n mi\u1EC5n ph\xED."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [{
    i: 'phone',
    l: company.hotline,
    s: 'Hotline / Zalo',
    href: 'tel:' + company.hotlineRaw
  }, {
    i: 'mail',
    l: company.email,
    s: 'Email',
    href: 'mailto:' + company.email
  }, {
    i: 'map-pin',
    l: company.address,
    s: 'Địa chỉ',
    href: company.googleMapUrl
  }].map(r => /*#__PURE__*/React.createElement("a", {
    key: r.s,
    href: r.href,
    target: r.href && r.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid var(--border-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": r.i,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.3
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, r.s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    name: "tu-van",
    method: "POST",
    "data-netlify": "true",
    "netlify-honeypot": "company_website",
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "tu-van"
  }), /*#__PURE__*/React.createElement(Input, {
    name: "name",
    label: "H\u1ECD v\xE0 t\xEAn",
    icon: "user",
    placeholder: "Nguy\u1EC5n V\u0103n A",
    required: true,
    error: errors.name
  }), /*#__PURE__*/React.createElement(Input, {
    name: "phone",
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    icon: "phone",
    placeholder: "09xx xxx xxx",
    required: true,
    error: errors.phone
  }), /*#__PURE__*/React.createElement(Input, {
    name: "email",
    label: "Email",
    icon: "mail",
    placeholder: "email@company.vn",
    error: errors.email,
    style: {
      gridColumn: '1 / 3'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    name: "service",
    label: "D\u1ECBch v\u1EE5 quan t\xE2m",
    placeholder: "Ch\u1ECDn d\u1ECBch v\u1EE5",
    options: services.map(s => s.title)
  }), /*#__PURE__*/React.createElement(Select, {
    name: "budget",
    label: "Ng\xE2n s\xE1ch d\u1EF1 ki\u1EBFn",
    placeholder: "Ch\u1ECDn m\u1EE9c ng\xE2n s\xE1ch",
    options: budgets
  }), /*#__PURE__*/React.createElement(Textarea, {
    name: "msg",
    label: "N\u1ED9i dung y\xEAu c\u1EA7u",
    rows: 3,
    placeholder: "M\xF4 t\u1EA3 kh\xF4ng gian, di\u1EC7n t\xEDch v\xE0 mong mu\u1ED1n c\u1EE7a b\u1EA1n\u2026",
    style: {
      gridColumn: '1 / 3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 3'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "T\xF4i \u0111\u1ED3ng \xFD v\u1EDBi ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"), " c\u1EE7a TA-Decor.")
  }), errors.agree && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--danger)',
      fontSize: 12,
      marginTop: 6,
      fontFamily: 'var(--font-body)'
    }
  }, "Vui l\xF2ng \u0111\u1ED3ng \xFD v\u1EDBi ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt.")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "company_website",
    tabIndex: -1,
    autoComplete: "off",
    style: {
      position: 'absolute',
      left: '-9999px'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 3'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    icon: "send",
    block: true,
    size: "lg",
    disabled: sending
  }, sending ? 'Đang gửi…' : 'Gửi yêu cầu tư vấn'))))), toast && /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200,
      background: '#fff',
      color: 'var(--text-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      maxWidth: 'min(92vw, 460px)',
      borderLeft: `4px solid ${toast.ok ? 'var(--success)' : 'var(--danger)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: toast.ok ? 'var(--success)' : 'var(--danger)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": toast.ok ? 'check-circle-2' : 'alert-circle',
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5
    }
  }, toast.msg)));
}
function Footer() {
  const {
    company,
    nav,
    services
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const social = [{
    i: 'thumbs-up',
    href: company.facebookUrl,
    l: 'Facebook'
  }, {
    i: 'message-circle',
    href: company.zaloUrl,
    l: 'Zalo'
  }, {
    i: 'play',
    href: '#',
    l: 'YouTube'
  }, {
    i: 'music',
    href: company.tiktokUrl,
    l: 'TikTok'
  }];
  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-on-dark-muted)',
    textDecoration: 'none',
    lineHeight: 2.1
  };
  const head = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-inverse-deep)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '68px 24px 0',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    },
    className: "tad-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: company.logo,
    alt: "TA-Decor",
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '0.04em',
      color: '#fff'
    }
  }, "TA-DECOR")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)',
      margin: '0 0 18px',
      maxWidth: 320
    }
  }, "Thi\u1EBFt k\u1EBF & thi c\xF4ng n\u1ED9i th\u1EA5t, qu\u1EA3ng c\xE1o tr\u1ECDn g\xF3i. Ki\u1EBFn t\u1EA1o kh\xF4ng gian \u2013 N\xE2ng t\u1EA7m th\u01B0\u01A1ng hi\u1EC7u."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 15,
      height: 15
    }
  }), company.address), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + company.hotlineRaw,
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 15,
      height: 15
    }
  }), company.hotline), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + company.email,
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 15,
      height: 15
    }
  }), company.email))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Li\xEAn k\u1EBFt"), nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: {
      ...linkStyle,
      display: 'block'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "D\u1ECBch v\u1EE5"), services.slice(0, 6).map(s => /*#__PURE__*/React.createElement("a", {
    key: s.title,
    href: "#dich-vu",
    style: {
      ...linkStyle,
      display: 'block'
    }
  }, s.title))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "K\u1EBFt n\u1ED1i"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 18
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.l,
    href: s.href,
    "aria-label": s.l,
    target: "_blank",
    rel: "noopener",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.i,
    style: {
      width: 18,
      height: 18
    }
  })))), /*#__PURE__*/React.createElement("a", {
    href: company.googleMapUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map",
    style: {
      width: 15,
      height: 15
    }
  }), "Xem tr\xEAn Google Maps"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '22px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 TA-Decor. B\u1EA3o l\u01B0u m\u1ECDi quy\u1EC1n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))));
}
Object.assign(window, {
  ConsultationForm,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// TA-Decor sample content (Vietnamese). Loaded as a plain script -> window.TAD
window.TAD = {
  company: {
    name: 'Công Ty TNHH TM Quảng Cáo & Nội Thất TA-Decor',
    shortName: 'TA-Decor',
    logo: 'https://res.cloudinary.com/os8ymahz/image/upload/f_auto,q_auto/ta-decor_etwqq4',
    tagline: 'Advertising · Interior · Design',
    hotline: '0846 316 316 - 0944 478 448',
    hotlineRaw: '0846316316',
    zaloUrl: 'https://zalo.me/0846316316',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100068595892359',
    messengerUrl: 'https://m.me/100068595892359',
    tiktokUrl: 'https://www.tiktok.com/@tadecorbmt',
    email: 'tadecor@gmail.com',
    address: 'Số 11 Đường A12 - Thôn 1 - Xã Cư Êbur, Buôn Ma Thuột, Việt Nam, 63112',
    googleMapUrl: 'https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+TM+Qu%E1%BA%A3ng+C%C3%A1o+V%C3%A0+N%E1%BB%99i+Th%E1%BA%A5t+Ta-Decor/@12.6952595,108.0349735,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d26e84fe62b:0x433ad21ad481f5d8!8m2!3d12.6952595!4d108.0349735!16s%2Fg%2F11jpsp6yzn?entry=ttu',
    hours: 'Thứ 2 – Thứ 7, 8:00 – 17:30'
  },
  nav: [{
    label: 'Trang chủ',
    href: '#'
  }, {
    label: 'Giới thiệu',
    href: '#gioi-thieu'
  }, {
    label: 'Dịch vụ',
    href: '#dich-vu'
  }, {
    label: 'Dự án',
    href: '#du-an'
  }, {
    label: 'Tin tức',
    href: '#tin-tuc'
  }, {
    label: 'Liên hệ',
    href: '#lien-he'
  }],
  stats: [{
    value: 12,
    suffix: '+',
    label: 'Năm kinh nghiệm'
  }, {
    value: 520,
    suffix: '+',
    label: 'Dự án hoàn thành'
  }, {
    value: 380,
    suffix: '+',
    label: 'Khách hàng tin tưởng'
  }],
  services: [{
    icon: 'pencil-ruler',
    title: 'Thiết kế nội thất',
    description: 'Concept 2D/3D theo phong cách và công năng riêng cho từng không gian sống.'
  }, {
    icon: 'hammer',
    title: 'Thi công trọn gói',
    description: 'Đội thi công lành nghề, vật tư minh bạch, đúng thiết kế và tiến độ cam kết.'
  }, {
    icon: 'building-2',
    title: 'Thiết kế văn phòng',
    description: 'Không gian làm việc hiệu quả, thể hiện văn hóa và hình ảnh doanh nghiệp.'
  }, {
    icon: 'store',
    title: 'Showroom & cửa hàng',
    description: 'Bố trí trưng bày tối ưu trải nghiệm, tăng nhận diện và chuyển đổi bán hàng.'
  }, {
    icon: 'megaphone',
    title: 'Bảng hiệu quảng cáo',
    description: 'Thiết kế, sản xuất và lắp đặt bảng hiệu, mặt dựng alu, hộp đèn, chữ nổi.'
  }, {
    icon: 'palette',
    title: 'Nhận diện thương hiệu',
    description: 'Bộ nhận diện đồng bộ từ logo, ấn phẩm đến không gian và biển hiệu.'
  }, {
    icon: 'printer',
    title: 'In ấn quảng cáo',
    description: 'In ấn chất lượng cao: standee, banner, backdrop, catalogue, tem nhãn.'
  }, {
    icon: 'sparkles',
    title: 'Trang trí sự kiện',
    description: 'Dàn dựng không gian trưng bày, gian hàng và sự kiện chuyên nghiệp.'
  }],
  filters: ['Tất cả', 'Nội thất nhà ở', 'Nội thất văn phòng', 'Showroom', 'Cửa hàng', 'Bảng hiệu quảng cáo', 'Nhận diện thương hiệu'],
  projects: [{
    title: 'Showroom Ô tô Minh Phát',
    category: 'Showroom',
    cat: 'Showroom',
    location: 'Quận 7, TP.HCM',
    year: 2024
  }, {
    title: 'Căn hộ Vinhomes Grand Park',
    category: 'Nội thất nhà ở',
    cat: 'Nội thất nhà ở',
    location: 'TP. Thủ Đức',
    year: 2024
  }, {
    title: 'Văn phòng Công ty An Phát',
    category: 'Nội thất văn phòng',
    cat: 'Nội thất văn phòng',
    location: 'Quận 1, TP.HCM',
    year: 2023
  }, {
    title: 'Bảng hiệu Cà phê Nhà Gỗ',
    category: 'Bảng hiệu quảng cáo',
    cat: 'Bảng hiệu quảng cáo',
    location: 'Gò Vấp, TP.HCM',
    year: 2024
  }, {
    title: 'Cửa hàng Thời trang LUXE',
    category: 'Cửa hàng',
    cat: 'Cửa hàng',
    location: 'Bình Thạnh, TP.HCM',
    year: 2023
  }, {
    title: 'Nhận diện Bakery Mộc',
    category: 'Nhận diện thương hiệu',
    cat: 'Nhận diện thương hiệu',
    location: 'TP.HCM',
    year: 2023
  }],
  why: [{
    icon: 'map-pinned',
    title: 'Khảo sát tận nơi',
    description: 'Đo đạc và tư vấn trực tiếp tại công trình, hoàn toàn miễn phí.'
  }, {
    icon: 'lightbulb',
    title: 'Thiết kế sáng tạo',
    description: 'Ý tưởng độc bản, bám sát nhu cầu và công năng thực tế của bạn.'
  }, {
    icon: 'list-checks',
    title: 'Quy trình rõ ràng',
    description: 'Từng bước minh bạch, cập nhật tiến độ thường xuyên cho khách hàng.'
  }, {
    icon: 'receipt-text',
    title: 'Báo giá minh bạch',
    description: 'Bóc tách chi tiết hạng mục, không phát sinh ngoài hợp đồng.'
  }, {
    icon: 'calendar-check',
    title: 'Đúng tiến độ',
    description: 'Cam kết bàn giao đúng hẹn với biên bản nghiệm thu rõ ràng.'
  }, {
    icon: 'shield-check',
    title: 'Bảo hành dài hạn',
    description: 'Hỗ trợ và bảo hành chu đáo sau khi bàn giao công trình.'
  }],
  process: [{
    icon: 'clipboard-list',
    title: 'Tiếp nhận yêu cầu',
    description: 'Lắng nghe nhu cầu, phong cách và ngân sách của bạn.'
  }, {
    icon: 'ruler',
    title: 'Khảo sát & tư vấn',
    description: 'Đo đạc thực tế và tư vấn giải pháp phù hợp nhất.'
  }, {
    icon: 'pen-tool',
    title: 'Thiết kế ý tưởng',
    description: 'Dựng concept 2D/3D để bạn hình dung không gian.'
  }, {
    icon: 'file-signature',
    title: 'Báo giá & hợp đồng',
    description: 'Bóc tách chi phí minh bạch, ký kết rõ ràng.'
  }, {
    icon: 'hammer',
    title: 'Sản xuất & thi công',
    description: 'Triển khai đúng thiết kế, giám sát chặt chẽ.'
  }, {
    icon: 'clipboard-check',
    title: 'Nghiệm thu & bàn giao',
    description: 'Kiểm tra chất lượng và bàn giao đúng tiến độ.'
  }, {
    icon: 'headphones',
    title: 'Bảo hành & hỗ trợ',
    description: 'Đồng hành và bảo hành lâu dài sau bàn giao.'
  }],
  testimonials: [{
    rating: 5,
    quote: 'Đội ngũ tư vấn tận tâm, thi công đúng tiến độ và ngân sách. Căn hộ hoàn thiện vượt cả mong đợi của gia đình tôi.',
    name: 'Chị Ngọc Anh',
    role: 'Chủ căn hộ',
    project: 'Vinhomes Grand Park'
  }, {
    rating: 5,
    quote: 'Showroom mới giúp cửa hàng tôi trông chuyên nghiệp hẳn lên. Khách vào đông hơn rõ rệt sau khi cải tạo.',
    name: 'Anh Hoàng Nam',
    role: 'Chủ showroom',
    project: 'Ô tô Minh Phát'
  }, {
    rating: 5,
    quote: 'Từ bảng hiệu đến bộ nhận diện đều đồng bộ và đẹp. Làm việc nhanh, báo giá rõ ràng, rất đáng tin cậy.',
    name: 'Chị Thu Hà',
    role: 'Giám đốc',
    project: 'Bakery Mộc'
  }],
  news: [{
    tag: 'Cẩm nang',
    title: '7 nguyên tắc bố trí nội thất giúp không gian rộng thoáng hơn',
    date: '12/06/2024',
    read: '5 phút đọc'
  }, {
    tag: 'Kinh nghiệm',
    title: 'Chọn bảng hiệu quảng cáo: chất liệu nào bền và đẹp nhất?',
    date: '28/05/2024',
    read: '6 phút đọc'
  }, {
    tag: 'Báo giá',
    title: 'Chi phí thi công nội thất trọn gói 2024 gồm những gì?',
    date: '15/05/2024',
    read: '8 phút đọc'
  }],
  budgets: ['Dưới 100 triệu', '100 – 300 triệu', '300 – 500 triệu', '500 triệu – 1 tỷ', 'Trên 1 tỷ']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/site-deploy/data.js
try { (() => {
// TA-Decor sample content (Vietnamese). Loaded as a plain script -> window.TAD
window.TAD = {
  company: {
    name: 'Công Ty TNHH TM Quảng Cáo & Nội Thất TA-Decor',
    shortName: 'TA-Decor',
    logo: 'https://res.cloudinary.com/os8ymahz/image/upload/f_auto,q_auto/ta-decor_etwqq4',
    tagline: 'Advertising · Interior · Design',
    hotline: '0846 316 316 - 0944 478 448',
    hotlineRaw: '0846316316',
    zaloUrl: 'https://zalo.me/0846316316',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100068595892359',
    messengerUrl: 'https://m.me/100068595892359',
    tiktokUrl: 'https://www.tiktok.com/@tadecorbmt',
    email: 'tadecor@gmail.com',
    address: 'Số 11 Đường A12 - Thôn 1 - Xã Cư Êbur, Buôn Ma Thuột, Việt Nam, 63112',
    googleMapUrl: 'https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+TM+Qu%E1%BA%A3ng+C%C3%A1o+V%C3%A0+N%E1%BB%99i+Th%E1%BA%A5t+Ta-Decor/@12.6952595,108.0349735,17z/data=!3m1!4b1!4m6!3m5!1s0x31721d26e84fe62b:0x433ad21ad481f5d8!8m2!3d12.6952595!4d108.0349735!16s%2Fg%2F11jpsp6yzn?entry=ttu',
    hours: 'Thứ 2 – Thứ 7, 8:00 – 17:30'
  },
  nav: [{
    label: 'Trang chủ',
    href: '#'
  }, {
    label: 'Giới thiệu',
    href: '#gioi-thieu'
  }, {
    label: 'Dịch vụ',
    href: '#dich-vu'
  }, {
    label: 'Dự án',
    href: '#du-an'
  }, {
    label: 'Tin tức',
    href: '#tin-tuc'
  }, {
    label: 'Liên hệ',
    href: '#lien-he'
  }],
  stats: [{
    value: 12,
    suffix: '+',
    label: 'Năm kinh nghiệm'
  }, {
    value: 520,
    suffix: '+',
    label: 'Dự án hoàn thành'
  }, {
    value: 380,
    suffix: '+',
    label: 'Khách hàng tin tưởng'
  }],
  services: [{
    icon: 'pencil-ruler',
    title: 'Thiết kế nội thất',
    description: 'Concept 2D/3D theo phong cách và công năng riêng cho từng không gian sống.'
  }, {
    icon: 'hammer',
    title: 'Thi công trọn gói',
    description: 'Đội thi công lành nghề, vật tư minh bạch, đúng thiết kế và tiến độ cam kết.'
  }, {
    icon: 'building-2',
    title: 'Thiết kế văn phòng',
    description: 'Không gian làm việc hiệu quả, thể hiện văn hóa và hình ảnh doanh nghiệp.'
  }, {
    icon: 'store',
    title: 'Showroom & cửa hàng',
    description: 'Bố trí trưng bày tối ưu trải nghiệm, tăng nhận diện và chuyển đổi bán hàng.'
  }, {
    icon: 'megaphone',
    title: 'Bảng hiệu quảng cáo',
    description: 'Thiết kế, sản xuất và lắp đặt bảng hiệu, mặt dựng alu, hộp đèn, chữ nổi.'
  }, {
    icon: 'palette',
    title: 'Nhận diện thương hiệu',
    description: 'Bộ nhận diện đồng bộ từ logo, ấn phẩm đến không gian và biển hiệu.'
  }, {
    icon: 'printer',
    title: 'In ấn quảng cáo',
    description: 'In ấn chất lượng cao: standee, banner, backdrop, catalogue, tem nhãn.'
  }, {
    icon: 'sparkles',
    title: 'Trang trí sự kiện',
    description: 'Dàn dựng không gian trưng bày, gian hàng và sự kiện chuyên nghiệp.'
  }],
  filters: ['Tất cả', 'Nội thất nhà ở', 'Nội thất văn phòng', 'Showroom', 'Cửa hàng', 'Bảng hiệu quảng cáo', 'Nhận diện thương hiệu'],
  projects: [{
    title: 'Showroom Ô tô Minh Phát',
    category: 'Showroom',
    cat: 'Showroom',
    location: 'Quận 7, TP.HCM',
    year: 2024
  }, {
    title: 'Căn hộ Vinhomes Grand Park',
    category: 'Nội thất nhà ở',
    cat: 'Nội thất nhà ở',
    location: 'TP. Thủ Đức',
    year: 2024
  }, {
    title: 'Văn phòng Công ty An Phát',
    category: 'Nội thất văn phòng',
    cat: 'Nội thất văn phòng',
    location: 'Quận 1, TP.HCM',
    year: 2023
  }, {
    title: 'Bảng hiệu Cà phê Nhà Gỗ',
    category: 'Bảng hiệu quảng cáo',
    cat: 'Bảng hiệu quảng cáo',
    location: 'Gò Vấp, TP.HCM',
    year: 2024
  }, {
    title: 'Cửa hàng Thời trang LUXE',
    category: 'Cửa hàng',
    cat: 'Cửa hàng',
    location: 'Bình Thạnh, TP.HCM',
    year: 2023
  }, {
    title: 'Nhận diện Bakery Mộc',
    category: 'Nhận diện thương hiệu',
    cat: 'Nhận diện thương hiệu',
    location: 'TP.HCM',
    year: 2023
  }],
  why: [{
    icon: 'map-pinned',
    title: 'Khảo sát tận nơi',
    description: 'Đo đạc và tư vấn trực tiếp tại công trình, hoàn toàn miễn phí.'
  }, {
    icon: 'lightbulb',
    title: 'Thiết kế sáng tạo',
    description: 'Ý tưởng độc bản, bám sát nhu cầu và công năng thực tế của bạn.'
  }, {
    icon: 'list-checks',
    title: 'Quy trình rõ ràng',
    description: 'Từng bước minh bạch, cập nhật tiến độ thường xuyên cho khách hàng.'
  }, {
    icon: 'receipt-text',
    title: 'Báo giá minh bạch',
    description: 'Bóc tách chi tiết hạng mục, không phát sinh ngoài hợp đồng.'
  }, {
    icon: 'calendar-check',
    title: 'Đúng tiến độ',
    description: 'Cam kết bàn giao đúng hẹn với biên bản nghiệm thu rõ ràng.'
  }, {
    icon: 'shield-check',
    title: 'Bảo hành dài hạn',
    description: 'Hỗ trợ và bảo hành chu đáo sau khi bàn giao công trình.'
  }],
  process: [{
    icon: 'clipboard-list',
    title: 'Tiếp nhận yêu cầu',
    description: 'Lắng nghe nhu cầu, phong cách và ngân sách của bạn.'
  }, {
    icon: 'ruler',
    title: 'Khảo sát & tư vấn',
    description: 'Đo đạc thực tế và tư vấn giải pháp phù hợp nhất.'
  }, {
    icon: 'pen-tool',
    title: 'Thiết kế ý tưởng',
    description: 'Dựng concept 2D/3D để bạn hình dung không gian.'
  }, {
    icon: 'file-signature',
    title: 'Báo giá & hợp đồng',
    description: 'Bóc tách chi phí minh bạch, ký kết rõ ràng.'
  }, {
    icon: 'hammer',
    title: 'Sản xuất & thi công',
    description: 'Triển khai đúng thiết kế, giám sát chặt chẽ.'
  }, {
    icon: 'clipboard-check',
    title: 'Nghiệm thu & bàn giao',
    description: 'Kiểm tra chất lượng và bàn giao đúng tiến độ.'
  }, {
    icon: 'headphones',
    title: 'Bảo hành & hỗ trợ',
    description: 'Đồng hành và bảo hành lâu dài sau bàn giao.'
  }],
  testimonials: [{
    rating: 5,
    quote: 'Đội ngũ tư vấn tận tâm, thi công đúng tiến độ và ngân sách. Căn hộ hoàn thiện vượt cả mong đợi của gia đình tôi.',
    name: 'Chị Ngọc Anh',
    role: 'Chủ căn hộ',
    project: 'Vinhomes Grand Park'
  }, {
    rating: 5,
    quote: 'Showroom mới giúp cửa hàng tôi trông chuyên nghiệp hẳn lên. Khách vào đông hơn rõ rệt sau khi cải tạo.',
    name: 'Anh Hoàng Nam',
    role: 'Chủ showroom',
    project: 'Ô tô Minh Phát'
  }, {
    rating: 5,
    quote: 'Từ bảng hiệu đến bộ nhận diện đều đồng bộ và đẹp. Làm việc nhanh, báo giá rõ ràng, rất đáng tin cậy.',
    name: 'Chị Thu Hà',
    role: 'Giám đốc',
    project: 'Bakery Mộc'
  }],
  news: [{
    tag: 'Cẩm nang',
    title: '7 nguyên tắc bố trí nội thất giúp không gian rộng thoáng hơn',
    date: '12/06/2024',
    read: '5 phút đọc'
  }, {
    tag: 'Kinh nghiệm',
    title: 'Chọn bảng hiệu quảng cáo: chất liệu nào bền và đẹp nhất?',
    date: '28/05/2024',
    read: '6 phút đọc'
  }, {
    tag: 'Báo giá',
    title: 'Chi phí thi công nội thất trọn gói 2024 gồm những gì?',
    date: '15/05/2024',
    read: '8 phút đọc'
  }],
  budgets: ['Dưới 100 triệu', '100 – 300 triệu', '300 – 500 triệu', '500 triệu – 1 tỷ', 'Trên 1 tỷ']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-deploy/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/site-deploy/header.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function Header() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button
  } = NS;
  const {
    company,
    nav
  } = window.TAD;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, [open, scrolled]);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 80,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      height: scrolled ? 70 : 88,
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      transition: 'height var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: company.logo,
    alt: "TA-Decor",
    style: {
      width: scrolled ? 42 : 50,
      height: scrolled ? 42 : 50,
      borderRadius: '50%',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all var(--dur)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '0.04em',
      color: scrolled ? 'var(--slate-800)' : '#fff'
    }
  }, "TA-DECOR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 9,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: scrolled ? 'var(--cyan-600)' : 'rgba(255,255,255,0.75)'
    }
  }, "Advertising \xB7 Interior \xB7 Design"))), /*#__PURE__*/React.createElement("nav", {
    className: "tad-nav",
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 500,
      textDecoration: 'none',
      color: scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)',
      transition: 'color var(--dur)'
    },
    onMouseEnter: e => e.currentTarget.style.color = scrolled ? 'var(--slate-800)' : '#fff',
    onMouseLeave: e => e.currentTarget.style.color = scrolled ? 'var(--text-body)' : 'rgba(255,255,255,0.9)'
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "tad-nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "phone-call",
    size: "sm"
  }, "Nh\u1EADn b\xE1o gi\xE1")), /*#__PURE__*/React.createElement("button", {
    className: "tad-burger",
    "aria-label": "M\u1EDF menu",
    onClick: () => setOpen(true),
    style: {
      display: 'none',
      marginLeft: 'auto',
      width: 44,
      height: 44,
      border: 'none',
      background: 'transparent',
      color: scrolled ? 'var(--slate-800)' : '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "menu",
    style: {
      width: 28,
      height: 28
    }
  }))), open && /*#__PURE__*/React.createElement(MobileMenu, {
    onClose: () => setOpen(false)
  }), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){.tad-nav{display:none!important}.tad-burger{display:inline-flex!important;align-items:center;justify-content:center}}`));
}
function MobileMenu({
  onClose
}) {
  const {
    company,
    nav
  } = window.TAD;
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button
  } = NS;
  useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,30,37,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(84vw, 340px)',
      background: '#fff',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: company.logo,
    alt: "TA-Decor",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0110\xF3ng",
    onClick: onClose,
    style: {
      width: 44,
      height: 44,
      border: '1px solid var(--border)',
      borderRadius: '50%',
      background: '#fff',
      cursor: 'pointer',
      color: 'var(--slate-700)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 22,
      height: 22
    }
  }))), nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    onClick: onClose,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      padding: '12px 0',
      borderBottom: '1px solid var(--border)'
    }
  }, n.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "phone-call",
    block: true
  }, "Nh\u1EADn b\xE1o gi\xE1 mi\u1EC5n ph\xED")), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + company.hotlineRaw,
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--slate-800)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 18,
      height: 18
    }
  }), company.hotline)));
}
Object.assign(window, {
  Header,
  MobileMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-deploy/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-deploy/hero.jsx
try { (() => {
function Hero() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button,
    StatCounter,
    Badge
  } = NS;
  const {
    stats
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      marginTop: -88,
      paddingTop: 88,
      background: 'var(--grad-brand)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 520,
      height: 520,
      background: 'radial-gradient(circle at center, rgba(70,198,210,0.28), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      bottom: -160,
      left: -120,
      width: 480,
      height: 480,
      background: 'radial-gradient(circle at center, rgba(224,138,43,0.16), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.06,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
      backgroundSize: '64px 64px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 24px 88px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "tad-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    icon: "badge-check"
  }, "Thi\u1EBFt k\u1EBF & thi c\xF4ng tr\u1ECDn g\xF3i")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.6rem, 5vw, 4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      margin: '0 0 22px'
    }
  }, "Ki\u1EBFn t\u1EA1o kh\xF4ng gian", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-400)'
    }
  }, "N\xE2ng t\u1EA7m"), " th\u01B0\u01A1ng hi\u1EC7u"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      maxWidth: 560,
      margin: '0 0 34px'
    }
  }, "Chuy\xEAn thi\u1EBFt k\u1EBF, thi c\xF4ng n\u1ED9i th\u1EA5t v\xE0 qu\u1EA3ng c\xE1o tr\u1ECDn g\xF3i cho nh\xE0 \u1EDF, v\u0103n ph\xF2ng, showroom, c\u1EEDa h\xE0ng v\xE0 doanh nghi\u1EC7p."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    href: "#du-an"
  }, "Xem d\u1EF1 \xE1n"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    icon: "phone-call",
    href: "#lien-he"
  }, "Nh\u1EADn b\xE1o gi\xE1 mi\u1EC5n ph\xED"))), /*#__PURE__*/React.createElement("div", {
    className: "tad-hero-panel",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
      border: '1px solid rgba(255,255,255,0.16)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 54,
      height: 54
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      marginTop: 12
    }
  }, "\u1EA2nh d\u1EF1 \xE1n / showroom"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 20,
      left: -22,
      background: '#fff',
      color: 'var(--text-strong)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--grad-amber)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "award",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      lineHeight: 1
    }
  }, "\u0110\xFAng thi\u1EBFt k\u1EBF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "\u0110\xFAng ti\u1EBFn \u0111\u1ED9 \xB7 \u0110\xFAng ng\xE2n s\xE1ch"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '32px 24px',
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatCounter, {
    key: s.label,
    value: s.value,
    suffix: s.suffix,
    label: s.label,
    invert: true
  })))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:860px){.tad-hero-grid{grid-template-columns:1fr!important;gap:36px!important}.tad-hero-panel{max-width:420px}}`));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-deploy/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-deploy/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Homepage content sections (part 1)
function Wrap({
  id,
  alt,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: alt ? 'var(--bg-alt)' : 'var(--bg-page)',
      padding: 'var(--section-y) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, children));
}
function IntroSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Button,
    SectionTitle
  } = NS;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, []);
  const points = [{
    icon: 'users',
    t: 'Đội ngũ thiết kế & thi công nội bộ'
  }, {
    icon: 'boxes',
    t: 'Triển khai trọn gói từ A–Z'
  }, {
    icon: 'gem',
    t: 'Cam kết chất lượng & tiến độ'
  }];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "gioi-thieu"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "tad-two"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '5 / 4',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--grad-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.4)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 48,
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 10,
      fontFamily: 'var(--font-body)'
    }
  }, "\u1EA2nh \u0111\u1ED9i ng\u0169 / c\xF4ng tr\xECnh"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -18,
      bottom: -18,
      background: 'var(--grad-amber)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 22px',
      boxShadow: 'var(--shadow-lg)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1
    }
  }, "12+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      marginTop: 4
    }
  }, "n\u0103m kinh nghi\u1EC7m"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "V\u1EC1 TA-Decor",
    title: "\u0110\u1ED3ng h\xE0nh c\xF9ng doanh nghi\u1EC7p x\xE2y d\u1EF1ng kh\xF4ng gian v\xE0 h\xECnh \u1EA3nh th\u01B0\u01A1ng hi\u1EC7u",
    lead: "T\u1EEB \xFD t\u01B0\u1EDFng \u0111\u1EBFn kh\xF4ng gian ho\xE0n thi\u1EC7n, ch\xFAng t\xF4i ki\u1EBFn t\u1EA1o nh\u1EEFng c\xF4ng tr\xECnh mang d\u1EA5u \u1EA5n ri\xEAng \u2014 b\u1EC1n \u0111\u1EB9p, \u0111\xFAng c\xF4ng n\u0103ng v\xE0 gi\xE0u c\u1EA3m x\xFAc."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      margin: '28px 0 32px'
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cyan-50)',
      color: 'var(--cyan-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 21,
      height: 21
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, p.t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    href: "#"
  }, "Xem th\xEAm v\u1EC1 ch\xFAng t\xF4i"))));
}
function ServiceSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    ServiceCard
  } = NS;
  const {
    services
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "dich-vu",
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "D\u1ECBch v\u1EE5",
    title: "Gi\u1EA3i ph\xE1p thi\u1EBFt k\u1EBF v\xE0 thi c\xF4ng tr\u1ECDn g\xF3i",
    lead: "M\u1ED9t \u0111\u1EA7u m\u1ED1i cho to\xE0n b\u1ED9 nhu c\u1EA7u n\u1ED9i th\u1EA5t v\xE0 qu\u1EA3ng c\xE1o c\u1EE7a b\u1EA1n."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    },
    className: "tad-grid-4"
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s)))));
}
function FeaturedProjects() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    Tag,
    ProjectCard,
    Button
  } = NS;
  const {
    filters,
    projects
  } = window.TAD;
  const [active, setActive] = React.useState('Tất cả');
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const shown = active === 'Tất cả' ? projects : projects.filter(p => p.cat === active);
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "du-an"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "D\u1EF1 \xE1n ti\xEAu bi\u1EC3u",
    title: "M\u1ED7i c\xF4ng tr\xECnh l\xE0 m\u1ED9t d\u1EA5u \u1EA5n ri\xEAng"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    href: "#"
  }, "Xem t\u1EA5t c\u1EA3 d\u1EF1 \xE1n")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    active: f === active,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      textAlign: 'center',
      color: 'var(--text-muted)',
      padding: '40px 0',
      fontFamily: 'var(--font-body)'
    }
  }, "Ch\u01B0a c\xF3 d\u1EF1 \xE1n trong h\u1EA1ng m\u1EE5c n\xE0y.")));
}
function WhyChooseUs() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle
  } = NS;
  const {
    why
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "V\xEC sao ch\u1ECDn ch\xFAng t\xF4i",
    title: "S\u1EF1 an t\xE2m trong t\u1EEBng c\xF4ng \u0111o\u1EA1n"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, why.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.title,
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--grad-cyan)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": w.icon,
    style: {
      width: 23,
      height: 23
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)',
      margin: '2px 0 7px'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, w.description))))));
}
function WorkProcess() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    ProcessStep
  } = NS;
  const {
    process
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "Quy tr\xECnh l\xE0m vi\u1EC7c",
    title: "7 b\u01B0\u1EDBc r\xF5 r\xE0ng, minh b\u1EA1ch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32
    },
    className: "tad-grid-4"
  }, process.map((p, i) => /*#__PURE__*/React.createElement(ProcessStep, _extends({
    key: p.title,
    step: i + 1
  }, p)))));
}
Object.assign(window, {
  Wrap,
  IntroSection,
  ServiceSection,
  FeaturedProjects,
  WhyChooseUs,
  WorkProcess
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-deploy/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-deploy/sections2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Homepage content sections (part 2)
function BeforeAfterSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    BeforeAfterSlider,
    Badge
  } = NS;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 48,
      alignItems: 'center'
    },
    className: "tad-two"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Tr\u01B0\u1EDBc & sau",
    title: "S\u1EF1 kh\xE1c bi\u1EC7t sau khi thi c\xF4ng",
    lead: "K\xE9o thanh tr\u01B0\u1EE3t \u0111\u1EC3 so s\xE1nh hi\u1EC7n tr\u1EA1ng ban \u0111\u1EA7u v\xE0 kh\xF4ng gian sau khi TA-Decor ho\xE0n thi\u1EC7n."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "slate",
    icon: "ruler"
  }, "T\u1ED1i \u01B0u c\xF4ng n\u0103ng"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan",
    icon: "palette"
  }, "\u0110\u1ED3ng b\u1ED9 th\u1EA9m m\u1EF9"))), /*#__PURE__*/React.createElement(BeforeAfterSlider, {
    beforeLabel: "Hi\u1EC7n tr\u1EA1ng",
    afterLabel: "Ho\xE0n thi\u1EC7n"
  })));
}
function PartnerLogos() {
  const names = ['MINH PHÁT', 'AN PHÁT', 'LUXE', 'BAKERY MỘC', 'NHÀ GỖ', 'GRAND PARK', 'VIỆT LONG', 'HOÀNG GIA'];
  const row = [...names, ...names];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto 22px',
      padding: '0 24px',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, "Kh\xE1ch h\xE0ng & \u0111\u1ED1i t\xE1c \u0111\xE3 tin t\u01B0\u1EDFng"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tad-marquee",
    style: {
      display: 'flex',
      gap: 56,
      whiteSpace: 'nowrap',
      width: 'max-content'
    }
  }, row.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '0.06em',
      color: 'var(--slate-300)'
    }
  }, n)))), /*#__PURE__*/React.createElement("style", null, `@keyframes tad-marq{from{transform:translateX(0)}to{transform:translateX(-50%)}}.tad-marquee{animation:tad-marq 28s linear infinite}@media (prefers-reduced-motion: reduce){.tad-marquee{animation:none}}`));
}
function Testimonials() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    Testimonial
  } = NS;
  const {
    testimonials
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    align: "center",
    eyebrow: "Kh\xE1ch h\xE0ng n\xF3i g\xEC",
    title: "Ni\u1EC1m tin \u0111\u01B0\u1EE3c x\xE2y t\u1EEB k\u1EBFt qu\u1EA3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, testimonials.map(t => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: t.name
  }, t)))));
}
function NewsSection() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    SectionTitle,
    Badge,
    Button
  } = NS;
  const {
    news
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "tin-tuc",
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Tin t\u1EE9c & c\u1EA9m nang",
    title: "Ki\u1EBFn th\u1EE9c cho kh\xF4ng gian c\u1EE7a b\u1EA1n"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    href: "#"
  }, "Xem t\u1EA5t c\u1EA3 b\xE0i vi\u1EBFt")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    },
    className: "tad-grid-3"
  }, news.map(a => /*#__PURE__*/React.createElement("a", {
    key: a.title,
    href: "#",
    style: {
      textDecoration: 'none',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur), transform var(--dur)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: 'var(--grad-cyan)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "newspaper",
    style: {
      width: 36,
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan"
  }, a.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.35,
      color: 'var(--text-strong)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar",
    style: {
      width: 13,
      height: 13
    }
  }), a.date), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 13,
      height: 13
    }
  }), a.read)))))));
}
Object.assign(window, {
  BeforeAfterSection,
  PartnerLogos,
  Testimonials,
  NewsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-deploy/sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-deploy/sections3.jsx
try { (() => {
// Consultation form (CTA) + Footer
function ConsultationForm() {
  const NS = window.TADecorDesignSystem_573d7b;
  const {
    Input,
    Select,
    Textarea,
    Checkbox,
    Button
  } = NS;
  const {
    company,
    services,
    budgets
  } = window.TAD;
  const [errors, setErrors] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [agree, setAgree] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const [sending, setSending] = React.useState(false);
  const submit = e => {
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
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    }).then(() => {
      f.reset();
      setAgree(false);
      setToast({
        ok: true,
        msg: 'Đã gửi yêu cầu! TA-Decor sẽ liên hệ với bạn trong thời gian sớm nhất.'
      });
    }).catch(() => {
      setToast({
        ok: false,
        msg: 'Gửi chưa thành công. Vui lòng gọi Hotline hoặc thử lại.'
      });
    }).finally(() => {
      setSending(false);
      setTimeout(() => setToast(null), 4600);
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "lien-he",
    style: {
      position: 'relative',
      background: 'var(--grad-brand)',
      color: '#fff',
      padding: 'var(--section-y) 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -100,
      left: -60,
      width: 420,
      height: 420,
      background: 'radial-gradient(circle,rgba(70,198,210,0.22),transparent 62%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "tad-two"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--cyan-400)',
      marginBottom: 14
    }
  }, "Nh\u1EADn t\u01B0 v\u1EA5n"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2rem,3.4vw,2.75rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: '0 0 18px'
    }
  }, "B\u1EA1n \u0111ang c\u1EA7n thi\u1EBFt k\u1EBF ho\u1EB7c thi c\xF4ng?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)',
      margin: '0 0 32px',
      maxWidth: 460
    }
  }, "H\xE3y \u0111\u1EC3 l\u1EA1i th\xF4ng tin, \u0111\u1ED9i ng\u0169 c\u1EE7a ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 t\u01B0 v\u1EA5n v\xE0 b\xE1o gi\xE1 ho\xE0n to\xE0n mi\u1EC5n ph\xED."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [{
    i: 'phone',
    l: company.hotline,
    s: 'Hotline / Zalo',
    href: 'tel:' + company.hotlineRaw
  }, {
    i: 'mail',
    l: company.email,
    s: 'Email',
    href: 'mailto:' + company.email
  }, {
    i: 'map-pin',
    l: company.address,
    s: 'Địa chỉ',
    href: company.googleMapUrl
  }].map(r => /*#__PURE__*/React.createElement("a", {
    key: r.s,
    href: r.href,
    target: r.href && r.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid var(--border-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": r.i,
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.3
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, r.s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    name: "tu-van",
    method: "POST",
    "data-netlify": "true",
    "netlify-honeypot": "company_website",
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "tu-van"
  }), /*#__PURE__*/React.createElement(Input, {
    name: "name",
    label: "H\u1ECD v\xE0 t\xEAn",
    icon: "user",
    placeholder: "Nguy\u1EC5n V\u0103n A",
    required: true,
    error: errors.name
  }), /*#__PURE__*/React.createElement(Input, {
    name: "phone",
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
    icon: "phone",
    placeholder: "09xx xxx xxx",
    required: true,
    error: errors.phone
  }), /*#__PURE__*/React.createElement(Input, {
    name: "email",
    label: "Email",
    icon: "mail",
    placeholder: "email@company.vn",
    error: errors.email,
    style: {
      gridColumn: '1 / 3'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    name: "service",
    label: "D\u1ECBch v\u1EE5 quan t\xE2m",
    placeholder: "Ch\u1ECDn d\u1ECBch v\u1EE5",
    options: services.map(s => s.title)
  }), /*#__PURE__*/React.createElement(Select, {
    name: "budget",
    label: "Ng\xE2n s\xE1ch d\u1EF1 ki\u1EBFn",
    placeholder: "Ch\u1ECDn m\u1EE9c ng\xE2n s\xE1ch",
    options: budgets
  }), /*#__PURE__*/React.createElement(Textarea, {
    name: "msg",
    label: "N\u1ED9i dung y\xEAu c\u1EA7u",
    rows: 3,
    placeholder: "M\xF4 t\u1EA3 kh\xF4ng gian, di\u1EC7n t\xEDch v\xE0 mong mu\u1ED1n c\u1EE7a b\u1EA1n\u2026",
    style: {
      gridColumn: '1 / 3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 3'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "T\xF4i \u0111\u1ED3ng \xFD v\u1EDBi ", /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"), " c\u1EE7a TA-Decor.")
  }), errors.agree && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--danger)',
      fontSize: 12,
      marginTop: 6,
      fontFamily: 'var(--font-body)'
    }
  }, "Vui l\xF2ng \u0111\u1ED3ng \xFD v\u1EDBi ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt.")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "company_website",
    tabIndex: -1,
    autoComplete: "off",
    style: {
      position: 'absolute',
      left: '-9999px'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 3'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    icon: "send",
    block: true,
    size: "lg",
    disabled: sending
  }, sending ? 'Đang gửi…' : 'Gửi yêu cầu tư vấn'))))), toast && /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200,
      background: '#fff',
      color: 'var(--text-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      maxWidth: 'min(92vw, 460px)',
      borderLeft: `4px solid ${toast.ok ? 'var(--success)' : 'var(--danger)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: toast.ok ? 'var(--success)' : 'var(--danger)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": toast.ok ? 'check-circle-2' : 'alert-circle',
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5
    }
  }, toast.msg)));
}
function Footer() {
  const {
    company,
    nav,
    services
  } = window.TAD;
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  });
  const social = [{
    i: 'thumbs-up',
    href: company.facebookUrl,
    l: 'Facebook'
  }, {
    i: 'message-circle',
    href: company.zaloUrl,
    l: 'Zalo'
  }, {
    i: 'play',
    href: '#',
    l: 'YouTube'
  }, {
    i: 'music',
    href: company.tiktokUrl,
    l: 'TikTok'
  }];
  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-on-dark-muted)',
    textDecoration: 'none',
    lineHeight: 2.1
  };
  const head = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-inverse-deep)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '68px 24px 0',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    },
    className: "tad-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: company.logo,
    alt: "TA-Decor",
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: '0.04em',
      color: '#fff'
    }
  }, "TA-DECOR")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)',
      margin: '0 0 18px',
      maxWidth: 320
    }
  }, "Thi\u1EBFt k\u1EBF & thi c\xF4ng n\u1ED9i th\u1EA5t, qu\u1EA3ng c\xE1o tr\u1ECDn g\xF3i. Ki\u1EBFn t\u1EA1o kh\xF4ng gian \u2013 N\xE2ng t\u1EA7m th\u01B0\u01A1ng hi\u1EC7u."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 15,
      height: 15
    }
  }), company.address), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + company.hotlineRaw,
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 15,
      height: 15
    }
  }), company.hotline), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + company.email,
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 15,
      height: 15
    }
  }), company.email))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Li\xEAn k\u1EBFt"), nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    style: {
      ...linkStyle,
      display: 'block'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "D\u1ECBch v\u1EE5"), services.slice(0, 6).map(s => /*#__PURE__*/React.createElement("a", {
    key: s.title,
    href: "#dich-vu",
    style: {
      ...linkStyle,
      display: 'block'
    }
  }, s.title))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "K\u1EBFt n\u1ED1i"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 18
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.l,
    href: s.href,
    "aria-label": s.l,
    target: "_blank",
    rel: "noopener",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.i,
    style: {
      width: 18,
      height: 18
    }
  })))), /*#__PURE__*/React.createElement("a", {
    href: company.googleMapUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      ...linkStyle,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map",
    style: {
      width: 15,
      height: 15
    }
  }), "Xem tr\xEAn Google Maps"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '22px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 TA-Decor. B\u1EA3o l\u01B0u m\u1ECDi quy\u1EC1n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))));
}
Object.assign(window, {
  ConsultationForm,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-deploy/sections3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BeforeAfterSlider = __ds_scope.BeforeAfterSlider;

__ds_ns.FloatingContact = __ds_scope.FloatingContact;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
