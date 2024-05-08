// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// export default function Component() {
//   return (
//     <>
//       <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
//         <div className="container flex items-center justify-between py-4">
//           <Link className="flex items-center gap-2" href="#">
//             <FilmIcon className="h-6 w-6 text-primary" />
//             <span className="font-bold text-lg">MovieHub</span>
//           </Link>
//           <nav className="hidden md:flex items-center gap-6">
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Movies
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               TV Shows
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Actors
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Directors
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Genres
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Button size="icon" variant="ghost">
//               <SearchIcon className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </Button>
//             <Button size="icon" variant="ghost">
//               <UserIcon className="h-5 w-5" />
//               <span className="sr-only">Account</span>
//             </Button>
//           </div>
//         </div>
//       </header>
//       <main>
//         <section className="relative h-[600px] w-full overflow-hidden">
//           <img
//             alt="Hero Image"
//             className="absolute inset-0 h-full w-full object-cover"
//             height="600"
//             src="/placeholder.svg"
//             style={{
//               aspectRatio: "1200/600",
//               objectFit: "cover",
//             }}
//             width="1200"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
//           <div className="relative z-10 container flex h-full flex-col items-center justify-center gap-6 px-4 text-center text-white">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover the Best Movies</h1>
//             <p className="max-w-[600px] text-lg">Search and explore a vast collection of movies, TV shows, and more.</p>
//             <div className="w-full max-w-md">
//               <Input
//                 className="h-12 w-full rounded-full pr-12"
//                 placeholder="Search for a movie, TV show, actor, or director"
//               />
//               <Button
//                 className="absolute right-0 top-0 h-12 w-12 rounded-full"
//                 size="icon"
//                 type="submit"
//                 variant="ghost"
//               >
//                 <SearchIcon className="h-5 w-5" />
//                 <span className="sr-only">Search</span>
//               </Button>
//             </div>
//           </div>
//         </section>
//         <section className="py-12 md:py-16 lg:py-20">
//           <div className="container">
//             <div className="mb-8 flex items-center justify-between">
//               <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
//               <Link className="text-sm font-medium hover:underline" href="#">
//                 View all
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" />
//           </div>
//         </section>
//         <section className="py-12 md:py-16 lg:py-20">
//           <div className="container">
//             <div className="mb-8 flex items-center justify-between">
//               <h2 className="text-2xl font-bold tracking-tight">Top Rated</h2>
//               <Link className="text-sm font-medium hover:underline" href="#">
//                 View all
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" />
//           </div>
//         </section>
//         <section className="py-12 md:py-16 lg:py-20">
//           <div className="container">
//             <div className="mb-8 flex items-center justify-between">
//               <h2 className="text-2xl font-bold tracking-tight">Upcoming</h2>
//               <Link className="text-sm font-medium hover:underline" href="#">
//                 View all
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" />
//           </div>
//         </section>
//       </main>
//       <footer className="bg-gray-100 py-8 dark:bg-gray-950">
//         <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
//           <div className="flex items-center gap-2">
//             <FilmIcon className="h-6 w-6 text-primary" />
//             <span className="font-bold text-lg">MovieHub</span>
//           </div>
//           <nav className="flex items-center gap-6">
//             <Link className="text-sm font-medium hover:underline" href="#">
//               About
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Contact
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Privacy
//             </Link>
//             <Link className="text-sm font-medium hover:underline" href="#">
//               Terms
//             </Link>
//           </nav>
//           <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 MovieHub. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   )
// }

// function FilmIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="3" rx="2" />
//       <path d="M7 3v18" />
//       <path d="M3 7.5h4" />
//       <path d="M3 12h18" />
//       <path d="M3 16.5h4" />
//       <path d="M17 3v18" />
//       <path d="M17 7.5h4" />
//       <path d="M17 16.5h4" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function UserIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }