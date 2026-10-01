# Inspection and validation

Validated October 1, 2026.

## Inspection completed before modification

The inspected repository snapshot contained only `index.html` and `README.md`. The HTML contained all application code: section navigation through `showSection`, KPI specifications through `renderFichaForm`, performance capture through `renderAnalisis`, native canvas dashboard charts through `renderDashboard`, document exploration through `renderExplorador`, and action verification through `renderSeguimiento`.

Data access used an `apiFetch` adapter with a remote integration placeholder and a local `demoApi` / localStorage implementation. The original local dataset initialized empty. The supplied repository did not contain Google Apps Script server code or a spreadsheet dataset.

Sensitive source content included an embedded login secret, personal attribution / example names, an original department catalogue and institution-specific storage keys. The public copy removes all of these, as well as the login modal, session restrictions, remote data branch and connection instructions. The original checkout was read-only throughout; its Git status remained clean.

Only the application architecture was copied. No original Git history, remote configuration, source README, real datasets or original inspection files are included in the deliverable.

## Public data

Six synthetic manufacturing KPIs and 18 monthly measurements (July–September 2026). September: Production Efficiency 96.2% / target 95%; First Pass Yield 93.8% / 95%; Equipment Availability 92.5% / 90%; Inventory Accuracy 98.6% / 98%; On-Time Delivery 92.1% / 95%; Supplier Compliance 91.7% / 90%.

Compliance is calculated from these measurements: 4 of 6 = 66.7%. The October Quality follow-up is explicitly a fictional future verification scenario. It does not overwrite September results. The action's In Progress state is retained as historical context; effective follow-up is Closed after 95.4% verification.

## Automated browser verification

Passed in headless Microsoft Edge using Playwright:

- Startup from local `index.html`, without a server or authentication.
- Initial dashboard totals and compliance; department filtering.
- Saved Quality report opens with its actual result, target, status, corrective action and synthetic evidence.
- Report preview and print media display the report and hide application navigation.
- Quality follow-up loads 95.4% and effective closure; save preserves the record.
- A closure below the KPI target is rejected.
- KPI definition opens with existing values and creates its report preview.
- Local evidence reference opens through the Documentation editor.
- Documentation changes persist after browser reload.
- New measurement computes from N/D, saves corrective action data and refreshes the dashboard.
- Duplicate periods are rejected; zero denominator leaves result unavailable.
- KPI deletion cascades to measurements, corrective actions and follow-up records.
- Reset restores the fictional seed dataset without retaining the test measurement.
- Case study contains six sections and returns to the application.
- At 390px width, the page has no document-level horizontal overflow; wide tables scroll inside their cards.
- No JavaScript page errors and no HTTP/HTTPS requests during the main application workflow.

Desktop and mobile screenshots were visually inspected. The application retains the original navy cards, traffic-light status badges, form structure, canvas charts, table exploration and report workflow.

## Sanitization checks

All public text source files were scanned for original institution strings, source-domain references, original personal names, embedded login secrets, API credentials, private Google URLs and data IDs. None were retained. The public runtime contains no remote fetch, WebSocket, XMLHttpRequest or external script/style import. The synthetic SVG evidence is generated locally and contains only fictional manufacturing records. Compiled CSS is local.

This is a static portfolio demo. Browser storage is local to each visitor and can be cleared or reset. No production multi-user permissions, backend persistence or shared synchronization is represented. Browser Print / Save PDF was checked using print media; an actual printer was not tested. Public hosting has not been deployed.

## Validación de la interfaz en español

Se comprobaron la navegación, el dashboard 6/4/2/66.7%, el análisis con acciones y evidencias, las fichas, el guardado, la persistencia, los filtros, el reinicio y la vista móvil. Los registros ficticios guardados en inglés se adaptan al español conservando códigos, fechas, cantidades y texto personalizado.
