---
title: "AgenTurn"
description: "Un SaaS para locales que manejen turnos, usa un bot WhatsApp y un Web de monitoreo"
image: "../../assets/agenTurn.png"
tags:
  [
    "TypeScript",
    "Node.js",
    "Express",
    "Next.js",
    "React",
    "Drizzle ORM",
    "NeonDB",
    "NextAuth",
    "Recharts",
    "PWA",
    "WhatsApp API",
    "Sentry",
    "Vitest",
  ]
link: "https://agen-turn-dashboard.vercel.app"
repo: "https://github.com/TFango/agenTurn"
---

## Nacimiento

agenTurn nació en base a un problema con los locales que manejan turnos manualmente, coordinando citas por WhatsApp uno por uno. El objetivo del SaaS es automatizar todo ese proceso: un bot de WhatsApp (usando la API de Meta) que guía al cliente paso a paso para agendar su turno, sin que nadie del local tenga que estar respondiendo mensajes todo el día.

El dueño del local cuenta con un dashboard web (pensado para poder instalarse como app) donde gestiona empleados, puestos de trabajo, horarios, días bloqueados, y ve métricas de turnos por día, mes y servicio, además de recibir notificaciones.

## Desafíos

El mayor desafío fue diseñar la conversación del bot: manejar el estado de cada charla (en qué paso del agendamiento está cada cliente) sin que se rompa si el usuario responde algo inesperado. Armé el proyecto como un monorepo con tres partes (bot, dashboard, y una capa de base de datos compartida con Drizzle + NeonDB), para no duplicar lógica entre el bot y el panel web. También sumé autenticación, notificaciones push, y monitoreo de errores para tener visibilidad de qué pasaba en producción.


## Evolución

El proyecto está técnicamente terminado y funcional, pero quedó en pausa por un cambio en las reglas de Meta: anunciaron que cobrarían por cada mensaje enviado por el bot, sin la ventana gratuita de 24 horas que existía antes. Eso rompió el modelo de costos original (pensado para ser gratuito o muy barato para el local). El proyecto sigue siendo viable, pero necesita replantear el pricing, por ejemplo, una suscripción mensual del local que absorba ese costo por mensaje.
