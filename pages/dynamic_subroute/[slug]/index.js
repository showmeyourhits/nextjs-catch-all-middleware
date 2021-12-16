import Link from 'next/link'
import { useRouter } from 'next/router'

const DynamicSubrouteSlug = () => {
  const router = useRouter()
  const slug = router.query.slug

  return (
    <>
      <p><Link href={"/"}>Back to main</Link></p>
      <h1>Dynamic subroute slug: {slug}</h1>
      <p>
        Look at the server console. Middleware is working
      </p>
    </>
  )
}

export default DynamicSubrouteSlug
