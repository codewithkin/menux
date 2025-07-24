import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { ShoppingBasket } from "lucide-react"

function EmptyCart() {
    return (
        <article className="flex flex-col items-center justify-center gap-4 text-center w-full h-full">
            <ShoppingBasket className="text-gray-400" size={96} strokeWidth={1.5} />

            <article className="flex flex-col">
                <h2 className="text-xl font-semibold">Your cart is empty</h2>
                <p className="text-gray-600">Looks like you haven't made an order yet</p>
                <SheetClose asChild>
                    <Button className="mt-2" variant="secondary">
                        Close Cart
                    </Button>
                </SheetClose>
            </article>
        </article>
    )
}

export default EmptyCart
