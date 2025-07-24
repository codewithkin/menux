import { Tabs as TabsProvider, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantCard from "../pieces/RestaurantCard";

export type Restaurant = {
    id: string,
    name: string,
    food: string, // e.g "Fast Food", "Chinese food", "Indian food",
    description: string,
    image: string, // URL to the restaurant image
    rating: number, // e.g 4.5
    closingTime: string, // e.g "22:00"
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
            rating: 4.5,
            closingTime: "22:00",
        },
        {
            id: "2",
            name: "Sushi Spot",
            food: "Japanese",
            description: "Fresh sushi and sashimi",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
            rating: 4.7,
            closingTime: "12:00",
        },
        {
            id: "3",
            name: "Burger Joint",
            food: "Fast Food",
            description: "Juicy burgers and fries",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            rating: 4.3,
            closingTime: "19:00",
        }
    ]

    return (
        <TabsProvider defaultValue="all" className="w-full">
            <TabsList className="rounded-full bg-gray-100 flex gap-4">
                <TabsTrigger className="text-slate-800" value="all">All Restaurants</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="popular">Popular</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="open">Open</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="fast_food">Fast Food</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4">
                    {restaurants.map((restaurant: Restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="open">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4">
                    {restaurants.map((restaurant: Restaurant) => {
                        const currentTime = new Date();
                        const closingTime = new Date();
                        const [hours, minutes] = restaurant.closingTime.split(':').map(Number);
                        closingTime.setHours(hours, minutes, 0, 0);

                        if (currentTime < closingTime) {
                            return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        }

                        return null;
                    })}
                </div>
            </TabsContent>
            <TabsContent value="popular">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4">
                    {restaurants.map((restaurant: Restaurant) => {
                        if (restaurant.rating >= 4.5) {
                            return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        }

                        return null;
                    })}
                </div>
            </TabsContent>
            <TabsContent value="fast_food">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4">
                    {restaurants.map((restaurant: Restaurant) => {
                        if (restaurant.food.includes("Fast")) {
                            return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        }

                        return null;
                    })}
                </div>
            </TabsContent>
        </TabsProvider>
    )
}

export default Tabs
