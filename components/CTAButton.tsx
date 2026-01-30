import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTAButton = () => {
  return (
    <SignedOut>
      <SignUpButton
        mode="redirect"
        signInFallbackRedirectUrl={"/dashboard"}
        fallbackRedirectUrl={"/dashboard"}
      >
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold flex gap-2"
        >
          Analyze Resume Free
          <ArrowRight />
        </Button>
      </SignUpButton>
    </SignedOut>
  );
};

export default CTAButton;
