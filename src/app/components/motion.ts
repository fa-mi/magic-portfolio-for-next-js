// One motion language for the whole site: slow, soft and small. A long
// ease-out (close to easeOutExpo) reads as calm and premium; pair it with
// short travel distances and, for reveals, a slight blur-to-sharp.
export const EASE_LUXE = [0.16, 1, 0.3, 1] as const;
export const EASE_LUXE_CSS = 'cubic-bezier(0.16, 1, 0.3, 1)';
