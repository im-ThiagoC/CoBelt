import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-red-500 font-sans dark:bg-black">
      <div className="mr-10 text-3xl font-bold ">
        Hello, World!
      </div>
      <Button variant="ghost">Click me</Button>
    </div>
  );
}

export default Home;
