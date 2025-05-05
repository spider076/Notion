"use client"

export default function NotFound() {
  // const packageName = process.env.NEXT_PUBLIC_PACKAGE_NAME || "somthing";
  
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">404 Not Found</h2>
        <p className="text-muted-foreground">The requested page could not be found.</p>
      </div>
    </div>
  )
}
