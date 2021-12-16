import Link from 'next/link'
import { useRouter } from 'next/router'

const Main = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <h1><Link href={"/dynamic_subroute/slugslugslug"}>Go to dynamic subroute</Link></h1>
      <h1><Link href={"/catch_all/s/l/u/g/s/l/u/g/slug"}>Go to catch-all subroute</Link></h1>
    </>
  )
}

export default Main
