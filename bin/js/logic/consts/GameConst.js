var logic;
(function (logic) {
    var GameConst = /** @class */ (function () {
        function GameConst() {
        }
        GameConst.SCEEN_WIDTH = 1280;
        GameConst.SCEEN_HEIGHT = 720;
        //public static LOGIN_END:boolean = false;
        GameConst.SOUND_ACTIVE = true; //音效开关
        GameConst.MUSIC_ACTIVE = true; //音乐开关
        GameConst.APP_NAME = "book";
        GameConst.RANK_MAX_INDEX = 100; //排行榜最多显示的排名数
        return GameConst;
    }());
    logic.GameConst = GameConst;
    var UIRes = /** @class */ (function () {
        function UIRes() {
        }
        UIRes.BOOK = "book";
        UIRes.LOADING = "loading";
        return UIRes;
    }());
    logic.UIRes = UIRes;
    var CommonRes = /** @class */ (function () {
        function CommonRes() {
        }
        CommonRes.BG_LOADING = "lobby/bigimg/bg_loading.png";
        CommonRes.PRO_LOADING = "lobby/bigimg/progress_loading.png";
        CommonRes.PRO_LOADINGBAR = "lobby/bigimg/progress_loading$bar.png";
        CommonRes.SOUND_MAINBG = "lobby/audio/music/music_bg.mp3";
        CommonRes.SOUND_CLICKBTN = "lobby/audio/sound/cancle.ogg";
        CommonRes.MAINBG = "lobby/bigimg/bg.png";
        CommonRes.BIAOTI = "lobby/bigimg/bg_biaoti.png";
        CommonRes.BGDL = "lobby/bigimg/bg_dl.png";
        CommonRes.BG_JBYJ = "lobby/bigimg/bg_jbyj.png";
        CommonRes.BOUNDBG = "lobby/bigimg/boundbg.png";
        CommonRes.COMMONBG = "lobby/bigimg/commonbg.png";
        CommonRes.DESE = "lobby/bigimg/dese.png";
        CommonRes.DISE = "lobby/bigimg/dise.png";
        CommonRes.HENGXIAN = "lobby/bigimg/hengxian.png";
        CommonRes.HENGXIANKF = "lobby/bigimg/hx_kf.png";
        CommonRes.NIM0 = "lobby/bigimg/num0.png";
        CommonRes.SHUXIAN = "lobby/bigimg/shuxian.png";
        CommonRes.VIP_BG = "lobby/bigimg/vip_bg.png";
        CommonRes.DISE_CZ = "lobby/bigimg/dise_cz.png";
        CommonRes.GIRL_HS = "lobby/bigimg/girl_hs.png";
        CommonRes.LOGIN_ATLAS = "res/atlas/lobby/accountimg.atlas";
        CommonRes.EXCHANGE_ATLAS = "res/atlas/lobby/exchange.atlas";
        CommonRes.LOGINTWO_ATLAS = "res/atlas/lobby/login.atlas";
        CommonRes.MAIL_ATLAS = "res/atlas/lobby/mail.atlas";
        CommonRes.MAINIMG_ATLAS = "res/atlas/lobby/mainUI.atlas";
        CommonRes.PUBLIC_ATLAS = "res/atlas/lobby/public.atlas";
        CommonRes.RANK_ATLAS = "res/atlas/lobby/rank.atlas";
        CommonRes.RECHARGE_ATLAS = "res/atlas/lobby/recharge.atlas";
        CommonRes.SAGEDEPOSITBOX_ATLAS = "res/atlas/lobby/SafeDepositBox.atlas";
        CommonRes.SELECTHEAD_ATLAS = "res/atlas/lobby/selectHead.atlas";
        CommonRes.SELFINFORMATION_ATLAS = "res/atlas/lobby/selfInformation.atlas";
        CommonRes.SMELLIMG_ATLAS = "res/atlas/lobby/smellimg.atlas";
        return CommonRes;
    }());
    logic.CommonRes = CommonRes;
})(logic || (logic = {}));
//# sourceMappingURL=GameConst.js.map