const History = (props) => (
    <div class="container mt-5 pt-2 pt-lg-3">
        <UnvarifyAlert />
        <div class="mb-5">
            <div class="h2">網站介紹</div>
            <hr id="introduction" />
            <p class="px-2">《命運石之門》（原名：Steins;Gate[註 1]）是5pb.所製作的一款視覺小說遊戲，於2009年10月15日發行。這部作品是繼《CHAOS;HEAD》之後，5pb.與Nitro+合作企劃的「妄想科學ADV系列」冒險遊戲（ADV）的第二作：假想科學ADV。《Steins;Gate》的「Steins」（命運石）一詞取自物理學家阿爾伯特·愛因斯坦（Einstein，アインシュタイン），故事中也涉及愛因斯坦創立的相對論的物理學要素。[3]本作在日本發售電腦遊戲前就已經有動畫化的消息。Windows版本於2010年8月26日發售。動畫於2011年4月5日開始首播，於首播第24話（2011年9月13日）完畢後，公布製作《劇場版 Steins;Gate》的消息。2015年3月宣布製作關於β世界線故事的新作，名為《Steins;Gate 0》，且於同期宣布動畫化[4]。發售日期為2015年12月10日。同年7月，為配合遊戲《Steins;Gate 0》，東京都會電視台重播《命運石之門》動畫，但第23話的內容卻與原版有相當大的分歧，同時原本預計播放第24話的時段將會改播特別節目，內容是《命運石之門0》的宣傳以及改編版23集的幕後花絮[5][6]。</p>
        </div>
        <div class="mb-5">
            <h2>最新歌曲</h2>
            <hr />
            <ul id="newsong" class="px-2">
                {/**/}
            </ul>
        </div>
        <div class="mb-5">
            <h2>熱門歌曲</h2>
            <hr />
            <ul id="hotsong" class="px-2">
                {/**/}
            </ul>
        </div>
    </div>
);
class UnvarifyAlert extends React.Component {
    setState() {
        let idToken = localStorage.getItem("id_token");
        if (idToken) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }
    componentWillMount() {
        this.setState();
    }
    render() {
        return (
            <div role="alert" class="alert alert-primary">填寫個人資料可以獲得更多會員功能!</div>
        );
    }
}
export default History;