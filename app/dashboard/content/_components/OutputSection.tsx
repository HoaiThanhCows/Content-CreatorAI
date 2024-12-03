import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();
  const [copySuccess, setCopySuccess] = useState(false); // Thêm trạng thái thông báo sao chép

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const htmlContent = editorInstance.getHTML(); // Lấy nội dung HTML đã được định dạng

    // Tạo một thẻ div tạm thời để chứa nội dung cần sao chép
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent; // Đưa nội dung HTML vào thẻ div

    // Thêm thẻ tạm thời vào body
    document.body.appendChild(tempDiv);

    // Chọn nội dung trong thẻ tạm thời
    const range = document.createRange();
    range.selectNodeContents(tempDiv);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy"); // Sao chép nội dung đã chọn vào clipboard
    }

    // Gỡ bỏ thẻ tạm thời sau khi sao chép
    document.body.removeChild(tempDiv);

    // Hiển thị thông báo sao chép thành công
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg ">Kết quả của bạn</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Sao chép
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Kết quả của bạn sẽ xuất hiện ở đây"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
      {copySuccess && (
        <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Sao chép thành công!
        </div>
      )}
    </div>
  );
}

export default OutputSection;
