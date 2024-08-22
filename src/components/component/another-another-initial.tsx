import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { useState } from "react";


type Props = {
  onSubmit: (text: string) => void;
};

export function AnotherAnotherInitial({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FDF1DB] to-[#E00543] flex flex-col items-center justify-center px-4 py-12 md:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-white">Dress Your Dreams</h1>
          <p className="text-white/80 text-lg">Generate a one-of-a-kind dress with AI</p>
        </div>
        <div className="relative">
          <Textarea
            placeholder="Describe your dream dress..."
            className="w-full rounded-2xl bg-white p-6 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00a8e8] focus:ring-offset-2"
            rows={4}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button className="bg-[#00a8e8] text-white hover:bg-[#0077b6]"
          onClick={handleSubmit}>Generate My Dress</Button>
        </div>
        {/* <div className="grid grid-cols-3 gap-4 text-white/80">
          <Button variant="ghost" className="flex items-center justify-center gap-2 hover:bg-white/10">
            <FigmaIcon className="w-6 h-6" />
            Formal
          </Button>
          <Button variant="ghost" className="flex items-center justify-center gap-2 hover:bg-white/10">
            <PlayIcon className="w-6 h-6" />
            Casual
          </Button>
          <Button variant="ghost" className="flex items-center justify-center gap-2 hover:bg-white/10">
            <WineIcon className="w-6 h-6" />
            Vintage
          </Button>
        </div> */}
      </div>
    </div>
  )
}

function FigmaIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}


function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function WineIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
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
