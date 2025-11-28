// ----------------------------------------------------
// --- NGÂN HÀNG CÂU HỎI CỐ ĐỊNH (QUIZ BANK) ---
// ----------------------------------------------------

function getQuizBank(subject) {
const bank = {
    // ========================= AI 50 CÂU (ML, CV, NLP) =========================
    ai: [
        { id: 1, text: "Thuật ngữ AI 'Học tăng cường' (Reinforcement Learning) dùng để mô tả điều gì?", options: ["A. Mô hình học từ dữ liệu được gán nhãn", "B. Mô hình học bằng cách tương tác với môi trường và nhận phần thưởng/phạt", "C. Mô hình phân cụm dữ liệu không gán nhãn", "D. Mô hình học từ việc bắt chước hành vi người dùng"], answer: "B" },
        { id: 2, text: "Công ty nào đã phát triển mô hình ngôn ngữ lớn (LLM) GPT?", options: ["A. Google", "B. Meta", "C. Microsoft", "D. OpenAI"], answer: "D" },
        { id: 3, text: "Trong Machine Learning, thuật toán K-Means là một ví dụ điển hình của loại học nào?", options: ["A. Học có giám sát", "B. Học không giám sát", "C. Học bán giám sát", "D. Học sâu"], answer: "B" },
        { id: 4, text: "Khả năng của máy móc thực hiện các chức năng nhận thức như con người được gọi là gì?", options: ["A. Robotics", "B. Trí tuệ Nhân tạo (AI)", "C. Tính toán lượng tử", "D. Mạng thần kinh sinh học"], answer: "B" },
        { id: 5, text: "Turing Test được thiết kế để kiểm tra điều gì của máy móc?", options: ["A. Tốc độ tính toán", "B. Khả năng nhớ", "C. Khả năng thể hiện trí thông minh tương đương con người", "D. Tương thích phần cứng"], answer: "C" },
        { id: 6, text: "Trong Machine Learning, overfitting xảy ra khi nào?", options: ["A. Mô hình quá đơn giản", "B. Mô hình học quá kỹ dữ liệu huấn luyện và kém trên dữ liệu mới", "C. Dữ liệu quá lớn", "D. Dữ liệu bị nhiễu"], answer: "B" },
        { id: 7, text: "Thuật toán nào là mô hình tuyến tính?", options: ["A. Decision Tree", "B. Linear Regression", "C. Random Forest", "D. Naive Bayes"], answer: "B" },
        { id: 8, text: "Gradient Descent dùng để làm gì?", options: ["A. Tăng kích thước dữ liệu", "B. Tối ưu hàm mất mát bằng cách cập nhật trọng số", "C. Phân loại văn bản", "D. Thu gom dữ liệu"], answer: "B" },
        { id: 9, text: "Regularization giúp mục đích gì?", options: ["A. Tăng overfitting", "B. Giảm overfitting", "C. Tăng kích thước mô hình", "D. Loại bỏ dữ liệu"], answer: "B" },
        { id: 10, text: "Thuật toán nào thuộc nhóm Ensemble Learning?", options: ["A. Logistic Regression", "B. CNN", "C. Random Forest", "D. RNN"], answer: "C" },
        { id: 11, text: "Trong bài toán phân loại, thuật toán nào thường được dùng cho dữ liệu văn bản?", options: ["A. KNN", "B. Naive Bayes", "C. Linear Regression", "D. Apriori"], answer: "B" },
        { id: 12, text: "Trong xử lý ảnh (Computer Vision), convolution dùng để làm gì?", options: ["A. Tăng số lớp", "B. Trích xuất đặc trưng cục bộ từ ảnh", "C. Giảm số chiều dữ liệu văn bản", "D. Tăng kích thước ảnh"], answer: "B" },
        { id: 13, text: "Trong NLP, mô hình bag-of-words (BoW) có hạn chế gì?", options: ["A. Không thể xử lý ảnh", "B. Không lưu trữ thứ tự từ", "C. Không tạo ra đặc trưng", "D. Không thể dùng cho phân loại"], answer: "B" },
        { id: 14, text: "Trong Machine Learning, Cross-validation được dùng để làm gì?", options: ["A. Tinh chỉnh trọng số", "B. Đánh giá mô hình trên nhiều tập dữ liệu con", "C. Làm sạch dữ liệu", "D. Tăng số chiều"], answer: "B" },
        { id: 15, text: "Trong Computer Vision, kỹ thuật Data Augmentation giúp gì?", options: ["A. Giảm số lượng ảnh", "B. Tạo thêm dữ liệu bằng lật, xoay, thay đổi sáng", "C. Giảm cần GPU", "D. Loại bỏ nhiễu từ ảnh"], answer: "B" },

        // Thêm 35 câu giả định ML/CV/NLP để đạt 50
        { id: 16, text: "Trong NLP, Word Embedding dùng để làm gì?", options: ["A. Mã hóa hình ảnh", "B. Biểu diễn từ thành vector số", "C. Tăng số lượng dữ liệu", "D. Phân loại dữ liệu"], answer: "B" },
        { id: 17, text: "Trong Computer Vision, mạng CNN thường dùng để:", options: ["A. Phân tích văn bản", "B. Nhận dạng và phân loại hình ảnh", "C. Xử lý dữ liệu âm thanh", "D. Quản lý cơ sở dữ liệu"], answer: "B" },
        { id: 18, text: "Trong NLP, tf-idf là gì?", options: ["A. Tính tần suất từ và trọng số ngược tài liệu", "B. Thuật toán clustering", "C. Mô hình hồi quy", "D. Cách chuẩn hóa ảnh"], answer: "A" },
        { id: 19, text: "Support Vector Machine (SVM) thích hợp cho:", options: ["A. Phân loại nhị phân và đa lớp", "B. Sinh dữ liệu mới", "C. Giảm chiều dữ liệu", "D. Tăng tốc training"], answer: "A" },
        { id: 20, text: "Trong Machine Learning, thuật toán KNN dựa vào gì để phân loại?", options: ["A. Khoảng cách giữa các điểm dữ liệu", "B. Trọng số hồi quy", "C. Gradient", "D. Số epoch"], answer: "A" },

        // 21–50: thêm 30 câu nữa giả định ML/CV/NLP
        { id: 21, text: "Trong NLP, stemming dùng để làm gì?", options: ["A. Phân loại ảnh", "B. Lấy gốc từ của một từ", "C. Chuẩn hóa dữ liệu âm thanh", "D. Trích xuất vector"], answer: "B" },
        { id: 22, text: "Trong Machine Learning, thuật toán Decision Tree dễ gặp vấn đề gì?", options: ["A. Underfitting", "B. Overfitting", "C. Gradient vanishing", "D. Không thể phân lớp"], answer: "B" },
        { id: 23, text: "Trong NLP, n-gram là gì?", options: ["A. Tập hợp các ký tự liên tiếp", "B. Tập hợp các từ liên tiếp", "C. Mạng CNN", "D. Kỹ thuật hồi quy"], answer: "B" },
        { id: 24, text: "Trong Computer Vision, pooling layer dùng để làm gì?", options: ["A. Tăng số pixel", "B. Giảm kích thước feature map", "C. Tăng số chiều dữ liệu", "D. Xử lý dữ liệu âm thanh"], answer: "B" },
        { id: 25, text: "Trong NLP, stop words là gì?", options: ["A. Các từ quan trọng nhất", "B. Các từ dừng, ít ý nghĩa", "C. Vector hóa từ", "D. Thuật toán phân cụm"], answer: "B" },
        { id: 26, text: "Trong ML, thuật toán Logistic Regression dùng để làm gì?", options: ["A. Phân loại", "B. Clustering", "C. Dự đoán số liên tục", "D. Mã hóa dữ liệu"], answer: "A" },
        { id: 27, text: "Trong Computer Vision, edge detection dùng để:", options: ["A. Tăng màu sắc ảnh", "B. Nhận diện biên của vật thể", "C. Chia ảnh thành lưới", "D. Xử lý văn bản"], answer: "B" },
        { id: 28, text: "Trong NLP, POS tagging dùng để:", options: ["A. Xác định nhãn từ loại (danh từ, động từ…)", "B. Phân loại ảnh", "C. Dự đoán nhãn sentiment", "D. Chuẩn hóa vector"], answer: "A" },
        { id: 29, text: "Trong Machine Learning, thuật toán Random Forest là:", options: ["A. Single Decision Tree", "B. Ensemble của nhiều Decision Tree", "C. Neural Network", "D. KNN"], answer: "B" },
        { id: 30, text: "Trong NLP, cosine similarity dùng để đo gì?", options: ["A. Khoảng cách Euclidean", "B. Độ tương đồng giữa 2 vector", "C. Tần suất từ", "D. Gradient descent"], answer: "B" },

        // 31–50: chỉ liệt kê ngắn để tránh quá dài, thực tế bạn có thể tạo tiếp theo cùng dạng
        { id: 31, text: "Trong ML, thuật toán PCA dùng để?", options: ["A. Phân loại", "B. Giảm chiều dữ liệu", "C. Clustering", "D. Mã hóa ảnh"], answer: "B" },
        { id: 32, text: "Trong Computer Vision, kỹ thuật thresholding dùng để?", options: ["A. Chia ảnh thành vùng đen-trắng", "B. Mã hóa từ", "C. Phân cụm dữ liệu", "D. Tối ưu hàm mất mát"], answer: "A" },
        { id: 33, text: "Trong NLP, lemmatization khác stemming ở chỗ nào?", options: ["A. Không có gì khác", "B. Lấy từ gốc chính xác theo từ điển", "C. Chỉ loại bỏ ký tự cuối", "D. Thay đổi feature map"], answer: "B" },
        { id: 34, text: "Trong ML, thuật toán k-means clustering dùng để?", options: ["A. Phân loại nhãn có sẵn", "B. Phân nhóm dữ liệu không nhãn", "C. Tăng số chiều", "D. Xử lý ảnh"], answer: "B" },
        { id: 35, text: "Trong Computer Vision, histogram equalization dùng để?", options: ["A. Thêm nhiễu ảnh", "B. Cân bằng độ sáng ảnh", "C. Tăng số layer", "D. Trích xuất vector"], answer: "B" },
        { id: 36, text: "Trong NLP, embedding layer dùng để?", options: ["A. Chuẩn hóa ảnh", "B. Biểu diễn từ thành vector số", "C. Giảm kích thước dữ liệu", "D. Phân loại dữ liệu"], answer: "B" },
        { id: 37, text: "Trong ML, thuật toán Gradient Boosting là gì?", options: ["A. Linear Regression", "B. Ensemble learning tăng cường gradient", "C. CNN", "D. KNN"], answer: "B" },
        { id: 38, text: "Trong Computer Vision, optical flow dùng để?", options: ["A. Phát hiện biên ảnh", "B. Phát hiện chuyển động giữa các khung hình", "C. Giảm nhiễu dữ liệu", "D. Phân loại nhãn"], answer: "B" },
        { id: 39, text: "Trong NLP, sequence labeling dùng cho?", options: ["A. Phân loại văn bản", "B. Gán nhãn từng từ trong chuỗi", "C. Nhận diện ảnh", "D. Dự đoán số liên tục"], answer: "B" },
        { id: 40, text: "Trong ML, thuật toán Naive Bayes giả định gì?", options: ["A. Các đặc trưng độc lập", "B. Các đặc trưng liên quan", "C. Dữ liệu có nhãn", "D. Chỉ dùng ảnh"], answer: "A" },
        { id: 41, text: "Trong Computer Vision, segmentation dùng để?", options: ["A. Tách ảnh thành các vùng có ý nghĩa", "B. Phân loại văn bản", "C. Tăng dữ liệu", "D. Giảm nhiễu"], answer: "A" },
        { id: 42, text: "Trong NLP, attention mechanism dùng để?", options: ["A. Giảm số chiều", "B. Tập trung vào các phần quan trọng của chuỗi", "C. Mã hóa ảnh", "D. Xử lý gradient"], answer: "B" },
        { id: 43, text: "Trong ML, thuật toán clustering nào dựa trên mật độ?", options: ["A. K-Means", "B. DBSCAN", "C. SVM", "D. Decision Tree"], answer: "B" },
        { id: 44, text: "Trong Computer Vision, kỹ thuật augmentation dùng cho?", options: ["A. Mở rộng dữ liệu huấn luyện", "B. Giảm số neuron", "C. Tối ưu loss function", "D. Phân loại nhãn"], answer: "A" },
        { id: 45, text: "Trong NLP, mô hình Transformer nổi bật vì gì?", options: ["A. Dùng CNN", "B. Dùng attention để xử lý toàn bộ chuỗi", "C. Dùng RNN duy nhất", "D. Không dùng embedding"], answer: "B" },
        { id: 46, text: "Trong ML, thuật toán logistic regression dùng activation gì?", options: ["A. ReLU", "B. Sigmoid", "C. Tanh", "D. Softmax"], answer: "B" },
        { id: 47, text: "Trong Computer Vision, edge detection dùng để?", options: ["A. Phân loại văn bản", "B. Phát hiện biên vật thể trong ảnh", "C. Giảm chiều dữ liệu", "D. Tăng số lượng ảnh"], answer: "B" },
        { id: 48, text: "Trong NLP, BLEU score dùng để đánh giá gì?", options: ["A. Mức độ chính xác của dự đoán nhãn", "B. Độ chính xác của dịch máy", "C. Tốc độ training", "D. Tăng số chiều"], answer: "B" },
        { id: 49, text: "Trong ML, thuật toán k-means phụ thuộc vào gì?", options: ["A. Số cluster K", "B. Gradient", "C. Activation function", "D. Dropout rate"], answer: "A" },
        { id: 50, text: "Trong NLP, sequence-to-sequence model thường dùng cho?", options: ["A. Phân loại ảnh", "B. Dịch máy, tóm tắt văn bản", "C. Phát hiện biên ảnh", "D. Giảm chiều dữ liệu"], answer: "B" }
    ],

    // ========================= ENGLISH 50 CÂU =========================
    english: [
        { id: 1, text: "Choose the antonym of 'Ubiquitous':", options: ["A. Everywhere", "B. Pervasive", "C. Rare", "D. Commonplace"], answer: "C" },
        { id: 2, text: "Find the error: 'Despite of the rain, we went out for a walk.'", options: ["A. Despite of", "B. the rain", "C. went out", "D. for a walk"], answer: "A" },
        { id: 3, text: "Complete the second conditional: 'If I _____ a billionaire, I would travel the world.'", options: ["A. was", "B. am", "C. were", "D. have been"], answer: "C" },
        { id: 4, text: "Find the synonym of 'Meticulous':", options: ["A. Careless", "B. Thorough", "C. Fast", "D. Simple"], answer: "B" },
        { id: 5, text: "Which idiom means 'very rarely'?", options: ["A. Once in a blue moon", "B. Break a leg", "C. Bite the bullet", "D. Call it a day"], answer: "A" },
        { id: 6, text: "Passive voice of 'They built a new factory last year.' is:", options: ["A. A new factory was built by them last year.", "B. A new factory is built by them last year.", "C. A new factory had been built by them last year.", "D. They were built a new factory last year."], answer: "A" },
        { id: 7, text: "Choose the correct relative pronoun: 'The book _____ I borrowed yesterday is very interesting.'", options: ["A. who", "B. whom", "C. which", "D. whose"], answer: "C" },
        { id: 8, text: "Which word has a different stress pattern?", options: ["A. Education", "B. Important", "C. Communicate", "D. Computer"], answer: "B" },
        { id: 9, text: "Find the synonym of 'Resilience':", options: ["A. Weakness", "B. Fragility", "C. Flexibility", "D. Stamina"], answer: "C" },
        { id: 10, text: "Fill in the blank: 'The company is committed to _____ gender equality.'", options: ["A. achieve", "B. achieving", "C. to achieve", "D. achieved"], answer: "B" },
        { id: 11, text: "Complete the sentence: 'She wishes she _____ studied harder for the exam.'", options: ["A. has", "B. had", "C. did", "D. would have"], answer: "B" },
        { id: 12, text: "Choose the correct article: 'I saw _____ owl in the tree.'", options: ["A. a", "B. an", "C. the", "D. no article"], answer: "B" },
        { id: 13, text: "Identify the part of speech of 'quickly':", options: ["A. Noun", "B. Verb", "C. Adjective", "D. Adverb"], answer: "D" },
        { id: 14, text: "Choose the correct form: 'Neither of the students _____ present.'", options: ["A. is", "B. are", "C. were", "D. be"], answer: "A" },
        { id: 15, text: "Select the correct sentence:", options: ["A. I have seen him yesterday.", "B. I saw him yesterday.", "C. I seen him yesterday.", "D. I saw him since yesterday."], answer: "B" },
        { id: 16, text: "Choose the correct preposition: 'He is good _____ playing chess.'", options: ["A. at", "B. in", "C. on", "D. for"], answer: "A" },
        { id: 17, text: "Identify the tense: 'She has been working here for five years.'", options: ["A. Present Perfect", "B. Present Continuous", "C. Past Perfect", "D. Future Perfect"], answer: "A" },
        { id: 18, text: "Complete the sentence: 'I suggest that he _____ more careful.'", options: ["A. be", "B. is", "C. was", "D. being"], answer: "A" },
        { id: 19, text: "Choose the correct plural: 'Child'", options: ["A. Childs", "B. Children", "C. Childes", "D. Childrens"], answer: "B" },
        { id: 20, text: "Select the correct sentence:", options: ["A. She don’t like coffee.", "B. She doesn’t like coffee.", "C. She not like coffee.", "D. She isn’t like coffee."], answer: "B" },
        { id: 21, text: "Choose the correct synonym: 'Happy'", options: ["A. Sad", "B. Joyful", "C. Angry", "D. Worried"], answer: "B" },
        { id: 22, text: "Find the correct form of the verb: 'They _____ to Paris last summer.'", options: ["A. goes", "B. went", "C. gone", "D. going"], answer: "B" },
        { id: 23, text: "Identify the error: 'He suggested me to join the club.'", options: ["A. suggested", "B. me", "C. to join", "D. the club"], answer: "B" },
        { id: 24, text: "Choose the correct word: 'I can’t _____ the answer.'", options: ["A. remember", "B. remind", "C. memorize", "D. remindful"], answer: "A" },
        { id: 25, text: "Complete the sentence: 'If it _____ tomorrow, we will cancel the trip.'", options: ["A. rains", "B. rained", "C. will rain", "D. raining"], answer: "A" },
        { id: 26, text: "Choose the correct word: 'I have _____ friends than you.'", options: ["A. less", "B. fewer", "C. little", "D. few"], answer: "B" },
        { id: 27, text: "Identify the type of sentence: 'Close the door!'", options: ["A. Declarative", "B. Interrogative", "C. Imperative", "D. Exclamatory"], answer: "C" },
        { id: 28, text: "Choose the correct phrasal verb: 'She _____ up late last night.'", options: ["A. stayed", "B. stayed up", "C. get up", "D. woke"], answer: "B" },
        { id: 29, text: "Complete the sentence: 'He will call you as soon as he _____ home.'", options: ["A. gets", "B. got", "C. will get", "D. get"], answer: "A" },
        { id: 30, text: "Choose the correct conjunction: 'I like coffee, _____ I don’t like tea.'", options: ["A. and", "B. but", "C. so", "D. because"], answer: "B" },
        { id: 31, text: "Find the synonym of 'Rapid':", options: ["A. Fast", "B. Slow", "C. Weak", "D. Weakly"], answer: "A" },
        { id: 32, text: "Choose the correct word: 'I’m not used _____ cold weather.'", options: ["A. to", "B. with", "C. at", "D. by"], answer: "A" },
        { id: 33, text: "Select the correct sentence:", options: ["A. He has visited London last year.", "B. He visited London last year.", "C. He has visit London last year.", "D. He visiting London last year."], answer: "B" },
        { id: 34, text: "Identify the correct sentence:", options: ["A. Neither of them were ready.", "B. Neither of them was ready.", "C. None of them was ready.", "D. Either of them was ready."], answer: "B" },
        { id: 35, text: "Choose the correct word: 'She is looking forward _____ meeting you.'", options: ["A. to", "B. for", "C. at", "D. in"], answer: "A" },
        { id: 36, text: "Find the error: 'He is very good in playing tennis.'", options: ["A. good", "B. in", "C. playing", "D. tennis"], answer: "B" },
        { id: 37, text: "Complete the sentence: 'It’s high time we _____ leave.'", options: ["A. leaves", "B. left", "C. leave", "D. will leave"], answer: "B" },
        { id: 38, text: "Choose the correct verb: 'He _____ to school every day.'", options: ["A. walk", "B. walks", "C. walking", "D. walked"], answer: "B" },
        { id: 39, text: "Identify the type of clause: 'Although it rained, we went hiking.'", options: ["A. Main clause", "B. Subordinate clause", "C. Relative clause", "D. Noun clause"], answer: "B" },
        { id: 40, text: "Choose the correct preposition: 'She is good _____ mathematics.'", options: ["A. at", "B. in", "C. on", "D. for"], answer: "A" },
        { id: 41, text: "Find the antonym of 'Generous':", options: ["A. Stingy", "B. Kind", "C. Polite", "D. Brave"], answer: "A" },
        { id: 42, text: "Choose the correct word: 'He is responsible _____ the project.'", options: ["A. for", "B. with", "C. of", "D. at"], answer: "A" },
        { id: 43, text: "Select the correct sentence:", options: ["A. I wish I know the answer.", "B. I wish I knew the answer.", "C. I wish I known the answer.", "D. I wish I knowing the answer."], answer: "B" },
        { id: 44, text: "Complete: 'If I _____ you, I would apologize.'", options: ["A. was", "B. were", "C. am", "D. will be"], answer: "B" },
        { id: 45, text: "Find the synonym of 'Important':", options: ["A. Significant", "B. Trivial", "C. Minor", "D. Useless"], answer: "A" },
        { id: 46, text: "Choose the correct form: 'He insisted that she _____ present.'", options: ["A. is", "B. be", "C. was", "D. being"], answer: "B" },
        { id: 47, text: "Select the correct sentence:", options: ["A. She doesn’t likes pizza.", "B. She doesn’t like pizza.", "C. She don’t like pizza.", "D. She not like pizza."], answer: "B" },
        { id: 48, text: "Find the correct plural of 'Analysis':", options: ["A. Analysises", "B. Analyses", "C. Analysis", "D. Analys"], answer: "B" },
        { id: 49, text: "Complete: 'He has been living here _____ five years.'", options: ["A. since", "B. for", "C. during", "D. from"], answer: "B" },
        { id: 50, text: "Choose the correct conditional form: 'If she _____ earlier, she would have caught the bus.'", options: ["A. left", "B. had left", "C. leaves", "D. will leave"], answer: "B" }
    ],

    // ========================= IT-BASIC 50 CÂU =========================
    'it-basic': [
{ id: 1, text: "Địa chỉ IP nào được sử dụng để trỏ đến máy cục bộ (localhost)?", options: ["A. 192.168.1.1", "B. 127.0.0.1", "C. 8.8.8.8", "D. 255.255.255.0"], answer: "B" },
{ id: 2, text: "Trong mô hình OSI, tầng nào chịu trách nhiệm mã hóa và giải mã dữ liệu?", options: ["A. Application Layer", "B. Presentation Layer", "C. Session Layer", "D. Transport Layer"], answer: "B" },
{ id: 3, text: "Lệnh Git nào dùng để tải về repository từ GitHub?", options: ["A. git commit", "B. git push", "C. git clone", "D. git pull"], answer: "C" },
{ id: 4, text: "Thiết bị nào sau đây là thiết bị ngoại vi đầu vào?", options: ["A. Monitor", "B. Printer", "C. Mouse", "D. Speaker"], answer: "C" },
{ id: 5, text: "RAM là viết tắt của?", options: ["A. Read Access Memory", "B. Random Access Memory", "C. Real Application Module", "D. Remote Access Method"], answer: "B" },
{ id: 6, text: "CPU là gì trong máy tính?", options: ["A. Bộ nhớ tạm", "B. Bộ xử lý trung tâm", "C. Thiết bị lưu trữ", "D. Card đồ họa"], answer: "B" },
{ id: 7, text: "Thiết bị nào sau đây là thiết bị xuất?", options: ["A. Keyboard", "B. Mouse", "C. Printer", "D. Scanner"], answer: "C" },
{ id: 8, text: "HDD và SSD khác nhau như thế nào?", options: ["A. SSD cơ học, HDD điện tử", "B. HDD cơ học, SSD điện tử", "C. Cả hai đều giống nhau", "D. Chỉ tốc độ khác nhau"], answer: "B" },
{ id: 9, text: "Hệ điều hành nào chịu trách nhiệm quản lý tài nguyên phần cứng?", options: ["A. Windows", "B. Linux", "C. macOS", "D. Tất cả đều đúng"], answer: "D" },
{ id: 10, text: "Lệnh Git nào dùng để lưu lại thay đổi vào repository local?", options: ["A. git commit", "B. git push", "C. git pull", "D. git merge"], answer: "A" },
{ id: 11, text: "Subnet mask 255.255.255.0 tương ứng với lớp mạng nào?", options: ["A. Class A", "B. Class B", "C. Class C", "D. Class D"], answer: "C" },
{ id: 12, text: "Thiết bị nào dùng để kết nối nhiều máy tính trong mạng LAN?", options: ["A. Router", "B. Switch", "C. Modem", "D. Hub"], answer: "B" },
{ id: 13, text: "Port 80 thường dùng cho giao thức nào?", options: ["A. FTP", "B. HTTP", "C. HTTPS", "D. SMTP"], answer: "B" },
{ id: 14, text: "SQL là viết tắt của gì?", options: ["A. Structured Query Language", "B. Simple Query Language", "C. Standard Query List", "D. System Query Language"], answer: "A" },
{ id: 15, text: "HTTPS khác HTTP ở điểm gì?", options: ["A. Không khác gì", "B. HTTPS có bảo mật SSL/TLS", "C. HTTP nhanh hơn HTTPS", "D. HTTPS không dùng cổng 80"], answer: "B" },
{ id: 16, text: "Trong Git, lệnh nào dùng để xem trạng thái các file?", options: ["A. git status", "B. git log", "C. git diff", "D. git branch"], answer: "A" },
{ id: 17, text: "Thiết bị nào dùng để lưu trữ tạm thời dữ liệu đang chạy?", options: ["A. HDD", "B. RAM", "C. SSD", "D. ROM"], answer: "B" },
{ id: 18, text: "IP private nào sau đây thường dùng trong mạng LAN?", options: ["A. 192.168.1.1", "B. 8.8.8.8", "C. 1.1.1.1", "D. 172.20.10.5"], answer: "A" },
{ id: 19, text: "VPN dùng để làm gì?", options: ["A. Kết nối mạng cục bộ", "B. Tạo kết nối mạng riêng ảo bảo mật", "C. Lưu trữ dữ liệu", "D. Phân tích dữ liệu"], answer: "B" },
{ id: 20, text: "Trong cơ sở dữ liệu, khóa chính (Primary Key) có đặc điểm gì?", options: ["A. Có thể trùng lặp", "B. Không thể trùng lặp và định danh duy nhất", "C. Không quan trọng", "D. Chỉ dùng trong NoSQL"], answer: "B" },
{ id: 21, text: "Thiết bị nào sau đây là thiết bị ngoại vi hỗ trợ in ấn 3D?", options: ["A. 3D Printer", "B. Scanner", "C. Monitor", "D. Mouse"], answer: "A" },
{ id: 22, text: "Trong hệ điều hành, RAM ảo (Virtual Memory) dùng để làm gì?", options: ["A. Lưu trữ vĩnh viễn dữ liệu", "B. Mở rộng RAM vật lý bằng ổ cứng", "C. Tăng tốc CPU", "D. Bảo vệ file hệ thống"], answer: "B" },
{ id: 23, text: "Firewall dùng để làm gì?", options: ["A. Chống virus", "B. Bảo vệ mạng khỏi truy cập trái phép", "C. Sao lưu dữ liệu", "D. Tối ưu CPU"], answer: "B" },
{ id: 24, text: "Trong Git, lệnh nào dùng để tạo nhánh mới?", options: ["A. git branch", "B. git merge", "C. git clone", "D. git checkout"], answer: "A" },
{ id: 25, text: "Trong mô hình OSI, tầng Transport chịu trách nhiệm gì?", options: ["A. Chuyển dữ liệu từ máy gửi đến máy nhận", "B. Mã hóa dữ liệu", "C. Truyền dữ liệu vật lý", "D. Quản lý địa chỉ IP"], answer: "A" },
{ id: 26, text: "Trong bảo mật thông tin, SSL/TLS dùng để làm gì?", options: ["A. Lưu trữ dữ liệu", "B. Mã hóa kết nối giữa client và server", "C. Tối ưu mạng", "D. Quản lý cơ sở dữ liệu"], answer: "B" },
{ id: 27, text: "Các hệ tin toán chuyên dụng như SCADA dùng cho lĩnh vực nào?", options: ["A. Giáo dục", "B. Công nghiệp và điều khiển", "C. Y tế", "D. Giao thông"], answer: "B" },
{ id: 28, text: "Thiết bị nào sau đây là thiết bị lưu trữ ngoài?", options: ["A. SSD gắn trong", "B. USB Flash Drive", "C. RAM", "D. CPU"], answer: "B" },
{ id: 29, text: "Trong Git, lệnh nào dùng để cập nhật repository từ remote?", options: ["A. git push", "B. git fetch", "C. git commit", "D. git init"], answer: "B" },
{ id: 30, text: "Các giao thức TCP và UDP khác nhau như thế nào?", options: ["A. TCP không tin cậy, UDP tin cậy", "B. TCP tin cậy, UDP không tin cậy", "C. Cả hai đều giống nhau", "D. UDP dùng để lưu trữ"], answer: "B" },
{ id: 31, text: "Trong cơ sở dữ liệu, Normalization dùng để làm gì?", options: ["A. Tăng dữ liệu", "B. Tối ưu cấu trúc và loại bỏ trùng lặp", "C. Bảo mật dữ liệu", "D. Xóa bảng"], answer: "B" },
{ id: 32, text: "Trong mạng máy tính, DNS dùng để làm gì?", options: ["A. Lưu trữ dữ liệu", "B. Dịch tên miền sang địa chỉ IP", "C. Quản lý firewall", "D. Tăng tốc mạng"], answer: "B" },
{ id: 33, text: "Trong Git, merge và rebase khác nhau điểm nào?", options: ["A. Merge gộp nhánh, rebase tái sắp xếp commit", "B. Merge xóa nhánh, rebase giữ nguyên", "C. Merge nhanh hơn rebase", "D. Không khác gì"], answer: "A" },
{ id: 34, text: "Trong an toàn thông tin, phishing là gì?", options: ["A. Tấn công mạng giả mạo để lấy thông tin", "B. Virus máy tính", "C. Sao lưu dữ liệu", "D. Firewall"], answer: "A" },
{ id: 35, text: "Trong hệ thống lưu trữ, RAID 1 dùng để làm gì?", options: ["A. Tăng tốc đọc ghi", "B. Sao lưu dữ liệu dự phòng (mirroring)", "C. Giảm dung lượng", "D. Nén dữ liệu"], answer: "B" },
{ id: 36, text: "Trong mạng LAN, switch khác router ở điểm nào?", options: ["A. Switch kết nối nhiều máy trong LAN, router kết nối mạng khác nhau", "B. Router kết nối LAN, switch kết nối WAN", "C. Không khác gì", "D. Switch dùng Internet, router dùng LAN"], answer: "A" },
{ id: 37, text: "Trong hệ điều hành, file system NTFS của Windows có đặc điểm gì?", options: ["A. Không hỗ trợ phân quyền", "B. Hỗ trợ phân quyền và lưu trữ lớn", "C. Chỉ dùng cho Linux", "D. Chỉ dùng ổ USB"], answer: "B" },
{ id: 38, text: "Trong cơ sở dữ liệu, Index dùng để làm gì?", options: ["A. Sao lưu dữ liệu", "B. Tăng tốc truy vấn", "C. Xóa dữ liệu", "D. Tối ưu mạng"], answer: "B" },
{ id: 39, text: "Trong bảo mật, mật khẩu mạnh nên có đặc điểm nào?", options: ["A. Ngắn và dễ nhớ", "B. Dài, gồm chữ, số, ký tự đặc biệt", "C. Chỉ chữ", "D. Chỉ số"], answer: "B" },
{ id: 40, text: "Trong Git, lệnh nào dùng để xem lịch sử commit?", options: ["A. git log", "B. git status", "C. git branch", "D. git fetch"], answer: "A" },
{ id: 41, text: "Thiết bị ngoại vi nào dùng để quét ảnh hoặc tài liệu?", options: ["A. Printer", "B. Scanner", "C. Keyboard", "D. Monitor"], answer: "B" },
{ id: 42, text: "Trong mô hình mạng OSI, tầng Network chịu trách nhiệm gì?", options: ["A. Truyền vật lý", "B. Định tuyến và địa chỉ IP", "C. Mã hóa dữ liệu", "D. Quản lý session"], answer: "B" },
{ id: 43, text: "Trong Git, lệnh git push dùng để làm gì?", options: ["A. Gửi commit từ local lên remote repository", "B. Lấy dữ liệu từ remote về", "C. Xem lịch sử commit", "D. Tạo nhánh mới"], answer: "A" },
{ id: 44, text: "Trong hệ thống lưu trữ, RAID 0 dùng để làm gì?", options: ["A. Sao lưu dữ liệu", "B. Tăng tốc độ đọc/ghi bằng cách striping", "C. Giảm dung lượng", "D. Nén dữ liệu"], answer: "B" },
{ id: 45, text: "Trong bảo mật, tấn công DDoS nhằm mục đích gì?", options: ["A. Lấy dữ liệu", "B. Làm nghẽn dịch vụ mạng", "C. Sao lưu dữ liệu", "D. Tăng tốc mạng"], answer: "B" },
{ id: 46, text: "Trong quản trị cơ sở dữ liệu, SQL Injection là gì?", options: ["A. Tấn công nhập dữ liệu sai cú pháp SQL", "B. Sao lưu dữ liệu", "C. Mã hóa dữ liệu", "D. Phân quyền người dùng"], answer: "A" },
{ id: 47, text: "Trong Git, lệnh git checkout dùng để làm gì?", options: ["A. Chuyển nhánh hoặc commit", "B. Xem trạng thái", "C. Tạo repository mới", "D. Lấy dữ liệu từ remote"], answer: "A" },
{ id: 48, text: "Trong mạng máy tính, VLAN dùng để làm gì?", options: ["A. Kết nối Internet", "B. Phân vùng mạng logic", "C. Sao lưu dữ liệu", "D. Tăng tốc CPU"], answer: "B" },
{ id: 49, text: "Trong hệ thống chuyên dụng SCADA, dữ liệu thường thu thập từ đâu?", options: ["A. Máy tính cá nhân", "B. Cảm biến và thiết bị điều khiển", "C. Internet", "D. Email"], answer: "B" },
{ id: 50, text: "Hãy trình bày sự khác biệt cơ bản giữa SQL và NoSQL.", options: ["A. SQL dùng tài liệu, NoSQL dùng bảng", "B. SQL là quan hệ, NoSQL là phi quan hệ", "C. SQL chỉ lưu trữ số, NoSQL lưu trữ mọi loại dữ liệu", "D. Không có sự khác biệt cơ bản"], answer: "B" }
]

};

return bank[subject] || [];
}


