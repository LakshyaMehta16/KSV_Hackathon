---
name: Executive Precision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1b'
  on-surface-variant: '#424654'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#737785'
  outline-variant: '#c3c6d6'
  surface-tint: '#0a56ce'
  primary: '#0154cc'
  on-primary: '#ffffff'
  primary-container: '#346ee6'
  on-primary-container: '#fefcff'
  inverse-primary: '#b2c5ff'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#7bdbff'
  on-secondary-container: '#006078'
  tertiary: '#904900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b45d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a0'
  secondary-fixed: '#b8eaff'
  secondary-fixed-dim: '#72d3f6'
  on-secondary-fixed: '#001f29'
  on-secondary-fixed-variant: '#004d61'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb782'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703800'
  background: '#fcf9f8'
  on-background: '#1b1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
The design system embodies a "Modern Professional" aesthetic—balancing the data density required for ERP and enterprise workflows with the soft, approachable elegance of a high-end SaaS product. It is designed to feel precise, reliable, and exceptionally clean. 

The visual language draws inspiration from modern minimalism and light-mode efficiency. It prioritizes clarity and focus, using subtle depth and significant roundedness to reduce the visual "hardness" often associated with complex data-heavy interfaces. The emotional response is one of calm control and professional sophistication.

## Colors
The palette is centered on a vibrant, modern "Digital Blue" as the primary action color. This is complemented by a range of soft, cool grays that define the UI structure without creating harsh contrast.

- **Primary:** A bright, energetic blue used for key actions, active states, and focus indicators.
- **Secondary:** A soft cyan-blue used for accents, secondary data visualizations, and highlighting.
- **Neutral:** A deep charcoal for primary text, with lighter variations for secondary labels and metadata.
- **Backgrounds:** The interface uses a tiered gray system. A very light off-white background (`#F7F9FB`) sets the base, while pure white (`#FFFFFF`) is reserved for card surfaces to create a natural, "floating" hierarchy.

## Typography
The typography strategy uses a pairing of **Hanken Grotesk** for headings and **Inter** for UI and body text. 

Hanken Grotesk provides a sharp, contemporary edge to the information architecture, while Inter ensures maximum legibility in data-dense tables and complex forms. We utilize a slightly tighter letter spacing for display styles to maintain a high-end, editorial feel. All body text is optimized for long-form reading and quick scanning, prioritizing clarity over decoration.

## Layout & Spacing
The system utilizes a 12-column fluid grid for primary content areas, maintaining a professional density suitable for ERP dashboards. 

- **Desktop:** 24px outer margins with 16px gutters between components.
- **Tablet:** 16px outer margins with 12px gutters.
- **Mobile:** 16px outer margins; most cards and containers stack vertically to fill the width.

Spacing follows a strict 4px/8px baseline rhythm. Information density is managed through generous internal padding within cards (typically 24px) to ensure that even with high data volume, the interface never feels cramped.

## Elevation & Depth
Elevation is communicated through **Tonal Layering** and **Soft Ambient Shadows**. 

Instead of heavy shadows, we use a layering technique: the primary background is a cool gray, and primary content containers (cards) are pure white. A very subtle, large-radius shadow (15% opacity, 20px blur, 4px Y-offset) is applied to cards to give them a slight "lift." This creates a sense of depth without adding visual noise, keeping the focus on the data. For interactive elements like dropdowns or modals, the shadow intensity increases slightly to denote a higher z-index.

## Shapes
To achieve the modern "SaaS" feel, the system moves away from sharp industrial edges. 

The standard radius is set to **12px** for buttons and small input fields, and **16px** (rounded-lg) for larger containers, cards, and primary content blocks. This high roundedness softens the overall UI and makes the ERP-level data feel more accessible and user-friendly. Avatars and specific status chips may use a full pill-shape (999px) to provide visual variety and clear distinction from functional buttons.

## Components
- **Buttons:** All buttons use a 12px radius. Primary buttons use the vibrant primary blue with white text. Secondary buttons use a light gray surface with charcoal text.
- **Input Fields:** 12px corner radius. Borders are subtle (`#E5E9EF`) and turn primary blue on focus. Backgrounds are pure white.
- **Cards:** 16px corner radius. These are the primary containers for all data. They include a subtle ambient shadow and no border to maintain a clean appearance.
- **Chips & Tags:** Small, pill-shaped elements (999px radius) used for categories and status. These use low-saturation background colors to avoid competing with primary actions.
- **Lists:** Data rows use subtle hover states (a very light blue or gray tint) to assist with horizontal scanning.
- **Navigation:** The sidebar uses a clean, vertical layout with generous vertical spacing between items. Active states are indicated by a subtle background shape with a 12px radius.