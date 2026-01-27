import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 10 }, (_, i) => (
        <Card
          key={i}
          className="bg-background h-full animate-pulse overflow-hidden"
        >
          <div className="bg-muted aspect-square" />
          <CardHeader className="w-full">
            <div className="bg-muted h-7 w-full rounded" />
          </CardHeader>
          <CardContent>
            <div className="bg-muted h-7 w-1/3 rounded" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="bg-muted h-6 w-14 rounded" />
            <div className="bg-muted h-6 w-14 rounded" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
