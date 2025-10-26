import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';

const Home = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="flex min-h-screen items-center justify-center text-red-500 font-sans dark:bg-black">
      <div className="text-3xl font-bold ">
        {JSON.stringify(users)}
      </div>
      <Button variant="ghost">Click me</Button>
    </div>
  );
}

export default Home;
