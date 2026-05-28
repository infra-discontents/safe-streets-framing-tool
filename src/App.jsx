import { useState } from "react";

const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --slate-900: #0f1419;
    --slate-800: #1a2332;
    --slate-700: #243044;
    --slate-600: #3a4a5c;
    --slate-400: #7a8fa3;
    --slate-200: #c8d4e0;
    --slate-100: #e8eef4;
    --amber: #d4890a;
    --amber-light: #f0a825;
    --amber-pale: #fef3dc;
    --green: #2d7a4f;
    --green-light: #e8f5ee;
    --red-pale: #fdf0f0;
    --red: #b84040;
    --white: #f9fafb;
    --serif: 'Source Serif 4', Georgia, serif;
    --display: 'Playfair Display', Georgia, serif;
    --mono: 'JetBrains Mono', monospace;
  }

  body {
    font-family: var(--serif);
    background: var(--slate-900);
    color: var(--slate-100);
    min-height: 100vh;
    line-height: 1.6;
  }

  .app-shell {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  /* HEADER */
  .header {
    padding: 40px 0 32px;
    border-bottom: 1px solid var(--slate-700);
    margin-bottom: 40px;
  }
  .header-eyebrow {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--amber);
    margin-bottom: 10px;
  }
  .header h1 {
    font-family: var(--display);
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 700;
    color: var(--white);
    line-height: 1.15;
    margin-bottom: 12px;
  }
  .header-sub {
    font-size: 15px;
    color: var(--slate-400);
    font-style: italic;
    max-width: 560px;
    line-height: 1.5;
  }

  /* THEORY PANEL */
  .theory-toggle {
    background: none;
    border: 1px solid var(--slate-600);
    color: var(--slate-400);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 2px;
    margin-bottom: 16px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .theory-toggle:hover { border-color: var(--amber); color: var(--amber); }
  .theory-panel {
    background: var(--slate-800);
    border: 1px solid var(--slate-600);
    border-left: 3px solid var(--amber);
    padding: 24px 28px;
    margin-bottom: 36px;
    border-radius: 0 2px 2px 0;
  }
  .theory-panel h3 {
    font-family: var(--display);
    font-size: 16px;
    color: var(--amber-light);
    margin-bottom: 14px;
  }
  .theory-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 600px) { .theory-grid { grid-template-columns: 1fr; } }
  .theory-item h4 {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--amber);
    margin-bottom: 6px;
  }
  .theory-item p {
    font-size: 13px;
    color: var(--slate-200);
    line-height: 1.55;
  }

  /* FORM */
  .form-section {
    margin-bottom: 40px;
  }
  .section-label {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--amber);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--slate-700);
  }

  .field-group {
    margin-bottom: 24px;
  }
  .field-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--slate-200);
    margin-bottom: 8px;
    letter-spacing: 0.02em;
  }
  .field-hint {
    font-size: 12px;
    color: var(--slate-400);
    font-style: italic;
    margin-bottom: 8px;
    display: block;
  }

  .chip-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .chip {
    background: var(--slate-800);
    border: 1px solid var(--slate-600);
    color: var(--slate-200);
    font-family: var(--serif);
    font-size: 13px;
    padding: 7px 14px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s;
    line-height: 1.3;
  }
  .chip:hover { border-color: var(--amber); color: var(--white); }
  .chip.selected {
    background: var(--amber);
    border-color: var(--amber);
    color: var(--slate-900);
    font-weight: 600;
  }
  .chip.multi.selected {
    background: var(--slate-700);
    border-color: var(--amber-light);
    color: var(--amber-light);
  }

  .data-toggle {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }
  .toggle-track {
    width: 44px; height: 24px;
    background: var(--slate-700);
    border-radius: 12px;
    position: relative;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .toggle-track.on { background: var(--amber); }
  .toggle-thumb {
    width: 18px; height: 18px;
    background: var(--white);
    border-radius: 50%;
    position: absolute;
    top: 3px; left: 3px;
    transition: transform 0.2s;
  }
  .toggle-track.on .toggle-thumb { transform: translateX(20px); }
  .toggle-label { font-size: 13px; color: var(--slate-200); }

  /* GENERATE BUTTON */
  .generate-btn {
    background: var(--amber);
    color: var(--slate-900);
    border: none;
    font-family: var(--display);
    font-size: 17px;
    font-weight: 700;
    padding: 16px 40px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.2s;
    letter-spacing: 0.01em;
    display: block;
    width: 100%;
    margin-top: 8px;
  }
  .generate-btn:hover { background: var(--amber-light); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(212,137,10,0.3); }
  .generate-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }

  /* OUTPUT */
  .output-section {
    margin-top: 48px;
    border-top: 1px solid var(--slate-700);
    padding-top: 40px;
    animation: fadeIn 0.4s ease;
  }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

  .output-header {
    margin-bottom: 32px;
  }
  .output-header h2 {
    font-family: var(--display);
    font-size: 22px;
    color: var(--white);
    margin-bottom: 6px;
  }
  .output-meta {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--slate-400);
    letter-spacing: 0.1em;
  }

  .frame-card {
    background: var(--slate-800);
    border: 1px solid var(--slate-600);
    border-radius: 3px;
    margin-bottom: 24px;
    overflow: hidden;
  }
  .frame-card-header {
    padding: 14px 20px;
    background: var(--slate-700);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .frame-number {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--amber);
  }
  .frame-title {
    font-family: var(--display);
    font-size: 15px;
    color: var(--white);
    font-weight: 600;
    flex: 1;
  }
  .frame-tag {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 2px;
    background: var(--slate-600);
    color: var(--slate-200);
  }
  .frame-tag.values { background: rgba(212,137,10,0.2); color: var(--amber-light); }
  .frame-tag.resistance { background: rgba(184,64,64,0.2); color: #e08080; }
  .frame-tag.action { background: rgba(45,122,79,0.2); color: #6abf8a; }

  .frame-body { padding: 20px; }
  .frame-message {
    font-size: 15px;
    color: var(--white);
    line-height: 1.7;
    font-style: italic;
    border-left: 3px solid var(--amber);
    padding-left: 16px;
    margin-bottom: 16px;
  }
  .frame-rationale {
    font-size: 13px;
    color: var(--slate-400);
    line-height: 1.6;
    padding: 12px 16px;
    background: var(--slate-900);
    border-radius: 2px;
  }
  .frame-rationale strong { color: var(--slate-200); font-weight: 600; }

  .avoid-section {
    margin-top: 28px;
    padding: 18px 20px;
    background: var(--red-pale);
    border: 1px solid #e0b0b0;
    border-radius: 3px;
    color: var(--slate-900);
  }
  .avoid-section h4 {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 10px;
  }
  .avoid-list { list-style: none; }
  .avoid-list li {
    font-size: 13px;
    color: #5a2a2a;
    padding: 4px 0;
    padding-left: 16px;
    position: relative;
    line-height: 1.5;
  }
  .avoid-list li::before { content: '✕'; position: absolute; left: 0; color: var(--red); font-size: 11px; top: 5px; }

  .action-block {
    margin-top: 28px;
    padding: 18px 20px;
    background: var(--green-light);
    border: 1px solid #a0d0b0;
    border-radius: 3px;
    color: var(--slate-900);
  }
  .action-block h4 {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 10px;
  }
  .action-block p { font-size: 14px; color: #1a3d2a; line-height: 1.6; }

  .norm-block {
    margin-top: 16px;
    padding: 14px 16px;
    background: rgba(212,137,10,0.08);
    border: 1px solid rgba(212,137,10,0.3);
    border-radius: 2px;
  }
  .norm-block h4 {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--amber);
    margin-bottom: 6px;
  }
  .norm-block p { font-size: 13px; color: var(--slate-200); font-style: italic; }

  .copy-btn {
    background: none;
    border: 1px solid var(--slate-600);
    color: var(--slate-400);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 5px 12px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.15s;
    margin-top: 12px;
  }
  .copy-btn:hover { border-color: var(--amber); color: var(--amber); }
  .copy-btn.copied { border-color: var(--green); color: var(--green); }

  .reset-btn {
    background: none;
    border: 1px solid var(--slate-600);
    color: var(--slate-400);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 8px 20px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.2s;
    margin-top: 32px;
  }
  .reset-btn:hover { border-color: var(--slate-400); color: var(--white); }

  .validation-msg {
    font-family: var(--mono);
    font-size: 11px;
    color: #e08080;
    margin-top: 10px;
    letter-spacing: 0.05em;
  }
`;

// ─── FRAMING KNOWLEDGE BASE ────────────────────────────────────────────────

const RESISTANCE_INOCULATION = {
  cost: {
    label: "Too expensive",
    acknowledge: "Investing in our streets is a real commitment of shared resources.",
    reframe: "When we calculate the full cost of preventable crashes — emergency response, hospital care, lost productivity, legal liability — the cost of inaction is consistently higher. Communities that have made these investments report reduced liability exposure and lower long-term infrastructure maintenance costs.",
    avoid: ["dismiss the concern as uninformed", "lead with statistics before acknowledging the concern", "use jargon like 'benefit-cost ratio' without translation"]
  },
  delay: {
    label: "This will make me late / slow me down",
    acknowledge: "Nobody wants to add time to an already busy commute — that's a completely reasonable concern.",
    reframe: "Research consistently shows that travel time variability — the unpredictability of when you'll arrive — is what most people actually find stressful, not the average time itself. Streets designed for only one way of getting around are more vulnerable to disruption. When more of our neighbors have safe ways to walk, bike, or take transit, there are fewer cars competing for the same space — which benefits everyone behind the wheel too.",
    avoid: ["claim travel times won't change at all", "frame drivers as the problem", "use 'induced demand' without explanation"],
    dynamicNorm: "In communities that have added protected infrastructure, peak-hour delay for drivers often decreases within 18–24 months as mode shift takes hold."
  },
  nothere: {
    label: "We're not Amsterdam / NYC / Portland",
    acknowledge: "Our community has its own character, its own history, and its own way of doing things. That matters.",
    reframe: "This isn't about copying a European city or a coastal metropolis. Communities like Chattanooga, Tulsa, Fayetteville, and Missoula have built safer streets and seen real results — places that look a lot more like us than Amsterdam does. What works is less about the city and more about the design principle: giving people safe options. Our community deserves solutions built for our streets, our neighbors, and our values.",
    avoid: ["hold up Amsterdam or Copenhagen as the goal", "frame resistance as provincial or uninformed", "imply the community needs to 'catch up'"],
    dynamicNorm: "Over 1,400 U.S. communities — many in the South and Midwest — have adopted Complete Streets policies in the past decade."
  },
  freedom: {
    label: "Government overreach / personal freedom",
    acknowledge: "The idea that streets should serve everyone in our community — not just mandate how we get around — is a value worth taking seriously.",
    reframe: "Safe streets infrastructure doesn't tell anyone how to travel. It expands the choices available to our neighbors. Right now, many people in our community — children, seniors, people with disabilities, people without access to a car — effectively have no safe option other than driving or staying home. Giving people real choices is what expanding freedom actually looks like.",
    avoid: ["dismiss the liberty frame", "invoke regulation or mandates in your lead", "use 'Vision Zero' without context — it can trigger ideological response in some audiences"]
  },
  effectiveness: {
    label: "It won't actually work here",
    acknowledge: "Skepticism about whether a design change will deliver on its promises is healthy — and advocates should be able to answer it.",
    reframe: "The evidence base here is unusually strong. [Intervention type] has been studied across dozens of U.S. communities in a wide range of contexts. The safety outcomes are consistent. The question isn't whether the design works — it's whether we're willing to make the same commitment to our neighbors that other communities have made to theirs.",
    avoid: ["use the word 'proven' without citing a source", "overpromise on specific outcome numbers", "imply skeptics are uninformed"]
  },
  equity: {
    label: "Enforcement concerns / racial equity",
    acknowledge: "The history of traffic enforcement in communities like ours is real, and concerns about who bears the burden of safety interventions are legitimate and important.",
    reframe: "Engineering-first approaches — the kind we're discussing — shift the emphasis away from citations and penalties and toward designs that make safe behavior the natural choice for everyone. A well-designed intersection protects everyone who uses it, regardless of who they are. That's a meaningfully different tool than enforcement, and it's one that communities across the ideological spectrum are increasingly embracing.",
    avoid: ["conflate engineering interventions with enforcement", "minimize equity concerns", "frame this as a 'both sides' issue"]
  },
  emergency: {
    label: "Emergency vehicles will be delayed",
    acknowledge: "Response times matter — and anyone who has waited for an ambulance or fire truck to arrive understands why this concern is worth taking seriously.",
    reframe: "The research on this is more reassuring than the intuition suggests. Studies of roundabouts, narrowed lanes, and traffic calming consistently show that emergency response times are minimally affected — often because calmer traffic conditions reduce conflicts that slow emergency vehicles in the first place. Fire and EMS agencies in communities that have implemented these designs frequently report that their initial concerns were not borne out. It's also worth noting: the crashes and serious injuries these designs prevent are themselves major consumers of emergency response capacity.",
    avoid: ["dismiss the concern as uninformed", "claim there is zero impact — the data show minimal impact, not zero", "engage this before establishing the safety benefits clearly"],
    dynamicNorm: "Fire departments in communities that have implemented road calming measures — including roundabouts — widely report that emergency response concerns were not realized in practice."
  },
  diversion: {
    label: "Traffic will divert to our street",
    acknowledge: "Nobody wants to solve one street's problem by pushing it onto a neighbor's block. That's a fair concern and one that good planning needs to address.",
    reframe: "Traffic diversion is real but manageable — and the answer is network-level thinking, not inaction. When calming measures are implemented as part of a coordinated neighborhood or corridor strategy rather than a single isolated block, diversion effects are substantially reduced. The goal is a network where safe speeds and safe designs are the norm across connected streets — not a game of whack-a-mole. This is exactly why community input during the design phase matters: to identify the full network and address it together.",
    avoid: ["dismiss diversion concerns as overblown", "promise there will be no diversion without data to support it", "treat this as a reason not to act rather than a reason to plan more carefully"],
    dynamicNorm: "Communities that implement area-wide traffic calming programs — rather than single-block interventions — consistently report lower diversion effects and higher resident satisfaction."
  },
  parking: {
    label: "Parking loss will hurt small businesses",
    acknowledge: "Local businesses are the backbone of our community, and any change that threatens their customers' ability to reach them deserves serious consideration — not dismissal.",
    reframe: "The relationship between parking and business revenue is more complicated than the intuition suggests, and the research is fairly consistent: business owners routinely overestimate how many of their customers arrive by car, and studies of retail corridors after protected bike lane or curb extension installation have generally found neutral to positive effects on sales. People who walk, bike, and take transit to a commercial street tend to visit more frequently and spend comparably per trip. A street that more people feel safe using is a street with more potential customers — not fewer. That said, transition support matters, and good planning includes working with businesses on loading access and customer communication during and after construction.",
    avoid: ["dismiss parking concerns as NIMBYism", "claim parking removal is always good for business — the evidence is context-dependent", "engage this without acknowledging the genuine uncertainty some business owners feel"],
    dynamicNorm: "Studies of protected bike lane installations in commercial districts in cities including New York, San Francisco, and Austin found retail sales remained stable or increased after installation."
  },
  emptylanes: {
    label: "The bike lanes are always empty",
    acknowledge: "It's a fair observation — and if a lane feels empty most of the time, it's reasonable to ask whether the investment was worth it.",
    reframe: "Bike lane usage follows a pattern that's well-documented in transportation research: you build for the people who will ride, not just the people who are already riding. When a protected lane goes in on a corridor where there was no safe infrastructure before, the riders who show up are often people who weren't visible before — because they weren't riding. Women, older adults, children, and people new to cycling are dramatically underrepresented in before counts and significantly increase after protected infrastructure is installed. A lane that looks empty to a driver passing at 35 mph may have dozens of users per hour. And the question of whether a lane is 'worth it' should include the crashes it prevents among all road users, not just whether cyclists are visible at any given moment.",
    avoid: ["get defensive about usage numbers without having them", "claim bike lanes are always heavily used — usage varies enormously by corridor and context", "frame this as a cyclist vs. driver argument"],
    dynamicNorm: "Studies consistently find that protected bike infrastructure induces new cycling trips among people who previously did not cycle — particularly women and older adults."
  },
  blame: {
    label: "The roads are fine — it's bad drivers and distracted pedestrians",
    acknowledge: "Human behavior on the road matters — nobody is arguing otherwise. Distraction, impairment, and inattention are real factors in crashes.",
    reframe: "The question isn't whether human error contributes to crashes — it does, reliably and predictably. The question is what we do with that knowledge. If we know people will make mistakes — because they always have and always will — then a system that only stays safe when everyone behaves perfectly isn't actually safe. The Safe System approach doesn't excuse bad behavior; it designs roads so that when a mistake happens, the outcome is a near-miss rather than a fatality. The countries and communities with the lowest road death rates aren't the ones with the most disciplined drivers — they're the ones with the best-designed roads. We can have both: accountability for behavior and infrastructure that doesn't punish mistakes with death.",
    avoid: ["imply that drivers are not responsible for their actions", "use the phrase 'human error is inevitable' without clarifying what it means practically", "let this frame go unaddressed — it is one of the most common and most corrosive to Safe System support"],
  },
  outsiders: {
    label: "This is being forced on us by out-of-touch planners",
    acknowledge: "The frustration behind this is real. Too many infrastructure decisions have historically been made by people who don't live with the consequences — and communities have every right to expect that their voices shape their streets.",
    reframe: "That's exactly why this process matters — and why we're having this conversation. [If applicable: This proposal came out of a community input process that included X sessions, Y residents, and Z neighborhood organizations.] The goal isn't to impose a design from outside; it's to implement solutions that have worked in communities like ours and to do it in a way that reflects what our neighbors said they need. Planners and engineers bring technical expertise; residents bring knowledge of how their streets actually work. Both are necessary. The question isn't whether outside knowledge has a role — it's whether the community is at the table shaping how it's applied. You are.",
    avoid: ["dismiss the sentiment as anti-expert or anti-progress", "over-defend the process if it genuinely didn't include adequate community engagement", "use technical language that reinforces the 'out-of-touch' frame"],
    dynamicNorm: "The most successfully implemented Safe System projects nationally are those with documented community co-design processes — not top-down installations."
  }
};

const INTERVENTION_DATA = {
  speedtable: {
    label: "Speed table / raised crosswalk",
    capabilities: "allows children, seniors, and people with mobility challenges to cross streets where drivers reliably yield",
    evidenceLine: "Raised crosswalks reduce pedestrian crash risk by 45–75% at treated locations.",
    avoidFrames: ["speed bumps are annoying", "punishing drivers"]
  },
  bikelane: {
    label: "Protected bike lane",
    capabilities: "allows children to bike to school and after-school activities, gives adults without cars a safe route to work, and gives anyone who wants to ride a way to do so without fear",
    evidenceLine: "Protected lanes reduce cyclist injury rates by over 75% compared to painted lanes.",
    avoidFrames: ["taking lanes away from drivers", "for cyclists only"]
  },
  roundabout: {
    label: "Roundabout",
    capabilities: "allows drivers, pedestrians, and cyclists to move through an intersection with dramatically lower risk of severe injury — especially for older drivers who benefit from the elimination of left-turn conflicts",
    evidenceLine: "Roundabouts reduce fatal and injury crashes by 70–90% compared to signalized intersections.",
    avoidFrames: ["confusing", "hard to navigate — lead with the safety data first, then offer a navigation explainer"],
    specialNote: "Roundabout resistance is often rooted in unfamiliarity anxiety, not values. Acknowledge that they feel different at first, then pivot to the lived experience: most people have used one and were fine. A dynamic norm works especially well here."
  },
  schoolzone: {
    label: "School zone redesign",
    capabilities: "gives every child in our community a safer path to school — whether they walk, bike, or arrive by car — and reduces the anxiety parents feel every morning drop-off",
    evidenceLine: "Comprehensive school zone safety improvements reduce pedestrian injuries near schools by 44%.",
    avoidFrames: ["slowing down everyone", "inconveniencing drivers"]
  },
  ada: {
    label: "ADA intersection upgrades",
    capabilities: "allows neighbors with mobility impairments, vision loss, or other disabilities to move through our community with independence and dignity — something that touches every family eventually",
    evidenceLine: "Accessible pedestrian signals and curb ramps benefit not just people with disabilities but parents with strollers, older adults, and delivery workers.",
    avoidFrames: ["legal compliance only — this triggers reactance; lead with belonging and dignity, then note the legal foundation"],
    specialNote: "Resistance here is usually fiscal and prioritization-based, not overt opposition. Lead with community belonging. Invoke legal obligation as a secondary grounding, not a threat."
  },
  automated: {
    label: "Automated speed/red-light enforcement",
    capabilities: "allows every neighborhood — not just those with dedicated traffic enforcement resources — to have consistent safety without relying on inequitable human enforcement patterns",
    evidenceLine: "Automated enforcement reduces speeds at treated locations by 8–15% and related crashes by 20–40%.",
    avoidFrames: ["revenue generation", "surveillance — address this proactively if it's likely to come up"],
    specialNote: "This intervention requires the most careful framing work. Lead with engineering context: cameras are a tool of last resort in a safety system, not a replacement for good design. Distinguish from punitive enforcement explicitly."
  },
  completestreets: {
    label: "Complete Streets policy",
    capabilities: "allows every person in our community — regardless of age, ability, or how they get around — to use our streets safely and with dignity",
    evidenceLine: "Complete Streets policies are associated with 17% lower pedestrian fatality rates in adopting communities.",
    avoidFrames: ["anti-car", "forcing people out of cars"]
  },
  roaddiet: {
    label: "Road diet",
    capabilities: "allows people on foot, bike, and in vehicles to share the same corridor more safely by reducing conflict points and creating dedicated spaces for turning — making the road work better for everyone who uses it",
    evidenceLine: "Road diets reduce total crashes by 19–47% while maintaining or improving overall traffic flow on corridors carrying under 20,000 vehicles per day.",
    avoidFrames: ["taking lanes away", "reducing road capacity — reframe as optimizing for safety and efficiency, not subtracting from drivers"],
    specialNote: "Road diets are among the most misunderstood interventions because the name itself sounds like a loss. Avoid the term 'road diet' with general public audiences when possible; use 'right-sizing our streets' or 'safer corridor redesign' instead."
  },
  chicanes: {
    label: "Chicanes / horizontal deflection",
    capabilities: "allows children to play near their homes and gives pedestrians a safer street environment by naturally slowing vehicles to speeds where serious injuries are far less likely",
    evidenceLine: "Horizontal deflection measures like chicanes reduce vehicle speeds by 10–15 mph and are associated with significant reductions in pedestrian injury severity.",
    avoidFrames: ["obstacle course", "inconvenient — frame as the street working as it should, not as an added burden"],
    specialNote: "Chicanes are rarely the subject of a public campaign on their own — they usually appear as part of a neighborhood traffic calming package. Frame at the package level (safer neighborhood streets) rather than the individual device level."
  },
  lanenarrow: {
    label: "Lane narrowing",
    capabilities: "allows drivers to naturally travel at safer speeds — not because they're told to, but because the road is designed to make safe speeds feel right — while often freeing space for sidewalks, bike lanes, or green infrastructure",
    evidenceLine: "Narrowing travel lanes from 12 to 10 feet reduces operating speeds by 3–7 mph and is associated with a 6% reduction in crashes per lane-mile.",
    avoidFrames: ["making roads more dangerous by narrowing them — the counterintuitive evidence here is strong and worth stating clearly", "taking space from drivers"],
    specialNote: "This is a case where the framing must confront a genuine intuition gap: most people believe wider roads are safer. Lead with the behavioral mechanism — drivers self-regulate speed based on how the road feels — before presenting the data."
  },
  curbextension: {
    label: "Curb extensions / bulb-outs",
    capabilities: "allows people crossing the street — especially children, older adults, and people using mobility devices — to be seen by drivers sooner and to cross a shorter distance, while calming the corner for everyone",
    evidenceLine: "Curb extensions reduce pedestrian exposure distance by 30–40% and improve driver yielding behavior significantly at treated crossings.",
    avoidFrames: ["removing parking — this is a frequent flashpoint; address it directly and early", "slowing emergency vehicles — this should be addressed with data if it arises"],
    specialNote: "Parking removal is the dominant resistance trigger for curb extensions. See the 'parking loss / small business' resistance type — address it proactively rather than waiting for it to be raised."
  },
  speedcamera: {
    label: "Speed safety cameras",
    capabilities: "allows every school zone, every high-injury corridor, and every neighborhood where children play to have consistent speed management — not dependent on who lives there or how many officers are on shift",
    evidenceLine: "Speed safety cameras reduce speeds at treated locations and are associated with 20–40% reductions in injury crashes; school zone camera programs show particularly strong results.",
    avoidFrames: ["gotcha enforcement", "revenue generation — address this frame directly and early; it is the most damaging", "big brother surveillance"],
    specialNote: "Speed cameras carry the heaviest messaging burden of any intervention in this tool. The revenue and surveillance frames are deeply embedded. Your strongest counter is equity: cameras apply the same standard to every driver on every block, regardless of zip code or race — something officer-discretion enforcement cannot claim. Lead there."
  }
};

const AUDIENCE_CONFIG = {
  public: {
    label: "General public",
    leadValue: "community belonging and protection of family",
    toneNote: "Accessible, warm, story-grounded. Lead with a neighbor, a child, a parent — then support with data. Avoid technical terms entirely.",
    pronounStrategy: "Heavy use of 'our neighbors,' 'our children,' 'our community.' Avoid 'stakeholders,' 'users,' 'pedestrians.'"
  },
  council: {
    label: "City / county council",
    leadValue: "fiscal responsibility, legal standing, and community reputation",
    toneNote: "Credible, evidence-forward, professionally confident. Brief on values, detailed on data and precedent. Show you've done your homework.",
    pronounStrategy: "Use 'our community' and 'our constituents.' Connect to council's stated priorities where possible."
  },
  dot: {
    label: "State / federal DOT staff",
    leadValue: "technical credibility, program alignment, and system performance",
    toneNote: "Peer-register communication. Lead with methodology and evidence quality. Framing still matters but technical grounding is the primary credibility signal.",
    pronounStrategy: "More restrained. 'Communities we serve,' 'program outcomes,' 'system users' are acceptable here."
  },
  media: {
    label: "Local media",
    leadValue: "human interest, local relevance, and systemic narrative",
    toneNote: "Thematic over episodic. Lead with a local story, zoom out to the pattern. Give reporters the systemic frame so they don't default to individual blame.",
    pronounStrategy: "Give them the 'our streets' and 'our neighbors' language — they may or may not use it, but it seeds the frame."
  },
  schoolboard: {
    label: "School board",
    leadValue: "child safety and parental peace of mind",
    toneNote: "Parent-register language. 'Every child deserves a safe path to school' is more effective than injury statistics alone. Connect to academic outcomes where data exist.",
    pronounStrategy: "Use 'our students,' 'our families,' 'our schools.' Avoid bureaucratic language entirely."
  }
};

const USER_ROLES = {
  advocate: { label: "Advocate / NGO staff", note: "Prioritize community voice and values resonance. Your credibility is relational." },
  researcher: { label: "Researcher / academic", note: "Lead with evidence quality, then translate to values. Your credibility is methodological." },
  bureaucrat: { label: "Government / DOT staff", note: "Your credibility is institutional. Use it to anchor technical claims while letting partners carry the values lead when possible." }
};

// ─── FRAME GENERATOR ──────────────────────────────────────────────────────

function generateFrames({ role, intervention, audience, resistances, hasData }) {
  const iv = INTERVENTION_DATA[intervention];
  const aud = AUDIENCE_CONFIG[audience];
  const roleConfig = USER_ROLES[role];
  const frames = [];

  // FRAME 1: Values Lead
  frames.push({
    number: "01",
    tag: "values",
    tagLabel: "Values Lead",
    title: `Community & Capability Frame`,
    message: `Our streets should work for all of us — our children walking to school, our neighbors using wheelchairs, our parents running errands. When we right-size our roads, we create space for everyone to move safely, whether on foot, by bike, or by car. That's not a special interest. That's who we are.`,
    rationale: `<strong>Values–Solutions–Action Framework (Michael, Chirles, Frattaroli, LaJeunesse et al., 2023):</strong> Opens on shared community identity before introducing the intervention. Activates intrinsic pro-social values (community belonging, protection of family) rather than extrinsic frames (cost, rules, compliance). Uses collective pronouns throughout. Capabilities language follows Sen/Nussbaum: the intervention expands what's possible for real people, not just what's prohibited for drivers.`
  });

  // FRAME 2: Evidence + Resistance Inoculation
  const primaryResistance = resistances[0];
  if (primaryResistance && RESISTANCE_INOCULATION[primaryResistance]) {
    const ri = RESISTANCE_INOCULATION[primaryResistance];
    let message = `${ri.acknowledge} ${ri.reframe}`;
    if (hasData && ri.dynamicNorm) {
      message += ` And we don't have to guess at outcomes — ${ri.dynamicNorm.toLowerCase()}`;
    }
    message += ` ${iv.evidenceLine} Our neighbors deserve that same protection.`;

    frames.push({
      number: "02",
      tag: "resistance",
      tagLabel: "Resistance Inoculation",
      title: `Addressing: "${ri.label}"`,
      message,
      rationale: `<strong>Inoculation framing:</strong> Acknowledges the concern before reframing it — this is critical. Dismissing or ignoring resistance amplifies it. The reframe doesn't attack the underlying value; it redirects it. ${hasData ? '<strong>Dynamic norm insert:</strong> Real trend data is woven in to shift the perceived trajectory of what "people like us" are doing. This is most effective when local or regional data are available.' : 'Tip: if you have local or regional before/after data, add it here as a dynamic norm — "communities like ours are increasingly..." — to shift perceived trajectory.'}`
    });
  }

  // FRAME 2b: second resistance if provided
  if (resistances[1] && RESISTANCE_INOCULATION[resistances[1]]) {
    const ri2 = RESISTANCE_INOCULATION[resistances[1]];
    frames.push({
      number: "02b",
      tag: "resistance",
      tagLabel: "Secondary Resistance",
      title: `Also addressing: "${ri2.label}"`,
      message: `${ri2.acknowledge} ${ri2.reframe}`,
      rationale: `<strong>Secondary inoculation:</strong> When two resistance types are present, address them separately rather than combining — conflating distinct objections muddies the reframe. Note the language patterns to avoid listed below.`
    });
  }

  // FRAME 3: Audience-Specific Frame
  frames.push({
    number: "03",
    tag: "values",
    tagLabel: "Audience-Tailored",
    title: `Frame for ${aud.label}`,
    message: `${aud.leadValue.charAt(0).toUpperCase() + aud.leadValue.slice(1)} is the frame that lands with this audience. ${iv.evidenceLine} ${audience === 'council' ? `This investment also protects our community from liability exposure and positions us alongside the growing number of communities that have made this commitment.` : audience === 'dot' ? `The evidence base here is consistent across study contexts and aligns with current FHWA and NCHRP guidance on [relevant program].` : audience === 'schoolboard' ? `Every family sending a child to school deserves to know our streets were designed with that child's safety in mind.` : audience === 'media' ? `This isn't an isolated incident or an individual failure — it's a pattern, and it's one our community has the tools to change.` : `Our neighbors are counting on us to make this a community where everyone can get around safely, regardless of how they travel.`}`,
    rationale: `<strong>Audience calibration (${aud.label}):</strong> ${aud.toneNote} <strong>Pronoun strategy:</strong> ${aud.pronounStrategy}`
  });

  return frames;
}

