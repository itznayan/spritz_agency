export function scrollToId(id: string, navbarOffset: number = 0) {
  const el = document.getElementById(id);
  if (!el) return;

  let y = 0;
  let element: HTMLElement | null = el;

  while (element) {
    y += element.offsetTop;
    element = element.offsetParent as HTMLElement | null;
  }

  y -= navbarOffset; // Subtract navbar height if provided

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
