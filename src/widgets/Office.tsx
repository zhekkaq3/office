import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/shared/ui/resizable"
import Header from "./Header"
import { Sidebar } from "./Sidebar"
import { useState } from "react"
import { LoginForm } from "./SignIn"

function Office() {

  const [s,setS] = useState<number>(0)

  return (
    <main className="h-screen">
      <Header />
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] w-screen max-w-screen-2xl mx-auto pt-14 relative"
      >
        <ResizablePanel defaultSize={18} maxSize={19} minSize={5} onResize={(size:number)=>setS(size)}>        
           <Sidebar size={s}/>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={82}>
          <div className="flex h-full items-center justify-center p-6">
            <LoginForm />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>

  )
}

export default Office