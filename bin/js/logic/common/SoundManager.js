/************************************************
 *	创建人：    PZK
 *	创建时间：  2018-07-26
 *	功能说明：  声音管理器类
 *
 *	修改记录：
*************************************************/
var logic;
(function (logic) {
    var SoundManager = /** @class */ (function () {
        function SoundManager() {
        }
        SoundManager.initSoundSystem = function () {
            Laya.SoundManager.autoStopMusic = true;
            Laya.SoundManager.muted = false;
            Laya.SoundManager.setMusicVolume(0.5);
            Laya.SoundManager.setSoundVolume(1);
            //SoundManager.useAudioMusic=false;//静音,设备静音键就调用这个
        };
        SoundManager.playSound = function (soundurl, loops) {
            if (soundurl === void 0) { soundurl = ""; }
            if (loops === void 0) { loops = 1; }
            if (logic.GameConst.SOUND_ACTIVE) {
                if (soundurl == "") {
                    Laya.SoundManager.playSound(logic.CommonRes.SOUND_CLICKBTN, loops);
                }
                else {
                    Laya.SoundManager.playSound(soundurl, loops);
                }
            }
        };
        SoundManager.playMusic = function (musicurl, loops) {
            if (loops === void 0) { loops = 0; }
            if (logic.GameConst.MUSIC_ACTIVE) {
                Laya.SoundManager.playMusic(musicurl, loops);
            }
        };
        SoundManager.stopMusic = function () {
            Laya.SoundManager.stopMusic();
            //Laya.SoundManager.destroySound(CommonRes.SOUND_MAINBG);
        };
        SoundManager.stopAllSound = function () {
            Laya.SoundManager.stopAllSound();
        };
        SoundManager.stopAll = function () {
            Laya.SoundManager.stopMusic();
            Laya.SoundManager.stopAllSound();
        };
        SoundManager.resumeSound = function () {
            Laya.SoundManager.musicMuted = false;
            Laya.SoundManager.soundMuted = false;
            Laya.SoundManager.musicVolume = 1;
            Laya.SoundManager.soundVolume = 1;
        };
        return SoundManager;
    }());
    logic.SoundManager = SoundManager;
})(logic || (logic = {}));
//# sourceMappingURL=SoundManager.js.map