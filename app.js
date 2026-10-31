/* A local atlas with no external API, tracking, or model connection. */
import {initSite} from './common.js';

const copy = {
  'zh-CN': {
    skip:'跳到正文',nav:'主导航',atlas:'Ecosystem 交互星图',workflow:'工作流程',
    'nav.contributions':'开源足迹','hero.title':'把想法，\n连成星图。',
    'hero.description':'我是 Kenny。写代码、做研究，也在搭一个让知识、工具与长期记忆彼此相连的工作环境。',
    'hero.explore':'走进 Ecosystem','hero.contributions':'看看开源足迹','hero.footnote':'还在生长。看看我最近在做什么 ↗',
    'atlas.core':'一个相连的工作环境','atlas.hint':'选一颗星，看看它在做什么。',
    'atlas.share':'复制这颗星的链接',
    'module.memory.name':'项目记忆','module.research.name':'科研与评审','module.code.name':'编码与执行','module.tools.name':'技能与工具',
    divider:'FROM SCATTERED TO CONNECTED',
    'eco.eyebrow':'给每天的工作，留一条线索','eco.title':'事情很多，\n可以在同一个世界里。',
    'eco.description':'论文、代码、笔记和工具常常散在不同地方。我在做的 Ecosystem，是把它们串起来：知道从哪里开始，做过什么，下次又该从哪里接着走。',
    'workflow.label':'三种日常，试着走一遍','workflow.research':'做研究','workflow.build':'写代码','workflow.return':'接着做',
    'workflow.caption':'这是我组织工作的方式；各模块仍在持续完善。',
    'pi.status':'本地开发中 · 源码尚未公开','pi.description':'承载这张星图的桌面工作区。把记忆、技能、工具连接和不同的工作流程放到一起，也为 Lyra 留一个位置。',
    'pi.release':'等它准备好，我会在这里放上源码与更完整的故事。','pi.follow':'在 GitHub 找到我',
    'lyra.name':'/ 来自 Lyra 的便签','lyra.context':'Lyra 是 PI 里正在完善的管家与搭档。这里是她的一小叠预写便签。','lyra.next':'换张便签',
    'contrib.divider':'SMALL FIXES, SHARED TOOLS','contrib.eyebrow':'也在别人的星图里，补过几条线','contrib.title':'一点开源足迹。',
    'contrib.description':'从遇到的小问题开始，修好它、补上测试，再交回上游。这里选了四次已经合并的贡献。',
    'contrib.prs':'已合并公开 PR','contrib.repos':'上游仓库',
    'pr.datasets':'修复远程 NIfTI 文件的解码路径，并补上回归测试。','pr.skillopt':'兼容旧编码配置，避免读取失败时丢失原有限制。',
    'pr.weknora':'关闭 HTTP 错误后遗留的 MCP SSE 响应。','pr.sandbox':'保留带 UTF-8 BOM 的第一个 SSE 事件。',
    'contrib.snapshot':'统计截至 2026.10.31 · 仅含公开、已合并的上游 PR','contrib.all':'查看全部贡献',
    'footer.note':'这里会随着 PI 一起长大。','footer.source':'本站源码 ↗',
    'now.title':'最近，在这几件事里。','now.description':'科研、工具和自己的工作环境，总有一些地方值得再琢磨一下。','now.date':'更新于 2026.10.31',
    'now.pi.title':'让 PI 慢慢长成自己的工作台','now.pi.body':'把散落的记忆、技能和工作流程接起来，继续完善 Lyra。还在本地折腾，等适合公开时再分享。','now.pi.link':'先读读这张星图的说明',
    'now.research.title':'在研究与实际问题之间来回走','now.research.body':'读资料、写代码、做实验，也给过程留下能接续的线索。想让工具真正帮上日常的工作。',
    'now.open.title':'遇到能修的小问题，就试着交回上游','now.open.body':'从文件解码到工具连接，贡献不一定很大，但解决的都是具体问题。','now.open.link':'看看已经合并的改动',
    'notes.eyebrow':'给星图留一点注解','notes.title':'从这里读起。','notes.all':'全部手记','notes.read':'打开手记',
    'notes.eco.category':'项目说明','notes.eco.title':'Ecosystem、PI 与 Lyra，各自在做什么？','notes.eco.description':'一套工作方式、一个桌面工作区，以及其中正在完善的搭档。把这几个名字放回它们的位置。',
    'notes.open.category':'开源记录','notes.open.title':'一个小修复，也能成为一条连接。','notes.open.description':'从四个已合并的改动出发，聊聊贡献留下了什么，以及 Contributor 这个标签意味着什么。',
    'waypoints.title':'沿路遇见的小站','waypoints.description':'这次装修时，从这些个人空间里得到了一些灵感。','waypoints.cloud':'云端的杂货铺 ↗'
  },
  en: {
    skip:'Skip to content',nav:'Main navigation',atlas:'Interactive Ecosystem map',workflow:'Workflows',
    'nav.contributions':'Open source','hero.title':'Ideas find\ntheir orbit.',
    'hero.description':"I’m Kenny. I write code, do research, and build a place where knowledge, tools, and lasting context can work together.",
    'hero.explore':'Explore Ecosystem','hero.contributions':'Open-source trail','hero.footnote':'Still growing. See what I’m working on ↗',
    'atlas.core':'A connected way of working','atlas.hint':'Pick a star. Follow a connection.',
    'atlas.share':'Copy a link to this star',
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
    'footer.note':'This corner of the web will grow with PI.','footer.source':'Site source ↗',
    'now.title':'A few things on my desk.','now.description':'Research, tools, and the place where I work. There is always a little more to figure out.','now.date':'Updated Oct 31, 2026',
    'now.pi.title':'Letting PI become my own workspace','now.pi.body':'Connecting scattered memory, skills, and workflows, and continuing to develop Lyra. Still working locally; I’ll share it when it’s ready.','now.pi.link':'Read a short guide to the map',
    'now.research.title':'Moving between research and practical problems','now.research.body':'Reading sources, writing code, running experiments, and leaving a thread to follow next time. I want tools that help with the work I actually do.',
    'now.open.title':'Sending small fixes back upstream','now.open.body':'From file decoding to tool connections, the changes may be small, but the problems are concrete.','now.open.link':'See the merged changes',
    'notes.eyebrow':'A little context for the constellation','notes.title':'Start with a note.','notes.all':'All notes','notes.read':'Read the note',
    'notes.eco.category':'Project guide','notes.eco.title':'Ecosystem, PI, and Lyra: how do they fit?','notes.eco.description':'A way of working, a desktop workspace, and the companion taking shape inside it. A guide to the names on the map.',
    'notes.open.category':'Open source','notes.open.title':'A small fix can be a connection.','notes.open.description':'Four merged changes, what they leave behind, and what the Contributor label actually means.',
    'waypoints.title':'Places found along the way','waypoints.description':'A few personal spaces that inspired this round of changes.','waypoints.cloud':'Shuyuncong’s blog ↗'
  }
};

