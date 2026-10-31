const commonCopy={
  'zh-CN':{skip:'跳到正文',nav:'主导航','nav.notes':'手记','nav.contributions':'开源足迹','nav.home':'返回小宇宙','search.open':'搜索与快速跳转','search.title':'在这片小宇宙里找一找','search.placeholder':'星图、Lyra、记忆、开源……','search.close':'关闭搜索','search.empty':'还没有找到。试试「PI」「记忆」或「PR」。','search.hint':'↑ ↓ 选择 · Enter 前往 · Esc 关闭','search.count':'个入口','footer.source':'本站源码 ↗','footer.note':'这里会随着 PI 一起长大。',top:'回到顶部','copy.success':'链接已复制。','copy.failure':'暂时无法复制，可从地址栏分享。','notes.back':'全部手记','notes.share':'复制链接'},
  en:{skip:'Skip to content',nav:'Main navigation','nav.notes':'Notes','nav.contributions':'Open source','nav.home':'Back to the little universe','search.open':'Search and quick navigation','search.title':'Find your way around','search.placeholder':'Ecosystem, Lyra, memory, open source…','search.close':'Close search','search.empty':'Nothing here yet. Try “PI”, “memory”, or “PR”.','search.hint':'↑ ↓ to choose · Enter to go · Esc to close','search.count':'places to explore','footer.source':'Site source ↗','footer.note':'This corner of the web will grow with PI.',top:'Back to top','copy.success':'Link copied.','copy.failure':'Could not copy. You can share the address from the URL bar.','notes.back':'All notes','notes.share':'Copy link'}
};

const searchEntries=[
  {href:'/#ecosystem',zh:'Ecosystem · 工作环境与星图',en:'Ecosystem · The connected workspace',kind:['探索','Explore'],words:'生态 系统 工具 skills mcp atlas'},
  {href:'/?star=memory',zh:'项目记忆 · 让下次工作接得上',en:'Project memory · Keep the thread',kind:['星图','Atlas'],words:'memory 上下文 接续 context'},
  {href:'/?star=research',zh:'科研与独立评审',en:'Research & independent review',kind:['星图','Atlas'],words:'research 实验 论文 科学 review science'},
  {href:'/?star=code',zh:'编码与执行',en:'Code & execution',kind:['星图','Atlas'],words:'code build coding 测试 编程'},
  {href:'/?star=tools',zh:'技能与工具连接',en:'Skills & tool connections',kind:['星图','Atlas'],words:'skills mcp integrations tools 外挂 工具'},
  {href:'/?star=pi',zh:'PI-Ecosystem · 本地开发中',en:'PI-Ecosystem · In local development',kind:['星图','Atlas'],words:'desktop 桌面 工作台 workspace'},
  {href:'/?star=lyra',zh:'Lyra · PI 里的管家与搭档',en:'Lyra · The companion inside PI',kind:['星图','Atlas'],words:'lyra 猫 companion 便签'},
  {href:'/#now',zh:'最近在做什么',en:'What I’m working on now',kind:['此刻','Now'],words:'now 当前 近况 present'},
  {href:'/notes/ecosystem/',zh:'Ecosystem、PI 与 Lyra，各自在做什么？',en:'Ecosystem, PI, and Lyra: how do they fit?',kind:['手记','Note'],words:'architecture 项目说明 memory tools 结构'},
  {href:'/notes/upstream/',zh:'一个小修复，也能成为一条连接。',en:'A small fix can be a connection.',kind:['手记','Note'],words:'contributor 开源 贡献 PR upstream github'},
  {href:'/#contributions',zh:'已合并的开源贡献',en:'Merged open-source contributions',kind:['开源','Open source'],words:'huggingface microsoft tencent opensandbox PR merged 贡献'},
  {href:'/feed.xml',zh:'RSS · 订阅实验手记',en:'RSS · Subscribe to the notes',kind:['订阅','Subscribe'],words:'rss feed subscribe 订阅'}
];

