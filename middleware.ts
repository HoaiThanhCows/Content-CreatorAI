// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { NextRequest, NextResponse } from "next/server";

// const validSlugs = [
//   "VIP-write-code",
//   "VIP-english-grammer-checker",
//   "VIP-explain-code",
//   "VIP-code-bug-detector",
//   "VIP-tagline-generator",
//   "VIP-product-description",
//   "generate-blog-title",
//   "blog-content-generation",
//   "blog-topic-idea",
//   "youtube-seo-title",
//   "youtube-description",
//   "youtube-tag",
//   "rewrite-article",
//   "text-improver",
//   "add-emoji-to-text",
//   "instagram-post-generator",
//   "instagram-hash-tag-generator",
//   "instagram-post-idea-generator",
// ]; // Slugs hợp lệ, có thể lấy từ DB hoặc API.

// export function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const path = url.pathname;

//   // Kiểm tra nếu đường dẫn là `/dashboard/content/{slug}`
//   if (path.startsWith("/dashboard/content/")) {
//     const slug = path.split("/").pop(); // Lấy `slug` từ đường dẫn.

//     // Nếu slug không hợp lệ, điều hướng về trang 404.
//     if (!validSlugs.includes(slug!)) {
//       return NextResponse.redirect(new URL("//app/404", req.url));
//     }
//   }

//   return NextResponse.next(); // Tiếp tục xử lý nếu hợp lệ.
// }

// export const config = {
//   matcher: ["/dashboard/content/:path*"], // Chỉ áp dụng middleware cho các đường dẫn này.
// };
//2 ok
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";

// // Danh sách các slug hợp lệ
// const validSlugs = [
//   "VIP-write-code",
//   "VIP-english-grammer-checker",
//   "VIP-explain-code",
//   "VIP-code-bug-detector",
//   "VIP-tagline-generator",
//   "VIP-product-description",
//   "generate-blog-title",
//   "blog-content-generation",
//   "blog-topic-idea",
//   "youtube-seo-title",
//   "youtube-description",
//   "youtube-tag",
//   "rewrite-article",
//   "text-improver",
//   "add-emoji-to-text",
//   "instagram-post-generator",
//   "instagram-hash-tag-generator",
//   "instagram-post-idea-generator",
// ];

// export default clerkMiddleware(async (auth, req) => {
//   const url = req.nextUrl.clone();
//   const path = url.pathname;

//   // Kiểm tra nếu đường dẫn là `/dashboard/content/{slug}`
//   if (path.startsWith("/dashboard/content/")) {
//     const slug = path.split("/").pop(); // Lấy `slug` từ đường dẫn

//     // Kiểm tra slug hợp lệ
//     if (!validSlugs.includes(slug!)) {
//       return NextResponse.redirect(new URL("/app/404", req.url)); // Điều hướng về trang 404 nếu slug không hợp lệ
//     }

//     // Kiểm tra nguồn gốc yêu cầu
//     const referer = req.headers.get("referer");
//     const host = req.headers.get("host");

//     // Nếu không có referer hoặc referer không phải từ trang của bạn => chặn
//     if (!referer || !referer.includes(host!)) {
//       return NextResponse.redirect(new URL("/app/403", req.url)); // Điều hướng về trang lỗi
//     }
//   }

//   // Bảo vệ các route cần xác thực người dùng
//   const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
//   if (isProtectedRoute(req)) {
//     auth().protect(); // Chỉ bảo vệ các route matching `isProtectedRoute`
//   }

//   return NextResponse.next(); // Tiếp tục xử lý nếu hợp lệ
// });

// // Cấu hình matcher để xác định các route cần sử dụng middleware
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // Áp dụng middleware cho các route chính và API
// };
//3
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Danh sách các slug hợp lệ
const validSlugs = [
  "VIP-write-code",
  "VIP-english-grammer-checker",
  "VIP-explain-code",
  "VIP-code-bug-detector",
  "VIP-tagline-generator",
  "VIP-product-description",
  "generate-blog-title",
  "blog-content-generation",
  "blog-topic-idea",
  "youtube-seo-title",
  "youtube-description",
  "youtube-tag",
  "rewrite-article",
  "text-improver",
  "add-emoji-to-text",
  "instagram-post-generator",
  "instagram-hash-tag-generator",
  "instagram-post-idea-generator",
];

// Danh sách các trang cần chặn
const blockedPages = [
  "/dashboard/content/VIP-write-code",
  "/dashboard/content/VIP-english-grammer-checker",
  "/dashboard/content/VIP-explain-code",
  "/dashboard/content/VIP-code-bug-detector",
  "/dashboard/content/VIP-tagline-generator",
  "/dashboard/content/VIP-product-description",
];
export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // Kiểm tra nếu đường dẫn là `/dashboard/content/{slug}`
  if (path.startsWith("/dashboard/content/")) {
    const slug = path.split("/").pop(); // Lấy `slug` từ đường dẫn

    // Kiểm tra slug hợp lệ
    if (!validSlugs.includes(slug!)) {
      return NextResponse.redirect(new URL("/dashboard", req.url)); // Điều hướng về trang 404 nếu slug không hợp lệ
    }

    // Chỉ chặn nếu người dùng nhập trực tiếp từ URL, không dựa trên `referer`
    const referer = req.headers.get("referer");

    const isDirectAccess =
      !referer && blockedPages.some((page) => path.startsWith(page));

    if (isDirectAccess) {
      return NextResponse.redirect(new URL("/dashboard", req.url)); // Điều hướng về trang lỗi
    }
  }

  // Bảo vệ các route cần xác thực người dùng
  const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
  if (isProtectedRoute(req)) {
    auth().protect(); // Chỉ bảo vệ các route matching `isProtectedRoute`
  }

  return NextResponse.next(); // Tiếp tục xử lý nếu hợp lệ
});

// Cấu hình matcher để xác định các route cần sử dụng middleware
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // Áp dụng middleware cho các route chính và API
};
