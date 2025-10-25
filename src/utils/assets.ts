/**
 * Résout un chemin d'asset en ajoutant automatiquement la base URL configurée dans Vite
 * Utile pour GitHub Pages où la base peut être "/site/" au lieu de "/"
 * 
 * @param path - Chemin de l'asset (ex: "/projects/image.png")
 * @returns Chemin complet avec base URL (ex: "/site/projects/image.png")
 * 
 * @example
 * ```tsx
 * <img src={resolveAssetPath("/projects/image.png")} alt="..." />
 * // Devient: <img src="/site/projects/image.png" alt="..." />
 * ```
 */
export function resolveAssetPath(path: string): string {
	// Retire le slash initial si présent pour éviter les doubles slashes
	const cleanPath = path.startsWith("/") ? path.slice(1) : path;
	
	// import.meta.env.BASE_URL contient la valeur de "base" dans vite.config.ts
	const baseUrl = import.meta.env.BASE_URL;
	
	// S'assure que baseUrl se termine par un slash
	const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
	
	return `${normalizedBase}${cleanPath}`;
}
