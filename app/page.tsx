import {Poppins} from "next/font/google"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {LoginButton} from "@/components/auth/login-button";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export default function Home() {
  return (
      <main className="flex h-full flex-col items-center justify-center bg-sky-500">
        <div className="text-center">
            <h1 className={cn("text-6xl text-white font-semibold drop-shadow-md flex items-baseline justify-center", font.className)}>
                <Image src="images/lock.svg" alt="lock" width="60" height="60"/>
                <span>Auth</span>
            </h1>
            <p className="text-white text-lg my-4">A simple authentication service</p>
        </div>
          <LoginButton>
              <Button variant="secondary" size="lg">Sign in</Button>
          </LoginButton>
      </main>
  )
}
