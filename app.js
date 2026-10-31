/* A small, local-only atlas. No API calls, tracking, or model connection. */
document.documentElement.classList.add('js');

const copy = {
  'zh-CN': {
    skip:'跳到正文',nav:'主导航',atlas:'Ecosystem 交互星图',workflow:'工作流程',
    'nav.contributions':'开源足迹','hero.title':'把想法，\n连成星图。',
    'hero.description':'我是 Kenny。写代码、做研究，也在搭一个让知识、工具与长期记忆彼此相连的工作环境。',
    'hero.explore':'走进 Ecosystem','hero.contributions':'看看开源足迹','hero.footnote':'还在生长。不妨先逛一圈。',
    'atlas.core':'一个相连的工作环境','atlas.hint':'选一颗星，看看它在做什么。',
    'module.memory.name':'项目记忆','module.research.name':'科研与评审','module.code.name':'编码与执行','module.tools.name':'技能与工具',
    divider:'FROM SCATTERED TO CONNECTED',
    'eco.eyebrow':'给每天的工作，留一条线索','eco.title':'事情很多，\n可以在同一个世界里。',
    'eco.description':'论文、代码、笔记和工具常常散在不同地方。我在做的 Ecosystem，是把它们串起来：知道从哪里开始，做过什么，下次又该从哪里接着走。',
    'workflow.label':'三种日常，试着走一遍','workflow.research':'做研究','workflow.build':'写代码','workflow.return':'接着做',
    'workflow.caption':'这是我组织工作的方式；各模块仍在持续完善。',
    'pi.status':'本地开发中 · 源码尚未公开','pi.description':'承载这张星图的桌面工作区。把记忆、技能、工具连接和不同的工作流程放到一起，也为 Lyra 留一个位置。',
    'pi.release':'等它准备好，我会在这里放上源码与更完整的故事。','pi.follow':'在 GitHub 找到我',
    'lyra.name':'/ 喻琪的便签','lyra.context':'Lyra 是 PI 里正在完善的管家与搭档。这里是她的一小叠预写便签。','lyra.next':'换张便签',
    'contrib.divider':'SMALL FIXES, SHARED TOOLS','contrib.eyebrow':'也在别人的星图里，补过几条线','contrib.title':'一点开源足迹。',
    'contrib.description':'从遇到的小问题开始，修好它、补上测试，再交回上游。这里选了四次已经合并的贡献。',
    'contrib.prs':'已合并公开 PR','contrib.repos':'上游仓库',
    'pr.datasets':'修复远程 NIfTI 文件的解码路径，并补上回归测试。','pr.skillopt':'兼容旧编码配置，避免读取失败时丢失原有限制。',
    'pr.weknora':'关闭 HTTP 错误后遗留的 MCP SSE 响应。','pr.sandbox':'保留带 UTF-8 BOM 的第一个 SSE 事件。',
    'contrib.snapshot':'统计截至 2026.10.31 · 仅含公开、已合并的上游 PR','contrib.all':'查看全部贡献',
    'footer.note':'这里会随着 PI 一起长大。','footer.source':'本站源码 ↗'
  },
  en: {
    skip:'Skip to content',nav:'Main navigation',atlas:'Interactive Ecosystem map',workflow:'Workflows',
    'nav.contributions':'Open source','hero.title':'Ideas find\ntheir orbit.',
    'hero.description':"I’m Kenny. I write code, do research, and build a place where knowledge, tools, and lasting context can work together.",
    'hero.explore':'Explore Ecosystem','hero.contributions':'Open-source trail','hero.footnote':'Still growing. Take a look around.',
    'atlas.core':'A connected way of working','atlas.hint':'Pick a star. Follow a connection.',
    'module.memory.name':'Project memory','module.research.name':'Research & review','module.code.name':'Code & execution','module.tools.name':'Skills & tools',
    divider:'FROM SCATTERED TO CONNECTED','eco.eyebrow':'A thread through the everyday',
    'eco.title':'Many things.\nOne connected world.',
    'eco.description':"Papers, code, notes, and tools tend to live apart. My Ecosystem brings them closer, keeping track of where I started, what I tried, and where to pick things up next.",
    'workflow.label':'Three ways through a working day','workflow.research':'Research','workflow.build':'Build','workflow.return':'Pick up',
    'workflow.caption':'These are the workflows I’m building around. The modules are still evolving.',
    'pi.status':'In local development · Source not public yet',
    'pi.description':'The desktop workspace behind this map. It brings memory, skills, tool connections, and different workflows together, with a place for Lyra, too.',
    'pi.release':'When it’s ready, the source and the fuller story will live here.','pi.follow':'Find me on GitHub',
    'lyra.name':'/ A little company','lyra.context':'Lyra is the companion taking shape inside PI. These are a few notes written for this page.','lyra.next':'Another note',
    'contrib.divider':'SMALL FIXES, SHARED TOOLS','contrib.eyebrow':'A few connections in other people’s worlds','contrib.title':'An open-source trail.',
    'contrib.description':'Find a small problem, fix it, add a test, and send it upstream. Here are four contributions that have been merged.',
    'contrib.prs':'Merged public PRs','contrib.repos':'Upstream repositories',
    'pr.datasets':'Fix remote NIfTI decoding paths and add regression coverage.',
    'pr.skillopt':'Read legacy-encoded configuration without silently dropping existing constraints.',
    'pr.weknora':'Close MCP SSE responses left open after HTTP errors.',
    'pr.sandbox':'Preserve the first SSE event when a UTF-8 BOM is present.',
    'contrib.snapshot':'Snapshot: Oct 31, 2026 · Public, merged upstream PRs only','contrib.all':'All contributions',
    'footer.note':'This corner of the web will grow with PI.','footer.source':'Site source ↗'
  }
};