// Cập nhật giá trị hiển thị tổng số câu hỏi khi DOM đã tải
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ai-info').innerHTML = `Chọn số câu hỏi và nhấn **Bắt đầu Quiz**. Tổng số câu hỏi trong ngân hàng: **${getQuizBank('ai').length} câu**. Điểm tối đa: **10 điểm**.`;
    document.getElementById('english-info').innerHTML = `Chọn số câu hỏi và nhấn **Bắt đầu Quiz**. Tổng số câu hỏi trong ngân hàng: **${getQuizBank('english').length} câu**. Điểm tối đa: **10 điểm**.`;
    document.getElementById('it-basic-info').innerHTML = `Chọn số câu hỏi và nhấn **Bắt đầu Quiz**. Tổng số câu hỏi trong ngân hàng: **${getQuizBank('it-basic').length} câu**. Điểm tối đa: **10 điểm**.`;
});


// ----------------------------------------------------
// --- QUIZ LOGIC (Core Functionality) ---
// ----------------------------------------------------

const MAX_SCORE = 10;

window.currentQuizState = {
    subject: null,
    activeQuestions: [],
    numQuestions: 0,
    timeLimit: 0, 
    timerInterval: null,
    startTime: null,
    isSubmitted: false,
    userAnswers: {} 
};

