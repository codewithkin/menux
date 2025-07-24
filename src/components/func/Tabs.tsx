import { Tabs as TabsProvider, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantCard from "../pieces/RestaurantCard";

export type Restaurant = {
    id: string,
    name: string,
    food: string, // e.g "Fast Food", "Chinese food", "Indian food",
    description: string,
    image: string, // URL to the restaurant image
    rating: number, // e.g 4.5
}

function Tabs() {
    // Create a dummy list of restaurants
    const restaurants: Restaurant[] = [
        {
            id: "1",
            name: "Pizza Place",
            food: "Fast Food",
            description: "Best pizza in town",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
            rating: 4.5
        },
        {
            id: "2",
            name: "Sushi Spot",
            food: "Japanese",
            description: "Fresh sushi and sashimi",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
            rating: 4.7
        },
        {
            id: "3",
            name: "Burger Joint",
            food: "Fast Food",
            description: "Juicy burgers and fries",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            rating: 4.3
        }
    ]

    return (
        <TabsProvider defaultValue="all" className="w-[400px]">
            <TabsList className="rounded-full bg-gray-100 flex gap-4">
                <TabsTrigger className="text-slate-800" value="all">All Restaurants</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="popular">Popular</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="near_me">Near me</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="fast_delivery">Fast Delivery</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="open">Open</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="fast_food">Fast Food</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {restaurants.map((restaurant: Restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </TabsProvider>
    )
}

export default Tabs
