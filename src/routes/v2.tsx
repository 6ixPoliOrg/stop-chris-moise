import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState, type FormEvent } from "react";
import { PasswordGate } from "@/components/PasswordGate";
import heroImage from "@/assets/campaign-hero.jpg";
import { issues, pad, pageUrl, useShare, caseWardImage, sources, type Issue } from "@/content/record";
import v2Css from "../v2.css?url";

/* Design v2: same content as "/", with a calmer palette (white base, purple
   and yellow as accents, red only for actions) and a skim-first layout. */

export const Route = createFileRoute("/v2")({
  component: V2,
  head: () => ({
    meta: [
      { title: "Stop Chris Moise | Toronto Centre 2026 (design v2)" },
      { name: "description", content: "An independent residents’ campaign in Toronto Centre presenting Councillor Chris Moise’s record in plain language, with sources." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "stylesheet", href: v2Css }],
  }),
});

const sourceById = new Map(sources.map((s) => [s.id, s]));
/** Join prompts appear after these issue numbers. */
const JOIN_AFTER = new Set([4, 8]);

function Wordmark({ href }: { href?: string }) {
  const inner = <><span className="v2-stop">Stop</span><span>Chris Moise</span></>;
  return href ? <a className="v2-wordmark" href={href} aria-label="Stop Chris Moise home">{inner}</a> : <span className="v2-wordmark">{inner}</span>;
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M16 6l-4-4-4 4" />
      <path d="M12 2v13" />
    </svg>
  );
}

function SourceLine({ issue }: { issue: Issue }) {
  const src = issue.sourceId ? sourceById.get(issue.sourceId) : undefined;
  return (
    <p className="v2-source">
      <span className="v2-source-label">Source</span>
      <span>{issue.source}</span>
      {src?.url ? (
        <a href={src.url} target="_blank" rel="noopener noreferrer">Read the source →</a>
      ) : (
        <a href={issue.sourceId ? `#${issue.sourceId}` : "#sources"} className="v2-pending">Link pending</a>
      )}
    </p>
  );
}

