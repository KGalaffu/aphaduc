"use client"

export default function Footer() {
  return (
    <footer className="text-dark dark:text-white  py-16">
        <div className="container mx-auto flex justify-between items-start">
        <div>
            <p className="mb-2">Aphaduc</p>
            <p className="mb-2">Rue Jean-Dassier 7</p>
            <p>1201 Genève</p>
        </div>
        <div>
            <p className="mb-2">+41 78 254 64 66</p>
            <p className="mb-2">aphaduc.ch</p>
            <p>
            {/* <a href="#" className="underline hover:text-gray-400">
                Newsletter
            </a>{" "} */}
            |{" "}
            <a href="#" className="underline hover:text-gray-400">
                LinkedIn
            </a>
            </p>
        </div>
        <div>
            <a href="#" className="underline hover:text-gray-400">Revenir en haut</a>
        </div>
        </div>
    </footer>
  )
}