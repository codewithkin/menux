import { Star } from "lucide-react"
import { Restaurant } from "../func/Tabs"
import { Badge } from "../ui/badge"

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-32 object-cover rounded-md mb-2" />
            <article className="flex itens-center justify-between w-full">
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <Badge className="bg-sky-400 text-xs font-bold flex items-center mt-1">
                    <Star size={4} className="fill-white" />
                    {restaurant.rating}
                </Badge>
            </article>
            <p className="text-sm text-gray-600">{restaurant.food}</p>
        </div>
    )
}

export default RestaurantCard
