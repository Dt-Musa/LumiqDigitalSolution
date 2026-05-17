import { A, AH, ag, C } from '../lib/tokens.js'

/**
 * Global CSS injected once at the top of <App />. Keeps all keyframes,
 * utility classes, and responsive rules in one auditable place.
 */
export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&family=Newsreader:ital,wght@0,400..700;1,400..700&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      html{scroll-behavior:smooth}body{background:#000}
      ::selection{background:${A};color:#fff}
      ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:2px}

      @keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
      @keyframes wordIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
      @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.25}}
      @keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes formIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

      .na{cursor:pointer;transition:color .15s}
      .na:hover{color:#fff !important}
      .pb{transition:background .2s,box-shadow .2s,transform .15s;cursor:pointer}
      .pb:hover{background:${AH} !important;box-shadow:0 0 30px ${ag(0.35)} !important;transform:translateY(-1px)}
      .gb{transition:border-color .2s,color .2s,transform .15s;cursor:pointer}
      .gb:hover{border-color:#333 !important;color:#fff !important;transform:translateY(-1px)}
      .pill{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;border:1px solid #1e1e1e;border-radius:999px;padding:6px 12px;color:${C.sub};background:${C.s1}}
      .glass{background:linear-gradient(180deg,rgba(18,18,18,.9),rgba(6,6,6,.9));border:1px solid #1e1e1e}

      .sr{border-top:1px solid #1e1e1e;cursor:pointer;transition:background .2s}
      .sr:last-child{border-bottom:1px solid #1e1e1e}
      .sr:hover{background:${ag(0.03)}}
      .sr:hover .sn{color:#fff !important}
      .sb{overflow:hidden;transition:max-height .5s cubic-bezier(.16,1,.3,1),opacity .35s}

      .why-card{transition:transform .25s,border-color .25s,box-shadow .25s;height:100%;box-shadow:0 12px 30px rgba(0,0,0,.35)}
      .why-card:hover{transform:translateY(-4px);border-color:#2a2a2a !important;box-shadow:0 18px 40px rgba(0,0,0,.45)}
      .proc-card{transition:transform .25s,box-shadow .25s;box-shadow:0 12px 30px rgba(0,0,0,.35)}
      .proc-card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,0,0,.45)}
      .testi-card{transition:border-color .25s,box-shadow .25s;box-shadow:0 12px 30px rgba(0,0,0,.35)}
      .testi-card:hover{border-color:#2a2a2a !important;box-shadow:0 18px 40px rgba(0,0,0,.45)}
      .hero-preview{position:relative;border-radius:18px;padding:22px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5)}
      .hero-preview::before{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 0% 0%,${ag(0.18)} 0%,transparent 60%);pointer-events:none}
      .hero-card{border-radius:14px;padding:14px;border:1px solid #1e1e1e;background:#0b0b0b}
      .hero-stack{display:grid;gap:12px}
      .hero-grid{display:grid;grid-template-columns:1fr;gap:48px;align-items:start}

      .tier-wrap{transition:background .2s}
      .tier-wrap:hover{background:${ag(0.02)} !important}

      .fq{border-top:1px solid #1e1e1e;cursor:pointer;transition:background .2s}
      .fq:last-child{border-bottom:1px solid #1e1e1e}
      .fq:hover{background:#0a0a0a}
      .fq-b{overflow:hidden;transition:max-height .45s cubic-bezier(.16,1,.3,1),opacity .3s}

      .soc{transition:color .2s,transform .2s;cursor:pointer}
      .soc:hover{color:${A} !important;transform:translateY(-2px)}

      .sr:focus-visible,.fq:focus-visible,.na:focus-visible{outline:2px solid ${A};outline-offset:4px}

      @media(prefers-reduced-motion:reduce){
        *{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}
      }

      .container{max-width:1200px;margin:0 auto;padding:0 36px}
      .section{padding:100px 0;scroll-margin-top:90px}
      .section-sm{padding:72px 0;scroll-margin-top:90px}

      .bento{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
      .proc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
      .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
      .tier-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #1e1e1e}
      .footer-top{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:start}
      .footer-links{display:flex;gap:56px;flex-wrap:wrap}
      .faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
      .contact-header{max-width:720px;margin:0 auto 24px;text-align:center}
      .contact-form{max-width:900px;margin:0 auto;text-align:left}
      .contact-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
      .contact-label{font-size:11px;font-weight:600;color:#7a7a7a;letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px}
      .contact-input{width:100%;background:linear-gradient(180deg,#0f0f0f,#0b0b0b);border:1px solid #1e1e1e;border-radius:10px;padding:11px 14px;font-size:14px;color:#ebebeb;outline:none;transition:border-color .2s,box-shadow .2s,transform .2s;line-height:1.4;font-family:inherit}
      .contact-input::placeholder{color:#4f4f4f}
      .contact-input:focus{border-color:${A};box-shadow:0 0 0 3px ${ag(0.25)}}
      .contact-input:hover{border-color:#2a2a2a}
      .contact-select{appearance:none;background-image:linear-gradient(45deg,transparent 50%,#4a4a4a 50%),linear-gradient(135deg,#4a4a4a 50%,transparent 50%);background-position:calc(100% - 18px) 50%,calc(100% - 12px) 50%;background-size:6px 6px,6px 6px;background-repeat:no-repeat;padding-right:40px}
      .contact-select option{background:#0d0d0d;color:#ebebeb}
      .contact-textarea{resize:vertical;min-height:110px}
      .contact-submit{width:100%;background:${A};color:#fff;border:none;border-radius:8px;padding:14px 18px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 0 22px ${ag(0.35)};transition:background .2s,box-shadow .2s,transform .15s}
      .contact-submit:hover:not(:disabled){background:${AH};box-shadow:0 0 28px ${ag(0.45)};transform:translateY(-1px)}
      .contact-submit:active{transform:translateY(0)}
      .contact-submit:disabled{opacity:.65;cursor:not-allowed}
      .contact-success{display:flex;align-items:center;gap:12px;font-size:15px;color:#ebebeb}
      .contact-success svg{color:${A}}
      .cta-block{display:flex;flex-direction:column;align-items:flex-start}
      .hero-btns{display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:flex-start}
      .hero-actions{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:28px}
      .hero-btns--end{justify-content:flex-end}
      .cta-btns{justify-content:flex-start}
      .metrics{display:flex;gap:48px;flex-wrap:wrap}
      .contact-grid > div{opacity:0;transform:translateY(10px);animation:formIn .55s cubic-bezier(.16,1,.3,1) forwards}
      .contact-grid > div:nth-child(1){animation-delay:.05s}
      .contact-grid > div:nth-child(2){animation-delay:.1s}
      .contact-grid > div:nth-child(3){animation-delay:.15s}
      .contact-grid > div:nth-child(4){animation-delay:.2s}
      .contact-grid > div:nth-child(5){animation-delay:.25s}

      .nav-links-desktop{display:flex;gap:36px;justify-self:center}
      .nav-cta-desktop{display:flex}
      .nav-right{display:flex;gap:12px;align-items:center;justify-self:end}
      .hamburger{display:none}
      .hamburger svg{width:48px;height:48px}
      .ico-burger line{transform-origin:center;transition:transform .3s cubic-bezier(.16,1,.3,1)}
      .hamburger:hover .ico-burger__mid{transform:translateX(2px)}
      .mobile-menu{display:none}

      @media(max-width:900px){
        .container{padding:0 24px}
        .section{padding:80px 0}
        .bento{grid-template-columns:repeat(2,1fr)}
        .proc-grid{grid-template-columns:repeat(2,1fr)}
        .testi-grid{grid-template-columns:repeat(2,1fr)}
        .tier-grid{grid-template-columns:1fr}
        .tier-col-inner{border-right:none !important;border-bottom:1px solid #1e1e1e;padding:36px 0 !important;margin:0 !important}
        .tier-col-inner:last-child{border-bottom:none}
        .faq-grid{grid-template-columns:1fr;gap:40px}
        .footer-top{grid-template-columns:1fr;gap:36px}
        .footer-links{gap:36px}
        .hero-actions{grid-template-columns:1fr;align-items:start}
        .hero-btns--end{justify-content:flex-start}
        .contact-form{max-width:100%}
        .contact-grid{grid-template-columns:1fr}
      }

      @media(max-width:600px){
        .container{padding:0 18px}
        .section{padding:64px 0}
        .section-sm{padding:48px 0}
        .bento{grid-template-columns:1fr}
        .proc-grid{grid-template-columns:1fr}
        .testi-grid{grid-template-columns:1fr}
        .hero-btns{flex-direction:column}
        .hero-btns button,.hero-btns a{width:100%}
        .hero-grid{grid-template-columns:1fr}
        .hero-preview{margin-top:28px}
        .metrics{gap:28px}
        .footer-links{flex-direction:column;gap:32px}
        .footer-bottom{justify-content:center !important;text-align:center}
        .footer-bottom > div{justify-content:center;width:100%}
        .nav-links-desktop{display:none}
        .nav-cta-desktop{display:none}
        .hamburger{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer;color:#f1f1f1;padding:6px}
        .mobile-menu{display:block;position:fixed;top:60px;left:0;right:0;bottom:0;background:#000;z-index:99;padding:32px 24px;border-top:1px solid #1e1e1e;animation:slideDown .25s ease both;overflow-y:auto}
      }

      @media(min-width:601px){
        .hamburger{display:none}
        .mobile-menu{display:none !important}
      }
    `}</style>
  )
}
