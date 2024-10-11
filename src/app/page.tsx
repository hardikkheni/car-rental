import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-regular min-h-screen items-center justify-items-center">
      <div className="text-success-foreground bg-success flex flex-col">
        <div className="text-xs">The quick brown fox jumps over the lazy dog</div>
        <div className="text-sm">The quick brown fox jumps over the lazy dog</div>
        <div className="text-base">The quick brown fox jumps over the lazy dog</div>
        <div className="text-lg">The quick brown fox jumps over the lazy dog</div>
        <div className="text-xl">The quick brown fox jumps over the lazy dog</div>
        <div className="text-2xl">The quick brown fox jumps over the lazy dog</div>
        <div className="text-3xl">The quick brown fox jumps over the lazy dog</div>
        <div className="text-4xl">The quick brown fox jumps over the lazy dog</div>
        <div className="text-5xl">The quick brown fox jumps over the lazy dog</div>
        <div className="text-6xl">The quick brown fox jumps over the lazy dog</div>
      </div>
      <div className="flex gap-2 p-2">
        <Button size="sm">Label</Button>
        <Button size="md">Label</Button>
        <Button size="lg">Label</Button>
        <Button disabled>Label</Button>
        <Button variant="error">Label</Button>
        <Button variant={'error'}>Label</Button>
        <Button variant={'success'}>Label</Button>
        <Button variant={'warning'}>Label</Button>
        <Button variant={'outline'}>Label</Button>
        <Button size={'sm'} icon variant={'flat'}>
          <MessageSquare size={16} />
          <span>Label</span>
        </Button>
      </div>
    </div>
  );
}
