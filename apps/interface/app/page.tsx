import Link from "next/link";
import { getContentFolders } from "@/lib/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  const folders = getContentFolders();

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1
            className="text-7xl mb-4"
            style={{ fontWeight: 900, fontVariationSettings: '"opsz" 72' }}
          >
            COMPLIT 126x
          </h1>
          <p className="text-xl text-zinc-400">
            Comparative Literature and Digital Humanities
          </p>
        </div>

        {/* Documentation Section */}
        {folders.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-zinc-100" style={{ fontWeight: 800 }}>Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {folders.map((folder) => (
                <Link
                  key={folder}
                  href={`/${folder}`}
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <Card className="h-full hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="capitalize text-xl">
                        {folder.replace(/-/g, " ")}
                      </CardTitle>
                      <CardDescription>
                        View {folder} documentation
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6 text-zinc-100" style={{ fontWeight: 800 }}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/card-demo-001"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">Card Demo</CardTitle>
                  <CardDescription>
                    Demo card interface and components
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
