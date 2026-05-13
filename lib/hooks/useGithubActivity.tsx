import { useEffect, useState } from 'react'

const githubProfile = process.env.GITHUB_PROFILE || 'EmanuelFuneS'

export interface Activity {
  avatar: string
  repo: string
  url: string
  date: string
  branch: string
}

interface GithubResponse {
  actor: {
    avatar_url: string
    display_login: string
    gravatar_id: string
    id: number
    login: string
    url: string
  }
  created_at: string
  id: string
  payload: {
    before: string
    head: string
    push_id: number
    ref: string
    repository_id: number
  }
  public: true
  repo: {
    id: number
    name: string
    url: string
  }
  type: string
}

const useGithubActivity = (): {
  activity: Activity[]
  isLoading: boolean
} => {
  const [activity, setActivity] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubProfile}/events/public`)
      .then(r => r.json())
      .then(events => {
        console.log(events)
        const data = events
          .filter((e: GithubResponse) => e.type === 'PushEvent')
          .map((e: GithubResponse) => ({
            avatar: e.actor.avatar_url,
            repo: e.repo.name.replace('EmanuelFuneS/', ''),
            branch: e.payload.ref.replace('refs/heads/', ''),
            url: e.repo.url,
            date: new Date(e.created_at).toLocaleDateString(),
          }))
          .slice(0, 3)
        setActivity(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    activity,
    isLoading,
  }
}

export default useGithubActivity
