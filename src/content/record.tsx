import { useEffect, useRef, useState } from "react";
export { default as caseWardImage } from "@/assets/issues/case-state-of-ward.jpg";
export { default as caseWardVideo } from "@/assets/videos/case-state-of-ward.mp4";
import leadershipVideo from "@/assets/videos/01-leadership.mp4";
import barbaraHallVideo from "@/assets/videos/02-barbara-hall-park.mp4";
import sankofaVideo from "@/assets/videos/03-sankofa-square.mp4";
import publicHealthVideo from "@/assets/videos/08-public-health.mp4";
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

export type Issue = {
  topic: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  /** Optional video; the image becomes its cover with a play button. */
  video?: string;
  videoDuration?: string;
  videoTitle?: string;
  intro?: React.ReactNode;
  happenedLabel?: string;
  happened?: React.ReactNode;
  matters: React.ReactNode;
  simple?: string;
  source: string;
  sourceId?: string;
};

export const issues: Issue[] = [
  {
    topic: "Leadership and conduct",
    title: "Name-calling is not a public service.",
    image: leadershipImage,
    video: leadershipVideo,
    videoDuration: "2:35",
    videoTitle: "Residents on Chris Moise",
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
    video: barbaraHallVideo,
    videoDuration: "0:21",
    videoTitle: "CBC News: reporter asks Moise about drug use in Barbara Hall Park",
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
    video: sankofaVideo,
    videoDuration: "0:35",
    videoTitle: "Sankofa Square",
    imageWidth: 1400,
    imageHeight: 815,
    alt: "News graphic reading “Most Torontonians disapprove of new name chosen for Yonge-Dundas Square: poll” over a protest at Yonge and Dundas",
    happened: <><p>Moise was the main advocate for renaming Yonge-Dundas Square and TTC stations. Here are the facts:</p><ul><li>Residents were not properly consulted.</li><li>The bill was approximately $2.7 million, and mostly public money.</li><li>He incorrectly accused Henry Dundas of being a slave owner, when in fact Henry Dundas was a “practical abolitionist” who worked to end slavery. Moise called him “Minister of Immigration and Slavery”—a cabinet job that never existed.</li><li>He backed a Ghanaian name—“Sankofa”—with no historical tie to Toronto. Ironically, Ghana has recently passed legislation criminalizing same-sex acts, with offenders facing possible imprisonment.</li><li><a href="https://www.ctvnews.ca/toronto/article/public-support-strikingly-bad-for-renaming-of-yonge-dundas-square-to-sankofa-square-poll/" target="_blank" rel="noopener noreferrer">Over 70% of residents opposed the renaming of Yonge-Dundas Square to Sankofa Square.</a></li><li>A resident brought a 30,000-signature petition against the renaming. Moise called that person a “racist.”</li><li>Two long-time and prominent Yonge-Dundas Square board members resigned in protest of the renaming. In January 2025, Moise still called the episode a “success story.”</li><li>At a February 2024 TTC meeting, witnesses said he insulted members of the public who questioned the plan.</li><li>Since the renaming, Sankofa Square’s revenues have plummeted and the square is a public disaster.</li></ul></>,
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
    video: publicHealthVideo,
    videoDuration: "2:58",
    videoTitle: "Residents question Chris Moise on harm reduction at his town hall",
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

export const pad = (n: number) => String(n).padStart(2, "0");
export function pageUrl(hash = "") {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${window.location.pathname}${hash}`;
}

/** Share / Post / Email for one issue. */
export function useShare() {
  const [note, setNote] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const flash = (msg: string) => {
    setNote(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNote(null), 2500);
  };
  const share = async (title: string, url: string) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* cancelled */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      flash("Link copied");
    } catch {
      flash("Copy failed");
    }
  };
  const post = (title: string, url: string) => {
    const intent = `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  };
  const email = (title: string, url: string) => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${url}`)}`;
  };
  return { note, share, post, email };
}
