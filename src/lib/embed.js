// Transforma o link de um post no endereço do player embutido da rede social.
// Aceita o link do jeito que vem ao copiar (com ?utm_source=... e afins).

const PLATAFORMAS = [
  {
    nome: 'Instagram',
    // instagram.com/reel/ID, /p/ID ou /tv/ID
    regex: /instagram\.com\/(?:[\w.]+\/)?(?:reel|reels|p|tv)\/([\w-]+)/,
    embed: (id) => `https://www.instagram.com/p/${id}/embed/`,
    proporcao: 'vertical',
  },
  {
    nome: 'TikTok',
    // tiktok.com/@usuario/video/ID
    regex: /tiktok\.com\/@[\w.]+\/video\/(\d+)/,
    embed: (id) => `https://www.tiktok.com/embed/v2/${id}`,
    proporcao: 'vertical',
  },
  {
    nome: 'YouTube',
    // youtube.com/watch?v=ID, youtu.be/ID ou youtube.com/shorts/ID
    regex: /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/,
    embed: (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
    proporcao: 'horizontal',
  },
]

export function getEmbed(url) {
  for (const plataforma of PLATAFORMAS) {
    const match = url.match(plataforma.regex)
    if (match) {
      return { plataforma: plataforma.nome, src: plataforma.embed(match[1]), proporcao: plataforma.proporcao }
    }
  }
  return null
}
