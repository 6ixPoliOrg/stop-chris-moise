import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { PasswordGate } from "@/components/PasswordGate";
import heroImage from "@/assets/campaign-hero.jpg";
import skylineImage from "@/assets/skyline.jpg";
import { issues, pad, pageUrl, useShare, caseWardImage, caseWardVideo, type Issue } from "@/content/record";

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

const theme = (n: number) => (["t-purple", "t-paper", "t-yellow"] as const)[(n - 1) % 3];

function Wordmark({ href }: { href?: string }) {
  const inner = <><span className="stop">Stop</span><span>Chris Moise</span></>;
  return href ? <a className="wordmark" href={href} aria-label="Stop Chris Moise home">{inner}</a> : <span className="wordmark">{inner}</span>;
}

/** Cover image with a play button; opens the video in a modal dialog. */
function VideoCover({ video, title, duration, children }: { video: string; title: string; duration?: string | undefined; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const open = () => {
    dialogRef.current?.showModal();
    void videoRef.current?.play().catch(() => {});
  };
  const stop = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };
  // Stop playback directly rather than relying on the dialog's `close` event,
  // which some browsers don't fire reliably.
  const close = () => {
    stop();
    dialogRef.current?.close();
  };
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      close();
    };
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("close", stop);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("close", stop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <button type="button" className="video-cover" onClick={open} aria-label={`Play video: ${title}`}>
        {children}
        <span className="play-badge" aria-hidden="true">
          <span className="play-disc"><svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5v14l11-7z" fill="currentColor" /></svg></span>
          <span className="play-label">Watch{duration ? ` · ${duration}` : ""}</span>
        </span>
      </button>
      <dialog ref={dialogRef} className="video-modal" aria-label={title} onClick={(e) => e.target === e.currentTarget && close()} onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); close(); } }}>
        <button type="button" className="video-close" onClick={close}>Close <span aria-hidden="true">✕</span></button>
        <video ref={videoRef} src={video} controls playsInline preload="none" />
      </dialog>
    </>
  );
}

