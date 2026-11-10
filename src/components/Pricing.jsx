import { Link } from "react-router-dom";

const PLANS = [
  {
    title: "Free plan",
    price: "0",
    desc: "The essentials for a first screen.",
    features: [
      "5 component generations a month",
      "React export code",
      "Access to community components",
      "Standard support",
    ],
  },
  {
    title: "Pro plan",
    price: "5",
    desc: "For freelancers and solo developers.",
    features: [
      "Everything in Free",
      "API access",
      "Team collaboration",
      "Priority support",
    ],
    featured: true,
  },
  {
    title: "Team plan",
    price: "10",
    desc: "For small teams shipping together.",
    features: [
      "Unlimited components",
      "Advanced exports",
      "Premium components",
      "Dedicated support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-title">
      <div className="shell">
        <div className="section-head">
          <h2 id="pricing-title">Three ways to build.</h2>
          <p>Start free. Move up when it fits.</p>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan) => (
            <article className={`plan${plan.featured ? " plan--featured" : ""}`} key={plan.title}>
              <div>
                <h3 className="plan__name">{plan.title}</h3>
                <p className="plan__price">
                  <span className="plan__currency">$</span>
                  <span className="plan__amount">{plan.price}</span>
                  <span className="plan__period">/month</span>
                </p>
                <p className="plan__desc">{plan.desc}</p>
              </div>

              <Link
                className={`btn btn--quiet plan__cta${plan.featured ? " plan__cta--featured" : ""}`}
                to="/signup"
              >
                Get started
              </Link>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
