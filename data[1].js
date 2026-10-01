/* Datos ficticios de portafolio. Sin servicios externos. */
const DEMO_DATA = {
  "FICHAS": [
    {
      "CodigoIndicador": "PRD-IND-001",
      "NombreIndicador": "Eficiencia de Producción",
      "AreaResponsable": "PRD-IND-",
      "TipoIndicador": "Proceso",
      "ObjetivoIndicador": "Mantener una eficiencia de producción confiable mediante medición y mejora estructuradas.",
      "PeriodicidadMedicion": "Mensual",
      "MetaObjetivo": 95,
      "FormulaTipo": "Porcentaje",
      "FormulaEtiqueta": "%",
      "FormulaNumerador": "Producción real",
      "FormulaDenominador": "Producción planificada",
      "FormulaFactor": 100,
      "ResponsableIndicador": "Supervisor de Producción",
      "FuentesRecoleccion": [
        "Registro mensual ficticio de producción"
      ],
      "Terminos": [
        "Un valor mayor es mejor; resultado = numerador / denominador × 100."
      ],
      "Observaciones": [
        "Datos ficticios de portafolio; no son registros operativos reales."
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "QUA-IND-001",
      "NombreIndicador": "Rendimiento de Primera Pasada",
      "AreaResponsable": "QUA-IND-",
      "TipoIndicador": "Proceso",
      "ObjetivoIndicador": "Mantener un rendimiento de primera pasada confiable mediante medición y mejora estructuradas.",
      "PeriodicidadMedicion": "Mensual",
      "MetaObjetivo": 95,
      "FormulaTipo": "Porcentaje",
      "FormulaEtiqueta": "%",
      "FormulaNumerador": "Unidades conformes en primera pasada",
      "FormulaDenominador": "Unidades inspeccionadas",
      "FormulaFactor": 100,
      "ResponsableIndicador": "Supervisor de Calidad",
      "FuentesRecoleccion": [
        "Registro mensual ficticio de calidad"
      ],
      "Terminos": [
        "Un valor mayor es mejor; resultado = numerador / denominador × 100."
      ],
      "Observaciones": [
        "Datos ficticios de portafolio; no son registros operativos reales."
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "MNT-IND-001",
      "NombreIndicador": "Disponibilidad de Equipos",
      "AreaResponsable": "MNT-IND-",
      "TipoIndicador": "Proceso",
      "ObjetivoIndicador": "Mantener una disponibilidad de equipos confiable mediante medición y mejora estructuradas.",
      "PeriodicidadMedicion": "Mensual",
      "MetaObjetivo": 90,
      "FormulaTipo": "Porcentaje",
      "FormulaEtiqueta": "%",
      "FormulaNumerador": "Horas de equipo disponible",
      "FormulaDenominador": "Horas de equipo programadas",
      "FormulaFactor": 100,
      "ResponsableIndicador": "Supervisor de Mantenimiento",
      "FuentesRecoleccion": [
        "Registro mensual ficticio de mantenimiento"
      ],
      "Terminos": [
        "Un valor mayor es mejor; resultado = numerador / denominador × 100."
      ],
      "Observaciones": [
        "Datos ficticios de portafolio; no son registros operativos reales."
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "WHR-IND-001",
      "NombreIndicador": "Exactitud del Inventario",
      "AreaResponsable": "WHR-IND-",
      "TipoIndicador": "Proceso",
      "ObjetivoIndicador": "Mantener una exactitud del inventario confiable mediante medición y mejora estructuradas.",
      "PeriodicidadMedicion": "Mensual",
      "MetaObjetivo": 98,
      "FormulaTipo": "Porcentaje",
      "FormulaEtiqueta": "%",
      "FormulaNumerador": "Registros de inventario correctos",
      "FormulaDenominador": "Registros de inventario auditados",
      "FormulaFactor": 100,
      "ResponsableIndicador": "Supervisor de Almacén",
      "FuentesRecoleccion": [
        "Registro mensual ficticio de almacén"
      ],
      "Terminos": [
        "Un valor mayor es mejor; resultado = numerador / denominador × 100."
      ],
      "Observaciones": [
        "Datos ficticios de portafolio; no son registros operativos reales."
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "LOG-IND-001",
      "NombreIndicador": "Entregas a Tiempo",
      "AreaResponsable": "LOG-IND-",
      "TipoIndicador": "Proceso",
      "ObjetivoIndicador": "Mantener entregas a tiempo confiables mediante medición y mejora estructuradas.",
      "PeriodicidadMedicion": "Mensual",
      "MetaObjetivo": 95,
      "FormulaTipo": "Porcentaje",
      "FormulaEtiqueta": "%",
      "FormulaNumerador": "Entregas a tiempo",
      "FormulaDenominador": "Total de entregas",
      "FormulaFactor": 100,
      "ResponsableIndicador": "Supervisor de Logística",
      "FuentesRecoleccion": [
        "Registro mensual ficticio de logística"
      ],
      "Terminos": [
        "Un valor mayor es mejor; resultado = numerador / denominador × 100."
      ],
      "Observaciones": [
        "Datos ficticios de portafolio; no son registros operativos reales."
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "PRC-IND-001",
      "NombreIndicador": "Cumplimiento de Proveedores",
      "AreaResponsable": "PRC-IND-",
      "TipoIndicador": "Proceso",
      "ObjetivoIndicador": "Mantener un cumplimiento de proveedores confiable mediante medición y mejora estructuradas.",
      "PeriodicidadMedicion": "Mensual",
      "MetaObjetivo": 90,
      "FormulaTipo": "Porcentaje",
      "FormulaEtiqueta": "%",
      "FormulaNumerador": "Recepciones de proveedores conformes",
      "FormulaDenominador": "Total de recepciones de proveedores",
      "FormulaFactor": 100,
      "ResponsableIndicador": "Supervisor de Compras",
      "FuentesRecoleccion": [
        "Registro mensual ficticio de compras"
      ],
      "Terminos": [
        "Un valor mayor es mejor; resultado = numerador / denominador × 100."
      ],
      "Observaciones": [
        "Datos ficticios de portafolio; no son registros operativos reales."
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    }
  ],
  "ANALISIS": [
    {
      "CodigoIndicador": "PRD-IND-001",
      "AreaResponsable": "PRD-IND-",
      "PeriodoYM": "2026-07",
      "PeriodoLabel": "julio 2026",
      "NumValor": 950,
      "DenValor": 1000,
      "ResultadoObtenido": 95.0,
      "MetaObjetivo": 95,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "PRD-IND-001",
      "AreaResponsable": "PRD-IND-",
      "PeriodoYM": "2026-08",
      "PeriodoLabel": "agosto 2026",
      "NumValor": 957,
      "DenValor": 1000,
      "ResultadoObtenido": 95.7,
      "MetaObjetivo": 95,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "PRD-IND-001",
      "AreaResponsable": "PRD-IND-",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "NumValor": 962,
      "DenValor": 1000,
      "ResultadoObtenido": 96.2,
      "MetaObjetivo": 95,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "QUA-IND-001",
      "AreaResponsable": "QUA-IND-",
      "PeriodoYM": "2026-07",
      "PeriodoLabel": "julio 2026",
      "NumValor": 926,
      "DenValor": 1000,
      "ResultadoObtenido": 92.6,
      "MetaObjetivo": 95,
      "Cumple": false,
      "AnalisisInterpretacion": "Variación recurrente del proceso. Estandarizar los puntos de inspección y volver a capacitar a los operadores.",
      "Status": "FINAL",
      "Evidencias": [
        {
          "Figura": 1,
          "FileName": "registro-ficticio-inspeccion.svg",
          "DataUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMjQwIj48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjI0IiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGIyYTRhIj5SZWdpc3RybyBmaWN0aWNpbyBkZSBpbnNwZWNjacOzbjwvdGV4dD48dGV4dCB4PSIyNCIgeT0iMTA0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPlNlcHRpZW1icmUgMjAyNjogOTM4IC8gMSwwMDAgdW5pZGFkZXMgY29uZm9ybWVzPC90ZXh0Pjx0ZXh0IHg9IjI0IiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCI+RXNjZW5hcmlvIGRlIHZlcmlmaWNhY2nDs246IDk1NCAvIDEsMDAwIHVuaWRhZGVzIGNvbmZvcm1lczwvdGV4dD48dGV4dCB4PSIyNCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkV2aWRlbmNpYSBkZSBwb3J0YWZvbGlvIC0gZGF0b3MgZmljdGljaW9zPC90ZXh0Pjwvc3ZnPg=="
        }
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "QUA-IND-001",
      "AreaResponsable": "QUA-IND-",
      "PeriodoYM": "2026-08",
      "PeriodoLabel": "agosto 2026",
      "NumValor": 933,
      "DenValor": 1000,
      "ResultadoObtenido": 93.3,
      "MetaObjetivo": 95,
      "Cumple": false,
      "AnalisisInterpretacion": "Variación recurrente del proceso. Estandarizar los puntos de inspección y volver a capacitar a los operadores.",
      "Status": "FINAL",
      "Evidencias": [
        {
          "Figura": 1,
          "FileName": "registro-ficticio-inspeccion.svg",
          "DataUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMjQwIj48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjI0IiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGIyYTRhIj5SZWdpc3RybyBmaWN0aWNpbyBkZSBpbnNwZWNjacOzbjwvdGV4dD48dGV4dCB4PSIyNCIgeT0iMTA0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPlNlcHRpZW1icmUgMjAyNjogOTM4IC8gMSwwMDAgdW5pZGFkZXMgY29uZm9ybWVzPC90ZXh0Pjx0ZXh0IHg9IjI0IiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCI+RXNjZW5hcmlvIGRlIHZlcmlmaWNhY2nDs246IDk1NCAvIDEsMDAwIHVuaWRhZGVzIGNvbmZvcm1lczwvdGV4dD48dGV4dCB4PSIyNCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkV2aWRlbmNpYSBkZSBwb3J0YWZvbGlvIC0gZGF0b3MgZmljdGljaW9zPC90ZXh0Pjwvc3ZnPg=="
        }
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "QUA-IND-001",
      "AreaResponsable": "QUA-IND-",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "NumValor": 938,
      "DenValor": 1000,
      "ResultadoObtenido": 93.8,
      "MetaObjetivo": 95,
      "Cumple": false,
      "AnalisisInterpretacion": "Variación recurrente del proceso. Estandarizar los puntos de inspección y volver a capacitar a los operadores.",
      "Status": "FINAL",
      "Evidencias": [
        {
          "Figura": 1,
          "FileName": "registro-ficticio-inspeccion.svg",
          "DataUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMjQwIj48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjI0IiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGIyYTRhIj5SZWdpc3RybyBmaWN0aWNpbyBkZSBpbnNwZWNjacOzbjwvdGV4dD48dGV4dCB4PSIyNCIgeT0iMTA0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPlNlcHRpZW1icmUgMjAyNjogOTM4IC8gMSwwMDAgdW5pZGFkZXMgY29uZm9ybWVzPC90ZXh0Pjx0ZXh0IHg9IjI0IiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCI+RXNjZW5hcmlvIGRlIHZlcmlmaWNhY2nDs246IDk1NCAvIDEsMDAwIHVuaWRhZGVzIGNvbmZvcm1lczwvdGV4dD48dGV4dCB4PSIyNCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkV2aWRlbmNpYSBkZSBwb3J0YWZvbGlvIC0gZGF0b3MgZmljdGljaW9zPC90ZXh0Pjwvc3ZnPg=="
        }
      ],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "MNT-IND-001",
      "AreaResponsable": "MNT-IND-",
      "PeriodoYM": "2026-07",
      "PeriodoLabel": "julio 2026",
      "NumValor": 913,
      "DenValor": 1000,
      "ResultadoObtenido": 91.3,
      "MetaObjetivo": 90,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "MNT-IND-001",
      "AreaResponsable": "MNT-IND-",
      "PeriodoYM": "2026-08",
      "PeriodoLabel": "agosto 2026",
      "NumValor": 920,
      "DenValor": 1000,
      "ResultadoObtenido": 92.0,
      "MetaObjetivo": 90,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "MNT-IND-001",
      "AreaResponsable": "MNT-IND-",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "NumValor": 925,
      "DenValor": 1000,
      "ResultadoObtenido": 92.5,
      "MetaObjetivo": 90,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "WHR-IND-001",
      "AreaResponsable": "WHR-IND-",
      "PeriodoYM": "2026-07",
      "PeriodoLabel": "julio 2026",
      "NumValor": 974,
      "DenValor": 1000,
      "ResultadoObtenido": 97.4,
      "MetaObjetivo": 98,
      "Cumple": false,
      "AnalisisInterpretacion": "Retrasos en la programación de despachos y en la entrega de pedidos preparados. Implementar una lista diaria de verificación de despachos.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "WHR-IND-001",
      "AreaResponsable": "WHR-IND-",
      "PeriodoYM": "2026-08",
      "PeriodoLabel": "agosto 2026",
      "NumValor": 981,
      "DenValor": 1000,
      "ResultadoObtenido": 98.1,
      "MetaObjetivo": 98,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "WHR-IND-001",
      "AreaResponsable": "WHR-IND-",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "NumValor": 986,
      "DenValor": 1000,
      "ResultadoObtenido": 98.6,
      "MetaObjetivo": 98,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "LOG-IND-001",
      "AreaResponsable": "LOG-IND-",
      "PeriodoYM": "2026-07",
      "PeriodoLabel": "julio 2026",
      "NumValor": 909,
      "DenValor": 1000,
      "ResultadoObtenido": 90.9,
      "MetaObjetivo": 95,
      "Cumple": false,
      "AnalisisInterpretacion": "Retrasos en la programación de despachos y en la entrega de pedidos preparados. Implementar una lista diaria de verificación de despachos.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "LOG-IND-001",
      "AreaResponsable": "LOG-IND-",
      "PeriodoYM": "2026-08",
      "PeriodoLabel": "agosto 2026",
      "NumValor": 916,
      "DenValor": 1000,
      "ResultadoObtenido": 91.6,
      "MetaObjetivo": 95,
      "Cumple": false,
      "AnalisisInterpretacion": "Retrasos en la programación de despachos y en la entrega de pedidos preparados. Implementar una lista diaria de verificación de despachos.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "LOG-IND-001",
      "AreaResponsable": "LOG-IND-",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "NumValor": 921,
      "DenValor": 1000,
      "ResultadoObtenido": 92.1,
      "MetaObjetivo": 95,
      "Cumple": false,
      "AnalisisInterpretacion": "Retrasos en la programación de despachos y en la entrega de pedidos preparados. Implementar una lista diaria de verificación de despachos.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "PRC-IND-001",
      "AreaResponsable": "PRC-IND-",
      "PeriodoYM": "2026-07",
      "PeriodoLabel": "julio 2026",
      "NumValor": 905,
      "DenValor": 1000,
      "ResultadoObtenido": 90.5,
      "MetaObjetivo": 90,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "PRC-IND-001",
      "AreaResponsable": "PRC-IND-",
      "PeriodoYM": "2026-08",
      "PeriodoLabel": "agosto 2026",
      "NumValor": 912,
      "DenValor": 1000,
      "ResultadoObtenido": 91.2,
      "MetaObjetivo": 90,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "PRC-IND-001",
      "AreaResponsable": "PRC-IND-",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "NumValor": 917,
      "DenValor": 1000,
      "ResultadoObtenido": 91.7,
      "MetaObjetivo": 90,
      "Cumple": true,
      "AnalisisInterpretacion": "Meta alcanzada. Continuar el seguimiento habitual.",
      "Status": "FINAL",
      "Evidencias": [],
      "UpdatedAt": "2026-09-30T16:00:00Z"
    }
  ],
  "PROP": [
    {
      "CodigoIndicador": "QUA-IND-001",
      "PeriodoYM": "2026-09",
      "Index": 1,
      "Accion": "Estandarizar los puntos de inspección y volver a capacitar a los operadores",
      "Responsable": "Supervisor de Calidad",
      "FechaCompromiso": "2026-10-15",
      "RootCause": "Variación recurrente del proceso",
      "Status": "En proceso",
      "EvidenciaDesc": "Registro ficticio de inspección",
      "EvidenciaLink": "",
      "UpdatedAt": "2026-09-30T16:00:00Z"
    },
    {
      "CodigoIndicador": "LOG-IND-001",
      "PeriodoYM": "2026-09",
      "Index": 1,
      "Accion": "Implementar una lista diaria de verificación de despachos y revisar la entrega de pedidos preparados",
      "Responsable": "Supervisor de Logística",
      "FechaCompromiso": "2026-10-20",
      "RootCause": "Retrasos en la programación de despachos y en la entrega de pedidos preparados",
      "Status": "En proceso",
      "UpdatedAt": "2026-09-30T16:00:00Z"
    }
  ],
  "DOCS": [
    {
      "Key": "DOC-QUA-001",
      "CodigoIndicador": "QUA-IND-001",
      "AreaResponsable": "QUA-IND-",
      "PeriodoYM": "2026-09",
      "TipoDocumento": "Otro",
      "DocName": "Registro ficticio de inspección",
      "Notas": "Evidencia local ficticia. El seguimiento de octubre es un escenario de cierre simulado, no un resultado mensual actual.",
      "WordUrl": "assets/inspection-register.html",
      "PdfUrl": "",
      "UpdatedAt": "2026-09-30T16:00:00Z"
    }
  ],
  "SEG": [
    {
      "Key": "SEG|QUA-IND-001|2026-09",
      "CodigoIndicador": "QUA-IND-001",
      "PeriodoYM": "2026-09",
      "PeriodoLabel": "septiembre 2026",
      "VerificadorAcciones": "Gerente de Calidad",
      "Items": [
        {
          "Fecha": "2026-10-14",
          "Resultado": "95.4",
          "CierreEfectiva": "Sí",
          "EvidenciaSi": "Verificación ficticia de inspección: 954 / 1,000 unidades conformes",
          "EvidenciaNo": ""
        }
      ],
      "UpdatedAt": "2026-10-14T16:00:00Z"
    }
  ]
};
