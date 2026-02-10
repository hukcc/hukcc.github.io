---
permalink: /
title: "About Me"
excerpt: "Ph.D. Student | Northeastern University"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="intro-block">
  <p>
    I am a second-year Ph.D. student in the College of Engineering at
    <span class="kw">Northeastern University</span>, advised by
    <a class="kw" href="https://www1.ece.neu.edu/~yunfu/">Prof. Yun Raymond Fu</a> in the
    <a href="https://fulab.sites.northeastern.edu/">SMILE Lab</a>.
  </p>
  <p>
    I received my B.S. and M.S. degrees from <span class="kw">Xidian University</span>,
    advised by <a class="kw" href="https://web.xidian.edu.cn/xliang/en/index.html">Prof. Xuefeng Liang</a>.
    During my master's studies, I visited <span class="kw">Kyoto University</span>,
    working with <a class="kw" href="https://kdb.iimc.kyoto-u.ac.jp/profile/en.a61c204316cdb5fc.html#display-items_basic-information">Prof. Takatsune Kumada</a>.
  </p>
  <div class="intro-callout">
    <span class="intro-callout__label">Research interests</span>
    <span class="intro-callout__text">Multimodal LLMs | Efficiency | Reliability | Hallucination Detection &amp; Mitigation | Video Understanding | Layout Understanding</span>
  </div>
  <p class="intro-note">
    Actively seeking internship opportunities.
  </p>
</div>


---
# News

<div class="news-item news-item--pinned">
  <span class="news-date">TOP</span>
  <span class="news-text">Video LLM hallucination survey on <a href="{{ site.author.techrxiv_survey | default: '#' }}" rel="noopener noreferrer">TechRxiv</a> &amp; <a href="https://github.com/hukcc/Awesome-Video-Hallucination" rel="noopener noreferrer">GitHub</a>. Contributions welcome.</span>
</div>
<div class="news-container">
  <div class="news-item">
    <span class="news-date">Jan. 2026</span>
    <span class="news-text">One paper <em>SHIELD</em> accepted by <span class="news-venue">ICLR 2026</span></span>
  </div>
  <div class="news-item">
    <span class="news-date">Dec. 2025</span>
    <span class="news-text">Passed the Ph.D. Qualifying Exam, thanks to my advisor and committee members.</span>
  </div>
  <div class="news-item">
    <span class="news-date">Aug. 2025</span>
    <span class="news-text">One paper <em>D-CoDe</em> accepted by <span class="news-venue">EMNLP 2025</span></span>
  </div>
  <div class="news-item">
    <span class="news-date">May 2025</span>
    <span class="news-text">Started Research Internship at <span class="news-venue">Adobe Research</span>.</span>
  </div>
  <div class="news-item">
    <span class="news-date">Sep. 2024</span>
    <span class="news-text">Started my journey at <span class="news-venue">Northeastern University</span>.</span>
  </div>
</div>

---
# Experience

<div class="exp-list">
  <div class="exp-item">
    <div class="exp-text">
      <div class="exp-org">SMILE Lab, Northeastern University, Boston</div>
      <div class="exp-role">Ph.D. Student, Sep. 2024 ~ Now</div>
      <div class="exp-supervisor">Supervisor: Prof. Yun Raymond Fu</div>
    </div>
    <div class="exp-media">
      <img src="/images/neu.png" alt="Northeastern University">
    </div>
  </div>
  <div class="exp-item">
    <div class="exp-text">
      <div class="exp-org">Adobe Research, San Jose</div>
      <div class="exp-role">Research Intern, May 2025 – Nov 2025</div>
      <div class="exp-supervisor">Mentor: Zhaowen Wang; Simon Jenni; Jing Shi; </div>
    </div>
    <div class="exp-media">
      <img src="/images/Adobe.png" alt="Adobe Research">
    </div>
  </div>
  <div class="exp-item">
    <div class="exp-text">
      <div class="exp-org">Kyoto University, Kyoto</div>
      <div class="exp-role">Research Student, Sep 2023 – Mar 2024</div>
      <div class="exp-supervisor">Supervisor: Prof. Takatsune Kumada</div>
    </div>
    <div class="exp-media">
      <img src="/images/Kyoto University Emblem.svg" alt="Kyoto University">
    </div>
  </div>
  <div class="exp-item">
    <div class="exp-text">
      <div class="exp-org">Xidian University, Xi'an</div>
      <div class="exp-role">Master Student, Sep. 2021 ~ Jun. 2024</div>
      <div class="exp-role">Undergraduate Student, Sep. 2017 ~ Jun. 2021</div>
      <div class="exp-supervisor">Supervisor: Prof. Xuefeng Liang</div>
    </div>
    <div class="exp-media">
      <img src="/images/xdu.png" alt="Xidian University">
    </div>
  </div>