function IssueRow({ issue, n }: { issue: Issue; n: number }) {
  const { note, share } = useShare();
  const id = `issue-${n}`;
  // Skim-first: the Coles Notes (or the intro, when there is none) leads; the
  // full record sits behind a toggle. With neither, the record shows open.
  const summary = issue.simple ?? null;
  const lead = summary ? null : issue.intro;
  const openByDefault = !summary && !lead;
  return (
    <article id={id} data-claim={n} className={`v2-issue ${n % 2 === 0 ? "v2-tint" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="v2-issue-inner">
        <div className="v2-issue-meta">
          <span className="v2-badge">{pad(n)} / {issues.length}</span>
          <span className="v2-topic">{issue.topic}</span>
          <button type="button" className="v2-share" onClick={() => share(issue.title, pageUrl(`#${id}`))} aria-label={`Share issue ${n}: ${issue.title}`}>
            <ShareIcon />
          </button>
          {note && <span className="v2-share-note" role="status">{note}</span>}
        </div>
        <h2 id={`${id}-title`}>{issue.title}</h2>
        <figure className="v2-frame">
          <img src={issue.image} alt={issue.alt} width={issue.imageWidth} height={issue.imageHeight} loading="lazy" decoding="async" />
        </figure>
        {summary && (
          <div className="v2-coles">
            <h3>The Coles Notes</h3>
            <p>{summary}</p>
          </div>
        )}
        {lead && <div className="v2-lead">{lead}</div>}
        <details className="v2-record" open={openByDefault}>
          <summary><span className="v2-more">Read the full record</span><span className="v2-less">Hide the full record</span></summary>
          <div className="v2-record-body">
            {summary && issue.intro}
            {issue.happened && <><h3>{issue.happenedLabel ?? "What happened"}</h3>{issue.happened}</>}
            <h3>Why it matters</h3>
            {issue.matters}
          </div>
        </details>
        <SourceLine issue={issue} />
      </div>
    </article>
  );
}

function JoinStrip() {
  return (
    <aside className="v2-strip" aria-label="Join the coalition">
      <p><strong>Seen enough?</strong> Add your name. We’ll keep you posted through election day.</p>
      <a className="v2-btn v2-btn-red" href="#join">Join the coalition <span aria-hidden="true">→</span></a>
    </aside>
  );
}

function Nav({ active }: { active: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);
  const close = () => setMenuOpen(false);

  return (
    <nav className="v2-nav" aria-label="Site">
      <div className="v2-nav-bar">
        <Wordmark href="#top" />
        <div className="v2-menu-wrap" ref={wrapRef}>
          <button type="button" className="v2-menu-toggle" aria-expanded={menuOpen} aria-controls="v2-record-menu" onClick={() => setMenuOpen((o) => !o)}>
            The record <span aria-hidden="true">{menuOpen ? "▲" : "▼"}</span>
          </button>
          {menuOpen && (
            <div className="v2-menu-panel" id="v2-record-menu">
              <a href="#case" onClick={close}><span>—</span><span>The case</span></a>
              {issues.map((issue, i) => (
                <a key={issue.title} href={`#issue-${i + 1}`} onClick={close}><span>{pad(i + 1)}</span><span>{issue.topic}</span></a>
              ))}
              <a href="#sources" onClick={close}><span>—</span><span>Sources</span></a>
            </div>
          )}
        </div>
        <div className="v2-ticks">
          {issues.map((issue, i) => {
            const n = i + 1;
            return (
              <a key={issue.title} href={`#issue-${n}`} title={issue.topic} className={n === active ? "on" : n < active ? "past" : undefined} aria-current={n === active ? "location" : undefined}>{pad(n)}</a>
            );
          })}
        </div>
        <span className="v2-nav-spacer" />
        <a className="v2-btn v2-btn-red v2-nav-join" href="#join">Join</a>
      </div>
    </nav>
  );
}

function Join() {
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormState("error");
      form.reportValidity();
      return;
    }
    // TODO: connect to the campaign's sign-up service. Nothing is transmitted yet.
    setFormState("success");
    form.reset();
  };
  return (
    <section className="v2-join" id="join" aria-labelledby="v2-join-title">
      <div className="v2-wrap v2-join-grid">
        <div>
          <p className="v2-eyebrow">Join the coalition</p>
          <h2 id="v2-join-title">Help us finish this.</h2>
          <p className="v2-lede">Leave your name and how to reach you. Tell us your story if you have one. We will use this list to keep residents informed and organized through election day.</p>
        </div>
        {formState === "success" ? (
          <div className="v2-joined" role="status"><p className="v2-joined-big">You’re in.</p><p>We’ll be in touch. Tell one neighbour before you close this tab.</p></div>
        ) : (
          <form className="v2-form" onSubmit={submitForm} noValidate>
            <label htmlFor="v2-name">Name</label>
            <input id="v2-name" name="name" type="text" autoComplete="name" required />
            <label htmlFor="v2-email">Email</label>
            <input id="v2-email" name="email" type="email" autoComplete="email" inputMode="email" required />
            <label htmlFor="v2-neighbourhood">Neighbourhood or postal code</label>
            <input id="v2-neighbourhood" name="neighbourhood" type="text" autoComplete="postal-code" />
            <label htmlFor="v2-story">Optional: What have you seen?</label>
            <textarea id="v2-story" name="story" />
            <label className="v2-check"><input type="checkbox" name="updates" /><span>I want updates about the October 26, 2026 election.</span></label>
            <label className="v2-check"><input type="checkbox" name="ack" required /><span>I understand this is a political campaign, not a City of Toronto website.</span></label>
            <button className="v2-btn v2-btn-red" type="submit">Join the coalition <span aria-hidden="true">→</span></button>
            {formState === "error" && <p className="v2-form-error" role="alert">That didn’t send. Check your email address and try again.</p>}
          </form>
        )}
      </div>
    </section>
  );
}

function SharePage() {
  const { note, share } = useShare();
  return (
    <>
      <button type="button" className="v2-btn v2-btn-outline-light" onClick={() => share("Stop Chris Moise: the record", pageUrl())}>
        <ShareIcon /> Share this page
      </button>
      {note && <span className="v2-share-note v2-share-note-light" role="status">{note}</span>}
    </>
  );
}

