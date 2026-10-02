import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { PasswordGate } from "@/components/PasswordGate";
import heroImage from "@/assets/campaign-hero.jpg";
import skylineImage from "@/assets/skyline.jpg";
import caseWardImage from "@/assets/issues/case-state-of-ward.jpg";
import leadershipImage from "@/assets/issues/01-leadership.jpg";
import barbaraHallImage from "@/assets/issues/02-barbara-hall-park.jpg";
import sankofaImage from "@/assets/issues/03-sankofa-square.jpg";
import mossParkImage from "@/assets/issues/04-moss-park-arena.jpg";
import developersImage from "@/assets/issues/05-developers.jpg";
import taxesImage from "@/assets/issues/06-taxes-spending.jpg";
import integrityImage from "@/assets/issues/07-integrity.jpg";
import publicHealthImage from "@/assets/issues/08-public-health.jpg";
import musicImage from "@/assets/issues/09-music-events.jpg";
import decalsImage from "@/assets/issues/10-sidewalk-decals.jpg";
import alignmentImage from "@/assets/issues/11-political-alignment.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stop Chris Moise | Toronto Centre 2026" },
      { name: "description", content: "An independent residents’ campaign in Toronto Centre presenting Councillor Chris Moise’s record in plain language, with sources." },
      { property: "og:title", content: "Stop Chris Moise | Toronto Centre 2026" },
      { property: "og:description", content: "An independent residents’ campaign presenting the record in plain language, with sources." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: import.meta.env.BASE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: import.meta.env.BASE_URL }],
  }),
});

type Issue = {
  topic: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  intro?: React.ReactNode;
  happenedLabel?: string;
  happened?: React.ReactNode;
  matters: React.ReactNode;
  simple?: string;
  source: string;
  sourceId?: string;
};

