/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cohwwODQnT0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Leaderboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="flex flex-col items-center gap-2 py-8 bg-primary text-primary-foreground rounded-t-lg">
            <div className="text-4xl font-bold">Leaderboard</div>
            <div className="text-lg">Race to the top!</div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>John Doe</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">10,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Jane Smith</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">9,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Bob Johnson</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">8,800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Alice Williams</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">8,200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Tom Wilson</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">7,900</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Emily Davis</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">7,600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Michael Brown</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">7,400</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">8</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Olivia Taylor</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">7,200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Daniel Anderson</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">7,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">10</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        width={32}
                        height={32}
                        alt="Avatar"
                        className="rounded-full"
                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                      />
                      <div>Sophia Martinez</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">6,800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2023-12-31">December 31, 2023</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <div className="h-3.5 w-3.5" />
                    <span className="sr-only">Previous Page</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-6 w-6">
                    <div className="h-3.5 w-3.5" />
                    <span className="sr-only">Next Page</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
