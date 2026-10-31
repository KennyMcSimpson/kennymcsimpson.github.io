/* Restore only display preferences before the first paint. */
try {
  const theme=localStorage.getItem('kenny-theme');
  if(theme==='light'||theme==='dark')document.documentElement.dataset.theme=theme;
} catch { /* The site also works without browser storage. */ }