const modules = {
  memory:{number:'01',title:['项目记忆','Project memory'],body:['让下一次工作接得上：保留项目上下文、已经做过的决定，以及它们的来源。','Keep the thread between sessions: project context, decisions already made, and the sources behind them.']},
  research:{number:'02',title:['科研与评审','Research & review'],body:['从问题、资料到实验与验证，把研究推进和独立评价分开组织。','Connect questions, evidence, experiments, and validation, while organizing research and independent review separately.']},
  code:{number:'03',title:['编码与执行','Code & execution'],body:['把想法变成具体改动：读代码、调用工具、运行检查，再留下可复查的结果。','Turn an idea into concrete changes: read code, use tools, run checks, and leave results that can be revisited.']},
  tools:{number:'04',title:['技能与工具','Skills & tools'],body:['通过 Skills、MCP 和工具连接，把已有的工作方法和外部能力接进来。','Connect working methods and outside capabilities through skills, MCP, and tool integrations.']},
  pi:{number:'05',title:['PI-Ecosystem','PI-Ecosystem'],body:['这张星图的桌面容器。正在本地开发，源码尚未公开。','The desktop home for this constellation. In local development; the source is not public yet.']},
  lyra:{number:'06',title:['Lyra','Lyra'],body:['PI 里正在完善的管家与搭档，连接人与系统，也给工作环境多一点性格。','The companion taking shape inside PI, connecting the person and the system, with a little personality along the way.']}
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
const requestedStar=new URLSearchParams(location.search).get('star');
let selectedModule = Object.hasOwn(modules,requestedStar)?requestedStar:'memory';
let selectedWorkflow = 'research';
let noteIndex = 0;
const moduleButtons = [...document.querySelectorAll('[data-module]')];
const workflowButtons = [...document.querySelectorAll('[data-workflow]')];

function renderModule(){
  const module = modules[selectedModule];
  const index = language === 'en' ? 1 : 0;
  document.getElementById('module-index').textContent = `${module.number} / 06`;
  document.getElementById('module-title').textContent = module.title[index];
  document.getElementById('module-description').textContent = module.body[index];
  const points={memory:'162 95',research:'438 95',code:'510 270',tools:'396 410',pi:'156 390',lyra:'78 240'};
  document.getElementById('selected-connection').setAttribute('d',`M300 250 ${points[selectedModule]}`);
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
document.getElementById('note-next').addEventListener('click',()=>{noteIndex=(noteIndex+1)%notes[language].length;renderNote();});
const site=initSite({copy,onLanguage(next){language=next;renderModule();renderWorkflow();renderNote();},titles:{'zh-CN':'Kenny · 想法的引力',en:'Kenny · Ideas find their orbit'},descriptions:{'zh-CN':'Kenny 的个人实验室。科研、代码与长期记忆，在 Ecosystem 里慢慢连成星图。PI-Ecosystem 本地开发中。',en:'Kenny’s personal lab. Research, code, and lasting context connected through Ecosystem. PI-Ecosystem is in local development.'}});
document.getElementById('module-share').addEventListener('click',async()=>{
  const url=new URL(location.href);url.searchParams.set('star',selectedModule);url.hash='';
  await site.copyLink(url.href,document.getElementById('copy-status'));
});
