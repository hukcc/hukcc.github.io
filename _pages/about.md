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
{: #news}

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
{: #experience}

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
{: #publications}

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

{% for pub in site.data.publications %}
<div class="pub-item" {% if pub.id %}id="{{ pub.id }}"{% endif %} data-first-author="{{ pub.first_author }}" data-status="{{ pub.status }}" data-topic="{{ pub.topic }}">
  <div class="pub-badge">{{ pub.badge }}</div>
  <div class="pub-thumb">
    <span class="pub-thumb-link">
      <img class="pub-thumb-img" src="{{ pub.thumb }}" alt="{{ pub.thumb_alt }}" loading="lazy" onerror="this.style.display='none'">
      <img class="pub-thumb-preview" src="{{ pub.thumb }}" alt="" aria-hidden="true" loading="lazy">
    </span>
  </div>
  <div class="pub-content">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-tldr"><span class="tldr-label">TL;DR:</span> {{ pub.tldr }}</div>
    {% if pub.links.size > 0 %}
    <div class="pub-links">
      {% for link in pub.links %}
        {% if link.url_key %}
          <a href="{{ site.author[link.url_key] | default: link.url_fallback }}" class="pub-link" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        {% else %}
          <a href="{{ link.url }}" class="pub-link" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        {% endif %}
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}

<!-- Styles: _sass/layout/_about.scss  |  Filter JS: assets/js/pub-filter.js -->
<script src="/assets/js/pub-filter.js" defer></script>

---
# Academic Service
{: #academic-service}

<div class="info-card">
  <div class="info-card__row">
    <span class="info-card__label">Conference Reviewer</span>
    <span class="info-card__value">FG, ARR</span>
  </div>
  <div class="info-card__row">
    <span class="info-card__label">Journal Reviewer</span>
    <span class="info-card__value"><a href="https://dl.acm.org/journal/tkdd" target="_blank" rel="noopener noreferrer">ACM Transactions on Knowledge Discovery from Data (TKDD)</a></span>
  </div>
</div>

---
# Honors & Awards
{: #honors}

<div class="info-card">
  <ul class="info-card__list">
    <li><strong>National Scholarship</strong>, China, 2021</li>
    <li><strong>Outstanding Student</strong>, Xidian University, 2022</li>
    <li><strong>Undergraduate Computer Design Competition</strong> (1st Prize), China, 2021</li>
    <li><strong>RoboMaster National Robotics Competition</strong> (2nd Prize), China, 2019</li>
    <li><strong>ICRA AI Challenge</strong> (3rd Prize), 2019</li>
  </ul>
</div>

---
# Teaching Experience
{: #teaching}

<div class="info-card">
  <div class="info-card__row">
    <span class="info-card__label">Teaching Assistant</span>
    <span class="info-card__value">DS 5110 <em>Essentials of Data Science</em>, Fall 2025; DS 5020 <em>Fundamentals of Linear Algebra and Probability</em>, Spring 2026</span>
  </div>
</div>

---
# Contact
{: #contact}

<div class="info-card">
  <div class="info-card__row">
    <span class="info-card__label">Email</span>
    <span class="info-card__value"><a href="mailto:yiyang.huang.hukcc@gmail.com">yiyang.huang.hukcc@gmail.com</a> / <a href="mailto:huang.yiyan@northeastern.edu">huang.yiyan@northeastern.edu</a></span>
  </div>
  <div class="info-card__row">
    <span class="info-card__label">WeChat</span>
    <span class="info-card__value">hukcc369</span>
  </div>
</div>

---
# Visitor Map
{: #visitor-map}

<div class="visit-map visit-map--footer" aria-label="Visitor map">
  <div class="visit-map__widget">
    <script
      type="text/javascript"
      id="clustrmaps"
      src="https://clustrmaps.com/map_v2.js?d=MaMamu8PtDHuTFu97IS3PgGn8wtZ7iIpHvv4NF9MTN8&cl=ffffff&w=a&t=n"
      async
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
