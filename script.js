// ==================== 影片資料區（這裡手動新增最方便） ====================
const videos = [
    {
        id: 1,
        title: "想想念念",
        thumbnail: "thumbnail/thumb1.jpg",     // ← 本地縮圖路徑
        embedCode: '<iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/v79ksia/?pub=4p9lu0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        id: 2,
        title: "無人之島",
        thumbnail: "thumbnail/thumb2.jpg",
        embedCode: '<iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/v79kssu/?pub=4p9lu0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        id: 3,
        title: "后羿搖",
        thumbnail: "thumbnail/thumb3.jpg",
        embedCode: '<iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/v79kt6s/?pub=4p9lu0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        id: 4,
        title: "Baby",
        thumbnail: "thumbnail/thumb4.jpg",
        embedCode: '<iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/v79ktac/?pub=4p9lu0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        id: 5,
        title: "Way Back Home",
        thumbnail: "thumbnail/thumb5.jpg",
        embedCode: '<iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/v79ktmi/?pub=4p9lu0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        id: 6,
        title: "猜不透DJ版",
        thumbnail: "thumbnail/thumb6.jpg",
        embedCode: '<iframe class="rumble" width="640" height="360" src="https://rumble.com/embed/v79kuc4/?pub=4p9lu0" frameborder="0" allowfullscreen></iframe>'
    },
    // ↓ 繼續在這裡新增影片 ↓
    // {
    //     id: 3,
    //     title: "你的第三部影片",
    //     thumbnail: "thumbnail/thumb3.jpg",
    //     embedCode: '<iframe src="https://rumble.com/embed/..." width="100%" height="100%" allowfullscreen></iframe>'
    // },
];

// ==================== 產生首頁卡片 ====================
function createCards() {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';

    videos.forEach(video => {
        const cardHTML = `
            <div class="card" data-id="${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                <div class="card-content">
                    <h3>${video.title}</h3>
                    <p>點擊觀看影片 →</p>
                </div>
            </div>
        `;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML;
        const card = tempDiv.firstElementChild;

        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${video.id}`;
        });

        grid.appendChild(card);
    });
}

// ==================== 初始化 ====================
if (!window.location.pathname.includes('detail.html')) {
    window.onload = createCards;
}