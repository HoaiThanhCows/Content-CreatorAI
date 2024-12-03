// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    name: "Blog Title",
    desc: "Công cụ AI tạo tiêu đề blog tùy thuộc vào thông tin blog bạn mong muốn",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Bạn hãy đóng vai là một nhà sáng tạo nội dung chuyên nghiệp. Hãy tạo ra 5 tiêu đề blog hấp dẫn và sáng tạo dựa trên thông tin sau:- Chủ đề/Nội dung chính: {niche}- Mô tả chi tiết: {outline} (nếu có) .Hãy đảm bảo tiêu đề thu hút người đọc và phù hợp với ngữ cảnh.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Chủ đề/Nội dung chính ",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Mô tả chi tiết",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "Công cụ AI hỗ trợ bạn viết nội dung blog hoàn chỉnh với ý tưởng sáng tạo dựa trên chủ đề và dàn ý.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Bạn là một nhà sáng tạo nội dung blog chuyên nghiệp. Dựa trên các thông tin sau:- Chủ đề blog: {topic}- Dàn ý: {outline} (nếu có). Hãy viết nội dung blog hoàn chỉnh, sáng tạo và chi tiết, phù hợp với độc giả. Đừng quên giữ ngữ điệu phù hợp và đảm bảo nội dung chất lượng.",
    form: [
      {
        label: "Chủ đề blog của bạn",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Mô tả thêm về chủ đề blog",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "AI giúp bạn nảy ra ý tưởng chủ đề blog mới mẻ và phù hợp với ngách nội dung của bạn.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Hãy đóng vai là một nhà sáng tạo nội dung. Dựa trên nội dung: {niche}, hãy gợi ý 5 ý tưởng chủ đề blog độc đáo, phù hợp và có tiềm năng thu hút người đọc. Đảm bảo ý tưởng sáng tạo, mới lạ và khả thi để triển khai.",
    form: [
      {
        label: "Nhập nội dung chính của blog",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "Công cụ AI hỗ trợ bạn tạo tiêu đề video YouTube tối ưu hóa SEO và hấp dẫn để tăng lượt xem.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Bạn là chuyên gia sáng tạo tiêu đề video YouTube tối ưu hóa SEO. Dựa trên từ khóa: {keywords} và mô tả: {outline} (nếu có), hãy tạo ra 5 tiêu đề hấp dẫn, thu hút người xem và phù hợp với thuật toán SEO YouTube. Đảm bảo nội dung tối ưu và gần gũi với đối tượng mục tiêu.",
    form: [
      {
        label: "Nhập từ khóa chủ đề video youtube của bạn",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Nhập thêm mô tả Youtube SEO Title  ",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "Tạo mô tả video YouTube chuẩn SEO, giúp nội dung của bạn dễ dàng tiếp cận khán giả hơn.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Bạn là chuyên gia viết mô tả video YouTube. Hãy tạo 5 mô tả chuẩn SEO cho video dựa trên thông tin:- Chủ đề: {topic}- Dàn ý/Mô tả chi tiết: {outline} (nếu có). Đảm bảo nội dung thân thiện với người dùng, có chứa từ khóa và tối ưu hóa khả năng hiển thị trên YouTube.",
    form: [
      {
        label: "Nhập chủ đề/tiêu đề Youtube Description của bạn",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Nhập thêm yêu cầu của bạn",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Công cụ AI tạo các thẻ (tags) YouTube theo từ khóa để tối ưu hóa khả năng hiển thị video.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Bạn là chuyên gia tối ưu hóa nội dung YouTube. Hãy tạo 10 thẻ hashtag (dưới dạng #) phù hợp với chủ đề video dựa trên:- Tiêu đề: {title}- Dàn ý/Mô tả chi tiết: {outline} (nếu có). Các hashtag cần dễ nhớ, phù hợp và tối ưu hóa khả năng tiếp cận video.",

    form: [
      {
        label: "Nhập tiêu đề youtube của bạn",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Nhập mô tả về video youtube ở đây (Tùy chọn)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article ",
    desc: "Công cụ viết lại bài viết hoặc nội dung blog mà vẫn đảm bảo không trùng lặp và vượt qua các trình phát hiện AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Bạn hãy đóng vai là chuyên gia chỉnh sửa nội dung. Dựa trên bài viết sau: {article}, hãy viết lại nội dung sao cho mới mẻ, không trùng lặp và đảm bảo vượt qua mọi trình phát hiện đạo văn. Hãy sử dụng phong cách tự nhiên, rõ ràng và dễ hiểu.",
    form: [
      {
        label:
          "🤖 Cung cấp Bài viết/Bài đăng trên blog hoặc bất kỳ nội dung nào khác để viết lại.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Cải thiện văn bản của bạn, sửa lỗi ngữ pháp, và làm cho nội dung chuyên nghiệp hơn.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Bạn là chuyên gia cải thiện nội dung. Dựa trên văn bản: {textToImprove}, hãy chỉnh sửa, cải thiện ngữ pháp, câu chữ và làm cho nội dung trở nên chuyên nghiệp, rõ ràng hơn mà không thay đổi ý nghĩa.",
    form: [
      {
        label: "Nhập văn bản bạn muốn viết lại hoặc cải thiện",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Thêm biểu tượng cảm xúc phù hợp vào nội dung để tăng sức hấp dẫn và sự sinh động.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "As a content creator, you add Emoji to your text based on the outline and I need the same writing style and format as the original online but with + emoji.",
    form: [
      {
        label: "Nhập nội dung văn bản của bạn",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Tạo bài đăng Instagram với nội dung độc đáo và hấp dẫn dựa trên từ khóa bạn cung cấp.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Dựa trên từ khóa: {keywords}, hãy tạo 3 ý tưởng bài đăng Instagram hấp dẫn, độc đáo. Nội dung cần ngắn gọn, sáng tạo và phù hợp với xu hướng hiện tại.",
    form: [
      {
        label: "Nhập từ khóa cho bài đăng của bạn",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "Tạo các thẻ hashtag Instagram phù hợp, giúp tăng khả năng tiếp cận bài đăng.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Dựa trên từ khóa: {keywords}, hãy tạo 15 hashtag phù hợp cho bài đăng Instagram. Các hashtag cần đơn giản, dễ nhớ và tăng khả năng tiếp cận bài đăng.",
    form: [
      {
        label: "Nhập từ khóa instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "Gợi ý ý tưởng bài đăng hoặc Reel Instagram theo xu hướng và phù hợp với lĩnh vực của bạn",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Dựa trên từ khóa/mô tả nội dung: {keywords}, hãy gợi ý 5-10 ý tưởng bài đăng hoặc Reel Instagram sáng tạo, phù hợp với xu hướng hiện tại. Ý tưởng cần độc đáo và dễ triển khai.",
    form: [
      {
        label: "Nhập từ khóa/mô tả nội dung",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "Kiểm tra và sửa lỗi ngữ pháp tiếng Anh, đảm bảo nội dung của bạn chuẩn chỉnh.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "VIP-english-grammer-checker",
    aiPrompt:
      "Hãy kiểm tra và sửa lỗi ngữ pháp trong đoạn văn sau: {inputText}. Đảm bảo văn bản rõ ràng, chuẩn ngữ pháp tiếng Anh và chuyên nghiệp. (Trả lời bằng tiếng Anh)",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "Công cụ AI tạo mã nguồn cho bất kỳ ngôn ngữ lập trình nào theo yêu cầu của bạn.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "VIP-write-code",
    aiPrompt:
      "Bạn là một chuyên gia lập trình viên dựa trên mô tả sau: {codeDesscripton}, hãy viết code tương ứng . Đảm bảo mã code chính xác, dễ hiểu, giải quyết đúng vấn đề. ",
    form: [
      {
        label: "Nhập mô tả mã bạn muốn cùng với Ngôn ngữ lập trình",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Phân tích và giải thích từng dòng mã để bạn hiểu rõ hơn về đoạn mã lập trình.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "VIP-explain-code",
    aiPrompt:
      "Hãy giải thích từng dòng mã trong đoạn code sau: {codeDesscripton}. Giải thích rõ ràng, dễ hiểu và đi sâu vào chi tiết từng dòng.",
    form: [
      {
        label: "Nhập mã code bạn",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Phân tích lỗi trong mã nguồn và đề xuất cách khắc phục một cách chi tiết.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "VIP-code-bug-detector",
    aiPrompt:
      "Bạn là chuyên gia phát hiện lỗi mã nguồn. Dựa trên đoạn mã sau: {codeInput}, hãy:Tìm và chỉ rõ lỗi trong mã-Đề xuất cách sửa lỗi chi tiết-Cung cấp mã nguồn sửa lỗi đầy đủ-Hãy trình bày chi tiết, dễ hiểu và sử dụng khối mã để minh họa. (Trả lời bằng tiếng Việt)",
    form: [
      {
        label: "Nhập code bạn muốn kiểm tra",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Tạo tagline sáng tạo và hấp dẫn cho thương hiệu hoặc sản phẩm của bạn.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "VIP-tagline-generator",
    aiPrompt:
      "Bạn là chuyên gia sáng tạo khẩu hiệu thương hiệu. Dựa trên thông tin sau:-Tên thương hiệu/Sản phẩm: {productName}-Nội dung/Điểm nổi bật: {outline}-Hãy tạo 5-10 câu khẩu hiệu sáng tạo, hấp dẫn và dễ nhớ để quảng bá thương hiệu/sản phẩm này. (Trả lời bằng tiếng Việt). ",
    form: [
      {
        label: "Tên thương hiệu/Sản phẩm",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Nội dung/Điểm nổi bật:",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Viết mô tả sản phẩm ngắn gọn, thu hút và tối ưu hóa SEO cho cửa hàng trực tuyến.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "VIP-product-description",
    aiPrompt:
      "Bạn là chuyên gia viết mô tả sản phẩm. Dựa trên thông tin sau:-Tên sản phẩm: {productName}-Chi tiết sản phẩm: {outline}-Hãy viết một đoạn mô tả ngắn gọn, thu hút và tối ưu SEO cho sản phẩm. Đảm bảo nội dung rõ ràng, chuyên nghiệp và nhấn mạnh lợi ích nổi bật của sản phẩm. (Trả lời bằng tiếng Việt)  ",
    form: [
      {
        label: "Tên sản phẩm",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Chi tiết sản phẩm",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];