function generateAvoids(intervention, resistances) {
  const iv = INTERVENTION_DATA[intervention];
  const avoids = [...(iv.avoidFrames || [])];
  resistances.forEach(r => {
    if (RESISTANCE_INOCULATION[r]) {
      avoids.push(...(RESISTANCE_INOCULATION[r].avoid || []));
    }
  });
  return [...new Set(avoids)];
}

function generateAction(audience, intervention) {
  const iv = INTERVENTION_DATA[intervention];
  const actions = {
    public: `Let's show our support for streets that give everyone in our community a real choice about how they get around. Attend the public meeting, sign the petition, or write to your council member — and bring a neighbor.`,
    council: `We ask the council to move this forward. A vote for this investment is a vote for the kind of community we want our neighbors and our children to grow up in.`,
    dot: `We encourage the department to prioritize this corridor for [program/funding cycle]. We're glad to provide technical documentation and to connect program staff with peer communities who have implemented this successfully.`,
    media: `The story here isn't about one intersection or one incident — it's about whether our community will make the investment to give everyone a safe way home. That's a story worth telling.`,
    schoolboard: `Let's make sure every family in our district can send their child to school knowing the path there was designed with that child's safety in mind. We're asking the board to support this investment.`
  };
  return actions[audience] || actions.public;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────

function Chip({ label, value, selected, onClick, multi }) {
  return (
    <button
      className={`chip${selected ? " selected" : ""}${multi ? " multi" : ""}`}
      onClick={() => onClick(value)}
      type="button"
    >
      {label}
    </button>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className={`copy-btn${copied ? " copied" : ""}`} onClick={handleCopy}>
      {copied ? "✓ Copied" : "Copy text"}
    </button>
  );
}

function FrameCard({ frame }) {
  return (
    <div className="frame-card">
      <div className="frame-card-header">
        <span className="frame-number">Frame {frame.number}</span>
        <span className="frame-title">{frame.title}</span>
        <span className={`frame-tag ${frame.tag}`}>{frame.tagLabel}</span>
      </div>
      <div className="frame-body">
        <p className="frame-message">{frame.message}</p>
        <div className="frame-rationale" dangerouslySetInnerHTML={{ __html: `<strong>Why this works:</strong> ${frame.rationale}` }} />
        <CopyButton text={frame.message} />
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────

export default function FramingTool() {
  const [showTheory, setShowTheory] = useState(false);
  const [role, setRole] = useState(null);
  const [intervention, setIntervention] = useState(null);
  const [audience, setAudience] = useState(null);
  const [resistances, setResistances] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [output, setOutput] = useState(null);
  const [validationMsg, setValidationMsg] = useState("");

  const toggleResistance = (val) => {
    setResistances(prev =>
      prev.includes(val) ? prev.filter(r => r !== val) : prev.length < 2 ? [...prev, val] : [prev[1], val]
    );
  };

  const canGenerate = role && intervention && audience && resistances.length > 0;

  const handleGenerate = () => {
    if (!canGenerate) { setValidationMsg("Please complete all selections above before generating."); return; }
    setValidationMsg("");
    const frames = generateFrames({ role, intervention, audience, resistances, hasData });
    const avoids = generateAvoids(intervention, resistances);
    const action = generateAction(audience, intervention);
    const specialNote = INTERVENTION_DATA[intervention]?.specialNote;
    setOutput({ frames, avoids, action, specialNote, role, intervention, audience });
    setTimeout(() => document.getElementById("output-anchor")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleReset = () => {
    setRole(null); setIntervention(null); setAudience(null);
    setResistances([]); setHasData(false); setOutput(null); setValidationMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{STYLE}</style>
      <div className="app-shell">
        <header className="header">
          <p className="header-eyebrow">Transportation Safety Communication</p>
          <h1>Safe Streets Message Framing Tool</h1>
          <p className="header-sub">Generate evidence-based, values-aligned message frames for transportation safety policies and engineering interventions.</p>
        </header>

        <button className="theory-toggle" onClick={() => setShowTheory(v => !v)}>
          <span>{showTheory ? "▾" : "▸"}</span>
          How this works — framing theory
        </button>

        {showTheory && (
          <div className="theory-panel">
            <h3>The intellectual framework behind these frames</h3>
            <div className="theory-grid">
              <div className="theory-item">
                <h4>Values–Solutions–Action Framework</h4>
                <p>All frames follow the VSA scaffold developed by Michael, Chirles, Frattaroli, LaJeunesse et al. (2023) for the AAA Foundation for Traffic Safety: lead with a pro-social value, connect it to the specific solution, close with a collective action invitation. The FrameWorks Institute's broader framing research informed the VSA Framework's development.</p>
              </div>
              <div className="theory-item">
                <h4>Kasser: Intrinsic vs. Extrinsic Values</h4>
                <p>Frames activate intrinsic values (community belonging, safety, capability, dignity) rather than extrinsic ones (cost savings, personal gain, compliance). Research shows intrinsic value activation produces more durable attitude change and pro-social behavior.</p>
              </div>
              <div className="theory-item">
                <h4>Collective Pronouns</h4>
                <p>"Our streets," "our neighbors," "our community" activates collective identity and shared fate. This is especially important for infrastructure arguments, which can otherwise feel like zero-sum competition between user groups.</p>
              </div>
              <div className="theory-item">
                <h4>Dynamic Norms</h4>
                <p>Where trend data exist, frames use dynamic norm language ("communities like ours are increasingly...") rather than static norms. Dynamic norms signal trajectory, not just current state, and are more effective at shifting perceived social consensus.</p>
              </div>
              <div className="theory-item">
                <h4>Capabilities / Affordance Framing</h4>
                <p>Interventions are framed in terms of what they make possible for real people — drawing on Sen and Nussbaum's capabilities approach and ecological affordance theory. A protected lane isn't just safer; it opens a new possibility of action for a child, a senior, or a neighbor without a car.</p>
              </div>
              <div className="theory-item">
                <h4>Resistance Inoculation</h4>
                <p>Frames acknowledge likely resistance before reframing it. Dismissing or ignoring objections amplifies them. The goal is to redirect the underlying value, not to defeat the objector.</p>
              </div>
            </div>
          </div>
        )}

        {/* FORM */}
        <div className="form-section">
          <div className="section-label">Step 1 — Your role</div>
          <div className="field-group">
            <span className="field-hint">How you communicate this affects your credibility signal.</span>
            <div className="chip-grid">
              {Object.entries(USER_ROLES).map(([k, v]) => (
                <Chip key={k} label={v.label} value={k} selected={role === k} onClick={setRole} />
              ))}
            </div>
            {role && <p style={{ marginTop: 10, fontSize: 13, color: "var(--amber-light)", fontStyle: "italic" }}>{USER_ROLES[role].note}</p>}
          </div>
        </div>

        <div className="form-section">
          <div className="section-label">Step 2 — Intervention type</div>
          <div className="chip-grid">
            {Object.entries(INTERVENTION_DATA).map(([k, v]) => (
              <Chip key={k} label={v.label} value={k} selected={intervention === k} onClick={setIntervention} />
            ))}
          </div>
          {intervention && INTERVENTION_DATA[intervention].specialNote && (
            <div style={{ marginTop: 12, padding: "10px 14px", background: "var(--slate-800)", borderLeft: "3px solid var(--amber)", fontSize: 13, color: "var(--slate-200)", fontStyle: "italic" }}>
              ⚠ {INTERVENTION_DATA[intervention].specialNote}
            </div>
          )}
        </div>

        <div className="form-section">
          <div className="section-label">Step 3 — Primary audience</div>
          <div className="chip-grid">
            {Object.entries(AUDIENCE_CONFIG).map(([k, v]) => (
              <Chip key={k} label={v.label} value={k} selected={audience === k} onClick={setAudience} />
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="section-label">Step 4 — Expected resistance (up to 2)</div>
          <span className="field-hint">Select the objections most likely to arise. The tool will inoculate against them.</span>
          <div className="chip-grid">
            {Object.entries(RESISTANCE_INOCULATION).map(([k, v]) => (
              <Chip key={k} label={v.label} value={k} selected={resistances.includes(k)} onClick={toggleResistance} multi />
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="section-label">Step 5 — Local data available?</div>
          <label className="data-toggle" onClick={() => setHasData(v => !v)}>
            <div className={`toggle-track${hasData ? " on" : ""}`}>
              <div className="toggle-thumb" />
            </div>
            <span className="toggle-label">
              {hasData ? "Yes — I have local or regional trend data I can cite" : "No — use general evidence only"}
            </span>
          </label>
        </div>

        <button className="generate-btn" onClick={handleGenerate} disabled={!canGenerate}>
          Generate Framing Brief
        </button>
        {validationMsg && <p className="validation-msg">{validationMsg}</p>}

        {/* OUTPUT */}
        {output && (
          <div className="output-section" id="output-anchor">
            <div className="output-header">
              <h2>Framing Brief</h2>
              <p className="output-meta">
                {USER_ROLES[output.role].label.toUpperCase()} · {INTERVENTION_DATA[output.intervention].label.toUpperCase()} · {AUDIENCE_CONFIG[output.audience].label.toUpperCase()}
              </p>
            </div>

            {output.frames.map(f => <FrameCard key={f.number} frame={f} />)}

            <div className="action-block">
              <h4>Proposed Action Invitation</h4>
              <p>{output.action}</p>
            </div>

            {output.avoids.length > 0 && (
              <div className="avoid-section">
                <h4>Language patterns to avoid</h4>
                <ul className="avoid-list">
                  {output.avoids.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            )}

            <button className="reset-btn" onClick={handleReset}>← Start over</button>
          </div>
        )}
      </div>
    </>
  );
}
