import { LogOut, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Header = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-end py-3 px-6 gap-4">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Avatar>
                  <AvatarImage
                    src={
                      user.imageUrl ||
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Rutvik"
                    }
                    alt="User"
                  />
                  <AvatarFallback>{`${user.firstName?.[0] ?? ""} ${user.lastName?.[0] ?? ""}`}</AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-semibold leading-none">
                    {`${user.firstName ?? ""} ${user.lastName ?? ""}`}
                  </span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="p-2">
                <p className="text-sm font-medium">
                  {`${user.firstName ?? ""} ${user.lastName ?? ""}`}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user.emailAddresses[0].emailAddress}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" flex gap-2">
                <User />
                <span>Profile & Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive flex gap-2">
                <LogOut />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
