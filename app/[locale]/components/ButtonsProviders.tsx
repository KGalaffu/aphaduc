
import {signIn} from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github, Mail} from 'lucide-react';
export default function ButtonsProviders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={() => signIn('mail')} className="flex items-center gap-2">
          <Mail/>
          <span>Continuer avec Google</span>
        </Button>
      </div>
    </>
  );
}