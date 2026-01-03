# 🎨 Cindy Art Studio — Web Storefront

A warm, intentional art website where visitors can browse original paintings, request commissions, and connect for events — all designed to feel personal and “art that feels like home.”

This first version uses a **WhatsApp-first ordering flow**, so conversations stay human while the business grows toward a full ecommerce experience.

---

## ✨ Vision

This project isn’t just a store — it’s a creative space.

- Showcase original art
- Tell the story behind each piece
- Allow people to order through WhatsApp
- Support commissions and event bookings
- Eventually evolve into full ecommerce (Stripe / M-Pesa)

Built to grow **slowly, intentionally, and sustainably**.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Styled / CSS Modules or Tailwind (depending on final choice)**
- **WhatsApp ordering integration (link flow)**
- Future-ready for:
  - Shopify Headless / Supabase / Medusa
  - Stripe / M-Pesa
  - Digital downloads & booking workflows

---

## 🛒 Current Shopping Flow (MVP)

Instead of jumping straight to complex checkout systems:

1. User browses art
2. Clicks **“Order via WhatsApp”**
3. Auto-filled message opens WhatsApp chat
4. Order handled personally (price, delivery, deposit, etc.)

This lets us:

- learn what customers really want  
- refine pricing + process  
- stay personal and high-trust  
- delay heavy backend costs until needed  

---

## 📂 Project Structure (subject to evolve)

src/
├─ app/
│ ├─ page.tsx # Landing page
│ ├─ about/
│ ├─ collection/
│ ├─ custom/
│ └─ events/
├─ components/
├─ styles/
├─ lib/
└─ data/

yaml
Copy code

---

## 🧑‍💻 Running Locally

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
Visit:

arduino
Copy code
http://localhost:3000
🔗 WhatsApp Integration
Each product uses a link format like:

perl
Copy code
https://wa.me/<countrycodephonenumber>?text=Hi%20Cindy❤️%20I’d%20love%20to%20order%20this:%20[ART_NAME]
This can later switch to:

real checkout

deposit flows

bookings

automated confirmations

without changing the site structure.

📈 Roadmap
 Add product management via JSON / CMS

 Add gallery filters

 Commission request form

 Event booking request flow

 Admin dashboard

 Add payments (Stripe + M-Pesa)

 Digital downloads

 Headless ecommerce integration

🤍 Credits
Designed and built with intention by Cindy❤️.
Every piece, every feature, every page — created with feeling.