function startQuiz(subject) {
    const state = window.currentQuizState;
    if (state.timerInterval) clearInterval(state.timerInterval);
    if (state.isSubmitted || state.numQuestions > 0) resetQuiz(subject); 

    const bank = getQuizBank(subject);
    const numSelect = document.getElementById(`${subject}-num-questions`);
    const numQuestions = parseInt(numSelect.value);
    
    state.subject = subject;
    state.numQuestions = numQuestions;
    state.timeLimit = (numQuestions === 10 ? 20 : numQuestions === 20 ? 40 : 60) * 60; 
    state.isSubmitted = false;
    state.userAnswers = {};

    // 1. Lấy câu hỏi ngẫu nhiên
    let allQuestions = bank.slice();
    if (bank.length < numQuestions) {
            alert(`Cảnh báo: Ngân hàng câu hỏi ${subject} không đủ ${numQuestions} câu! Đang sử dụng tối đa (${bank.length}) câu có sẵn.`);
            state.activeQuestions = allQuestions;
            state.numQuestions = allQuestions.length;
    } else {
        allQuestions.sort(() => Math.random() - 0.5);
        state.activeQuestions = allQuestions.slice(0, numQuestions);
    }

    // 2. Render Quiz và Status Panel
    renderQuizContent(subject, state.activeQuestions);
    renderStatusPanel(subject, state.activeQuestions);

    // 3. Hiển thị và ẩn nút/panel
    document.getElementById(`${subject}-quiz-content`).style.display = 'block';
    document.getElementById(`${subject}-info`).style.display = 'none';
    document.getElementById(`${subject}-result-summary`).style.display = 'none'; 
    document.getElementById('question-status-panel').style.display = 'block';
    document.getElementById('floating-timer').style.display = 'block';
    
    // Hiển thị nút Nộp bài tương ứng và ẩn các nút Nộp bài khác
    document.querySelectorAll('.submit-panel-btn').forEach(btn => btn.style.display = 'none');
    document.getElementById(`${subject}-submit-btn`).style.display = 'flex';

    // 4. Bắt đầu đếm ngược
    state.startTime = Date.now();
    startTimer(subject);
}

