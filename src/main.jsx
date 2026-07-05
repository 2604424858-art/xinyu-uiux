import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Contact,
  Copy,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
  Palette,
  Phone,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const casePages = (caseId, count) =>
  Array.from({ length: count }, (_, index) => `/assets/cases/${caseId}/${String(index + 1).padStart(3, '0')}.webp`);

const projects = [
  {
    slug: 'xueqi',
    title: '学起APP',
    type: '教育界面/C端设计',
    image: '/assets/fenmian/cover-xueqi-app.webp',
    summary: '面向学习场景的 C 端 App 界面设计，强调清晰入口、课程信息和轻量操作路径。',
    pages: casePages('xueqi', 13),
  },
  {
    slug: 'yundao',
    title: '运道手游',
    type: '国风手游',
    image: '/assets/fenmian/cover-yundao-game.webp',
    summary: '国风手游视觉与界面展示，围绕角色氛围、玩法入口和沉浸式视觉表达展开。',
    pages: casePages('yundao', 13),
  },
  {
    slug: 'honglin',
    title: '鸿麟优选B2C',
    type: '电商/商家后台',
    image: '/assets/fenmian/cover-honglin-b2c.webp',
    summary: '电商小程序与商家后台相关界面，关注商品展示、交易路径和运营管理效率。',
    pages: casePages('honglin', 17),
  },
  {
    slug: 'ai-xiaogeng',
    title: 'AI小耿',
    type: 'B端/AI自动化包装',
    image: '/assets/fenmian/cover-ai-xiaogeng.webp',
    summary: 'AI 自动化包装设计工具的 B 端产品视觉，突出生成效率、场景说明和产品识别度。',
    pages: casePages('ai-xiaogeng', 8),
  },
  {
    slug: 'pacdora-api',
    title: 'Pacdora API',
    type: 'B端后台/一站式的解决方案',
    image: '/assets/fenmian/cover-pacdora-api-new.webp',
    summary: '网络印刷包装自动化后台方案，覆盖 API 能力展示、流程承接和一站式业务表达。',
    pages: casePages('pacdora-api', 16),
  },
  {
    slug: 'orico-crm',
    title: 'ORICO CRM',
    type: 'B端后台/一站式的解决方案',
    image: '/assets/fenmian/cover-orico-crm.webp',
    summary: '客户资源管理系统界面设计，围绕数据看板、业务流程和管理效率展开。',
    pages: casePages('orico-crm', 15),
  },
  {
    slug: 'meile-ip',
    title: '美乐IP',
    type: '品牌设计',
    image: '/assets/fenmian/cover-meile-ip.webp',
    summary: '围绕品牌 IP 的视觉延展设计，强化识别度、角色气质和传播记忆点。',
    pages: casePages('meile-ip', 18),
  },
  {
    slug: 'operation',
    title: '运营设计',
    type: 'H5/Blender建模/banner',
    image: '/assets/fenmian/cover-operation-design.webp',
    summary: '覆盖 H5、Blender 建模与 Banner 运营物料，用统一视觉语言提升传播效率。',
    pages: casePages('operation', 19),
  },
];

const stats = [
  ['4+', '年设计经验'],
  ['6', '项目沉淀', '个'],
  ['100%', '从视觉到落地'],
  ['AI', '辅助设计工作流'],
];

const strengths = [
  {
    icon: MonitorSmartphone,
    title: '移动端产品体验',
    text: '能从用户路径、视觉层级和状态反馈出发，搭建顺手、干净、可推进的 App / 小程序界面。',
  },
  {
    icon: Layers3,
    title: 'SaaS 与后台信息架构',
    text: '擅长把复杂表单、数据面板和操作流程拆成有秩序的模块，让界面更适合长期使用。',
  },
  {
    icon: Sparkles,
    title: 'AI 视觉探索',
    text: '用 AIGC 做风格发散、素材迭代和视觉提案，把探索速度转化成更明确的设计方案。',
  },
  {
    icon: Palette,
    title: '品牌与运营视觉',
    text: '覆盖品牌主视觉、活动 Banner、包装和 IP 延展，让单张图和完整系统都保持统一质感。',
  },
  {
    icon: Workflow,
    title: '组件化落地意识',
    text: '设计时同步考虑组件复用、响应状态和交付规范，减少开发沟通成本。',
  },
];