const issues: Issue[] = [
  {
    topic: "Leadership and conduct",
    title: "Name-calling is not a public service.",
    image: leadershipImage,
    imageWidth: 1400,
    imageHeight: 933,
    alt: "Chris Moise speaking in the Council chamber beside the headline “MPP cuts Chris Moise loose” and a Kristyn Wong-Tam quote that he “has disappointed some folks in my community”",
    happened: <p>Residents and community groups consistently describe Councillor Moise as confrontational, divisive, and dismissive. He acts like a cornered dictator. When people criticize him, he often does not deal with the point they raised! He attacks the person instead. Critics get called racist, anti-gay, or worse. Chris has a record of dismissing constituents’ concerns—unless you agree with his radical ideologies, in which case his office might help you!</p>,
    matters: <p>A councillor works for everyone in the ward—including people who disagree with them. If the first move is to dismiss the resident, then the neighbourhood stops being heard. Serious words like “racist” also get weaker when they are used as a shield against ordinary questions.</p>,
    source: "Resident comments and meeting recordings",
  },
  {
    topic: "Barbara Hall Park",
    title: "The Tragedy of Chris Moise.",
    image: barbaraHallImage,
    imageWidth: 1385,
    imageHeight: 1136,
    alt: "CBC News headline “Complaints about drug use, violence persist at Barbara Hall Park as Toronto considers its response” over a night photo of people gathered on the park’s benches and pavement",
    intro: <p className="issue-intro">Instead of working with residents and businesses to find ways to improve the deteriorating situation at Barbara Hall Park, Chris Moise’s preferred solution was to shut the park off from the public at night.</p>,
    happenedLabel: "What happened at Barbara Hall Park",
    happened: <><p>For several years, local residents and businesses have raised escalating concerns about safety at the park, including increases in vandalism, fires, encampments, visible drug use, drug dealing and violence.</p><p>During Chris Moise’s 2025 “Town Hall” meetings, he refused to acknowledge that policies he supported, including harm reduction, could be contributing to the problems residents were experiencing. As reported by CBC, Moise said:</p><blockquote><p>“As long as [people are] doing things legally, they are allowed to stay. And when they’re doing illegal activity, the police do arrest them, right?”</p></blockquote><p>He also stated that “…people are allowed to sit here.”</p><p>Chris decided to bury his head in the sand and ignore the serious drug use and criminality in Barbara Hall Park.</p><p>Residents, however, were asking for meaningful action to address the ongoing problems—not simply an explanation of what is technically permitted.</p><p>Rather than developing a comprehensive plan to improve safety and restore the park for everyone, Moise proposed closing the park at night—including the area containing the AIDS memorial.</p><p>That is not a solution. It is a closure. It is ignoring the issue—an issue that Chris contributed to by supporting misguided harm-reduction policies!</p><p>The public was looking for accountability, enforcement and a plan to restore the park—not restrictions that run contrary to the purpose of a public memorial and the vision behind the park’s revitalization.</p></>,
    matters: <><p>A councillor’s responsibility is to listen to residents, work with the community and pursue practical solutions—not simply shut down a public space when problems become difficult to solve.</p><p>And when a city committee rejected Moise’s proposal to close the park at night, he appeared to step back from finding a solution, saying he would leave it to others:</p><blockquote><p>“Because clearly, when I make suggestions, somehow I’m the bad person here.”</p></blockquote><p>Residents weren’t asking for someone to take the blame. They were asking their councillor to take responsibility.</p><p><strong>Barbara Hall Park needs a serious plan to restore safety and public access—not a decision to simply lock the public out.</strong></p></>,
    source: "CBC News, September 3, 2026",
    sourceId: "src-cbc-bhp",
  },
  {
    topic: "Renaming Yonge-Dundas Square to Sankofa Square",
    title: "A $2.7 million name change most people did not ask for.",
    image: sankofaImage,
    imageWidth: 1400,
    imageHeight: 815,
    alt: "News graphic reading “Most Torontonians disapprove of new name chosen for Yonge-Dundas Square: poll” over a protest at Yonge and Dundas",
    happened: <><p>Moise was the main advocate for renaming Yonge-Dundas Square and TTC stations. Here are the facts:</p><ul><li>Residents were not properly consulted.</li><li>The bill was approximately $2.7 million, and mostly public money.</li><li>He incorrectly accused Henry Dundas of being a slave owner, when in fact Henry Dundas was a “practical abolitionist” who worked to end slavery. Moise called him “Minister of Immigration and Slavery”—a cabinet job that never existed.</li><li>He backed a Ghanaian name—“Sankofa”—with no historical tie to Toronto. Ironically, Ghana has recently passed legislation criminalizing same-sex acts, with offenders facing possible imprisonment.</li><li>Over 75% of residents opposed the renaming of Yonge-Dundas Square to Sankofa Square.</li><li>A resident brought a 30,000-signature petition against the renaming. Moise called that person a “racist.”</li><li>Two long-time and prominent Yonge-Dundas Square board members resigned in protest of the renaming. In January 2025, Moise still called the episode a “success story.”</li><li>At a February 2024 TTC meeting, witnesses said he insulted members of the public who questioned the plan.</li><li>Since the renaming, Sankofa Square’s revenues have plummeted and the square is a public disaster.</li></ul></>,
    matters: <p>Street names and station names belong to the whole city. Changing them should be honest, worth the cost, and based on listening—not on rewriting history or insulting people who object.</p>,
    simple: "Chris Moise spent a huge amount of public money to change signs, skipped a real conversation with the public, got the history wrong, and then insulted people who said no.",
    source: "Council records and news reports",
  },
  {
    topic: "Moss Park Arena",
    title: "He tried to take a community rink away from the people who care for it.",
    image: mossParkImage,
    imageWidth: 1400,
    imageHeight: 815,
    alt: "Toronto Sun graphic reading “Chris Moise moves to fire volunteers, stock hockey rink board with donors” over a game at Moss Park Arena",
    happened: <><p>Moss Park Arena has a community-led board. That board runs extra programs residents rely on: skating clubs, house leagues, and co-ed hockey schools.</p><p>In June 2024, Moise said the board was not “diverse enough” and pressed members to quit. He moved to look at handing the arena to Parks and Recreation. Board members told the Toronto Sun he “treated them like crap.”</p><p>After the backlash, he changed course in January 2025 and kept the community model—but piled on extra duties other similar rinks do not have.</p><p>He later brought another motion to dump the current board and install his own picks, including people tied to developers and political donors, instead of using the usual nomination process.</p></>,
    matters: <p>Community boards exist so neighbours—not one politician—run local rinks. Replacing a whole board with preferred appointees is a way to take control without asking the neighbourhood.</p>,
    simple: "He went after a beloved local rink, treated the volunteers badly, then tried to put his own people in charge. He did ease up once, after people pushed back. That does not erase the later attempt to stack the board.",
    source: "Toronto Sun, Moss Park Arena",
    sourceId: "src-sun",
  },
  {
    topic: "Developers and campaign money",
    title: "His biggest donors wanted a building approved.",
    image: developersImage,
    imageWidth: 1400,
    imageHeight: 891,
    alt: "CBC News headline “Toronto councillor received 11% of donations from donors tied to developer” above a photo of Chris Moise speaking at a microphone",
    happened: <><p>CBC News reported in September 2024 that the top three donors to Moise’s 2022 campaign were from the same developer family tied to Fitzrovia Real Estate. About 12% of all campaign donations came from Fitzrovia associates.</p><p>Fitzrovia has projects in Toronto Centre, including a contested plan at 191–201 Sherbourne Street. Moise championed that project. Council approved it even though anti-poverty and affordable-housing groups fought it.</p></>,
    matters: <p>A donation is not automatically a bribe. The worry is simpler: if a developer is your biggest donor, and you then fight for their building, residents cannot tell who you work for.</p>,
    simple: "When the people who funded your campaign get the yes-vote they wanted, trust collapses.",
    source: "CBC News, September 2024",
    sourceId: "src-cbc",
  },
  {
    topic: "Taxes and spending",
    title: "Your taxes went up. So did his office bill.",
    image: taxesImage,
    imageWidth: 1400,
    imageHeight: 817,
    alt: "Chris Moise at an Easter event beside a Toronto Sun headline “From bubbling up to ‘Elbows up,’ councillors file odd expenses” noting Moise had the largest total at $1,081,639",
    happened: <><p>On the Budget Committee, Moise backed property-tax increases totalling about 23.4% over three years.</p><p>Coincidentally, Moise has been the highest spender in 2023 and 2025, and runner-up in 2024. A review of 2025 office spending showed combined pay and office expenses of approximately $1.08 million.</p><p>After an integrity investigation, where he was found guilty, he ran up about $28,000 in legal bills, then asked City Council to make taxpayers cover them! After two long Council sessions, they voted to repay 55%—about $13,000 (Councillor Paula Fletcher pushed to cover the whole invoice).</p></>,
    matters: <p>Families are paying more to stay in this city. A councillor who votes for those increases should not also lead Council in office spending—or ask the public to pay for a fight he started by insulting a resident.</p>,
    simple: "He helped raise your taxes, spent more on his office than anyone else, and then asked you to help pay his lawyers. His contempt for the system and for residents is unprecedented.",
    source: "Toronto Sun, councillor expenses; Council budget records",
    sourceId: "src-sun-expenses",
  },
  {
    topic: "Integrity violation: Calling a constituent a “white supremacist”",
    title: "The city’s ethics watchdog said he broke the rules.",
    image: integrityImage,
    imageWidth: 1385,
    imageHeight: 1136,
    alt: "CBC News headline “Toronto councillor acted in ‘derogatory manner,’ violated code of conduct: Integrity Commissioner” noting Moise said he has “no regrets,” above a photo of Moise at a press scrum",
    happened: <><p>In January 2025, at a budget town hall, a resident asked what else Moise planned to rename, and how much it would cost, after the Yonge-Dundas Square change.</p><p>Moise called that resident a “white supremacist.” It was caught on tape.</p><p>On March 20, 2026, Toronto’s Integrity Commissioner found that this violated Article 14 of the Council Member Code of Conduct. The finding said the remark was unbecoming of an elected official, brought disrepute to his office, and caused harm and distress to the resident.</p><p>However, Chris Moise has never apologized and actually doubled down, referring to this resident’s views as exemplifying “bigotry” and “white supremacy.”</p></>,
    matters: <p>This is not a rumour from a campaign flyer. It is a formal finding by the Integrity Commissioner, whose job is to judge whether councillors followed the rules.</p>,
    simple: "A resident asked a question about financial priorities. Chris Moise called him a white supremacist. The City said that broke the Code of Conduct. Chris Moise has still not apologized and stuck the bill onto the taxpayers.",
    source: "City of Toronto Integrity Commissioner, March 20, 2026",
    sourceId: "src-ic",
  },
  {
    topic: "Public-health policy",
    title: "He backed injection sites next to parks and kids’ spaces.",
    image: publicHealthImage,
    imageWidth: 1400,
    imageHeight: 876,
    alt: "Discarded needles and debris on a Toronto sidewalk under a quote from Chris Moise: “The province should be expanding safe consumption sites”",
    happened: <><p>As Chair of Toronto’s health committee, Moise pushed to open and keep supervised consumption sites—places where people can inject drugs with staff nearby. Most residents oppose this, especially where those sites sit close to kindergartens, elementary schools, and parks.</p><p>Public drug use and discarded needles are an ongoing problem on Toronto Centre streets.</p></>,
    matters: <p>Helping people with addiction is a laudable goal. But putting those sites beside playgrounds and classrooms is a choice about whose safety comes first. Parents should not have to walk kids past needle debris to get to school. Parks should not be dumping grounds for drugs and needles and unusable for families.</p>,
    simple: "Chris Moise supported drug-use sites near schools and parks. This makes the entire neighbourhood less safe for kids and families.",
    source: "Board of Health records",
  },
  {
    topic: "Independent music events",
    title: "Chris Moise tried to put City Hall in charge of nonprofit raves—then backed off.",
    image: musicImage,
    imageWidth: 1385,
    imageHeight: 1136,
    alt: "News headline “Councillor withdraws motion to crack down on raves after community pushback” above a photo of Chris Moise at a Board of Health meeting",
    happened: <><p>In April 2025, Moise introduced a surprise motion which would have given the City veto power over Special Occasion Permits: the alcohol permits nonprofit rave promoters need to make their events financially viable.</p><p>He did not consult the music community first. In fact, the co-sponsor was Frances Nunziata, who helped shut down Toronto’s rave scene in 2000.</p><p>After a wave of opposition, he withdrew the motion.</p></>,
    matters: <p>Independent promoters keep Toronto’s music culture alive on thin margins. A surprise rule that can kill those events looks like a sneak attack. Pulling the motion after people yelled is not the same as listening first.</p>,
    simple: "Chris Moise dropped a surprise plan that could have wrecked small music events, skipped consultation, and only withdrew it when people fought back.",
    source: "News report and Council motion, April 2025",
    sourceId: "src-raves",
  },
  {
    topic: "Sidewalk decals",
    title: "City logos on the sidewalk with Chris Moise’s name on them.",
    image: decalsImage,
    imageWidth: 1400,
    imageHeight: 1089,
    alt: "Toronto Sun front page “Walk of Shame: Councillor’s name on sidewalk decals irks constituents” showing Chris Moise installing a walk-your-bike decal",
    happened: <><p>In July 2025, stickers appeared on sidewalks in Toronto Centre telling people to walk their bikes. They carried the City of Toronto logo and Chris Moise’s personal logo.</p><p>They were not a city-wide program. His office put them down. Taxpayers paid for this illegal political advertising, from a councillor expense budget approaching $1 million a year.</p></>,
    matters: <p>The city logo makes something look official. Adding a politician’s brand makes it look like an ad. Residents should not fund a councillor’s name recognition with sidewalk stickers.</p>,
    simple: "Chris Moise used public money to put his own branding on the sidewalk and dressed it up as a City project.",
    source: "Toronto Sun, August 31, 2025",
    sourceId: "src-sun-decals",
  },
  {
    topic: "Political alignment",
    title: "The mayor keeps giving him power anyway.",
    image: alignmentImage,
    imageWidth: 1400,
    imageHeight: 876,
    alt: "Chris Moise and Mayor Olivia Chow at a Caribbean carnival beside a Council Scorecard showing how often councillors voted with the mayor",
    happened: <p>Mayor Olivia Chow keeps handing Moise major committee jobs. An independent score of Council votes found he matched Chow 98.15% of the time—closer than any other councillor.</p>,
    matters: <p>If a mayor keeps rewarding someone after an ethics finding, insults to residents, and a tax-funded legal bill, that is a choice. Chow owns that choice.</p>,
    simple: "Chris Moise votes with Mayor Olivia Chow almost every time. She still gives him big jobs. That is not accountability. That’s control and ideological voting at the expense of residents.",
    source: "City Hall Watcher voting alignment",
    sourceId: "src-chw",
  },
];

