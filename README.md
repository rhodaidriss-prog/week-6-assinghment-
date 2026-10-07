:root {
--brand-color: #2e7d32;
--brand-dark: #1b5e20;
--accent-color: #f59e0b;

--background-color: #f4f7f6;
--surface-color: #ffffff;

--primary-text: #263238;
--secondary-text: #607d8b;

--border-color: #dfe7e3;

--danger-color: #dc2626;
--success-color: #15803d;
--warning-color: #d97706;


}

/* =========================================
GLOBAL
========================================= */

{
box-sizing: border-box;
}

html {
scroll-behavior: smooth;
}

body {
margin: 0;

background: var(--background-color);
color: var(--primary-text);

font-family: "Open Sans", sans-serif;
line-height: 1.5;


}

button,
input,
select {
font: inherit;
}

button {
cursor: pointer;
}

a {
color: inherit;
text-decoration: none;
}

/* =========================================
DASHBOARD
========================================= */

.dashboard {
min-height: 100vh;

display: grid;
grid-template-columns: 240px 1fr;


}

/* =========================================
SIDEBAR
========================================= */

.sidebar {
min-height: 100vh;

display: flex;
flex-direction: column;

padding: 25px 18px;

background: var(--surface-color);

border-right: 1px solid var(--border-color);


}

.logo {
display: flex;
align-items: center;
gap: 10px;

margin-bottom: 35px;

color: var(--brand-color);

font-family: "Merriweather", serif;
font-weight: 700;
font-size: 20px;


}

.logo-icon {
width: 38px;
height: 38px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 10px;

background: var(--brand-color);
color: white;


}

.navigation {
display: flex;
flex-direction: column;
gap: 8px;
}

.nav-item {
display: flex;
align-items: center;
gap: 12px;

padding: 12px 14px;

border-radius: 8px;

color: var(--secondary-text);

font-size: 14px;
font-weight: 600;

transition:
    background-color 200ms ease,
    color 200ms ease;


}

.nav-item:hover,
.nav-item.active {
background: #e8f5e9;
color: var(--brand-color);
}

.nav-item:focus-visible {
outline: 3px solid rgba(46, 125, 50, 0.25);
}

.sidebar-footer {
margin-top: auto;
padding: 15px;

border-radius: 10px;

background: #e8f5e9;

color: var(--brand-color);

font-size: 13px;


}

.sidebar-footer p {
margin: 3px 0;
}

/* =========================================
MAIN CONTENT
========================================= */

.main-content {
min-width: 0;

padding: 35px;


}

/* =========================================
HEADER
========================================= */

.dashboard-header {
display: flex;
align-items: center;
justify-content: space-between;

gap: 20px;

margin-bottom: 30px;


}

.welcome h1 {
margin: 0;

font-family: "Merriweather", serif;
font-size: 30px;


}

.welcome > p:last-child {
margin: 5px 0 0;

color: var(--secondary-text);


}

.eyebrow {
margin: 0 0 5px;

color: var(--brand-color);

font-size: 12px;
font-weight: 700;

letter-spacing: 1px;
text-transform: uppercase;


}

.profile {
display: flex;
align-items: center;
gap: 10px;
}

.profile-avatar {
width: 42px;
height: 42px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 50%;

background: var(--brand-color);
color: white;

font-size: 12px;
font-weight: 700;


}

.profile div {
display: flex;
flex-direction: column;
}

.profile strong {
font-size: 13px;
}

.profile small {
color: var(--secondary-text);
font-size: 11px;
}

/* =========================================
SUMMARY CARDS
========================================= */

.summary {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 18px;

margin-bottom: 25px;


}

.summary-card {
display: flex;
align-items: center;
justify-content: space-between;

padding: 20px;

background: var(--surface-color);

border: 1px solid var(--border-color);
border-radius: 12px;


}

.summary-card div {
display: flex;
flex-direction: column;
gap: 5px;
}

.summary-label {
color: var(--secondary-text);
font-size: 13px;
}

.summary-card strong {
font-size: 22px;
}

.summary-icon {
width: 42px;
height: 42px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 10px;

background: #e8f5e9;

font-size: 20px;


}

/* =========================================
GENERAL SECTIONS
========================================= */

.budget-tool,
.expense-form-section,
.expense-list-section,
.categories {
margin-bottom: 30px;

padding: 24px;

background: var(--surface-color);

border: 1px solid var(--border-color);
border-radius: 14px;


}

.budget-tool h2,
.expense-form-section h2,
.expense-list-section h2,
.categories h2 {
margin: 0;

font-family: "Merriweather", serif;
font-size: 21px;


}

.budget-tool p:last-child {
margin: 5px 0 0;

color: var(--secondary-text);

font-size: 14px;


}

/* =========================================
BUDGET FORM
========================================= */

.budget-tool {
display: flex;
align-items: center;
justify-content: space-between;

gap: 25px;

border-left: 5px solid var(--brand-color);


}

.budget-form {
display: flex;
align-items: end;
gap: 10px;
}

.budget-form label {
display: block;

margin-bottom: 5px;

font-size: 12px;
font-weight: 600;


}

.budget-form input {
width: 160px;

padding: 10px 12px;

border: 1px solid var(--border-color);
border-radius: 7px;

background: var(--surface-color);
color: var(--primary-text);


}

.budget-form button,
.primary-button {
padding: 10px 16px;

border: none;
border-radius: 7px;

background: var(--brand-color);
color: white;

font-weight: 600;

transition:
    background-color 200ms ease,
    transform 200ms ease;


}

.budget-form button:hover,
.primary-button:hover {
background: var(--brand-dark);
transform: translateY(-2px);
}

/* =========================================
EXPENSE FORM
========================================= */

