// https://jsfiddle.net/onigetoc/wsgdxr4t/
let vidID, vidList, ext, videoList;

function parseMedia(url) {
  switch (true) {
    /* AUDIO */
    case /\.(mp4|m4p|m4v|mov)/i.test(url):
      return  {
        provider: 'mp4',
        id: "",
        list: "",
        mediaType: 'video',
        extention: getExt(url),
        type: 'video/mp4'
      };
      break;
      /* VIDEO */
    case /\.ogg/.test(url):
      return  {
        provider: 'ogg',
        id: "",
        list: "",
        mediaType: 'video',
        extention: getExt(url),
        type: 'video/ogg'
      };
      break;
    case /\.mpd/.test(url):  
      return {
        provider: 'application',
        id: "",
        list: "",
        mediaType: 'dash+xml',
        extention: getExt(url),
        type: 'application/dash+xml'
      };
      break;
    case /^rtmp:\/\//.test(url):  
      return  {
        provider: 'rtmp',
        id: "",
        list: "",
        mediaType: 'video',
        extention: getExt(url),
        type: 'video/rtmp'
      };
      break;
    case /\.m3u8/.test(url):
      return {
        provider: 'application',
        id: "",
        list: "",
        mediaType: 'video',
        extention: getExt(url),
        type: 'application/x-mpegurl'
      };
      break;
    case /\.f4m/.test(url):
      return {
        provider: 'application',
        id: "",
        list: "",
        mediaType: 'adobe-f4m',
        extention: getExt(url),
        type: 'application/adobe-f4m'
      };
      break;
    case /\.flv/.test(url):
      return {
        provider: 'video',
        id: "",
        list: "",
        mediaType: 'flv',
        extention: getExt(url),
        type: 'video/flv'
      };
      break;
    case /\.webm/.test(url):
      return {
        provider: 'video',
        id: "",
        list: "",
        mediaType: 'webm',
        extention: getExt(url),
        type: 'video/webm'
      };
      break;
    case /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/.test(url):

			vidList = '';

      videoId = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      vidID = url.match(videoId)[2];
      
      videoList = /[?&]list=([^#\&\?]+)/;
      match = url.match(videoList);
      if(match)
      	vidList = match[1];

      return {
        provider: 'youtube',
        id: vidID,
        list: vidList,
        mediaType: 'video',
        type: 'video/youtube'
      };
      break;
    case /\.?dailymotion.com/.test(url):
    
    vidList = '';
    
    var m = url.match(/(?:https?:\/\/)?(?:www\.)?dai\.?ly(motion)?(?:\.com)?\/?.*(?:video|embed)?(?:.*v=|v\/|\/)([a-z0-9]+)/i);
    // vidID = m ? m[2] || m[3] : null;
    if(m)
    	vidID = m[2];
      
      videoList = /https?.*dailymotion.com.*playlist\/(.*)/i;
			match = url.match(videoList);
      if(match)
      	vidList = match[1];
    
      return {
        provider: 'dailymotion',
        id: vidID,
        list: vidList,
        mediaType: 'video',
        type: 'video/dailymotion'
      };
      break;
      
    case /\.?vimeo.com/.test(url):
		vidList = '';

      videoId = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/i ;
      match = url.match(videoId);
      
     if (match)
     		vidID = match[2];

      return {
        provider: 'vimeo',
        id: vidID,
        list: '', // channel ?
        mediaType: 'video',
        type: 'video/vimeo'
      };
      break;
    default:
      console.log('could not find link type: "' + url + '" assuming is mp4');
      return {
        provider: 'mp4',
        id: '',
        list: '',
        mediaType: 'video',
        type: 'video/mp4'
      };
  }
};

function getExt(url) {
     ext = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2);
     return ext.split('?')[0];
}
// url = "https://www.youtube.com/watch?v=xdYFuCp3m9k&list=RDxdYFuCp3m9k"
// console.log(parseMedia(url));