function Page() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset["claim"]));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("[data-claim]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="v2">
      <a className="v2-skip" href="#record">Skip to the record</a>
      <div className="v2-disclaimer" role="note">Stop Moise is an independent residents’ campaign in Toronto Centre. It is not affiliated with the City of Toronto.</div>
      <Nav active={active} />

      <main id="top">
        <header className="v2-hero" aria-labelledby="v2-hero-title">
          <div className="v2-hero-copy">
            <p className="v2-eyebrow v2-eyebrow-yellow">Toronto Centre <span>•</span> Municipal election <span>•</span> October 26, 2026</p>
            <p className="v2-candidate">Chris Moise</p>
            <h1 id="v2-hero-title"><span>A disaster</span><span className="v2-y">all around</span></h1>
            <p className="v2-hero-sub">Chris Moise’s four years as Toronto Centre (Ward 13) Councillor have been a failure for residents.</p>
            <a className="v2-btn v2-btn-red" href="#record">See the record <span aria-hidden="true">→</span></a>
          </div>
          <div className="v2-hero-photo">
            <img src={heroImage} width={1672} height={941} alt="A stern political figure with the Toronto skyline at night" fetchPriority="high" />
          </div>
        </header>

        <section className="v2-case" id="case" aria-labelledby="v2-case-title">
          <div className="v2-wrap v2-case-grid">
            <h2 id="v2-case-title">The case</h2>
            <div className="v2-case-copy">
              <p className="v2-lede">A councillor’s job should be simple: listen to residents, spend taxpayers’ money responsibly, solve problems, and treat people with respect. Instead, residents have too often found themselves ignored, dismissed, or attacked when they raise legitimate concerns.</p>
              <p>When constituents speak up, they deserve answers and solutions—not insults, personal attacks, or political games.</p>
              <p>Moise’s confrontational approach and hostile exchanges with constituents have made him one of the most polarizing figures at City Hall. His record has left many residents asking a simple question: <strong>Is this really the representation Ward 13 deserves?</strong></p>
              <p>And the state of the ward speaks for itself. Residents are dealing with enormous concerns about crime, cleanliness, public drug use, disorder, and parks and public spaces that no longer feel welcoming or safe for everyone.</p>
              <figure className="v2-case-figure"><img src={caseWardImage} width={1079} height={819} loading="lazy" decoding="async" alt="Abandoned furniture, tarps and debris piled in a Toronto Centre laneway in front of residential towers" /><figcaption>The state of the ward: a Toronto Centre laneway.</figcaption></figure>
              <p>After four years, the question is not whether Chris Moise deserves another term.</p>
              <p><strong>It’s whether Ward 13 can afford another four years of the same.</strong></p>
              <blockquote className="v2-verdict"><span>Ward 13 deserves better.</span><strong>Chris Moise does not deserve to be rewarded with re-election.</strong></blockquote>
              <aside className="v2-note"><strong>Note</strong><span>This is a concerned citizen website. Always check sources at the bottom.</span></aside>
            </div>
          </div>
        </section>

        <section className="v2-glance" id="record" aria-labelledby="v2-record-title">
          <div className="v2-wrap">
            <p className="v2-eyebrow">Four years on Council</p>
            <h2 id="v2-record-title">The record at a glance</h2>
            <p className="v2-lede">Eleven issues. Each one leads with the Coles Notes; open “Read the full record” for what happened and why it matters. Sources are listed at the bottom of the page.</p>
            <ol className="v2-glance-list">
              {issues.map((issue, i) => (
                <li key={issue.title}>
                  <a href={`#issue-${i + 1}`}>
                    <span className="v2-badge">{pad(i + 1)}</span>
                    <span className="v2-glance-text"><span className="v2-topic">{issue.topic}</span><span className="v2-glance-title">{issue.title}</span></span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-label="The record, issue by issue">
          {issues.map((issue, index) => (
            <Fragment key={issue.title}>
              <IssueRow issue={issue} n={index + 1} />
              {JOIN_AFTER.has(index + 1) && <JoinStrip />}
            </Fragment>
          ))}
        </section>

        <section className="v2-vote" aria-labelledby="v2-vote-title">
          <div className="v2-wrap">
            <p className="v2-eyebrow v2-eyebrow-yellow">Want to stop Chris Moise?</p>
            <h2 id="v2-vote-title"><span>On October 26, 2026,</span><span className="v2-y">vote him out.</span></h2>
            <p>If you have been dismissed, insulted, or ignored, you are not alone. Join the coalition. Share the record. Tell your neighbours. Show up in October.</p>
            <div className="v2-btn-row">
              <a className="v2-btn v2-btn-red" href="#join">I’m in <span aria-hidden="true">→</span></a>
              <SharePage />
            </div>
          </div>
        </section>

        <Join />
      </main>

      <footer className="v2-foot" id="sources">
        <div className="v2-wrap">
          <div className="v2-foot-top">
            <Wordmark />
            <div className="v2-foot-links"><a href="#case">The case</a><a href="#record">The record</a><a href="#join">Join the coalition</a></div>
          </div>
          <p>Stop Moise is an independent residents’ campaign in Toronto Centre. It is not affiliated with the City of Toronto.</p>
          <p>This page is political advocacy. It summarizes news reports, public meetings, Council records, and the Integrity Commissioner’s March 20, 2026 finding. A donation is not proof of a crime. Where this page describes conflict-of-interest concerns, it is raising a question about trust, not announcing a court verdict.</p>
          <h2>Sources</h2>
          <ol className="v2-sources">
            {sources.map((s) => (
              <li key={s.id} id={s.id}>
                {s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a> : <>{s.label} <span className="v2-pending">Link pending</span></>}
              </li>
            ))}
          </ol>
          <p className="v2-election">Municipal election: <strong>October 26, 2026.</strong></p>
        </div>
      </footer>
    </div>
  );
}

function V2() {
  return (
    <PasswordGate>
      <Page />
    </PasswordGate>
  );
}