function setupPortfolioMotion() {
  const ctx = gsap.context(() => {
    const easeOut = 'power4.out';
    const slowEase = 'expo.out';

    gsap.set('.site-nav, .hero-intro .system-chip, .hero-intro h1, .hero-copy, .hero-tags span, .hero-actions a, .hero-metrics div, .profile-device', {
      willChange: 'transform, opacity, clip-path',
    });

    const heroTl = gsap.timeline({ defaults: { ease: slowEase } });
    heroTl
      .fromTo(
        '.site-nav',
        { y: -42, opacity: 0, scaleX: 0.92, filter: 'blur(10px)' },
        { y: 0, opacity: 1, scaleX: 1, filter: 'blur(0px)', duration: 1.25 }
      )
      .fromTo(
        '.hero-intro .system-chip',
        { x: -38, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        { x: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.05 },
        '-=0.78'
      )
      .fromTo(
        '.hero-intro h1',
        {
          y: 112,
          opacity: 0,
          scaleY: 0.68,
          scaleX: 1.14,
          transformOrigin: '50% 100%',
          clipPath: 'inset(0 0 100% 0)',
          filter: 'blur(12px)',
        },
        {
          y: 0,
          opacity: 1,
          scaleY: 1,
          scaleX: 1,
          clipPath: 'inset(0 0 0% 0)',
          filter: 'blur(0px)',
          duration: 1.62,
        },
        '-=0.55'
      )
      .fromTo(
        '.hero-copy',
        { y: 34, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.05 },
        '-=0.68'
      )
      .fromTo(
        '.hero-tags span',
        { y: 26, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.1 },
        '-=0.58'
      )
      .fromTo(
        '.hero-actions a',
        { y: 24, opacity: 0, scaleX: 0.88 },
        { y: 0, opacity: 1, scaleX: 1, duration: 0.92, stagger: 0.12 },
        '-=0.72'
      )
      .fromTo(
        '.profile-device',
        {
          x: 128,
          y: 48,
          opacity: 0,
          rotateZ: 3.2,
          scale: 0.88,
          clipPath: 'inset(0 0 100% 0 round 8px)',
          filter: 'blur(12px)',
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotateZ: 0,
          scale: 1,
          clipPath: 'inset(0 0 0% 0 round 8px)',
          filter: 'blur(0px)',
          duration: 1.58,
        },
        '-=1.1'
      )
      .fromTo(
        '.hero-metrics div',
        { y: 36, opacity: 0, clipPath: 'inset(100% 0 0 0 round 8px)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0 round 8px)', duration: 0.95, stagger: 0.12 },
        '-=0.7'
      );

    gsap.to('.profile-screen img', {
      yPercent: -4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    gsap.utils.toArray('.projects, .strengths, .contact-end').forEach((section) => {
      const title = section.querySelector('.projects-heading h2, .section-title h2, .contact-title h2');
      const eyebrow = section.querySelector('.eyebrow');
      const cards = section.querySelectorAll('.project-card, .strength-card, .contact-card');
      const cta = section.querySelector('.projects-heading a');

      if (eyebrow) {
        gsap.fromTo(
          eyebrow,
          { x: -26, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
          {
            x: 0,
            opacity: 1,
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.9,
            ease: easeOut,
            scrollTrigger: { trigger: section, start: 'top 78%', once: true },
          }
        );
      }

      if (title) {
        gsap.fromTo(
          title,
          {
            y: 104,
            opacity: 0,
            scaleY: 0.64,
            scaleX: 1.12,
            transformOrigin: '50% 100%',
            clipPath: 'inset(0 0 100% 0)',
            filter: 'blur(12px)',
          },
          {
            y: 0,
            opacity: 1,
            scaleY: 1,
            scaleX: 1,
            clipPath: 'inset(0 0 0% 0)',
            filter: 'blur(0px)',
            duration: 1.35,
            ease: slowEase,
            scrollTrigger: { trigger: section, start: 'top 76%', once: true },
          }
        );
      }

      if (cta) {
        gsap.fromTo(
          cta,
          { y: 28, opacity: 0, clipPath: 'inset(0 0 0 100%)' },
          {
            y: 0,
            opacity: 1,
            clipPath: 'inset(0 0 0 0%)',
            duration: 0.95,
            ease: easeOut,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true },
          }
        );
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            y: 96,
            opacity: 0,
            rotateX: 10,
            scale: 0.93,
            transformOrigin: '50% 100%',
            filter: 'blur(12px)',
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.18,
            stagger: 0.14,
            ease: slowEase,
            scrollTrigger: { trigger: section, start: 'top 68%', once: true },
          }
        );
      }
    });

    gsap.utils.toArray('.project-card img').forEach((image) => {
      const card = image.closest('.project-card');
      gsap.fromTo(
        image,
        { clipPath: 'inset(0 0 100% 0 round 8px)', y: 22, scale: 1.06 },
        {
          clipPath: 'inset(0 0 0% 0 round 8px)',
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: slowEase,
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
        }
      );
      gsap.to(image, {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.4,
        },
      });
    });
  });

  return () => ctx.revert();
}

