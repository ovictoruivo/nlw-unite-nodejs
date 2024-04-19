export function generateSlug(text: string): string {
  // Remove acentos utilizando a normalização Unicode
  const normalizeText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Subtitui espaços em branco e simbolos em hífens
  const slug = normalizeText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // -> remove caracteres diferentes de letras, números, espaços e letras
    .replace(/\s+/g, "-") // -> substitui espaços por hífens
    .replace(/^-+|-+$/g, ""); // -> remove hífens no início e no final do do slug

  return slug;
}