const modules = {
  memory:{number:'01',title:['项目记忆','Project memory'],body:['让下一次工作接得上：保留项目上下文、已经做过的决定，以及它们的来源。','Keep the thread between sessions: project context, decisions already made, and the sources behind them.']},
  research:{number:'02',title:['科研与评审','Research & review'],body:['从问题、资料到实验与验证，把研究推进和独立评价分开组织。','Connect questions, evidence, experiments, and validation, while organizing research and independent review separately.']},
  code:{number:'03',title:['编码与执行','Code & execution'],body:['把想法变成具体改动：读代码、调用工具、运行检查，再留下可复查的结果。','Turn an idea into concrete changes: read code, use tools, run checks, and leave results that can be revisited.']},
  tools:{number:'04',title:['技能与工具','Skills & tools'],body:['通过 Skills、MCP 和工具连接，把已有的工作方法和外部能力接进来。','Connect working methods and outside capabilities through skills, MCP, and tool integrations.']},
  pi:{number:'05',title:['PI-Ecosystem','PI-Ecosystem'],body:['这张星图的桌面容器。正在本地开发，源码尚未公开。','The desktop home for this constellation. In local development; the source is not public yet.']},
  lyra:{number:'06',title:['Lyra · 喻琪','Lyra'],body:['PI 里正在完善的管家与搭档，连接人与系统，也给工作环境多一点性格。','The companion taking shape inside PI, connecting the person and the system, with a little personality along the way.']}
};

const workflows = {
  research:{'zh-CN':[['带着问题找证据','从资料和文献出发，把问题、依据与仍然不确定的部分留下来。'],['把方案交给实验','让设计、执行和验证有各自的位置，用真实结果修正想法。'],['让评价独立发生','研究和评审分开组织，再把结论与下一步接回项目上下文。']],en:[['Start with a question','Read the sources. Keep the question, its evidence, and the uncertainties together.'],['Put the idea to a test','Give design, execution, and validation their own place. Let actual results change the plan.'],['Make room for review','Organize independent evaluation, then carry the findings and next steps back into the project.']]},
  build:{'zh-CN':[['先认清问题','读懂现有实现与项目约定，明确这一次具体要改变什么。'],['做一块具体改动','让工具和编码执行承担实际工作，把改动范围保持清楚。'],['把结果验证下来','运行相关检查，保留改动、验证结果和仍待处理的事项。']],en:[['Understand the problem','Read the existing implementation and project conventions. Decide what needs to change.'],['Make a concrete change','Use coding tools to do the work, keeping the scope of the change clear.'],['Check what changed','Run relevant checks and retain the changes, their results, and any unfinished work.']]},
  return:{'zh-CN':[['找回上一次的位置','从项目上下文里，看到当前状态和已经做过的决定。'],['回到事实来源','核对代码、资料与结果，让旧记录能和眼前的情况对上。'],['接着做一小步','带着明确的下一步继续推进，把新的结论留给下次。']],en:[['Find the last stopping point','Recover the current project context and the decisions already made.'],['Return to the sources','Check code, documents, and results against the notes. Reconcile the past with the present.'],['Take the next small step','Continue with a clear next action, and leave the new findings for the next session.']]}
};

const notes = {
  'zh-CN':['“星图可以很大，今天先点亮一颗就好。”','“上次做到哪里？把线索留好，下次就少绕一点路。”','“先喝口水。那个小问题，我们一会儿就能拆开看。”','“代码还没公开没关系，先让它长成你喜欢的样子。”'],
  en:['“The map can be big. One little star is enough for today.”','“Where did we leave off? A good note saves a long way back.”','“A sip of water first. Then we can untangle that little problem.”','“No rush to share the code. Let it become something you like first.”']
};

