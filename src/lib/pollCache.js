export const POLL_CACHE_STORAGE_KEY = 'pollix_cached_polls'
const LEGACY_POLL_CACHE_STORAGE_KEYS = ['onvote_cached_polls']

function getDefaultStorage() {
  const storage = globalThis?.localStorage
  if (!storage) {
    return null
  }

  try {
    const testKey = '__pollix_storage_test__'
    storage.setItem(testKey, '1')
    storage.removeItem(testKey)
    return storage
  } catch {
    return null
  }
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

export function readCachedPolls(storage = getDefaultStorage()) {
  if (!storage) {
    return []
  }

  const cachedValues = [
    storage.getItem(POLL_CACHE_STORAGE_KEY),
    ...LEGACY_POLL_CACHE_STORAGE_KEYS.map((key) => storage.getItem(key)),
  ]

  for (const cached of cachedValues) {
    if (!cached) {
      continue
    }

    const parsed = safeJsonParse(cached)
    if (Array.isArray(parsed)) {
      return parsed
    }

    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.polls)) {
      return parsed.polls
    }
  }

  return []
}

export function writeCachedPolls(polls, storage = getDefaultStorage()) {
  if (!storage) {
    return
  }

  try {
    if (!Array.isArray(polls) || polls.length === 0) {
      storage.removeItem(POLL_CACHE_STORAGE_KEY)
      return
    }

    storage.setItem(
      POLL_CACHE_STORAGE_KEY,
      JSON.stringify({ polls, cachedAt: Date.now() }),
    )
  } catch {
    // Cache writes are best effort only.
  }
}

export function removeCachedPoll(pollId, storage = getDefaultStorage()) {
  const remainingPolls = readCachedPolls(storage).filter((poll) => poll.id !== pollId)
  writeCachedPolls(remainingPolls, storage)
}
