import SearchCard from "@/components/func/SearchCard"
import Tabs from "@/components/func/Tabs"

function Home() {
  return (
    <section className="w-full mt-8 h-full flex flex-col items-center justify-center p-4 md:px-12 lg:px-20 gap-4">
      <SearchCard />
      <Tabs />
    </section>
  )
}

export default Home
