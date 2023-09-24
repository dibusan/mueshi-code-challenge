import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
    const stores = await prismadb.store.findMany();

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores} />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
}

export default Navbar;