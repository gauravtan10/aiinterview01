import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";

export function MainContent() {
  const { user } = useAuth();

  return (
    <main className="flex-1 flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <SidebarTrigger />
          <div className="ml-auto">
            <h1 className="text-lg font-semibold">Welcome to AimLaunch</h1>
          </div>
        </div>
      </header>
      
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Hello, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}!
            </h2>
            <p className="text-muted-foreground mt-2">
              Ready to ace your next interview? Let's get started with your preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Flash Cards</h3>
              <p className="text-muted-foreground mb-4">
                Practice with interactive flash cards to improve your knowledge.
              </p>
              <button className="text-primary hover:underline">Get Started →</button>
            </div>

            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Interview Simulator</h3>
              <p className="text-muted-foreground mb-4">
                Practice realistic interview scenarios with AI feedback.
              </p>
              <button className="text-primary hover:underline">Start Practice →</button>
            </div>

            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Monitor your improvement and identify areas to focus on.
              </p>
              <button className="text-primary hover:underline">View Progress →</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}