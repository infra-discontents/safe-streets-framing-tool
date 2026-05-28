# Safe Streets Message Framing Tool

**A free, open-source communication tool for transportation safety advocates, researchers, and public officials.**

Generate evidence-based, values-aligned message frames for transportation safety policies and engineering interventions — tailored to your audience, your intervention type, and the specific resistance you expect to encounter.

→ **[Live tool](https://infra-discontents.github.io/safe-streets-framing-tool/)** *(update after deployment)*

---

## What this tool does

Most transportation safety communication fails not because the evidence is weak — it's strong — but because the message leads with statistics, technical terminology, or policy arguments that don't connect with how people actually form attitudes and make decisions.

This tool helps advocates, researchers, and public officials generate message frames that:

- **Lead with shared values** rather than data or compliance arguments
- **Anticipate and inoculate against resistance** rather than ignoring or dismissing it
- **Use capabilities and affordance language** to describe what interventions make *possible* for real people, not just what they prevent
- **Activate collective identity** through deliberate use of communal pronouns
- **Incorporate dynamic norms** where local or regional trend data are available
- **Close with a values-expressive action invitation** rather than a bureaucratic ask

The output is a framing brief: three annotated message frames, a proposed action invitation, and a list of language patterns to avoid — all explained so users understand *why* the framing works, not just what to say.

---

## Who this is for

| Role | Use case |
|------|----------|
| **Advocates / NGO staff** | Public communications, neighborhood association presentations, coalition messaging |
| **Researchers / academics** | Translating findings for lay audiences, press releases, policy briefs |
| **Government / DOT staff** | Council testimony, public meeting materials, grant narratives, inter-agency communication |

---

## Interventions covered (v1)

- Speed tables / raised crosswalks
- Protected bike lanes
- Roundabouts
- School zone redesigns
- ADA intersection upgrades
- Automated speed / red-light enforcement
- Complete Streets policy
- Road diets (safer corridor redesign)
- Chicanes / horizontal deflection
- Lane narrowing
- Curb extensions / bulb-outs
- Speed safety cameras

---

## Audiences covered (v1)

- General public
- City / county council
- State / federal DOT staff
- Local media
- School board

---

## Resistance types covered (v1)

| Resistance | Framing strategy |
|-----------|-----------------|
| "Too expensive" | Full-cost reframe; fiscal liability anchor |
| "This will make me late" | Travel time variability; mode shift dividend |
| "We're not Amsterdam / NYC" | Local peer communities; place-identity preservation |
| "Government overreach / freedom" | Capabilities expansion; choice vs. mandate distinction |
| "It won't work here" | Evidence consistency across contexts; peer community precedent |
| "Enforcement concerns / racial equity" | Engineering-first distinction; design vs. citation |
| "Emergency vehicles will be delayed" | Response time data; crash prevention reduces EMS burden |
| "Traffic will divert to our street" | Network-level planning; area-wide calming strategy |
| "Parking loss will hurt small businesses" | Multi-modal customer data; retail corridor research |
| "The bike lanes are always empty" | Induced demand; latent ridership; counting methodology |
| "It's bad drivers and distracted pedestrians" | Safe System logic; design for predictable human error |
| "This is being forced on us by outsiders" | Community co-design; local knowledge + technical expertise |

---

## Theoretical foundations

This tool applies a layered communication framework drawn from peer-reviewed and practitioner literature:

**Values–Solutions–Action (VSA) Framework — primary source**
The core scaffold of this tool. All frames lead with a pro-social value, connect it to a specific Safe System solution, and close with a collective action invitation. The VSA Framework was developed through focus group research with transportation safety professionals across the United States and is grounded in the framing effects literature on social policy acceptance. The FrameWorks Institute's work on values-based communication informed the VSA Framework's development, but the VSA Framework itself is the originating source for this tool's architecture.

> Michael, J. P., Chirles, T. J., Frattaroli, S., LaJeunesse, S., Austin, L. L., Romo, A., McDonough, J., & Yang, C. Y. D. (2023). *A Safe System guide for transportation: Sharing this approach to lead your community to action.* AAA Foundation for Traffic Safety. https://aaafoundation.org/wp-content/uploads/2026/01/202311-AAAFTS-Safe-System-Approach.pdf

**Tim Kasser — Intrinsic vs. extrinsic value activation**
Frames activate intrinsic values (community belonging, safety, capability, dignity) rather than extrinsic ones (cost savings, personal compliance, legal obligation). Research demonstrates that intrinsic value activation produces more durable attitude change and pro-social behavior. See: Kasser, T. (2002). *The High Price of Materialism.* MIT Press.

**Collective pronoun strategy**
"Our streets," "our neighbors," and "our community" activate collective identity and shared fate — particularly important for infrastructure arguments that can otherwise devolve into zero-sum competition between road user groups. This principle is supported by the VSA Framework's focus group findings, which identified individualism vs. shared responsibility as the central tension in Safe System communication.

**Dynamic norms (Sparkman & Walton, 2017)**
Where trend data are available, frames use dynamic norm language ("communities like ours are increasingly...") to signal trajectory rather than static consensus. Dynamic norms are more effective at shifting perceived social momentum. See: Sparkman, G., & Walton, G. M. (2017). Dynamic norms promote sustainable behavior, even if it is counternormative. *Psychological Science, 28*(11), 1663–1674.

**Capabilities / affordance framing (Sen, Nussbaum, Gibson)**
Interventions are described in terms of what they make *possible* for real people — drawing on Sen and Nussbaum's capabilities approach and Gibson's affordance theory as extended to infrastructure contexts. A protected lane isn't just safer; it opens a new possibility of action for a child, a senior, or a neighbor without a car. This framing complements the VSA Framework's emphasis on showing the concrete impact of both the problem and the solution.

**Resistance inoculation theory (McGuire, 1964; Compton, 2013)**
Frames acknowledge likely resistance before reframing it. Dismissing or ignoring objections amplifies them. The goal is to redirect the underlying value, not defeat the objector. See: Compton, J. (2013). Inoculation theory. In J. P. Dillard & L. Shen (Eds.), *The SAGE Handbook of Persuasion* (pp. 220–236).

**FrameWorks Institute**
FrameWorks research on values-based communication and framing for complex social issues informed the literature review underlying the VSA Framework. FrameWorks publications on community safety and transportation messaging are useful companion resources. See: FrameWorks Institute. (2023). *Framing community safety: Guidance for effective communication.* https://www.frameworksinstitute.org/wp-content/uploads/2023/03/AECF-Community-Safety-messaging-guide.pdf

---

## Roadmap

**v1 (current)**
- Static rule-based framing logic
- 7 intervention types, 5 audiences, 6 resistance types
- Annotated output with rationale

**v2 (planned)**
- AI-enhanced framing mode (Claude API): paste in your specific context, get synthesized frames rather than rule-tree frames
- Print-to-PDF framing brief output
- Expanded intervention library
- Spanish-language output option

---

## Local development

```bash
# Clone the repo
git clone https://github.com/YOUR-GITHUB-USERNAME/safe-streets-framing-tool.git
cd safe-streets-framing-tool

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## Deployment to GitHub Pages

```bash
# One-time setup: add homepage to package.json
# (already configured — just update the repo name in vite.config.js if needed)

# Deploy
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch of your repo. GitHub Pages will serve it automatically.

**Before deploying:**
1. In `vite.config.js`, confirm `base` matches your GitHub repo name exactly
2. In `package.json`, confirm the repo name in the deploy script is correct
3. In GitHub → Settings → Pages, set source to `gh-pages` branch

---

## Contributing

Pull requests welcome. Priority areas for contribution:

- Additional intervention types (pedestrian hybrid beacons, road diets, parking removal)
- Additional resistance types (neighborhood character / aesthetics, parking loss)
- Peer-reviewed citation links attached to evidence lines
- Accessibility improvements

---

## Citation

If you use this tool in research or practitioner work, please cite:

> LaJeunesse, S. (2025). *Safe Streets Message Framing Tool* [Software]. GitHub. https://github.com/YOUR-GITHUB-USERNAME/safe-streets-framing-tool

And cite the underlying VSA Framework:

> Michael, J. P., Chirles, T. J., Frattaroli, S., LaJeunesse, S., Austin, L. L., Romo, A., McDonough, J., & Yang, C. Y. D. (2023). *A Safe System guide for transportation: Sharing this approach to lead your community to action.* AAA Foundation for Traffic Safety.

---

## License

MIT License. Free to use, adapt, and redistribute with attribution.

---

## Acknowledgments

Built on the Values–Solutions–Action Framework developed by Michael, Chirles, Frattaroli, LaJeunesse, Austin, Romo, McDonough, and Yang (2023) for the AAA Foundation for Traffic Safety, in partnership with Johns Hopkins Bloomberg School of Public Health, the University of North Carolina at Chapel Hill, and the Institute of Transportation Engineers. The VSA Framework draws on the framing research of the FrameWorks Institute, the values psychology of Tim Kasser, and the dynamic norms work of Sparkman & Walton. Capabilities framing draws on the traditions of Amartya Sen, Martha Nussbaum, and James Gibson.
