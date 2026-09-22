# Suremines Trading Hub

A responsive, compliance-led digital trading and lead-generation hub for Suremines Gold and Diamond Mining Company (SL) Limited.

## Included

- Five pages: Home, About, Operations, Compliance, Contact
- Structured buyer/partner inquiry form
- Appointment-request workflow
- Mobile navigation and responsive design
- SEO titles and descriptions
- GitHub Pages deployment workflow

## Contact configuration

Edit `assets/config.js` and confirm:

- Official business email
- Official telephone/WhatsApp number, when approved for publication
- Office address
- Optional Calendly or other appointment URL

The inquiry form currently prepares a detailed email in the visitor's email application. For server-side submissions, connect Formspree, Basin, Netlify Forms, or a custom API.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The included workflow will deploy the website after every push to `main`.

## Local preview

Run `python3 -m http.server 8080` from this folder and open `http://localhost:8080`.
