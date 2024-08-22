
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { GeneratedImage } from "@/app/page"

type Props = {
  image: GeneratedImage;
  userPrompt: string;
  reset: () => void;
  onSubmit: () => void;
};

export function FinalComponent({ image, userPrompt, reset, onSubmit }: Props) {

  const handleSubmit = () => {
    onSubmit();
  };
  return (
    <div className="flex flex-col min-h-screen p-4 md:flex-row md:p-10">
      <div className="flex items-center justify-between w-full md:hidden">
        <MenuIcon className="w-6 h-6" />
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/3">
        <div className="p-4 border-4 border-pink-200">
          <img src={image.generatedImage} alt="T-shirt" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex flex-col w-full p-4 md:w-2/3">
        <div className="flex items-center justify-end hidden md:flex">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="mt-4 text-2xl font-bold md:mt-0">{userPrompt}</h1>
        <div className="flex items-center mt-4 space-x-2">
          <RadioGroup defaultValue="27" className="flex space-x-2">
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="27" id="size-27" />
              <Label htmlFor="size-27">27</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="28" id="size-28" />
              <Label htmlFor="size-28">28</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="30" id="size-30" />
              <Label htmlFor="size-30">30</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="32" id="size-32" />
              <Label htmlFor="size-32">32</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="34" id="size-34" />
              <Label htmlFor="size-34">34</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="36" id="size-36" />
              <Label htmlFor="size-36">36</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">DESCRIPTION</h2>
          <p>1. Ensures comfort and flexibility for all-day wear.</p>
          <p>2. Crew Neck Design: Timeless style suitable for any occasion.</p>
          <p>3. Dress Up or Down: Easily transitions from casual to semi-formal with the right styling.</p>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">Styling Ideas:</h2>
          <p>- Pair with jeans and sneakers for a relaxed weekend look.</p>
          <p>- Tuck into a high-waisted skirt and add accessories for a chic daytime ensemble.</p>
          <p>- Layer under a blazer with trousers for a polished office look.</p>
        </div>
        <Button
          variant="secondary"
          className="mt-4 flex items-center justify-center space-x-2 bg-pink-200 text-pink-700"
          onClick={handleSubmit}
        >
          <CameraIcon className="w-6 h-6" />
          <span>Try our new AR feature...</span>
        </Button>
        <Button className="bg-gray-300 px-6 py-2 rounded-md" onClick={reset}>
          Reset Prompt
        </Button>
      </div>
    </div>
  )
}

function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
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
