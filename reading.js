import {initSite} from './common.js';

const copy={
  'zh-CN':{'notes.index.title':'实验手记。','notes.index.lede':'把这张星图背后的想法，慢慢写下来。从项目说明和一些具体的开源改动开始。','notes.eco.category':'项目说明','notes.eco.title':'Ecosystem、PI 与 Lyra，各自在做什么？','notes.eco.description':'一套工作方式、一个桌面工作区，以及其中正在完善的搭档。把这几个名字放回它们的位置。','notes.open.category':'开源记录','notes.open.title':'一个小修复，也能成为一条连接。','notes.open.description':'从四个已合并的改动出发，聊聊贡献留下了什么，以及 Contributor 这个标签意味着什么。','notes.read':'打开手记','notes.rss':'通过 RSS 订阅','notes.rss.note':'新内容会出现在这里，也会进入订阅源。','reader.toc':'这篇里有什么','reader.next':'接着读','reader.home':'回到星图','reader.updated':'写于 2026.10.31','404.title':'这颗星，还没被点亮。','404.body':'这个地址暂时没有内容。先回到星图，或者去手记里看看。','404.home':'回到星图'},
  en:{'notes.index.title':'Field notes.','notes.index.lede':'A little context behind the constellation, starting with a project guide and a few concrete changes upstream.','notes.eco.category':'Project guide','notes.eco.title':'Ecosystem, PI, and Lyra: how do they fit?','notes.eco.description':'A way of working, a desktop workspace, and the companion taking shape inside it. A guide to the names on the map.','notes.open.category':'Open source','notes.open.title':'A small fix can be a connection.','notes.open.description':'Four merged changes, what they leave behind, and what the Contributor label actually means.','notes.read':'Read the note','notes.rss':'Subscribe via RSS','notes.rss.note':'New notes will appear here and in the feed.','reader.toc':'In this note','reader.next':'Read next','reader.home':'Back to the constellation','reader.updated':'Written Oct 31, 2026','404.title':'This star isn’t on the map yet.','404.body':'There is nothing at this address for now. Head back to the constellation, or explore the notes.','404.home':'Back to the constellation'}
};
const page=document.body.dataset.page;
const titles={index:{'zh-CN':'实验手记 · Kenny',en:'Field notes · Kenny'},ecosystem:{'zh-CN':'Ecosystem、PI 与 Lyra · Kenny',en:'Ecosystem, PI, and Lyra · Kenny'},upstream:{'zh-CN':'从一个小修复开始 · Kenny',en:'A small fix can be a connection · Kenny'},missing:{'zh-CN':'这颗星还没被点亮 · Kenny',en:'A star off the map · Kenny'}};
function updateToc(){
  const toc=document.getElementById('reading-toc');if(!toc)return;
  const article=document.querySelector('[data-language]:not([hidden])');if(!article)return;
  toc.replaceChildren(...[...article.querySelectorAll('h2')].map(heading=>{const li=document.createElement('li'),a=document.createElement('a');a.textContent=heading.textContent;a.href=`#${heading.id}`;li.append(a);return li;}));
}
const site=initSite({copy,titles:titles[page]||titles.index,onLanguage:updateToc});
document.querySelector('.share-reading')?.addEventListener('click',()=>{const url=new URL(location.href);url.hash='';site.copyLink(url.href,document.querySelector('.copy-status'));});
const progress=document.querySelector('.reading-progress');
if(progress){const update=()=>{const height=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${height>0?Math.min(100,scrollY/height*100):0}%`;};addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();}
