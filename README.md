# Answered Reviews site (v4, Oct 20 2026 prices)

Plain static site (HTML, one shared `styles.css`, no build step), served by GitHub Pages from `main` at getansweredreviews.com (`CNAME`).

Pages:
- `index.html`: home and price page (prices from Hub settings/agencyPrices). Anchors: `#tuneup`, `#catchup`, `#monthly`, `#replies`, `#posts`, `#full`, `#quote` (Concierge from $599 by quote), `#promise`, `#offers`. No founding offer.
- `trades/<type>.html`: one page per business type (restaurants, salons, homeservices, auto, retail, furniture, consignment, moving). Every outreach email links to the page for that prospect's business type. No healthcare at launch.
- `everything.html`: Everything we do (services plus add ons live at launch).
- `terms.html`: client terms (plain words agreement).
- `audit.html`: free audit request (business name + email). FormSubmit emails it to rickey@answeredreviewsco.com.
- `signup.html`: plan picker (`?plan=tuneup|catchup|replies|posts|full`), Square card on file after signup, every fee in writing, written OK with the authorization line.
- `onboarding.html`: voice form, manager access steps, Google third party policy items, written OK.
- `reply.html`: free review reply tool. Owner pastes a review plus name, business and email; FormSubmit emails it to rickey@answeredreviewsco.com with subject "Free reply request: Answered Reviews" (Form reply). An agent writes the reply and emails it. Lands on `thanks.html?from=reply`.
- `referral.html`: referral partner page (20 percent recurring) and the client free month.
- `thanks.html`: after any form (`?from=onboarding|audit|partner|reply`, default sign up).
- `results/?c=<client-key>`: one phone friendly results page per client, read from `results/data/<client-key>.json` (see `results/data/example-7f3k2q.json` for the fields).
- `coming-soon.html`: self contained holding page; copy it over `index.html` on `main` when the live site must come down.

FormSubmit sends a one time confirmation email to rickey@answeredreviewsco.com the first time a form is sent. Click it once, or no form emails arrive.