export function initSite({copy={},onLanguage=()=>{},titles={},descriptions={}}={}){
  document.documentElement.classList.add('js');
  const words={};for(const locale of ['zh-CN','en'])words[locale]={...commonCopy[locale],...copy[locale]};
  const remembered=key=>{try{return localStorage.getItem(key);}catch{return null;}};
  const remember=(key,value)=>{try{localStorage.setItem(key,value);}catch{}};
  let language=remembered('kenny-language')==='en'?'en':'zh-CN';
  const languageButton=document.getElementById('language-toggle');
  const themeButton=document.getElementById('theme-toggle');

  const dialog=document.createElement('dialog');dialog.className='search-dialog';dialog.id='site-search';dialog.setAttribute('aria-labelledby','search-title');
  dialog.innerHTML='<div class="search-heading"><h2 id="search-title" data-i18n="search.title"></h2><button type="button" class="search-close" data-label="search.close">Esc</button></div><div class="search-input-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input id="search-input" type="search" role="combobox" aria-autocomplete="list" aria-controls="search-results" aria-expanded="false" autocomplete="off" spellcheck="false"></div><ul id="search-results" role="listbox"></ul><p class="search-empty" hidden data-i18n="search.empty"></p><div class="search-footer"><span data-i18n="search.hint"></span><span id="search-count" role="status"></span></div>';
  document.body.append(dialog);
  const input=dialog.querySelector('input'),results=dialog.querySelector('ul');
  let visibleEntries=[],activeIndex=0,previousFocus;

  function text(key){return words[language][key]||key;}
  function updateTheme(){
    const dark=document.documentElement.dataset.theme!=='light';
    const label=language==='en'?`Switch to ${dark?'light':'dark'} theme`:`切换到${dark?'浅色':'深色'}主题`;
    if(themeButton){themeButton.setAttribute('aria-label',label);themeButton.title=label;}
    const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=dark?'#091b22':'#f4f2e9';
  }
  function selectSearch(index){
    activeIndex=index;
    [...results.children].forEach((item,i)=>{item.firstChild.setAttribute('aria-selected',String(i===index));});
    const selected=results.children[index]?.firstChild;
    if(selected){input.setAttribute('aria-activedescendant',selected.id);selected.scrollIntoView({block:'nearest'});}
    else input.removeAttribute('aria-activedescendant');
  }
  function renderSearch(){
    const query=input.value.trim().toLocaleLowerCase();
    visibleEntries=searchEntries.filter(entry=>`${entry.zh} ${entry.en} ${entry.words}`.toLocaleLowerCase().includes(query));
    results.replaceChildren(...visibleEntries.map((entry,index)=>{
      const li=document.createElement('li');li.setAttribute('role','presentation');
      const a=document.createElement('a');a.href=entry.href;a.id=`search-option-${index}`;a.setAttribute('role','option');a.tabIndex=-1;
      const kind=document.createElement('small');kind.textContent=entry.kind[language==='en'?1:0];
      const title=document.createElement('span');title.textContent=entry[language==='en'?'en':'zh'];
      const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
      a.append(kind,title,arrow);li.append(a);a.addEventListener('click',()=>dialog.close());return li;
    }));
    dialog.querySelector('.search-empty').hidden=visibleEntries.length>0;
    dialog.querySelector('#search-count').textContent=`${visibleEntries.length} ${text('search.count')}`;
    selectSearch(0);
  }
  function openSearch(){
    if(dialog.open)return;
    previousFocus=document.activeElement;input.value='';dialog.showModal();input.setAttribute('aria-expanded','true');
    document.body.classList.add('dialog-open');renderSearch();input.focus();
  }
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');input.setAttribute('aria-expanded','false');previousFocus?.focus({preventScroll:true});});
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'&&!event.isComposing){event.preventDefault();dialog.close();}});
  dialog.querySelector('.search-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  document.querySelectorAll('[data-search-open]').forEach(button=>button.addEventListener('click',openSearch));
  input.addEventListener('input',renderSearch);
  input.addEventListener('keydown',event=>{
    if(event.isComposing)return;
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      event.preventDefault();if(visibleEntries.length)selectSearch((activeIndex+(event.key==='ArrowDown'?1:-1)+visibleEntries.length)%visibleEntries.length);
    }else if(event.key==='Enter'&&visibleEntries[activeIndex]){event.preventDefault();const href=visibleEntries[activeIndex].href;dialog.close();location.assign(href);}
  });
  document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();dialog.open?dialog.close():openSearch();}});

  function setLanguage(next){
    language=next;document.documentElement.lang=next;
    document.querySelectorAll('[data-i18n]').forEach(element=>{const translated=words[language][element.dataset.i18n];if(translated!==undefined)element.textContent=translated;});
    document.querySelectorAll('[data-label]').forEach(element=>element.setAttribute('aria-label',text(element.dataset.label)));
    document.querySelectorAll('[data-language]').forEach(element=>element.hidden=element.dataset.language!==language);
    document.querySelectorAll('.copy-status').forEach(element=>element.textContent='');
    if(languageButton){languageButton.textContent=language==='en'?'中文':'EN';languageButton.setAttribute('aria-label',language==='en'?'切换到中文':'Switch to English');}
    input.placeholder=text('search.placeholder');input.setAttribute('aria-label',text('search.open'));
    if(titles[language])document.title=titles[language];
    if(descriptions[language])document.querySelector('meta[name="description"]').content=descriptions[language];
    updateTheme();onLanguage(language);remember('kenny-language',language);if(dialog.open)renderSearch();
  }
  languageButton?.addEventListener('click',()=>setLanguage(language==='en'?'zh-CN':'en'));
  themeButton?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;remember('kenny-theme',next);updateTheme();});

  const top=document.querySelector('.back-to-top');
  if(top){const update=()=>top.classList.toggle('is-visible',scrollY>700);addEventListener('scroll',update,{passive:true});update();}
  async function copyLink(url,status){
    try{await navigator.clipboard.writeText(url);if(status)status.textContent=text('copy.success');return true;}
    catch{if(status)status.textContent=text('copy.failure');return false;}
  }
  setLanguage(language);
  return {get language(){return language;},text,copyLink};
}
