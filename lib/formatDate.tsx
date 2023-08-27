interface Date {
  toLocaleDateString: () => string
}

export function formatDate (dateString: Date) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })
}