let language = 'zh-CN';
let selectedModule = 'memory';
let selectedWorkflow = 'research';
let noteIndex = 0;
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const moduleButtons = [...document.querySelectorAll('[data-module]')];
const workflowButtons = [...document.querySelectorAll('[data-workflow]')];

function remember(key,value){try{localStorage.setItem(key,value);}catch{/* Storage is optional. */}}
function recalled(key){try{return localStorage.getItem(key);}catch{return null;}}
function renderModule(){
  const module = modules[selectedModule];
  const index = language === 'en' ? 1 : 0;
  document.getElementById('module-index').textContent = `${module.number} / 06`;
  document.getElementById('module-title').textContent = module.title[index];
  document.getElementById('module-description').textContent = module.body[index];
  moduleButtons.forEach(button=>{
    const active = button.dataset.module === selectedModule;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
function renderWorkflow(){
  const steps = document.getElementById('workflow-steps');
  steps.replaceChildren(...workflows[selectedWorkflow][language].map(([title,body],index)=>{
    const li = document.createElement('li');
    const number = document.createElement('span');number.className='step-number';number.textContent=String(index+1).padStart(2,'0');
    const h3 = document.createElement('h3');h3.textContent=title;
    const p = document.createElement('p');p.textContent=body;
    li.append(number,h3,p);return li;
  }));
  workflowButtons.forEach(button=>{
    const active = button.dataset.workflow === selectedWorkflow;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-selected',String(active));
    button.tabIndex=active?0:-1;
  });
  document.getElementById('workflow-panel').setAttribute('aria-labelledby',`tab-${selectedWorkflow}`);
}
function renderNote(){document.getElementById('lyra-quote').textContent=notes[language][noteIndex];}
function updateThemeLabel(){
  const isDark = document.documentElement.dataset.theme==='dark';
  const label = language==='en' ? `Switch to ${isDark?'light':'dark'} theme` : `切换到${isDark?'浅色':'深色'}主题`;
  themeToggle.setAttribute('aria-label',label);themeToggle.title=label;
  document.querySelector('meta[name="theme-color"]').content=isDark?'#091b22':'#f4f2e9';
}
function setLanguage(next){
  language=next;
  document.documentElement.lang=language;
  document.querySelectorAll('[data-i18n]').forEach(element=>{element.textContent=copy[language][element.dataset.i18n];});
  document.querySelectorAll('[data-label]').forEach(element=>{element.setAttribute('aria-label',copy[language][element.dataset.label]);});
  languageToggle.textContent=language==='en'?'中文':'EN';
  languageToggle.setAttribute('aria-label',language==='en'?'切换到中文':'Switch to English');
  document.title=language==='en'?'Kenny · Ideas find their orbit':'Kenny · 想法的引力';
  document.querySelector('meta[name="description"]').content=language==='en'?'Kenny’s personal lab. Research, code, and lasting context connected through Ecosystem. PI-Ecosystem is in local development.':'Kenny 的个人实验室。科研、代码与长期记忆，在 Ecosystem 里慢慢连成星图。PI-Ecosystem 本地开发中。';
  renderModule();renderWorkflow();renderNote();updateThemeLabel();
  remember('kenny-language',language);
}

moduleButtons.forEach(button=>button.addEventListener('click',()=>{selectedModule=button.dataset.module;renderModule();}));
workflowButtons.forEach(button=>button.addEventListener('click',()=>{selectedWorkflow=button.dataset.workflow;renderWorkflow();}));
function arrowNavigation(buttons,event){
  const index=buttons.indexOf(document.activeElement);
  if(index<0)return;
  let next=index;
  if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%buttons.length;
  else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index-1+buttons.length)%buttons.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=buttons.length-1;
  else return;
  event.preventDefault();buttons[next].focus();buttons[next].click();
}
document.querySelector('.atlas-canvas').addEventListener('keydown',event=>arrowNavigation(moduleButtons,event));
document.querySelector('[role="tablist"]').addEventListener('keydown',event=>arrowNavigation(workflowButtons,event));
languageToggle.addEventListener('click',()=>setLanguage(language==='en'?'zh-CN':'en'));
themeToggle.addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next;remember('kenny-theme',next);updateThemeLabel();
});
document.getElementById('note-next').addEventListener('click',()=>{noteIndex=(noteIndex+1)%notes[language].length;renderNote();});
const savedTheme=recalled('kenny-theme');
if(savedTheme==='light'||savedTheme==='dark')document.documentElement.dataset.theme=savedTheme;
setLanguage(recalled('kenny-language')==='en'?'en':'zh-CN');