function setupPointerEdgeGlow() {
  const cards = document.querySelectorAll('.project-card, .strength-card, .contact-card, .hero-metrics div');

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };
  const handlePointerEnter = (event) => {
    event.currentTarget.classList.add('is-edge-active');
  };
  const handlePointerLeave = (event) => {
    event.currentTarget.classList.remove('is-edge-active');
  };

  cards.forEach((card) => {
    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointerleave', handlePointerLeave);
  });

  return () => {
    cards.forEach((card) => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerenter', handlePointerEnter);
      card.removeEventListener('pointerleave', handlePointerLeave);
    });
  };
}

function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => setupPortfolioMotion(), []);
  useEffect(() => setupPointerEdgeGlow(), []);

  useEffect(() => {
    const openFromHash = () => {
      const slug = window.location.hash.replace('#case-', '');
      const project = projects.find((item) => item.slug === slug);
      setActiveProject(project || null);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  const closeCase = () => {
    setActiveProject(null);
    if (window.location.hash.startsWith('#case-')) {
      window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  };

  return (
    <main>
      <Hero />
      <Projects onOpen={setActiveProject} />
      <Strengths />
      <ContactSection />
      {activeProject ? <CaseModal project={activeProject} onClose={closeCase} /> : null}
    </main>
  );
}

function Header() {
  return (
    <header className="site-nav" aria-label="主导航">
      <a className="brand" href="#hero" aria-label="返回首页">
        <span>[欣雨]今天挺幸运的</span>
      </a>
      <nav>
        <a href="#projects">
          <Layers3 size={15} />
          <span>项目</span>
        </a>
        <a href="#strengths">
          <Sparkles size={15} />
          <span>优势</span>
        </a>
      </nav>
      <a className="nav-contact" href="#contact">
        <Contact size={15} />
        <span>联系</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-full" id="hero">
      <video className="hero-video" src="/assets/hero-loop.mp4" autoPlay muted loop playsInline />
      <div className="hero-shade" />
      <Header />
      <div className="hero-scene" aria-hidden="true">
        <span className="hero-line line-one" />
        <span className="hero-line line-two" />
      </div>
      <div className="hero-content hero-profile">
        <section className="hero-intro">
          <p className="system-chip">SYSTEM_UI / PORTFOLIO</p>
          <h1>
            <span className="hero-name-main">郝成宇</span><span className="hero-name-alias">（欣雨）</span>
            <span>UI/UX 设计师</span>
          </h1>
          <p className="hero-copy">
            UIUX 是什么，喜欢一切极限运动但从来没做过。用 6 个项目沉淀，把移动端、Web / SaaS、AIGC 视觉与品牌运营里的复杂需求，整理成可落地的产品体验。
          </p>
          <div className="hero-tags">
            <span>UI/UX 作品集</span>
            <span>移动端 / B端 / AI</span>
            <span>2022-2026 Portfolio</span>
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <span>查看项目</span>
            </a>
            <a className="ghost-action" href="#contact">
              <span>联系我</span>
            </a>
          </div>
          <div className="hero-metrics" aria-label="项目数据">
            {stats.slice(0, 3).map(([value, label, unit]) => (
              <div key={label}>
                <strong>{value}{unit ? <em>{unit}</em> : null}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className="profile-device" aria-label="个人照片预览">
          <div className="profile-screen">
            <img src="/assets/profile-real.webp" alt="UI 设计师个人照片" />
          </div>
          <p>UI DESIGNER // LIVE PREVIEW</p>
          <div className="profile-corner" />
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-title">
        <p className="eyebrow">Profile</p>
        <h2>个人经历</h2>
      </div>
      <div className="about-layout about-layout-single">
        <div className="about-copy">
          <p>
            我是一名 UI 设计师，作品方向覆盖教育 App、电商小程序、游戏界面、企业后台、品牌运营视觉和 AI 概念探索。相比只做单张视觉，我更关注界面是否能被真实使用、是否方便开发承接、是否能延展成稳定的设计语言。
          </p>
          <div className="contact-strip">
            <a href="mailto:hello@example.com">
              <Mail size={18} />
              hello@example.com
            </a>
            <a href="tel:15572260938">
              <Phone size={18} />
              155 7226 0938
            </a>
            <span>
              <MapPin size={18} />
              UI / AIGC / Brand
            </span>
          </div>
          <div className="data-row">
            {stats.slice(0, 3).map(([value, label, unit]) => (
              <div key={label}>
                <strong>{value}{unit ? <em>{unit}</em> : null}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  return (
    <section className="projects section-pad" id="projects">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">Selected Works</p>
          <h2>精选项目</h2>
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            className={`project-card project-${index + 1}`}
            key={project.title}
            href={`#case-${project.slug}`}
            onClick={() => onOpen(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <span>Active</span>
              </div>
              <p>{project.type}</p>
              <span className="project-detail" aria-label={`${project.title} 查看详情`}>
                <ArrowUpRight size={14} />
                <span>查看详情</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CaseModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'expo.out' } })
        .fromTo('.case-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.75 })
        .fromTo(
          '.case-header',
          { y: -28, opacity: 0, scaleX: 0.96, filter: 'blur(8px)' },
          { y: 0, opacity: 1, scaleX: 1, filter: 'blur(0px)', duration: 0.9 },
          '-=0.52'
        )
        .fromTo(
          '.case-page',
          {
            y: 72,
            opacity: 0,
            scale: 0.985,
            clipPath: 'inset(0 0 100% 0 round 10px)',
            filter: 'blur(8px)',
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0 0 0% 0 round 10px)',
            filter: 'blur(0px)',
            duration: 1.15,
            stagger: 0.06,
          },
          '-=0.4'
        );
    });

    return () => ctx.revert();
  }, [project.slug]);

  return (
    <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button className="case-backdrop" type="button" aria-label="关闭作品展示" onClick={onClose} />
      <section className="case-panel">
        <header className="case-header">
          <div>
            <p className="eyebrow">Case Preview</p>
            <h2 id="case-title">{project.title}</h2>
            <span>{project.type}</span>
          </div>
          <button className="case-close" type="button" aria-label="关闭作品展示" onClick={onClose}>
            <X size={22} />
          </button>
        </header>
        <div className="case-pages">
          {project.pages.map((page, index) => (
            <figure className="case-page" key={page}>
              <img src={page} alt={`${project.title} 作品展示 ${index + 1}`} loading={index < 2 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function Strengths() {
  return (
    <section className="strengths section-pad" id="strengths">
      <div className="section-title">
        <p className="eyebrow">Design Capability</p>
        <h2>个人优势</h2>
      </div>
      <div className="strength-grid">
        {strengths.map(({ icon: Icon, title, text }) => (
          <article className="strength-card" key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [copiedValue, setCopiedValue] = useState('');

  const copyText = async (value) => {
    try {
      await navigator.clipboard?.writeText(value);
    } catch {
      // Some embedded browser contexts block clipboard writes; keep the UI feedback smooth.
    }
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(''), 1600);
  };

  return (
    <section className="contact-end section-pad" id="contact">
      <div className="contact-title">
        <p className="eyebrow">Contact Terminal</p>
        <h2>联系我</h2>
      </div>
      <div className="contact-panel">
        <div className={`copy-toast ${copiedValue ? 'is-visible' : ''}`} role="status" aria-live="polite">
          您复制的内容已到剪贴板上
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-icon">
              <Mail size={22} />
            </span>
            <span>
              <small>邮箱</small>
              <a href="mailto:2604424858@qq.com">2604424858@qq.com</a>
            </span>
            <button
              className={copiedValue === '2604424858@qq.com' ? 'is-copied' : ''}
              type="button"
              aria-label="复制邮箱"
              onClick={() => copyText('2604424858@qq.com')}
            >
              <Copy size={16} />
              {copiedValue === '2604424858@qq.com' ? '已复制' : '复制'}
            </button>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <Phone size={22} />
            </span>
            <span>
              <small>微信 / 电话</small>
              <a href="tel:15572260938">15572260938</a>
            </span>
            <button
              className={copiedValue === '15572260938' ? 'is-copied' : ''}
              type="button"
              aria-label="复制联系方式"
              onClick={() => copyText('15572260938')}
            >
              <Copy size={16} />
              {copiedValue === '15572260938' ? '已复制' : '复制'}
            </button>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <span>PWR ON</span>
        <span>© 2026 郝成宇（欣雨） UI/UX Portfolio</span>
      </footer>
    </section>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement.__portfolioRoot) {
  rootElement.__portfolioRoot = createRoot(rootElement);
}

rootElement.__portfolioRoot.render(<App />);
