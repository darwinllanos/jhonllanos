import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Projectsnetwork } from "../components/projectsnetwork"
import { Paynetwork } from "../components/paynetwork"

export default function Networking() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Projectsnetwork />
                <Paynetwork />
            </main>
            <Footer />
        </div>
    )
}