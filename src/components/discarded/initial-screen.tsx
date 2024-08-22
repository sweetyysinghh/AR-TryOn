
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { useState } from "react";

type Props = {
  onSubmit: (text: string) => void;
};

export function InitialScreen({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4">
      <header className="flex items-center justify-between w-full h-16 px-4 border-b">
        <MenuIcon className="w-6 h-6" />
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </header>
      <main className="flex flex-col items-center w-full mt-8">
        <h1 className="text-2xl font-bold text-center">Enter your prompt to generate your OWN FASHION</h1>
        <div className="relative flex items-center justify-center w-full max-w-4xl mt-8">
          <img src="/placeholder.svg" alt="Fashion Illustration" className="w-full h-auto" width={800} height={400} />
          <div className="absolute flex items-center justify-center w-3/4 p-4 bg-pink-200 rounded-lg top-1/2 transform -translate-y-1/2">
            <Input
              type="text"
              placeholder="Type your prompt..."
              className="w-full p-2 text-lg bg-transparent border-none outline-none"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button 
            className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
        <p className="mt-4 text-lg text-center text-muted-foreground">Generate your creative Ideas</p>
      </main>
    </div>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