function Wordmark() {
  return <span className="wordmark"><span className="wordmark-stop">Stop</span><span>Chris Moise</span></span>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) closeRef.current?.focus();
    const escape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", escape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", escape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormState("error");
      form.reportValidity();
      return;
    }
    setFormState("success");
    form.reset();
  };

  return (
    <PasswordGate>
      <a className="skip-link" href="#record">Skip to the record</a>
      <div className="campaign-banner" role="note">Stop Moise is an independent residents’ campaign in Toronto Centre. It is not affiliated with the City of Toronto.</div>
      <header className="site-header">
        <div className="site-bar page-wrap">
          <a href="#top" aria-label="Stop Chris Moise home"><Wordmark /></a>
          <button className="menu-trigger" type="button" aria-controls="site-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <span className="menu-lines" aria-hidden="true"><i /><i /><i /></span><span>Menu</span>
          </button>
        </div>
      </header>

      <div id="site-menu" className={`site-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-top"><Wordmark /><button ref={closeRef} className="menu-close" type="button" onClick={closeMenu}>Close</button></div>
        <nav aria-label="Site navigation">
          <a href="#case" onClick={closeMenu}>The case</a>
          <a href="#record" onClick={closeMenu}>The record</a>
          <a href="#sources" onClick={closeMenu}>Sources</a>
          <a className="menu-join" href="#join" onClick={closeMenu}>Join the coalition</a>
        </nav>
        <p className="menu-fine">Municipal election: October 26, 2026. Toronto Centre (Ward 13).</p>
      </div>

      <main id="top">
        <section className="campaign-hero" aria-labelledby="hero-title">
          <img className="campaign-hero-image" src={heroImage} width={1672} height={941} alt="A stern political figure with the Toronto skyline at night" />
          <div className="page-wrap hero-copy">
            <p className="eyebrow">Toronto Centre <span>•</span> Municipal election <span>•</span> October 26, 2026</p>
            <p className="candidate-name">Chris Moise</p>
            <h1 id="hero-title"><span>A disaster</span><strong>all around</strong></h1>
            <p className="hero-sub">Chris Moise’s four years as Toronto Centre (Ward 13) Councillor have been a failure for residents.</p>
          </div>
        </section>

        <section className="case-section" id="case" aria-labelledby="case-title">
          <div className="page-wrap">
            <h2 className="eyebrow" id="case-title">The case</h2>
            <p className="lede">A councillor’s job should be simple: listen to residents, spend taxpayers’ money responsibly, solve problems, and treat people with respect. Instead, residents have too often found themselves ignored, dismissed, or attacked when they raise legitimate concerns.</p>
            <p>When constituents speak up, they deserve answers and solutions—not insults, personal attacks, or political games.</p>
            <p>Moise’s confrontational approach and hostile exchanges with constituents have made him one of the most polarizing figures at City Hall. His record has left many residents asking a simple question: <strong>Is this really the representation Ward 13 deserves?</strong></p>
            <p>And the state of the ward speaks for itself. Residents are dealing with enormous concerns about crime, cleanliness, public drug use, disorder, and parks and public spaces that no longer feel welcoming or safe for everyone.</p>
            <figure className="case-figure"><img src={caseWardImage} width={1079} height={819} loading="lazy" alt="Abandoned furniture, tarps and debris piled in a Toronto Centre laneway in front of residential towers" /><figcaption>The state of the ward: a Toronto Centre laneway.</figcaption></figure>
            <p>After four years, the question is not whether Chris Moise deserves another term.</p>
            <p><strong>It’s whether Ward 13 can afford another four years of the same.</strong></p>
            <blockquote className="verdict"><span>Ward 13 deserves better.</span><strong>Chris Moise does not deserve to be rewarded with re-election.</strong></blockquote>
            <div className="campaign-actions"><a className="campaign-button button-red" href="#record">See the record <span aria-hidden="true">→</span></a><a className="campaign-button button-outline" href="#join">Join the coalition</a></div>
            <aside className="campaign-note"><strong>Note</strong><span>This is a concerned citizen website. Always check sources at the bottom.</span></aside>
          </div>
        </section>

        <section id="record" aria-labelledby="record-title">
          <div className="record-intro page-wrap"><p className="eyebrow">Four years on Council</p><h2 id="record-title">The record</h2><p>Eleven issues. Each one has what happened, why it matters, and the Coles Notes. Sources are listed at the bottom of the page.</p></div>
          {issues.map((issue, index) => (
            <article className="issue page-wrap" id={`issue-${index + 1}`} key={issue.title}>
              <img className="issue-image" src={issue.image} alt={issue.alt} width={issue.imageWidth} height={issue.imageHeight} loading="lazy" />
              <div className="issue-meta"><span className="issue-number">{String(index + 1).padStart(2, "0")} <em>/ {issues.length}</em></span><span className="eyebrow">{issue.topic}</span></div>
              <h2>{issue.title}</h2>
              {issue.intro}
              {issue.happened && <><h3>{issue.happenedLabel ?? "What happened"}</h3>{issue.happened}</>}
              <h3>Why it matters</h3>{issue.matters}
              {issue.simple && <div className="simple-version"><h3>The Coles Notes</h3><p>{issue.simple}</p></div>}
              <p className="source-line"><span>Source:</span> <a href={issue.sourceId ? `#${issue.sourceId}` : "#sources"}>{issue.source}</a>{!issue.sourceId && <small>Link pending</small>}</p>
            </article>
          ))}
        </section>

        <section className="vote-band" aria-labelledby="vote-title">
          <img src={skylineImage} width={1600} height={800} loading="lazy" alt="Toronto skyline at night" />
          <div className="page-wrap vote-copy"><p className="eyebrow">Want to stop Chris Moise?</p><h2 id="vote-title"><span>On October 26, 2026,</span><strong>vote him out.</strong></h2><p>If you have been dismissed, insulted, or ignored, you are not alone. Join the coalition. Share the record. Tell your neighbours. Show up in October.</p><a className="campaign-button button-red" href="#join">I’m in <span aria-hidden="true">→</span></a></div>
        </section>

        <section className="join-section" id="join" aria-labelledby="join-title">
          <div className="page-wrap"><p className="eyebrow">Join the coalition</p><h2 id="join-title">Help us finish this.</h2><p>Leave your name and how to reach you. Tell us your story if you have one. We will use this list to keep residents informed and organized through election day.</p>
            <form onSubmit={submitForm} noValidate>
              <div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" type="text" autoComplete="name" required /></div>
              <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" required /></div>
              <div className="form-field"><label htmlFor="neighbourhood">Neighbourhood or postal code</label><input id="neighbourhood" name="neighbourhood" type="text" autoComplete="postal-code" /></div>
              <div className="form-field"><label htmlFor="story">Optional: What have you seen?</label><textarea id="story" name="story" /></div>
              <label className="check-field"><input type="checkbox" name="updates" /><span>I want updates about the October 26, 2026 election.</span></label>
              <label className="check-field"><input type="checkbox" name="ack" required /><span>I understand this is a political campaign, not a City of Toronto website.</span></label>
              <button className="campaign-button button-red" type="submit">Join the coalition <span aria-hidden="true">→</span></button>
              {formState === "success" && <p className="form-message success" role="status">You’re in. We’ll be in touch. Tell one neighbour before you close this tab.</p>}
              {formState === "error" && <p className="form-message error" role="alert">That didn’t send. Check your email address and try again.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="sources"><div className="page-wrap"><Wordmark /><p>Stop Moise is an independent residents’ campaign in Toronto Centre. It is not affiliated with the City of Toronto.</p><p>This page is political advocacy. It summarizes news reports, public meetings, Council records, and the Integrity Commissioner’s March 20, 2026 finding. A donation is not proof of a crime. Where this page describes conflict-of-interest concerns, it is raising a question about trust, not announcing a court verdict.</p><h2>Sources</h2><ol><li id="src-cbc">CBC News, September 2024 campaign-finance reporting <small>Link pending</small></li><li id="src-cbc-bhp">CBC News, September 3, 2026, Barbara Hall Park <small>Link pending</small></li><li id="src-sun">Toronto Sun, Moss Park Arena <small>Link pending</small></li><li id="src-sun-expenses">Toronto Sun, councillor expenses (Moise total $1,081,639) <small>Link pending</small></li><li id="src-sun-decals">Toronto Sun, August 31, 2025, sidewalk decals <small>Link pending</small></li><li id="src-ic">City of Toronto Integrity Commissioner finding, March 20, 2026; CBC News, March 22, 2026 <small>Link pending</small></li><li id="src-raves">Aidan Chamandy, April 23, 2025, rave-motion withdrawal <small>Link pending</small></li><li id="src-budget">Council budget and expense records <small>Link pending</small></li><li id="src-chw">City Hall Watcher, Chow voting alignment <small>Link pending</small></li></ol><p className="election-date">Municipal election: <strong>October 26, 2026.</strong></p></div></footer>
    </PasswordGate>
  );
}
