import { Tabs as TabsProvider, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Tabs() {
    return (
        <TabsProvider defaultValue="account" className="w-[400px]">
            <TabsList className="rounded-full bg-gray-100 flex gap-4">
                <TabsTrigger className="text-slate-800" value="popular">Popular</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="near_me">Near me</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="fast_delivery">Fast Delivery</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="open">Open</TabsTrigger>
                <TabsTrigger className="text-slate-800" value="fast_food">Fast Food</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </TabsProvider>
    )
}

export default Tabs
