import Link from 'next/link'
import { useRouter } from 'next/router'

const CatchAllSubroute = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <p><Link href={"/"}>Back to main</Link></p>
      <h1>Catch-all subroute slug: {slug.join('/')}</h1>
      <p>
        Route works without middleware. Try to switch to "added_catch_all_middleware" and see what happens
        <pre>
          git checkout added_catch_all_middleware
        </pre>
      </p>
    </>
  )
}

export default CatchAllSubroute
