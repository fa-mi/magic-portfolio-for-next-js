const baseURL = 'nextjs-portfolio.up.railway.app'

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    false,
    '/blog':    false,
    '/gallery': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    // '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    gradient: true,
    dots:     false,
    lines:    false,
}

const style = {
    theme:       'light',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'cyan',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'cyan',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'color',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: true,
        dots:     false,
        lines:    true,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };