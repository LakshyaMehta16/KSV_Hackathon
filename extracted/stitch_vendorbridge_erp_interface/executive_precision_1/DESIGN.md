---
name: Executive Precision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#434654'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#737686'
  outline-variant: '#c3c5d7'
  surface-tint: '#1353d8'
  primary: '#003fb1'
  on-primary: '#ffffff'
  primary-container: '#1a56db'
  on-primary-container: '#d4dcff'
  inverse-primary: '#b5c4ff'
  secondary: '#534ec3'
  on-secondary: '#ffffff'
  secondary-container: '#8985fd'
  on-secondary-container: '#1d0a91'
  tertiary: '#852b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ad3b00'
  on-tertiary-container: '#ffd4c5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003dab'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3a33ab'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#802a00'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  surface-muted: '#F4F7FF'
  border-subtle: '#E2E8F0'
  success-accent: '#10B981'
  data-ink: '#334155'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
  data-mono:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  baseline: 4px
  container-max: 1440px
  gutter: 24px
  margin-page: 32px
  sidebar-width: 260px
  density-compact: 8px
  density-comfortable: 16px
---

## Brand & Style

This design system is engineered for high-stakes enterprise resource planning, where clarity, authority, and efficiency are paramount. The brand personality is **composed, meticulous, and institutional**, designed to instill confidence in financial controllers and procurement officers managing complex global supply chains.

The visual style follows a **Modern Corporate** movement with a heavy emphasis on **High-Density Minimalism**. We prioritize "Information over Decoration" by utilizing generous white space to separate complex data clusters rather than relying on heavy containers. The aesthetic is characterized by razor-sharp precision, utilizing thin 1px borders and a limited color palette to keep the focus entirely on transactional accuracy and system intelligence.

## Colors

The palette is anchored by a dominant **Corporate Blue** (#1A56DB) used for primary actions and navigation states. We utilize a secondary **Deep Lavender** (#6965DB) as a sophisticated accent for secondary data visualizations or subtle brand moments. 

The background strategy relies on **Pure White** (#FFFFFF) for main content surfaces to ensure maximum contrast for data readability, while **Surface Muted** (#F4F7FF) is reserved for structural backgrounds and sidebars. **Success Accent** (#10B981) is used surgically for growth indicators and "Add" actions, ensuring these positive triggers stand out in a high-density environment. Neutrals are tiered from a deep **Data Ink** (#334155) for body text down to **Border Subtle** (#E2E8F0) for structural division.

## Typography

The typography system uses a dual-font strategy to balance character and utility. **IBM Plex Sans** is utilized for headlines and technical data points, providing a structured, engineered feel that reflects the ERP's stability. **Inter** is used for all body copy and interface labels due to its exceptional legibility at small sizes and high-density layouts.

Hierarchy is enforced through weight and letter spacing rather than excessive size shifts. Large data values use `data-mono` (Medium weight) to ensure numerical alignment. Uppercase labels are used sparingly for metadata headers to differentiate them from interactive text elements.

## Layout & Spacing

The system follows a **Fixed-Fluid Hybrid** model. The main navigation sidebar is a fixed 260px, while the content area utilizes a fluid 12-column grid that caps at 1440px to prevent excessive line lengths on ultra-wide monitors.

A **4px baseline grid** governs all spacing. Vertical rhythm is tight to accommodate data-rich environments; 8px (2 units) is the standard padding for list items and table rows in "compact" mode, while 16px (4 units) is used for standard card padding. Breakpoints occur at 768px (Tablet) where the sidebar collapses into a rail, and 1024px (Small Desktop) where margins reduce to 24px.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Structural Outlines** rather than dramatic shadows. 
- **Level 0 (Base):** `surface-muted` (#F4F7FF) for the application canvas.
- **Level 1 (Surface):** `Pure White` (#FFFFFF) with a 1px border (#E2E8F0). No shadow. Used for dashboard widgets and table containers.
- **Level 2 (Overlay):** Used for dropdowns and tooltips. Includes a subtle, sharp shadow: `0px 4px 6px -1px rgba(0, 0, 0, 0.05)`.
- **Level 3 (Modal):** High-contrast focus. Uses a diffused shadow: `0px 20px 25px -5px rgba(0, 0, 0, 0.1)`.

Use horizontal separators (1px) in sidebars and tables to maintain order without adding visual weight.

## Shapes

The design system uses a **Soft Geometry** approach. A base radius of 4px (`roundedness: 1`) is applied to buttons, input fields, and small UI components. Larger containers like cards and modals may use up to 8px (`rounded-lg`) to provide a modern, premium feel. 

Avoid completely round (pill) shapes for primary actions; stay with the 4px radius to maintain a professional, structured architectural aesthetic. All icons should follow a consistent 2px stroke weight with slightly rounded terminals to match the font geometry.

## Components

### Side Navigation
- **Active State:** Left-side 4px vertical accent bar in `primary_color_hex` with a subtle `surface-muted` background fill.
- **Inactive State:** `Data Ink` text with low-opacity line icons. On hover, background shifts to a 50% opacity of `surface-muted`.

### Data Tables
- **Headers:** `label-caps` typography, background color `surface-muted`. 1px bottom border.
- **Rows:** Alternating zebra striping is prohibited. Use hover highlights (#F8FAFC) and subtle 1px row dividers only.
- **Cells:** Numeric data must use `data-mono` and right-alignment for rapid scanning.

### Multi-Step Forms
- Use a vertical "stepper" rail on the left of the form container. 
- Completed steps show the `success-accent` checkmark; current steps use a `primary_color_hex` ring.

### Buttons
- **Primary:** Filled `primary_color_hex`, White text, 4px radius. 
- **Secondary:** 1px border (#E2E8F0), `Data Ink` text, White background.
- **Success:** Filled `success-accent`, White text. Reserved exclusively for "+ Add", "Approve", or "Finalize" actions.

### Dashboard Widgets
- **KPI Cards:** Display a single primary metric in `headline-md`, a small line-chart trend sparkline, and a `label-bold` category name.
- **Charts:** Use a palette of Corporate Blue, Lavender, and Gray. Avoid high-vibrancy "rainbow" charts.