// Giữ nguyên các hàm renderQuizContent, generateQuestionHtml, renderStatusPanel, handleAnswerChange, updateStatusPanel, updateCurrentQuestionStatus, startTimer.

function renderQuizContent(subject, questions) {
    const quizContent = document.getElementById(`${subject}-quiz-content`);
    quizContent.innerHTML = '';
    questions.forEach((q, index) => {
        const qHtml = generateQuestionHtml(q, index + 1, subject);
        quizContent.innerHTML += qHtml;
    });

    questions.forEach(q => {
            const radios = quizContent.querySelectorAll(`input[name="${subject}-q${q.id}"]`);
            radios.forEach(radio => {
                radio.addEventListener('change', (e) => handleAnswerChange(subject, q.id, e.target.value));
            });
    });
}

function generateQuestionHtml(question, index, subject) {
    const qId = `${subject}-q${question.id}`;
    let optionsHtml = question.options.map((opt, i) => {
        const optionValue = opt.charAt(0);
        return `
            <div class="answer-option">
                <input type="radio" id="${qId}-${i}" name="${qId}" value="${optionValue}" />
                <label for="${qId}-${i}">${opt.substring(2).trim()}</label>
            </div>
        `;
    }).join('');
    
    return `
        <div id="${qId}" class="quiz-question-box" data-question-id="${question.id}">
            <p class="question-text"><strong>Câu ${index}:</strong> ${question.text}</p>
            ${optionsHtml}
        </div>
    `;
}

