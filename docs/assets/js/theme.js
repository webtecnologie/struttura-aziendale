(function () {
    const STORAGE_KEY = 'wt-theme';
    const html = document.documentElement;

    const getTheme = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (theme) => {
        html.classList.remove('theme-light', 'theme-dark');
        html.classList.add(`theme-${theme}`);
        localStorage.setItem(STORAGE_KEY, theme);
    };

    // Initial apply
    applyTheme(getTheme());

    window.WT_THEME = {
        toggle: () => {
            const current = html.classList.contains('theme-dark') ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        },
        getCurrent: () => (html.classList.contains('theme-dark') ? 'dark' : 'light')
    };
})();
