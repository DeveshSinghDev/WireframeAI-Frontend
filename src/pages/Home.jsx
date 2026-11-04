import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Copy, Pause, Play, Star } from "lucide-react";
import Wire from "../assets/wire.mp4";
import WirePoster from "../assets/wire-poster.jpg";
import Navbar from "../components/Navbar";
import Precision from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Tryit from "../components/Tryit";
import Footer from "../components/Footer";

const CODE = [
    [["key", "export default function"], ["name", " Landing"], ["punc", "() {"]],
    [["punc", "  return ("]],
    [["punc", "    <"], ["key", "section"], ["str", ' className="shell"'], ["punc", ">"]],
    [["punc", "      <"], ["key", "h1"], ["punc", ">"], ["text", "Wireframes in. React out."], ["punc", "</"], ["key", "h1"], ["punc", ">"]],
    [["punc", "      <"], ["key", "Button"], ["str", ' variant="primary"'], ["punc", ">"], ["text", "Start free"], ["punc", "</"], ["key", "Button"], ["punc", ">"]],
    [["punc", "    </"], ["key", "section"], ["punc", ">"]],
    [["punc", "  );"]],
    [["punc", "}"]],
];

const CODE_TEXT = `export default function Landing() {
  return (
    <section className="shell">
      <h1>Wireframes in. React out.</h1>
      <Button variant="primary">Start free</Button>
    </section>
  );
}`;

function Home() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return undefined;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    const toggleVideo = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            const playback = video.play();
            if (playback && typeof playback.catch === "function") {
                playback.catch(() => setPlaying(false));
            }
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    }, []);

    const copyCode = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(CODE_TEXT);
            setCopied(true);
        } catch {
            setCopied(false);
        }
    }, []);

    return (
        <div className="home-page">
            <a className="skip" href="#main">Skip to content</a>
            <Navbar />

            <main id="main">
                <section className="hero" aria-labelledby="hero-title">
                    <div className="shell hero__inner">
                        <div className="hero__copy">
                            <h1 id="hero-title">Wireframes in. React out.</h1>
                            <p className="hero__lead">
                                Sketch a screen, describe it, get typed React before the idea cools.
                            </p>
                            <div className="hero__actions">
                                <Link className="btn btn--primary" to="/login">
                                    Start free
                                    <ArrowRight size={18} aria-hidden="true" />
                                </Link>
                            </div>
                            <p className="hero__terms">No credit card to start. 5 free generations.</p>
                            <p className="hero__proof">
                                <Star className="hero__star" size={14} fill="currentColor" aria-hidden="true" />
                                4.9 rating from 18.3K+ users
                            </p>
                        </div>

                        <figure className="hero__visual">
                            <div className="hero-panel">
                                <div className="hero-panel__bar">
                                    <span>WireframeAI capture</span>
                                </div>
                                <div className="hero-panel__media">
                                    <video
                                        ref={videoRef}
                                        src={Wire}
                                        poster={WirePoster}
                                        autoPlay={playing}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        aria-label="WireframeAI generating a React component from a wireframe"
                                    />
                                    <button
                                        type="button"
                                        className="hero-panel__toggle"
                                        onClick={toggleVideo}
                                        aria-label={playing ? "Pause product preview" : "Play product preview"}
                                    >
                                        {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
                                    </button>
                                </div>
                            </div>
                            <figcaption className="hero__caption">A wireframe becoming a live React component.</figcaption>
                        </figure>
                    </div>
                </section>

                <Precision />

                <section id="product" className="section" aria-labelledby="product-title">
                    <div className="shell split">
                        <div className="split__copy">
                            <h2 id="product-title">React you can edit.</h2>
                            <p>
                                A wireframe in. Typed components out. Every prop and class is yours from the
                                start.
                            </p>
                            <ul className="fact-list">
                                <li><span>Output</span><span>React + Tailwind</span></li>
                                <li><span>Props</span><span>Typed and editable</span></li>
                                <li><span>Handoff</span><span>Plain files, no lock-in</span></li>
                            </ul>
                        </div>

                        <div>
                            <div className="code-panel">
                                <div className="code-panel__bar">
                                    <span className="code-panel__file">src/components/Landing.jsx</span>
                                    <button type="button" className="copy-button" onClick={copyCode}>
                                        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                                        {copied ? "Copied" : "Copy code"}
                                    </button>
                                </div>
                                <pre aria-label="Example generated React component">
                                    <code>
                                        {CODE.map((line, lineIndex) => (
                                            <span className="code-line" key={lineIndex}>
                                                {line.map(([kind, text], tokenIndex) => (
                                                    <span className={`tok-${kind}`} key={tokenIndex}>{text}</span>
                                                ))}
                                            </span>
                                        ))}
                                    </code>
                                </pre>
                                <span className="sr-only" aria-live="polite">
                                    {copied ? "Generated code copied to the clipboard" : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <Pricing />
                <FAQ />
                <Tryit />
            </main>

            <Footer />
        </div>
    );
}

export default Home;