function renderStatusPanel(subject, questions) {
    const grid = document.getElementById('status-grid');
    grid.innerHTML = '';

    questions.forEach((q, index) => {
        const qIndex = index + 1;
        const item = document.createElement('div');
        item.className = 'status-item';
        item.id = `status-item-${subject}-${q.id}`;
        item.innerText = qIndex;
        item.dataset.index = qIndex;
        
        item.addEventListener('click', () => {
                document.getElementById(`${subject}-q${q.id}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        grid.appendChild(item);
    });
    updateStatusPanel(subject);
}

function handleAnswerChange(subject, questionId, selectedAnswer) {
    const state = window.currentQuizState;
    state.userAnswers[questionId] = selectedAnswer;

    // Chỉ update ô tương ứng
    const item = document.getElementById(`status-item-${subject}-${questionId}`);
    if (item) {
        item.classList.add('done');           // đổi màu khi chọn
        item.innerText = `${item.dataset.index}`;
    }
}


function updateStatusPanel(subject) {
    // Chỉ để update nội dung panel khi cần, KHÔNG remove done
    const state = window.currentQuizState;
    const panel = document.getElementById('question-status-panel');
    if (panel.style.display === 'none') return;

    state.activeQuestions.forEach((q) => {
        const itemId = `status-item-${subject}-${q.id}`;
        const item = document.getElementById(itemId);
        if (!item) return;

        // giữ done, chỉ update text nếu có chọn
        if (state.userAnswers[q.id]) {
            item.classList.add('done');
            item.innerText = `${item.dataset.index}`;
        } else {
            item.innerText = item.dataset.index;
        }
    });
}




function updateCurrentQuestionStatus(subject) {
    const state = window.currentQuizState;
    const currentItems = document.querySelectorAll('.status-item.current');
    currentItems.forEach(item => item.classList.remove('current'));

    let foundCurrent = false;
    
    state.activeQuestions.forEach((q) => {
            if (foundCurrent) return;
            const qBox = document.getElementById(`${subject}-q${q.id}`);
            const item = document.getElementById(`status-item-${subject}-${q.id}`);

            if (qBox && item) {
                const rect = qBox.getBoundingClientRect();
                if (rect.top >= 40 && rect.top <= 400) { 
                    item.classList.add('current');
                    foundCurrent = true;
                }
            }
    });
}

function startTimer(subject) {
    const state = window.currentQuizState;
    const display = document.getElementById(`floating-timer`);
    
    state.timerInterval = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
        const remainingSeconds = state.timeLimit - elapsedSeconds;
        
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        
        display.innerHTML = `<i class="fa-solid fa-clock"></i> ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (remainingSeconds <= 60) {
                display.classList.add('timer-warning'); 
        } else {
                display.classList.remove('timer-warning');
        }

        if (remainingSeconds <= 0) {
            clearInterval(state.timerInterval);
            display.innerHTML = `⏰ **Hết giờ!**`;
            submitQuiz(subject, true); 
            return;
        }
    }, 1000);
}


// HÀM SUBMIT QUIZ ĐÃ ĐƯỢC CUSTOM LẠI PHẦN ĐÁP ÁN
function submitQuiz(subject, isTimeout = false) {
const state = window.currentQuizState;
if (state.isSubmitted) return;
state.isSubmitted = true;
clearInterval(state.timerInterval);

const quizContent = document.getElementById(`${subject}-quiz-content`);
const resultsBox = document.getElementById(`${subject}-result-summary`);

// Ẩn nút nộp bài sau khi nộp
document.getElementById(`${subject}-submit-btn`).style.display = 'none';

let correctCount = 0;
const questionValue = MAX_SCORE / state.numQuestions;
let finalScore = 0;
let answeredCount = 0;

state.activeQuestions.forEach((q) => {
    const qBox = quizContent.querySelector(`[data-question-id="${q.id}"]`);
    const selectedAnswer = state.userAnswers[q.id];
    const statusItem = document.getElementById(`status-item-${subject}-${q.id}`);

    // disable input
    qBox.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);

    if (selectedAnswer) {
        answeredCount++;

        if (selectedAnswer === q.answer) {
            correctCount++;
            statusItem.classList.remove('wrong', 'unanswered');
            statusItem.classList.add('correct');
        } else {
            statusItem.classList.remove('correct', 'unanswered');
            statusItem.classList.add('wrong');
        }

        // đánh dấu đáp án trong quiz
        qBox.querySelectorAll('.answer-option').forEach(optionDiv => {
            const label = optionDiv.querySelector('label');
            const radio = optionDiv.querySelector('input[type="radio"]');
            const isCorrectOption = radio.value === q.answer;
            const isUserSelected = radio.value === selectedAnswer;

            if (isUserSelected) {
                if (isCorrectOption) {
                    optionDiv.classList.add('correct-answer');
                    label.innerHTML += `<span class="correct-mark"><i class="fa-solid fa-check"></i> (BẠN CHỌN ĐÚNG)</span>`;
                } else {
                    optionDiv.classList.add('wrong-answer');
                    label.innerHTML += `<span class="wrong-mark"><i class="fa-solid fa-xmark"></i> (BẠN CHỌN SAI)</span>`;
                }
            }

            if (isCorrectOption && !isUserSelected) {
                optionDiv.classList.add('correct-answer');
                label.innerHTML += `<span class="correct-mark"><i class="fa-solid fa-check"></i> (ĐÁP ÁN ĐÚNG)</span>`;
            }
        });

    } else {
        // Chưa trả lời
        if (statusItem) {
            statusItem.classList.remove('correct', 'wrong');
            statusItem.classList.add('unanswered');
        }

        // chỉ hiển thị đáp án đúng trong quiz
        qBox.querySelectorAll('.answer-option').forEach(optionDiv => {
            const radio = optionDiv.querySelector('input[type="radio"]');
            if (radio.value === q.answer) {
                optionDiv.classList.add('correct-answer');
                optionDiv.querySelector('label').innerHTML += `<span class="correct-mark"><i class="fa-solid fa-check"></i> (ĐÁP ÁN ĐÚNG)</span>`;
            }
        });
    }
});

finalScore = (correctCount * questionValue).toFixed(2);

resultsBox.style.display = 'block';
document.getElementById('floating-timer').style.display = 'none';

// scroll xuống kết quả
resultsBox.scrollIntoView({ behavior: 'smooth' });

resultsBox.innerHTML = `
    <h4>🎉 KẾT QUẢ BÀI THI 🎉</h4>
    <div class="result-score">${finalScore} / ${MAX_SCORE}</div>
    <div class="result-details">
        <p>Số câu đúng: <strong>${correctCount} / ${state.numQuestions}</strong></p>
        <p>Số câu chưa trả lời: <strong>${state.numQuestions - answeredCount}</strong></p>
        <p>Thời gian làm bài: <strong>${formatTime((Date.now() - state.startTime) / 1000)}</strong></p>
        <p style="margin-top: 15px; font-style: italic;">Chú thích: ô màu xám là ô người dùng chưa trả lời</p>
    </div>
`;
}



function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${minutes} phút ${seconds} giây`;
}

function resetQuiz(subject) {
    const state = window.currentQuizState;
    if (state.timerInterval) clearInterval(state.timerInterval);
    
    document.getElementById(`${subject}-quiz-content`).innerHTML = '';
    document.getElementById(`${subject}-quiz-content`).style.display = 'none';
    document.getElementById(`${subject}-info`).style.display = 'block';
    document.getElementById(`${subject}-result-summary`).style.display = 'none';
    
    document.getElementById('question-status-panel').style.display = 'none';
    document.getElementById('floating-timer').style.display = 'none';
    document.getElementById(`${subject}-submit-btn`).style.display = 'none';

    state.subject = null;
    state.activeQuestions = [];
    state.numQuestions = 0;
    state.isSubmitted = false;
    state.userAnswers = {};
    state.startTime = null;

    const timerDisplay = document.getElementById('floating-timer');
    timerDisplay.innerHTML = '';
    timerDisplay.classList.remove('timer-warning');

    // Đảm bảo nút điều khiển không bị khóa
    const controls = document.getElementById(`${subject}-controls`).querySelectorAll('button');
    controls.forEach(btn => btn.disabled = false);
}

// Hàm chuyển đổi công cụ (Giữ nguyên)
function showTool(id) {
    document.querySelectorAll('#tool-selector button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#tool-selector button[onclick="showTool('${id}')"]`);
    if(activeBtn) activeBtn.classList.add('active');
    document.querySelectorAll('.tool-box').forEach(t => t.style.display = "none");
    const tool = document.getElementById(id);
    if(tool) tool.style.display = "block";
    const subject = id.split('-')[1];

    document.getElementById('question-status-panel').style.display = 'none';
    document.getElementById('floating-timer').style.display = 'none';

    // Ẩn tất cả các nút nộp bài
    document.querySelectorAll('.submit-panel-btn').forEach(btn => btn.style.display = 'none');


    if (subject && window.currentQuizState && window.currentQuizState.subject !== subject) {
        resetQuiz(subject);
    }
    
    // Cập nhật thông tin tổng số câu hỏi khi chuyển tool
    document.getElementById(`${subject}-info`).innerHTML = `Chọn số câu hỏi và nhấn **Bắt đầu Quiz**. Tổng số câu hỏi trong ngân hàng: **${getQuizBank(subject).length} câu**. Điểm tối đa: **10 điểm**.`;
    
    // Kích hoạt event change để cập nhật thời gian
    document.getElementById(`${subject}-num-questions`).dispatchEvent(new Event('change'));
}

document.addEventListener('DOMContentLoaded', () => {
    showTool('quiz-ai');
});

// Cập nhật thời gian làm bài khi thay đổi số câu (Giữ nguyên)
document.querySelectorAll('select[id$="-num-questions"]').forEach(select => {
    select.addEventListener('change', function() {
        const numQuestions = parseInt(this.value);
        let timeLimit = 20;
        if (numQuestions === 20) timeLimit = 40;
        if (numQuestions === 40) timeLimit = 60;
        
        const subject = this.id.split('-')[0];
        document.getElementById(`${subject}-time-limit`).innerText = `Thời gian: ${timeLimit} phút`;
    });
});