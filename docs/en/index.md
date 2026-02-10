---
layout: default
title: Home
description: Digital solutions for your business. Modern web development, AI integrations, and tailor-made cloud technologies.
lang: en
permalink: /en/
---

<div class="wt-hero">
  <h1>Tailored Digital Innovation</h1>
  <p>
    We turn your ideas into high-performance technological solutions. 
    From React development to Microsoft 365 integrations, we guide your business into the future.
  </p>
  <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
    <a href="/en/services/" class="wt-tab-btn active" style="text-decoration: none;">Explore Services</a>
    <a href="/en/contact/" class="wt-tab-btn" style="text-decoration: none;">Contact Us</a>
  </div>
</div>

<div class="wt-tabs-container">
  <div class="wt-tabs-nav">
    <button class="wt-tab-btn active" onclick="WT.switchTab('web', this)">Web Development</button>
    <button class="wt-tab-btn" onclick="WT.switchTab('ai', this)">AI & Automation</button>
    <button class="wt-tab-btn" onclick="WT.switchTab('cloud', this)">Cloud & Enterprise</button>
  </div>

  <div id="web" class="wt-tab-content active">
    <h3>🌐 Modern Web Development</h3>
    <p>We build scalable and fast web applications with the most advanced technologies on the market.</p>
    <ul>
      <li>
        <strong>Frontend Performance</strong>
        <p>We use React and Next.js for fluid and SEO-optimized user interfaces.</p>
      </li>
      <li>
        <strong>Backend Architectures</strong>
        <p>Robust solutions with Node.js and Python to handle high loads.</p>
      </li>
      <li>
        <strong>Responsive Design</strong>
        <p>Interfaces that adapt perfectly to any device.</p>
      </li>
    </ul>
  </div>

  <div id="ai" class="wt-tab-content">
    <h3>🤖 In-house AI & Automation</h3>
    <p>We integrate artificial intelligence into your business processes to maximize productivity.</p>
    <ul>
      <li>
        <strong>Custom LLM & RAG</strong>
        <p>Virtual assistants trained on your private data for precise answers.</p>
      </li>
      <li>
        <strong>Process Automation</strong>
        <p>We automate repetitive tasks, freeing up your team's time.</p>
      </li>
      <li>
        <strong>Predictive Analytics</strong>
        <p>Leverage data to forecast trends and make better decisions.</p>
      </li>
    </ul>
  </div>

  <div id="cloud" class="wt-tab-content">
    <h3>☁️ Cloud & Microsoft 365</h3>
    <p>We optimize your business ecosystem with integrated and secure cloud solutions.</p>
    <ul>
      <li>
        <strong>SharePoint & SPFx</strong>
        <p>Advanced web parts and customizations for your modern intranet.</p>
      </li>
      <li>
        <strong>Azure Cloud Services</strong>
        <p>Scalable and secure infrastructure for your enterprise applications.</p>
      </li>
      <li>
        <strong>Microsoft Graph API</strong>
        <p>Deep integrations between Microsoft tools and your custom apps.</p>
      </li>
    </ul>
  </div>
</div>

<div style="margin-top: 80px; text-align: center;">
  <h2>Ready to start?</h2>
  <p style="color: var(--text-muted); margin-bottom: 30px;">Every project begins with a conversation. Tell us your vision.</p>
  <a href="/en/contact/" class="wt-tab-btn active" style="text-decoration: none; padding: 15px 40px; font-size: 1.1rem;">Talk about your project</a>
</div>
