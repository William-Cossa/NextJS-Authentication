import { NextRequest, NextResponse } from "next/server"
import { isValidSession } from "./services/auth-services";

export const config = {
    matcher: [
    // Todas as rotas do app, exceto as rotas do Next.js como /_next e /api
     '/((?!_next|favicon.ico|api|static|robots.txt).*)',
  ],
}

const privatesRoutes = [ '/dashboard']
export default async function middleware(req: NextRequest){
    
    const pathname = req.nextUrl.pathname;
    if(!privatesRoutes.includes(pathname)){
        return NextResponse.next();
    }
    const session = await isValidSession();

    if(!session){
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}