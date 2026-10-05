const drops=[
{title:"Can AI actually reason?",hook:"When a model gives the right answer, how do we know it reasoned instead of recognising a familiar pattern?",tags:["reasoning","evaluation"],idea:"Reasoning is not just producing a correct answer. A useful test is whether the system can preserve the logic of a problem when the surface details change. This is why researchers increasingly care about controlled evaluations, counterexamples and tasks that require multi-step inference.",why:"If intelligence means more than pattern matching, robustness matters. A system that solves one familiar benchmark but collapses after a tiny wording change has learned a shortcut, not necessarily the underlying relationship.",experiment:"Take a simple logic puzzle. Ask an AI to solve it. Then change the names, order and irrelevant details without changing the logic. Compare the answers and ask the model to state the critical constraints. Your question is not only “was it right?” but “what changed when the surface changed?”",failure:"Models can be confidently correct for the wrong reason. Benchmarks can also leak patterns or become saturated, so a high score is not automatically evidence of general intelligence.",takeaway:"Correctness is evidence. Robustness is stronger evidence.",q:"A model solves 9/10 logic puzzles. What would you test next?",a:"Change the surface form",b:"Give it harder puzzles",resultA:"Good instinct. Invariance tests can reveal whether the model learned the relationship or the template.",resultB:"Difficulty matters, but changing the surface first can expose shortcuts before simply increasing complexity.",links:["https://hai.stanford.edu/ai-index/2026-ai-index-report","https://doi.org/10.1145/3729218"]},
{title:"How does a machine derive a new fact?",hook:"Knowing facts is useful. Knowing what follows from those facts is where a knowledge system starts to reason.",tags:["symbolic reasoning","rules","inference"],idea:"Symbolic inference makes relationships explicit. Instead of asking a model to guess a conclusion, we define facts and rules, then apply the rules to derive new facts. For example: if A is inside B, and B is inside C, then A is inside C. The important object is not the answer alone, but the chain that produced it.",why:"Rules give a reasoning system inspectable structure. You can see which facts were known, which rule fired, and why a new fact was added. That makes debugging and verification possible in a way that an unexplained prediction is not.",experiment:"Build a tiny forward-chaining engine. Start with facts such as 'A is left of B' and 'B is left of C'. Add a rule saying: if X is left of Y and Y is left of Z, infer X is left of Z. Then add a contradictory fact and see whether your engine detects or blindly accepts the inconsistency.",failure:"Naive rule systems can explode as the number of facts grows, apply rules in the wrong order, derive redundant facts, or silently preserve contradictions. A rule engine is only as reliable as its representation, rule definitions and consistency checks.",takeaway:"Reasoning becomes inspectable when facts, rules and derived conclusions are separate objects.",q:"A system knows A→B and B→C. What should it do next?",a:"Store the facts only",b:"Derive A→C when the rule allows it",resultA:"That preserves knowledge, but it leaves an obvious inference unused.",resultB:"Exactly. Inference turns stored relationships into new knowledge — provided the rule is valid.",links:["https://plato.stanford.edu/entries/logic-classical/","https://en.wikipedia.org/wiki/Forward_chaining","https://arxiv.org/list/cs.AI/recent"]},

{title:"Does an AI actually remember you?",hook:"A model can sound like it remembers you. But is it remembering — or simply seeing the right text again?",tags:["memory","agents","identity"],idea:"AI memory is not one thing. A system can keep information inside the current context, retrieve records from an external store, compress past interactions into summaries, or learn something into its parameters. These mechanisms behave differently. A useful agent therefore needs more than storage: it needs to decide what to write, what to retrieve, what to update, and what to forget.",why:"Memory changes the kind of intelligence an agent can display. Without persistence, every session begins almost from zero. With badly managed persistence, the system can remember the wrong thing, preserve stale information, mix up people or retrieve irrelevant history. Long-term memory is therefore partly a systems-design problem, not just a bigger context window.",experiment:"Run a tiny memory test. Tell an AI three facts across separate conversations. Later ask it to combine two old facts with a new instruction. Then correct one of the facts and ask the original question again. Finally ask: 'What do you remember, and where did each fact come from?' You are testing recall, updating and provenance separately.",failure:"More memory can make an agent worse. Retrieval may surface irrelevant history, summaries can lose important details, old facts can conflict with new ones, and a system may confidently treat an inferred detail as something you explicitly told it.",takeaway:"Intelligent memory is not 'remember everything'. It is selective, updateable and useful for the next decision.",q:"An agent remembers 10,000 facts about you. Is it automatically better?",a:"Yes — more memory means more intelligence",b:"No — memory needs management",resultA:"Not necessarily. A huge store can create noise and stale or contradictory information can hurt decisions.",resultB:"Exactly. Useful memory needs selection, retrieval, updating and sometimes forgetting.",links:["https://arxiv.org/abs/2512.13564","https://arxiv.org/abs/2603.07670","https://arxiv.org/abs/2310.08560"]},
{title:"Why do AI systems hallucinate?",hook:"Sometimes the model sounds certain because it is fluent, not because it has verified the claim.",tags:["language","reliability"],idea:"A language model is trained to generate likely continuations. That objective is not identical to checking whether every statement is true. Hallucination can therefore appear when the model lacks information, has conflicting evidence, or is rewarded more for producing an answer than for admitting uncertainty.",why:"Trustworthy AI needs a way to separate generation from verification. Retrieval, tool use, citations, constrained outputs and independent checks can reduce some failure modes, but none makes a system magically infallible.",experiment:"Ask a model for five obscure facts about a topic. Before checking anything, make it assign confidence and explain what evidence it used. Then verify every claim against a primary source. Compare confidence with reality.",failure:"Confidence language is not a calibrated probability. A model can be uncertain internally while producing very confident prose.",takeaway:"Fluency is not a truth signal.",q:"Which is safer for a factual task?",a:"Generate from memory",b:"Retrieve and verify",resultA:"Memory-only generation can be fast, but it has no built-in guarantee that a claim was checked.",resultB:"Better. Retrieval plus verification gives the system an external evidence trail, though the retrieved evidence itself still needs checking.",links:["https://arxiv.org/list/cs.AI/recent","https://paperswithcode.com/"]},
{title:"Can an AI use tools?",hook:"The interesting shift is not only smarter models. It is models that can decide when to call something outside themselves.",tags:["agents","tools"],idea:"Tool use turns a model from a text generator into a component inside a larger loop: observe a task, choose an action, call a tool, inspect the result, and continue. The tool might be a calculator, database, browser, code interpreter or another service.",why:"External tools let systems access fresh information, perform deterministic operations and affect the world. But every new action also creates new failure modes: bad tool selection, incorrect arguments, unsafe actions and feedback loops.",experiment:"Give a model two tools: a calculator and a tiny lookup table. Ask questions where one tool is clearly useful and others where no tool is needed. Log which tool it chooses, the arguments it sends, and whether it checks the returned result.",failure:"A model can call a correct tool incorrectly. Tool-use success therefore needs evaluation at the level of both decision and execution.",takeaway:"Agentic behaviour is a loop, not a single prompt.",q:"What makes a tool-using model an agent?",a:"It can call tools",b:"It can choose and act in a loop",resultA:"Tool calling alone is not enough. A fixed pipeline can call tools without making decisions.",resultB:"Closer. The loop of observation, decision, action and feedback is what makes the system meaningfully agentic.",links:["https://modelcontextprotocol.io/","https://www.anthropic.com/research"]},
{title:"Can AI build a model of the world?",hook:"If an agent predicts what happens after an action, it has something more useful than a bag of facts.",tags:["world models","prediction"],idea:"A world model tries to represent how an environment behaves: what is currently true, what may happen next, and how actions change the state. This idea appears across model-based reinforcement learning, robotics, simulation and newer generative systems.",why:"Prediction can support planning. Instead of blindly trying actions in the real world, an agent can evaluate possible futures in an internal or simulated environment.",experiment:"Create a tiny grid world. Give an agent the current state and a few possible actions. Train or program a predictor for the next state. Then ask it to choose an action by looking one or two steps ahead. Compare planning with and without the predictor.",failure:"A predictor can look convincing while missing the parts of the environment that matter for decisions. Small prediction errors can compound over long horizons.",takeaway:"A useful world model must predict the consequences that matter for action.",q:"What matters more for planning?",a:"Perfectly describing the past",b:"Predicting useful futures",resultA:"Past description is useful, but planning depends on consequences that have not happened yet.",resultB:"Yes. For action, predictive usefulness matters more than simply producing a detailed description.",links:["https://proceedings.mlr.press/v306/warrier26a.html","https://link.springer.com/article/10.1007/s44163-026-02122-1"]},
{title:"Does vision give AI understanding?",hook:"Seeing pixels is easy to describe. Understanding what those pixels mean for a task is much harder.",tags:["vision","multimodal"],idea:"Computer vision has moved from recognising objects toward richer representations: relationships between objects, actions, spatial structure and language. Multimodal models can connect visual inputs with textual concepts, but that does not automatically give grounded understanding.",why:"An intelligent system often needs to know not only what is visible, but what can be done, what changed, what is hidden, and what will happen next.",experiment:"Show an AI two nearly identical images with one object moved. Ask what changed, where it moved, and what action would be possible because of the change. Score each answer separately.",failure:"A model may describe an image fluently while missing spatial relationships or physical consequences.",takeaway:"Perception becomes intelligence when it supports useful predictions and actions.",q:"If a model can describe an image, does it understand it?",a:"Yes",b:"Not necessarily",resultA:"Description is evidence of visual-language capability, not proof of grounded understanding.",resultB:"Right. Understanding should be tested through relationships, changes, predictions and actions.",links:["https://hai.stanford.edu/ai-index/2026-ai-index-report","https://deepmind.google/research/"]},
{title:"What makes a benchmark useful?",hook:"A leaderboard gives you a number. A good benchmark tells you what that number actually means.",tags:["evaluation","benchmarks"],idea:"Benchmarks are measurement instruments. Their value depends on task design, contamination controls, difficulty, reproducibility and whether the measured skill transfers outside the benchmark.",why:"When a benchmark becomes popular, models are optimised for it. That can make scores rise without producing a proportional increase in general capability.",experiment:"Pick a benchmark-style task. Create three versions: original, paraphrased, and adversarial. Compare performance across all three. If the score changes dramatically, ask what skill the original test was really measuring.",failure:"No single benchmark captures intelligence. Different tests expose different slices of capability and different shortcuts.",takeaway:"A benchmark is a lens, not a definition of intelligence.",q:"If a model tops one benchmark, should we call it generally intelligent?",a:"Yes",b:"No",resultA:"A single score cannot establish general intelligence because the tested distribution may be narrow.",resultB:"Exactly. Generality requires evidence across varied tasks, conditions and failure modes.",links:["https://hai.stanford.edu/ai-index/2026-ai-index-report","https://paperswithcode.com/"]},
{title:"Can AI learn continuously?",hook:"Humans update their knowledge without rebuilding the brain from scratch. AI systems still struggle with that.",tags:["learning","adaptation"],idea:"Continual learning asks how a system can acquire new information over time while preserving useful old capabilities. A central challenge is catastrophic forgetting: learning something new can interfere with what was learned before.",why:"A system operating in the real world cannot assume that its environment stays frozen. New tools, users, facts and tasks appear continuously.",experiment:"Train a tiny classifier on task A. Then train it on task B without revisiting A. Measure both before and after. Next, add a small replay buffer or regularisation strategy and compare the trade-off.",failure:"Keeping everything forever is expensive, while adapting too aggressively can overwrite useful knowledge.",takeaway:"Learning over time is a stability–plasticity problem.",q:"What should a continuously learning system protect?",a:"Only the newest knowledge",b:"Useful old capabilities too",resultA:"A system that only optimises for the newest task can forget capabilities it still needs.",resultB:"Yes. The hard part is deciding what to retain, update, compress or discard.",links:["https://arxiv.org/list/cs.LG/recent","https://huggingface.co/"]},
{title:"Can multiple AI agents cooperate?",hook:"Give several agents different roles and you may get collaboration — or an expensive conversation where nobody checks anything.",tags:["multi-agent","systems"],idea:"Multi-agent systems divide work among specialised or role-based agents. Cooperation can help with decomposition, debate and independent verification, but coordination itself becomes a systems problem.",why:"Multiple perspectives can reduce some blind spots. They can also amplify shared errors, duplicate work and increase latency or cost.",experiment:"Give three agents roles: planner, critic and executor. Run the same task once with one agent and once with the trio. Record accuracy, number of steps, disagreements and time.",failure:"Agreement is not proof. Agents based on the same model may share the same blind spot.",takeaway:"More agents are useful only when the division of labour adds real information.",q:"Does adding agents automatically improve an AI system?",a:"No",b:"Usually",resultA:"Correct. Coordination has a cost and can multiply shared mistakes.",resultB:"Sometimes, but there is no guarantee. The roles and verification mechanism matter.",links:["https://www.anthropic.com/research","https://modelcontextprotocol.io/"]},
{title:"What is an AI world model actually good for?",hook:"Prediction becomes interesting when it changes what an agent chooses to do.",tags:["planning","world models"],idea:"The practical test of a world model is not whether its generated future looks realistic. It is whether using the model improves decisions compared with acting without it.",why:"A system can produce beautiful simulations that are irrelevant to the decision at hand. Decision usefulness gives a sharper evaluation target.",experiment:"In a small simulated environment, let an agent choose actions directly. Then let it roll out several possible futures before choosing. Compare reward, planning time and failure cases.",failure:"Long imagined rollouts can compound model error and become computationally expensive.",takeaway:"A world model earns its place when it improves decisions.",q:"What is the strongest test?",a:"Looks realistic",b:"Improves decisions",resultA:"Visual realism can be misleading if the prediction misses decision-relevant details.",resultB:"Exactly. The useful question is whether prediction changes outcomes for the better.",links:["https://proceedings.mlr.press/v306/warrier26a.html"]},
{title:"What would count as evidence for AGI?",hook:"The word AGI sounds precise until you try to write down a test that everyone would accept.",tags:["AGI","evaluation"],idea:"Artificial General Intelligence is not one universally agreed benchmark. Different definitions emphasise breadth, autonomy, learning, transfer, reasoning, embodiment or economic usefulness. That makes measurement itself part of the AGI question.",why:"If we cannot say what capability we are measuring, arguments about whether a system is 'AGI' can become arguments about labels rather than evidence.",experiment:"Write your own five-part AGI test. Include at least one unfamiliar task, one adaptation task, one long-horizon task, one real-world constraint and one failure-recovery test. Then ask what evidence would convince you.",failure:"Any fixed test can eventually become an optimisation target. A convincing claim therefore needs a portfolio of evidence, not one magic score.",takeaway:"Before asking whether AI is AGI, define what evidence would change your mind.",q:"Which matters most for general intelligence?",a:"A huge benchmark score",b:"Transfer to unfamiliar tasks",resultA:"A huge score is impressive, but it can still measure a narrow distribution.",resultB:"Transfer is a stronger clue because it asks whether a capability survives outside the training pattern.",links:["https://hai.stanford.edu/ai-index/2026-ai-index-report","https://doi.org/10.1145/3729218"]}
];

