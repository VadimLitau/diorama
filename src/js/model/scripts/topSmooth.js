// Плавная прокрутка
export function topSmooth(top = 0, left = 0, behavior = "smooth") {
   window.scrollTo({ top: top, left: left, behavior: behavior });
}
