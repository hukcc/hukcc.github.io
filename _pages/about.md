---
permalink: /
title: "About Me"
excerpt: "Ph.D. Student | Northeastern University"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a second-year Ph.D. student in the College of Engineering at Northeastern University, advised by [Prof. Yun Raymond Fu](https://www1.ece.neu.edu/~yunfu/) in the [SMILE Lab](https://fulab.sites.northeastern.edu/).  
Before joining Northeastern, I received my B.S. and M.S. degrees from Xidian University, China, where I was advised by [Prof. Xuefeng Liang](https://web.xidian.edu.cn/xliang/en/index.html).  
During my master’s studies, I also spent six months at Kyoto University, working with [Prof. Takatsune Kumada](https://kdb.iimc.kyoto-u.ac.jp/profile/en.a61c204316cdb5fc.html#display-items_basic-information).

My research interests include **multimodal large language models (MLLMs)** and **vision language models (VLMs)**, with a focus on **hallucination detection & mitigation** [[SHIELD]](#pub-shield), **video understanding** [[D-CoDe]](#pub-dcode), and **Layout Understanding** [[MASON]](#pub-mason).

In Summer 2025, I interned at **Adobe Research**.

Full CV: [Curriculum Vitae](../files/cv-yiyang.pdf)


---
# News

<div class="news-container">
  <div class="news-item">
    <span class="news-icon">🎉</span>
    <span class="news-date">[Jan. 2026]</span> One paper <em>SHIELD</em> accepted by <span class="venue-badge venue-iclr">ICLR 2026</span>
  </div>
  <div class="news-item">
    <span class="news-icon">📄</span>
    <span class="news-date">[Aug. 2025]</span> One paper <em>D-CoDe</em> accepted by <span class="venue-badge venue-emnlp">EMNLP 2025</span>
  </div>
</div>

---
# Publications ([Google Scholar](https://scholar.google.com/citations?user=A0H2ZYQAAAAJ))

<div class="pub-item" id="pub-mason">
  <div class="pub-thumb">
    <img src="/images/pub_mason.png" alt="MASON" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">MASON: Compositional Design Layout Understanding in VLMs through Multimodal Alignment and Structural Perception</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Zhaowen Wang, Simon Jenni, Jing Shi, Yun Fu</div>
    <div class="pub-venue"><em>CVPR under-review</em></div>
  </div>
</div>

<div class="pub-item" id="pub-shield">
  <div class="pub-thumb">
    <img src="/images/pub_shield.png" alt="SHIELD" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">SHIELD: Suppressing Hallucinations In LVLM Encoders via Bias and Vulnerability Defense</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Liang Shi, Yitian Zhang, Yi Xu, Yun Fu</div>
    <div class="pub-venue"><em>International Conference on Learning Representations (ICLR)</em>, 2026</div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.16596" class="pub-link">📄 Paper</a>
      <a href="https://arxiv.org/abs/2510.16596" class="pub-link">💻 Code</a>
    </div>
  </div>
</div>

<div class="pub-item" id="pub-dcode">
  <div class="pub-thumb">
    <img src="/images/pub_dcode.png" alt="D-CoDe" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">D-CoDe: Scaling Image-Pretrained VLMs to Video via Dynamic Compression and Question Decomposition</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Yizhou Wang, Yun Fu</div>
    <div class="pub-venue"><em>Empirical Methods in Natural Language Processing (EMNLP)</em>, 2025</div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2510.08818" class="pub-link">📄 Paper</a>
      <a href="https://github.com/hukcc/D-CoDe" class="pub-link">💻 Code</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <div class="pub-thumb">
    <img src="/images/pub_lipreading.png" alt="LipReading" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">LipReading for Low-resource Languages by Language Dynamic LoRA</div>
    <div class="pub-authors">Shuai Zou, Xuefeng Liang, <strong>Yiyang Huang</strong></div>
    <div class="pub-venue"><em>IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</em>, 2025</div>
    <div class="pub-links">
      <a href="https://ieeexplore.ieee.org/abstract/document/10889645" class="pub-link">📄 Paper</a>
    </div>
  </div>
</div>

<div class="pub-item">
  <div class="pub-thumb">
    <img src="/images/pub_callip.png" alt="CALLip" onerror="this.style.display='none'">
  </div>
  <div class="pub-content">
    <div class="pub-title">CALLip: Lipreading using Contrastive and Attribute Learning</div>
    <div class="pub-authors"><strong>Yiyang Huang</strong>, Xuefeng Liang, Chaowei Fang</div>
    <div class="pub-venue"><em>ACM International Conference on Multimedia (ACMMM)</em>, 2021</div>
    <div class="pub-links">
      <a href="https://dl.acm.org/doi/10.1145/3474085.3475420" class="pub-link">📄 Paper</a>
    </div>
  </div>
</div>

<style>
/* News Styles */
.news-container {
  margin: 1em 0;
}

.news-item {
  display: flex;
  align-items: center;
  padding: 0.8em 1em;
  margin-bottom: 0.8em;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 4px solid #007bff;
  border-radius: 0 8px 8px 0;
  line-height: 1.6;
}

.news-icon {
  font-size: 1.2em;
  margin-right: 0.8em;
}

.news-date {
  font-weight: bold;
  color: #495057;
  margin-right: 0.5em;
}

/* Publication Styles */
.pub-item {
  display: flex;
  margin-bottom: 1.5em;
  padding: 1em;
  background: #fafafa;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.pub-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.pub-thumb {
  flex-shrink: 0;
  width: 120px;
  height: 80px;
  margin-right: 1em;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pub-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pub-content {
  flex: 1;
}

.pub-title {
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 0.3em;
  color: #333;
}

.pub-authors {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 0.3em;
}

.pub-venue {
  margin-bottom: 0.5em;
}

.pub-links {
  display: flex;
  gap: 0.8em;
}

.pub-link {
  font-size: 0.85em;
  padding: 0.3em 0.6em;
  background: #007bff;
  color: white !important;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s;
}

.pub-link:hover {
  background: #0056b3;
  text-decoration: none;
}
</style>

---
# Academic Service
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

- **Teaching Assistant (TA)**: DS 5110 *Essentials of Data Science*, Fall 2025  

---
# Contact

Email: yiyang.huang.hukcc (at) gmail (dot) com / huang.yiyan (at) northeastern (dot) edu  
WeChat: hukcc369  