const research=[
["CURRENT PICTURE","Stanford AI Index 2026","Data and analysis on capability, evaluation, agents, robotics and AI development.","https://hai.stanford.edu/ai-index/2026-ai-index-report"],
["REASONING","Survey of Reasoning with Foundation Models","A broad research survey covering reasoning methods, benchmarks, multimodal learning and agents.","https://doi.org/10.1145/3729218"],
["WORLD MODELS","WorldTest — ICML 2026","Tests whether learned world models support environment-level queries rather than only plausible generation.","https://proceedings.mlr.press/v306/warrier26a.html"],
["PHYSICAL AI","World Models for Physical AI","Survey of uncertainty, prediction, planning and control in physical AI.","https://link.springer.com/article/10.1007/s44163-026-02122-1"],
["BUILD","LLMs from Scratch","A hands-on implementation path for understanding language models by building them.","https://github.com/rasbt/LLMs-from-scratch"],
["BUILD","nanoGPT","A compact transformer implementation for learning through code.","https://github.com/karpathy/nanoGPT"],
["RESEARCH","Hugging Face","Models, datasets, demos and open-source ML infrastructure.","https://huggingface.co/"],
["RESEARCH","arXiv — Artificial Intelligence","A live stream of new AI research papers.","https://arxiv.org/list/cs.AI/recent"],
["BENCHMARKS","Papers with Code","Research connected to implementations, datasets and benchmark results.","https://paperswithcode.com/"],
["AGENTS","Model Context Protocol","An open protocol for connecting AI applications with tools and data sources.","https://modelcontextprotocol.io/"],
["AGENTS","LlamaIndex","Tools for building data-connected LLM and agent systems.","https://www.llamaindex.ai/"],
["RESEARCH","Anthropic Research","Primary research and engineering work on models, agents and safety.","https://www.anthropic.com/research"],
["RESEARCH","Google DeepMind Research","Research across AI, agents, science, robotics and multimodal systems.","https://deepmind.google/research/"],
["INSPIRATION","100 Days of ML Code — Avik Jain","The inspiration for turning learning into a public daily practice rather than a static course.","https://github.com/Avik-Jain/100-Days-Of-ML-Code"]
];

