const quotes = [
    "Cuộc sống không đòi hỏi bạn phải là người giỏi nhất, chỉ cần bạn cố gắng hơn hôm qua.",
    "Hãy làm những gì bạn sợ nhất, đó là cách duy nhất để trưởng thành.",
    "Không có con đường nào dẫn đến thành công mà không có thử thách.",
    "Thất bại là bước đệm để bạn tiến gần hơn đến thành công.",
    "Hãy sống hôm nay như thể đó là ngày cuối cùng của bạn.",
    "Thành công không phải là chìa khóa của hạnh phúc, hạnh phúc mới là chìa khóa của thành công.",
    "Người không dám mơ sẽ không bao giờ bay cao.",
    "Mỗi ngày là một cơ hội mới để thay đổi bản thân.",
    "Thử thách lớn nhất là vượt qua chính bản thân mình.",
    "Không gì quý giá hơn thời gian, hãy sử dụng nó một cách thông minh.",
    "Hãy làm việc chăm chỉ trong im lặng, để thành công lên tiếng.",
    "Người lạc quan nhìn thấy cơ hội trong mỗi khó khăn.",
    "Học hỏi từ ngày hôm qua, sống cho ngày hôm nay, hy vọng vào ngày mai.",
    "Thói quen tốt hôm nay sẽ tạo ra cuộc sống tốt ngày mai.",
    "Không có gì là không thể, chỉ có chưa cố gắng đủ.",
    "Sự kiên nhẫn là chìa khóa của mọi thành công.",
    "Hãy để niềm đam mê dẫn đường, không phải nỗi sợ hãi.",
    "Thành công là tổng hợp của những nỗ lực nhỏ mỗi ngày.",
    "Nếu bạn muốn bay, hãy từ bỏ những thứ làm bạn nặng nề.",
    "Cuộc sống đẹp nhất khi bạn sống vì ước mơ, không chỉ vì hiện tại."
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').innerText = quotes[randomIndex];
}

window.onload = showRandomQuote;