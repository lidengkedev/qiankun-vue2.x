import defaultSettings from '@/settings'

const title = defaultSettings.title || '研发项目'

export default function getPageTitle(key) {
  const hasKey = `route.${key}`
  if (hasKey) {
    const pageName = `${key}`
    return `${pageName} - ${title}`
  }
  return `${title}`
}
