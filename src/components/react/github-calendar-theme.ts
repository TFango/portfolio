/**
 * Colores del calendario de contribuciones de GitHub.
 * Cada array tiene 5 posiciones: [sin actividad, poca, media, alta, máxima].
 * Usan las variables CSS de global.css, así que se actualizan solos si
 * cambiás --color-accent o --color-text-muted ahí.
 */
export const githubCalendarTheme = {
  dark: [
    "rgba(var(--color-text-muted-rgb), 0.12)",
    "rgba(var(--color-accent-rgb), 0.25)",
    "rgba(var(--color-accent-rgb), 0.45)",
    "rgba(var(--color-accent-rgb), 0.7)",
    "rgba(var(--color-accent-rgb), 1)",
  ],
};