.expense-form {
display: grid;
grid-template-columns: 1.3fr 1fr 1fr auto;

align-items: end;

gap: 15px;

margin-top: 20px;


}

.form-group {
display: flex;
flex-direction: column;
gap: 6px;
}

.form-group label {
font-size: 13px;
font-weight: 600;
}

.form-group input,
.form-group select {
width: 100%;

padding: 11px 12px;

border: 1px solid var(--border-color);
border-radius: 7px;

background: var(--surface-color);
color: var(--primary-text);

outline: none;


}

.form-group input:focus,
.form-group select:focus,
.budget-form input:focus {
border-color: var(--brand-color);

box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.12);


}

/* =========================================
SECTION HEADINGS
========================================= */

.section-heading {
display: flex;
align-items: center;
justify-content: space-between;

gap: 15px;


}

/* =========================================
BUTTONS
========================================= */

.secondary-button {
padding: 9px 14px;

border: 1px solid var(--border-color);
border-radius: 7px;

background: var(--surface-color);
color: var(--secondary-text);

font-size: 13px;
font-weight: 600;


}

.secondary-button:hover {
border-color: var(--danger-color);
color: var(--danger-color);
}

/* =========================================
BUDGET MESSAGE
========================================= */

.budget-message {
margin-bottom: 30px;
padding: 15px 18px;

border-radius: 9px;

background: #e8f5e9;
color: var(--success-color);

font-size: 14px;
font-weight: 600;


}

.budget-message.warning {
background: #fff7ed;
color: var(--warning-color);
}

.budget-message.danger {
background: #fef2f2;
color: var(--danger-color);
}

/* =========================================
EXPENSE TABLE
========================================= */

.table-wrapper {
margin-top: 18px;

overflow-x: auto;


}

table {
width: 100%;

border-collapse: collapse;

font-size: 14px;


}

th {
padding: 13px;

background: var(--brand-color);
color: white;

text-align: left;


}

td {
padding: 13px;

border-bottom: 1px solid var(--border-color);


}

tbody tr:nth-child(even) {
background: #f8faf9;
}

tbody tr:hover {
background: #eef7ef;
}

.empty-row td {
padding: 25px;

color: var(--secondary-text);

text-align: center;


}

/* =========================================
CATEGORY CARDS
========================================= */

.card-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);

gap: 18px;

margin-top: 20px;


}

.category-card {
display: flex;
flex-direction: column;

padding: 18px;

background: var(--surface-color);

border: 1px solid var(--border-color);
border-radius: 12px;

transition:
    transform 200ms ease,
    box-shadow 200ms ease;


}

.category-card:hover,
.category-card:focus-visible {
transform: translateY(-4px);

box-shadow:
    0 10px 25px rgba(38, 50, 56, 0.10);


}

.category-card:focus-visible {
outline: 3px solid rgba(46, 125, 50, 0.25);
}

.category-top {
display: flex;
align-items: center;
justify-content: space-between;
}

.category-icon {
width: 42px;
height: 42px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 9px;

font-size: 19px;


}

.category-card h3 {
margin: 16px 0 4px;

font-size: 17px;


}

.category-card p {
margin: 0;

color: var(--secondary-text);

font-size: 13px;


}

.category-total {
margin-top: 15px;

font-size: 18px;
font-weight: 700;


}

.category-count {
margin-top: 3px;

color: var(--secondary-text);

font-size: 12px;


}

/* Category Colors */

.food {
background: #fee2e2;
}

.transport {
background: #dbeafe;
}

.rent {
background: #ede9fe;
}

.entertainment {
background: #fce7f3;
}

.savings {
background: #d1fae5;
}

.utilities {
background: #fef3c7;
}

/* =========================================
DARK THEME
========================================= */

@media (prefers-color-scheme: dark) {

:root {
    --brand-color: #66bb6a;
    --brand-dark: #81c784;
    --accent-color: #fbbf24;

    --background-color: #111827;
    --surface-color: #1f2937;

    --primary-text: #f3f4f6;
    --secondary-text: #9ca3af;

    --border-color: #374151;
}

.nav-item:hover,
.nav-item.active {
    background: #243b2a;
}

.sidebar-footer,
.summary-icon {
    background: #243b2a;
}

tbody tr:nth-child(even) {
    background: #25313f;
}

tbody tr:hover {
    background: #2d3a48;
}

.budget-message {
    background: #243b2a;
}


}

/* =========================================
RESPONSIVE DESIGN
========================================= */

@media (max-width: 900px) {

.dashboard {
    grid-template-columns: 190px 1fr;
}

.main-content {
    padding: 25px;
}

.card-grid {
    grid-template-columns: repeat(2, 1fr);
}

.expense-form {
    grid-template-columns: 1fr 1fr;
}

.primary-button {
    width: 100%;
}


}

@media (max-width: 767px) {

.dashboard {
    grid-template-columns: 1fr;
}

.sidebar {
    min-height: auto;

    padding: 18px;

    border-right: none;
    border-bottom: 1px solid var(--border-color);
}

.logo {
    margin-bottom: 15px;
}

.navigation {
    flex-direction: row;

    overflow-x: auto;
}

.nav-item {
    flex-shrink: 0;
}

.sidebar-footer {
    display: none;
}

.main-content {
    padding: 18px;
}

.dashboard-header {
    align-items: flex-start;
    flex-direction: column;
}

.summary {
    grid-template-columns: 1fr;
}

.budget-tool {
    align-items: stretch;
    flex-direction: column;
}

.budget-form {
    align-items: stretch;
    flex-direction: column;
}

.budget-form input {
    width: 100%;
}

.expense-form {
    grid-template-columns: 1fr;
}

.card-grid {
    grid-template-columns: 1fr;
}

.section-heading {
    align-items: flex-start;
    flex-direction: column;
}


}