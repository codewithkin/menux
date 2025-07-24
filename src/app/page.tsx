import SearchCard from "@/components/func/SearchCard"
import Tabs from "@/components/func/Tabs"
import Topbar from "@/components/shared/Topbar"

function Home() {
  return (
    <section className="w-fullh-full flex flex-col items-center justify-center p-4 md:px-12 lg:px-20 gap-4">
      <Topbar />
      <SearchCard />
      <Tabs />
    </section>
  )
}

export default Home
