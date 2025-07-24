import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'
import { Button } from '../../ui/button'
import { ShoppingBag } from 'lucide-react'
import EmptyCart from '../cart/EmptyCart'

function Cart() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='bg-sky-400 hover:bg-sky-600 transition-colors duration-300'>
                    <ShoppingBag />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <article className="p-4">
                    <EmptyCart />
                </article>
            </SheetContent>
        </Sheet>
    )
}

export default Cart
