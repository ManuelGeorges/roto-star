import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  // التحقق مما إذا كان المسار يفتقد للغة
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // التوجيه التلقائي إذا كانت اللغة مفقودة
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  // تمرير اللغة في الـ headers
  const locale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const requestHeaders = new Headers(request.headers);
  if (locale) {
    requestHeaders.set("x-lang", locale);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  // استثناء الملفات الثابتة
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|logo.png|robots.txt|sitemap.xml|.*\\.svg).*)"],
};
