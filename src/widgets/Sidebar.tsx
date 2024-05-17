import { Button } from "@/shared/ui/button";
import { Blend, Home, Lock, Shield } from "lucide-react";

export function Sidebar({size}:{size : number}) {

    return (

        <div className="flex flex-col h-full pl-[30px]">
            <div className="flex-1 overflow-y-auto">
               
                <nav className="flex flex-col space-y-1 text-sm mt-4">
                   
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>
                        <Home className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">General</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Lock className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Security</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Shield className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Testing</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Blend className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Advanced</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Lock className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Security</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>
                        <Home className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">General</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Lock className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Security</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Shield className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Testing</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Blend className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Advanced</a> : ''}
                    </Button>
                    <Button variant="link" className={`flex ${size > 8 ? "justify-start" : "justify-center"} text-muted-foreground py-1 px-0 h-auto m-0 tracking-wide w-full`}>

                        <Lock className={`${size > 8 ? "w-4" : "w-6 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"}`}/>
                        {size > 8 ? <a href="#" className="ml-2">Security</a> : ''}
                    </Button>
                    

                </nav>
            </div>
        </div>

    );
}