</div>

---
# Publications [[Google Scholar](https://scholar.google.com/citations?user=A0H2ZYQAAAAJ)]

<div class="pub-filter" role="group" aria-label="Filter publications">
  <label class="pub-filter__label">Role</label>
  <select class="pub-filter__select" id="pub-filter-role" aria-label="Filter by role">
    <option value="all">All</option>
    <option value="first">First Author</option>
    <option value="co">Co-author</option>
  </select>
  <label class="pub-filter__label">Status</label>
  <select class="pub-filter__select" id="pub-filter-status" aria-label="Filter by status">
    <option value="all">All</option>
    <option value="published">Published</option>
    <option value="preprint">Preprint</option>
  </select>
  <label class="pub-filter__label">Topic</label>
  <select class="pub-filter__select" id="pub-filter-topic" aria-label="Filter by topic">
    <option value="all">All</option>
    <option value="hallucination">Hallucination</option>
    <option value="video">Video</option>
    <option value="layout">Layout</option>
    <option value="other">Other</option>
  </select>
</div>

<div class="pub-item" id="pub-videollm-hallucination" data-first-author="true" data-status="preprint" data-topic="hallucination video">
  <div class="pub-badge">Submitted to ARR</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="/images/pub_arr_hallucination.png" alt="Thumbnail: Video LLM Hallucination Survey paper" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="/images/pub_arr_hallucination.png" alt="" aria-hidden="true" role="presentation">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">Distorted or Fabricated? A Survey on Hallucination in Video LLMs</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Yitian Zhang, Yizhou Wang, Mingyuan Zhang, Liang Shi, Huimin Zeng, Yun Fu</div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> Systematic survey on hallucination in Video LLMs: taxonomy, benchmarks, and mitigations. Curated <a href="https://github.com/hukcc/Awesome-Video-Hallucination" rel="noopener noreferrer">repo</a> (19 benchmarks, 23 methods); contributions welcome.</div>
    <div class="pub-links">
      <a href="{{ site.author.techrxiv_survey | default: '#' }}" class="pub-link" rel="noopener noreferrer">📄 Paper</a>
      <a href="https://github.com/hukcc/Awesome-Video-Hallucination" class="pub-link" rel="noopener noreferrer">📚 Repo</a>
    </div>
  </div>
</div>

<div class="pub-item" id="pub-mason" data-first-author="true" data-status="preprint" data-topic="layout">
  <div class="pub-badge">Submitted to CVPR</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="/images/pub_mason.png" alt="Thumbnail: MASON layout understanding paper" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="/images/pub_mason.png" alt="" aria-hidden="true" role="presentation">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">MASON: Compositional Design Layout Understanding in VLMs through Multimodal Alignment and Structural Perception</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Zhaowen Wang, Simon Jenni, Jing Shi, Yun Fu</div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> Introduces a compositional layout understanding framework that integrates multimodal alignment and structural perception to reason about interacting elements in layered design layouts.</div>
  </div>
</div>

<div class="pub-item" id="pub-shield" data-first-author="true" data-status="published" data-topic="hallucination">
  <div class="pub-badge">ICLR 2026</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="/images/pub_shield.png" alt="Thumbnail: SHIELD hallucination mitigation paper" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="/images/pub_shield.png" alt="" aria-hidden="true" role="presentation">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">SHIELD: Suppressing Hallucinations In LVLM Encoders via Bias and Vulnerability Defense</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Liang Shi, Yitian Zhang, Yi Xu, Yun Fu</div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> Introduces a training-free framework that mitigates object hallucinations in LVLMs by addressing bias and vulnerability at the visual encoder level.</div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.16596" class="pub-link">📄 Paper</a>
      <a href="https://github.com/hukcc/SHIELD" class="pub-link">💻 Code</a>
    </div>
  </div>
