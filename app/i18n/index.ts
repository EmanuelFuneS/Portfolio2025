const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default),
}

export const getDictionary = async (locale: string) => {
  return (
    dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.en()
  )
}

export const locales = ['en', 'es'] as const
export const defaultLocale = 'en' as const