const $=s=>document.querySelector(s);

/*
  Publishing model
  ----------------
  Day 1 is the day this journal launched: 04 Oct 2026.
  Add a new object to `drops` and it automatically becomes the next day.
  The content lives in GitHub, so every published day remains accessible.
*/
const JOURNAL_START = "2026-10-04";

function localDateKey(date=new Date()){
  const y=date.getFullYear();
  const m=String(date.getMonth()+1).padStart(2,"0");
  const d=String(date.getDate()).padStart(2,"0");
  return `${y}-${m}-${d}`;
}

function dayNumberForDate(date=new Date()){
  const start=new Date(`${JOURNAL_START}T00:00:00`);
  const current=new Date(`${localDateKey(date)}T00:00:00`);
  return Math.floor((current-start)/86400000)+1;
}

// Day 02 is intentionally released alongside Day 01 on launch day.
const RELEASED_DAY_COUNT = 2;

function publishedCount(){
  return Math.min(Math.max(dayNumberForDate()+1,RELEASED_DAY_COUNT),drops.length);
}

function currentIndex(){
  return publishedCount()-1;
}

function dateForDay(index){
  const d=new Date(`${JOURNAL_START}T00:00:00`);
  // Day 02 was released early on launch day; normal daily cadence resumes from Day 03.
  d.setDate(d.getDate()+Math.max(index-1,0));
  return d.toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});
}