</div>

<div class="pub-item" id="pub-dcode" data-first-author="true" data-status="published" data-topic="video">
  <div class="pub-badge">EMNLP 2025</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="/images/pub_dcode.png" alt="Thumbnail: D-CoDe video understanding paper" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="/images/pub_dcode.png" alt="" aria-hidden="true" role="presentation">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">D-CoDe: Scaling Image-Pretrained VLMs to Video via Dynamic Compression and Question Decomposition</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Yizhou Wang, Yun Fu</div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> Proposes a training-free framework that combines dynamic visual compression and question decomposition to scale image-pretrained VLMs to long video understanding.</div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.08818" class="pub-link">📄 Paper</a>
      <a href="https://github.com/hukcc/D-CoDe" class="pub-link">💻 Code</a>
    </div>
  </div>
</div>

<div class="pub-item" data-first-author="false" data-status="published" data-topic="other">
  <div class="pub-badge">ICASSP 2025</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="/images/pub_lipreading.png" alt="Thumbnail: LipReading low-resource languages paper" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="/images/pub_lipreading.png" alt="" aria-hidden="true" role="presentation">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">LipReading for Low-resource Languages by Language Dynamic LoRA</div>
    <div class="pub-authors">Shuai Zou, Xuefeng Liang, <strong>Yiyang Huang</strong></div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> Introduces dynamic low-rank fine-tuning and multilingual instruction tuning to improve lipreading performance in low-resource languages.</div>
    <div class="pub-links">
      <a href="https://ieeexplore.ieee.org/abstract/document/10889645" class="pub-link">📄 Paper</a>
    </div>
  </div>
</div>

<div class="pub-item" data-first-author="true" data-status="published" data-topic="other">
  <div class="pub-badge">ACMMM 2021</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="/images/pub_callip.png" alt="Thumbnail: CALLip lipreading paper" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="/images/pub_callip.png" alt="" aria-hidden="true" role="presentation">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">CALLip: Lipreading using Contrastive and Attribute Learning</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Xuefeng Liang, Chaowei Fang</div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> Combines attribute learning and audio-visual contrastive learning to improve robustness and discriminability in lipreading.</div>
    <div class="pub-links">
      <a href="https://dl.acm.org/doi/10.1145/3474085.3475420" class="pub-link">📄 Paper</a>
    </div>
  </div>
</div>

<style>
/* Intro Styles */
.intro-block {
  margin: 0.5em 0 1.2em;
  padding: 0.6em 0 0.2em;
}

.intro-block p {
  margin: 0 0 0.7em;
  line-height: 1.7;
}

