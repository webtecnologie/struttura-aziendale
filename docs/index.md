---
layout: default
title: Home
description: Soluzioni digitali per il tuo business. Sviluppo web moderno, integrazioni AI e tecnologie cloud su misura.
lang: it
permalink: /
---

<div class="wt-hero">
  <h1>Innovazione Digitale su Misura</h1>
  <p>
    Trasformiamo le tue idee in soluzioni tecnologiche performanti. 
    Dallo sviluppo React alle integrazioni Microsoft 365, guidiamo il tuo business verso il futuro.
  </p>
  <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
    <a href="/servizi" class="wt-tab-btn active" style="text-decoration: none;">Scopri i Servizi</a>
    <a href="/contatti" class="wt-tab-btn" style="text-decoration: none;">Contattaci</a>
  </div>
</div>

<div class="wt-tabs-container">
  <div class="wt-tabs-nav">
    <button class="wt-tab-btn active" onclick="WT.switchTab('web', this)">Sviluppo Web</button>
    <button class="wt-tab-btn" onclick="WT.switchTab('ai', this)">AI & Automation</button>
    <button class="wt-tab-btn" onclick="WT.switchTab('cloud', this)">Cloud & Enterprise</button>
  </div>

  <div id="web" class="wt-tab-content active">
    <h3>🌐 Sviluppo Web Moderno</h3>
    <p>Realizziamo applicazioni web scalabili e veloci con le tecnologie più avanzate del mercato.</p>
    <ul>
      <li>
        <strong>Frontend Performance</strong>
        <p>Utilizziamo React e Next.js per interfacce utente fluide e ottimizzate SEO.</p>
      </li>
      <li>
        <strong>Architetture Backend</strong>
        <p>Soluzioni robuste con Node.js e Python per gestire carichi elevati.</p>
      </li>
      <li>
        <strong>Design Responsivo</strong>
        <p>Interfacce che si adattano perfettamente a qualsiasi dispositivo.</p>
      </li>
    </ul>
  </div>

  <div id="ai" class="wt-tab-content">
    <h3>🤖 AI Interna & Automazione</h3>
    <p>Integriamo l'intelligenza artificiale nei tuoi processi aziendali per massimizzare la produttività.</p>
    <ul>
      <li>
        <strong>Custom LLM & RAG</strong>
        <p>Assistenti virtuali addestrati sui tuoi dati privati per risposte precise.</p>
      </li>
      <li>
        <strong>Process Automation</strong>
        <p>Automatizziamo i task ripetitivi liberando il tempo del tuo team.</p>
      </li>
      <li>
        <strong>Analisi Predittiva</strong>
        <p>Sfrutta i dati per prevedere i trend e prendere decisioni migliori.</p>
      </li>
    </ul>
  </div>

  <div id="cloud" class="wt-tab-content">
    <h3>☁️ Cloud & Microsoft 365</h3>
    <p>Ottimizziamo il tuo ecosistema aziendale con soluzioni cloud integrate e sicure.</p>
    <ul>
      <li>
        <strong>SharePoint & SPFx</strong>
        <p>Web part e personalizzazioni avanzate per la tua intranet moderna.</p>
      </li>
      <li>
        <strong>Azure Cloud Services</strong>
        <p>Infrastrutture scalabili e sicure per le tue applicazioni enterprise.</p>
      </li>
      <li>
        <strong>Microsoft Graph API</strong>
        <p>Integrazioni profonde tra i tool Microsoft e le tue app custom.</p>
      </li>
    </ul>
  </div>
</div>

<div style="margin-top: 80px; text-align: center;">
  <h2>Pronto a iniziare?</h2>
  <p style="color: var(--text-muted); margin-bottom: 30px;">Ogni progetto inizia con una conversazione. Raccontaci la tua visione.</p>
  <a href="struttura-aziendale/contatti" class="wt-tab-btn active" style="text-decoration: none; padding: 15px 40px; font-size: 1.1rem;">Parliamo del tuo progetto</a>
</div>
