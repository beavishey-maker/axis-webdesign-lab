export interface Work {
  id: string
  title: string
  client: string
  expertise: string[]
  thumbnail: string
  href: string
  year: number
}

export interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  thumbnail: string
  excerpt: string
  href: string
}

export interface NewsItem {
  id: string
  title: string
  date: string
  type: 'press' | 'event' | 'update'
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}
