# 🌧️ Rainwater Harvesting System Selection using AHP–TOPSIS DSS

> A production-ready, intelligent **Decision Support System (DSS)** for selecting and ranking the most suitable **Rainwater Harvesting (RWH) system** using Multi-Criteria Decision Making (MCDM) — Analytic Hierarchy Process (AHP) + TOPSIS.

---

## 🎯 Project Overview

This web-based DSS implements the **AHP–TOPSIS methodology** as described in the research paper on "Selection of Rainwater Harvesting Systems using AHP-TOPSIS Method." It evaluates **5 RWH system alternatives** across **4 key criteria** to produce an objective, data-driven ranking.

### Fixed Criteria (as per research paper)
| # | Criterion | Unit | Type |
|---|-----------|------|------|
| 1 | Cost | INR (Lakhs) | Cost ↓ |
| 2 | Rainfall | mm/year | Benefit ↑ |
| 3 | Soil Type | score (1-5) | Benefit ↑ |
| 4 | Storage Capacity | m³ | Benefit ↑ |

### Fixed Alternatives (RWH Systems)
1. **Rooftop Harvesting** — Low-cost, high rainfall required
2. **Check Dam** — High storage, medium rainfall
3. **Percolation Pit** — Best soil suitability, low cost
4. **Contour Bunding** — Large-scale storage, moderate cost
5. **Recharge Well** — Balanced across all criteria

---

## 🧮 Algorithm Implementation

### AHP (Analytic Hierarchy Process)
1. Build pairwise comparison matrix A (4×4)
2. Normalize: rᵢⱼ = aᵢⱼ / Σaᵢⱼ (column sum)
3. Priority vector: wᵢ = row_avg(normalized matrix)
4. λmax = average of (weighted sum / priority vector)
5. CI = (λmax - n) / (n - 1)
6. **CR = CI / RI → acceptable if CR ≤ 0.10**

### TOPSIS Algorithm
1. Normalize: rᵢⱼ = xᵢⱼ / √Σxᵢⱼ² (vector normalization)
2. Weight: vᵢⱼ = wⱼ × rᵢⱼ
3. A⁺ = max(benefit cols), min(cost cols)
4. A⁻ = min(benefit cols), max(cost cols)
5. Sᵢ⁺ = √Σ(vᵢⱼ - Aⱼ⁺)²
6. Sᵢ⁻ = √Σ(vᵢⱼ - Aⱼ⁻)²
7. **Cᵢ = Sᵢ⁻ / (Sᵢ⁺ + Sᵢ⁻) → rank descending**

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd water-harvest-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
water-harvest-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home — project overview + quick demo
│   │   ├── input/page.tsx    # Input Data — criteria & RWH systems
│   │   ├── ahp/page.tsx      # AHP — pairwise comparison matrix
│   │   ├── results/page.tsx  # Results — TOPSIS ranking dashboard
│   │   ├── history/page.tsx  # History — past analyses
│   │   ├── about/page.tsx    # About — methodology & documentation
│   │   ├── layout.tsx        # Root layout + metadata
│   │   └── globals.css       # Design system & CSS tokens
│   ├── components/
│   │   ├── AppShell.tsx      # Layout wrapper (sidebar + content)
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   └── MapView.tsx       # Leaflet map visualization
│   └── lib/
│       ├── mcdm.ts           # AHP + TOPSIS algorithm implementation
│       └── store.ts          # Zustand global state management
├── test-data/
│   ├── valid_dataset.csv     # Sample CSV for import testing
│   └── wrong_format.txt      # Invalid file for error handling test
└── README.md
```

---

## 🎨 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| State | Zustand (persisted) |
| Charts | Recharts |
| Map | Leaflet.js + React-Leaflet |
| PDF Export | jsPDF + jsPDF-AutoTable |
| Data Import | PapaParse (CSV) + SheetJS (Excel) |
| Fonts | Inter + Space Grotesk (Google Fonts) |

---

## 📊 Pages & Features

### 1. Home (`/`)
- Project overview and problem statement
- 5-step workflow diagram
- "Quick Demo" button — loads paper data and runs analysis
- Real-time analysis status indicators

### 2. Input Data (`/input`)
- **Criteria tab**: Manage evaluation criteria (name, unit, benefit/cost type)
- **RWH Systems tab**: Enter system values across all criteria
- CSV / Excel import with validation and missing value detection
- Export current dataset as CSV

### 3. AHP Weights (`/ahp`)
- Interactive pairwise comparison matrix (Saaty's 1–9 scale)
- Automatic reciprocal filling
- Weight visualization with progress bars
- Consistency analysis (λmax, CI, RI, CR)
- Step-by-step AHP breakdown (collapsible)

### 4. Results Dashboard (`/results`)
- TOPSIS ranking with closeness coefficients (Cᵢ)
- Suitability labels (Highly Suitable / Suitable / Marginal)
- Charts: Ranking bar, Criteria weight pie, Distance comparison, Radar
- Map view with ranked system markers
- Export PDF report & CSV

### 5. History (`/history`)
- Save and reload past analyses
- Delete unwanted records

### 6. About (`/about`)
- AHP & TOPSIS mathematical documentation
- Why AHP–TOPSIS over traditional methods
- Real-world applications in water management
- Limitations and future scope (AI, GIS, IoT)
- References (Saaty 1980, Hwang & Yoon 1981, etc.)

---

## 📥 CSV Import Format

```csv
Name,Latitude,Longitude,Cost [cost],Rainfall [benefit],Soil Type [benefit],Storage Capacity [benefit]
Rooftop Harvesting,20.5,78.9,50,1200,3,500
Check Dam,20.7,79.1,250,800,4,50000
```

> Include `[benefit]` or `[cost]` in column headers so the importer correctly classifies criteria types.

---

## 🔐 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel via CLI or GitHub integration
```

### Environment Variables
No backend API required — all computation is client-side.

---

## 📄 References

1. Saaty, T.L. (1980). *The Analytic Hierarchy Process*. McGraw-Hill, New York.
2. Hwang, C.L. & Yoon, K. (1981). *Multiple Attribute Decision Making*. Springer-Verlag.
3. Chen, S.J. & Hwang, C.L. (1992). *Fuzzy Multiple Attribute Decision Making*. Springer.
4. Malczewski, J. (1999). *GIS and Multicriteria Decision Analysis*. John Wiley & Sons.

---

## 🧠 Viva Points

- **Why AHP–TOPSIS?** AHP quantifies expert judgment into weights; TOPSIS uses those weights to rank alternatives by proximity to the ideal solution — combining qualitative and quantitative decision-making.
- **Advantages** over traditional methods: multi-dimensional, transparent, scale-independent, with built-in consistency validation.
- **Limitations**: Subjective expert bias, complexity grows with n² comparisons, doesn't handle fuzzy inputs natively.
- **Future scope**: Fuzzy AHP/TOPSIS, GIS integration, IoT sensor data, ML-based weight suggestion.