.intro-callout {
  margin-top: 0.5em;
  margin-bottom: 0.6em;
  padding: 0.5em 0.75em;
  background: linear-gradient(135deg, #eef4ff 0%, #f0f6ff 100%);
  border-left: 4px solid #1f6feb;
  border-radius: 0 6px 6px 0;
}

.intro-callout__label {
  font-weight: 600;
  font-size: 0.9em;
  color: #1f6feb;
  display: block;
  margin-bottom: 0.15em;
}

.intro-callout__text {
  font-size: 0.9em;
  line-height: 1.5;
  color: var(--global-text-color, #333);
}

.intro-note {
  display: inline-block;
  padding: 0.04em 0.22em;
  border-radius: 6px;
  background: #eef4ff;
  color: #1f6feb;
  border: none;
  margin-top: 3em;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 1em;
}

.intro-meta {
  color: var(--global-text-color-light, #666);
}

.kw {
  font-weight: 600;
  color: var(--global-text-color, #222);
}

.exp-list {
  margin: 0.6em 0 1.2em;
}

.exp-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  padding: 0.55em 0.75em;
  margin-bottom: 0.5em;
  background: #f6f8fc;
  border-left: 3px solid var(--global-link-color, #007bff);
  border-radius: 6px;
}

.exp-text {
  flex: 1;
  min-width: 0;
}

.exp-media {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-media img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.exp-org {
  font-weight: 600;
  color: var(--global-text-color, #222);
  font-size: 0.95em;
}

.exp-role {
  margin-top: 0.15em;
  color: var(--global-text-color, #333);
  font-size: 0.9em;
}

.exp-supervisor {
  margin-top: 0.1em;
  color: var(--global-text-color-light, #666);
  font-size: 0.85em;
}

/* News Styles */
.news-container {
  margin: 0 0 1em;
  max-height: 160px; /* shows about 2-3 items */
  overflow-y: auto;
  padding-right: 6px;
}

.news-item {
  display: flex;
  align-items: center;
  padding: 0.45em 0.65em;
  margin-bottom: 0.4em;
  background: linear-gradient(135deg, #f6f8fc 0%, #eef2f8 100%);
  border-left: 4px solid var(--global-link-color, #007bff);
  border-radius: 0 8px 8px 0;
  line-height: 1.45;
  gap: 0.5em;
}

.news-item--pinned {
  margin-bottom: 0.5em;
  border-left-color: #1f6feb;
  background: linear-gradient(135deg, #eef4ff 0%, #e8f0ff 100%);
}

.news-item--pinned .news-date {
  background: #1f6feb;
  color: #fff;
}

.news-date {
  font-weight: 700;
  color: #1f6feb;
  background: #eef4ff;
  padding: 0.06em 0.4em;
  border-radius: 6px;
  letter-spacing: 0.2px;
  font-size: 0.82em;
}

.news-text {
  flex: 1;
  font-size: 0.88em;
}

.news-venue {
  font-weight: 600;
  color: var(--global-link-color, #007bff);
}

/* Publication Filter */
.pub-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25em 0.6em;
  margin-bottom: 0.8em;
}

.pub-filter__label {
  font-size: 0.78em;
  font-weight: 600;
  color: var(--global-text-color-light, #666);
}

.pub-filter__select {
  font-size: 0.78em;
  padding: 0.25em 0.5em;
  border: 1px solid #c9dafd;
  border-radius: 6px;
  background: #fff;
  color: var(--global-text-color, #333);
  cursor: pointer;
}
.pub-filter__select:focus-visible {
  outline: 2px solid var(--global-link-color, #007bff);
  outline-offset: 2px;
}

/* Publication Styles */
.pub-item {
  display: flex;
  align-items: stretch;
  margin-bottom: 0.6em;
  padding: 0.5em;
  background: #f6f8fc;
  border: 1px solid #e4e9f2;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  gap: 0.5em;
  position: relative;
}

.pub-item:hover {
  box-shadow: 0 6px 16px rgba(0,0,0,0.18);
}

.pub-thumb {
  flex-shrink: 0;
  width: 120px;
  height: auto;
  background: #f6f8fc;
  border: 1px solid #e4e9f2;
  border-radius: 4px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}

.pub-thumb-link {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}

.pub-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: zoom-in;
  border-radius: 4px;
}

.pub-thumb-preview {
  position: absolute;
  left: calc(100% + 10px);
  top: 0;
  width: auto;
  height: auto;
  max-width: 55vw;
  max-height: 50vh;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  object-fit: contain;
  object-position: center;
  display: none;
  z-index: 10;
}

.pub-thumb-link:hover .pub-thumb-preview {
  display: block;
}

.pub-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.12em;
}

.pub-title {
  font-weight: bold;
  font-size: 0.9em;
  line-height: 1.25;
  color: var(--global-text-color, #333);
}

.pub-authors {
  font-size: 0.8em;
  color: var(--global-text-color-light, #666);
}

.pub-badge {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 0.7em;
  padding: 0.12em 0.38em;
  border-radius: 6px;
  background: #eef4ff;
  color: #1f5bd6;
  border: 1px solid #c9dafd;
  z-index: 2;
  pointer-events: none;
  font-weight: 600;
}

.pub-tldr {
  margin-bottom: 0.2em;
  padding: 0.15em 0.4em;
  background: #f2f6ff;
  border-left: 3px solid #c9dafd;
  border-radius: 4px;
  color: var(--global-text-color-light, #666);
  font-size: 0.78em;
  line-height: 1.35;
}

.tldr-label {
  font-weight: 600;
  color: var(--global-text-color, #333);
}

.pub-links {
  display: flex;
  gap: 0.45em;
  flex-wrap: wrap;
  margin-top: 0;
}

.pub-link {
  font-size: 0.68em;
  padding: 0.18em 0.45em;
  background: #1f6feb;
  color: #fff !important;
  border: 1px solid #1f6feb;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s;
}

.pub-link:hover {
  background: #0b5ed7;
  text-decoration: none;
}

.intro-block a,
.news-container a,
.pub-item a,
.exp-list a {
  text-decoration: none;
}

/* Publications 标题中的 Google Scholar 链接不显示下划线 */
.page__content h1 a {
  text-decoration: none;
}

/* Responsive: 平板 / 小屏 */
@media (max-width: 900px) {
  .intro-block {
    margin: 0.4em 0 1em;
    padding: 0.4em 0 0.15em;
  }

  .intro-callout {
    padding: 0.4em 0.6em;
  }

  .intro-callout__text {
    font-size: 0.88em;
  }

  .pub-item {
    flex-direction: column;
  }

  .pub-thumb {
    width: 100%;
    height: 140px;
  }

  .pub-thumb-preview {
    display: none !important;
  }

  .pub-meta-row {
    justify-content: flex-start;
  }

  .exp-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5em 0.6em;
  }

  .exp-media {
    width: 64px;
    height: 64px;
  }

  .pub-badge {
    font-size: 0.72em;
    padding: 0.12em 0.38em;
    font-weight: 600;
  }
}

/* Responsive: 手机 */
@media (max-width: 600px) {
  .intro-block p {
    font-size: 0.98em;
    line-height: 1.65;
  }

  .intro-callout {
    padding: 0.35em 0.5em;
    margin-top: 0.4em;
  }

  .intro-callout__label {
    font-size: 0.86em;
  }

  .intro-callout__text {
    font-size: 0.84em;
    line-height: 1.45;
  }

  .intro-note {
    font-size: 0.94em;
    margin-top: 2.2em;
  }

  .news-container {
    max-height: 140px;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 0.8em;
  }

  .news-item {
    padding: 0.4em 0.5em;
    gap: 0.4em;
  }

  .news-date {
    font-size: 0.78em;
  }

  .news-text {
    font-size: 0.85em;
  }

  .exp-list {
    margin: 0.5em 0 1em;
  }

  .exp-item {
    padding: 0.45em 0.5em;
    margin-bottom: 0.4em;
    gap: 0.6em;
  }

  .exp-org {
    font-size: 0.9em;
  }

  .exp-role,
  .exp-supervisor {
    font-size: 0.86em;
  }

  .exp-media {
    width: 56px;
    height: 56px;
  }

  .pub-filter {
    gap: 0.2em 0.4em;
    margin-bottom: 0.6em;
  }

  .pub-filter__label {
    font-size: 0.74em;
  }

  .pub-filter__select {
    font-size: 0.74em;
    padding: 0.35em 0.5em;
    min-height: 2.25em;
    -webkit-tap-highlight-color: transparent;
  }

  .pub-item {
    padding: 0.4em 0.45em;
    margin-bottom: 0.5em;
    gap: 0.4em;
  }

  .pub-thumb {
    height: 130px;
  }

  .pub-title {
    font-size: 0.86em;
    line-height: 1.22;
    word-break: break-word;
  }

  .pub-authors {
    font-size: 0.76em;
  }

  .pub-tldr {
    font-size: 0.75em;
    padding: 0.12em 0.35em;
    line-height: 1.32;
  }

  .pub-links {
    gap: 0.4em;
  }

  .pub-link {
    font-size: 0.7em;
    padding: 0.35em 0.6em;
    min-height: 2.5em;
    min-width: 2.8em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
  }
}

/* Responsive: 小屏手机 */
@media (max-width: 480px) {
  .page__content h1 {
    font-size: 1.5rem;
    word-break: break-word;
  }

  .page__content h2 {
    font-size: 1.2rem;
  }

  .intro-block p {
    font-size: 0.95em;
  }

  .pub-title {
    font-size: 0.84em;
  }

  .pub-link {
    padding: 0.4em 0.65em;
  }

  /* 筛选器垂直堆叠，便于小屏操作 */
  .pub-filter {
    flex-direction: column;
    align-items: stretch;
    gap: 0.4em;
  }
  .pub-filter__select {
    min-height: 44px;
    min-width: 44px;
  }
}

/* 可访问性：键盘焦点样式 */
.pub-link:focus-visible,
.exp-item a:focus-visible {
  outline: 2px solid var(--global-link-color, #007bff);
  outline-offset: 2px;
}

</style>

<script>
(function() {
  var filterRole = 'all', filterStatus = 'all', filterTopic = 'all';

  function showHide() {
    document.querySelectorAll('.pub-item').forEach(function(el) {
      var first = el.getAttribute('data-first-author');
      var status = el.getAttribute('data-status');
      var topic = (el.getAttribute('data-topic') || '').split(/\s+/);

      var matchRole = filterRole === 'all' ||
        (filterRole === 'first' && first === 'true') ||
        (filterRole === 'co' && first === 'false');
      var matchStatus = filterStatus === 'all' || status === filterStatus;
      var matchTopic = filterTopic === 'all' || topic.indexOf(filterTopic) !== -1;

      el.style.display = (matchRole && matchStatus && matchTopic) ? '' : 'none';
    });
  }

  function onChange() {
    var roleEl = document.getElementById('pub-filter-role');
    var statusEl = document.getElementById('pub-filter-status');
    var topicEl = document.getElementById('pub-filter-topic');
    if (roleEl) filterRole = roleEl.value;
    if (statusEl) filterStatus = statusEl.value;
    if (topicEl) filterTopic = topicEl.value;
    showHide();
  }

  var roleEl = document.getElementById('pub-filter-role');
  var statusEl = document.getElementById('pub-filter-status');
  var topicEl = document.getElementById('pub-filter-topic');
  if (roleEl) roleEl.addEventListener('change', onChange);
  if (statusEl) statusEl.addEventListener('change', onChange);
  if (topicEl) topicEl.addEventListener('change', onChange);
})();
</script>

---
# Academic Service
- **Conference Reviewer**:  
  FG, ARR
- **Journal Reviewer**:  
  [ACM Transactions on Knowledge Discovery from Data (TKDD)](https://dl.acm.org/journal/tkdd)  

---
# Honors & Awards

- Outstanding Student, Xidian University, 2022  
- National Scholarship, China, 2021  
- Undergraduate Computer Design Competition (1st Prize), China, 2021  
- RoboMaster National Robotics Competition (2nd Prize), China, 2019  
- ICRA AI Challenge (3rd Prize), 2019  

---
# Teaching Experience

- **Teaching Assistant (TA)**: DS 5110 *Essentials of Data Science*, Fall 2025; DS 5020 *Fundamentals of Linear Algebra and Probability*, Spring 2026  

---
# Contact

Email: yiyang.huang.hukcc (at) gmail (dot) com / huang.yiyan (at) northeastern (dot) edu  
WeChat: hukcc369  

---
# Visitor Map

<div class="visit-map visit-map--footer" aria-label="Visitor map">
  <div class="visit-map__widget">
    <script
      type="text/javascript"
      id="clustrmaps"
      src="https://clustrmaps.com/map_v2.js?d=MaMamu8PtDHuTFu97IS3PgGn8wtZ7iIpHvv4NF9MTN8&cl=ffffff&w=a&t=n"
    ></script>
    <noscript>
      <a href="https://clustrmaps.com/site/1c94f" title="ClustrMaps" rel="nofollow noopener">
        <img
          src="https://clustrmaps.com/map_v2.png?d=MaMamu8PtDHuTFu97IS3PgGn8wtZ7iIpHvv4NF9MTN8&cl=ffffff&w=1200&t=n"
          alt="Visitor Map"
          loading="lazy"
        />
      </a>
    </noscript>
  </div>
</div>
