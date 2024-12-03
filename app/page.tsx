import Spline from "@splinetool/react-spline/next";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
      <header className="z-50 w-full bg-indigo-100 bg-opacity-90 backdrop-blur-md shadow-md dark:bg-gray-900 dark:bg-opacity-90">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="transition-transform duration-300 hover:rotate-180">
              <Image
                src="/logo.svg"
                alt="CreatorAI Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              CreatorAI
            </span>
          </Link>
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="bg-white dark:bg-gray-800 text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Đăng nhập
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <section className="text-center mb-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                AI-Powered
              </span>
              <br />
              Content Creation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Khám phá sức mạnh của công nghệ AI tiên tiến, giúp bạn tạo ra nội
              dung cuốn hút và chất lượng cao chỉ trong vài giây. Với ứng dụng
              của chúng tôi, bạn sẽ dễ dàng nâng cao hiệu quả làm việc và tối ưu
              hóa quy trình sáng tạo.
            </p>
            <div className="transition-transform duration-300 hover:scale-105">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Dùng thử miễn phí
                </Button>
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "210px", height: "140px" }}>
              <Spline scene="https://prod.spline.design/6R9H5hevlSkFBn02/scene.splinecode" />
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "12 Content Templates miễn phí",
                description: "Lựa chọn nhiều content templates khác nhau.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                ),
                title: "Customizable",
                description:
                  "Điều chỉnh đầu ra AI theo phong cách độc đáo của bạn.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Free to Use",
                description: "Sử dụng các công cụ AI mạnh mẽ miễn phí..",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up w-full max-w-xs"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 bg-pink-100 dark:bg-gray-800 overflow-hidden h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
