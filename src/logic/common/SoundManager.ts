module logic{
	export class SoundManager
    {
        public static initSoundSystem():void
        {
            Laya.SoundManager.autoStopMusic=true;
            Laya.SoundManager.muted=false;
            Laya.SoundManager.setMusicVolume(0.5);
            Laya.SoundManager.setSoundVolume(1);
            //SoundManager.useAudioMusic=false;//静音,设备静音键就调用这个
        } 

        public static playSound(soundurl:string = "",loops:number=1):void
        {
            if(GameConst.SOUND_ACTIVE)
            {
                if(soundurl == "")
                {
                    Laya.SoundManager.playSound(CommonRes.SOUND_CLICKBTN, loops);
                }
                else
                {
                    Laya.SoundManager.playSound(soundurl, loops);
                }
            }
        }

        public static playMusic(musicurl:string,loops:number=0):void
        {
            if(GameConst.MUSIC_ACTIVE)
            {
                Laya.SoundManager.playMusic(musicurl,loops);
            }
        }

        public static stopMusic():void
        {
            Laya.SoundManager.stopMusic();
            //Laya.SoundManager.destroySound(CommonRes.SOUND_MAINBG);
        }

        public static stopAllSound():void
        {
            Laya.SoundManager.stopAllSound();
        }

        public static stopAll():void
        {
            Laya.SoundManager.stopMusic();
            Laya.SoundManager.stopAllSound();
        }

        public static resumeSound():void
        {
            Laya.SoundManager.musicMuted=false;
            Laya.SoundManager.soundMuted=false;
            Laya.SoundManager.musicVolume=1;
            Laya.SoundManager.soundVolume=1;
        }
    }
}