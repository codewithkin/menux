import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

function SearchCard() {
    const bgImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <section
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
            className="p-4 md:p-12 rounded-xl shadow-lg relative overflow-hidden"
        >
            {/* Overlay */}
            <article className="bg-black/65 z-10 w-full h-full absolute"></article>

            <article className="w-full z-20 relative flex flex-col justify-center items-center gap-4">
                <h2 className="text-white font-semibold text-3xl">Find a place to eat</h2>
                <article className="w-full flex items-center justify-center gap-2">
                    <Input
                        type="search"
                        placeholder="Discover restaurants, cafes, and more..."
                        className="w-full bg-white text-black placeholder:text-gray-500 py-6 md:max-w-[600px] pl-4"
                    />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    className="py-6 bg-orange-500 hover:bg-orange-700 transition-colors duration-300"
                                    size="lg"
                                >
                                    <Search size={24} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Search</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </article>
            </article>
        </section>
    )
}

export default SearchCard
