import { Code2, Palette, Globe2 } from "lucide-react";
import { FaWordpress } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';

export default function Service() {
    return (
        <main className="" style={{
            backgroundImage: 'linear-gradient(120deg, #151414 0%, #151414 50%, #6C0E2A 100%)',
        }}>
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent">
                      My Services
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Development Card */}
                    <div className="group bg-card p-8 rounded-2xl shadow-lg bg-amber-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <Code2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-card-foreground">Front-End Development</h3>
                        <p className="text-muted-foreground">
                            Crafting pixel-perfect, responsive interfaces with modern frameworks and cutting-edge technologies.
                        </p>
                    </div>
                    {/* WordPress Card */}
                    <div className="group bg-card p-8 rounded-2xl shadow-lg bg-amber-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <FaWordpress className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-card-foreground">WordPress</h3>
                        <p className="text-muted-foreground">
                            Building powerful, customizable websites with the world's most popular CMS platform.
                        </p>
                    </div>

                    {/* Webflow Card */}
                    <div className="group bg-card p-8 rounded-2xl shadow-lg bg-amber-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <SiWebflow className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-card-foreground">Webflow</h3>
                        <p className="text-muted-foreground">
                            Designing stunning, no-code websites with advanced animations and dynamic content.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}