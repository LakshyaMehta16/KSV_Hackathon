# VendorBridge ERP

A full-stack procurement management platform that streamlines the end-to-end vendor sourcing workflow — from RFQ creation to purchase order issuance and invoice management.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL (via Prisma ORM) |
| Auth | JWT + bcryptjs |
| Deployment | Vercel (frontend) |

---

## Project Structure

```
KSV/
├── backend/                  # Express + TypeScript API
│   ├── prisma/
│   │   ├── schema.prisma     # Database schema
│   │   └── seed.ts           # Admin seeder
│   ├── src/
│   │   ├── controllers/      # Route logic (auth, rfq, vendor, user)
│   │   ├── middleware/       # Auth, role checks, error handler
│   │   ├── routes/           # API route definitions
│   │   ├── utils/            # DB client, JWT, response helpers, AppError
│   │   ├── types/            # Express type extensions
│   │   ├── app.ts            # Express app setup
│   │   └── server.ts         # Entry point
│   ├── .env                  # Environment variables
│   └── package.json
├── css/style.css             # Global stylesheet
├── js/global-ui.js           # Shared UI logic
├── dashboard.html
├── vendors.html
├── create_rfq.html
├── submit_quote.html
├── compare_quotes.html
├── approval.html
├── purchase_order.html
├── invoices.html
├── reports_analytics.html
├── activity_logs.html
├── login.html
├── register.html
└── vercel.json
```

---

## Modules

| # | Module | Description |
|---|--------|-------------|
| 1 | Dashboard | KPI overview, top vendors, activity feed |
| 2 | Vendors | Supplier directory, register & manage vendors |
| 3 | RFQs | Create and send Requests for Quotation |
| 4 | Quotations | Vendor quote submission with live pricing |
| 5 | Comparison | Side-by-side quote evaluation & vendor award |
| 6 | Approvals | Internal sign-off workflow with approval chain |
| 7 | Purchase Orders | Generate and send official PO documents |
| 8 | Invoices | Invoice management and payment processing |
| 9 | Reports & Analytics | Spend analytics, vendor rankings, compliance |
| 10 | Activity Logs | Full system audit trail |

---

## Roles

- `ADMIN` — full system access
- `PROCUREMENT_OFFICER` — manages RFQs, vendors, POs
- `MANAGER` — approves procurement requests
- `VENDOR` — submits quotations

---

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL
- npm

### 1. Clone the repo

```bash
git clone <repo-url>
cd KSV/backend
```

### 2. Configure environment

Create or update `backend/.env`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/vendorbridge?schema=public
PORT=5000
JWT_SECRET=your_jwt_secret_here
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run database migrations

```bash
npx prisma migrate dev
```

### 5. Seed admin user

```bash
npm run seed:admin
```

### 6. Start the development server

```bash
npm run dev
```

API runs at `http://localhost:5000`

---

## API Base URL

```
http://localhost:5000/api/v1
```

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Sign in |
| POST | `/auth/register` | Register user |
| GET | `/vendors` | List vendors |
| POST | `/vendors` | Register vendor |
| GET | `/rfqs` | List RFQs |
| POST | `/rfqs` | Create RFQ |
| GET | `/users` | List users |

### Health Check

```
GET /api/v1/health
```

---

## Frontend

The frontend is a static multi-page HTML application. Open any `.html` file directly in a browser or serve via Vercel. All pages communicate with the backend API using `fetch`.

---

## License

Internal use — © 2025 Nexus Systems Ltd.
