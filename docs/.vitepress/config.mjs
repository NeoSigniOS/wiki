import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NeoSign Docs',
  description: 'A minimalist documentation site',
  base: '/wiki/',
  cleanUrls: true,
  
  // light theme by default
  appearance: 'light',
  
  themeConfig: {
    logo: { src: '/DarkColored.png', width: 24, height: 24 },
    // clean navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],

    // sidebar navigation
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Downloading Signing Apps', link: '/guide/getting-started/downloading-signing-apps' },
          { text: 'Turning on Developer Mode', link: '/guide/getting-started/developer-mode' }
        ]
      },
      {
        text: 'Signing Apps',
        items: [
          { text: 'Signing with Feather', link: '/guide/apps/feather' },
          { text: 'Signing with idevice Feather', link: '/guide/apps/idevice-feather' },
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Enabling JIT', link: '/guide/guides/enabling-jit' }
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Common Issues', link: '/guide/troubleshooting/common-issues' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting/troubleshooting' },
          { text: 'Discord Community', link: '/guide/troubleshooting/discord' }
        ]
      }
    ],

    // social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeoSigniOS' },
      { icon: 'discord', link: 'https://discord.gg/MhhydftA2u' }
    ],
    

    // footer
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025'
    }
  },

  // Mintlify-inspired dark theme
  head: [
    ['style', {}, `
      :root {
        /* Pink theme colors for light mode */
        --vp-c-brand-1: #ec4899;
        --vp-c-brand-2: #db2777;
        --vp-c-brand-3: #be185d;
        --vp-c-brand-soft: rgba(236, 72, 153, 0.12);
        
        /* Light mode backgrounds */
        --vp-c-bg: #ffffff;
        --vp-c-bg-alt: #f8fafc;
        --vp-c-bg-elv: #f1f5f9;
        --vp-c-bg-soft: #f8fafc;
        
        /* Light mode borders */
        --vp-c-border: #e2e8f0;
        --vp-c-divider: #e2e8f0;
        --vp-c-gutter: #ffffff;
        
        /* Light mode text */
        --vp-c-text-1: rgba(30, 41, 59, 0.95);
        --vp-c-text-2: rgba(71, 85, 105, 0.9);
        --vp-c-text-3: rgba(100, 116, 139, 0.8);
        
        /* Status colors for light mode */
        --vp-c-tip-1: #10b981;
        --vp-c-tip-2: #059669;
        --vp-c-tip-3: #047857;
        --vp-c-tip-soft: rgba(16, 185, 129, 0.12);
        
        --vp-c-warning-1: #f59e0b;
        --vp-c-warning-2: #d97706;
        --vp-c-warning-3: #92400e;
        --vp-c-warning-soft: rgba(245, 158, 11, 0.12);
        
        --vp-c-danger-1: #ef4444;
        --vp-c-danger-2: #dc2626;
        --vp-c-danger-3: #991b1b;
        --vp-c-danger-soft: rgba(239, 68, 68, 0.12);
      }
      
      .dark {
        /* Main background colors - ultra dark like Mintlify */
        --vp-c-bg: #0a0a0b;           /* Main content background */
        --vp-c-bg-alt: #0a0a0b;      /* Sidebar background - same as main */
        --vp-c-bg-elv: #111113;      /* Elevated elements */
        --vp-c-bg-soft: #111113;     /* Soft backgrounds */
        
        /* Borders and dividers */
        --vp-c-border: #1a1a1d;
        --vp-c-divider: #1a1a1d;
        --vp-c-gutter: #0a0a0b;
        
        /* Text colors - higher contrast on dark bg */
        --vp-c-text-1: rgba(255, 255, 255, 0.95);
        --vp-c-text-2: rgba(255, 255, 255, 0.7);
        --vp-c-text-3: rgba(255, 255, 255, 0.5);
        
        /* Default text colors */
        --vp-c-default-1: var(--vp-c-text-1);
        --vp-c-default-2: var(--vp-c-text-2);
        --vp-c-default-3: var(--vp-c-text-3);
        --vp-c-default-soft: rgba(255, 255, 255, 0.03);
        
        /* Brand colors - Pink theme */
        --vp-c-brand-1: #ec4899;
        --vp-c-brand-2: #db2777;
        --vp-c-brand-3: #be185d;
        --vp-c-brand-soft: rgba(236, 72, 153, 0.15);
        
        /* Status colors */
        --vp-c-tip-1: #10b981;
        --vp-c-tip-2: #059669;
        --vp-c-tip-3: #047857;
        --vp-c-tip-soft: rgba(16, 185, 129, 0.15);
        
        --vp-c-warning-1: #f59e0b;
        --vp-c-warning-2: #d97706;
        --vp-c-warning-3: #92400e;
        --vp-c-warning-soft: rgba(245, 158, 11, 0.15);
        
        --vp-c-danger-1: #ef4444;
        --vp-c-danger-2: #dc2626;
        --vp-c-danger-3: #991b1b;
        --vp-c-danger-soft: rgba(239, 68, 68, 0.15);
      }
      
      /* Layout improvements */
      .dark .vp-layout {
        background-color: var(--vp-c-bg);
      }
      
      /* Sidebar styling - key improvement */
      .dark .vp-sidebar {
        background-color: var(--vp-c-bg) !important;
        border-right: 1px solid var(--vp-c-border);
      }
      
      .dark .vp-sidebar .sidebar-links {
        padding: 16px 0;
      }
      
      /* Sidebar link hover states */
      .dark .vp-sidebar a:hover {
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: 6px;
        transition: background-color 0.2s ease;
      }
      
      .dark .vp-sidebar a.active {
        background-color: var(--vp-c-brand-soft);
        color: var(--vp-c-brand-1);
        border-radius: 6px;
      }
      
      /* Navigation bar */
      .dark .vp-nav {
        background-color: rgba(10, 10, 11, 0.95);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--vp-c-border);
      }
      
      /* Content area */
      .dark .vp-doc {
        background-color: var(--vp-c-bg);
      }
      
      /* Headings */
      .dark .vp-doc h1, 
      .dark .vp-doc h2, 
      .dark .vp-doc h3,
      .dark .vp-doc h4,
      .dark .vp-doc h5,
      .dark .vp-doc h6 {
        color: var(--vp-c-text-1);
        font-weight: 600;
      }
      
      .dark .vp-doc h1 {
        border-bottom: 1px solid var(--vp-c-border);
        padding-bottom: 16px;
      }
      
      /* Inline code */
      .dark .vp-doc code:not(.language-text):not([class*="language-"]) {
        background-color: #111113;
        color: #f1f5f9;
        border: 1px solid #1a1a1d;
        border-radius: 4px;
        padding: 3px 6px;
        font-size: 0.875em;
        font-weight: 500;
      }
      
      /* Code blocks */
      .dark .vp-doc div[class*="language-"] {
        background-color: #111113 !important;
        border: 1px solid #1a1a1d;
        border-radius: 8px;
        margin: 20px 0;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
      }
      
      .dark .vp-doc div[class*="language-"] pre {
        background-color: transparent !important;
        border: none !important;
        border-radius: 0;
        margin: 0;
        padding: 20px;
        overflow-x: auto;
      }
      
      .dark .vp-doc div[class*="language-"] pre code {
        background-color: transparent !important;
        border: none !important;
        padding: 0 !important;
        color: #f1f5f9;
        font-size: 14px;
        line-height: 1.6;
        white-space: pre;
      }
      
      /* Language label */
      .dark .vp-doc div[class*="language-"]::before {
        background-color: #1a1a1d;
        color: rgba(255, 255, 255, 0.6);
        border-bottom: 1px solid #2a2a2e;
        font-size: 12px;
        font-weight: 500;
        padding: 8px 16px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      /* Copy button */
      .dark .vp-doc div[class*="language-"] button.copy {
        background-color: #1a1a1d;
        border: 1px solid #2a2a2e;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 4px;
        transition: all 0.2s ease;
      }
      
      .dark .vp-doc div[class*="language-"] button.copy:hover {
        background-color: #2a2a2e;
        color: rgba(255, 255, 255, 0.9);
        transform: translateY(-1px);
      }
      
      /* Blockquotes */
      .dark .vp-doc blockquote {
        border-left: 4px solid var(--vp-c-brand-1);
        background-color: rgba(236, 72, 153, 0.05);
        color: var(--vp-c-text-2);
        border-radius: 0 6px 6px 0;
        margin: 20px 0;
        padding: 16px 20px;
      }
      
      /* Tables */
      .dark .vp-doc table {
        border-collapse: collapse;
        margin: 20px 0;
        background-color: var(--vp-c-bg-soft);
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--vp-c-border);
      }
      
      .dark .vp-doc th {
        background-color: #1a1a1d;
        color: var(--vp-c-text-1);
        font-weight: 600;
        padding: 12px 16px;
        border-bottom: 1px solid var(--vp-c-border);
      }
      
      .dark .vp-doc td {
        padding: 12px 16px;
        border-bottom: 1px solid var(--vp-c-border);
      }
      
      .dark .vp-doc tr:last-child td {
        border-bottom: none;
      }
      
      /* Links */
      .dark .vp-doc a {
        color: var(--vp-c-brand-1);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .dark .vp-doc a:hover {
        color: var(--vp-c-brand-2);
        text-decoration: underline;
      }
      
      /* Search box */
      .dark .vp-nav .search {
        background-color: #111113;
        border: 1px solid #1a1a1d;
        border-radius: 6px;
      }
      
      .dark .vp-nav .search:focus {
        border-color: var(--vp-c-brand-1);
        box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
      }
      
      /* Custom admonitions/callouts - compact like light mode */
      .dark .custom-block {
        border-radius: 6px;
        padding: 12px 16px;
        margin: 16px 0;
        border-left: 3px solid;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .dark .custom-block.tip {
        background-color: rgba(16, 185, 129, 0.08);
        border-left-color: #10b981;
        color: var(--vp-c-text-1);
      }
      
      .dark .custom-block.warning {
        background-color: rgba(245, 158, 11, 0.08);
        border-left-color: var(--vp-c-warning-1);
        color: var(--vp-c-text-1);
      }
      
      .dark .custom-block.danger {
        background-color: rgba(239, 68, 68, 0.08);
        border-left-color: var(--vp-c-danger-1);
        color: var(--vp-c-text-1);
      }
      
      .dark .custom-block-title {
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 4px;
      }
      
      /* Light mode styles */
      .vp-doc code:not(.language-text):not([class*="language-"]) {
        background-color: #f1f5f9;
        color: #334155;
        border: 1px solid #cbd5e1;
        border-radius: 4px;
        padding: 3px 6px;
        font-size: 0.875em;
        font-weight: 500;
      }
      
      .vp-doc div[class*="language-"] {
        background-color: #f8fafc !important;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin: 20px 0;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }
      
      .vp-doc div[class*="language-"] pre code {
        color: #334155;
      }
      
      .vp-doc div[class*="language-"]::before {
        background-color: #e2e8f0;
        color: #64748b;
        border-bottom: 1px solid #cbd5e1;
      }
      
      .vp-doc blockquote {
        border-left: 4px solid var(--vp-c-brand-1);
        background-color: rgba(236, 72, 153, 0.05);
        color: var(--vp-c-text-2);
        border-radius: 0 6px 6px 0;
        margin: 20px 0;
        padding: 16px 20px;
      }
      
      .vp-doc a {
        color: var(--vp-c-brand-1);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .vp-doc a:hover {
        color: var(--vp-c-brand-2);
        text-decoration: underline;
      }
      
      /* Light mode callouts - compact sizing */
      .custom-block {
        border-radius: 6px;
        padding: 12px 16px;
        margin: 16px 0;
        border-left: 3px solid;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .custom-block.tip {
        background-color: rgba(16, 185, 129, 0.08);
        border-left-color: #10b981;
      }
      
      .custom-block.warning {
        background-color: rgba(245, 158, 11, 0.08);
        border-left-color: var(--vp-c-warning-1);
      }
      
      .custom-block.danger {
        background-color: rgba(239, 68, 68, 0.08);
        border-left-color: var(--vp-c-danger-1);
      }
      
      .custom-block-title {
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 4px;
      }
    `]
  ]
})
