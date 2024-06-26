class DummyService {
    static results = [
        { resultId: 0, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 1, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 2, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 3, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 4, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 5, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 6, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 7, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 8, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 9, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
        { resultId: 10, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 11, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 12, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 13, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 14, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 15, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 16, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 17, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 18, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 19, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 20, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
        { resultId: 21, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" }
    ]
    static pageSize = 10;

    static getResults = (page) => {
        const start = page * this.pageSize;
        const end = start + this.pageSize;
        return this.results.slice(start, end);
    }

    static getTotalPages() {
        return Math.ceil(this.results.length / this.pageSize);
    }
}

export default DummyService