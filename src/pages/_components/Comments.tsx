import img1 from "../../assets/avatar/image24.png"
import img2 from "../../assets/avatar/image26.png"
import img3 from "../../assets/avatar/image27.png"
import img4 from "../../assets/avatar/image28.png"
import img5 from "../../assets/avatar/image29.png"
import img6 from "../../assets/avatar/image30.png"
interface CommentProps {
    text: string;
    author: string;
    role: string;
    avatar: string;
}

export function Comments({ text, author, role, avatar }: CommentProps) {
    return (
        <div className="border rounded-2xl shadow-lg p-6 bg-white mb-4">
            <p className="text-lg text-gray-700 mb-4">{text}</p>
            <div className="flex items-center gap-3">
                <img src={avatar} alt={author} className="w-12 h-12 rounded-full" />
                <div className="text-left">
                    <p className="font-bold text-black">{author}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
}

export function CommentsList() {
    const commentsData: CommentProps[] = [
            {
                text: "Aithenos biến những điều phức tạp thành đơn giản! Một công cụ AI mạnh mẽ nhưng cực kỳ dễ dùng. ;)", 
                author: "Michael Tran", 
                role: "CTO @ FutureTech Solutions", 
                avatar: img1
            },
            {
                text: "Nhờ Aithenos, chúng tôi đã tăng tỷ lệ chốt khách hàng lên 30% trong 2 tháng. Thật sự không thể thiếu trong quy trình làm việc hàng ngày của chúng tôi.", 
                author: "Sarah Lee", 
                role: "Head of Marketing @ GrowthWave", 
                avatar: img2
            },
            {
                text: "Aithenos là trợ thủ đắc lực trong công việc của tôi. Nó kết hợp giữa hiệu quả, sáng tạo và chính xác trong từng tính năng.", 
                author: "David Nguyen", 
                role: "Founder @ Innovate AI Labs", 
                avatar: img3
            },
            {
                text: "Công cụ này đã tối giản hóa quy trình làm việc của tôi một cách đáng kinh ngạc.", 
                author: "Emily Chan", 
                role: "Product Manager @ NexaTech", 
                avatar: img4
            },
            {
                text: "Sử dụng nền tảng này đã giúp tăng năng suất đội ngũ của chúng tôi lên 40%!", 
                author: "John Doe", 
                role: "Operations Lead @ SwiftSolutions", 
                avatar: img5
            },
            {
                text: "Một công cụ không thể thiếu trong bộ công cụ công nghệ của chúng tôi. Rất khuyến nghị!", 
                author: "Lisa Park", 
                role: "CEO @ DigitalSphere", 
                avatar: img6
            }
        ];
        

    // Minimum difference between 3 cols
    const columns: CommentProps[][] = [[], [], []];
    commentsData.forEach((comment, index) => {
        columns[index % 3].push(comment);
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.map((column, colIndex) => (
                <div key={colIndex}>
                    {column.map((comment, idx) => (
                        <Comments
                            key={idx}
                            text={comment.text}
                            author={comment.author}
                            role={comment.role}
                            avatar={comment.avatar}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