let selectedIndex=currentIndex();
let completed={};
try{
  const raw=localStorage.getItem("agi-read");
  completed=raw?JSON.parse(raw):{};
  if(!completed || typeof completed!=="object") completed={};
}catch(e){
  completed={};
}
function safeStorageGet(key,fallback=""){
  try{return localStorage.getItem(key)??fallback}catch(e){return fallback}
}
function safeStorageSet(key,value){
  try{localStorage.setItem(key,value)}catch(e){}
}

function updateUrl(index){
  history.replaceState(null,"",index===currentIndex() ? location.pathname+location.search : `#day=${index+1}`);
}

function readDayFromHash(){
  const match=location.hash.match(/^#day=(\d+)$/);
  if(!match) return null;
  const index=Number(match[1])-1;
  return index>=0 && index<publishedCount() ? index : null;
}

function showDrop(i){
  if(i<0 || i>=publishedCount()) return;
  selectedIndex=i;
  const d=drops[i];
  const isToday=i===currentIndex();

  $("#todayLabel").textContent=isToday ? "TODAY'S DROP" : "JOURNAL DROP";
  $("#todayDate").textContent=dateForDay(i);
  $("#todayNumber").textContent="DAY "+String(i+1).padStart(2,"0");
  $("#todayTitle").textContent=d.title;
  $("#todayHook").textContent=d.hook;
  $("#todayTags").innerHTML=d.tags.map(t=>"<span>"+t+"</span>").join("");
  $("#idea").textContent=d.idea;
  $("#why").textContent=d.why;
  $("#experiment").textContent=d.experiment;
  $("#failure").textContent=d.failure;
  $("#takeaway").textContent=d.takeaway;

  $("#predictionQuestion").textContent=d.q;
  $(".choice-row button:nth-child(1)").textContent=d.a;
  $(".choice-row button:nth-child(2)").textContent=d.b;
  $("#predictionResult").textContent="Choose an answer before reading.";
  document.querySelectorAll(".choice-row button").forEach((b,n)=>{
    b.onclick=(event)=>{event.preventDefault();$("#predictionResult").textContent=n===0?d.resultA:d.resultB;document.querySelectorAll(".choice-row button").forEach(x=>x.classList.remove("chosen"));b.classList.add("chosen");};
  });

  $("#dayStatus").textContent=`DAY ${i+1} OF ${publishedCount()}`;
  $("#prevDay").disabled=i===0;
  $("#nextDay").disabled=i===currentIndex();
  $("#prevDay").classList.toggle("disabled",i===0);
  $("#nextDay").classList.toggle("disabled",i===currentIndex());
  $("#saveToday").textContent=completed[i] ? "Saved ✓" : "Save to notebook";
}

function openDay(i){
  if(i<0 || i>=publishedCount()) return;
  showDrop(i);
  updateUrl(i);
  document.querySelector("#today").scrollIntoView({behavior:"smooth",block:"start"});
}

function renderArchive(){
  const q=$("#search").value.toLowerCase();
  const count=publishedCount();
  $("#archiveMeta").textContent=`${count} day${count===1?"":"s"} published · each one stays in the archive`;
  const list=drops.map((d,i)=>({...d,i}))
    .slice(0,count)
    .filter(d=>(d.title+" "+d.hook+" "+d.tags.join(" ")).toLowerCase().includes(q));

  $("#archiveGrid").innerHTML=list.map(d=>`
    <article class="archive-card ${d.i===selectedIndex?"active":""}" data-i="${d.i}">
      <div class="num">DAY ${String(d.i+1).padStart(2,"0")} · ${dateForDay(d.i)}</div>
      <h3>${d.title}</h3>
      <p>${d.hook}</p>
      <a class="archive-link" href="days/day-${String(d.i+1).padStart(2,"0")}/" onclick="event.stopPropagation()">Open day →</a>
    </article>`).join("") || "<p>No match yet.</p>";

  document.querySelectorAll(".archive-card").forEach(c=>c.onclick=()=>openDay(+c.dataset.i));
}

function renderResearch(){
  $("#researchGrid").innerHTML=research.map(r=>"<article class='research-card'><div class='type'>"+r[0]+"</div><h3>"+r[1]+"</h3><p>"+r[2]+"</p><a target='_blank' rel='noopener' href='"+r[3]+"'>Open resource ↗</a></article>").join("");
}
function saveNote(){
  safeStorageSet("agi-note",$("#note").value);
  safeStorageSet("agi-note-day",String(selectedIndex));
  $("#noteSaved").textContent="Saved locally ✓";
  setTimeout(()=>$("#noteSaved").textContent="",1800);
}

$("#search").oninput=renderArchive;
$("#saveNote").onclick=saveNote;
$("#note").value=safeStorageGet("agi-note");

$("#saveToday").onclick=()=>{
  completed[selectedIndex]=true;
  safeStorageSet("agi-read",JSON.stringify(completed));
  $("#saveToday").textContent="Saved ✓";
};

$("#prevDay").onclick=()=>openDay(selectedIndex-1);
$("#nextDay").onclick=()=>openDay(selectedIndex+1);
$("#olderBtn").onclick=()=>document.querySelector("#archive").scrollIntoView({behavior:"smooth"});

function randomDrop(){
  const count=publishedCount();
  openDay(Math.floor(Math.random()*count));
}
$("#surpriseBtn").onclick=randomDrop;
$("#randomHero").onclick=randomDrop;

const hashIndex=readDayFromHash();
showDrop(hashIndex===null?currentIndex():hashIndex);
renderArchive();
renderResearch();

window.addEventListener("hashchange",()=>{
  const i=readDayFromHash();
  if(i!==null) showDrop(i);
});

// Robust interaction fallback for dynamically-rendered archive cards and prediction buttons.
document.addEventListener("click",event=>{
  const button=event.target.closest(".choice-row button");
  if(button){
    const n=button.dataset.choice==="A"?0:1;
    const d=drops[selectedIndex];
    $("#predictionResult").textContent=n===0?d.resultA:d.resultB;
    document.querySelectorAll(".choice-row button").forEach(x=>x.classList.remove("chosen"));
    button.classList.add("chosen");
    return;
  }
  const card=event.target.closest(".archive-card");
  if(card && !event.target.closest("a")) openDay(Number(card.dataset.i));
});
