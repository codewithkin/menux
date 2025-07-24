"use client";
import { Brush, Loader2, Search, Trash, UtensilsCrossed } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Restaurant } from "./Tabs";

function SearchCard() {
    const bgImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D";

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState<null | any[]>(null);

    const { mutate: search, isPending: searching } = useMutation({
        mutationFn: async () => {
            const response = await axios.get(`/api/restaurants/search?query=${query}`);
            return response.data;
        },
        onSuccess: (data) => {
            console.log("Search results:", data);
            setSearchResults(data);
        },
        onError: (error) => {
            toast.error("An error occurred while searching. Please try again.");
            console.error("Search error:", error);
        }
    });

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
                <article className="flex flex-col gap-2 w-full">
                    <article className="w-full flex items-center justify-center gap-2 relative">
                        <Input
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                            type="search"
                            placeholder="Discover restaurants, cafes, and more..."
                            className="w-full bg-white text-black placeholder:text-gray-500 py-6 md:max-w-[600px] pl-4"
                        />
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        type="button"
                                        disabled={searching || query.length < 1}
                                        onClick={() => {
                                            search();
                                        }}
                                        className="py-6 bg-orange-500 hover:bg-orange-700 transition-colors duration-300"
                                        size="lg"
                                    >
                                        {
                                            searching ? (
                                                <Loader2 className="animate-spin" />
                                            ) : (
                                                <Search size={24} />
                                            )
                                        }
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Search</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </article>

                    {/* Show search results */}
                    {
                        searchResults && (
                            <article className="w-full bg-white shadow-xl rounded-xl">
                                {searching ? (
                                    <p className="text-center text-gray-500 py-4">Searching...</p>
                                ) : searchResults.length > 0 ? (
                                    <ul className="max-h-60 overflow-y-auto">
                                        {searchResults.map((restaurant: Restaurant) => (
                                            <li key={restaurant.id} className="p-4 border-b hover:bg-gray-100">
                                                <h3 className="font-semibold">{restaurant.name}</h3>
                                                <p className="text-gray-600">{restaurant.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <article className="flex flex-col items-center py-4 gap-2">
                                        <UtensilsCrossed className="text-gray-400" strokeWidth={1.5} size={56} />
                                        <p className="text-center text-gray-500 font-semibold">No restaurants found</p>
                                        <Button
                                            variant="outline"
                                            className="mt-2"
                                            onClick={() => {
                                                setSearchResults(null);
                                                setQuery("");
                                            }}
                                        >
                                            <Trash />
                                            Clear
                                        </Button>
                                    </article>
                                )}
                            </article>
                        )
                    }
                </article>
            </article>
        </section>
    )
}

export default SearchCard