function IssueRow({ issue, n }: { issue: Issue; n: number }) {
  const { note, share, post, email } = useShare();
  const id = `issue-${n}`;
  const url = () => pageUrl(`#${id}`);
  const photo = <img src={issue.image} alt={issue.alt} width={issue.imageWidth} height={issue.imageHeight} loading="lazy" decoding="async" />;
  return (
    <article id={id} data-claim={n} className={`claim ${theme(n)}${n % 2 === 0 ? " flip" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="claim-photo">{issue.video ? <VideoCover video={issue.video} title={issue.videoTitle ?? issue.title} duration={issue.videoDuration}>{photo}</VideoCover> : photo}</div>
      <div className="claim-copy">
        <div className="claim-meta"><span className="badge">{pad(n)} / {issues.length}</span><span>{issue.topic}</span></div>
        <h2 id={`${id}-title`}>{issue.title}</h2>
        <div className="claim-body">
          {issue.intro}
          {issue.happened && <><h3 className="sub dash">{issue.happenedLabel ?? "What happened"}</h3>{issue.happened}</>}
          <h3 className="sub dash">Why it matters</h3>{issue.matters}
          {issue.simple && <div className="simple"><h3 className="sub">The Coles Notes</h3><p>{issue.simple}</p></div>}
        </div>
        <p className="sources"><strong>Source:</strong><a href={issue.sourceId ? `#${issue.sourceId}` : "#sources"}>{issue.source}</a>{!issue.sourceId && <small className="pending">Link pending</small>}</p>
        <div className="share-row">
          <button type="button" onClick={() => share(issue.title, url())}>Share</button>
          <button type="button" onClick={() => post(issue.title, url())}>Post</button>
          <button type="button" onClick={() => email(issue.title, url())}>Email</button>
          {note && <span className="share-note" role="status">{note}</span>}
        </div>
      </div>
    </article>
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
    <nav className="nav" aria-label="Site">
      <div className="nav-bar">
        <Wordmark href="#top" />
        <div className="menu-wrap" ref={wrapRef}>
          <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="record-menu" onClick={() => setMenuOpen((o) => !o)}>
            The Record <span className="caret">{menuOpen ? "▲" : "▼"}</span>
          </button>
          {menuOpen && (
            <div className="menu-panel" id="record-menu">
              <a href="#case" onClick={close}><span>—</span><span>The case</span></a>
              {issues.map((issue, i) => (
                <a key={issue.title} href={`#issue-${i + 1}`} onClick={close}><span>{pad(i + 1)}</span><span>{issue.topic}</span></a>
              ))}
              <a href="#sources" onClick={close}><span>—</span><span>Sources</span></a>
            </div>
          )}
        </div>
        <div className="ticks">
          {issues.map((issue, i) => {
            const n = i + 1;
            return (
              <a key={issue.title} href={`#issue-${n}`} title={issue.topic} className={n === active ? "on" : n < active ? "past" : undefined} aria-current={n === active ? "location" : undefined}>{pad(n)}</a>
            );
          })}
        </div>
        <span className="nav-spacer" />
        <a className="nav-join" href="#join">Join us</a>
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
    <section className="join" id="join" aria-labelledby="join-title">
      <div className="inner">
        <div className="join-copy">
          <p className="label">Join the coalition</p>
          <h2 id="join-title">Help us finish this.</h2>
          <p className="lede">Leave your name and how to reach you. Tell us your story if you have one. We will use this list to keep residents informed and organized through election day.</p>
        </div>
        {formState === "success" ? (
          <div className="joined" role="status"><div className="big">You’re in.</div><p>We’ll be in touch. Tell one neighbour before you close this tab.</p></div>
        ) : (
          <form className="join-form" onSubmit={submitForm} noValidate>
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Name" required />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="Email" required />
            <label className="sr-only" htmlFor="neighbourhood">Neighbourhood or postal code</label>
            <input id="neighbourhood" name="neighbourhood" type="text" autoComplete="postal-code" placeholder="Neighbourhood or postal code" />
            <label className="sr-only" htmlFor="story">Optional: What have you seen?</label>
            <textarea id="story" name="story" placeholder="Optional: What have you seen?" />
            <label className="check-field"><input type="checkbox" name="updates" /><span>I want updates about the October 26, 2026 election.</span></label>
            <label className="check-field"><input type="checkbox" name="ack" required /><span>I understand this is a political campaign, not a City of Toronto website.</span></label>
            <button type="submit">Join the coalition <span aria-hidden="true">→</span></button>
            {formState === "error" && <p className="form-error" role="alert">That didn’t send. Check your email address and try again.</p>}
          </form>
        )}
      </div>
    </section>
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
    <div className="page">
      <a className="skip" href="#record">Skip to the record</a>
      <div className="disclaimer" role="note">Stop Moise is an independent residents’ campaign in Toronto Centre. It is not affiliated with the City of Toronto.</div>
      <Nav active={active} />

      <main id="top">
        <header className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="label">Toronto Centre <span>•</span> Municipal election <span>•</span> October 26, 2026</p>
            <p className="candidate-name">Chris Moise</p>
            <h1 id="hero-title"><span>A disaster</span><span className="r">all around</span></h1>
            <p className="hero-sub">Chris Moise’s four years as Toronto Centre (Ward 13) Councillor have been a failure for residents.</p>
          </div>
          <div className="hero-photo">
            <img src={heroImage} width={1672} height={941} alt="A stern political figure with the Toronto skyline at night" fetchPriority="high" />
          </div>
        </header>

        <section className="case" id="case" aria-labelledby="case-title">
          <div className="inner">
            <h2 id="case-title">The case</h2>
            <div className="case-copy">
              <p className="lede">A councillor’s job should be simple: listen to residents, spend taxpayers’ money responsibly, solve problems, and treat people with respect. Instead, residents have too often found themselves ignored, dismissed, or attacked when they raise legitimate concerns.</p>
              <p>When constituents speak up, they deserve answers and solutions—not insults, personal attacks, or political games.</p>
              <p>Moise’s confrontational approach and hostile exchanges with constituents have made him one of the most polarizing figures at City Hall. His record has left many residents asking a simple question: <strong>Is this really the representation Ward 13 deserves?</strong></p>
              <p>And the state of the ward speaks for itself. Residents are dealing with enormous concerns about crime, cleanliness, public drug use, disorder, and parks and public spaces that no longer feel welcoming or safe for everyone.</p>
              <figure className="case-figure"><VideoCover video={caseWardVideo} title="The state of the ward: drug use at the St. James Park playground" duration="0:29"><img src={caseWardImage} width={1079} height={819} loading="lazy" decoding="async" alt="Abandoned furniture, tarps and debris piled in a Toronto Centre laneway in front of residential towers" /></VideoCover><figcaption>The state of the ward. Tap the photo to watch residents’ video from the ward.</figcaption></figure>
              <p>After four years, the question is not whether Chris Moise deserves another term.</p>
              <p><strong>It’s whether Ward 13 can afford another four years of the same.</strong></p>
              <blockquote className="verdict"><span>Ward 13 deserves better.</span><strong>Chris Moise does not deserve to be rewarded with re-election.</strong></blockquote>
              <div className="btn-row"><a className="btn btn-red" href="#record">See the record <span aria-hidden="true">→</span></a><a className="btn btn-outline-ink" href="#join">Join the coalition</a></div>
              <aside className="campaign-note"><strong>Note</strong><span>This is a concerned citizen website. Always check sources at the bottom.</span></aside>
            </div>
          </div>
        </section>

        <section id="record" aria-labelledby="record-title">
          <div className="record-intro">
            <div className="inner">
              <div><p className="label">Four years on Council</p><h2 id="record-title">The record</h2></div>
              <p className="lede">Eleven issues. Each one has what happened, why it matters, and the Coles Notes. Sources are listed at the bottom of the page.</p>
            </div>
          </div>
          {issues.map((issue, index) => <IssueRow key={issue.title} issue={issue} n={index + 1} />)}
        </section>

        <section className="vote" aria-labelledby="vote-title">
          <img src={skylineImage} width={1600} height={800} loading="lazy" alt="Toronto skyline at night" />
          <div className="inner">
            <p className="label">Want to stop Chris Moise?</p>
            <h2 id="vote-title"><span>On October 26, 2026,</span><span className="ink">vote him out.</span></h2>
            <p>If you have been dismissed, insulted, or ignored, you are not alone. Join the coalition. Share the record. Tell your neighbours. Show up in October.</p>
            <a className="btn btn-ink" href="#join">I’m in <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <Join />
      </main>

      <footer className="foot" id="sources">
        <div className="inner">
          <div className="foot-top">
            <Wordmark />
            <div className="foot-links"><a href="#case">The case</a><a href="#record">The record</a><a href="#join">Join the coalition</a></div>
          </div>
          <p className="foot-note">Stop Moise is an independent residents’ campaign in Toronto Centre. It is not affiliated with the City of Toronto.</p>
          <p className="foot-note">This page is political advocacy. It summarizes news reports, public meetings, Council records, and the Integrity Commissioner’s March 20, 2026 finding. A donation is not proof of a crime. Where this page describes conflict-of-interest concerns, it is raising a question about trust, not announcing a court verdict.</p>
          <div className="foot-sources">
            <h2>Sources</h2>
            <ol>
              <li id="src-cbc">CBC News, September 2024 campaign-finance reporting <small className="pending">Link pending</small></li>
              <li id="src-ctv-poll"><a href="https://www.ctvnews.ca/toronto/article/public-support-strikingly-bad-for-renaming-of-yonge-dundas-square-to-sankofa-square-poll/" target="_blank" rel="noopener noreferrer">CTV News, poll on renaming Yonge-Dundas Square to Sankofa Square</a></li>
              <li id="src-cbc-bhp">CBC News, September 3, 2026, Barbara Hall Park <small className="pending">Link pending</small></li>
              <li id="src-sun">Toronto Sun, Moss Park Arena <small className="pending">Link pending</small></li>
              <li id="src-sun-expenses">Toronto Sun, councillor expenses (Moise total $1,081,639) <small className="pending">Link pending</small></li>
              <li id="src-sun-decals">Toronto Sun, August 31, 2025, sidewalk decals <small className="pending">Link pending</small></li>
              <li id="src-ic">City of Toronto Integrity Commissioner finding, March 20, 2026; CBC News, March 22, 2026 <small className="pending">Link pending</small></li>
              <li id="src-raves">Aidan Chamandy, April 23, 2025, rave-motion withdrawal <small className="pending">Link pending</small></li>
              <li id="src-budget">Council budget and expense records <small className="pending">Link pending</small></li>
              <li id="src-chw">City Hall Watcher, Chow voting alignment <small className="pending">Link pending</small></li>
            </ol>
          </div>
          <p className="election-date">Municipal election: <strong>October 26, 2026.</strong></p>
        </div>
      </footer>
    </div>
  );
}

function Index() {
  return (
    <PasswordGate>
      <Page />
    </PasswordGate>
  );
}
