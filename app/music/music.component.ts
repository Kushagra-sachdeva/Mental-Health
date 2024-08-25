import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = true;
  msaapPlaylist: Track[] = [
    {
      title: 'Better...',
      link: '/assets/video/Better.mp3'
    },
    {
      title: 'Blank Space...',
      link: '/assets/video/Blank.mp3'
    },
    {
      title: 'Believer...',
      link: '/assets/video/Imagine Dragons - Lil Wayne n Believer 128 Kbps(PagalWorldCom.Com).mp3'
    },
    {
      title: 'Intentions...',
      link: '/assets/video/Intentions - Justin Bieber 128 Kbps(pagalworldu.com).mp3'
    },
    {
      title: 'Lets See What The Night Can Do...',
      link: '/assets/video/Jason_Mraz_-_Lets_See_What_The_Night_Can_Do_.mp3'
    },
    {
      title: 'What A Man Gotta Do...',
      link: '/assets/video/Jonas Brothers - What A Man Gotta Do (Official Lyric Video).mp3'
    },
    {
      title: 'Fight Song...',
      link: '/assets/video/Rachel Platten - Fight Song.mp3'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
