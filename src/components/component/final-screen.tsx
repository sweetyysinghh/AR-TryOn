import { Button } from "@/components/ui/button"
import { GeneratedImage } from "@/app/page"

type Props = {
  image: GeneratedImage;
  userPrompt: string;
  reset: () => void;
  onSubmit: () => void;
};

export function FinalScreen({ image, userPrompt, reset, onSubmit }: Props) {
  const handleSubmit = () => {
    onSubmit();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#4A249D] to-[#22EAAA]">
      <div className="w-full max-w-md">
        <img src={image.generatedImage} alt="Volcano" className="mx-auto" />
      </div>
      <Button className="mt-4 bg-[#FF6B6B] text-[#FFF5F5] px-4 py-2 rounded-md shadow-md transition-transform hover:scale-110">
        <div className="animate-pulse" onClick={handleSubmit}>Try it On!</div>
      </Button>
      <div className="w-full text-[#F8F8F8] text-center py-8 mt-8 ">
        <h2 className="text-2xl font-bold">Behold! Your Dream Dress Awaits</h2>
        <p className="text-sm mt-2">{userPrompt}</p>
        <Button variant="ghost" className="mt-4 bg-[#BDBDBD] text-[#333333]" onClick={reset}>
          Reset Prompt
        </Button>
      </div>
    </div>
  )
}
